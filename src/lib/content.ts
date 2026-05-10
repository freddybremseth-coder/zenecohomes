export type ArticleSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
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
    image: "/assets/magasin/omradeguide-spania.svg",
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
    image: "/assets/magasin/tomtekjop-bygging-spania.svg",
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
    image: "/assets/magasin/kjope-na-eller-vente.svg",
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
    image: "/assets/magasin/finansiering-nie-notar.svg",
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
    image: "/assets/magasin/kjopsprosess-spania.svg",
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
