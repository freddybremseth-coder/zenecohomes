import { getInlandProperties } from "@/lib/inlandFeed";
import {
  getPropertyTown,
  getPropertyType,
  normalizeSearchText,
  type Property,
} from "@/lib/realtyflow";

const SHOWCASE_TOWNS = new Set(["aspe", "pinoso"]);
const APARTMENT_TYPES = new Set(["leilighet", "toppleilighet", "studioleilighet"]);

function isInlandCatalogProperty(property: Property): boolean {
  const type = normalizeSearchText(getPropertyType(property));
  return !APARTMENT_TYPES.has(type);
}

/**
 * Kuratert modellutvalg brukt som generell inspirasjon på /inland og som
 * fallback på stedssidene når det ikke finnes lokale treff.
 *
 * Aspe og Pinoso er bevisst valgt som dagens konkrete katalog for moderne
 * villaer og nybygg fordi prosjektene der er godt presentert i datakildene.
 * Utvalget er IKKE en geografisk begrensning på hvor ZenEco kan utvikle et
 * prosjekt. Når dette utvalget brukes utenfor Aspe/Pinoso skal UI-et tydelig
 * merke objektene som modeller/inspirasjon, ikke som lokale boliger.
 */
export function isInlandShowcaseProperty(property: Property): boolean {
  const town = normalizeSearchText(getPropertyTown(property) || property.town || property.location || "");
  if (!SHOWCASE_TOWNS.has(town)) return false;

  return isInlandCatalogProperty(property);
}

/**
 * Faktiske lokale treff for en stedsside. `getInlandProperties` bruker stedets
 * matchTerms mot town/location/title og inkluderer både RealtyFlow og eventuell
 * Inland XML-feed. Samme boligtypefilter som modellkatalogen brukes slik at
 * stedssidene fortsatt prioriterer villa/finca/tomt/nybygg fremfor leiligheter.
 */
export async function getInlandTownProperties(matchTerms: string[]): Promise<Property[]> {
  const properties = await getInlandProperties(matchTerms);
  return properties.filter(isInlandCatalogProperty);
}

export async function getInlandShowcaseProperties(): Promise<Property[]> {
  const properties = await getInlandProperties();
  return properties.filter(isInlandShowcaseProperty);
}
