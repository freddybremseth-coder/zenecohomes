import { normalizeSearchText } from "@/lib/realtyflow";

/**
 * Redaksjonelle notater med kildegrunnlag fra offentlige destinasjons- eller
 * kommuneportaler. Kildene dokumenterer geografien/stedstrekkene; rådene om
 * boligkontroll er Zen Eco Homes' anbefalte kontrollpunkter, ikke dokumenterte
 * påstander om hver enkelt bolig.
 *
 * Ingen genererte prisanslag, kjøretider, sesongrangering eller boligstatistikk.
 * Legg bare til steder etter faktisk kildekontroll. Øvrige områder får den
 * eksisterende RealtyFlow-beskrivelsen + nøytral kjøpersjekk, aldri AI-fakta.
 */
export type VerifiedAreaEditorial = {
  everyday: string;
  buying: string;
  source: { label: string; url: string };
};

const valencia = "Turisme Comunitat Valenciana";
const murcia = "Turismo Región de Murcia";
const AREAS: Record<string, VerifiedAreaEditorial> = {
  "la nucia": {
    everyday: "La Nucía ligger mellom kysten og fjellområdene i Marina Baixa og har en egen bykjerne. Den er derfor et alternativ for deg som ikke må ha stranden utenfor døren, men ønsker å kunne bruke nabobyene ved kysten.",
    buying: "Test hverdagsruten til skole, handel og andre tjenester fra nøyaktig den boligen du vurderer. I villaområder er vei, parkeringsplass, vedlikehold av uteareal og godkjente byggetiltak viktige kontrollpunkter.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/la-nucia" },
  },
  moraira: {
    everyday: "Moraira er kystdelen av kommunen Teulada-Moraira, mens Teulada ligger lenger inne i landet. Langs Morairas kyst finnes både bukter og mer sentrale miljøer, så boligvalget bør starte med hvor du ønsker å tilbringe hverdagen.",
    buying: "Vurder om du prioriterer gangavstand fra sentrum eller mer privatliv i et villaområde. Kontroller adkomst, tomtedokumentasjon og løpende vedlikehold før du sammenligner boliger på pris alene.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/teulada-moraira" },
  },
  mutxamel: {
    everyday: "Mutxamel har et historisk sentrum og ligger ved Alicante. Her handler boligvalget mer om forholdet mellom lokalt byliv, boligområder og avstand til sjøen enn om å ha en strandpromenade like ved.",
    buying: "Sjekk de faste reiserutene og den faktiske adkomsten til tjenester du trenger. Ved rekkehus og villaer bør du undersøke både byggets dokumentasjon, tomtens grenser og eventuelle felleseide anlegg.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/mutxamel" },
  },
  "sant joan d'alacant": {
    everyday: "Sant Joan d'Alacant ligger nær Alicante og har egen bykjerne og historiske landbruksmiljøer. Boligene her bør vurderes som del av en hverdag med by- og tjenestetilgang, ikke automatisk som et strandnært ferievalg.",
    buying: "Sammenlign en sentral bolig med boligområder i utkanten ut fra skolevei, kollektivtransport og daglige ærend. Som ellers bør lovlighet, fellesutgifter og tilstandsopplysninger sjekkes for hvert enkelt objekt.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/sant-joan-dalacant" },
  },
  benidorm: {
    everyday: "Levante, Poniente og området ved gamlebyen gir forskjellige rammer for en vanlig hverdag. De store bystrendene og den tette bystrukturen er dokumenterte kjennetegn, men ro, støy og faktisk gangavstand må vurderes for den konkrete gaten.",
    buying: "Sammenlign en sentral leilighet med en bolig lenger fra stranden ut fra heis, støy fra trafikk og servering, solforhold og hva du faktisk kan gjøre til fots. Be om oppdaterte felleskostnader og undersøk eventuelle regler for korttidsutleie før du legger slike inntekter i et budsjett.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/benidorm" },
  },
  albir: {
    everyday: "Albir er kystområdet i L'Alfàs del Pi. Her bør du vurdere forskjellen mellom å bo nær stranden og å bo lenger inn i boligområdene, særlig dersom korte avstander til daglige ærend er viktig.",
    buying: "Test gangrutene du kommer til å bruke, ikke bare avstanden i kilometer. Sjekk også byggets felleskostnader, tilgjengelighet og lysforhold dersom du vurderer leilighet.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/lalfas-del-pi" },
  },
  altea: {
    everyday: "Altea kombinerer en historisk gamleby i høyden med sjøfront og strandområder som La Olla og Cap Negret. Dette er svært forskjellige steder å ha hverdagsbasen, selv om begge kalles Altea.",
    buying: "Høydeforskjeller og trappetrinn betyr at du bør prøve den faktiske ruten til butikker og strand. For villaer i høyden bør vei, adkomst, vedlikehold og reguleringsstatus undersøkes spesielt.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea" },
  },
  calpe: {
    everyday: "Calp/Calpe har både en gammel bykjerne, strender og bukter rundt den kjente Peñón de Ifach. Valg av delområde påvirker om du får en urban strandhverdag eller et boligliv der bilen brukes oftere.",
    buying: "Sammenlign boliger i strandsonen med boliger lenger inn i åsene på gangavstand, parkering og årlige driftsutgifter. Få konkrete opplysninger om tomt, bygg og tilkomst i stedet for å legge generell områdestatistikk til grunn.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/calp" },
  },
  finestrat: {
    everyday: "Finestrat har flere tydelig forskjellige delområder. Gamlebyen ligger i høyden, mens La Cala er kystdelen. Mange boliger som annonseres i Finestrat ligger i egne boligområder som Sierra Cortina, Balcón de Finestrat og Golf Bahía – ikke i gamlebyen.",
    buying: "Finn først ut hvilket boligområde og hvilken gate annonsen faktisk gjelder. Kontroller adkomst, bilbehov, strandavstand fra adressen, felleskostnader og for nybygg: byggetillatelse, leveringsdato og hva som er inkludert i prisen.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/finestrat" },
  },
  denia: {
    everyday: "Dénia har en havn, historiske byområder, sandstrender, klippekyst og Montgó som tydelig landskapselement. Sentrum og boligområdene ved kysten bør derfor vurderes hver for seg.",
    buying: "Vurder hva du faktisk vil gå til i hverdagen, og hvilken strandtype eller bytilgang du prioriterer. For eiendommer nær sjøen er det klokt å kontrollere dokumentasjon, vedlikeholdsbehov og eventuelle byggebegrensninger.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/denia" },
  },
  javea: {
    everyday: "Xàbia/Jávea kombinerer historisk sentrum med strender, bukter og kystlandskap. Det gjør at en bolig i sentrum og en bolig ved en bukt kan gi svært ulik hverdagslogistikk.",
    buying: "Gå gjennom adkomst, parkeringsmuligheter og hvilken service som ligger innen praktisk rekkevidde fra nettopp denne boligen. Be om avklaring av eventuelle begrensninger ved tiltak i kyst- eller naturområder før kjøp.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea" },
  },
  villajoyosa: {
    everyday: "Villajoyosa har en historisk bykjerne ved kysten og er kjent for de fargerike eldre husene ved sjøfronten. Boliger i den gamle bebyggelsen og nyere boligområder har ulike praktiske kvaliteter.",
    buying: "I eldre hus bør du undersøke teknisk tilstand, eventuell vernestatus og kostnadene ved oppgradering. For nyere anlegg er fellesutgifter, adkomst og kvaliteten på fellesarealer sentrale kontrollpunkter.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/la-vila-joiosa-villajoyosa" },
  },
  polop: {
    everyday: "Polop har et historisk sentrum rundt en høyde, Plaza de los Chorros og fjellandskapet ved Ponoig. Her er det relevant å vurdere om du helst vil leve i en mindre landsby eller søke de større servicetilbudene andre steder.",
    buying: "Sjekk stigning, veistandard, bilbehov og avstanden til dine faste ærend. For frittliggende bolig bør både tomtens grenser, tillatelser, drenering og faste driftsutgifter dokumenteres.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/polop" },
  },
  "el campello": {
    everyday: "El Campello er en kystby med strandmiljø og den arkeologiske lokaliteten Illeta dels Banyets. Det er nyttig å se de mer urbane strandnære delene og roligere deler av kommunen som ulike boligvalg.",
    buying: "Undersøk reisetid og kollektivtilbud fra den aktuelle adressen, ikke bare fra sentrum. Dersom du vurderer en leilighet nær sjøen, bør fellesutgifter, tilstand og sesongstøy vurderes konkret.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/el-campello" },
  },
  torrevieja: {
    everyday: "Torrevieja har flere bystrender, blant annet El Cura, Los Locos og La Mata, og naturområdene ved saltsjøene. Hvor du bor i byen er derfor viktigere enn at annonseteksten bare sier Torrevieja.",
    buying: "Prøv gangavstand til nødvendige tjenester, og sjekk parkering og støy i den aktuelle gaten. Ved eldre leiligheter er vedlikehold av bygget, kommende fellesarbeider og faktiske felleskostnader sentrale spørsmål.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/torrevieja" },
  },
  "guardamar del segura": {
    everyday: "Guardamar del Segura ligger ved utløpet av Segura og er kjent for lange strender, sanddyner og furuskog. Bykjerne og mer spredte boligområder kan oppleves forskjellig gjennom året.",
    buying: "Sammenlign faktisk gangavstand til sentrum, strand og dagligvare. Be om dokumentasjon ved kjøp av bolig i nærheten av natur- eller kystsoner, og kontroller teknisk tilstand, adkomst og fellesutgifter.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/guardamar-del-segura" },
  },
  "ciudad quesada": {
    everyday: "Ciudad Quesada er en del av Rojales kommune og inngår i et større område med urbanisasjoner som kommunen selv skiller fra det historiske sentrum. Derfor er det viktig å se boligområdet og Rojales sentrum som to forskjellige hverdagsmiljøer.",
    buying: "Undersøk hvilken urbanisasjon boligen ligger i, hvilke tjenester du faktisk har innen gangavstand, og om du er avhengig av bil. Få oppgitt kostnader og rettigheter knyttet til eventuelle private fellesanlegg.",
    source: { label: "Ayuntamiento de Rojales", url: "https://www.rojales.es/turismo/" },
  },
  "orihuela costa": {
    everyday: "Orihuela kommune strekker seg fra historiske innlandsområder til kysten. En bolig annonsert i Orihuela Costa bør derfor vurderes ut fra det konkrete boligområdet, ikke bare kommunenavnet.",
    buying: "Kontroller hvilke tjenester som faktisk er tilgjengelige fra boligen, og avklar fellesutgifter, vedtekter, parkering og eventuelle utleieregler. Prioriter en visning som viser nabolaget, ikke bare leiligheten.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/orihuela" },
  },
  "santa pola": {
    everyday: "Santa Pola har en maritim historie, historisk sentrum og saltlandskapet i Las Salinas de Santa Pola. Det er relevant å vurdere et mer sentralt byliv opp mot boliger i de ytre delene av kommunen.",
    buying: "Undersøk hvor det er lett å gjøre daglige ærend uten bil, og sjekk byggets vedlikehold og felleskostnader. Ved bolig nær naturområder bør forhold rundt byggetillatelse og fremtidige tiltak undersøkes spesielt.",
    source: { label: valencia, url: "https://www.comunitatvalenciana.com/en/alacant-alicante/santa-pola/" },
  },
  "san pedro del pinatar": {
    everyday: "San Pedro del Pinatar ligger ved nordenden av Mar Menor og omfatter blant annet Lo Pagán. Saltlandskapet og den beskyttede naturen gjør at beliggenheten kan gi forskjellige måter å bruke nærområdet på.",
    buying: "Besøk den aktuelle delen av området og vurder faktiske tjenester, parkering og adkomst. Spør alltid konkret om boligens tekniske tilstand, fellesutgifter og offentlige begrensninger på eiendommen.",
    source: { label: murcia, url: "https://www.turismoregiondemurcia.es/en/san_pedro_del_pinatar/" },
  },
  "san javier": {
    everyday: "San Javier kommune omfatter blant annet Santiago de la Ribera og deler av La Manga. Disse områdene ligger i ulike kystmiljøer rundt Mar Menor, så en bolig må vurderes ut fra den konkrete adressen.",
    buying: "Sjekk om du ønsker by- og strandnært liv eller et mer feriepreget boligområde. Undersøk reisevei, vedtekter og felleskostnader og se nabolaget utenfor en typisk feriedag før du bestemmer deg.",
    source: { label: murcia, url: "https://www.turismoregiondemurcia.es/en/san_javier/" },
  },
  "los alcazares": {
    everyday: "Los Alcázares ligger ved Mar Menor og har kystområder langs lagunen. Nærhet til vannet er attraktivt for mange, men faktisk adkomst, service og den bestemte gaten bør veie tungt i boligvalget.",
    buying: "Kontroller dokumentasjon og tilstand for boligen, og vurder praktiske forhold rundt fukt, drenering og fellesvedlikehold. Ikke bruk generelle opplysninger om kommunen som dokumentasjon på den enkelte eiendoms tilstand.",
    source: { label: murcia, url: "https://www.turismoregiondemurcia.es/en/los_alcazares/" },
  },
  "la manga": {
    everyday: "La Manga er den lange landstripen mellom Mar Menor og Middelhavet. Avstanden mellom ulike deler er betydelig, så adressen avgjør både hverdagslogistikk og hvilken sjøside som ligger nærmest.",
    buying: "Besøk området også utenfor høysesongen dersom du vurderer helårsbruk. Undersøk boligens faktiske adkomst, tjenestetilbud, felleskostnader og vedlikehold – og kontroller regler som kan gjelde nær kysten.",
    source: { label: murcia, url: "https://www.turismoregiondemurcia.es/en/la_manga/" },
  },
};

export function verifiedAreaEditorial(name: string): VerifiedAreaEditorial | null {
  return AREAS[normalizeSearchText(name).trim()] || null;
}

/** A checklist is advice, not a claim that a particular address has a problem. */
export function areaBuyerChecklist(name: string): string[] {
  return [
    `Besøk den aktuelle delen av ${name} på en vanlig hverdag og sjekk avstander, trafikk, støy og tjenester som betyr noe for deg.`,
    "Be om grunnboks-/registeropplysninger, lovlighetsdokumentasjon, energiattest og bekreftet oversikt over kjøps- og felleskostnader.",
    "Få avklart eventuelle planer for ombygging eller utleie mot konkrete lokale regler og boligfellesskapets vedtekter før du reserverer.",
  ];
}
