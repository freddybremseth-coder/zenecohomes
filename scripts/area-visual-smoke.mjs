import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.AREA_SMOKE_BASE || "http://127.0.0.1:3000";
const paths = [
  "/omrader",
  "/omrader/costa-blanca-nord",
  "/omrader/costa-blanca-nord/altea",
  "/omrader/costa-blanca-nord/villajoyosa",
  "/omrader/costa-blanca-sor",
  "/omrader/costa-blanca-sor/guardamar",
  "/omrader/costa-calida",
];
const viewports = {
  desktop: { width: 1440, height: 900, isMobile: false },
  mobile: { width: 390, height: 844, isMobile: true },
};
await mkdir("artifacts/area-smoke", { recursive: true });
const browser = await chromium.launch({ headless: true });
const reports = [];
let hardFailures = 0;

try {
  for (const [device, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, isMobile: viewport.isMobile, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const route of paths) {
      const pathName = route.replace(/^[/]/, "").replaceAll("/", "-");
      const issues = [];
      const networkImageErrors = [];
      page.on("response", response => {
        if ((response.url().includes("/_next/image") || response.url().includes("upload.wikimedia.org")) && response.status() >= 400) {
          networkImageErrors.push({ status: response.status(), url: response.url().slice(0, 230) });
        }
      });
      try {
        const response = await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 });
        if (!response || response.status() >= 400) issues.push("HTTP " + (response?.status() || "no response"));
        await page.locator("h1").first().waitFor({ timeout: 20000 });
        // Dismiss consent only for accurate screenshots, without accepting analytics.
        await page.getByRole("button", { name: /^Avvis$/ }).first().click({ timeout: 2500 }).catch(() => {});
        await page.waitForTimeout(1900);
        const details = await page.evaluate(() => {
          const h1 = document.querySelector("h1")?.textContent?.trim() || "";
          const visibleImages = [...document.images].filter(im => im.getBoundingClientRect().width > 0 && im.getBoundingClientRect().height > 0);
          const missing = visibleImages.filter(im => im.complete && im.naturalWidth === 0).map(im => im.alt || im.src.slice(0, 100));
          return {
            h1,
            horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 6,
            visibleImages: visibleImages.length,
            missing,
            neutralPanels: document.querySelectorAll(".resilient-image-placeholder").length,
            // Record live area-profile gaps separately from network failures.
            // These are editorial work items, not broken-image build failures.
            areaPhotoCoverage: [...document.querySelectorAll(".area-profile-card")].map(card => {
              const name = card.querySelector("h3")?.textContent?.trim() || "(ukjent)";
              const photo = card.querySelector(".area-profile-photo");
              const missingPhoto = photo?.textContent?.includes("Stedsfoto mangler for ") || false;
              const failedPhoto = !!photo?.querySelector(".resilient-image-placeholder") && !missingPhoto;
              const image = photo?.querySelector("img");
              return {
                name,
                status: missingPhoto ? "mangler-kilde" : failedPhoto ? "lasting-feilet" : image?.naturalWidth ? "lastet" : image ? "avventer-lasting" : "ukjent",
                source: image?.getAttribute("src") || null,
              };
            }),
            failedEditorialPanels: [...document.querySelectorAll(".resilient-image-placeholder")].map(el => el.getAttribute("aria-label") || "").filter(label => /fotografi fra stedet|dokumentert stedfoto/i.test(label)),
            hasGenericPlacePhoto: !!document.querySelector('.areas-page img[src*="/assets/areas.jpg"]'),
          };
        });
        if (details.horizontalOverflow) issues.push("Horizontal overflow on " + device);
        if (details.missing.length) issues.push("Broken visible images: " + details.missing.slice(0, 5).join("; "));
        if (details.hasGenericPlacePhoto) issues.push("Generic place-photo placeholder reintroduced");
        if (details.failedEditorialPanels.length) issues.push("Verified town photos unavailable: " + details.failedEditorialPanels.slice(0, 8).join("; "));
        const failedWikimediaRequests = networkImageErrors.filter(item => item.url.includes("upload.wikimedia.org") && item.status >= 400);
        if (failedWikimediaRequests.length) issues.push("Wikimedia browser requests failed: " + failedWikimediaRequests.length);
        if (!details.h1) issues.push("Missing heading");
        const filename = "artifacts/area-smoke/" + device + "-" + pathName + ".png";
        await page.screenshot({ path: filename, fullPage: true, timeout: 30000 });
        reports.push({ device, route, status: response?.status(), ...details, networkImageErrors, issues, screenshot: filename });
      } catch (err) {
        issues.push(err instanceof Error ? err.message : String(err));
        reports.push({ device, route, issues, networkImageErrors });
      }
      // The Playwright page is reused: prevent previous route listeners from accumulating.
      page.removeAllListeners("response");
      if (issues.length) hardFailures++;
    }
    await context.close();
  }
} finally {
  await browser.close();
}

await writeFile("artifacts/area-smoke/report.json", JSON.stringify(reports, null, 2));
// Consolidate distinct places from the desktop region pages only, avoiding
// double-counting the same photo on desktop and mobile.
const areaCoverage = reports
  .filter(item => item.device === "desktop" && /^\/omrader\/[^/]+$/.test(item.route))
  .flatMap(item => (item.areaPhotoCoverage || []).map(area => ({ region: item.route.split("/")[2], ...area })));
const coverageTotals = Object.fromEntries(
  ["lastet", "mangler-kilde", "lasting-feilet", "avventer-lasting", "ukjent"]
    .map(status => [status, areaCoverage.filter(item => item.status === status).length]),
);
await writeFile("artifacts/area-smoke/coverage.json", JSON.stringify({ totals: coverageTotals, areas: areaCoverage }, null, 2));
const coverageMd = [
  "# Redaksjonell bildedekning per område",
  "",
  "Dette er en rapport fra områdesidene i testmiljøet, ikke en påstand om bilderettigheter eller live tilgjengelighet for alle besøkende.",
  "",
  "| Område | Region | Bildestatus |",
  "| --- | --- | --- |",
  ...areaCoverage.sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name))
    .map(item => `| ${item.name.replaceAll("|", "/")} | ${item.region} | ${item.status} |`),
  "",
  `**Totalt: ${areaCoverage.length} områdekort.** Mangler dokumentert kilde: ${coverageTotals["mangler-kilde"]}. Mislykket innlasting: ${coverageTotals["lasting-feilet"]}.`,
  "",
  "Neste steg: erstatt bare manglende foto med stedsspesifikke bilder hvor motiv, fotograf og lisens er kontrollert.",
].join("\n");
await writeFile("artifacts/area-smoke/coverage.md", coverageMd);
console.log("AREA_COVERAGE_REPORT", areaCoverage.length, JSON.stringify(coverageTotals));
for (const item of areaCoverage.filter(item => item.status === "mangler-kilde")) {
  console.log("PHOTO_SOURCE_MISSING", item.region, item.name);
}
for (const item of reports) {
  console.log((item.issues.length ? "FAIL" : "PASS") + " " + item.device + " " + item.route +
    " | h1: " + (item.h1 || "none") + " | visible images " + (item.visibleImages ?? 0) +
    " | neutral panels " + (item.neutralPanels ?? 0) +
    " | remote errors " + item.networkImageErrors.length);
  item.issues.forEach(issue => console.error("ISSUE", item.device, item.route, issue));
}
console.log("AREA_VISUAL_SMOKE", reports.length, "routes tested,", hardFailures, "with issues");
if (hardFailures) process.exitCode = 1;
