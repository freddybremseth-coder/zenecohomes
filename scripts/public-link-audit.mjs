#!/usr/bin/env node
/**
 * Public link audit for ZenEcoHomes.
 *
 * Reads the live sitemap, checks published URLs and follows same-site anchor
 * links. Deliberately samples property detail pages to avoid issuing thousands
 * of RealtyFlow lookups in ordinary CI; use --full for an exhaustive sweep.
 *
 * Usage: node scripts/public-link-audit.mjs
 *        node scripts/public-link-audit.mjs --full
 *        node scripts/public-link-audit.mjs --limit=400 --property-sample=60
 */
const ORIGIN = (process.env.ZENECO_AUDIT_ORIGIN || "https://www.zenecohomes.com").replace(/\/$/, "");
const site = new URL(ORIGIN);
const full = process.argv.includes("--full");
const numericArg = (name, fallback) => {
  const arg = process.argv.find((item) => item.startsWith("--" + name + "="));
  const value = arg && Number(arg.split("=")[1]);
  return value && Number.isInteger(value) && value > 0 ? value : fallback;
};
const maxPages = numericArg("limit", full ? 12000 : 400);
const maxProperties = numericArg("property-sample", full ? 12000 : 64);
const concurrency = 5;
const propertyPath = /^\/(?:eiendommer|de\/immobilien|en\/properties|es\/propiedades)\/[^/]+\/?$/;
const ignoredPath = /^\/(?:_next|api|assets)\//;
const unavailable = [];
const broken = [];
const warnings = [];
const checked = new Map();
const queued = new Map();
const queue = [];
let propertyCount = 0;
let sitemapEntries = 0;
let legacyRedirectCandidates = 0;

function normalize(candidate, from = ORIGIN + "/") {
  try {
    if (/^(?:mailto:|tel:|javascript:|data:)/i.test(candidate)) return null;
    const url = new URL(candidate.replace(/&amp;/g, "&"), from);
    if (url.origin !== site.origin) return null;
    if (ignoredPath.test(url.pathname) || /\.(?:pdf|jpg|jpeg|png|webp|svg|ico|css|js|json|xml|txt|woff2?)$/i.test(url.pathname)) return null;
    url.hash = "";
    // Search/filter pages are represented by their pathname, not every query permutation.
    url.search = "";
    return url.href.replace(/\/$/, "") || ORIGIN;
  } catch {
    return null;
  }
}

function add(url, source = "sitemap") {
  const normalized = normalize(url);
  if (!normalized || checked.has(normalized) || queued.has(normalized)) return;
  if (propertyPath.test(new URL(normalized).pathname)) {
    if (propertyCount >= maxProperties) return;
    propertyCount++;
  }
  if (queue.length + checked.size >= maxPages * 3) return;
  queued.set(normalized, source);
  queue.push(normalized);
}

async function request(url) {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(20000),
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "user-agent": "ZenEcoHomes-LinkAudit/1.0 (+https://www.zenecohomes.com)",
    },
  });
  return { status: res.status, type: res.headers.get("content-type") || "", text: await res.text(), finalUrl: res.url };
}

function extractLinks(html, url) {
  const expression = /<a\b[^>]*?\bhref\s*=\s*(?:"([^"]*)"|'([^']*)')[^>]*>/gi;
  let match;
  while ((match = expression.exec(html))) {
    const href = match[1] || match[2] || "";
    if (href) add(new URL(href.replace(/&amp;/g, "&"), url).href, url);
  }
}

function selectEvenly(items, limit) {
  if (items.length <= limit) return items;
  if (limit === 1) return [items[0]];
  return Array.from({ length: limit }, (_, i) => items[Math.round(i * (items.length - 1) / (limit - 1))]);
}

async function seedLegacyRedirects() {
  try {
    const { readFile } = await import("node:fs/promises");
    const ts = (await import("typescript")).default;
    const source = (await readFile(new URL("../next.config.ts", import.meta.url), "utf8"))
      .replaceAll("import.meta.dirname", "process.cwd()");
    const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
    const { default: config } = await import("data:text/javascript;base64," + Buffer.from(js).toString("base64"));
    const redirects = await config.redirects();
    for (const redirect of redirects) {
      // Only literal on-site paths can be probed without inventing URL params.
      if (!redirect.source.startsWith("/") || /[:*()[\]]/.test(redirect.source)) continue;
      legacyRedirectCandidates++;
      add(ORIGIN + redirect.source, "legacy redirect");
    }
  } catch (error) {
    warnings.push("Redirect configuration could not be audited: " + String(error));
  }
}

