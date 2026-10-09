import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (file) => readFileSync(new URL("../" + file, import.meta.url), "utf8");
const data = read("src/lib/areaFactData.ts");
const tabs = read("src/components/AreaFactsTabs.tsx");
const css = read("src/app/area-facts.css");
const coastal = read("src/app/omrader/[region]/[sted]/page.tsx");
const inland = read("src/app/inland/[sted]/page.tsx");
const layout = read("src/app/layout.tsx");

function assertPresent(text, literal, label) {
  assert.ok(text.includes(literal), label + " missing: " + literal);
  console.log("PASS", label);
}

assertPresent(coastal, "<AreaFactsTabs facts={areaFacts} />", "Facts on all coastal town pages");
assertPresent(inland, "<AreaFactsTabs facts={areaFacts} />", "Facts on all inland town pages");
assertPresent(coastal, "getTownAreaFacts(profile.name)", "Coastal location keyed by name");
assertPresent(inland, "getTownAreaFacts(town.name)", "Inland location keyed by name");
assertPresent(layout, 'import "./area-facts.css";', "Shared CSS imported");
assertPresent(css, ".area-facts-tabs button:focus-visible", "Visible keyboard focus");
assertPresent(css, "@media (max-width: 640px)", "Mobile layout");
assertPresent(tabs, 'role="tablist"', "ARIA tablist");
assertPresent(tabs, 'role="tab"', "ARIA tabs");
assertPresent(tabs, 'role="tabpanel"', "ARIA panel");
assertPresent(tabs, 'aria-selected={tab === item.id}', "ARIA selected state");
assertPresent(tabs, "ArrowRight", "Keyboard navigation");
assertPresent(tabs, "Home", "First and last tab navigation");
assertPresent(tabs, "Ikke verifisert", "Missing fact transparency");
assertPresent(tabs, "Kilde: {source.label}", "User-visible source metadata");
assertPresent(tabs, "Metoden ble endret i juli 2026", "2026 asking-price methodology caveat");
assertPresent(data, "municipality: \"Altea\"", "Municipality-scoped facts");
assertPresent(data, "municipality: \"Benidorm\"", "Municipality-scoped facts");
assertPresent(data, "value: 24592, year: 2025", "INE Altea population");
assertPresent(data, "value: 77327, year: 2025", "INE Benidorm population");
assertPresent(data, "NATIONALITIES[key] || null", "Nationalities shown only from curated sources");
assertPresent(data, "beachDistance: beachOverview(key, coords)", "Every town uses sourced or qualified coast proximity");
assertPresent(data, 'display: "0 m · kyststed"', "Coastal places shown with a clear coastal note");
assertPresent(data, "Grovt orienteringsmål i luftlinje", "Computed inland coast distances always carry caveat");
assertPresent(data, "CHECKED_BEACH_DISTANCE", "Sourced local beach-distance exceptions");
assert.ok(!tabs.includes('label="Restauranter"') && !tabs.includes('label="Barer og kaféer"'), "Unused restaurant/bar cards must be removed");
assert.ok(!tabs.includes("UtensilsCrossed") && !tabs.includes("area-facts-dining"), "Unused dining sections must be removed");
console.log("PASS", "restaurant/bar fields removed from public facts");
assertPresent(data, "airportDirectKm:", "Explicit flight-line airport distance");
assertPresent(tabs, "Luftlinje fra stedets sentrum", "Airport distance scope disclosed");
assertPresent(tabs, "Sammenligner september hvert år", "Price comparison period disclosed");

const overview = read("src/app/omrader/page.tsx");
const overviewStyle = read("src/app/areas-regions-v2.css");
assert.ok(overview.includes("<h2>{region.title}</h2>"), "Regional title must wrap between words");
assert.ok(!overview.includes("<NoBreakName name={region.title} />"), "Whole region name nowrap causes clipping");
assert.ok(overviewStyle.includes("font-size: clamp(2.05rem, 2.7vw, 3.2rem);"), "Oversized region title returned");
assert.ok(overviewStyle.includes("hyphens: none;"), "Place words must not be split with hyphens");
console.log("PASS", "regional titles wrap at word boundaries without clipping");

const expected = ["polop", "la nucia", "ciudad quesada", "rojales", "mutxamel", "finestrat"];
for (const place of expected) assert.ok(data.includes(place + ": {") || data.includes('"' + place + '": {'), "Missing verified beach reference for " + place);
for (const key of ["altea", "albir", "benidorm", "torrevieja", "ciudad quesada", "rojales"]) {
  const map = data.slice(data.indexOf("const NATIONALITIES:"), data.indexOf("const COASTAL_PLACES"));
  assert.ok(map.includes(key + ": {") || map.includes('"' + key + '": {'), "Missing nationality source for " + key);
}
console.log("PASS", "sourced nationality and nearby-beach samples");

const prices = {
  Altea: { 2026: 3504, 2025: 3361, 2024: 2984, 2023: 2859, 2022: 2531 },
  Benidorm: { 2026: 3824, 2025: 3456, 2024: 2953, 2023: 2542, 2022: 2296 },
};
for (const [name, series] of Object.entries(prices)) {
  const section = data.slice(data.indexOf("  " + name.toLowerCase() + ": {", data.indexOf("const PRICE")), data.indexOf("  },", data.indexOf("  " + name.toLowerCase() + ": {", data.indexOf("const PRICE"))));
  for (const [year, euro] of Object.entries(series)) {
    assert.ok(section.includes(year + ": " + euro), name + " missing verified price " + year);
  }
  for (const years of [1, 2, 3, 4]) {
    const base = series[2026 - years];
    const change = (series[2026] / base - 1) * 100;
    assert.ok(Number.isFinite(change) && change > 0 && change < 100, name + " invalid " + years + "y growth");
    console.log("PASS", name, years + "y", change.toFixed(1) + "%");
  }
}
console.log("Area facts audit passed.");
