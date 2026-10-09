import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
const configSource = fs.readFileSync("next.config.ts", "utf8").replaceAll("import.meta.dirname", "process.cwd()");
const configJs = ts.transpileModule(configSource, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { default: loadedConfig } = await import(`data:text/javascript;base64,${Buffer.from(configJs).toString("base64")}`);
const redirects = await loadedConfig.redirects();
const hasRedirect = (source, destination) => redirects.some(r => r.source === source && r.destination === destination && r.permanent);

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

const buyingProcess = "src/app/kjopsprosessen/page.tsx";
for (const href of [
  "/guide/kjope-bolig-i-spania",
  "/guide/kostnader-boligkjop-spania",
  "/guide/boliglan-spansk-bank-nordmenn",
  "/guide/nie-skattenummer-spania",
  "/guide/juridiske-fallgruver-boligkjop-spania",
  "/guide/nybygg-i-spania",
  "/omrader",
  "/booking",
]) {
  requireText(buyingProcess, `href="${href}"`, "buying-process customer-journey internal link");
}
requireText(buyingProcess, 'Hva gjør <span className="human-name">Zen Eco Homes</span> <span className="unbroken-word">gjennom</span> kjøpsprosessen?', "customer-journey intent and brand-name protection");
requireText(buyingProcess, "Hvem gjør hva når du kjøper bolig i Spania?", "buyer/advisor/specialist responsibility split");
requireText(buyingProcess, "Hva er forskjellen på denne siden og guiden", "buying-process vs cornerstone intent separation");
if (fs.existsSync(path.join(root, "src/app/kjopsprosess/page.tsx"))) {
  errors.push("src/app/kjopsprosess/page.tsx: redirected legacy buying-process hub must not remain as duplicate content");
}
if (!hasRedirect("/kjopsprosess", "/kjopsprosessen")) {
  errors.push("next.config.ts: missing legacy /kjopsprosess -> /kjopsprosessen redirect");
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
  'label: "Boliger"',
  'label: "Områder"',
  'label: "Bedrift"',
  'label: "Om oss"',
  'label: "Meny"',
  'label: "Kundeomtaler"',
  'label: "Visningstur"',
  'label: "Slik hjelper vi deg"',
  'label: "Guide"',
  'label: "Magasin"',
  'label: "Min side"',
  'label: "Keyholding"',
  'label: "Få rådgivning"',
]) {
  requireText(nav, text, "approved Norwegian navigation structure");
}


// Keep the localized desktop/mobile navigation aligned with the approved Norwegian IA.
for (const text of [
  'label: "Properties"',
  'label: "Areas"',
  'label: "Corporate"',
  'label: "About us"',
  'label: "Menu"',
  'label: "Get advice"',
  'label: "Immobilien"',
  'label: "Regionen"',
  'label: "Unternehmen"',
  'label: "Über uns"',
  'label: "Menü"',
  'label: "Beratung erhalten"',
  'label: "Propiedades"',
  'label: "Zonas"',
  'label: "Empresas"',
  'label: "Sobre nosotros"',
  'label: "Menú"',
  'label: "Solicitar asesoramiento"',
]) {
  requireText(nav, text, "localized navigation parity");
}


// Localized menus must point to localized destinations, not Norwegian fallbacks.
for (const text of [
  'href: "/en/about-us"',
  'href: "/en/client-reviews"',
  'href: "/en/viewing-trip"',
  'href: "/en/corporate"',
  'href: "/en/corporate/guides"',
  'href: "/en/corporate/partners"',
  'href: "/en/magazine"',
  'href: "/de/ueber-uns"',
  'href: "/de/kundenstimmen"',
  'href: "/de/besichtigungsreise"',
  'href: "/de/unternehmen"',
  'href: "/de/unternehmen/ratgeber"',
  'href: "/de/unternehmen/partner"',
  'href: "/de/magazin"',
  'href: "/es/sobre-nosotros"',
  'href: "/es/opiniones-clientes"',
  'href: "/es/viaje-de-visitas"',
  'href: "/es/empresas"',
  'href: "/es/empresas/guias"',
  'href: "/es/empresas/colaboradores"',
  'href: "/es/revista"',
]) {
  requireText(nav, text, "localized menu destination");
}

