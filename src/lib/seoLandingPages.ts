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
    seoTitle: "Bolig i Spania | Norsk rådgivning for trygt boligkjøp",
    seoDescription:
      "Bolig i Spania: få norsk rådgivning om områdevalg, nybygg, villa, leilighet, finansiering, NIE, advokat og en trygg kjøpsprosess fra start til slutt.",
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
      { label: "Områdeguide for eiendomskjøp i Spania", href: "/guide/omradeguide-eiendomskjop-i-spania" },
      { label: "Kjøpsprosess for bolig i Spania", href: "/guide/kjope-bolig-i-spania" },
      { label: "Finansiering, notar og NIE", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
    ],
  },
  {
    slug: "nybygg-i-spania",
    title: "Nybygg i Spania",
    eyebrow: "Komplett guide · oppdatert 2026",
    hero: "Nybygg i Spania: dette bør du vite før du reserverer",
    description:
      "Nybygg kan gi moderne standard, lavere vedlikeholdsbehov og en mer forutsigbar teknisk start. Samtidig kjøper du ofte før boligen er ferdig, betaler i flere omganger og må forstå utbygger, kontrakt, garantier, skatter, leveranse og overtakelse før du binder deg.",
    seoTitle: "Nybygg i Spania | Komplett guide for norske kjøpere 2026",
    seoDescription:
      "Nybygg i Spania: les om utbygger, betalingsplan, bankgaranti, 10 % IVA, AJD, energieffektivitet, tilvalg, overtakelse og trygg kjøpsprosess.",
    primaryCta: { label: "Se nybygg og boliger", href: "/eiendommer" },
    secondaryCta: { label: "Beregn kjøpskostnadene", href: "/guide/kostnader-boligkjop-spania" },
    sections: [
      {
        heading: "Hvorfor mange velger nybygg i Spania",
        body: [
          "Nybygg gir ofte moderne planløsninger, nye tekniske installasjoner, bedre energiytelse og mindre vedlikehold de første årene. For en feriebolig kan det være attraktivt å vite at rør, strøm, klimaanlegg, vinduer og fellesanlegg er nye fremfor å overta en eldre bolig med ukjent historikk.",
          "Nybygg er likevel ikke automatisk et tryggere eller bedre kjøp. Du må vurdere mikrobeliggenheten, utbyggeren, prosjektfasen, betalingsplanen, hva som faktisk er inkludert og hvor lenge du skal vente på overtakelsen. Et flott visningskontor eller en god 3D-presentasjon erstatter ikke dokumentkontroll.",
        ],
        bullets: [
          "Lavere forventet vedlikehold i starten, men ikke vedlikeholdsfritt.",
          "Ofte bedre isolasjon, vinduer og energieffektive tekniske løsninger.",
          "Mulighet for enkelte tilvalg dersom du kjøper tidlig nok i prosjektet.",
          "Større behov for å forstå kontrakt, byggeperiode og forskuddsbetalinger.",
        ],
      },
      {
        heading: "Slik skiller nybygg seg fra bruktbolig",
        body: [
          "Ved bruktbolig kan du normalt se den ferdige boligen, undersøke faktiske solforhold og overta forholdsvis raskt. Ved nybygg kan du kjøpe fra plantegning eller mens prosjektet er under oppføring. Da blir kontrakt, leveransebeskrivelse og utbyggers dokumentasjon en større del av beslutningsgrunnlaget.",
          "Betalingen skjer også ofte trinnvis. Reservasjon etterfølges gjerne av kontrakt og avtalte delbetalinger under byggeperioden, før sluttoppgjøret gjennomføres ved ferdigstillelse og notar. Den konkrete betalingsplanen varierer fra prosjekt til prosjekt.",
        ],
      },
      {
        heading: "Hva du bør kontrollere før du reserverer",
        body: [
          "Før reservasjon bør pris, tilgjengelighet, bygge- og leveringsstatus bekreftes skriftlig. Be også om plantegning, kvalitetsbeskrivelse, betalingsplan og informasjon om hva som er inkludert i den annonserte prisen.",
          "Jeg anbefaler at en uavhengig spansk advokat kontrollerer prosjektet og kontraktene før du gjør vesentlige betalinger. Megler, utbygger, notar og kjøpers advokat har forskjellige roller; advokaten skal ivareta dine interesser.",
        ],
        bullets: [
          "Hvem er utbygger, og hvilke prosjekter har selskapet levert tidligere?",
          "Foreligger nødvendige tillatelser for den fasen prosjektet er i?",
          "Hva er forventet ferdigstillelse, og hva sier kontrakten om forsinkelse?",
          "Hvilken bolig, parkering, bod, terrasse og uteareal er juridisk knyttet til kjøpet?",
          "Hva følger med av hvitevarer, belysning, klimaanlegg, møbler, basseng og hage?",
        ],
      },
      {
        heading: "Betalingsplan og sikring av forskuddsbetalinger",
        body: [
          "Når du kjøper bolig under oppføring, betaler du ofte deler av kjøpesummen før boligen er ferdig. Etter dagens regler i Ley de Ordenación de la Edificación skal relevante forskuddsbetalinger, fra tidspunktet lovens vilkår er oppfylt, sikres gjennom godkjent forsikring eller bankgaranti dersom prosjektet ikke blir startet eller ferdigstilt som avtalt.",
          "Reglene krever også at slike forskudd håndteres gjennom en særskilt konto, og garantien skal omfatte forskuddsbeløpene, relevante skatter og lovbestemt rente. Din advokat bør kontrollere at garantien, kontoen, beløpet, kjøpernavnet og den konkrete boligen stemmer før vesentlige overføringer.",
        ],
        bullets: [
          "Betal bare til konto som er kontrollert mot prosjekt og kontrakt.",
          "Be om dokumentasjon som gjelder dine konkrete forskuddsbetalinger.",
          "Ta vare på alle kvitteringer, kontrakter og garanti-/forsikringsdokumenter.",
          "Ley 57/1968 er historisk; dagens ordning følger senere lovgivning, særlig LOE.",
        ],
      },
      {
        heading: "Hva koster nybygg i tillegg til kjøpesummen?",
        body: [
          "Ordinær førstegangsoverdragelse av bolig fra utbygger har normalt 10 % IVA. I tillegg kommer regional AJD. På Costa Blanca i Comunitat Valenciana er den generelle AJD-satsen 1,4 % fra 1. juni 2026 for relevante notarielle dokumenter, mens særregler blant annet finnes for egen faste bolig når vilkårene er oppfylt.",
          "I tillegg må du budsjettere med juridisk bistand, notar og eiendomsregister, og eventuelle kostnader knyttet til finansiering, fullmakt, oversettelse, møbler og tilvalg. Bruk derfor totalbudsjett, ikke annonsert kjøpesum, når du bestemmer prisklasse.",
        ],
        bullets: [
          "IVA på ordinære nye boliger: normalt 10 %.",
          "AJD er regional og må kontrolleres for den konkrete boligen og kjøperen.",
          "Notar og register følger regulerte tariffer og beregnes konkret.",
          "Advokathonorar og andre tjenester avtales med leverandøren.",
        ],
      },
      {
        heading: "Leveransebeskrivelsen er like viktig som plantegningen",
        body: [
          "Mange prosjekter presenteres med svært gode illustrasjoner, men det er leveransebeskrivelsen og kontrakten som bør styre forventningene. Kontroller hvilke materialer og kvaliteter som er avtalt, hvilke produkter som kan erstattes med tilsvarende, og hva som regnes som tilvalg.",
          "Sjekk spesielt kjøkken og hvitevarer, belysning, garderober, klimaanlegg, gulv, baderom, solskjerming, solceller, basseng, hage, parkering, ladeløsning og opparbeidelse av uteområder. To boliger med lik annonsepris kan få svært forskjellig sluttpris når tilvalg tas med.",
        ],
      },
      {
        heading: "Energiklasse, isolasjon og solceller",
        body: [
          "Nyere byggekrav gir ofte bedre energiytelse enn i mange eldre spanske boliger, men du bør fortsatt lese dokumentasjonen. Energiklasse, isolasjon, vinduer, orientering, solskjerming, ventilasjon og klimaanlegg påvirker både komfort og strømforbruk.",
          "Solceller kan være positivt, men sjekk hva som faktisk er installert eller klargjort, anleggets størrelse, orientering og om løsningen er individuell eller felles. Ikke bruk ordet 'energieffektiv' som erstatning for tekniske spesifikasjoner og energiattest.",
        ],
      },
      {
        heading: "Overtakelse: kontroller boligen før sluttoppgjøret",
        body: [
          "Når boligen nærmer seg ferdigstillelse, bør dokumentasjon og fysisk leveranse kontrolleres før sluttoppgjøret. Gå gjennom boligen systematisk og noter mangler, skader, feil på overflater, dører, vinduer, sanitærutstyr, elektrisk anlegg, klimaanlegg og eventuelle tilvalg.",
          "Spansk byggelovgivning har ulike ansvarsperioder for byggfeil, blant annet ett år for enkelte utførelsesfeil, tre år for forhold knyttet til habitabilitet og ti år for alvorlige strukturelle feil. Dette betyr ikke at alle problemer automatisk løses; dokumenter avvik tidlig og bruk de riktige fagpersonene.",
        ],
      },
      {
        heading: "Tidlig prosjektfase eller nesten ferdig?",
        body: [
          "Kjøper du tidlig, kan du få større utvalg av beliggenhet i prosjektet og noen ganger flere tilvalg, men du må vente lenger og forholde deg til mer byggeaktivitet og større usikkerhet rundt det ferdige nabolaget. Kjøper du nær ferdigstillelse, ser du mer av det faktiske resultatet og kan ofte overta raskere, men de beste plasseringene kan allerede være solgt.",
          "Jeg ville derfor sammenlignet ikke bare pris, men solretning, utsikt, fremtidige byggetrinn, nabotomter, fellesområder, vei og gangavstand til det du faktisk skal bruke i hverdagen.",
        ],
      },
      {
        heading: "Min anbefaling før du velger prosjekt",
        body: [
          "Ikke start med spørsmålet 'hvilket prosjekt er finest?'. Start med område, totalbudsjett og hvordan boligen skal brukes. Deretter kan du sammenligne 2–4 reelle prosjekter på de samme kriteriene: beliggenhet, totalpris, levering, standard, felleskostnader, garantier og videresalg.",
          "På den måten blir nybygg et boligvalg – ikke et salgsmøte. Zen Eco Homes kan hjelpe med område og prosjektshortlist, mens uavhengig advokat bør kontrollere de juridiske dokumentene før du binder deg.",
        ],
      },
    ],
    faq: [
      {
        question: "Hvor mye skatt betaler man på nybygg i Spania?",
        answer:
          "Ved ordinær førstegangsoverdragelse av bolig fra utbygger er IVA normalt 10 %. Regional AJD kommer i tillegg. I Comunitat Valenciana er den generelle AJD-satsen 1,4 % fra 1. juni 2026, med særregler for enkelte situasjoner.",
      },
      {
        question: "Er forskuddsbetalinger på nybygg sikret?",
        answer:
          "Spansk lov har regler om sikring av relevante forskuddsbetalinger gjennom bankgaranti eller forsikring når vilkårene er oppfylt. Advokaten din bør kontrollere garanti, særskilt konto og dokumentasjon for den konkrete betalingen.",
      },
      {
        question: "Gjelder Ley 57/1968 fortsatt?",
        answer:
          "Selve Ley 57/1968 er opphevet. Beskyttelsen av forskuddsbetalinger er videreført i senere lovgivning, særlig i Ley de Ordenación de la Edificación med dagens regler om garantier.",
      },
      {
        question: "Er nybygg alltid mer energieffektivt?",
        answer:
          "Nyere krav gir ofte bedre energiytelse, men ikke alle prosjekter er like. Sammenlign energiklasse, isolasjon, vinduer, orientering, solskjerming og tekniske installasjoner på den konkrete boligen.",
      },
      {
        question: "Kan prisene på nybygg forhandles?",
        answer:
          "Utbyggere har ofte faste prislister, men det kan i noen prosjekter finnes rom for tilvalg, møbler, hvitevarer, betalingsplan eller andre kommersielle vilkår. Sammenlign alltid totalpakken.",
      },
      {
        question: "Hvor lang tid tar det før et nybygg er ferdig?",
        answer:
          "Det varierer med prosjektfase. Mange kjøp under oppføring innebærer 12–24 måneders ventetid, men ferdige eller nesten ferdige boliger kan overtas langt raskere. Bruk kontraktens konkrete leveringsfrister som grunnlag.",
      },
    ],
    related: [
      { label: "Kjøpe bolig i Spania – komplett guide", href: "/guide/kjope-bolig-i-spania" },
      { label: "Kostnader ved boligkjøp – med kalkulator", href: "/guide/kostnader-boligkjop-spania" },
      { label: "Finansiere bolig i Spania", href: "/guide/finansiere-bolig-i-spania" },
      { label: "Juridiske fallgruver ved boligkjøp", href: "/guide/juridiske-fallgruver-boligkjop-spania" },
      { label: "Boliger og nybygg til salgs", href: "/eiendommer" },
    ],
  },
  {
    slug: "nybygg-costa-blanca",
    title: "Nybygg Costa Blanca",
    eyebrow: "Costa Blanca",
    hero: "Nybygg på Costa Blanca for norske boligkjøpere",
    description:
      "Costa Blanca har et stort utvalg nybygg, villaer, leiligheter og prosjekter. Vi hjelper deg å sammenligne kyst, innland, prisnivå og livsstil før kjøp.",
    seoTitle: "Nybygg Costa Blanca | Boliger med norsk rådgivning",
    seoDescription:
      "Nybygg på Costa Blanca: sammenlign nord og sør, områder, prisnivå, boliger og prosjekter med norsk rådgivning gjennom hele kjøpsprosessen i Spania.",
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
      { label: "Områdeguide", href: "/guide/omradeguide-eiendomskjop-i-spania" },
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
    seoTitle: "Eiendomsrådgiver i Spania | Norsk hjelp ved boligkjøp",
    seoDescription:
      "Eiendomsrådgiver i Spania: få norsk hjelp med områdevalg, boligsøk, prisvurdering, forhandling, advokat og trygg kjøpsprosess fra første samtale.",
    primaryCta: { label: "Kontakt rådgiver", href: "/booking" },
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
    seoTitle: "Tomt i Spania | Kjøpe tomt og bygge moderne bolig trygt",
    seoDescription:
      "Tomt i Spania: få hjelp til å vurdere byggbarhet, regulering, vann, strøm, adkomst, arkitekt, kostnader og trygg prosess før du kjøper og bygger.",
    primaryCta: { label: "Se tomter", href: "/omrader/innlandet/tomter" },
    secondaryCta: { label: "Les tomteguiden", href: "/guide/guide-tomtekjop-bygging-i-spania" },
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
      { label: "Guide til tomtekjøp og bygging i Spania", href: "/guide/guide-tomtekjop-bygging-i-spania" },
      { label: "Se tomter", href: "/omrader/innlandet/tomter" },
      { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
