import { getInlandProperties } from "@/lib/inlandFeed";
import {
  getPropertyTown,
  getPropertyType,
  normalizeSearchText,
  type Property,
} from "@/lib/realtyflow";

const SHOWCASE_TOWNS = new Set(["aspe", "pinoso"]);
const APARTMENT_TYPES = new Set(["leilighet", "toppleilighet", "studioleilighet"]);

/**
 * Kuratert innlandsutvalg brukt på /inland og alle stedssidene.
 *
 * ZenEco profilerer moderne villa/nybygg/tomt i innlandet. Dagens relevante
 * boligpool kommer fra Aspe og Pinoso. Vi filtrerer derfor eksplisitt på disse
 * byene og fjerner leilighetsprodukter, slik at grove feed-regioner fra sør ikke
 * kan lekke inn på innlandssidene.
 */
export function isInlandShowcaseProperty(property: Property): boolean {
  const town = normalizeSearchText(getPropertyTown(property) || property.town || property.location || "");
  if (!SHOWCASE_TOWNS.has(town)) return false;

  const type = normalizeSearchText(getPropertyType(property));
  return !APARTMENT_TYPES.has(type);
}

export async function getInlandShowcaseProperties(): Promise<Property[]> {
  const properties = await getInlandProperties();
  return properties.filter(isInlandShowcaseProperty);
}
