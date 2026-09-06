import type { Locale } from "@/lib/i18n";
import type { PropertyFilters } from "@/lib/realtyflow";
import { propertyListPathByLocale } from "@/lib/propertyRouting";

export const SITE_URL = "https://www.zenecohomes.com";

export type SavedSearchRow = {
  id: string;
  email: string;
  locale: Locale;
  filters: PropertyFilters;
  label: string | null;
  known_refs: string[] | null;
  active: boolean;
  token: string;
  last_notified_at: string | null;
  created_at: string;
};

const REGION_NAMES: Record<string, Record<Locale, string>> = {
  "costa-blanca-nord": { no: "Costa Blanca Nord", de: "Costa Blanca Nord", en: "Costa Blanca North" },
  "costa-blanca-sor": { no: "Costa Blanca Sør", de: "Costa Blanca Süd", en: "Costa Blanca South" },
  "costa-calida": { no: "Costa Cálida", de: "Costa Cálida", en: "Costa Cálida" },
  innlandet: { no: "Innlandet", de: "Inland", en: "Inland" },
};

const TYPE_NAMES: Record<string, Record<Locale, string>> = {
  villa: { no: "Villa", de: "Villa", en: "Villa" },
  leilighet: { no: "Leilighet", de: "Wohnung", en: "Apartment" },
  penthouse: { no: "Penthouse", de: "Penthouse", en: "Penthouse" },
  rekkehus: { no: "Rekkehus", de: "Reihenhaus", en: "Townhouse" },
  bungalow: { no: "Bungalow", de: "Bungalow", en: "Bungalow" },
};

const L = {
  allAreas: { no: "Alle områder", de: "Alle Gegenden", en: "All areas" },
  allTypes: { no: "Alle boligtyper", de: "Alle Typen", en: "All types" },
  from: { no: "fra", de: "ab", en: "from" },
  to: { no: "opptil", de: "bis", en: "up to" },
  minSize: { no: "min.", de: "min.", en: "min." },
} as const;

function euro(n: number, locale: Locale): string {
  const nf = new Intl.NumberFormat(locale === "no" ? "nb-NO" : locale === "de" ? "de-DE" : "en-GB");
  return `€ ${nf.format(n)}`;
}

/** Menneskelesbar oppsummering av et lagret søk, f.eks. «Villa i Costa Blanca Nord · fra € 300 000». */
export function describeFilters(filters: PropertyFilters, locale: Locale): string {
  const parts: string[] = [];
  const type = filters.type ? TYPE_NAMES[filters.type]?.[locale] || filters.type : L.allTypes[locale];
  const region = filters.region ? REGION_NAMES[filters.region]?.[locale] || filters.region : L.allAreas[locale];
  const inWord = locale === "de" ? "in" : locale === "en" ? "in" : "i";
  parts.push(filters.region ? `${type} ${inWord} ${region}` : `${type} · ${region}`);
  if (filters.minPrice) parts.push(`${L.from[locale]} ${euro(filters.minPrice, locale)}`);
  if (filters.maxPrice) parts.push(`${L.to[locale]} ${euro(filters.maxPrice, locale)}`);
  if (filters.minSize) parts.push(`${L.minSize[locale]} ${filters.minSize} m²`);
  return parts.join(" · ");
}

/** Bygger lenken til boligsøket med samme filtre, for aktuell språkversjon. */
export function buildSearchUrl(filters: PropertyFilters, locale: Locale): string {
  const base = `${SITE_URL}${propertyListPathByLocale[locale]}`;
  const p = new URLSearchParams();
  if (filters.region) p.set("region", filters.region);
  if (filters.type) p.set("type", filters.type);
  if (filters.minPrice) p.set("minPrice", String(filters.minPrice));
  if (filters.maxPrice) p.set("maxPrice", String(filters.maxPrice));
  if (filters.minSize) p.set("minSize", String(filters.minSize));
  const qs = p.toString();
  return qs ? `${base}?${qs}` : base;
}

export function unsubscribeUrl(token: string): string {
  return `${SITE_URL}/api/saved-search/unsubscribe?token=${encodeURIComponent(token)}`;
}

/** Normaliserer og validerer brukerinput til et rent PropertyFilters-objekt. */
export function sanitizeFilters(input: unknown): PropertyFilters {
  const raw = (input || {}) as Record<string, unknown>;
  const out: PropertyFilters = {};
  if (typeof raw.region === "string" && raw.region) out.region = raw.region.slice(0, 60);
  if (typeof raw.type === "string" && raw.type) out.type = raw.type.toLowerCase().slice(0, 40);
  const min = Number(raw.minPrice);
  const max = Number(raw.maxPrice);
  const size = Number(raw.minSize);
  if (Number.isFinite(min) && min > 0) out.minPrice = Math.round(min);
  if (Number.isFinite(max) && max > 0) out.maxPrice = Math.round(max);
  if (Number.isFinite(size) && size > 0) out.minSize = Math.round(size);
  return out;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