async function seed() {
  for (const path of ["/", "/eiendommer", "/omrader", "/guide", "/magasin", "/bedriftshytte-spania", "/kjopsprosessen", "/min-side", "/de", "/en", "/es"]) {
    add(ORIGIN + path, "navigation");
  }
  await seedLegacyRedirects();
  let xml;
  try {
    const response = await request(ORIGIN + "/sitemap.xml");
    if (response.status !== 200 || !response.text.includes("<loc>")) throw new Error("Sitemap HTTP " + response.status);
    xml = response.text;
  } catch (error) {
    warnings.push("Sitemap unavailable: " + String(error));
    return;
  }
  const entries = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].replace(/&amp;/g, "&"));
  sitemapEntries = entries.length;
  const pages = entries.filter((value) => {
    try { return !propertyPath.test(new URL(value).pathname); } catch { return false; }
  });
  const properties = entries.filter((value) => {
    try { return propertyPath.test(new URL(value).pathname); } catch { return false; }
  });
  pages.forEach((value) => add(value));
  const perLocale = Math.max(1, Math.floor(maxProperties / 4));
  for (const prefix of ["/eiendommer/", "/de/immobilien/", "/en/properties/", "/es/propiedades/"]) {
    selectEvenly(properties.filter((value) => new URL(value).pathname.startsWith(prefix)), perLocale).forEach((value) => add(value));
  }
}

await seed();
let next = 0;
async function worker() {
  while (next < queue.length && checked.size < maxPages) {
    const url = queue[next++];
    if (checked.has(url)) continue;
    const from = queued.get(url);
    try {
      const result = await request(url);
      checked.set(url, result.status);
      if (result.status === 404 || result.status === 410) {
        broken.push({ url, status: result.status, linkedFrom: from });
      } else if (result.status >= 400) {
        unavailable.push({ url, status: result.status, linkedFrom: from });
      } else if (result.type.includes("text/html")) {
        if (/<h1\b[^>]*>\s*(?:Denne siden finnes ikke|Bolig ikke funnet|Property not found|Immobilie nicht gefunden)/i.test(result.text)) {
          broken.push({ url, status: "soft-404", linkedFrom: from });
        }
        extractLinks(result.text, result.finalUrl || url);
      }
    } catch (error) {
      checked.set(url, "request-error");
      unavailable.push({ url, status: "request-error", detail: String(error), linkedFrom: from });
    }
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));
const report = {
  origin: ORIGIN,
  date: new Date().toISOString(),
  sitemapEntries,
  legacyRedirectCandidates,
  legacyRedirectsChecked: [...checked.keys()].filter((url) => queued.get(url) === "legacy redirect").length,
  pagesChecked: checked.size,
  sampledPropertyUrls: [...checked.keys()].filter((url) => propertyPath.test(new URL(url).pathname)).length,
  broken,
  unavailable,
  warnings,
};
console.log(JSON.stringify(report, null, 2));
if (process.env.GITHUB_STEP_SUMMARY) {
  const { appendFile } = await import("node:fs/promises");
  await appendFile(process.env.GITHUB_STEP_SUMMARY,
    "### ZenEcoHomes link audit\n" +
    "- Sitemap entries: " + report.sitemapEntries + "\n" +
    "- Legacy redirects tested: " + report.legacyRedirectsChecked + " / " + report.legacyRedirectCandidates + "\n" +
    "- Pages checked: " + report.pagesChecked + "\n" +
    "- Property URLs sampled: " + report.sampledPropertyUrls + "\n" +
    "- 404 / 410 / soft-404: " + broken.length + "\n" +
    "- Other inaccessible pages: " + unavailable.length + "\n\n" +
    (broken.length ? broken.map((item) => "- " + item.status + " " + item.url + " (from " + item.linkedFrom + ")").join("\n") + "\n" : ""));
}
if (broken.length) process.exitCode = 1;
if (!checked.size) process.exitCode = 2;
