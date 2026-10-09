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

const factData = data.slice(data.indexOf("const MUNICIPAL_COUNTS:"), data.indexOf("const EXPANDED_POPULATION:"));
const municipalityRows = [...factData.matchAll(/^  (?:"[^"]+"|[a-z]+): \[\d+, "[^"]+", "[AM]"\],?$/gm)];
assert.ok(municipalityRows.length >= 55, "Population coverage for all coastal and inland core areas unexpectedly shrank");
assertPresent(data, "EXPANDED_POPULATION[key]", "Fallback municipality facts for every public area");
assertPresent(data, 'value: 24592, year: 2025', "Altea population remains sourced");
assertPresent(data, 'value: 77327, year: 2025', "Benidorm population remains sourced");
assertPresent(data, 'year: 2025, municipality, source: region === "A" ? ALICANTE_CENSUS : MURCIA_CENSUS', "Source and municipality scope preserved");
assertPresent(data, "FINESTRAT_DISTRICTS: DistrictOverview[]", "Finestrat has distinct residential submarkets");
for (const district of ["Sierra Cortina", "Balcón de Finestrat", "Golf Bahía", "Finestrat gamleby", "La Cala de Finestrat"]) {
  assert.ok(data.includes('name: "' + district + '"'), "Missing Finestrat area: " + district);
}
assertPresent(data, 'districts: key === "finestrat" ? FINESTRAT_DISTRICTS : []', "Other areas remain unchanged");
assertPresent(tabs, 'facts.districts.length > 0', "Finestrat district cards must be visible");
assertPresent(tabs, "Varierer med delområde", "Do not imply one beach distance for every Finestrat housing area");
assertPresent(css, ".area-facts-neighborhoods-grid", "Responsive district design");
for (const [district, price] of [["Balcón de Finestrat",3272],["Golf Bahía",3450],["Finestrat Pueblo",3245],["Cala de Finestrat",3044]]) {
  assert.ok(data.includes("euroM2: " + price), "Missing Idealista market price " + district);
}
const morePrices = {
  Finestrat: {2026:3316,2025:3175,2024:2794,2023:2562,2022:2433},
  Polop: {2026:2911,2025:2653,2024:2606,2023:2256,2022:2182},
  Calpe: {2026:3496,2025:3288,2024:2945,2023:2679,2022:2476},
  "La Nucia": {2026:2504,2025:2251,2024:1943,2023:1728,2022:1558},
  Denia: {2026:3354,2025:3084,2024:2791,2023:2486,2022:2263},
  Torrevieja: {2026:2561,2025:2344,2024:2019,2023:1810,2022:1632},
};
for (const [town, series] of Object.entries(morePrices)) {
  const k = town.toLowerCase(), pos = data.indexOf(k.includes(" ") ? '  "' + k + '": {' : "  " + k + ": {", data.indexOf("const PRICE:"));
  assert.ok(pos > 0, "Missing sourced Idealista price history for " + town);
  const section = data.slice(pos, pos+520);
  for (const [year, euros] of Object.entries(series)) {
    assert.ok(section.includes(year + ": " + euros), "Incorrect Idealista annual value for " + town + "/" + year);
  }
}
console.log("PASS", municipalityRows.length, "municipal population records, 6 additional five-year price series and Finestrat neighborhood separation");


// Validate the complete Sep 2022–2026 values for each newly published
// geographic price series, and ensure submarkets are not confused with
// the wider municipality (Albir, Moraira and Orihuela Costa).
const newIdealista = {
  albir: [3627, 3416, 3111, 2941, 2677],
  villajoyosa: [3092, 2750, 2312, 2022, 1879],
  moraira: [4474, 4136, 3950, 3650, 3379],
  javea: [4166, 3927, 3324, 2997, 2809],
  xabia: [4166, 3927, 3324, 2997, 2809],
  "el campello": [3221, 3063, 2508, 2221, 2042],
  "guardamar del segura": [2643, 2347, 2058, 1843, 1756],
  "santa pola": [2829, 2438, 2079, 1828, 1594],
  "orihuela costa": [3058, 2894, 2532, 2306, 2195],
  "los alcazares": [2150, 1798, 1607, 1352, 1300],
  "san javier": [2108, 1809, 1455, 1340, 1314],
};
const priceSection = data.slice(data.indexOf("const PRICE:"), data.indexOf("const FINESTRAT_DISTRICTS:"));
for (const [name, values] of Object.entries(newIdealista)) {
  const selector = name.includes(" ") ? '  "' + name + '": {' : "  " + name + ": {";
  const begin = priceSection.indexOf(selector);
  assert.ok(begin >= 0, "Missing Idealista price series for " + name);
  const item = priceSection.slice(begin, begin + 600);
  const years = [2026, 2025, 2024, 2023, 2022];
  for (let index = 0; index < years.length; index++) {
    assert.ok(item.includes(years[index] + ": " + values[index]), "Wrong Sep " + years[index] + " price for " + name);
  }
  assert.ok(item.includes('date: "2026-09"'), name + " has no source period");
  assert.ok(item.includes("idealista.com/sala-de-prensa/"), name + " missing Idealista source URL");
}
const orihuelaSection = priceSection.slice(priceSection.indexOf('  "orihuela costa": {'), priceSection.indexOf('  "orihuela costa": {') + 280);
assert.ok(orihuelaSection.includes("ikke hele Orihuela"), "Orihuela Costa must never be labelled entire municipality");
const albirSection = priceSection.slice(priceSection.indexOf("  albir: {"), priceSection.indexOf("  albir: {") + 350);
assert.ok(albirSection.includes("L'Albir"), "Albir should use its own historic district, not Alfaz municipality price");
const morairaSection = priceSection.slice(priceSection.indexOf("  moraira: {"), priceSection.indexOf("  moraira: {") + 280);
assert.ok(morairaSection.includes("Moraira"), "Moraira must not use Teulada's municipal market series");
console.log("PASS", Object.keys(newIdealista).length, "localized Idealista price series and geographic scopes");

// Ensure that the editorial narrative always precedes the statistics,
 // including inland communities.
const coastalTownPage = read("src/app/omrader/[region]/[sted]/page.tsx");
const inlandTownPage = read("src/app/inland/[sted]/page.tsx");
assert.ok(coastalTownPage.indexOf('<section className="section split">') < coastalTownPage.indexOf("<AreaFactsTabs facts={areaFacts} />"), "Coast: Om must come before Facts");
assert.ok(inlandTownPage.indexOf('<section className="inland-town-story">') < inlandTownPage.indexOf("<AreaFactsTabs facts={areaFacts} />"), "Inland: Om must come before Facts");
console.log("PASS", "Om always precedes Fakta in coast and inland templates");

console.log("Area facts audit passed.");
