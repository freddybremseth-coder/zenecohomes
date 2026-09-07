import type { Locale } from "@/lib/i18n";

/**
 * Nivå A – flaggskip: manuelt kuraterte, godkjente «Freddys vurdering»-tekster for
 * de 30–50 boligene som skal ranke og konvertere. Når en boligs ref finnes her,
 * overstyrer denne teksten den auto-genererte vurderingen (Nivå B) på boligsiden.
 *
 * Formel (3–4 setninger):
 *   1) Hvem passer den for (målgruppe + bruk: helår/ferie/utleie)
 *   2) Det konkrete pluss (solforhold, utsikt, byggestandard, avstand flyplass/strand)
 *   3) Én ærlig nyanse (det du ville nevnt til en kunde)
 *   4) Neste steg (kort oppfordring)
 *
 * Slik legger du til en flaggskip-bolig:
 *   1. Finn boligens ref (vises i URL: /eiendommer/<REF>).
 *   2. Legg til en entry: "<REF>": { no: "…", de: "…", en: "…" } (de/en valgfritt).
 *   3. Bare godkjent tekst legges inn her – det som står her, vises live.
 *
 * Eksempel (fjern kommentaren og bytt REF med en ekte referanse):
 * "N2226": {
 *   no: "Dette er et trygt valg for paret som vil ha moderne standard uten vedlikeholdsstress. Sørvendt terrasse gir sol store deler av dagen, og du er under en halvtime fra Alicante lufthavn. Merk at fellesbassenget deles med et større kompleks — vil du ha privat basseng, se heller på villaene i samme område. Vil du vite om betalingsplanen har bankgaranti? Ta kontakt, så sjekker jeg.",
 * },
 */
export const FLAGSHIP_ASSESSMENTS: Record<string, Partial<Record<Locale, string>>> = {
  // Populeres med ekte boligreferanser etter hvert som flaggskipene velges ut.
};

export const FLAGSHIP_HEADING: Record<Locale, string> = {
  no: "Freddys vurdering",
  de: "Freddys Einschätzung",
  en: "Freddy's assessment",
};

/** Returnerer godkjent flaggskip-tekst for en ref, med fallback til norsk. */
export function getFlagshipAssessment(ref: string, locale: Locale): string | null {
  const entry = FLAGSHIP_ASSESSMENTS[ref];
  if (!entry) return null;
  return entry[locale] || entry.no || null;
}
