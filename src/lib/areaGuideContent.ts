import { placeBooks, type PlaceBook } from "@/lib/books";
import {
  getPrimaryImage,
  getPropertyTown,
  normalizeSearchText,
  type AreaProfile,
  type Property,
} from "@/lib/realtyflow";

/**
 * Norske leseutdrag basert på Freddy Bremseths egne Let Me Guide You-manus.
 * De vises på ZenEcoHomes som redaksjonell områdekunnskap. Ekstern boklenke
 * skal først presenteres etter at leseren har fått selve områdeinnholdet.
 */
const AREA_EXCERPTS: Record<string, string[]> = {
  benidorm: [
    "Benidorm er byen mange tror de allerede kjenner. Høyhusene og strendene er synlige med én gang, men hverdagsbyen er mer sammensatt: gamlebyen, Levante, Poniente, La Cala og boligområdene i høyden gir svært forskjellige måter å bo på.",
    "Det viktige spørsmålet er derfor ikke om du liker Benidorm på ferie, men hvilken del av byen som passer en vanlig tirsdag i januar. Gangavstand, støy, helårsservice, transport og hvor mye turistintensitet du ønsker betyr mer enn postnummeret alene.",
  ],
  albir: [
    "Når du kjører fra Benidorm mot Albir endrer skalaen seg nesten umiddelbart. Havet og fjellene er fortsatt der, men livet foregår nærmere gaten: strand, promenade, boliger, restauranter og et internasjonalt miljø innenfor et mer oversiktlig område.",
    "For mange er Albir et kompromiss mellom aktivitet og ro. Men balanse er personlig: den som søker mye energi kan oppleve stedet som stille, mens den som vil ha en liten spansk landsby kan oppleve det som for internasjonalt.",
  ],
  altea: [
    "Altea er lett å forelske seg i visuelt, men kommunen består av flere helt forskjellige hverdager. Gamlebyen, sjøfronten, Cap Negret og La Olla, Altea la Vella, Sierra de Altea, Altea Hills og Mascarat fungerer ikke som ett og samme boligområde.",
    "Høydeforskjellene skaper utsikten mange ønsker, men påvirker også gange, bilbruk og avstand til service. Derfor bør du velge hvilken Altea-hverdag du ønsker før du velger selve boligen.",
  ],
  calpe: [
    "Peñón de Ifach gjør Calpe lett å kjenne igjen, men klippen forklarer ikke byen. Arenal-Bol, La Fossa, Cantal Roig, havnen, gamlebyen, saltsjøene og villaområdene i åssidene gir ulike rytmer og ulik grad av bilavhengighet.",
    "Når du har bodd her en stund slutter klippen å være et turistmotiv og blir et orienteringspunkt. Da blir de praktiske forskjellene viktigere: hvilken strand du bruker, om du kan gå til hverdagsbehovene dine, og om du ønsker leilighetsliv ved sjøen eller mer plass i høyden.",
  ],
  finestrat: [
    "Finestrat kan oppleves som tre steder i én kommune. Den historiske landsbyen ligger under Puig Campana, det moderne bolig- og handelsbeltet vender mot Benidorm, og La Cala gir et kompakt strandliv helt nede ved Middelhavet.",
    "Du kan drikke kaffe i en stille fjellandsby, kjøre gjennom nye villa- og leilighetsområder og kort tid senere stå på sanden. Det gjør Finestrat fleksibelt, men også et sted der adressens nøyaktige beliggenhet betyr svært mye for hverdagen.",
  ],
  "la nucia": [
    "La Nucía flytter hverdagen et stykke inn fra kysten uten å koble seg fra den. Her handler valget mindre om å ha stranden utenfor døren og mer om helårsservice, sport, skoler, boligområder og enkel tilgang til Altea, Albir og Benidorm.",
    "For mange familier og fastboende er dette en styrke. For andre blir bilbruken avgjørende. Det viktigste er å teste den faktiske ruten mellom boligen og de stedene du kommer til å bruke hver uke – ikke bare måle kilometer til sjøen.",
  ],
  polop: [
    "Polop forklarer seg først gjennom vann, stein og fjell. Plaza de los Chorros, gamlebyen og høyden under Ponoig gir stedet en tydelig innlandsidentitet selv om Middelhavet og kystbyene ligger relativt nær.",
    "En bolig kan ha havutsikt uten at hverdagen er kystbasert. Det er nettopp forskjellen: du låner strender, shopping og større servicetilbud fra La Nucía og Benidorm, mens den daglige følelsen er roligere, mindre og mer vendt mot fjellet.",
  ],
  moraira: [
    "Moraira ser mindre ut enn livet rundt byen faktisk er. Sentrum, marinaen og stranden kan oppleves til fots, mens boligområdene sprer seg videre til El Portet, Cap Blanc, Paichi, Benimeit, Solpark, Arnella og andre villaområder.",
    "Det skaper en viktig kontrast: Moraira selger nærhet og intimitet, mens boligmarkedet ofte selger plass og privatliv. En sentral leilighet og en villa ti minutter unna med bil kan derfor gi to helt forskjellige hverdager selv om begge adresser kalles Moraira.",
  ],
  denia: [
    "Dénia markerer et skifte på den nordlige Costa Blanca. Havnen, sentrum, lange strender og et tydelig helårsliv gjør at stedet fungerer mer som en selvstendig by enn som et rent ferieområde.",
    "For boligkjøperen bør sentrum, marinaen, Las Marinas, Las Rotas og områdene mot Montgó vurderes separat. Avstander, strandtype, gange og bilbruk endrer seg betydelig selv innenfor samme kommune.",
  ],
  "el campello": [
    "El Campello løser et problem mange Costa Blanca-kjøpere ikke vet at de har: de vil ha sjøen, Alicante, en ekte by, kollektivtransport og en strand de faktisk bruker – samtidig som de vil kunne reise nordover uten at hver tur starter bak rattet.",
    "Byen er ikke bare en strandby, men en strandby med transportakse. Muchavista er lang og urban, Carrer la Mar er tettere koblet til sentrum og marinaen, mens kysten nordover brytes opp i mindre bukter og roligere boliglommer.",
  ],
  "sant joan d'alacant": [
    "Sant Joan d'Alacant er et av de enkleste stedene på Costa Blanca å beskrive feil. Du kan si nær Alicante, nær stranden, nær El Campello, nær Mutxamel, nær sykehuset og nær universitetet – og alt kan være sant. Men «nær» er ikke en livsstil.",
    "Det sentrale valget er om du trenger sjøen utenfor døren, eller om du heller vil ha en lokal boligby med sykehus, skoler, butikker, roligere gater og Alicante tett på. Stranden er nær, men stranden er ikke byen.",
  ],
  mutxamel: [
    "Mutxamel har ingen kommunal strand, marina eller promenade – og det er nettopp derfor stedet er interessant. Det tvinger frem et ærlig spørsmål: hvor mye av middelhavslivet ditt trenger faktisk å foregå helt ute på strandlinjen?",
    "For den som prioriterer plass, parkering, større bolig, hage, skoler, lokal hverdag og nærhet til Alicante, samtidig som San Juan og El Campello brukes når man ønsker sjøen, kan Mutxamel være et overraskende godt valg.",
  ],
};

