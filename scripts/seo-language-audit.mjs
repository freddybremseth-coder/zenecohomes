import fs from "node:fs";
import assert from "node:assert/strict";

// Verify reciprocal alternate metadata for the four guide overview languages.
const guideRoutes = {
  "nb-NO": "/guide",
  "en": "/en/guides",
  "de-DE": "/de/ratgeber",
  "es-ES": "/es/guias",
  "x-default": "/guide",
};
for (const [file, canonical] of [
  ["src/app/guide/page.tsx", "/guide"],
  ["src/app/en/guides/page.tsx", "/en/guides"],
  ["src/app/de/ratgeber/page.tsx", "/de/ratgeber"],
  ["src/app/es/guias/page.tsx", "/es/guias"],
]) {
  const source = fs.readFileSync(file, "utf8");
  assert.ok(source.includes(`canonical: "${canonical}"`), `${file}: canonical missing`);
  for (const [lang, route] of Object.entries(guideRoutes)) {
    assert.ok(source.includes(`"${lang}": "${route}"`) || source.includes(`${lang}: "${route}"`), `${file}: missing ${lang} → ${route}`);
  }
}
const norwegian = fs.readFileSync("src/app/om-oss/page.tsx", "utf8");
for (const [lang, route] of Object.entries({
  "nb-NO": "/om-oss", en: "/en/about-us", "de-DE": "/de/ueber-uns", "es-ES": "/es/sobre-nosotros", "x-default": "/om-oss",
})) {
  assert.ok(norwegian.includes(`"${lang}": "${route}"`) || norwegian.includes(`${lang}: "${route}"`), `om-oss: missing ${lang}`);
}
const factory = fs.readFileSync("src/components/LocalizedMenuPage.tsx", "utf8");
assert.ok(factory.includes("languages"), "localized about pages must declare alternates");
assert.ok(factory.includes('about: { no: "/om-oss", en: "/en/about-us", de: "/de/ueber-uns", es: "/es/sobre-nosotros" }'), "localized About routes must stay reciprocal");
console.log("SEO hreflang audit passed for guide overview and about cluster.");
