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
assertPresent(data, "nationality: null", "No invented nationality distribution");
assertPresent(data, "restaurants: null", "No invented restaurant counts");
assertPresent(data, "bars: null", "No invented bar counts");
assertPresent(data, "airportDirectKm:", "Explicit flight-line airport distance");
assertPresent(tabs, "Luftlinje fra stedets sentrum", "Airport distance scope disclosed");
assertPresent(tabs, "Sammenligner september hvert år", "Price comparison period disclosed");

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
