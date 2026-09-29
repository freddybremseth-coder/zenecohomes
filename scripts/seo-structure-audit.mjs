import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function requireText(file, text, reason) {
  const content = read(file);
  if (!content.includes(text)) {
    errors.push(`${file}: missing ${reason}: ${text}`);
  }
}

const cornerstone = "src/app/guide/kjope-bolig-i-spania/page.tsx";
const cornerstoneLinks = [
  "/magasin/hvorfor-god-eiendomsradgiver-er-viktig",
  "/guide/omradeguide-eiendomskjop-i-spania",
  "/eiendommer",
  "/magasin/idealista-finn-ikke-alltid-til-a-stole-pa",
  "/om-oss",
  "/visningstur",
  "/guide/juridiske-fallgruver-boligkjop-spania",
  "/guide/nie-skattenummer-spania",
  "/kundeomtaler",
  "/kjopsprosessen",
  "/booking",
];
for (const href of cornerstoneLinks) {
  requireText(cornerstone, `href="${href}"`, "Erlend cornerstone internal link");
}

const editorialArticle = "src/lib/magazine.ts";
requireText(editorialArticle, 'slug: "det-du-ikke-ser-i-boligannonsen"', "area-first editorial article");
requireText(editorialArticle, 'author: { name: "Freddy Bremseth", href: "/om-oss/freddy" }', "linked Freddy author on editorial article");
const articleViewForEditorial = "src/components/ArticleView.tsx";
requireText(articleViewForEditorial, '"det-du-ikke-ser-i-boligannonsen": [', "contextual internal-link rules for area-first article");
for (const href of ["/omrader", "/guide/kjope-bolig-i-spania", "/visningstur", "/eiendommer"]) {
  requireText(articleViewForEditorial, `href: "${href}"`, "editorial article internal link");
}

const properties = "src/app/eiendommer/page.tsx";
for (const href of ["/omrader", "/guide/kjope-bolig-i-spania", "/kjopsprosessen", "/visningstur"]) {
  requireText(properties, `href="${href}"`, "property-list internal link");
}
requireText(properties, "<BuyerMatchQuiz", "Boligmatch on /eiendommer");
{
  const propertyContent = read(properties);
  const pageSizeMatch = propertyContent.match(/const pageSize = (\d+);/);
  const pageSize = pageSizeMatch ? Number(pageSizeMatch[1]) : NaN;
  if (!Number.isFinite(pageSize) || pageSize < 1 || pageSize > 24) {
    errors.push(`${properties}: property pagination must be between 1 and 24 items per page (found ${pageSizeMatch?.[1] || "none"})`);
  }
}

const home = read("src/app/page.tsx");
if (home.includes("<video")) {
  errors.push("src/app/page.tsx: autoplay/video hero returned; use optimized image hero for LCP/performance");
}
requireText("src/app/page.tsx", 'className="hero-video"', "optimized homepage hero asset");

const nav = "src/lib/i18n.ts";
for (const text of [
  'label: "Kjøpe bolig"',
  'label: "Kjøpsprosessen"',
  'label: "Visningstur"',
  'label: "Alle guider"',
  'label: "Magasin"',
]) {
  requireText(nav, text, "Kjøpe bolig navigation structure");
}

const magazinePage = "src/app/magasin/page.tsx";
requireText(magazinePage, "!articleSilo(article)", "Magazine editorial-only fallback separation");
const guidePage = "src/app/guide/page.tsx";
requireText(guidePage, 'articlesInSilo("guide")', "Guide silo article collection");

const nextConfig = "next.config.ts";
const config = read(nextConfig);

const literalRedirects = [
  ["/nybygg-costa-blanca", "/guide/nybygg-i-spania"],
  ["/nybygg-i-spania", "/guide/nybygg-i-spania"],
  ["/om-freddy", "/om-oss/freddy"],
  ["/inland", "/omrader/innlandet"],
  ["/tomter", "/omrader/innlandet/tomter"],
  ["/kjopsprosess/kjopsprosess-bolig-i-spania", "/guide/kjope-bolig-i-spania"],
  ["/guide/flytte-til-spania-pensjonist", "/guide/flytte-til-spania-som-pensjonist"],
];
for (const [source, destination] of literalRedirects) {
  if (!config.includes(`source: "${source}"`) || !config.includes(`destination: "${destination}"`)) {
    errors.push(`${nextConfig}: missing redirect ${source} -> ${destination}`);
  }
}

