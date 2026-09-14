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
 * Kuratert modellutvalg brukt på /inland og alle stedssidene.
 *
 * Aspe og Pinoso er bevisst valgt som dagens konkrete katalog for moderne
 * villaer og nybygg fordi prosjektene der er godt presentert i datakildene.
 * Utvalget er IKKE en geografisk begrensning på hvor ZenEco kan utvikle et
 * prosjekt. På stedsidene brukes disse objektene som boligmodeller/referanser;
 * kundereisen er område -> riktig tomt -> kvalitetssikring -> boligmodell.
 *
 * Vi filtrerer samtidig bort leilighetsprodukter og grove feed-treff fra andre
 * regioner, slik at modellkatalogen holder seg relevant for tomt + villa/nybygg.
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
