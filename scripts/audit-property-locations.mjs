#!/usr/bin/env node
/** Audit the public RealtyFlow property summary without mutating inventory. */
import { readFile, writeFile } from "node:fs/promises";

const source = process.argv[2];
const output = process.argv[3];
if (!source) {
  console.error("Usage: node scripts/audit-property-locations.mjs <feed.json|https-url> [issues.csv]");
  process.exit(2);
}

const normalize = (v) => String(v || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const places = [
  ["santiago de la ribera", "Santiago de la Ribera", "Murcia"],
  ["san pedro del pinatar", "San Pedro del Pinatar", "Murcia"],
  ["los alcazares", "Los Alcázares", "Murcia"],
  ["san javier", "San Javier", "Murcia"],
  ["torre pacheco", "Torre Pacheco", "Murcia"],
  ["cartagena", "Cartagena", "Murcia"],
  ["aguilas", "Águilas", "Murcia"],
  ["mazarron", "Mazarrón", "Murcia"],
  ["pulpi", "Pulpí", "Almería"],
  ["san juan de los terreros", "San Juan de los Terreros", "Almería"],
  ["cuevas del almanzora", "Cuevas del Almanzora", "Almería"],
  ["almerimar", "Almerimar", "Almería"],
  ["mojacar", "Mojácar", "Almería"],
  ["garrucha", "Garrucha", "Almería"],
  ["roquetas de mar", "Roquetas de Mar", "Almería"],
  ["el ejido", "El Ejido", "Almería"],
  ["vera", "Vera", "Almería"],
  ["torrevieja", "Torrevieja", "Alicante"],
  ["villajoyosa", "Villajoyosa", "Alicante"],
  ["finestrat", "Finestrat", "Alicante"],
  ["altea", "Altea", "Alicante"],
  ["benidorm", "Benidorm", "Alicante"],
  ["guardamar", "Guardamar", "Alicante"],
  ["orihuela costa", "Orihuela Costa", "Alicante"],
  ["pinoso", "Pinoso", "Alicante"],
];
const matchPlace = (value) => {
  const normalized = normalize(value);
  return places.find(([key]) => new RegExp(`(^|[^a-z])${key}([^a-z]|$)`).test(normalized));
};
const expectedProvince = (region) => {
  const value = normalize(region);
  if (/costa (de )?almeria|almeria province/.test(value)) return "Almería";
  if (/costa calida|murcia/.test(value)) return "Murcia";
  if (/costa blanca|alicante/.test(value)) return "Alicante";
  return null;
};
const csv = (v) => `"${String(v ?? "").replaceAll('"', '""').replaceAll(/\r?\n/g, " ")}"`;

const response = /^https?:\/\//.test(source)
  ? await (await fetch(source, { signal: AbortSignal.timeout(30000) })).json()
  : JSON.parse(await readFile(source, "utf8"));
if (!Array.isArray(response)) throw Error("Expected a JSON array of properties");

const issues = [];
const refCounts = new Map();
const flag = (p, severity, code, expected = "", evidence = "") => issues.push({
  ref: p.ref || p.external_id || p.id || "", severity, code, town: p.town || "",
  region: p.location || p.region || "", expected, evidence,
});
for (const p of response) {
  const ref = p.ref || p.external_id || p.id || "";
  refCounts.set(ref, (refCounts.get(ref) || 0) + 1);
  const town = normalize(p.town);
  const region = p.location || p.region || "";
  const titlePlace = matchPlace([p.title, p.title_no, p.title_en, p.title_es].filter(Boolean).join(" "));
  const townPlace = matchPlace(p.town);
  const sourceProvince = expectedProvince(region);
  if (!p.town || /^(murcia|alicante|almeria|costa\s)/.test(town)) {
    flag(p, titlePlace ? "high" : "review", "BROAD_OR_MISSING_TOWN", titlePlace?.[1] || "verify locality", p.title || "");
  }
  if (titlePlace && townPlace && titlePlace[1] !== townPlace[1]) {
    flag(p, "review", "TITLE_TOWN_DIFFER", titlePlace[1], p.title || "");
  }
  if (titlePlace && sourceProvince && titlePlace[2] !== sourceProvince) {
    flag(p, "high", "TITLE_PROVINCE_CONFLICT", titlePlace[2], p.title || "");
  }
  if (townPlace && sourceProvince && townPlace[2] !== sourceProvince) {
    flag(p, "high", "TOWN_PROVINCE_CONFLICT", townPlace[2], p.town || "");
  }
  if (!region) flag(p, "review", "MISSING_REGION", "verify region");
}
for (const p of response) {
  const ref = p.ref || p.external_id || p.id || "";
  if (refCounts.get(ref) > 1) flag(p, "high", "DUPLICATE_REF", "unique ref");
}
const counts = Object.fromEntries([...new Set(issues.map((i) => i.code))].map((code) => [code, issues.filter((i) => i.code === code).length]));
console.log(JSON.stringify({ total: response.length, flaggedProperties: new Set(issues.map((i) => i.ref)).size, totalIssues: issues.length, byCode: counts, sample: issues.slice(0, 15) }, null, 2));
if (output) {
  await writeFile(output, ["ref", "severity", "code", "town", "region", "expected", "evidence"].join(",") + "\n" + issues.map((issue) => Object.values(issue).map(csv).join(",")).join("\n") + "\n");
}