for (const slug of [
  "finansiering-notar-nie-boligkjop-spania",
  "omkostninger-nybygg-spania",
  "bankgaranti-nybygg-spania",
]) {
  const source = `/kjopsprosess/${slug}`;
  const destination = `/guide/${slug}`;
  if (!config.includes(`source: "${source}"`) || !config.includes(`destination: "${destination}"`)) {
    errors.push(`${nextConfig}: missing legacy redirect ${source} -> ${destination}`);
  }
}

const articleView = "src/components/ArticleView.tsx";
requireText(articleView, 'href: "/om-oss/freddy"', "guide author profile mapping");
requireText(articleView, "Sist oppdatert", "visible updated date");
requireText(articleView, '"@type": "BreadcrumbList"', "breadcrumb structured data on articles");

// Every active guide article should participate in the contextual internal-link
// cluster. The retired old buying-process article is intentionally excluded.
const magazine = read("src/lib/magazine.ts");
const articleViewContent = read(articleView);
const siloBlockStart = magazine.indexOf("const SILO_BY_SLUG");
const siloBlockEnd = magazine.indexOf("export function articleSilo");
const siloBlock = magazine.slice(siloBlockStart, siloBlockEnd);
const guideSlugs = [...siloBlock.matchAll(/"([^"]+)":\s*"guide"/g)].map((match) => match[1]);
const retiredGuideSlugs = new Set(["kjopsprosess-bolig-i-spania"]);

for (const slug of guideSlugs) {
  if (retiredGuideSlugs.has(slug)) continue;
  if (!articleViewContent.includes(`"${slug}": [`)) {
    errors.push(`${articleView}: active guide "${slug}" lacks contextual internal-link rules`);
  }
}

const booking = "src/app/booking/page.tsx";
requireText(booking, 'params.type === "infomote"', "info-meeting interest flow");
requireText(booking, 'variant="simple"', "low-friction booking form");
requireText("src/components/ContactForm.tsx", '"full" | "compact" | "simple"', "simple contact-form variant");

const llms = "public/llms.txt";
for (const text of [
  "[Kjøpe bolig i Spania]",
  "[Nybygg i Spania]",
  "[Alle guider]",
  "[Visningstur]",
]) {
  requireText(llms, text, "machine-readable guide hierarchy");
}

const footer = "src/components/Footer.tsx";
if (read(footer).includes("<form")) {
  errors.push(`${footer}: footer must not contain contact/booking forms`);
}
for (const text of [
  'title: "Boliger og områder"',
  'title: "Kjøpe bolig"',
  'title: "Om Zen Eco Homes"',
  'title: "Kontakt"',
  'href="/personvern"',
  'href="/informasjonskapsler"',
  "instagram.com/zenecohomesspain",
  "youtube.com/@ZenEcoHomes",
]) {
  requireText(footer, text, "footer/trust structure");
}

const sitemap = "src/app/sitemap.ts";
for (const route of [
  '"/eiendommer"',
  '"/omrader"',
  '"/guide/kjope-bolig-i-spania"',
  '"/kjopsprosessen"',
  '"/visningstur"',
  '"/booking"',
  '"/kundeomtaler"',
  '"/om-oss"',
  '"/magasin"',
  '"/bedriftshytte-spania"',
  '"/personvern"',
  '"/informasjonskapsler"',
  '"/omrader/innlandet/tomter"',
]) {
  requireText(sitemap, route, "Erlend sitemap route");
}

// Min side is intentionally noindex and therefore should not be in the XML sitemap,
// but it must remain discoverable to users from the footer.
requireText("src/app/min-side/page.tsx", "robots: { index: false", "noindex on private portal");
requireText(footer, 'href: "/min-side"', "Min side footer link");

if (errors.length) {
  console.error("\nSEO structure audit failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEO structure audit passed: Erlend IA, redirects and key internal links are intact.");
