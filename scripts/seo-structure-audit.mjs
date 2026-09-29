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

const properties = "src/app/eiendommer/page.tsx";
for (const href of ["/omrader", "/guide/kjope-bolig-i-spania", "/kjopsprosessen", "/visningstur"]) {
  requireText(properties, `href="${href}"`, "property-list internal link");
}
requireText(properties, "<BuyerMatchQuiz", "Boligmatch on /eiendommer");

const nextConfig = "next.config.ts";
const redirects = [
  ["/nybygg-costa-blanca", "/guide/nybygg-i-spania"],
  ["/nybygg-i-spania", "/guide/nybygg-i-spania"],
  ["/om-freddy", "/om-oss/freddy"],
  ["/inland", "/omrader/innlandet"],
  ["/tomter", "/omrader/innlandet/tomter"],
  ["/kjopsprosess/kjopsprosess-bolig-i-spania", "/guide/kjope-bolig-i-spania"],
  ["/kjopsprosess/finansiering-notar-nie-boligkjop-spania", "/guide/finansiering-notar-nie-boligkjop-spania"],
  ["/kjopsprosess/omkostninger-nybygg-spania", "/guide/omkostninger-nybygg-spania"],
  ["/kjopsprosess/bankgaranti-nybygg-spania", "/guide/bankgaranti-nybygg-spania"],
  ["/guide/flytte-til-spania-pensjonist", "/guide/flytte-til-spania-som-pensjonist"],
];
const config = read(nextConfig);
for (const [source, destination] of redirects) {
  if (!config.includes(`source: "${source}"`) || !config.includes(`destination: "${destination}"`)) {
    errors.push(`${nextConfig}: missing redirect ${source} -> ${destination}`);
  }
}

const articleView = "src/components/ArticleView.tsx";
requireText(articleView, 'href="/om-oss/freddy"', "guide author profile link");
requireText(articleView, "Sist oppdatert", "visible updated date");

const footer = "src/components/Footer.tsx";
for (const text of [
  'title: "Boliger og områder"',
  'title: "Kjøpe bolig"',
  'title: "Om Zen Eco Homes"',
  'title: "Kontakt"',
  'href="/personvern"',
  'href="/informasjonskapsler"',
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
