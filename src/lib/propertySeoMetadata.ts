import { getLocalizedPropertyType, getPropertyTown, normalizeSearchText, type Property } from "@/lib/realtyflow";

/** SEO-only normalization; do not change editorial metadata on non-property pages. */
export function getPropertySeoPlace(property: Property, locale: "no" | "en" | "de" | "es"): string {
  const town = getPropertyTown(property);
  if (town && !/^(costa |murcia$|alicante$|almeria$)/i.test(normalizeSearchText(town))) return town;
  return locale === "de" ? "Spanien" : locale === "es" ? "España" : locale === "en" ? "Spain" : "Spania";
}

export function getPropertySeoType(property: Property, locale: "no" | "en" | "de"): string {
  const raw = normalizeSearchText(String(property.property_type || property.type || ""));
  const terms: Array<[RegExp, Record<"no" | "en" | "de", string>]> = [
    [/penthouse|atico|attic|toppleilighet/, { no: "Toppleilighet", en: "Penthouse", de: "Penthouse" }],
    [/studio|estudio/, { no: "Studioleilighet", en: "Studio apartment", de: "Studio" }],
    [/duplex|dúplex/, { no: "Toplansleilighet", en: "Duplex", de: "Maisonette" }],
    [/semi.?detached|tomannsbolig|pareado|doppelhaus/, { no: "Tomannsbolig", en: "Semi-detached home", de: "Doppelhaushälfte" }],
    [/townhouse|terraced|adosado|rekkehus|reihenhaus|quad/, { no: "Rekkehus", en: "Townhouse", de: "Reihenhaus" }],
    [/apartment|apartamento|leilighet|wohnung|flat|ground floor|top floor/, { no: "Leilighet", en: "Apartment", de: "Wohnung" }],
    [/villa|chalet|detached/, { no: "Villa", en: "Villa", de: "Villa" }],
    [/bungalow/, { no: "Bungalow", en: "Bungalow", de: "Bungalow" }],
    [/finca|country house|cortijo/, { no: "Finca", en: "Country house", de: "Landhaus" }],
    [/plot|terreno|parcela|tomt|grundst/, { no: "Tomt", en: "Plot", de: "Grundstück" }],
  ];
  // Explicitly localized property types take precedence over inferred feed values.
  const fields = property as Record<string, unknown>;
  const localized = fields[`property_type_${locale}`] || fields[`type_${locale}`];
  if (typeof localized === "string" && localized.trim()) return localized.trim();
  const match = terms.find(([pattern]) => pattern.test(raw));
  return match?.[1][locale] || getLocalizedPropertyType(property, locale);
}
