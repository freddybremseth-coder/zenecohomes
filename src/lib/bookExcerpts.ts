import { bookUrl, generalGuideBook, placeBooks } from "@/lib/books";

export type BookExcerpt = {
  place: string;
  sourceTitle: string;
  sourceUrl: string;
  sourceType: "local" | "general";
  excerpt: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

const generalExcerptByPlace: Record<string, string> = {
  benidorm:
    "Benidorm har et imageproblem og en imagefordel samtidig. Nesten alle har et bilde av byen før de kommer: høyhus, strender og turister. Men byen fungerer også som en kompakt helårsby med tjenester, restauranter, handel og aktivitet som få andre steder langs kysten kan matche. Det viktige er ikke om du liker skyline. Det viktige er hva den representerer: gangavstand, aktivitet, mange mennesker og mye tilbud. Et sted som fungerer som by, ikke bare som ferieområde.",
  albir:
    "Albir fungerer ofte som et mellompunkt. Du har strand, promenade, restauranter, internasjonalt miljø og natur innen rekkevidde, men uten den samme konsentrasjonen av storbyturisme som preger sentrale deler av Benidorm. For mange handler Albir om balanse. Men balanse er personlig: den som søker mer aktivitet kan oppleve stedet som rolig, mens den som søker stillhet kan oppleve det som travelt. Derfor bør området vurderes ut fra den hverdagen du faktisk ønsker.",
  altea:
    "Det er lett å forstå Altea visuelt. Den gamle byen ligger høyt, med hvite fasader, smale gater og kirken som et tydelig kjennetegn over Middelhavet. Nettopp derfor trenger Altea en ekstra disiplinert boligvurdering. Et sted som er svært lett å forelske seg i, kan få oss til å slutte å stille praktiske spørsmål. Det som gjør gamlebyen vakker, er også det som gjør den mindre enkel: bakker, trapper og parkering. Ikke vurder bakken på vei ned. Gå opp igjen.",
  finestrat:
    "Finestrat er ikke ett sted. Det finnes den historiske landsbyen under Puig Campana. Det finnes La Cala ved sjøen. Og mellom dem ligger et nyere Finestrat som har blitt et av de mest aktive områdene for moderne boligbygging på Costa Blanca Nord. Nye leiligheter, nye villaer, lukkede boligområder, golf i nærheten, shopping og utsikt mot Benidorm og Middelhavet. For boligkjøperen skaper dette både muligheter og forvirring. En adresse kan si Finestrat, men hverdagen kan være fullstendig forskjellig avhengig av hvilken del av kommunen du faktisk velger.",
  "la nucia":
    "La Nucía ligger tett på kystens system uten at Middelhavet organiserer hver gate. Livet blir mer boligpreget, mer hverdagslig og litt mer innland. For en fastboende kan sportsfasiliteter, skoler, supermarkeder, plass, parkering og veiforbindelser bety mer enn å kunne gå rett ut på stranden. Fordelen for mange er at du ikke velger bort kysten. Benidorm og Altea er fortsatt nære, men hjemmet kan føles tydelig fjernet fra strandøkonomien.",
  polop:
    "Polop er et sted der opplevelsen endrer seg før avstanden gjør det. Middelhavet er ikke langt unna, og Benidorm og Altea er fortsatt tilgjengelige, men det psykologiske sentrum har flyttet seg. Fjellene er sterkere. Landsbyen betyr mer. Kysten blir noe du ser mot og besøker, ikke noe som ligger rett utenfor døren. For mange er dette punktet der de oppdager at de ikke trenger å bo på kysten – de trenger bare å være godt koblet til den.",
  calpe:
    "Calpe har en sterk visuell identitet. Peñón de Ifach dominerer byen på en måte som gjør orienteringen nesten intuitiv. Men Calpe er ikke én livsstil. Strandsonen, sentrum, eldre gater, nyere leilighetsprosjekter, villaområdene i åssidene, marinaen og roligere boligveier kan gi svært forskjellige hverdager. To mennesker kan begge si at de bor i Calpe og likevel beskrive helt forskjellige liv. Derfor er bynavnet bare starten på boligvalget.",
  moraira:
    "Moraira føles mer kompakt og mer avgrenset enn mange større kyststeder. Marinaen, restaurantene, gatene og strendene ligger innenfor et oversiktlig miljø som mange oppfatter som selve bildet på en middelhavsby. Men det er verdt å spørre hva man egentlig mener med det: lite nok til å føles intimt, aktivt nok til ikke å bli kjedelig, internasjonalt nok til å være enkelt, spansk nok til å føles som Spania og rolig nok til å være avslappende. Den kombinasjonen er attraktiv – og ofte priset deretter.",
  pinoso:
    "Pinoso ligger i det vestlige innlandet i Alicante-provinsen, omgitt av jordbruk, vin, mandler, oliven og åpne landskap. For mange utenlandske kjøpere er området kjent for større tomter og muligheten til å bygge eller eie landlige boliger til priser som kan være vanskelige å finne ved kysten. Men den egentlige attraksjonen er ikke prisen. Det er livsformen. Selv om du bor på landet, blir byen et viktig nav for butikker, kaféer, restauranter, bank og kommunale tjenester.",
  biar:
    "Biar gir en annen innlandsopplevelse. Byen ligger høyere og er visuelt dominert av borgen over bebyggelsen. Gatene, høyden og fjellene skaper en sterkere følelse av tradisjonell innlandsby enn mange moderne boligområder ved kysten. For mennesker som liker turer, sykling og fjellandskap kan Biar være svært attraktivt. Her trenger du ikke velge mellom å bo på landet og å bo i en by på samme måte: du kan bo i eller nær en kompakt historisk by og samtidig ha naturen svært tett på.",
  aspe:
    "Aspe ligger nærmere Alicante og kystens transportsystem enn Pinoso. Det gjør byen interessant for mennesker som ønsker mer lokal innlandshverdag uten å flytte like langt fra flyplass, motorvei og større byfunksjoner. Du får ikke nødvendigvis den samme følelsen av fjerntliggende landlig liv. Til gjengjeld kan logistikken bli enklere. Aspe har et fungerende lokalt sentrum og jordbrukslandskap rundt, slik at boliger med samme stedsnavn kan gi helt forskjellige hverdager. Ikke kjøp navnet. Kjøp plasseringen.",
};

const regionFallbacks: Record<string, string> = {
  inland:
    "Innlandet er ikke én kategori. Pinoso, Biar, Aspe, Novelda og de mindre byene organiserer hverdagen forskjellig. Når du kjører innover, begynner avstand å bety noe annet: ved kysten spør vi ofte hvor langt det er til stranden; i innlandet blir byen, supermarkedet, skolen, veiene og de daglige tjenestene viktigere. Spør derfor ikke bare hvor mange kilometer kartet viser. Spør om avstanden føles som frihet eller som avstand.",
  coast:
    "Costa Blanca er ikke ett sted. På overraskende korte avstander endres terreng, bystruktur, strandliv, bilbehov og hverdagsrytme. En bolig kan være vakker og likevel ligge i feil versjon av kysten for deg. Derfor starter et godt boligvalg med hvordan du vil leve – ikke med hvilken boligannonse som ser best ut.",
};

const localExcerptByPlace: Record<string, string> = {
  finestrat:
    "Klokken ni om morgenen kan du stå i en smal gate i gamle Finestrat og nesten ikke høre noe som forteller deg at Middelhavet ligger i nærheten. Du setter deg i bilen, kjører nedover og hele det visuelle språket endres: rundkjøringer, nye boligprosjekter, moderne villaer, shopping og Benidorms skyline. Fortsetter du videre ned, strammer bebyggelsen seg til igjen og plutselig står du på sanden ved La Cala. Samme kommune. Tre helt forskjellige morgener. Det er det første en boligkjøper må forstå om Finestrat.",
};

export function bookExcerptForPlace(placeName: string, regionKey?: string): BookExcerpt {
  const key = normalize(placeName);
  const localBook = placeBooks.find((book) =>
    book.matchTerms.some((term) => key.includes(normalize(term)) || normalize(term).includes(key)),
  );
  const localExcerpt = localExcerptByPlace[key];

  if (localBook && localExcerpt) {
    return {
      place: placeName,
      sourceTitle: localBook.title,
      sourceUrl: bookUrl(localBook.slug),
      sourceType: "local",
      excerpt: localExcerpt,
    };
  }

  return {
    place: placeName,
    sourceTitle: generalGuideBook.title,
    sourceUrl: bookUrl(generalGuideBook.slug),
    sourceType: "general",
    excerpt:
      generalExcerptByPlace[key] ||
      (regionKey?.includes("innland") || regionKey === "inland" ? regionFallbacks.inland : regionFallbacks.coast),
  };
}
