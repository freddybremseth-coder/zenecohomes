import fs from "node:fs";

// Build-time guard for the core translated navigation clusters.
// Extend this list when a new translated navigation page is introduced.
const clusters = [
  {
    no: "src/app/guide/page.tsx",
    en: "src/app/en/guides/page.tsx",
    de: "src/app/de/ratgeber/page.tsx",
    es: "src/app/es/guias/page.tsx",
    routes: { "nb-NO": "/guide", en: "/en/guides", "de-DE": "/de/ratgeber", "es-ES": "/es/guias", "x-default": "/guide" },
  },
  {
    no: "src/app/om-oss/page.tsx",
    // The international versions share the localized metadata factory.
    metadataFactory: "src/components/LocalizedMenuPage.tsx",
    routes: { "nb-NO": "/om-oss", en: "/en/about-us", "de-DE": "/de/ueber-uns", "es-ES": "/es/sobre-nosotros", "x-default": "/om-oss" },
  },
];

const errors = [];
for (const cluster of clusters) {
  for (const file of [cluster.no, cluster.en, cluster.de, cluster.es].filter(Boolean)) {
    const source = fs.readFileSync(file, "utf8");
    if (!source.includes("canonical:")) errors.push(`${file}: missing canonical`);
    for (const [locale, route] of Object.entries(cluster.routes)) {
      const variants = [`"${locale}": "${route}"`, `${locale}: "${route}"`];
      if (!variants.some((value) => source.includes(value))) errors.push(`${file}: missing hreflang ${locale} -> ${route}`);
    }
  }
  if (cluster.metadataFactory) {
    const factory = fs.readFileSync(cluster.metadataFactory, "utf8");
    for (const [locale, route] of Object.entries(cluster.routes)) {
      if (!factory.includes(route)) errors.push(`${cluster.metadataFactory}: missing route ${locale} -> ${route}`);
    }
    if (!factory.includes("languages")) errors.push(`${cluster.metadataFactory}: missing languages metadata`);
  }
}
if (errors.length) {
  console.error("SEO language audit failed:\n" + errors.map((error) => "- " + error).join("\n"));
  process.exit(1);
}
console.log("SEO language audit passed: core translated page clusters have reciprocal alternates.");
