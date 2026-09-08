export type ArticleTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  table?: ArticleTable;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated: string;
  category: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string[];
  sections: ArticleSection[];
  nextSteps: string[];
  faq: { question: string; answer: string }[];
  /** Valgfri artikkel-CTA (f.eks. lenke til filtrert boligsøk eller Boligmatch). */
  cta?: { label: string; href: string };
  /** Innholdssilo for URL-struktur og tematisk gruppering. Uten verdi = /magasin. */
  silo?: "kjopsprosess" | "guide";
};

export const areas = [
  {
    name: "Costa Blanca Nord",
    places: "Altea, Albir, Calpe, Finestrat, Polop og La Nucia",
    text: "For deg som ønsker vakre omgivelser, etablerte internasjonale miljøer og kort vei mellom strand, fjell og byliv.",
  },
  {
    name: "Costa Blanca Sør",
    places: "Torrevieja, Orihuela Costa, Guardamar og Ciudad Quesada",
    text: "Et populært område for nordmenn som vil ha strandnært liv, golf, service og et stort utvalg moderne prosjekter.",
  },
  {
    name: "Costa Calida",
    places: "San Pedro del Pinatar, Los Alcazares, Cartagena og Murcia",
    text: "Et spennende marked med nyere prosjekter, god verdi for pengene og roligere tempo enn de mest etablerte kystbyene.",
  },
];