requireText("src/components/SiteHeader.tsx", "<Breadcrumbs locale={locale}", "shared visible breadcrumbs");
requireText(properties, '"@type": "CollectionPage"', "CollectionPage schema on /eiendommer");
requireText(properties, '"@type": "BreadcrumbList"', "BreadcrumbList schema on /eiendommer");

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
  if (!hasRedirect(source, destination)) {
    errors.push(`${nextConfig}: missing redirect ${source} -> ${destination}`);
  }
}

for (const [source, destination] of [
  ["/kjopsprosess/finansiering-notar-nie-boligkjop-spania", "/guide/finansiere-bolig-i-spania"],
  ["/kjopsprosess/omkostninger-nybygg-spania", "/guide/nybygg-i-spania"],
  ["/kjopsprosess/bankgaranti-nybygg-spania", "/guide/nybygg-i-spania"],
  ["/guide/nybygg-finestrat-omradeguide", "/omrader/costa-blanca-nord/finestrat"],
  ["/guide/innlandet-finca-olivengard-spania", "/omrader/innlandet"],
  ["/guide/energieffektive-nybygg-spania", "/guide/nybygg-i-spania"],
  ["/guide/kjop-bolig-i-spania-na-eller-vente", "/magasin/kjop-bolig-i-spania-na-eller-vente"],
]) {
  if (!hasRedirect(source, destination)) {
    errors.push(`${nextConfig}: missing consolidation redirect ${source} -> ${destination}`);
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

// Corporate article routing integrity: every published Corporate article must
// resolve under /bedriftshytte-spania, be unique, and have a legacy /magasin redirect.
const magazineRouting = read("src/lib/magazine.ts");
if (!magazineRouting.includes("return silo ? SILO_META[silo].href : \"/magasin\";")) {
  errors.push("src/lib/magazine.ts: articleBasePath must use canonical SILO_META hrefs so Corporate articles resolve under /bedriftshytte-spania");
}
if (!hasRedirect("/corporate/:slug", "/bedriftshytte-spania/:slug")) {
  errors.push("next.config.ts: missing legacy Corporate redirect /corporate/:slug -> /bedriftshytte-spania/:slug");
}

const corporateContent = read("src/lib/corporate-content.ts");
const corporateRoute = "src/app/bedriftshytte-spania/[slug]/page.tsx";
const corporateSlugs = [...corporateContent.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const duplicateCorporateSlugs = corporateSlugs.filter((slug, index) => corporateSlugs.indexOf(slug) !== index);

if (duplicateCorporateSlugs.length) {
  errors.push(`src/lib/corporate-content.ts: duplicate Corporate article slugs: ${[...new Set(duplicateCorporateSlugs)].join(", ")}`);
}
if (corporateSlugs.length !== 10) {
  errors.push(`src/lib/corporate-content.ts: expected 10 consolidated Corporate cornerstone articles, found ${corporateSlugs.length}`);
}
for (const requiredSlug of [
  "hva-er-en-bedriftshytte-i-spania",
  "bedriftshytte-mot-hotell-og-leie",
  "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
]) {
  if (!corporateSlugs.includes(requiredSlug)) {
    errors.push(`src/lib/corporate-content.ts: missing related Corporate article "${requiredSlug}"`);
  }
}
requireText(corporateRoute, 'articlesInSilo("corporate")', "Corporate dynamic route static params");
requireText(corporateRoute, 'articleSilo(article) !== "corporate"', "Corporate route silo guard");

for (const slug of corporateSlugs) {
  const source = `/magasin/${slug}`;
  const destination = `/bedriftshytte-spania/${slug}`;
  if (!hasRedirect(source, destination)) {
    errors.push(`${nextConfig}: missing Corporate legacy redirect ${source} -> ${destination}`);
  }
}

const corporateGuideHub = read("src/app/bedriftshytte-spania/guider/page.tsx");
const mergedCorporateTargets = {
  "alicante-eller-valencia-flyplass-bedriftshytte": "hvilken-bolig-passer-som-bedriftshytte",
  "bedriftsvilla-eller-ansattleilighet": "hvilken-bolig-passer-som-bedriftshytte",
  "bedriftshytte-for-25-ansatte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
  "bedriftshytte-for-100-ansatte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
  "drifte-bedriftshytte-i-spania-fra-norge": "vedlikehold-nokkelhold-og-rengjoring-bedriftshytte",
  "nybygg-eller-bruktbolig-som-bedriftshytte": "hvilken-bolig-passer-som-bedriftshytte",
  "hvor-mange-kan-dele-en-bedriftshytte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
  "costa-blanca-nord-eller-sor-bedriftshytte": "hvilken-bolig-passer-som-bedriftshytte",
  "fem-feil-ved-kjop-av-bedriftshytte-i-spania": "slik-presenterer-du-bedriftshytte-for-styret",
  "rettferdig-bookingsystem-for-bedriftshytte": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
  "bedriftshytte-som-langsiktig-ansattgode": "kan-ansatte-bruke-bedriftseid-bolig-i-spania",
  "corporate-home-assessment-bedriftsvurdering": "slik-presenterer-du-bedriftshytte-for-styret",
  "firmabolig-for-ledersamlinger-og-team": "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
  "delt-bedriftshytte-for-flere-virksomheter": "medlemsbolig-i-spania-for-foreninger",
  "ledersamling-avdelingsreise-spania-hotell-eller-bedriftshytte": "bedriftshytte-mot-hotell-og-leie",
  "slik-beregner-cfo-hotellalternativ-bedriftshytte": "bedriftshytte-mot-hotell-og-leie",
  "bedriftshytte-styre-ledelse-avdelingsreiser-krav": "hvilken-bolig-passer-som-bedriftshytte",
  "arsbudsjett-bedriftshytte-spania": "bedriftshytte-mot-hotell-og-leie",
  "prisvekst-bolig-spania-business-case-bedriftshytte": "bedriftshytte-mot-hotell-og-leie",
  "feriebruk-vs-bedriftsbruk-firmabolig-spania": "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
  "beslutningsnotat-bedriftshytte-spania-mal": "slik-presenterer-du-bedriftshytte-for-styret",
  "bedriftshytte-alternativ-hotell-gjentatte-samlinger": "bedriftshytte-mot-hotell-og-leie",
  "storrelse-bolig-styre-teamsamlinger": "hvilken-bolig-passer-som-bedriftshytte",
  "kombinere-ansattgode-bedriftsbruk-samme-bolig": "fem-mater-bedrifter-kan-bruke-bolig-costa-blanca",
  "regnskapsforer-sporsmal-selskap-kjope-bolig-spania": "kjop-av-bolig-gjennom-selskap-i-spania",
  "partnerprosess-introduksjon-til-kjop": "partnerguide-introdusere-zen-corporate-homes",
};

for (const [retiredSlug, targetSlug] of Object.entries(mergedCorporateTargets)) {
  if (corporateContent.includes(`slug: "${retiredSlug}"`)) {
    errors.push(`src/lib/corporate-content.ts: retired Corporate article still active: ${retiredSlug}`);
  }
  if (corporateGuideHub.includes(`"${retiredSlug}"`)) {
    errors.push(`src/app/bedriftshytte-spania/guider/page.tsx: retired Corporate article still listed: ${retiredSlug}`);
  }
  requireText(nextConfig, `"${retiredSlug}": "${targetSlug}"`, "Corporate consolidation redirect map");
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
