import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { loadTsModule } from "../scripts/load-ts-module.mjs";

const inventory = loadTsModule("src/lib/realtyflow.ts");
const seo = loadTsModule("src/lib/propertySeoMetadata.ts");
const routing = loadTsModule("src/lib/propertyRouting.ts");

test("only available, publicly visible listings qualify for sitemap and details", () => {
  const base = { ref: "TEST-1", status: "TILGJENGELIG", show_on_website: true, website_visible: true };
  assert.equal(inventory.isPubliclyAvailableProperty(base), true);
  for (const status of ["RESERVERT", "SOLGT", "INACTIVE", "REMOVED"]) {
    assert.equal(inventory.isPubliclyAvailableProperty({ ...base, status }), false, status);
  }
  assert.equal(inventory.isPubliclyAvailableProperty({ ...base, show_on_website: false }), false);
  assert.equal(inventory.isPubliclyAvailableProperty({ ...base, website_visible: false }), false);
  assert.equal(inventory.isPubliclyAvailableProperty({ ...base, show_on_website: true, website_visible: false }), false);
});

test("public list and detail queries reject removed inventory", async () => {
  const originalFetch = globalThis.fetch;
  const active = { ref: "ACTIVE", status: "TILGJENGELIG", show_on_website: true, website_visible: true };
  const sold = { ref: "SOLD", status: "SOLGT", show_on_website: true, website_visible: true };
  try {
    globalThis.fetch = async () => ({ ok: true, json: async () => [active, sold] });
    const listings = await inventory.getProperties(0, "zeneco");
    assert.deepEqual(listings.map(p => p.ref), ["ACTIVE"]);
    assert.equal(await inventory.getProperty("SOLD"), null);
    assert.equal((await inventory.getProperty("ACTIVE"))?.ref, "ACTIVE");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("property metadata labels use local towns and translated property types", () => {
  const property = { ref: "TEST-2", property_type: "Ground Floor Apartment", town: "Pinoso", location: "Costa Blanca South - Inland" };
  assert.equal(seo.getPropertySeoPlace(property, "en"), "Pinoso");
  assert.equal(seo.getPropertySeoPlace(property, "de"), "Pinoso");
  assert.equal(seo.getPropertySeoType(property, "en"), "Apartment");
  assert.equal(seo.getPropertySeoType(property, "de"), "Wohnung");
});

test("sitemap enumerates the full uncapped brand inventory in all four languages", () => {
  const source = fs.readFileSync("src/app/sitemap.ts", "utf8");
  assert.match(source, /getProperties\(0,\s*"zeneco"\)/);
  assert.match(source, /\["no",\s*"de",\s*"en",\s*"es"\]/);
  assert.match(source, /getPropertyDetailPath\(ref, locale\)/);
  const alternates = routing.propertyHreflang("TEST-3");
  assert.equal(new Set(Object.values(alternates)).size, 4);
  assert.equal(alternates["en"], "https://www.zenecohomes.com/en/properties/TEST-3");
});

test("document language follows locale without changing unrelated page metadata", () => {
  const proxy = fs.readFileSync("src/proxy.ts", "utf8");
  const layout = fs.readFileSync("src/app/layout.tsx", "utf8");
  assert.match(proxy, /x-zeneco-document-lang/);
  assert.match(layout, /<html lang="nb"/);
  assert.match(layout, /document\\.documentElement\\.lang/);
  assert.doesNotMatch(layout, /await headers\\(\\)/);
  for (const path of ["src/app/en/properties/[id]/page.tsx", "src/app/de/immobilien/[id]/page.tsx"]) {
    assert.match(fs.readFileSync(path, "utf8"), /getPropertySeoType/);
  }
});


test("German and English descriptions never fall back to Norwegian editorial text", () => {
  const norwegianOnly = {
    ref: "N10034", property_type: "Penthouse", town: "Pulpí", bedrooms: 2, bathrooms: 2,
    built_area: 73, description_no: "Moderne toppleilighet i Pulpí med 2 soverom og 2 bad.",
    editorial_no_approved: true,
    editorial_no: { intro_no: "Moderne toppleilighet i Pulpí med 2 soverom og 2 bad." },
  };
  assert.match(inventory.getLocalizedPropertyDescription(norwegianOnly, "no"), /soverom/);
  const german = inventory.getLocalizedPropertyDescription(norwegianOnly, "de");
  assert.match(german, /Schlafzimmer/);
  assert.doesNotMatch(german, /soverom|toppleilighet/);
  const english = inventory.getLocalizedPropertyDescription(norwegianOnly, "en");
  assert.match(english, /bedrooms/);
  assert.doesNotMatch(english, /soverom|toppleilighet/);
  assert.equal(inventory.getLocalizedPropertyDescription({ ...norwegianOnly, description_de: "Penthouse mit Blick auf das Meer." }, "de"), "Penthouse mit Blick auf das Meer.");
  assert.match(inventory.getLocalizedPropertyDescription({ ...norwegianOnly, description_de: "Boligen har 2 soverom." }, "de"), /Schlafzimmer/);
});

test("property detail propagates locale to gallery and footer", () => {
  const detail = fs.readFileSync("src/components/PropertyDetailView.tsx", "utf8");
  const gallery = fs.readFileSync("src/components/PropertyGallery.tsx", "utf8");
  assert.match(detail, /<PropertyGallery[^>]+locale=\{locale\}/);
  assert.match(detail, /<Footer locale=\{locale\}/);
  assert.match(gallery, /Alle Bilder ansehen/);
  assert.match(gallery, /View all images/);
});


test("cookie consent renders locale-specific text without changing analytics handling", () => {
  const source = fs.readFileSync("src/components/CookieConsentBanner.tsx", "utf8");
  for (const phrase of ["Wir respektieren Ihre Privatsphäre", "We respect your privacy", "Respetamos tu privacidad", "Vi respekterer personvernet ditt"]) {
    assert.ok(source.includes(phrase), phrase);
  }
  assert.ok(source.includes("setLocale(pathLocale"));
  assert.match(source, /COOKIE_CONSENT_EVENT/);
});
