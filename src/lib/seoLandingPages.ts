export type SeoLandingPage = {
  slug: string;
  title: string;
  eyebrow: string;
  hero: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "bolig-i-spania",
    title: "Bolig i Spania",
    eyebrow: "Boligkjøp i Spania",
    hero: "Kjøp bolig i Spania med norsk rådgiver",
    description:
      "Finn riktig bolig, område og kjøpsprosess før du reserverer. Zen Eco Homes hjelper nordmenn med trygg vurdering av nybygg, villaer, leiligheter, tomter og prosjekter i Spania.",
    seoTitle: "Bolig i Spania | Kjøp trygt med norsk rådgiver",
    seoDescription:
      "Vurderer du bolig i Spania? Få hjelp med områdevalg, nybygg, villa, leilighet, finansiering, NIE, advokat og trygg kjøpsprosess.",
    primaryCta: { label: "Se boliger til salgs", href: "/eiendommer" },
    secondaryCta: { label: "Les kjøpsprosessen", href: "/kjopsprosessen" },
    sections: [
      {
        heading: "Start med område og livsstil, ikke bare bolig",
        body: [
          "Mange nordmenn starter boligjakten med bilder, pris og antall soverom. Det er forståelig, men det viktigste valget er ofte området. Hverdagsliv, flyplass, strand, helårsservice, skole, golf, utleie og videresalg påvirkes av hvor du kjøper.",
          "Zen Eco Homes hjelper deg å avklare hva boligen skal brukes til, hvilket budsjett som er realistisk, og hvilke områder som faktisk passer før du bruker tid på visninger.",
        ],
        bullets: [
          "Feriebolig, helårsbolig, investering eller fremtidig pensjonistliv.",
          "Costa Blanca Nord, Costa Blanca Sør, Costa Cálida eller innland.",
          "Nybygg, bruktbolig, villa, leilighet, rekkehus eller tomt.",
        ],
      },
      {
        heading: "Tryggere kjøpsprosess for nordmenn",
        body: [
          "Spania har en annen kjøpsprosess enn Norge. Flere meglere kan markedsføre samme bolig, portaler kan vise utdaterte annonser, og reservasjon kan skje raskt når riktig objekt dukker opp.",
          "Derfor bør du ha rådgivning, finansiering, NIE, advokat og tydelige kriterier på plass før du reserverer.",
        ],
        bullets: [
          "Vi vurderer pris, område, tilgjengelighet og alternativer.",
          "Vi hjelper deg å forstå betalingsplan, kostnader og neste steg.",
          "Vi anbefaler alltid uavhengig advokat og god juridisk kontroll.",
        ],
      },
    ],
    faq: [
      {
        question: "Hvor bør nordmenn kjøpe bolig i Spania?",
        answer:
          "Costa Blanca er ofte et godt valg for nordmenn som ønsker klima, pris, flyforbindelser og service. Costa Blanca Nord passer godt for kvalitetsbevisste kjøpere, mens innlandet kan gi mer tomt og ro.",
      },
      {
        question: "Er det trygt å kjøpe bolig i Spania?",
        answer:
          "Ja, men prosessen krever riktig kontroll. Bruk uavhengig advokat, få oppdatert informasjon om boligen og forstå kontrakt, kostnader og dokumentasjon før reservasjon.",
      },
      {
        question: "Kan jeg bruke norsk rådgiver ved kjøp i Spania?",
        answer:
          "Ja. En norsk rådgiver kan hjelpe deg å forstå markedet, sammenligne alternativer og koordinere prosessen med meglere, utbyggere, bank og advokat.",
      },
    ],
    related: [
      { label: "Områdeguide for eiendomskjøp i Spania", href: "/magasin/omradeguide-eiendomskjop-i-spania" },
      { label: "Kjøpsprosess for bolig i Spania", href: "/magasin/kjopsprosess-bolig-i-spania" },
      { label: "Finansiering, notar og NIE", href: "/magasin/finansiering-notar-nie-boligkjop-spania" },
    ],
  },
  {
    slug: "nybygg-i-spania",
    title: "Nybygg i Spania",
    eyebrow: "Nybygg og prosjekter",
    hero: "Nybygg i Spania med moderne standard og trygg prosess",
    description:
      "Utforsk moderne nybygg i Spania. Vi hjelper deg å vurdere utbygger, kvalitet, beliggenhet, betalingsplan, inkluderte leveranser og risiko før reservasjon.",
    seoTitle: "Nybygg i Spania | Moderne boliger med norsk rådgivning",
    seoDescription:
      "Se nybygg i Spania og få hjelp til å vurdere prosjekter, utbygger, betalingsplan, område, pris og trygg kjøpsprosess.",
    primaryCta: { label: "Se nybygg og boliger", href: "/eiendommer" },
    secondaryCta: { label: "Kjøpe nå eller vente?", href: "/magasin/kjop-bolig-i-spania-na-eller-vente" },
    sections: [
      {
        heading: "Hvorfor mange velger nybygg",
        body: [
          "Nybygg i Spania gir ofte lavere vedlikehold, moderne planløsning, energieffektive løsninger og mer forutsigbar standard. For mange norske kjøpere er dette enklere enn å kjøpe en eldre bolig med ukjent teknisk tilstand.",
          "Samtidig må hvert prosjekt vurderes grundig. Beliggenhet, byggefase, leveransebeskrivelse, betalingsplan, garantier og utbyggerens historikk er avgjørende.",
        ],
        bullets: [
          "Moderne standard og energieffektive løsninger.",
          "Tydeligere leveranse og ofte lavere vedlikehold.",
          "Viktig å kontrollere hva som faktisk er inkludert i prisen.",
        ],
      },
      {
        heading: "Hva du bør sjekke før reservasjon",
        body: [
          "Før du reserverer nybygg, bør du få oppdatert tilgjengelighet, pris, betalingsplan og forventet overtakelse. Du bør også forstå hva som er inkludert, og hvilke tillegg som kommer for hvitevarer, basseng, møbler, parkering, belysning eller uteområder.",
        ],
        bullets: [
          "Utbyggerens erfaring og tidligere leveranser.",
          "Byggetillatelse, garantier og forventet ferdigstillelse.",
          "Betalingsplan, bankgarantier og kontraktsvilkår.",
          "Områdets helårsservice, utleiemuligheter og videresalgspotensial.",
        ],
      },
    ],
    faq: [
      {
        question: "Er nybygg tryggere enn bruktbolig i Spania?",
        answer:
          "Nybygg kan gi mer forutsigbar standard og lavere vedlikehold, men prosjektet må fortsatt kontrolleres juridisk, teknisk og økonomisk før reservasjon.",
      },
      {
        question: "Kan prisene på nybygg forhandles?",
        answer:
          "Ofte er prisene mer faste enn på bruktbolig, men det kan være mulig å forhandle om møbler, hvitevarer, betalingsplan eller andre vilkår.",
      },
      {
        question: "Når bør jeg reservere nybygg?",
        answer:
          "Først når område, budsjett, finansiering, juridisk kontroll og leveranse er forstått. Gode prosjekter kan selges tidlig, men raske beslutninger bør fortsatt være informerte.",
      },
    ],
    related: [
      { label: "Bør man kjøpe bolig i Spania nå, eller vente?", href: "/magasin/kjop-bolig-i-spania-na-eller-vente" },
      { label: "Kjøpsprosess for bolig i Spania", href: "/magasin/kjopsprosess-bolig-i-spania" },
      { label: "Boliger til salgs", href: "/eiendommer" },
    ],
  },
  {
    slug: "nybygg-costa-blanca",
    title: "Nybygg Costa Blanca",
    eyebrow: "Costa Blanca",
    hero: "Nybygg på Costa Blanca for norske boligkjøpere",
    description:
      "Costa Blanca har et stort utvalg nybygg, villaer, leiligheter og prosjekter. Vi hjelper deg å sammenligne kyst, innland, prisnivå og livsstil før kjøp.",
    seoTitle: "Nybygg Costa Blanca | Boliger og prosjekter i Spania",
    seoDescription:
      "Finn nybygg på Costa Blanca. Sammenlign Costa Blanca Nord og Sør, områder, prisnivå, boliger og trygg kjøpsprosess med norsk rådgiver.",
    primaryCta: { label: "Se boliger på Costa Blanca", href: "/eiendommer?region=costa-blanca-nord" },
    secondaryCta: { label: "Sammenlign områder", href: "/omrader" },
    sections: [
      {
        heading: "Costa Blanca Nord eller Costa Blanca Sør?",
        body: [
          "Costa Blanca er ikke ett marked. Nord og sør har ulike priser, landskap, byer, boligtyper og kjøperprofiler. Costa Blanca Nord har ofte mer dramatisk natur, fjell, utsikt og eksklusive områder. Costa Blanca Sør har stort utvalg, mange golf- og strandnære prosjekter og ofte lavere inngangspriser.",
        ],
        bullets: [
          "Costa Blanca Nord: Altea, Albir, Calpe, Finestrat, Polop, Jávea og Moraira.",
          "Costa Blanca Sør: Torrevieja, Orihuela Costa, Guardamar, Ciudad Quesada og Santa Pola.",
          "Innlandet: Pinoso, Aspe og Novelda for tomt, ro og større eiendommer.",
        ],
      },
      {
        heading: "Slik vurderer vi nybygg på Costa Blanca",
        body: [
          "Vi ser ikke bare på pris og bilder. Vi vurderer beliggenhet, infrastruktur, byggefase, utbygger, overtakelse, betalingsplan, kvaliteter, områdeprofil og om boligen passer for ferie, helårsbruk eller utleie.",
        ],
        bullets: [
          "Avstand til strand, flyplass, service og helårsaktivitet.",
          "Prisnivå sammenlignet med lignende prosjekter.",
          "Hva som er inkludert i prisen og hvilke tillegg som kommer.",
          "Potensial for videresalg og praktisk bruk gjennom året.",
        ],
      },
    ],
    faq: [
      {
        question: "Hvor på Costa Blanca bør jeg kjøpe nybygg?",
        answer:
          "Det avhenger av budsjett og livsstil. Altea, Albir og Finestrat passer mange som ønsker Costa Blanca Nord, mens Torrevieja og Orihuela Costa gir større utvalg i sør.",
      },
      {
        question: "Er Costa Blanca Nord dyrere enn Costa Blanca Sør?",
        answer:
          "Ofte ja, spesielt i attraktive kystområder og utsiktsprosjekter. Costa Blanca Sør kan gi lavere inngangspris og større utvalg.",
      },
      {
        question: "Kan jeg kjøpe nybygg før det er ferdig?",
        answer:
          "Ja, mange nybygg selges i tidlig fase. Da er det viktig å kontrollere betalingsplan, garantier, byggetillatelse og forventet overtakelse.",
      },
    ],
    related: [
      { label: "Costa Blanca Nord", href: "/omrader/costa-blanca-nord" },
      { label: "Områdeguide", href: "/magasin/omradeguide-eiendomskjop-i-spania" },
      { label: "Se boliger", href: "/eiendommer" },
    ],
  },
  {
    slug: "eiendomsradgiver-spania",
    title: "Eiendomsrådgiver Spania",
    eyebrow: "Uavhengig rådgivning",
    hero: "Eiendomsrådgiver i Spania for norske kjøpere",
    description:
      "Få hjelp av norsk rådgiver når du vurderer bolig, nybygg, tomt eller investering i Spania. Vi hjelper deg å sammenligne områder, priser, risiko og neste steg.",
    seoTitle: "Eiendomsrådgiver Spania | Norsk rådgivning ved boligkjøp",
    seoDescription:
      "Trenger du eiendomsrådgiver i Spania? Få norsk hjelp med områdevalg, boligsøk, prisvurdering, forhandling, advokat og trygg kjøpsprosess.",
    primaryCta: { label: "Kontakt rådgiver", href: "/#kontakt" },
    secondaryCta: { label: "Hvorfor rådgiver er viktig", href: "/magasin/hvorfor-god-eiendomsradgiver-er-viktig" },
    sections: [
      {
        heading: "Hvorfor bruke rådgiver?",
        body: [
          "Det spanske eiendomsmarkedet kan være uoversiktlig. Samme bolig kan vises av flere meglere, portaler kan ha utdaterte annonser, og det kan være vanskelig å vite hva som er riktig markedspris.",
          "En god eiendomsrådgiver hjelper deg å sortere støyen, vurdere reelle alternativer og forstå risikoen før du reserverer.",
        ],
        bullets: [
          "Områdevalg og behovsavklaring.",
          "Sammenligning av boliger, prosjekter og prisnivå.",
          "Koordinering med megler, utbygger, bank og advokat.",
          "Oppfølging etter kjøpet, ikke bare frem til signering.",
        ],
      },
      {
        heading: "Rådgivning for nordmenn",
        body: [
          "Som norsk kjøper møter du ofte spørsmål om valuta, finansiering, NIE, skatt, advokat, språk, visningstur og praktiske forhold etter overtakelse. Det er her en strukturert rådgiver kan gi trygghet og spare tid.",
        ],
        bullets: [
          "Vi forklarer prosessen på norsk.",
          "Vi hjelper deg å vurdere hva som faktisk passer din situasjon.",
          "Vi anbefaler juridisk og økonomisk ekspertise der det trengs.",
        ],
      },
    ],
    faq: [
      {
        question: "Hva gjør en eiendomsrådgiver i Spania?",
        answer:
          "En rådgiver hjelper deg med områdevalg, boligsøk, prisvurdering, risiko, alternativer, forhandling og koordinering av kjøpsprosessen.",
      },
      {
        question: "Er eiendomsrådgiver det samme som megler?",
        answer:
          "Ikke alltid. En megler selger ofte konkrete objekter, mens en rådgiver bør hjelpe deg bredere med vurdering, strategi og trygg kjøpsprosess.",
      },
      {
        question: "Kan en rådgiver hjelpe med boliger fra andre meglere?",
        answer:
          "Ofte ja. I Spania kan flere aktører ha tilgang til samme bolig. En rådgiver kan ofte undersøke boliger du har funnet hos andre.",
      },
    ],
    related: [
      { label: "Hvorfor en god eiendomsrådgiver er viktig", href: "/magasin/hvorfor-god-eiendomsradgiver-er-viktig" },
      { label: "Idealista og Finn.no er ikke alltid fasit", href: "/magasin/idealista-finn-ikke-alltid-til-a-stole-pa" },
      { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
    ],
  },
  {
    slug: "tomt-i-spania",
    title: "Tomt i Spania",
    eyebrow: "Tomt og bygging",
    hero: "Kjøpe tomt i Spania og bygge moderne bolig",
    description:
      "Vurderer du tomt i Spania? Vi hjelper deg å kontrollere regulering, byggbarhet, vann, strøm, adkomst, arkitekt, budsjett og kjøpsprosess.",
    seoTitle: "Tomt i Spania | Kjøpe tomt og bygge hus trygt",
    seoDescription:
      "Kjøpe tomt i Spania? Få hjelp til å vurdere byggbarhet, regulering, vann, strøm, adkomst, arkitekt, kostnader og trygg prosess.",
    primaryCta: { label: "Se tomter", href: "/tomter" },
    secondaryCta: { label: "Les tomteguiden", href: "/magasin/guide-tomtekjop-bygging-i-spania" },
    sections: [
      {
        heading: "Tomt gir frihet, men krever kontroll",
        body: [
          "Å kjøpe tomt i Spania kan gi mulighet til å bygge boligen du faktisk ønsker. Samtidig er tomtekjøp mer komplekst enn kjøp av ferdig bolig, fordi regulering, adkomst, vann, strøm og byggbarhet må kontrolleres før kjøp.",
          "Mange tomter ser attraktive ut i annonser, men har begrensninger som kan gjøre prosjektet dyrere, tregere eller umulig.",
        ],
        bullets: [
          "Kontroller om tomten er urban, rustikk eller byggbar etter lokal plan.",
          "Sjekk lovlig adkomst, vann, strøm og kloakk/renseanlegg.",
          "Få arkitekt eller teknisk rådgiver til å vurdere tomten tidlig.",
        ],
      },
      {
        heading: "Hvor passer tomt og nybygg best?",
        body: [
          "For mange kjøpere er innlandsområder som Pinoso, Aspe og Novelda interessante fordi man kan få større tomter, mer ro, natur og mulighet for moderne bolig med mer privatliv. Kystnære tomter finnes også, men pris og regulering kan være mer krevende.",
        ],
        bullets: [
          "Innlandet kan gi mer areal og lavere pris per kvadratmeter.",
          "Kystnære tomter kan gi bedre utleiepotensial, men høyere pris.",
          "Totalbudsjettet må inkludere infrastruktur, arkitekt, lisens og buffer.",
        ],
      },
    ],
    faq: [
      {
        question: "Kan jeg bygge hus på alle tomter i Spania?",
        answer:
          "Nei. Byggbarhet avhenger av regulering, kommunale planer, tomtestørrelse, adkomst og teknisk infrastruktur. Dette må kontrolleres før kjøp.",
      },
      {
        question: "Hva må jeg sjekke før jeg kjøper tomt?",
        answer:
          "Kontroller hjemmel, regulering, byggbarhet, vann, strøm, adkomst, grunnforhold, kommunale planer, kostnader og finansiering.",
      },
      {
        question: "Bør jeg bruke advokat ved tomtekjøp?",
        answer:
          "Ja. Tomtekjøp krever grundig juridisk kontroll, spesielt rundt eiendomsrett, heftelser, regulering, servitutter og adkomst.",
      },
    ],
    related: [
      { label: "Guide til tomtekjøp og bygging i Spania", href: "/magasin/guide-tomtekjop-bygging-i-spania" },
      { label: "Se tomter", href: "/tomter" },
      { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