function normalizedCandidates(book: PlaceBook | null, areaName: string) {
  return new Set([
    normalizeSearchText(areaName),
    ...(book?.matchTerms || []).map((term) => normalizeSearchText(term)),
    ...(book ? [normalizeSearchText(book.town)] : []),
  ].filter(Boolean));
}

export function placeBookForArea(areaName: string): PlaceBook | null {
  const target = normalizeSearchText(areaName);
  if (!target) return null;

  return (
    placeBooks.find((book) => {
      const terms = [book.town, ...book.matchTerms].map((value) => normalizeSearchText(value));
      return terms.some((term) => term === target || target.includes(term) || term.includes(target));
    }) || null
  );
}

export function areaExcerpt(areaName: string): string[] {
  const book = placeBookForArea(areaName);
  const keys = [areaName, book?.town || "", ...(book?.matchTerms || [])]
    .map((value) => normalizeSearchText(value))
    .filter(Boolean);

  for (const key of keys) {
    if (AREA_EXCERPTS[key]) return AREA_EXCERPTS[key];
  }
  return [];
}

/**
 * Bildeprioritet:
 * 1. RealtyFlows godkjente områdebilde.
 * 2. Et faktisk publisert boligbilde fra samme sted.
 * 3. Det unike omslaget til stedsguiden.
 * 4. Generisk områdefoto kun som siste sikkerhetsnett.
 */
export function areaPresentationImage(profile: AreaProfile, properties: Property[]): string {
  if (profile.photo_url) return profile.photo_url;

  const book = placeBookForArea(profile.name);
  const candidates = normalizedCandidates(book, profile.name);
  const property = properties.find((item) => {
    const town = normalizeSearchText(getPropertyTown(item) || "");
    return town ? candidates.has(town) : false;
  });
  const propertyImage = property ? getPrimaryImage(property) : null;
  if (propertyImage) return propertyImage;

  if (book?.cover) return book.cover;
  return "/assets/areas.jpg";
}