export const articles: Article[] = [
  {
    slug: "omradeguide-eiendomskjop-i-spania",
    title: "Områdeguide for eiendomskjøp i Spania",
    excerpt:
      "Sammenlign Costa Blanca, Costa del Sol, Valencia og Kanariøyene ut fra livsstil, boligtype, prisnivå, skole, flyplass og helårsbruk.",
    date: "2026-05-10",
    updated: "2026-05-10",
    category: "Områdeguide",
    readingTime: "9 min lesing",
    image: "/assets/magasin-covers/omradevalg.svg",
    imageAlt: "Illustrasjon av spanske boligområder med kyst, fjell, by og øyer",
    seoTitle: "Områdeguide for boligkjøp i Spania | Costa Blanca, Costa del Sol og Valencia",
    seoDescription:
      "Finn riktig område for boligkjøp i Spania. Guide for nordmenn som vurderer Costa Blanca, Costa del Sol, Valencia eller Kanariøyene.",
    keywords: ["boligkjøp i Spania", "områdeguide Spania", "Costa Blanca bolig", "Costa del Sol bolig", "Valencia eiendom"],
    intro: [
      "Det viktigste valget ved boligkjøp i Spania er ofte ikke selve boligen, men området. To boliger til samme pris kan gi helt ulike hverdager, kostnader og muligheter for utleie, skole, golf, strandliv eller roligere helårsbruk.",
      "Denne områdeguiden hjelper deg å sortere de mest aktuelle områdene etter livsstil, typiske kjøpere, boligtyper, prisnivå og praktiske forhold som flyplass, service, skole og avstand til strand.",
    ],
    sections: [
      {
        heading: "Costa del Sol – Málaga-provinsen",
        body: [
          "Costa del Sol passer godt for pensjonister, golfentusiaster, investorer og familier som ønsker etablerte internasjonale miljøer. Her finner du sterk infrastruktur, mange helsetjenester, et aktivt restaurantliv og et stort utvalg av golfbaner.",
          "Typiske boligtyper er leiligheter fra cirka 150.000 til 800.000 euro, rekkehus fra cirka 200.000 til 600.000 euro og villaer fra cirka 300.000 euro til flere millioner. Prisene varierer kraftig mellom Fuengirola, Mijas, Marbella, Estepona og luksusområder som Puerto Banús.",
        ],
        bullets: [
          "Passer for: pensjonister, golfkjøpere, familier og kjøpere som ønsker etablerte miljøer.",
          "Fordeler: mye service, godt flytilbud, internasjonalt miljø, mange golfbaner og lang sesong.",
          "Ulemper: høyere priser, mer turisme i sommermånedene og mindre ro enn i flere andre områder.",
          "Neste steg: vurder Fuengirola for sosialt miljø, La Cala de Mijas for familier og Marbella/Puerto Banús for luksus.",
        ],
      },
      {
        heading: "Costa Blanca – Alicante-provinsen",
        body: [
          "Costa Blanca passer for familier, pensjonister, naturelskere og kjøpere som vil ha en god balanse mellom pris, klima, service og livskvalitet. Regionen gir tilgang til både strand, fjell, småbyer, golf og norske miljøer uten at alt føles like turistpreget som de mest kjente områdene på Costa del Sol.",
          "I kystbyene finner du leiligheter, rekkehus og villaer i ulike prisklasser. I innlandet rundt Pinoso, Aspe, Novelda og omkringliggende landsbyer kan tomter, nybygg og større eiendommer gi mer plass, ro og mulighet for en mer selvforsynt livsstil.",
        ],
        bullets: [
          "Passer for: familier, pensjonister, unge par, naturelskere og de som ønsker helårsbruk.",
          "Fordeler: lavere prisnivå enn Costa del Sol, god flyforbindelse via Alicante, fjell og strand i samme region.",
          "Ulemper: store lokale forskjeller; riktig områdevalg er avgjørende for hverdagsliv og videresalg.",
          "Neste steg: vurder Altea, Albir, Calpe og Jávea for kystliv, eller Pinoso/Aspe/Novelda for tomt og nybygg.",
        ],
      },
      {
        heading: "Valencia-regionen",
        body: [
          "Valencia passer for unge par, familier, kulturinteresserte og kjøpere som ønsker mer autentisk spansk byliv. Byen kombinerer strand, sykkelveier, parker, matopplevelser og et mer urbant hverdagsliv enn tradisjonelle ferieområder.",
          "Boligene består hovedsakelig av leiligheter i sentrum, forsteder og strandnære bydeler. Prisnivået er ofte lavere enn Madrid og Barcelona, men de beste nabolagene har hatt sterk etterspørsel.",
        ],
        bullets: [
          "Passer for: bymennesker, familier, digitale arbeidere og investorer med langsiktig perspektiv.",
          "Fordeler: levende byliv, god kollektivtransport, kultur, restauranter og strand innen kort avstand.",
          "Ulemper: mindre norsk miljø og større behov for spansk språk i hverdagen.",
          "Neste steg: vurder Ciutat Vella for byliv, Eixample for komfort og El Cabanyal for strandnær identitet.",
        ],
      },
      {
        heading: "Kanariøyene",
        body: [
          "Kanariøyene passer for deg som prioriterer stabilt klima hele året. Øyene tiltrekker pensjonister, naturelskere, fjellvandrere, syklister, vannsportinteresserte og kjøpere som vil ha vintervarme når fastlandet er kjøligere.",
          "Boligmarkedet varierer mye mellom Gran Canaria, Tenerife, Lanzarote og Fuerteventura. Det er viktig å vurdere øy, mikroklima, vind, reisetid, importkostnader og tilgang til service før kjøp.",
        ],
        bullets: [
          "Passer for: pensjonister, naturelskere, vinterboere og aktive friluftsmennesker.",
          "Fordeler: stabilt klima, unik natur, gode strender og lang vintersesong.",
          "Ulemper: lengre reisevei fra Norge, øylogistikk og begrenset utvalg i enkelte områder.",
          "Neste steg: test flere øyer før du bestemmer deg; opplevelsen kan være svært forskjellig.",
        ],
      },
    ],
    nextSteps: [
      "Definer hva boligen skal brukes til: ferie, helårsbruk, utleie, pensjonistliv eller familiehverdag.",
      "Lag en prioriteringsliste for strand, flyplass, skole, golf, helsetjenester, byliv og ro.",
      "Bestill en områdegjennomgang før visning, slik at du ikke bruker tid på feil steder.",
      "Vurder å leie kort tid i området før kjøp dersom du er usikker på hverdagslivet.",
    ],
    faq: [
      {
        question: "Hvilket område i Spania passer best for nordmenn?",
        answer:
          "Costa Blanca er ofte et godt førstevalg for nordmenn som ønsker balanse mellom pris, klima, flyforbindelser og service. Costa del Sol passer godt for dem som vil ha større internasjonalt miljø og golf, mens Valencia passer bedre for byliv.",
      },
      {
        question: "Er Costa Blanca billigere enn Costa del Sol?",
        answer:
          "I mange segmenter er Costa Blanca rimeligere, spesielt utenfor de mest eksklusive kystområdene. Prisforskjellen avhenger likevel av by, standard, avstand til sjø og om du kjøper nytt eller brukt.",
      },
      {
        question: "Bør jeg velge kyst eller innland?",
        answer:
          "Kysten gir enklere utleie, strand og mer service. Innlandet gir ofte mer tomt, ro, natur og lavere pris per kvadratmeter. Valget bør styres av livsstil og hvor mye du faktisk skal bruke boligen.",
      },
    ],
  },
  {
    slug: "guide-tomtekjop-bygging-i-spania",
    title: "Guide til tomtekjøp og bygging i Spania",
    excerpt:
      "Hva du må kontrollere før tomtekjøp: regulering, byggbarhet, vann, strøm, adkomst, arkitekt, lisens, budsjett og due diligence.",
    date: "2026-05-10",
    updated: "2026-05-10",
    category: "Tomt og nybygg",
    readingTime: "10 min lesing",
    image: "/assets/magasin-covers/tomt-bygg.svg",
    imageAlt: "Illustrasjon av tomt, moderne bolig, tegninger og bygging i Spania",
    seoTitle: "Tomtekjøp og bygging i Spania | Guide for nordmenn",
    seoDescription:
      "Slik kjøper du tomt og bygger bolig i Spania. Les om regulering, vann, strøm, adkomst, byggetillatelse, arkitekt og kostnader.",
    keywords: ["tomt i Spania", "bygge hus i Spania", "kjøpe tomt Costa Blanca", "byggelisens Spania", "nybygg Spania"],
    intro: [
      "Å kjøpe tomt og bygge bolig i Spania kan gi deg akkurat den boligen og livsstilen du ønsker. Samtidig er prosessen mer kompleks enn et vanlig boligkjøp, fordi du må kontrollere regulering, byggbarhet, infrastruktur, kostnader og lokale krav før du forplikter deg.",
      "Denne guiden gir deg en praktisk oversikt over de viktigste punktene du bør undersøke før bud, reservasjon eller kjøp av tomt.",
    ],
    sections: [
      {
        heading: "Hva du må forstå før tomtekjøp",
        body: [
          "Først må du kontrollere eiendomsretten. Tomten skal ha ren hjemmel registrert i Registro de la Propiedad, og det må undersøkes om det finnes heftelser, panterettigheter, servitutter, ubetalte avgifter eller tvister.",
          "Deretter må du forstå hvilken type grunn du kjøper. En tomt kan være urban, utviklingsklar, rustikk eller ikke-byggbar. Mange tomter ser attraktive ut, men kan ha begrensninger som gjør at boligdrømmen ikke kan realiseres slik du ser for deg.",
        ],
        bullets: [
          "Sjekk hjemmel, heftelser og eiendomsregister før reservasjon.",
          "Avklar om tomten faktisk kan bebygges som planlagt.",
          "Undersøk kommunale planer, nabotomter og fremtidig infrastruktur.",
          "Beregn løpende kostnader som IBI, renovasjon og lokale gebyrer.",
        ],
      },
      {
        heading: "Regulering, vann, strøm og adkomst",
        body: [
          "Reguleringsplanen bestemmer hva som kan bygges, hvor stort du kan bygge, byggehøyde, avstand til grenser, estetiske krav og krav til teknisk infrastruktur. En lokal advokat og arkitekt bør kontrollere dette før du kjøper.",
          "Tilgang til vann, strøm og lovlig adkomst er avgjørende. I innlandsområder kan vann komme fra kommunalt nett, vannlag, brønn eller tank. Strømtilkobling kan være enkel på noen tomter og svært kostbar på andre. Adkomst må være lovlig dokumentert, ikke bare praktisk mulig.",
        ],
        bullets: [
          "Be om skriftlig bekreftelse på byggbarhet fra kommunen der det er mulig.",
          "Kontroller vannkilde, vannrettigheter og eventuell kloakkløsning.",
          "Få estimat på strømtilkobling før kjøp.",
          "Dokumenter veirett og adkomst juridisk.",
        ],
      },
      {
        heading: "Kostnadsbilde fra tomt til ferdig bolig",
        body: [
          "Totalbudsjettet bør inkludere mer enn tomt og byggekostnad. Du må regne inn arkitekt, tekniske rapporter, lisens, kommunale gebyrer, advokat, geoteknikk, infrastruktur, tilkoblinger, terrengarbeid, basseng, uteområder og buffer.",
          "Som tommelfingerregel bør du ha en tydelig reserve for uforutsette forhold. Grunnforhold, terreng, materialvalg, energiløsninger og kommunale krav kan påvirke sluttsummen betydelig.",
        ],
        bullets: [
          "Tomt kan utgjøre en stor andel av totalinvesteringen i attraktive områder.",
          "Arkitekt og tekniske fagpersoner bør inn i prosessen tidlig.",
          "Sett av buffer, ofte minimum 15–20 prosent av beregnet prosjektkostnad.",
          "Finansiering av tomt og bygg kan være vanskeligere enn kjøp av ferdig bolig.",
        ],
      },
      {
        heading: "Arkitekt, entreprenør, lisens og tidslinje",
        body: [
          "Arkitekten må være registrert i det spanske arkitektforbundet og har en sentral rolle i tegninger, teknisk dokumentasjon, søknad om byggetillatelse og oppfølging av prosjektet.",
          "Entreprenøren bør ha dokumenterte referanser, forsikringer, riktig kompetanse og lokal erfaring. Tidslinjen varierer, men prosjektering og tillatelser kan ta 6–12 måneder, bygging 12–18 måneder og ferdigattest ytterligere tid.",
        ],
        bullets: [
          "Velg arkitekt med lokal erfaring fra kommunen.",
          "Bruk skriftlig kontrakt med tydelig pris, leveranse, betalingsplan og ansvar.",
          "Vurder uavhengig byggeleder hvis du ikke bor i Spania under byggingen.",
          "Planlegg med god margin; forsinkelser er vanlig.",
        ],
      },
      {
        heading: "Anbefalt due diligence før bud",
        body: [
          "Due diligence bør dekke juridiske, tekniske, økonomiske og praktiske forhold. Det er bedre å bruke tid og penger før reservasjon enn å oppdage begrensninger etter at du har forpliktet deg.",
        ],
        bullets: [
          "Advokat kontrollerer eiendomsdokumenter, regulering, heftelser og kontrakt.",
          "Arkitekt vurderer byggbarhet, utnyttelse, terreng og realistisk prosjekt.",
          "Teknisk rådgiver vurderer grunn, adkomst, vann, strøm og naturfare.",
          "Bank eller finansrådgiver vurderer finansiering, valuta og likviditet.",
        ],
      },
    ],
    nextSteps: [
      "Finn ut om du ønsker kystnært prosjekt, innlandstomt eller større finca-/landeiendom.",
      "Engasjer lokal advokat før reservasjon av tomt.",
      "Få arkitekt eller byggerådgiver til å vurdere tomten før du legger bud.",
      "Lag komplett budsjett med buffer, ikke bare pris på tomt og bygg.",
    ],
    faq: [
      {
        question: "Kan utlendinger kjøpe tomt i Spania?",
        answer:
          "Ja, utlendinger kan kjøpe tomt i Spania, men du må ha NIE-nummer og bør bruke spansk advokat for å kontrollere hjemmel, regulering og kontrakt.",
      },
      {
        question: "Er alle tomter i Spania byggbare?",
        answer:
          "Nei. Mange tomter har begrensninger eller er ikke byggbare. Byggbarhet må kontrolleres mot kommunal reguleringsplan og lokale krav før kjøp.",
      },
      {
        question: "Hvor lang tid tar det å bygge hus i Spania?",
        answer:
          "For en enebolig er det vanlig å planlegge med flere måneder til prosjektering og tillatelser, deretter ofte 12–18 måneder bygging. Kommunale behandlingstider varierer.",
      },
    ],
  },
  {
    slug: "kjop-bolig-i-spania-na-eller-vente",
    title: "Bør man kjøpe bolig i Spania nå, eller vente?",
    excerpt:
      "Markedet preges av høy etterspørsel, begrenset tilbud og usikker timing. Her er en nøktern vurdering for nordmenn som vurderer bolig i Spania.",
    date: "2026-05-10",
    updated: "2026-05-10",
    category: "Marked",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/kjope-na.svg",
    imageAlt: "Illustrasjon av spansk boligmarked med vekt mellom å kjøpe nå og vente",
    seoTitle: "Kjøpe bolig i Spania nå eller vente? Markedsguide for nordmenn",
    seoDescription:
      "Bør du kjøpe bolig i Spania nå eller vente? Les om tilbud, etterspørsel, prispress, renter, risiko og hvordan du bør vurdere timing.",
    keywords: ["kjøpe bolig i Spania nå", "spansk boligmarked", "boligpriser Spania", "investere i bolig Spania"],
    intro: [
      "Mange som vurderer bolig i Spania spør om de bør kjøpe nå eller vente på et prisfall. Det er et naturlig spørsmål, men det finnes sjelden ett perfekt tidspunkt som passer alle.",
      "Det viktigste er å forstå markedskreftene, egen økonomi og hvor lenge du planlegger å eie. For noen kan venting være fornuftig. For andre kan venting føre til færre valgmuligheter og høyere inngangsbillett.",
    ],
    sections: [
      {
        heading: "Lærdommen fra 2020–2023",
        body: [
          "Etter pandemien forventet mange at boligmarkedet i Spania skulle falle. I flere attraktive områder skjedde det motsatte. Etterspørselen etter sol, plass, hjemmekontor, tryggere livsstil og feriebolig holdt seg sterk, samtidig som godt beliggende boliger ikke kom i stort nok antall.",
          "Lærdommen er at det kan være risikabelt å vente på et generelt prisfall i områder der tilbudet er begrenset og etterspørselen er internasjonal.",
        ],
        bullets: [
          "Attraktive kystområder oppfører seg ofte annerledes enn nasjonale gjennomsnittstall.",
          "Kjøpere konkurrerer ikke bare med lokale, men også med andre europeere.",
          "Gode boliger med riktig beliggenhet holder seg ofte bedre i pris.",
        ],
      },
      {
        heading: "Dagens marked: tilbud møter ikke etterspørsel",
        body: [
          "Spania har hatt en vedvarende ubalanse mellom nye husholdninger, boligbehov og ferdigstilte boliger. Flere analyser peker på et betydelig boligunderskudd, særlig i pressområder og provinser med høy etterspørsel.",
          "For kjøpere betyr dette at de beste objektene ikke nødvendigvis blir billigere bare fordi man venter. Det kan tvert imot bli færre gode alternativer i riktig prisklasse.",
        ],
        bullets: [
          "Begrenset nybygging kan holde prispresset oppe i attraktive områder.",
          "Alicante, Málaga og Valencia er blant områdene der etterspørsel og beliggenhet betyr mye.",
          "Markedet er lokalt: én by kan være overpriset, mens nabobyen fortsatt kan gi god verdi.",
        ],
      },
      {
        heading: "Faktorer som kan presse prisene videre",
        body: [
          "Byggekostnader, materialpriser, tomtetilgang, renter, valuta og geopolitisk usikkerhet påvirker markedet. Dersom byggekostnadene stiger, blir det vanskeligere for utbyggere å levere nye boliger billigere enn dagens nivå.",
          "Samtidig kan lavere renter eller bedre finansieringsvilkår bringe flere kjøpere tilbake i markedet. Det kan øke konkurransen om de beste boligene.",
        ],
        bullets: [
          "Høyere byggekostnader kan løfte prisene på nye prosjekter.",
          "Lavere renter kan øke kjøpekraften og etterspørselen.",
          "Sterkere euro mot norske kroner kan gjøre kjøpet dyrere for norske kjøpere.",
          "Forventninger om prisfall bør vurderes mot risikoen for færre gode valg.",
        ],
      },
      {
        heading: "Når det kan være riktig å vente",
        body: [
          "Det kan være fornuftig å vente dersom finansieringen ikke er avklart, du er usikker på område, du trenger å selge bolig hjemme først, eller du ikke vet om boligen skal brukes til ferie, utleie eller helårsbruk.",
          "Å vente uten plan er noe annet enn å forberede seg. Den beste strategien er ofte å bruke ventetiden til å avklare budsjett, område, finansiering, skatter, NIE og ønsket livsstil.",
        ],
        bullets: [
          "Vent hvis du ikke har budsjett, finansiering eller områdevalg klart.",
          "Ikke vent bare fordi du håper på et generelt prisfall.",
          "Følg konkrete delmarkeder, ikke bare overskrifter om Spania som helhet.",
        ],
      },
    ],
    nextSteps: [
      "Få finansieringsavklaring før du forelsker deg i en bolig.",
      "Velg 2–3 aktuelle områder og sammenlign konkrete boliger der.",
      "Beregn totalkostnad inkludert skatt, advokat, notar, valuta og løpende kostnader.",
      "Lag en kjøpsstrategi: hva må være riktig for at du skal handle?",
    ],
    faq: [
      {
        question: "Kommer boligprisene i Spania til å falle?",
        answer:
          "Ingen kan garantere prisutviklingen. I attraktive områder med begrenset tilbud kan prisene holde seg sterke selv om andre deler av markedet kjøles ned.",
      },
      {
        question: "Er 2026 et dårlig tidspunkt å kjøpe bolig i Spania?",
        answer:
          "Ikke nødvendigvis. Det avhenger av område, pris, finansiering og tidshorisont. For langsiktig bruk kan riktig bolig til riktig pris være viktigere enn å treffe perfekt timing.",
      },
      {
        question: "Hva er risikoen ved å vente?",
        answer:
          "Risikoen er at gode boliger i riktig område blir dyrere eller forsvinner fra markedet, særlig dersom rentene faller eller flere kjøpere kommer tilbake.",
      },
    ],
  },
  {
    slug: "finansiering-notar-nie-boligkjop-spania",
    title: "Finansiering, notar og NIE – praktisk veiledning for boligkjøp i Spania",
    excerpt:
      "En praktisk guide til lån i Norge eller Spania, egenkapital, kjøpskostnader, valutarisiko, NIE, bankkonto, notar og betalingsflyt.",
    date: "2026-05-10",
    updated: "2026-05-10",
    category: "Kjøpsprosess",
    readingTime: "9 min lesing",
    image: "/assets/magasin-covers/finansiering.svg",
    imageAlt: "Illustrasjon av finansiering, dokumenter, NIE, bank og notar ved boligkjøp i Spania",
    seoTitle: "Finansiering, notar og NIE ved boligkjøp i Spania",
    seoDescription:
      "Slik fungerer finansiering, NIE, notar, bankkonto og betalingsflyt når nordmenn kjøper bolig i Spania.",
    keywords: ["NIE Spania", "finansiering bolig Spania", "notar Spania", "kjøpskostnader Spania", "spansk bankkonto"],
    intro: [
      "Når du kjøper bolig i Spania, må finansiering, dokumentasjon og juridisk overdragelse planlegges tidlig. For norske kjøpere handler dette ofte om valget mellom lån i Norge, lån i Spania eller egenkapital.",
      "I tillegg trenger du normalt NIE-nummer, spansk bankkonto, advokat, notar og en trygg betalingsflyt frem til overtakelse.",
    ],
    sections: [
      {
        heading: "Finansieringsvalg: Norge, Spania eller egenkapital",
        body: [
          "Lån i Norge kan være enklere å forstå fordi språk, bankforhold og regelverk er kjent. Samtidig tar du valutarisiko dersom lånet er i norske kroner og boligen kjøpes i euro.",
          "Lån i Spania kan redusere valutarisiko på selve lånet og banken kjenner markedet, men prosessen kan være mer dokumenttung. Spanske banker vurderer inntekt, alder, gjeld, eiendommen og kundens risikoprofil.",
        ],
        bullets: [
          "Norsk lån: kjent bank, men valutarisiko NOK/EUR.",
          "Spansk lån: lokal bank og euro-lån, men mer dokumentasjon og mulig språkbarriere.",
          "Egenkapital: enkel overtakelse, men binder kapital og krever god valutaplan.",
          "Sammenlign totalkostnad, ikke bare rente.",
        ],
      },
      {
        heading: "Kjøpskostnader og valutarisiko",
        body: [
          "Kjøpskostnader kommer i tillegg til kjøpesummen. I mange regioner bør kjøpere planlegge med omtrent 10–13 prosent i skatter, avgifter og profesjonelle kostnader, men dette må kontrolleres for aktuell region og boligtype.",
          "Valutarisiko er viktig for nordmenn. En endring i EUR/NOK mellom reservasjon og sluttbetaling kan utgjøre store beløp. Snakk med bank om overføringsplan, valutakonto eller sikring dersom beløpet er stort.",
        ],
        bullets: [
          "Beregn overdragelsesavgift eller IVA/AJD avhengig av bruktbolig eller nybygg.",
          "Legg inn advokat, notar, register, bankkostnader og oversettelser.",
          "Planlegg når euro skal kjøpes, spesielt ved større betalinger.",
          "Bruk skriftlig betalingsplan og unngå hastige overføringer uten kontroll.",
        ],
      },
      {
        heading: "NIE, bankkonto og notar",
        body: [
          "NIE-nummer er skatteidentifikasjonsnummeret utlendinger trenger for eiendomstransaksjoner i Spania. Det bør ordnes tidlig, enten via spansk konsulat eller i Spania.",
          "Spansk bankkonto er ofte praktisk for betalinger, strøm, vann, fellesutgifter, skatt og forsikring. Notaren håndterer selve signeringen av skjøtet og bekrefter den formelle overdragelsen.",
        ],
        bullets: [
          "Start NIE-prosessen tidlig; behandlingstid kan variere.",
          "Forbered pass, dokumentasjon på inntekt og adresse.",
          "La advokat kontrollere betalingsflyt før notarmøtet.",
          "Sørg for at strøm, vann, forsikring og felleskostnader overføres etter kjøp.",
        ],
      },
      {
        heading: "Dokumentasjon banken ofte ber om",
        body: [
          "Banken vil normalt be om dokumentasjon på inntekt, formue, gjeld og skatteforhold. Norske dokumenter kan måtte oversettes, og i noen tilfeller apostilleres.",
          "Pensjonister bør forberede pensjonsbrev, skattemelding, kontoutskrifter og dokumentasjon på formue. Selvstendig næringsdrivende bør regne med mer dokumentasjon.",
        ],
        bullets: [
          "Inntektsdokumentasjon: lønn, pensjon eller næringsinntekt.",
          "Skattemeldinger og bankutskrifter.",
          "Dokumentasjon på egenkapital og opprinnelse til midler.",
          "Informasjon om eiendommen, kontrakt og eventuell takst.",
        ],
      },
    ],
    nextSteps: [
      "Snakk med bank før visningstur, ikke etter at du har funnet boligen.",
      "Søk NIE så tidlig som mulig.",
      "Velg spansk advokat før du signerer reservasjons- eller kjøpekontrakt.",
      "Lag en betalings- og valutaplan for reservasjon, delbetalinger og sluttoppgjør.",
    ],
    faq: [
      {
        question: "Må jeg ha NIE for å kjøpe bolig i Spania?",
        answer:
          "Ja, NIE er normalt nødvendig for eiendomskjøp, skatt, bank og registrering. Det bør ordnes tidlig i prosessen.",
      },
      {
        question: "Kan jeg finansiere bolig i Spania med norsk lån?",
        answer:
          "Ja, mange bruker norsk finansiering eller egen bolig som sikkerhet. Du må likevel håndtere valutarisiko og dokumentasjon knyttet til kjøpet i Spania.",
      },
      {
        question: "Hvor mye bør jeg beregne i kjøpskostnader?",
        answer:
          "Som grov planlegging brukes ofte 10–13 prosent utover kjøpesum, men dette varierer etter region, bruktbolig/nybygg og finansiering. Få konkret beregning fra advokat eller rådgiver.",
      },
    ],
  },
  {
    slug: "kjopsprosess-bolig-i-spania",
    title: "Kjøpsprosess for bolig i Spania",
    excerpt:
      "Steg-for-steg forklaring av hvordan kjøp av bolig i Spania fungerer for nordmenn: megler, reservasjon, advokat, notar og overtakelse.",
    date: "2026-05-10",
    updated: "2026-05-10",
    category: "Kjøpsprosess",
    readingTime: "10 min lesing",
    image: "/assets/magasin-covers/kjopsprosess.svg",
    imageAlt: "Illustrasjon av kjøpsprosessen for bolig i Spania fra søk til nøkkeloverlevering",
    seoTitle: "Kjøpsprosess for bolig i Spania | Steg-for-steg for nordmenn",
    seoDescription:
      "Forstå kjøpsprosessen i Spania: boligsøk, megler, tilbud, reservasjonskontrakt, advokat, notar, kostnader og overtakelse.",
    keywords: ["kjøpsprosess Spania", "kjøpe bolig i Spania", "reservasjonskontrakt Spania", "advokat boligkjøp Spania"],
    intro: [
      "Å kjøpe bolig i Spania som nordmann er annerledes enn å kjøpe bolig i Norge. Meglersystemet, reservasjonskontrakter, advokatrollen, notar og betalingsflyt fungerer på en annen måte.",
      "Denne guiden gir deg en praktisk oversikt fra første boligsøk til overtakelse, slik at du vet hva som skjer og hvilke beslutninger du må ta underveis.",
    ],
    sections: [
      {
        heading: "Slik fungerer eiendomsmeglere i Spania",
        body: [
          "I Spania kan flere meglere ofte markedsføre samme bolig. Det betyr at du ikke nødvendigvis må bruke megleren du først så annonsen hos. Du kan velge den rådgiveren eller megleren som best ivaretar deg gjennom hele prosessen.",
          "Det viktigste er ikke bare hvem som finner boligen, men hvem som hjelper deg å vurdere område, pris, dokumenter, risiko, forhandling, advokat og oppfølging etter kjøp.",
        ],
        bullets: [
          "Flere meglere kan ha tilgang til samme bolig.",
          "Velg samarbeidspartner etter tillit, kunnskap og oppfølging.",
          "God kommunikasjon på norsk eller engelsk reduserer misforståelser.",
          "Din rådgiver bør følge deg også etter signering.",
        ],
      },
      {
        heading: "Kjøpsprosessen steg for steg",
        body: [
          "Prosessen starter med behovsavklaring, finansiering og områdevalg. Deretter følger boligsøk, visninger, tilbud, reservasjon, juridisk kontroll, finansiering, notarsignering og overtakelse.",
          "Tempoet kan være raskere enn i Norge når riktig bolig dukker opp. Derfor bør finansiering, NIE, advokat og beslutningskriterier være avklart før du reiser på visning.",
        ],
        bullets: [
          "1. Avklar budsjett, bruk, område og finansiering.",
          "2. Gjennomfør boligsøk og visninger med tydelige kriterier.",
          "3. Gi skriftlig tilbud og forhandle pris og betingelser.",
          "4. Signer reservasjonskontrakt når juridiske forbehold er forstått.",
          "5. La advokat gjøre due diligence før endelig overtakelse.",
          "6. Signer skjøte hos notar og registrer eierskapet.",
        ],
      },
      {
        heading: "Reservasjonskontrakt og due diligence",
        body: [
          "Når tilbudet aksepteres, brukes ofte en reservasjonskontrakt eller arras-kontrakt. Denne binder prosessen og innebærer normalt en reservasjonsbetaling. Du må forstå konsekvensene dersom kjøper eller selger trekker seg.",
          "Mellom reservasjon og notar bør advokaten kontrollere eiendomsregister, gjeld, kommunale avgifter, byggetillatelser, felleskostnader, energisertifikat og eventuelle ulovlige endringer.",
        ],
        bullets: [
          "Ikke betal reservasjon uten å forstå betingelsene.",
          "Bruk uavhengig advokat som representerer deg, ikke selger.",
          "Kontroller panteheftelser, utestående kostnader og lovlighet.",
          "Avklar overtakelsesdato, inventar og betalingsplan skriftlig.",
        ],
      },
      {
        heading: "Kostnader ved boligkjøp",
        body: [
          "Kjøper må regne med kostnader utover kjøpesum. Nivået varierer etter region og om du kjøper bruktbolig eller nybygg. For planlegging brukes ofte 10–12 prosent, men konkret beregning må gjøres for hvert kjøp.",
          "I tillegg kommer løpende kostnader som IBI, forsikring, fellesutgifter, strøm, vann, internett, vedlikehold og eventuell skatterapportering.",
        ],
        bullets: [
          "Overdragelsesavgift eller IVA/AJD avhengig av boligtype.",
          "Notar, eiendomsregister og advokat.",
          "Eventuelle bank-, takst- og lånekostnader.",
          "Årlige kostnader som IBI, forsikring og fellesutgifter.",
        ],
      },
      {
        heading: "Etter overtakelse",
        body: [
          "Når skjøtet er signert hos notar, starter den praktiske delen: strøm, vann, internett, forsikring, felleskostnader, nøkler, alarm, vedlikehold og eventuelt keyholding.",
          "En god rådgiver hjelper deg ikke bare frem til kjøpet, men også med praktiske spørsmål etterpå. Det er ofte her forskjellen mellom en vanlig visning og en trygg kjøpsreise merkes.",
        ],
        bullets: [
          "Overfør strøm, vann og felleskostnader til ditt navn.",
          "Tegn boligforsikring og vurder alarm eller keyholding.",
          "Planlegg møbler, hvitevarer og eventuell utleiestrategi.",
          "Sørg for at advokat følger opp registrering og skatteforhold.",
        ],
      },
    ],
    nextSteps: [
      "Avklar finansiering og totalbudsjett.",
      "Velg område før du velger enkeltbolig.",
      "Engasjer spansk advokat tidlig.",
      "Bruk en rådgiver som kan koordinere prosessen på norsk.",
    ],
    faq: [
      {
        question: "Hvor lang tid tar et boligkjøp i Spania?",
        answer:
          "Et vanlig kjøp kan ofte gjennomføres på 4–8 uker etter reservasjon, men tid avhenger av finansiering, dokumenter, advokatkontroll og selgers situasjon.",
      },
      {
        question: "Trenger jeg advokat når jeg kjøper bolig i Spania?",
        answer:
          "Det anbefales sterkt. Advokaten kontrollerer juridiske forhold, kontrakter, heftelser, avgifter og lovlighet før du fullfører kjøpet.",
      },
      {
        question: "Kan samme bolig selges av flere meglere?",
        answer:
          "Ja, det er vanlig i Spania. Derfor bør du velge megler eller rådgiver ut fra hvem som gir best prosess, ikke bare hvem som har annonsen.",
      },
    ],
  },
  {
    slug: "omkostninger-nybygg-spania",
    title: "Omkostninger ved kjøp av nybygg i Spania: skatter og gebyrer",
    excerpt:
      "Hvor mye koster det egentlig å kjøpe nybygg i Spania? Full oversikt over 10 % IVA, AJD-stempelavgift, notar, tinglysning, advokat og skjulte kostnader – med regneeksempel.",
    date: "2026-09-07",
    updated: "2026-09-07",
    category: "Kjøpsprosess",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/finansiering.svg",
    imageAlt: "Illustrasjon av kostnader, skatter og gebyrer ved boligkjøp i Spania",
    seoTitle: "Omkostninger ved kjøp av nybygg i Spania | Komplett guide (2026/2027)",
    seoDescription:
      "Hvor mye koster det egentlig å kjøpe nybygg i Spania? Få full oversikt over 10 % IVA, AJD-stempelavgift, notargebyr, advokat og skjulte kostnader.",
    keywords: [
      "omkostninger boligkjøp Spania nybygg",
      "skatt nybygg Spania",
      "gebyrer boligkjøp Spania",
      "IVA nybygg Spania",
      "AJD stempelavgift Spania",
    ],
    intro: [
      "Mange nordmenn forelsker seg i prislappen på et moderne nybygg på Costa Blanca eller Costa Cálida, men blir overrasket over at den endelige totalsummen er vesentlig høyere enn annonsert pris. I motsetning til i Norge, hvor dokumentavgiften for nybygg kun beregnes av tomteverdien, har Spania et helt annet avgiftssystem.",
      "Som tommelfingerregel må du beregne mellom 12 % og 14 % i tillegg til kjøpesummen når du kjøper nybygg i Spania. Kjøper du med spansk boliglån, tilkommer det enkelte ekstra administrative kostnader. I denne guiden går vi gjennom nøyaktig hva hver euro går til, slik at du har full økonomisk forutsigbarhet før du signerer reservasjonskontrakten.",
    ],
    sections: [
      {
        heading: "Rask oversikt: Hva utgjør omkostningene på et nybygg?",
        body: [
          "For nybygg er det to statlige/regionale skatter du må forholde deg til, i tillegg til juridiske og tinglysningsmessige gebyrer:",
        ],
        table: {
          headers: ["Kostnadstype", "Hva er det?", "Sats / kostnad", "Betales til"],
          rows: [
            ["IVA (merverdiavgift)", "Spansk moms på nye boliger", "10 % av kjøpesummen", "Den spanske staten (via utbygger)"],
            ["AJD (stempelavgift)", "Dokumentavgift på skjøtet", "1,5 % (1,2 % i Murcia)", "Den autonome regionen"],
            ["Notarius publicus", "Offisiell signering av skjøtet (Escritura)", "Ca. 800 – 1 400 €", "Notarkontoret"],
            ["Tinglysning", "Registro de la Propiedad", "Ca. 500 – 900 €", "Eiendomsregisteret"],
            ["Uavhengig advokat", "Juridisk kontroll og sjekk av garantier", "1 % + IVA (eller fast ca. 2 000–3 000 €)", "Ditt advokatfirma"],
            ["Tilkobling strøm/vann", "Oppstart og målerinstallasjon", "Ca. 500 – 800 €", "Forsyningsselskapene"],
            ["Totalt beregnet tillegg", "Forventet totalpåslag", "Ca. 12,5 % – 13,5 %", "—"],
          ],
        },
      },
      {
        heading: "1. De offentlige skattene ved nybygg: IVA og AJD",
        body: [
          "Dette er den største forskjellen mellom å kjøpe nybygg og en bruktbolig (resale) i Spania. Når en bolig aldri har vært bebodd før og selges direkte fra utbygger, regnes det som en førstegangsoverdragelse. Det utløser 10 % IVA (Impuesto sobre el Valor Añadido). Hvis villaen koster 400 000 €, utgjør IVA nøyaktig 40 000 €.",
          "I tillegg til moms betaler du stempelavgift på rettslige dokumenter (Actos Jurídicos Documentados, AJD). I Comunidad Valenciana (Alicante, Altea, Finestrat, Torrevieja) er satsen 1,5 %. I naboregionen Murcia (Costa Cálida, Altaona Golf) er satsen 1,2 %.",
        ],
        bullets: [
          "10 % IVA gjelder nøkkelferdige nybygg og boliger under oppføring solgt direkte fra utbygger.",
          "1,5 % AJD i Valencia-regionen, 1,2 % i Murcia.",
          "Ved bruktbolig betaler du ikke IVA eller AJD, men overdragelsesskatten ITP (ca. 10 % i Valencia, 8 % i Murcia).",
          "Kjøper du en tomt separat uten godkjent byggeprosjekt fra et selskap, kan IVA være 21 %.",
        ],
      },
      {
        heading: "2. Gebyrer til notar og eiendomsregisteret",
        body: [
          "I Spania må alle eiendomshandler signeres foran en statsautorisert notar for at skjøtet (Escritura de Compraventa) skal være gyldig. Notaren representerer ikke deg som kjøper, men den spanske staten, og bekrefter identitet, overføring av midler og lovlighet. Honoraret er regulert av statlige takster og lander vanligvis på mellom 800 € og 1 400 €.",
          "Etter signering hos notaren må skjøtet registreres i det offisielle eiendomsregisteret (Registro de la Propiedad) for å gi deg fullt rettsvern mot tredjeparter. Gebyret beregnes etter en fast skala og ligger vanligvis på mellom 500 € og 900 €.",
        ],
      },
      {
        heading: "3. Nødvendige rådgiver- og etableringskostnader",
        body: [
          "Å kjøpe bolig i Spania uten egen advokat er den største feilen utenlandske kjøpere gjør. Utbyggerens kontrakt er utformet for å beskytte utbyggeren – ikke deg. En uavhengig advokat tar vanligvis 1 % av kjøpesummen + IVA, ofte med et minimumshonorar på rundt 2 000–2 500 € for lavere summer.",
          "Når et nybygg ferdigstilles, må det tegnes nye kontrakter med strøm- og vannleverandør, samt installeres målere. Sett av 500 – 800 € til opprettelse av abonnementer og tekniske godkjenninger.",
        ],
        bullets: [
          "Advokaten kontrollerer byggelisens og tillatelser fra kommunen (Licencia de Obra).",
          "Advokaten sikrer at samtlige delbetalinger er forsikret med bankgaranti på sperret konto.",
          "Advokaten sjekker at ferdigattest (Licencia de Primera Ocupación) foreligger før sluttbetaling.",
          "Advokaten ordner NIE-nummer og kan gjennomføre overtakelse via fullmakt (Poder Notarial).",
        ],
      },
      {
        heading: "Eksempelregnestykke: Hva koster en ny villa til 500 000 €?",
        body: [
          "Her er en realistisk oppstilling for en nybygget villa i Finestrat (Costa Blanca Nord) til 500 000 €:",
        ],
        table: {
          caption: "Estimat. Faktiske gebyrer varierer med prosjekt, bank og advokat.",
          headers: ["Post", "Beløp"],
          rows: [
            ["Kjøpesum", "500 000 €"],
            ["10 % IVA (moms)", "50 000 €"],
            ["1,5 % AJD (stempelavgift)", "7 500 €"],
            ["Notargebyr (estimert)", "1 100 €"],
            ["Tinglysning i registeret (estimert)", "750 €"],
            ["Advokathonorar (1 % + 21 % moms)", "6 050 €"],
            ["Tilkobling av strøm og vann", "600 €"],
            ["Diverse gebyrer / gestoría", "500 €"],
            ["Totale omkostninger", "66 500 € (13,3 %)"],
            ["Total investering", "566 500 €"],
          ],
        },
      },
      {
        heading: "Hva koster det hvis du skal ha spansk boliglån?",
        body: [
          "Siden den spanske boliglånsreformen i 2019 må banken betale de fleste avgiftene knyttet til opprettelsen av pantet (inkludert bankens egen notar, register og AJD på selve lånet). Som låntaker må du likevel dekke enkelte kostnader:",
        ],
        bullets: [
          "Takst (Tasación): en offisiell takstmann må vurdere eiendommen for banken. Kostnad: 300 – 600 €.",
          "Etableringsgebyr til banken (Comisión de apertura): fra 0 % til 1 % av lånebeløpet, avhengig av bank og forhandlinger.",
        ],
      },
    ],
    nextSteps: [
      "Regn med 12–14 % i omkostninger på toppen av annonsert pris før du setter budsjettet.",
      "Engasjer en uavhengig spansk advokat før du signerer reservasjonskontrakten.",
      "Be om dokumentasjon på bankgaranti for hver delbetaling i byggeperioden.",
      "Prøv Boligmatchen for å finne prosjekter som passer budsjettet ditt – inkludert omkostninger.",
    ],
    faq: [
      {
        question: "Kan jeg forhandle bort de 10 % i IVA?",
        answer:
          "Nei. IVA er en lovpålagt statlig avgift som utbygger må kreve inn og betale direkte til skattemyndighetene (Agencia Tributaria).",
      },
      {
        question: "Når må omkostningene betales?",
        answer:
          "Ved delbetalinger betaler du 10 % IVA på hver delbetaling i byggeperioden. Ved overtakelse hos notar betaler du resterende kjøpesum, resterende IVA, samt et forskuddsbeløp til notar, stempelavgift og tinglysning (provisión de fondos).",
      },
      {
        question: "Dekker meglerhonoraret advokatutgiftene mine?",
        answer:
          "Nei. I Spania dekkes meglerens provisjon normalt av utbygger/selger. Du som kjøper betaler ingenting til megler/rådgiver, men du må engasjere og betale din egen uavhengige advokat for juridisk kontroll.",
      },
    ],
    cta: { label: "Prøv Boligmatchen – finn prosjekter som passer budsjettet", href: "/#boligmatch" },
  },
  {
    slug: "bankgaranti-nybygg-spania",
    title: "Bankgaranti ved nybygg i Spania: slik sikres pengene dine",
    excerpt:
      "Kjøper du nybygg på tegning i Spania, skal hver delbetaling sikres med bankgaranti på en egen sperret konto. Slik fungerer reglene – fra Ley 57/1968 til dagens LOE.",
    date: "2026-09-07",
    updated: "2026-09-07",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/kjopsprosess.svg",
    imageAlt: "Illustrasjon av sikret betaling og bankgaranti ved nybygg i Spania",
    seoTitle: "Bankgaranti ved nybygg i Spania | Ley 57/1968 forklart (2026/2027)",
    seoDescription:
      "Hvordan sikres forskuddsbetalinger ved kjøp av nybygg i Spania? Guide til bankgaranti, sperret konto og Ley 57/1968 / LOE for norske kjøpere.",
    keywords: [
      "bankgaranti nybygg Spania",
      "Ley 57/1968 Spania",
      "sikkerhet nybygg Spania",
      "forskuddsbetaling utbygger Spania",
      "aval bancario Spania",
    ],
    intro: [
      "Når du kjøper nybygg «på tegning» (off-plan) i Spania, betaler du ofte en betydelig del av kjøpesummen underveis i byggeperioden – lenge før boligen står ferdig. Det store spørsmålet er: hva skjer med pengene dine hvis utbyggeren får økonomiske problemer, forsinkes kraftig, eller ikke fullfører prosjektet?",
      "Spansk lov gir deg et sterkt vern her: samtlige forskuddsbetalinger skal sikres med en bankgaranti eller forsikring, og pengene skal settes inn på en egen, øremerket konto. Denne guiden forklarer hvordan ordningen fungerer, hva du må kontrollere, og hva du gjør hvis noe går galt. Dette er generell informasjon – din uavhengige advokat skal alltid verifisere garantiene i ditt konkrete kjøp.",
    ],
    sections: [
      {
        heading: "Hva er en bankgaranti ved nybygg – og hvorfor er den avgjørende?",
        body: [
          "En bankgaranti (spansk: aval bancario) eller en tilsvarende forsikringspolise er utbyggerens skriftlige forpliktelse om at du får tilbake alle forskuddsbetalte beløp – med renter – dersom boligen ikke leveres som avtalt. Garantien utstedes av en bank eller et forsikringsselskap, ikke av utbyggeren selv.",
          "Poenget er å flytte risikoen bort fra deg som kjøper. Uten en gyldig garanti kan du i verste fall tape hele forskuddet hvis utbyggeren går konkurs midt i byggeperioden. Med garantien har du et selvstendig krav mot banken/forsikringsselskapet.",
        ],
      },
      {
        heading: "Loven bak: Fra Ley 57/1968 til dagens LOE",
        body: [
          "Kravet om å sikre forskuddsbetalinger stammer opprinnelig fra den historiske loven Ley 57/1968. Denne ble opphevet og videreført inn i byggeloven Ley de Ordenación de la Edificación (LOE), med endringene som trådte i kraft 1. januar 2016. Prinsippet er det samme, men reglene er modernisert.",
        ],
        table: {
          caption: "Forenklet oversikt. Din advokat bekrefter hva som gjelder for ditt konkrete prosjekt.",
          headers: ["Element", "Hva loven krever i dag"],
          rows: [
            ["Hvem er beskyttet", "Kjøpere som forskuddsbetaler for bolig under oppføring"],
            ["Hva må sikres", "Alle beløp du betaler før overtakelse, pluss renter"],
            ["Hvordan sikres det", "Bankgaranti (aval) eller forsikringspolise fra bank/forsikringsselskap"],
            ["Hvor havner pengene", "En egen, øremerket («special») konto som kun kan brukes til byggingen"],
            ["Når utløses kravet", "Ved manglende levering, vesentlig forsinkelse eller manglende byggetillatelse"],
          ],
        },
      },
      {
        heading: "Slik fungerer garantien i praksis",
        body: [
          "To ting henger sammen: den øremerkede kontoen og det individuelle garantibeviset. Utbyggeren skal ha en egen konto for prosjektet der kjøpernes innbetalinger holdes atskilt fra selskapets øvrige økonomi, og hver kjøper skal få et eget garantidokument som dekker nettopp sine innbetalinger.",
        ],
        bullets: [
          "Egen konto (cuenta especial): innbetalingene dine skal gå til en øremerket prosjektkonto, ikke rett inn i utbyggerens driftskonto.",
          "Individuelt garantibevis (certificado individual): du skal motta et eget bevis som dekker dine konkrete delbetalinger – ikke bare en generell rammegaranti.",
          "Renter: garantien skal også dekke renter på det innbetalte beløpet fra innbetalingsdato.",
          "Hver delbetaling: nye innbetalinger underveis skal også være dekket – be om oppdatert dokumentasjon for hver betaling.",
        ],
      },
      {
        heading: "Hva du må sjekke før du betaler",
        body: [
          "Dette er nøyaktig den typen kontroll en uavhengig advokat gjør for deg før du overfører reservasjonsgebyr eller delbetalinger. Ikke betal store beløp før dette er på plass:",
        ],
        bullets: [
          "At det finnes en gyldig bankgaranti eller forsikringspolise for prosjektet, utstedt av bank/forsikringsselskap.",
          "At du får et individuelt garantibevis i ditt navn som dekker dine innbetalinger.",
          "At kontonummeret i kontrakten er den øremerkede prosjektkontoen.",
          "At byggetillatelsen (Licencia de Obra) foreligger.",
          "At ferdigattest/brukstillatelse (Licencia de Primera Ocupación) skal foreligge før du gjør sluttbetalingen ved overtakelse.",
        ],
      },
      {
        heading: "Hva skjer hvis utbygger ikke leverer?",
        body: [
          "Dersom boligen ikke blir levert, blir vesentlig forsinket eller prosjektet ikke får nødvendige tillatelser, kan du kreve tilbake de innbetalte beløpene pluss renter ved å påberope garantien overfor banken eller forsikringsselskapet. Fordi kravet rettes mot en finansinstitusjon – ikke bare mot utbyggeren – står du langt tryggere enn uten garanti.",
          "Nettopp derfor er dokumentasjonen så viktig. Har du de individuelle garantibevisene og kvitteringer på at innbetalingene gikk til den øremerkede kontoen, har advokaten din et konkret grunnlag å fremme kravet på.",
        ],
      },
    ],
    nextSteps: [
      "Be om dokumentasjon på bankgaranti eller forsikring før du betaler reservasjonsgebyr.",
      "La en uavhengig spansk advokat kontrollere garantien og den øremerkede kontoen.",
      "Ta vare på individuelle garantibevis og kvitteringer for hver delbetaling.",
      "Bekreft at brukstillatelsen foreligger før du gjør sluttbetalingen ved overtakelse.",
    ],
    faq: [
      {
        question: "Gjelder Ley 57/1968 fortsatt?",
        answer:
          "Selve loven Ley 57/1968 er opphevet, men prinsippet – at forskuddsbetalinger ved nybygg skal sikres – er videreført i byggeloven LOE, med endringer som trådte i kraft 1. januar 2016. I praksis har du fortsatt krav på at pengene sikres. Din advokat bekrefter hva som gjelder for ditt kjøp.",
      },
      {
        question: "Må hver enkelt delbetaling være dekket?",
        answer:
          "Ja. Alle beløp du betaler før overtakelse skal være sikret, inkludert renter. Be om oppdatert garantidokumentasjon for hver innbetaling du gjør i byggeperioden.",
      },
      {
        question: "Hva er en «egen» eller «sperret» konto?",
        answer:
          "Det er en øremerket prosjektkonto (cuenta especial) der kjøpernes innbetalinger holdes atskilt fra utbyggerens øvrige økonomi og bare kan brukes til byggingen. Sjekk at kontonummeret i kontrakten er denne kontoen.",
      },
    ],
    cta: { label: "Bruk Boligmatchen for å finne trygge nybyggprosjekter", href: "/#boligmatch" },
  },
  {
    slug: "nybygg-finestrat-omradeguide",
    title: "Nybygg og moderne villaer i Finestrat: områdeguide for norske kjøpere",
    excerpt:
      "Vurderer du nybygg i Finestrat? Les om mikro-lokasjonene (Sierra Cortina, Balcón de Finestrat, Finestrat Pueblo), prisnivå, solforhold og hva du bør sjekke før du reserverer.",
    date: "2026-09-07",
    updated: "2026-09-07",
    category: "Områdeguide",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/omradevalg.svg",
    imageAlt: "Illustrasjon av Finestrat med fjell, kyst og moderne nybygg på Costa Blanca Nord",
    seoTitle: "Nybygg og villa i Finestrat | Norsk rådgiverguide | Zen Eco Homes",
    seoDescription:
      "Vurderer du nybygg i Finestrat? Les om prisnivå, solforhold, mikrobeliggenheter (Sierra Cortina vs. Balcón) og se aktuelle prosjekter.",
    keywords: [
      "nybygg Finestrat",
      "villa Finestrat nybygg",
      "leilighet Finestrat Sierra Cortina",
      "bolig Finestrat Costa Blanca",
      "Balcón de Finestrat",
    ],
    intro: [
      "Finestrat ligger på Costa Blanca Nord, i fjellsiden under det markante Puig Campana-fjellet og bare noen minutter fra strendene ved Benidorm. Kombinasjonen av fjell, sjøutsikt, nærhet til service og et stort innslag av moderne nybygg har gjort området til et av de mest populære blant nordmenn som vil ha nytt og energieffektivt uten å gi slipp på kystlivet.",
      "Denne guiden gir deg innsikt vanlige portaler mangler: forskjellen på mikro-lokasjonene, hva du faktisk får for pengene, og hva du bør sjekke rundt utsikt, innsyn og byggeaktivitet før du reserverer.",
    ],
    sections: [
      {
        heading: "Hvorfor Finestrat?",
        body: [
          "Finestrat gir deg mye på én gang: panoramautsikt mot Benidorms skyline og Middelhavet, kort vei til strand, golf, shopping og et bredt helsetilbud, og samtidig roligere boligområder oppe i åssidene. For mange nordmenn er dette den ideelle balansen mellom livlig kystby og et mer avslappet helårsliv.",
          "Området har svært mange nybyggprosjekter med høy energistandard – moderne leiligheter og frittliggende villaer med basseng, godt isolerte og ofte klargjort for solceller.",
        ],
        bullets: [
          "Utsikt: mange prosjekter har fri sjøutsikt mot Benidorm-bukten.",
          "Beliggenhet: 5–10 minutter til strand, ca. 40–50 minutter til Alicante flyplass.",
          "Livsstil: helårsmiljø med service, golf og natur i Puig Campana-området.",
          "Boligtype: stort utvalg moderne nybygg med lav energibruk.",
        ],
      },
      {
        heading: "Mikro-lokasjonene forklart",
        body: [
          "Finestrat er ikke ett ensartet område – hvor i kommunen du kjøper, avgjør både utsikt, hverdagsliv og prisnivå. Her er de viktigste å kjenne til:",
        ],
        bullets: [
          "Sierra Cortina: etablert resort- og golfområde nær Puig Campana, med moderne leilighetskomplekser, fellesbasseng og kort vei til Benidorm. Populært for både helårsbruk og utleie.",
          "Balcón de Finestrat: hillside-området med noen av de beste sjøutsiktene mot Benidorm-bukten – mye villaer og townhouses.",
          "Finestrat Pueblo: den autentiske gamle landsbyen oppe i fjellsiden, roligere og mer spansk, med utsikt og karakter framfor strandnærhet.",
        ],
      },
      {
        heading: "Prisbilde og kvadratmeter",
        body: [
          "Prisene varierer med mikro-lokasjon, utsikt, standard og om det er leilighet eller frittliggende villa. Som en grov pekepinn ligger moderne nybygde leiligheter typisk fra rundt 250 000–450 000 euro, mens frittliggende villaer med basseng og sjøutsikt ofte starter rundt 500 000 euro og oppover.",
          "Utsikt og nærhet til strand/golf er de faktorene som slår sterkest ut på prisen. Vi hjelper deg å vurdere hva som er riktig prisnivå for det konkrete prosjektet – og hva som faktisk er inkludert.",
        ],
      },
      {
        heading: "Freddys vurdering",
        body: [
          "«I Finestrat er det tre ting jeg alltid ber kjøpere sjekke før de reserverer: Hva skjer på nabotomtene? Et prosjekt med fri sjøutsikt i dag kan få utsikten bygget ned neste år. Hvordan er vind- og solforholdene på akkurat den beliggenheten? Og hvor mye innsyn får du fra naboterrasser i tett bebygde komplekser?»",
          "«Dette er lokalkunnskap som ikke står i en portalannonse. Jeg drar gjerne på befaring for deg, eller går gjennom prosjektet på video, slik at du vet nøyaktig hva du kjøper.»",
        ],
      },
    ],
    nextSteps: [
      "Bestem deg for mikro-lokasjon: strandnært og sosialt (Sierra Cortina), utsikt (Balcón de Finestrat) eller ro og karakter (Pueblo).",
      "Sjekk byggeaktivitet og reguleringen på nabotomtene før du reserverer.",
      "Vurder sol-, vind- og innsynsforhold på den konkrete beliggenheten.",
      "Be om en uavhengig vurdering av prosjektet før du legger inn reservasjon.",
    ],
    faq: [
      {
        question: "Er Finestrat et godt sted for nordmenn å kjøpe nybygg?",
        answer:
          "Ja, Finestrat er blant de mest populære områdene på Costa Blanca Nord for nordmenn. Du får moderne, energieffektive nybygg med sjøutsikt, kort vei til strand og service i Benidorm, og samtidig roligere boligområder i fjellsiden.",
      },
      {
        question: "Hva er forskjellen på Sierra Cortina og Balcón de Finestrat?",
        answer:
          "Sierra Cortina er et etablert resort- og golfområde med moderne leilighetskomplekser nær Benidorm, mens Balcón de Finestrat er et hillside-område kjent for noen av de beste sjøutsiktene, med mer villaer og townhouses.",
      },
      {
        question: "Hvor langt er det fra Finestrat til flyplassen?",
        answer:
          "Det er cirka 40–50 minutter med bil til Alicante lufthavn (ALC), avhengig av nøyaktig beliggenhet og trafikk.",
      },
    ],
    cta: { label: "Se aktuelle boliger i Finestrat", href: "/eiendommer?q=finestrat" },
  },
  {
    slug: "utleie-inntektspotensial-bolig-spania",
    title: "Utleie av bolig i Spania: kan boligen tjene penger?",
    excerpt:
      "Skal boligen også leies ut? Slik vurderer du realistisk utleiepotensial, turistlisens, sesong, kostnader og hva som faktisk avgjør leieinntekten.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Guide",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/utleie-inntekt.svg",
    imageAlt: "Illustrasjon av utleiebolig, avkastning og inntektspotensial i Spania",
    seoTitle: "Utleie av bolig i Spania | Inntektspotensial og turistlisens",
    seoDescription:
      "Kan boligen din i Spania leies ut med god inntekt? Guide til utleiepotensial, turistlisens, sesong, kostnader og realistisk avkastning for norske kjøpere.",
    keywords: [
      "utleie bolig Spania",
      "turistlisens Spania",
      "leieinntekt Costa Blanca",
      "korttidsutleie Spania",
      "investering bolig Spania",
    ],
    intro: [
      "Mange nordmenn tenker: «Vi skal bruke boligen selv, men kanskje leie den ut litt.» Da er det viktig å vurdere utleiepotensialet før du kjøper – ikke etterpå. To boliger som ser nesten like ut kan ha svært ulik leieverdi.",
      "Denne guiden hjelper deg å tenke realistisk rundt inntekt: hva som faktisk driver etterspørselen, hvilke regler som gjelder for turistutleie, og hvordan du regner på reell avkastning etter kostnader.",
    ],
    sections: [
      {
        heading: "Hva avgjør leieinntekten – egentlig?",
        body: [
          "Beliggenhet slår ofte antall kvadratmeter. Gangavstand til strand, service og restauranter kan bety mer for belegget enn et ekstra soverom. En terrasse med sol kan være viktigere enn utsikten.",
        ],
        bullets: [
          "Beliggenhet: gangavstand til strand, service og transport.",
          "Sesong: kysten har lang sesong, men vinterbelegget varierer sterkt mellom områder.",
          "Boligtype og standard: basseng, aircondition og god uteplass hever både pris og belegg.",
          "Kapasitet: antall soverom og senger påvirker døgnpris og målgruppe.",
          "Presentasjon: gode bilder, riktig prising og rask respons avgjør belegget.",
        ],
      },
      {
        heading: "Turistlisens og regler",
        body: [
          "Korttids-/turistutleie i Spania er regulert regionalt, og i Comunidad Valenciana kreves normalt en turistlisens (registrering) for lovlig korttidsutleie. Reglene endres over tid og kan variere med kommune og sameie (comunidad).",
          "Sjekk alltid om boligen kan få lisens, og om sameiets vedtekter tillater turistutleie, før du baserer kjøpet på utleieinntekt. Din advokat kan avklare dette konkret.",
        ],
      },
      {
        heading: "Regn på reell avkastning",
        body: [
          "Brutto leieinntekt er ikke det samme som det du sitter igjen med. Trekk fra fellesutgifter, forsikring, strøm/vann, vedlikehold, rengjøring, forvaltning/administrasjon og skatt før du vurderer avkastningen.",
        ],
        bullets: [
          "Legg inn realistisk belegg – ikke full sesong hele året.",
          "Husk skatt på leieinntekt (også for ikke-residenter).",
          "Ta med forvaltning/nøkkelhåndtering hvis du ikke er der selv.",
          "Sett av til vedlikehold og perioder uten leietakere.",
        ],
      },
      {
        heading: "Eget bruk vs. utleie – en ærlig avveining",
        body: [
          "En bolig som er perfekt for deg er ikke nødvendigvis den markedet helst vil leie. Vil du bruke den mye selv i høysesongen, mister du nettopp de ukene som gir best inntekt. Bestem deg for hva som er viktigst – bruk eller inntekt – før du velger bolig og område.",
        ],
      },
    ],
    nextSteps: [
      "Avklar om utleie er et krav, et pluss eller uaktuelt – det styrer bolig- og områdevalg.",
      "Sjekk turistlisens og sameiets vedtekter før du reserverer.",
      "Sett opp et realistisk regnestykke med belegg, kostnader og skatt.",
      "Vurder forvaltning/nøkkelhåndtering hvis du ikke bor der fast.",
    ],
    faq: [
      {
        question: "Må jeg ha turistlisens for å leie ut i Spania?",
        answer:
          "For korttids-/turistutleie kreves normalt en turistlisens i Comunidad Valenciana, og reglene varierer med region, kommune og sameie. Sjekk alltid at boligen kan få lisens og at vedtektene tillater det før du baserer kjøpet på utleie.",
      },
      {
        question: "Hvor mye kan jeg realistisk tjene på utleie?",
        answer:
          "Det avhenger av beliggenhet, standard, sesong og belegg. Regn på netto etter fellesutgifter, drift, forvaltning og skatt – ikke bare brutto døgnpris. Vi hjelper deg gjerne med et realistisk estimat for en konkret bolig.",
      },
      {
        question: "Bør jeg velge bolig ut fra eget bruk eller utleie?",
        answer:
          "Det bør avklares før kjøp. Skal utleie være en viktig del av regnestykket, bør beliggenhet og målgruppe styre valget. Skal du mest bruke den selv, kan andre hensyn veie tyngre.",
      },
    ],
    cta: { label: "Prøv Boligmatchen – finn en bolig som passer bruken din", href: "/#boligmatch" },
  },
  {
    slug: "lopende-kostnader-eie-bolig-spania",
    title: "Løpende kostnader ved å eie bolig i Spania",
    excerpt:
      "Hva koster det å eie bolig i Spania hvert år? Oversikt over IBI, fellesutgifter, forsikring, strøm og vann, og den årlige skatten for ikke-residenter.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Kjøpsprosess",
    readingTime: "6 min lesing",
    image: "/assets/magasin-covers/kostnader-eie.svg",
    imageAlt: "Illustrasjon av løpende kostnader og regninger ved å eie bolig i Spania",
    seoTitle: "Løpende kostnader ved å eie bolig i Spania | IBI, comunidad og skatt",
    seoDescription:
      "Hva koster det årlig å eie bolig i Spania? Oversikt over IBI, fellesutgifter (comunidad), forsikring, strøm, vann og ikke-resident-skatt for norske eiere.",
    keywords: [
      "løpende kostnader bolig Spania",
      "IBI eiendomsskatt Spania",
      "comunidad fellesutgifter Spania",
      "ikke-resident skatt Spania",
      "eie bolig Spania kostnader",
    ],
    intro: [
      "Selve kjøpet er én ting – men hva koster det å eie boligen år etter år? De løpende kostnadene er som regel overkommelige, men det lønner seg å kjenne dem før du kjøper, så budsjettet holder.",
      "Her er de vanligste faste utgiftene en norsk boligeier i Spania må regne med.",
    ],
    sections: [
      {
        heading: "De faste årlige kostnadene",
        body: [
          "De fleste utgiftene er forutsigbare og betales årlig eller månedlig. Størrelsen avhenger av bolig, kommune og om boligen ligger i en urbanisasjon med fellesanlegg.",
        ],
        table: {
          caption: "Typiske størrelsesordener. Faktiske beløp varierer med bolig og kommune.",
          headers: ["Kostnad", "Hva er det?", "Hvor ofte"],
          rows: [
            ["IBI", "Kommunal eiendomsskatt, basert på ligningsverdi (valor catastral)", "Årlig"],
            ["Comunidad", "Fellesutgifter i urbanisasjon/sameie (basseng, uteområder, heis)", "Månedlig/kvartalsvis"],
            ["Forsikring", "Innbo og bygning", "Årlig"],
            ["Strøm og vann", "Forbruk + faste abonnementsledd", "Månedlig/annenhver måned"],
            ["Basura", "Kommunal renovasjonsavgift", "Årlig/halvårlig"],
            ["Ikke-resident-skatt", "Årlig skatt for utenlandske eiere som ikke bor i Spania", "Årlig"],
          ],
        },
      },
      {
        heading: "IBI og ligningsverdi",
        body: [
          "IBI (Impuesto sobre Bienes Inmuebles) er den kommunale eiendomsskatten og beregnes ut fra boligens ligningsverdi (valor catastral), ikke markedsverdien. Satsen settes lokalt, så to like boliger i ulike kommuner kan ha forskjellig IBI.",
        ],
      },
      {
        heading: "Årlig skatt for ikke-residenter",
        body: [
          "Eier du bolig i Spania uten å være skattemessig bosatt der, skal du normalt levere en årlig ikke-resident-skattemelding. Bruker du boligen selv, beregnes en beskatning av en sjablongmessig «egen bruk»-verdi; leier du ut, beskattes leieinntekten. En gestor eller advokat kan håndtere dette for deg.",
        ],
      },
      {
        heading: "Slik unngår du overraskelser",
        body: [
          "Be om dokumentasjon på faktiske løpende kostnader for den konkrete boligen før du kjøper – særlig fellesutgiftene (comunidad), som varierer mye mellom urbanisasjoner. Da vet du hva helåret faktisk koster.",
        ],
      },
    ],
    nextSteps: [
      "Be om siste års IBI, comunidad og strøm/vann for den konkrete boligen.",
      "Sett opp et årsbudsjett før du reserverer.",
      "Avklar ikke-resident-skatten og hvem som skal håndtere den for deg.",
      "Vurder forsikring og eventuell nøkkelhåndtering hvis boligen står tom deler av året.",
    ],
    faq: [
      {
        question: "Hva er IBI i Spania?",
        answer:
          "IBI er den kommunale eiendomsskatten, beregnet ut fra boligens ligningsverdi (valor catastral) og en lokal sats. Den betales årlig og varierer mellom kommuner.",
      },
      {
        question: "Må jeg betale skatt i Spania selv om jeg ikke bor der?",
        answer:
          "Ja. Utenlandske eiere som ikke er skattemessig bosatt i Spania leverer normalt en årlig ikke-resident-skattemelding – enten for egen bruk eller for leieinntekt. En gestor eller advokat kan ordne dette.",
      },
      {
        question: "Hvor høye er fellesutgiftene (comunidad)?",
        answer:
          "Det varierer sterkt med urbanisasjonen og hvilke fellesanlegg som finnes (basseng, heis, uteområder, vakthold). Be alltid om faktiske tall for den konkrete boligen før kjøp.",
      },
    ],
    cta: { label: "Se boliger med tydelige kostnadsoversikter", href: "/eiendommer" },
  },
  {
    slug: "innlandet-finca-olivengard-spania",
    title: "Innlandet i Spania: finca, olivengård og livet bort fra kysten",
    excerpt:
      "Mer plass, natur og ro for pengene. Slik er livet i innlandet rundt Biar, Pinoso og Villena – og hva du bør sjekke ved tomt, finca og landeiendom.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Områdeguide",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/innlandet-livsstil.svg",
    imageAlt: "Illustrasjon av finca, olivengård og innlandslandskap i Alicante-provinsen",
    seoTitle: "Innlandet i Spania | Finca, olivengård og landlig liv på Costa Blanca",
    seoDescription:
      "Vurderer du innlandet i Spania? Om livet rundt Biar, Pinoso og Villena, og hva du bør sjekke ved tomt, finca, vann, strøm og lovlighet før kjøp.",
    keywords: [
      "finca Spania",
      "olivengård Spania",
      "innlandet Costa Blanca",
      "landeiendom Spania",
      "bolig Pinoso Biar",
    ],
    intro: [
      "For mange handler drømmen om Spania om sol og strand. Men stadig flere nordmenn oppdager innlandet: mer plass, natur og ro – ofte til lavere pris per kvadratmeter enn ved kysten. Rundt Biar, Pinoso, Villena og Sax finner du alt fra moderne nybygg til fincaer med oliventrær.",
      "Innlandet gir en annen livsstil enn kysten. Denne guiden forklarer hva du får, og hva du bør kontrollere før du kjøper landeiendom.",
    ],
    sections: [
      {
        heading: "Hvorfor velge innlandet?",
        body: [
          "Innlandet passer for deg som prioriterer plass, natur og et mer tradisjonelt spansk nabolag fremfor strandnærhet. Du får ofte større tomt, ro og lavere kommunale avgifter – og kysten er gjerne under en time unna.",
        ],
        bullets: [
          "Mer bolig og tomt for pengene enn ved kysten.",
          "Ro, natur og et autentisk spansk hverdagsliv.",
          "Kort vei til kyst og flyplass fra mange innlandsbyer.",
          "Mulighet for finca, oliventrær og selvbergingsliv.",
        ],
      },
      {
        heading: "Bil er en forutsetning",
        body: [
          "I innlandet bør du regne bil som en nødvendighet. Til gjengjeld får du en helårsbolig med ro og plass du sjelden finner på kysten. Vurder avstand til lege, butikk, skole og flyplass ut fra hvordan du faktisk skal bruke boligen.",
        ],
      },
      {
        heading: "Dette må sjekkes ved tomt og finca",
        body: [
          "Landeiendom krever grundigere kontroll enn en leilighet i en urbanisasjon. Lovlighet, vann, strøm og adkomst er avgjørende – og noe en uavhengig advokat må gjennomgå før du signerer.",
        ],
        bullets: [
          "Er bygningene lovlig registrert, og finnes nødvendige tillatelser?",
          "Vann: kommunalt, brønn eller tank – og er det dokumentert?",
          "Strøm: tilkobling eller solcelle/generator?",
          "Adkomst og veirett til eiendommen.",
          "Hva kan bygges/utvides på tomten (regulering)?",
        ],
      },
      {
        heading: "Olivengård og selvbergingsliv",
        body: [
          "Mange innlandseiendommer kommer med oliventrær eller mandeltrær. Det kan gi både en fin livsstil og litt egenproduksjon, men krever stell. Vurder hvor mye arbeid du ønsker – en oliveneiendom er like mye en livsstil som en bolig.",
        ],
      },
    ],
    nextSteps: [
      "Bestem hvor mye plass, ro og natur du prioriterer kontra strandnærhet.",
      "Sjekk lovlighet, vann, strøm og adkomst før du reserverer landeiendom.",
      "Vurder avstand til service, lege og flyplass ut fra hverdagen din.",
      "La en uavhengig advokat kontrollere dokumentasjon og tillatelser.",
    ],
    faq: [
      {
        question: "Er det trygt å kjøpe finca i innlandet?",
        answer:
          "Ja, forutsatt grundig kontroll. Landeiendom krever ekstra sjekk av lovlighet, vann, strøm, adkomst og tillatelser. En uavhengig spansk advokat bør gjennomgå alt før du signerer.",
      },
      {
        question: "Hvilke innlandsområder er populære blant nordmenn?",
        answer:
          "Rundt Alicante-provinsen er Biar, Pinoso, Villena og Sax blant de mest aktuelle – med kort vei til kysten, god plass og lavere priser per kvadratmeter enn strandsonen.",
      },
      {
        question: "Trenger jeg bil i innlandet?",
        answer:
          "I praksis ja. Kollektivtilbudet er begrenset, så bil er som regel en forutsetning for hverdagen i innlandet.",
      },
    ],
    cta: { label: "Utforsk boliger og tomter i innlandet", href: "/inland" },
  },
  {
    slug: "flytte-til-spania-pensjonist",
    title: "Flytte til Spania som pensjonist: residens, skatt og hverdag",
    excerpt:
      "Drømmer du om pensjonisttilværelsen i solen? Om residens og opphold, helsetjenester, skatt, og hva som skiller ferie fra å bo fast i Spania.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Guide",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/pensjon-flytte.svg",
    imageAlt: "Illustrasjon av pensjonistliv og flytting til Spania med sol og palmer",
    seoTitle: "Flytte til Spania som pensjonist | Residens, skatt og hverdag",
    seoDescription:
      "Vurderer du å bo fast i Spania som pensjonist? Guide til residens og opphold, helsetjenester, skatt og hva som skiller ferie fra å bosette seg.",
    keywords: [
      "flytte til Spania pensjonist",
      "bo fast i Spania",
      "residens Spania",
      "skatt pensjonist Spania",
      "pensjonistliv Costa Blanca",
    ],
    intro: [
      "Å feriere i Spania er én ting – å bo der fast er noe annet. For mange pensjonister er Spania likevel en fantastisk mulighet: mildt klima, lavere levekostnader og et etablert skandinavisk miljø langs kysten.",
      "Denne guiden gir oversikt over det praktiske rundt å bosette seg: opphold og residens, helse, skatt og hva du bør tenke gjennom før du tar steget fra feriebolig til fast bosted.",
    ],
    sections: [
      {
        heading: "Ferie eller fast bosetting?",
        body: [
          "Så lenge du bruker boligen som feriebolig, er det praktiske enklere. Vil du bo fast, må du forholde deg til opphold, folkeregistrering (empadronamiento), helsetjenester og skattemessig bosted. Det er lurt å avklare ambisjonsnivået tidlig, for det påvirker både boligvalg og økonomi.",
        ],
      },
      {
        heading: "Opphold og residens",
        body: [
          "Reglene for opphold avhenger av statsborgerskap og hvor lenge du skal være i Spania. Skal du oppholde deg lenge/fast, må oppholdet formaliseres. NIE (utlendingens identifikasjonsnummer) trenger du uansett for eiendom, bank og skatt. En gestor eller advokat kan veilede ut fra din situasjon.",
        ],
      },
      {
        heading: "Helse og hverdag",
        body: [
          "Vurder tilgang til lege, sykehus og apotek der du vurderer å bo. Mange kombinerer offentlig og privat helsetjeneste. Tenk også gjennom det praktiske: bil, avstander, sosialt miljø, språk og hva du skal fylle hverdagen med utenfor feriemodus.",
        ],
      },
      {
        heading: "Skatt ved fast bosted",
        body: [
          "Blir du skattemessig bosatt i Spania, endrer skattebildet seg sammenlignet med å være ikke-resident. Dette bør planlegges med fagfolk, gjerne med rådgivning på begge sider av grensen, slik at du unngår overraskelser. Vi anbefaler alltid egen skatte-/juridisk rådgivning før en permanent flytting.",
        ],
      },
    ],
    nextSteps: [
      "Bestem om boligen skal være feriebolig eller fast bosted – det styrer mye.",
      "Skaff NIE og avklar oppholdsformalitetene for din situasjon.",
      "Kartlegg helsetjenester og hverdagslogistikk i området.",
      "Få skatte- og juridisk rådgivning før en permanent flytting.",
    ],
    faq: [
      {
        question: "Kan jeg bo fast i Spania som norsk pensjonist?",
        answer:
          "Mange gjør det. Du må formalisere oppholdet, skaffe NIE, og forholde deg til helsetjenester og skattemessig bosted. Regler avhenger av din situasjon, så egen rådgivning anbefales.",
      },
      {
        question: "Trenger jeg NIE for å bo i Spania?",
        answer:
          "Ja. NIE er utlendingens identifikasjonsnummer og er nødvendig for eiendom, bank, skatt og de fleste offentlige prosesser – både for feriebolig og fast bosted.",
      },
      {
        question: "Hvordan påvirker fast bosetting skatten min?",
        answer:
          "Blir du skattemessig bosatt i Spania, endres skattebildet fra å være ikke-resident. Dette bør planlegges med skatte-/juridisk rådgiver før flytting for å unngå uheldige overraskelser.",
      },
    ],
    cta: { label: "Ta en uforpliktende prat om flytteplanene dine", href: "/#kontakt" },
  },
  {
    slug: "energieffektive-nybygg-spania",
    title: "Energieffektive nybygg i Spania: energiklasse, isolasjon og solceller",
    excerpt:
      "Hvorfor moderne nybygg slår eldre boliger på komfort og strømregning. Om energiklasse, isolasjon mot vinter og sommer, solceller og hva du bør sjekke.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Guide",
    readingTime: "6 min lesing",
    image: "/assets/magasin-covers/energi-baerekraft.svg",
    imageAlt: "Illustrasjon av energieffektivt nybygg med solceller og sol i Spania",
    seoTitle: "Energieffektive nybygg i Spania | Energiklasse, isolasjon og solceller",
    seoDescription:
      "Hvorfor er moderne nybygg i Spania mer komfortable og billigere i drift? Guide til energiklasse, isolasjon, solceller og hva du bør sjekke før kjøp.",
    keywords: [
      "energieffektive nybygg Spania",
      "energiklasse bolig Spania",
      "isolasjon nybygg Spania",
      "solceller Spania bolig",
      "energimerking Spania",
    ],
    intro: [
      "En vanlig overraskelse for nordmenn er hvor kaldt og trekkfullt et eldre spansk hus kan være om vinteren – og hvor varmt om sommeren. Moderne nybygg er en helt annen historie: bygget for lavere energibruk, bedre inneklima og lavere strømregning.",
      "Denne guiden forklarer hva «energieffektivt» faktisk betyr i praksis, og hva du bør se etter når du vurderer et nybygg.",
    ],
    sections: [
      {
        heading: "Energiklasse og energiattest",
        body: [
          "Alle boliger som selges eller leies ut i Spania skal ha en energiattest (certificado energético) med en energiklasse fra A til G. Moderne nybygg ligger normalt høyt (A/B), mens eldre boliger ofte ligger lavere. Be alltid om energiattesten, så vet du den faktiske energibruken.",
        ],
      },
      {
        heading: "Isolasjon – vinter og sommer",
        body: [
          "God isolasjon i vegger, tak og vinduer holder på varmen om vinteren og kjølig inne om sommeren. Det gir jevnere temperatur, bedre komfort og lavere kostnad til oppvarming og kjøling. Dette er ofte den største praktiske forskjellen mellom nytt og gammelt.",
        ],
      },
      {
        heading: "Solceller og lav strømkostnad",
        body: [
          "Costa Blanca er et av Europas mest solrike områder, og mange nybygg leveres klargjort for – eller med – solceller. Det kan kutte strømregningen betydelig, særlig for aircondition om sommeren. Sjekk om boligen har eller kan få solcelleanlegg.",
        ],
      },
      {
        heading: "Godt rustet for strengere krav",
        body: [
          "Energikravene i EU skjerpes gradvis. Energieffektive boliger står tryggere for framtiden – både for komfort, drift og videresalg. Et moderne, godt isolert nybygg med høy energiklasse er en trygg investering i så måte.",
        ],
      },
    ],
    nextSteps: [
      "Be om energiattesten (certificado energético) og se energiklassen.",
      "Sjekk isolasjon i vegger, tak og vinduer – ikke bare estetikk.",
      "Avklar om boligen har eller kan få solceller.",
      "Vurder energibruk som en del av totaløkonomien, ikke bare kjøpesummen.",
    ],
    faq: [
      {
        question: "Hva betyr energiklassen på en spansk bolig?",
        answer:
          "Energiklassen (A–G) står i boligens energiattest og angir hvor energieffektiv boligen er. Moderne nybygg ligger ofte på A/B, eldre boliger lavere. Be om attesten for å kjenne den faktiske energibruken.",
      },
      {
        question: "Er nybygg virkelig billigere i drift enn eldre boliger?",
        answer:
          "Som regel ja. Bedre isolasjon og høyere energiklasse gir jevnere temperatur og lavere kostnad til oppvarming og kjøling. Solceller kan redusere strømregningen ytterligere.",
      },
      {
        question: "Bør jeg velge bolig med solceller?",
        answer:
          "I et solrikt område som Costa Blanca kan solceller kutte strømregningen merkbart, spesielt for aircondition om sommeren. Sjekk om boligen har eller er klargjort for solcelleanlegg.",
      },
    ],
    cta: { label: "Se energieffektive nybygg", href: "/eiendommer?type=villa" },
  },
  {
    slug: "juridiske-fallgruver-boligkjop-spania",
    title: "Juridiske fallgruver ved boligkjøp i Spania – og hvordan unngå dem",
    excerpt:
      "De vanligste juridiske fellene: heftelser og gjeld, ulovlige tilbygg, manglende ferdigattest, reservasjonsavtaler og press. Slik beskytter du deg.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Kjøpsprosess",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/juridisk.svg",
    imageAlt: "Illustrasjon av juridiske fallgruver og kontroll ved boligkjøp i Spania",
    seoTitle: "Juridiske fallgruver ved boligkjøp i Spania | Sjekkliste for kjøpere",
    seoDescription:
      "Unngå de vanligste juridiske fellene ved boligkjøp i Spania: heftelser, ulovlige tilbygg, manglende ferdigattest og risikable kontrakter. Guide for norske kjøpere.",
    keywords: [
      "juridiske fallgruver boligkjøp Spania",
      "advokat boligkjøp Spania",
      "ulovlig tilbygg Spania",
      "heftelser bolig Spania",
      "trygg boligkjøp Spania",
    ],
    intro: [
      "Det spanske systemet er trygt når du følger stegene i riktig rekkefølge og har din egen fagperson i ryggen. De aller fleste «skrekkhistoriene» fra markedet skyldes at kjøperen ikke hadde uavhengig juridisk kontroll – og oppdaget problemet for sent.",
      "Denne guiden går gjennom de vanligste juridiske fallgruvene og hvordan en uavhengig advokat luker dem ut før du binder deg. Dette er generell informasjon; din advokat vurderer den konkrete boligen.",
    ],
    sections: [
      {
        heading: "Hvorfor du trenger din egen advokat",
        body: [
          "Verken megler eller notar representerer deg som kjøper. En uavhengig spansk advokat (abogado) gjør derimot due diligence på dine vegne: kontrollerer eierforhold, heftelser, lovlighet, tillatelser, kontrakter og skatter før du signerer. Kostnaden er en brøkdel av det en feil kan koste.",
        ],
      },
      {
        heading: "De vanligste fallgruvene",
        body: [
          "De fleste problemene handler om at noe ikke er som det fremstår. Her er de typiske tingene en advokat sjekker:",
        ],
        bullets: [
          "Heftelser og gjeld: pant, ubetalt IBI, fellesutgifter eller lån som følger boligen.",
          "Ulovlige tilbygg: basseng, terrasse eller påbygg uten godkjenning kan gi pålegg og bøter.",
          "Manglende ferdigattest / brukstillatelse (Licencia de Primera Ocupación) på nybygg.",
          "Uoverensstemmelser mellom det som er registrert (matrikkel/register) og virkeligheten.",
          "Avvik i areal, tomtegrenser eller adkomst/veirett – særlig på landeiendom.",
          "Reservasjons- og depositumsavtaler med ugunstige eller uklare vilkår.",
        ],
      },
      {
        heading: "Reservasjon, arras og press",
        body: [
          "Prosessen går normalt fra reservasjonsavtale (tar boligen av markedet), til depositumskontrakt (contrato de arras, ofte rundt 10 %), og til slutt signering av skjøtet (escritura) hos notar. Ikke overfør reservasjonsgebyr eller depositum før advokaten har sett dokumentene.",
          "Vær varsom med press om rask betaling, betaling til privatkonto i stedet for utbyggers sperrede prosjektkonto, eller «bruk vår advokat, det er enklere». Behold din egen uavhengige kontroll.",
        ],
      },
      {
        heading: "Slik sikrer du en trygg handel",
        body: [
          "Med riktig rekkefølge og en uavhengig fagperson er spansk boligkjøp trygt. Nøkkelen er å kontrollere før du betaler – ikke etterpå.",
        ],
        bullets: [
          "Skaff NIE og engasjer en uavhengig advokat tidlig.",
          "La advokaten kontrollere register, heftelser, lovlighet og tillatelser.",
          "Betal kun til dokumenterte, riktige kontoer – aldri privatkonto ved nybygg.",
          "Få bankgaranti på delbetalinger ved kjøp på prospekt.",
        ],
      },
    ],
    nextSteps: [
      "Engasjer en uavhengig spansk advokat før du betaler noe.",
      "Be om utskrift fra eiendomsregisteret (nota simple) og sjekk heftelser.",
      "Kontroller at tilbygg, basseng og ferdigattest er lovlige og på plass.",
      "Les reservasjons-/depositumsavtalen nøye før signering.",
    ],
    faq: [
      {
        question: "Trenger jeg advokat når jeg allerede har megler?",
        answer:
          "Ja. Megleren representerer normalt selger/utbygger, og notaren representerer staten – ikke deg. En uavhengig advokat gjør due diligence på dine vegne og er den viktigste tryggheten i handelen.",
      },
      {
        question: "Hva er de vanligste juridiske problemene?",
        answer:
          "Heftelser og gjeld som følger boligen, ulovlige tilbygg uten godkjenning, manglende ferdigattest på nybygg, og avvik mellom det som er registrert og virkeligheten. Alt dette kan en advokat avdekke før du signerer.",
      },
      {
        question: "Kan jeg miste reservasjonsgebyret?",
        answer:
          "Det avhenger av avtalen. Derfor bør du aldri betale reservasjon eller depositum før en uavhengig advokat har gjennomgått vilkårene og dokumentene på boligen.",
      },
    ],
    cta: { label: "Les mer om en trygg kjøpsprosess", href: "/kjopsprosess/kjopsprosess-bolig-i-spania" },
  },
  {
    slug: "skatt-ved-salg-bolig-spania",
    title: "Skatt ved salg av bolig i Spania: gevinstskatt, plusvalía og 3 %-regelen",
    excerpt:
      "Skal du selge boligen i Spania en dag? Slik fungerer gevinstskatt, kommunal plusvalía og det 3 % tilbaketrekket som gjelder for ikke-residenter.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/skatt-salg.svg",
    imageAlt: "Illustrasjon av skatt og kostnader ved salg av bolig i Spania",
    seoTitle: "Skatt ved salg av bolig i Spania | Gevinstskatt, plusvalía og 3 %-regelen",
    seoDescription:
      "Hva koster det å selge bolig i Spania? Guide til gevinstskatt, kommunal plusvalía og 3 %-tilbaketrekket for ikke-residenter – for norske eiere.",
    keywords: [
      "skatt salg bolig Spania",
      "gevinstskatt Spania",
      "plusvalia Spania",
      "3 prosent tilbakehold Spania",
      "selge bolig Spania skatt",
    ],
    intro: [
      "De fleste tenker mest på kostnadene ved kjøp. Men det lønner seg å kjenne skattene ved et fremtidig salg allerede når du kjøper – de påvirker den reelle avkastningen. Dette er generell informasjon; en gestor eller advokat regner ut ditt konkrete tilfelle.",
      "Her er de tre viktigste postene du bør kjenne til når en spansk bolig selges.",
    ],
    sections: [
      {
        heading: "Gevinstskatt (skatt på fortjenesten)",
        body: [
          "Selger du med gevinst, beskattes fortjenesten – differansen mellom kjøps- og salgssum, justert for dokumenterte kostnader og investeringer. For ikke-residenter beregnes dette etter reglene for ikke-resident-skatt (IRNR). Ta vare på kvitteringer for kjøpsomkostninger og oppgraderinger, siden de kan redusere skattbar gevinst.",
        ],
      },
      {
        heading: "3 %-tilbaketrekket for ikke-residenter",
        body: [
          "Når en ikke-resident selger, holder kjøper normalt tilbake 3 % av salgssummen og betaler det inn til skattemyndighetene som forskudd på selgers gevinstskatt. Er den faktiske skatten lavere, kan du søke om å få mellomlegget tilbake. Dette er en vanlig kilde til misforståelser, så det bør håndteres av en fagperson.",
        ],
      },
      {
        heading: "Plusvalía municipal (kommunal verdiøkningsavgift)",
        body: [
          "I tillegg kommer plusvalía municipal – en kommunal avgift knyttet til verdiøkningen på selve tomten i eierperioden. Den beregnes lokalt og betales normalt av selger. Størrelsen avhenger av kommune, tomteverdi og hvor lenge du har eid.",
        ],
      },
      {
        heading: "Tenk salg allerede ved kjøp",
        body: [
          "Beliggenhet, standard og etterspørsel påvirker ikke bare bruk og utleie, men også hvor lett boligen lar seg selge videre – og til hvilken pris. Å tenke videresalg allerede ved kjøp er en del av en klok investering.",
        ],
      },
    ],
    nextSteps: [
      "Ta vare på dokumentasjon på kjøpsomkostninger og oppgraderinger – de kan redusere gevinstskatten.",
      "Regn med plusvalía og 3 %-tilbaketrekket i salgskalkylen hvis du er ikke-resident.",
      "Bruk en gestor eller advokat til å beregne og håndtere skattene ved salg.",
      "Vurder videresalgspotensialet allerede når du kjøper.",
    ],
    faq: [
      {
        question: "Hva er 3 %-regelen i Spania?",
        answer:
          "Når en ikke-resident selger bolig, holder kjøper normalt tilbake 3 % av salgssummen og betaler det til skattemyndighetene som forskudd på selgers gevinstskatt. Er faktisk skatt lavere, kan mellomlegget kreves tilbake.",
      },
      {
        question: "Hva er plusvalía municipal?",
        answer:
          "Det er en kommunal avgift på verdiøkningen av tomten i eierperioden, som normalt betales av selger. Den beregnes lokalt og avhenger av kommune, tomteverdi og eiertid.",
      },
      {
        question: "Kan jeg redusere gevinstskatten?",
        answer:
          "Dokumenterte kjøpsomkostninger og verdiøkende oppgraderinger kan trekkes fra ved beregning av skattbar gevinst. Ta vare på kvitteringene, og la en fagperson gjøre beregningen.",
      },
    ],
    cta: { label: "Ta en prat om langsiktig boligøkonomi", href: "/#kontakt" },
  },
  {
    slug: "arv-gaveskatt-bolig-spania",
    title: "Arv og gaveskatt på spansk bolig: dette bør du planlegge",
    excerpt:
      "Hva skjer med den spanske boligen ved arv eller gave? Om arve- og gaveskatt (ISD), regionale forskjeller, spansk testament og hvorfor planlegging lønner seg.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/arv-gave.svg",
    imageAlt: "Illustrasjon av arv, gaveskatt og generasjoner knyttet til bolig i Spania",
    seoTitle: "Arv og gaveskatt på bolig i Spania | Guide for norske eiere",
    seoDescription:
      "Hvordan håndteres arv og gaveskatt på spansk bolig? Om arve- og gaveskatt (ISD), regionale forskjeller, spansk testament og planlegging for norske eiere.",
    keywords: [
      "arv bolig Spania",
      "gaveskatt Spania",
      "arveskatt Spania",
      "spansk testament",
      "ISD Spania bolig",
    ],
    intro: [
      "Et boligkjøp i Spania er ofte et langsiktig eierskap som kan gå i arv. Da er det lurt å kjenne til hvordan arv og gave av spansk eiendom håndteres – helst før det blir aktuelt. Dette er generell informasjon; en spesialisert advokat/gestor bør vurdere din familiesituasjon.",
      "Her er hovedpunktene norske eiere bør tenke gjennom.",
    ],
    sections: [
      {
        heading: "Arve- og gaveskatt (ISD)",
        body: [
          "Spania har en egen arve- og gaveskatt (Impuesto sobre Sucesiones y Donaciones, ISD) som kan gjelde når spansk eiendom går i arv eller gis som gave. Hvor mye som skal betales avhenger blant annet av slektskap, verdien og hvilken region eiendommen ligger i.",
        ],
      },
      {
        heading: "Store regionale forskjeller",
        body: [
          "ISD forvaltes regionalt, og fradrag og satser varierer mye mellom de autonome regionene. Comunidad Valenciana (der Costa Blanca ligger) har egne regler og bunnfradrag. Fordi forskjellene er store, bør beregningen alltid gjøres konkret av en fagperson.",
        ],
      },
      {
        heading: "Spansk testament",
        body: [
          "Mange med eiendom i Spania oppretter et eget spansk testament som dekker de spanske eiendelene. Det kan gjøre arveoppgjøret enklere, raskere og rimeligere for de etterlatte, og redusere risikoen for misforståelser mellom regelverk i to land. En advokat kan sette dette opp riktig.",
        ],
      },
      {
        heading: "Planlegg i tide",
        body: [
          "Arv og gave av eiendom over landegrenser kan bli komplisert hvis det ikke er tenkt gjennom på forhånd. Med god planlegging – gjerne med rådgivning på begge sider av grensen – unngår familien unødvendige kostnader og overraskelser.",
        ],
      },
    ],
    nextSteps: [
      "Kartlegg hvordan boligen bør eies og gå i arv ut fra familiesituasjonen.",
      "Vurder et eget spansk testament for de spanske eiendelene.",
      "Få beregnet arve-/gaveskatt (ISD) konkret for din region og situasjon.",
      "Søk rådgivning på både norsk og spansk side ved arveplanlegging.",
    ],
    faq: [
      {
        question: "Må det betales arveskatt på bolig i Spania?",
        answer:
          "Det kan påløpe spansk arve- og gaveskatt (ISD) når spansk eiendom går i arv eller gis som gave. Beløpet avhenger av slektskap, verdi og region. En fagperson bør beregne det konkret.",
      },
      {
        question: "Bør jeg ha et spansk testament?",
        answer:
          "Mange eiere med bolig i Spania oppretter et eget spansk testament for de spanske eiendelene. Det kan gjøre arveoppgjøret enklere og rimeligere for de etterlatte. En advokat kan sette det opp riktig.",
      },
      {
        question: "Er arveskatten lik i hele Spania?",
        answer:
          "Nei. Arve- og gaveskatten forvaltes regionalt, og fradrag og satser varierer mye mellom regionene. Derfor bør beregningen gjøres konkret for din situasjon og region.",
      },
    ],
    cta: { label: "Snakk med oss om langsiktig eierskap i Spania", href: "/#kontakt" },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const processSteps = [
  "Behov og budsjett avklares i en innledende samtale.",
  "Vi matcher deg med aktuelle prosjekter og områder.",
  "Du får strukturert oversikt, dokumenter og anbefalinger.",
  "Visninger planlegges fysisk eller digitalt.",
  "Advokat, bank, NIE og kontrakt koordineres med trygge partnere.",
  "Overtakelse og oppfølging gjøres ryddig etter kjøpet.",
];
