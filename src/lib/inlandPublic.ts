import { INLAND_BRAND, inlandTowns, type InlandTown } from "@/lib/inland";

export const PUBLIC_INLAND_BRAND = {
  ...INLAND_BRAND,
  tagline: "Tomter, moderne villaer og nybygg i innlandet – mer plass, natur og helårsliv",
  description:
    "Eiendomsrådgivning for tomter, moderne villaer, nybygg og utvalgte landeiendommer i innlandet rundt Biar, Villena, Sax, Castalla, Pinoso, Monóvar, Aspe, Novelda og Hondón-dalene.",
};

function canonicalTown(town: InlandTown): InlandTown {
  if (town.slug !== "biar") return town;

  return {
    ...town,
    title: "Tomt og moderne bolig i Biar",
    intro:
      "Biar er en historisk innlandsby i Alicante-provinsen med helårsservice, fjellandskap og landbruksområder rundt byen. Familien til Freddy har en oliveneiendom her, mens Freddy selv bor i Benidorm.",
    body: [
      "Rundt Biar finnes større tomter, oliven- og mandellunder og muligheter for både moderne boligprosjekter og eksisterende landeiendommer. For Zen Eco Homes er tomt og moderne nybygg hovedretningen når forholdene ligger til rette for det.",
      "Før kjøp bør byggbarhet, adkomst, vann, strøm og dokumentasjon avklares med de relevante fagpersonene. Biar kan passe godt for kjøpere som ønsker mer plass og et roligere helårsliv uten å gi avkall på tilgang til byer og kyst.",
    ],
    highlights: [
      "Historisk helårsby med lokal service",
      "Tomter og landbruksland rundt byen",
      "Familien har oliveneiendom i området",
    ],
  };
}

export const publicInlandTowns: InlandTown[] = inlandTowns.map(canonicalTown);

export function getPublicInlandTown(slug: string) {
  return publicInlandTowns.find((town) => town.slug === slug);
}
