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
  silo?: "kjopsprosess" | "guide" | "corporate";
  /** Valgfri personlig byline. Uten verdi brukes standardforfatter for siloen. */
  author?: { name: string; href?: string };
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
    text: "For deg som vil ha strandnært liv, golf, service og et bredt utvalg boligområder og moderne prosjekter, ofte i flatere terreng enn lenger nord.",
  },
  {
    name: "Costa Calida",
    places: "San Pedro del Pinatar, Los Alcazares, Cartagena og Murcia",
    text: "Kyst- og byområder rundt Mar Menor, Cartagena og Murcia, med nyere prosjekter, golf og svært ulike miljøer fra strandby til storby.",
  },
];

export const articles: Article[] = [
  {
    slug: "omradeguide-eiendomskjop-i-spania",
    title: "Områdeguide for eiendomskjøp i Spania",
    excerpt:
      "Sammenlign Costa Blanca, Costa del Sol, Valencia og Kanariøyene ut fra livsstil, boligtype, service, skole, flyplass og helårsbruk.",
    date: "2026-05-10",
    updated: "2026-09-15",
    category: "Områdeguide",
    readingTime: "9 min lesing",
    image: "/assets/magasin-covers/omradevalg.svg",
    imageAlt: "Illustrasjon av spanske boligområder med kyst, fjell, by og øyer",
    seoTitle: "Områdeguide Spania | Costa Blanca, Sol og Valencia",
    seoDescription:
      "Finn riktig område for boligkjøp i Spania. Sammenlign Costa Blanca, Costa del Sol og Valencia med råd om livsstil, prisnivå og kjøpsprosess.",
    keywords: ["boligkjøp i Spania", "områdeguide Spania", "Costa Blanca bolig", "Costa del Sol bolig", "Valencia eiendom"],
    intro: [
      "Det viktigste valget ved boligkjøp i Spania er ofte ikke selve boligen, men området. To boliger til samme pris kan gi helt ulike hverdager, kostnader og muligheter for utleie, skole, golf, strandliv eller roligere helårsbruk.",
      "Denne områdeguiden hjelper deg å sortere aktuelle områder etter livsstil, boligtyper og praktiske forhold som flyplass, service, skole og avstand til strand. Pris må alltid sammenlignes på konkret sted, boligtype og tidspunkt.",
    ],
    sections: [
      {
        heading: "Costa del Sol – Málaga-provinsen",
        body: [
          "Costa del Sol passer godt for pensjonister, golfentusiaster, investorer og familier som ønsker etablerte internasjonale miljøer. Her finner du sterk infrastruktur, mange helsetjenester, et aktivt restaurantliv og et stort utvalg av golfbaner.",
          "Boligmarkedet spenner fra leiligheter og rekkehus til villaer og luksuseiendom. Prisnivået varierer kraftig mellom for eksempel Fuengirola, Mijas, Marbella, Estepona og Puerto Banús, og bør vurderes med ferske sammenlignbare boliger i det konkrete delmarkedet.",
        ],
        bullets: [
          "Passer for: pensjonister, golfkjøpere, familier og kjøpere som ønsker etablerte miljøer.",
          "Fordeler: mye service, godt flytilbud, internasjonalt miljø og mange golfbaner.",
          "Vurder: turismetrykk, trafikk, mikrobeliggenhet og prisnivå i det konkrete delmarkedet.",
          "Neste steg: sammenlign flere steder ut fra hverdagsliv og budsjett før du velger enkeltbolig.",
        ],
      },
      {
        heading: "Costa Blanca – Alicante-provinsen",
        body: [
          "Costa Blanca passer for familier, pensjonister, naturelskere og kjøpere som vil kombinere klima, service, strand, fjell, småbyer og golf. Regionen rommer både tydelige turistområder, helårsbyer og mer landlige miljøer.",
          "I kystbyene finner du leiligheter, rekkehus og villaer i ulike prisklasser. I innlandet rundt blant annet Pinoso, Aspe, Novelda, Biar og Villena kan tomter, nybygg og større eiendommer gi en helt annen kombinasjon av plass, ro og hverdagsliv.",
        ],
        bullets: [
          "Passer for: familier, pensjonister, unge par, naturelskere og de som ønsker helårsbruk.",
          "Fordeler: god flyforbindelse via Alicante-Elche, og stor variasjon mellom kyst, by og innland.",
          "Vurder: store lokale forskjeller; riktig mikrobeliggenhet er viktig for hverdagsliv, utleie og videresalg.",
          "Neste steg: vurder Altea, Albir, Calpe og Jávea for kystliv, eller relevante innlandsområder for tomt, finca og moderne nybygg.",
        ],
      },
      {
        heading: "Valencia-regionen",
        body: [
          "Valencia passer for unge par, familier, kulturinteresserte og kjøpere som ønsker mer urbant spansk byliv. Byen kombinerer strand, sykkelveier, parker, matopplevelser og et hverdagsliv som skiller seg fra de klassiske ferieområdene.",
          "Boligene består i stor grad av leiligheter i sentrum, forsteder og strandnære bydeler. Pris og etterspørsel varierer betydelig mellom bydeler, så sammenlign ferske boliger og faktiske kostnader i de områdene du vurderer.",
        ],
        bullets: [
          "Passer for: bymennesker, familier, digitale arbeidere og kjøpere med langsiktig perspektiv.",
          "Fordeler: levende byliv, kollektivtransport, kultur, restauranter og strand.",
          "Vurder: språk, bydel, transportbehov, støy og hvordan området fungerer i hverdagen.",
          "Neste steg: sammenlign blant annet Ciutat Vella, Eixample og El Cabanyal ut fra den livsstilen du ønsker.",
        ],
      },
      {
        heading: "Kanariøyene",
        body: [
          "Kanariøyene passer for deg som prioriterer mildt vinterklima og øyliv. Øyene tiltrekker blant annet pensjonister, naturelskere, fjellvandrere, syklister og vannsportinteresserte.",
          "Boligmarkedet og klimaet varierer mye mellom Gran Canaria, Tenerife, Lanzarote og Fuerteventura. Det er viktig å vurdere øy, mikroklima, vind, reisetid, logistikk og tilgang til service før kjøp.",
        ],
        bullets: [
          "Passer for: pensjonister, naturelskere, vinterboere og aktive friluftsmennesker.",
          "Fordeler: særpreget natur, gode strender og mildt klima i mange områder.",
          "Vurder: lengre reisevei fra Norge, øylogistikk og store lokale forskjeller.",
          "Neste steg: test flere områder eller øyer før du bestemmer deg; opplevelsen kan være svært forskjellig.",
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
          "Det finnes ikke ett område som passer best for nordmenn. Riktig valg avhenger av budsjett, bruk, flyforbindelser, behov for service, strand, golf, natur og om boligen skal brukes til ferie, helårsbolig eller utleie.",
      },
      {
        question: "Er Costa Blanca billigere enn Costa del Sol?",
        answer:
          "Det er ikke presist å sammenligne hele regioner med ett prisstempel. Prisene varierer med by, mikrobeliggenhet, standard, boligtype og tidspunkt. Sammenlign konkrete alternativer i de delmarkedene du faktisk vurderer.",
      },
      {
        question: "Bør jeg velge kyst eller innland?",
        answer:
          "Kyst og innland gir ulike hverdager. Kysten kan gi nærhet til strand og turistetterspørsel i enkelte områder, mens innlandet ofte gir flere alternativer med større tomt, finca eller landsbyliv. Pris, utleie og service må vurderes konkret for stedet og boligen.",
      },
    ],
  },
  {
    slug: "guide-tomtekjop-bygging-i-spania",
    title: "Guide til tomtekjøp og bygging i Spania",
    excerpt:
      "Hva du må kontrollere før tomtekjøp: regulering, byggbarhet, vann, strøm, adkomst, arkitekt, lisens, budsjett og due diligence.",
    date: "2026-05-10",
    updated: "2026-09-15",
    category: "Tomt og nybygg",
    readingTime: "10 min lesing",
    image: "/assets/magasin-covers/tomt-bygg.svg",
    imageAlt: "Illustrasjon av tomt, moderne bolig, tegninger og bygging i Spania",
    seoTitle: "Tomtekjøp og bygging i Spania | Guide for nordmenn",
    seoDescription:
      "Slik kjøper du tomt og bygger bolig i Spania. Les om regulering, vann, strøm, adkomst, byggetillatelse, arkitekt, kostnader og trygg kontroll før kjøp.",
    keywords: ["tomt i Spania", "bygge hus i Spania", "kjøpe tomt Costa Blanca", "byggelisens Spania", "nybygg Spania"],
    intro: [
      "Å kjøpe tomt og bygge bolig i Spania kan gi deg akkurat den boligen og livsstilen du ønsker. Samtidig er prosessen mer kompleks enn et vanlig boligkjøp, fordi du må kontrollere regulering, byggbarhet, infrastruktur, kostnader og lokale krav før du forplikter deg.",
      "Denne guiden gir deg en praktisk oversikt over de viktigste punktene du bør undersøke før bud, reservasjon eller kjøp av tomt.",
    ],
    sections: [
      {
        heading: "Hva du må forstå før tomtekjøp",
        body: [
          "Først må eierskap, registeropplysninger og eventuelle heftelser kontrolleres. Det bør undersøkes om det finnes pant, servitutter, ubetalte avgifter, tvister eller avvik mellom dokumentene og den faktiske eiendommen.",
          "Deretter må du forstå hvilken type grunn du kjøper og hva kommunal planlegging faktisk tillater. En attraktiv tomt kan ha begrensninger som gjør at prosjektet ikke kan realiseres slik du ser for deg.",
        ],
        bullets: [
          "Sjekk eierskap, heftelser og eiendomsregister før du binder deg.",
          "Avklar om tomten faktisk kan bebygges som planlagt.",
          "Undersøk kommunale planer, nabotomter og fremtidig infrastruktur.",
          "Beregn løpende kostnader som IBI, renovasjon og lokale gebyrer.",
        ],
      },
      {
        heading: "Regulering, vann, strøm og adkomst",
        body: [
          "Reguleringsplanen og kommunale regler bestemmer blant annet hva som kan bygges, utnyttelse, høyde, avstander og krav til teknisk infrastruktur. En lokal advokat og kvalifisert teknisk fagperson bør kontrollere dette før kjøp.",
          "Tilgang til vann, strøm og lovlig adkomst er avgjørende. I innlandsområder kan vann komme fra kommunalt nett, vannfellesskap, brønn eller tank, og rettighetene må dokumenteres. Strømtilkobling og adkomst kan også få stor betydning for prosjektbudsjettet.",
        ],
        bullets: [
          "Be om skriftlig dokumentasjon på byggbarhet og relevante kommunale forhold der det er mulig.",
          "Kontroller vannkilde, vannrettigheter og eventuell avløpsløsning.",
          "Få estimat på strømtilkobling før kjøp.",
          "Dokumenter veirett og lovlig adkomst.",
        ],
      },
      {
        heading: "Kostnadsbilde fra tomt til ferdig bolig",
        body: [
          "Totalbudsjettet bør inkludere mer enn tomt og byggekostnad. Du må regne inn arkitekt, tekniske rapporter, lisens, kommunale gebyrer, advokat, geoteknikk, infrastruktur, tilkoblinger, terrengarbeid, basseng, uteområder og buffer.",
          "Ha en tydelig reserve for uforutsette forhold. Grunnforhold, terreng, materialvalg, energiløsninger, infrastruktur og kommunale krav kan påvirke sluttsummen betydelig.",
        ],
        bullets: [
          "Tomteprisens andel av totalbudsjettet varierer kraftig mellom områder.",
          "Arkitekt og tekniske fagpersoner bør inn i prosessen tidlig.",
          "Fastsett prosjektbuffer ut fra tomt, prosjektering, kontrakt og konkret risikobilde – ikke en standardprosent.",
          "Finansiering av tomt og bygg kan ha andre krav enn kjøp av ferdig bolig.",
        ],
      },
      {
        heading: "Arkitekt, entreprenør, lisens og tidslinje",
        body: [
          "Bruk en kvalifisert arkitekt med nødvendig faglig registrering og lokal erfaring. Arkitekten har en sentral rolle i tegninger, teknisk dokumentasjon, søknad om byggetillatelse og oppfølging av prosjektet.",
          "Entreprenøren bør ha dokumenterte referanser, forsikringer, riktig kompetanse og lokal erfaring. Prosjektering, kommunal behandling, bygging og ferdigstillelse kan ta svært ulik tid fra kommune til kommune og prosjekt til prosjekt, så be om en konkret tidsplan med forutsetninger.",
        ],
        bullets: [
          "Velg arkitekt med lokal erfaring fra kommunen.",
          "Bruk skriftlig kontrakt med tydelig pris, leveranse, betalingsplan og ansvar.",
          "Vurder uavhengig byggeleder hvis du ikke bor i Spania under byggingen.",
          "Planlegg med margin for behandlingstid, leveranser og uforutsette forhold.",
        ],
      },
      {
        heading: "Anbefalt due diligence før bud",
        body: [
          "Due diligence bør dekke juridiske, tekniske, økonomiske og praktiske forhold. Det er bedre å avklare begrensninger før reservasjon enn etter at du har forpliktet deg.",
        ],
        bullets: [
          "Advokat kontrollerer eiendomsdokumenter, heftelser, kontrakt og juridiske forhold.",
          "Arkitekt eller relevant tekniker vurderer byggbarhet, utnyttelse, terreng og realistisk prosjekt.",
          "Teknisk rådgiver vurderer grunn, adkomst, vann, strøm og naturfare ved behov.",
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
          "Ja, utlendinger kan kjøpe tomt i Spania. Du trenger de nødvendige identifikasjons- og skatteopplysningene for transaksjonen, og bør bruke uavhengig juridisk og teknisk kontroll av tomt, regulering og kontrakt.",
      },
      {
        question: "Er alle tomter i Spania byggbare?",
        answer:
          "Nei. Mange tomter har begrensninger eller er ikke byggbare for det prosjektet du ønsker. Byggbarhet må kontrolleres mot gjeldende kommunale planer og konkrete tomteforhold før kjøp.",
      },
      {
        question: "Hvor lang tid tar det å bygge hus i Spania?",
        answer:
          "Det finnes ikke én pålitelig standardtid. Prosjektering, kommunal behandling, grunnarbeid, byggeperiode og ferdigstillelse varierer med kommune, tomt, prosjekt og entreprenør. Be om en konkret tidsplan før du binder deg.",
      },
    ],
  },
  {
    slug: "kjop-bolig-i-spania-na-eller-vente",
    title: "Bør man kjøpe bolig i Spania nå, eller vente?",
    excerpt:
      "Kjøpe nå eller vente? Bruk budsjett, tidshorisont, finansiering, område og konkrete sammenlignbare boliger som beslutningsgrunnlag – ikke spådommer om hele markedet.",
    date: "2026-05-10",
    updated: "2026-09-15",
    category: "Marked",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/kjope-na.svg",
    imageAlt: "Illustrasjon av spansk boligmarked med vekt mellom å kjøpe nå og vente",
    seoTitle: "Kjøpe bolig i Spania nå eller vente? | Guide for 2026",
    seoDescription:
      "Bør du kjøpe bolig i Spania nå eller vente? Vurder budsjett, finansiering, tidshorisont, område, valuta og konkrete boliger før du bestemmer deg.",
    keywords: ["kjøpe bolig i Spania nå", "spansk boligmarked", "boligpriser Spania", "investere i bolig Spania"],
    intro: [
      "Mange som vurderer bolig i Spania spør om de bør kjøpe nå eller vente på et prisfall. Det er et naturlig spørsmål, men ingen kan vite sikkert hvordan pris, renter og valuta utvikler seg i akkurat det delmarkedet du vurderer.",
      "Et bedre utgangspunkt er å avgjøre om du har riktig budsjett, finansiering, område og tidshorisont – og om den konkrete boligen er riktig priset sammenlignet med reelle alternativer.",
    ],
    sections: [
      {
        heading: "Markedet må vurderes lokalt",
        body: [
          "Spania er ikke ett boligmarked. Kystbyer, storbyer, innland, nybygg og bruktbolig kan utvikle seg forskjellig, og selv naboområder kan ha ulikt tilbud, etterspørsel og prisnivå.",
          "Derfor bør en beslutning bygge på ferske, sammenlignbare boliger og faktiske prosjekter i området du vurderer – ikke på én nasjonal overskrift eller en generell prognose.",
        ],
        bullets: [
          "Sammenlign samme boligtype og standard i samme mikro-område.",
          "Se på faktisk tilgjengelighet, ikke bare annonserte startpriser.",
          "Vurder nybygg og bruktbolig separat når markedene fungerer ulikt.",
        ],
      },
      {
        heading: "Hva som bør styre tidspunktet",
        body: [
          "Tidspunktet bør først og fremst vurderes mot egen økonomi og plan. Har du avklart totalbudsjett, finansiering, tidshorisont og hvordan boligen skal brukes, er du bedre rustet til å vurdere en konkret mulighet.",
          "Hvis du derimot fortsatt er usikker på område, finansiering eller bruk, kan det være mer verdifullt å bruke tiden på forberedelser enn å forsøke å time markedet.",
        ],
        bullets: [
          "Avklar totalbudsjett og hvor stor valutarisiko du tåler.",
          "Bestem om boligen er for ferie, helårsbruk, utleie eller en kombinasjon.",
          "Definer hvor lenge du realistisk planlegger å eie.",
        ],
      },
      {
        heading: "Hva kan endre regnestykket?",
        body: [
          "Renter, EUR/NOK, skatter, byggekostnader, nytt tilbud og lokal etterspørsel kan alle påvirke økonomien. Ingen av faktorene bør brukes alene som argument for å kjøpe eller vente.",
          "For en norsk kjøper kan valutakursen være like viktig som en mindre endring i lokal boligpris. Regn derfor i både euro og kroner og test flere scenarier før beslutningen.",
        ],
        bullets: [
          "Test økonomien med både sterkere og svakere euro.",
          "Sammenlign finansieringstilbud på totalkostnad.",
          "Beregn skatter, avgifter og løpende kostnader for den konkrete boligen.",
        ],
      },
      {
        heading: "Når det kan være riktig å vente",
        body: [
          "Det kan være fornuftig å vente dersom finansieringen ikke er avklart, du er usikker på område, du må selge bolig hjemme først, eller du ikke vet hvordan boligen skal brukes.",
          "Å vente med en plan er noe annet enn å vente på en bestemt markedsbevegelse. Bruk tiden til å avklare budsjett, område, finansiering, juridisk struktur og beslutningskriterier.",
        ],
        bullets: [
          "Vent hvis økonomien eller finansieringen ikke tåler uforutsette endringer.",
          "Vent hvis du ikke har sett nok alternativer til å vite hva som er riktig pris og område.",
          "Følg konkrete delmarkeder fremfor å forsøke å spå hele Spania.",
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
          "Det kan ingen vite sikkert på forhånd. Utviklingen varierer mellom regioner, byer, boligtyper og mikrobeliggenheter. Følg det konkrete delmarkedet du vurderer og sammenlign faktiske boliger.",
      },
      {
        question: "Er 2026 et dårlig tidspunkt å kjøpe bolig i Spania?",
        answer:
          "Årstallet alene gir ikke svaret. Om tidspunktet er riktig for deg avhenger av økonomi, finansiering, tidshorisont, område og om den konkrete boligen gir mening sammenlignet med alternativene.",
      },
      {
        question: "Hva er risikoen ved å vente?",
        answer:
          "Risikoen ved å vente er ikke bare mulig prisendring; valutakurs, renter, tilgjengelighet og egne planer kan også endre seg. Derfor bør du definere hvilke forhold som faktisk må være på plass før du kjøper.",
      },
    ],
  },
  {
    "slug": "finansiere-bolig-i-spania",
    "title": "Hvordan finansiere kjøp av bolig i Spania?",
    "excerpt": "Sammenlign egne midler, spansk boliglån og lån med pant i Norge eller Spania. Se eksempel på egenkapital, valuta og riktig tidspunkt for finansiering.",
    "date": "2026-05-10",
    "updated": "2026-10-12",
    "category": "Kjøpsprosess",
    "readingTime": "9 min lesing",
    "image": "/assets/magasin-covers/finansiering.svg",
    "imageAlt": "Finansieringsplan for boligkjøp i Spania med euro, lånevalg og totalbudsjett",
    "seoTitle": "Hvordan finansiere bolig i Spania? | Fire lånemuligheter",
    "seoDescription": "Hvordan finansiere boligkjøp i Spania? Sammenlign spansk lån, lån i Norge, DNB Luxembourg og egne midler. Egenkapital, valuta, eksempel og råd.",
    "keywords": [
      "finansiere bolig i Spania",
      "finansiering boligkjøp Spania",
      "lån med pant i spansk bolig",
      "egenkapital Spania",
      "lån Norge eller Spania"
    ],
    "intro": [
      "Nordmenn finansierer normalt boligkjøp i Spania med egne midler, lån med sikkerhet i norsk bolig, boliglån med pant i Spania eller en kombinasjon. Denne guiden hjelper deg å velge finansieringsmodell ut fra sikkerhet, egenkapital, valuta og kostnader før du binder deg til et kjøp."
    ],
    "sections": [
      {
        "heading": "4 måter å finansiere boligkjøpet i Spania",
        "body": [
          "Du kan kjøpe med egne midler eller finansiere med pant i en norsk eller spansk bolig. Det avgjørende er hvilken eiendom banken tar sikkerhet i, hvilken valuta du låner i, og hva løsningen koster totalt."
        ],
        "table": {
          "headers": [
            "Finansiering",
            "Sikkerhet",
            "Valuta",
            "Fordel",
            "Viktigste ulempe"
          ],
          "rows": [
            [
              "Egne midler",
              "Ingen pant",
              "NOK veksles til EUR ved behov",
              "Ingen lånerenter",
              "Binder kapital og reduserer buffer"
            ],
            [
              "Spansk boliglån",
              "Pant i spansk bolig",
              "Vanligvis EUR",
              "Lån og bolig i samme valuta",
              "Takst, kredittvurdering og egenkapitalkrav"
            ],
            [
              "Lån med pant i norsk bolig",
              "Pant i norsk bolig",
              "Normalt NOK",
              "Kan bruke ledig sikkerhet hjemme",
              "Norsk bolig belastes; NOK/EUR-risiko"
            ],
            [
              "Norsk bank med pant i spansk bolig",
              "Pant i spansk bolig",
              "Avhenger av tilbudet; ofte EUR",
              "Norskspråklig kontakt og spansk sikkerhet",
              "Begrenset tilbud; bankens vilkår avgjør"
            ]
          ],
          "caption": "Dette er finansieringsmodeller, ikke standardvilkår. Sammenlign konkret effektiv rente, gebyrer, sikkerhet, løpetid og risiko."
        }
      },
      {
        "heading": "Boliglån i spansk bank",
        "body": [
          "Et spansk boliglån sikres med pant i eiendommen du kjøper i Spania. Som ikke-resident kan du møte andre krav til egenkapital, dokumentasjon og betjeningsevne enn en skattemessig resident.",
          "Banken vurderer blant annet inntekt, gjeld, alder, eiendommens takst og lånebeløpet. Enkelte tilbud for ikke-residenter kan ligge rundt 60–70 % belåning, men det er ingen universell grense eller garanti. Rente kan være fast, flytende eller kombinert; sammenlign effektiv kostnad og eventuelle tilleggsvilkår.",
          "Les detaljene i /guide/boliglan-spansk-bank-nordmenn. Banco de España forklarer også fordelingen av låneomkostninger: https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/guia-textual/primerospasoscon/Gastos_asociados_a_la_hipoteca.html."
        ]
      },
      {
        "heading": "Lån med pant i norsk bolig",
        "body": [
          "Du kan undersøke om økt boliglån, refinansiering eller rammelån med sikkerhet i din norske bolig kan frigjøre penger til et kjøp i Spania. Lånet er da normalt i norske kroner, og det er den norske eiendommen – ikke den spanske – banken har pant i.",
          "Fordelen kan være kjent bankkontakt og at du bruker allerede etablert sikkerhet. Ulempen er at gjelden belaster boligen i Norge. Eurokjøpet kan også bli dyrere hvis kronen svekkes før pengene veksles. Vurder total gjeld, betjeningsevne og sikkerhetsmargin før du øker belåningen."
        ]
      },
      {
        "heading": "Norsk bank med pant i bolig i Spania",
        "body": [
          "Det finnes også norsktilknyttede banktilbud der lånet sikres i den spanske boligen, uten å belåne huset ditt i Norge. DNB Luxembourg opplyser at de tilbyr boliglån med pant i spansk eiendom, og at kunder kan søke om finansieringsbevis før de har funnet boligen.",
          "Dette er noe annet enn refinansiering av norsk bolig: Pantet er i Spania, mens långiveren kan ha norsk rådgivning og organisasjon i utlandet. Hvem som kvalifiserer, valuta, rente og belåningsgrad må avklares med banken. Se DNBs egen informasjon: https://www.dnb.no/lu/private-banking/boliglan-i-utlandet."
        ]
      },
      {
        "heading": "Kan jeg kombinere flere finansieringsformer?",
        "body": [
          "Ja. Mange kjøp finansieres ved å kombinere sparepenger med et boliglån, eller bruke noe frigjort kapital fra Norge sammen med egne midler. Banken vil likevel vurdere din samlede gjeld og evne til å betale.",
          "Eksempel: Ved en boligpris på 400 000 € kan du tenke deg et spansk lån på 240 000 € og egne midler på 160 000 € til kjøpesummen. I tillegg trenger du penger til kjøpsomkostninger og en reserve. Dette er bare et regneeksempel, ikke et tilbud eller en forventet belåningsgrad."
        ]
      },
      {
        "heading": "Egenkapital og kostnader",
        "body": [
          "Du må normalt ha nok disponible midler til den delen av kjøpesummen banken ikke finansierer, pluss kjøpskostnadene. Hvor mye det blir, avhenger av kjøpesum, boligtype, region og bankens vurdering.",
          "For en bolig på 400 000 € med et hypotetisk lån på 60 % må du dekke 160 000 € av selve prisen. Legger vi illustrativt 42 000 € i kjøpskostnader til grunn, trenger du 202 000 € før ekstra reserve. Et lavere lånetilsagn eller en lavere banktakst øker behovet.",
          "Ta med takst, eventuelle etableringskostnader, renter, valutaveksling og overføringer i budsjettet. Ikke bland utgifter til lånedokumentet med avgifter for eiendomskjøpet. Bruk kalkulatoren i /guide/kostnader-boligkjop-spania for den konkrete handelen."
        ]
      },
      {
        "heading": "Valuta og betaling",
        "body": [
          "Boligen selges og betales i euro. Har du penger eller lån i NOK, vil valutakursen påvirke hvor mange kroner du må bruke på et fast eurobeløp. Med EUR-lån og NOK-inntekt kan også fremtidige terminbetalinger variere målt i kroner.",
          "Eksempel: 200 000 € koster 2,30 millioner kroner ved kurs 11,50 og 2,40 millioner ved 12,00 – en forskjell på 100 000 kroner før gebyrer. Disse kursene er kun illustrasjoner, ikke dagens kurser.",
          "Be om skriftlig totalpris på veksling og overføring, kontroller mottakeropplysninger gjennom en trygg kanal og planlegg innbetalingene mot kontraktens frister. Les /guide/spansk-bankkonto-valutaveksling for den praktiske betalingsprosessen."
        ]
      },
      {
        "heading": "Når bør finansieringen være på plass?",
        "body": [
          "Finansieringsrammen bør være avklart før du reserverer eller binder deg til en konkret bolig. Et foreløpig banksignal er ikke det samme som et endelig lånetilsagn.",
          "Reservasjonsbeløp, privat kjøpekontrakt og overtakelse kan ha korte frister. Uten finansieringsavklaring risikerer du at takst, bankbehandling eller dokumentkrav forsinker oppgjøret. La en uavhengig advokat vurdere nødvendige finansieringsforbehold før du undertegner. Les /guide/kjope-bolig-i-spania for kjøpsløpet."
        ]
      },
      {
        "heading": "Slik finansierte jeg mitt boligkjøp",
        "body": [
          "Da jeg kjøpte bolig i Spania, valgte jeg finansiering i spansk bank. En viktig årsak var at renten jeg fikk tilbud om den gangen var lavere enn alternativene jeg vurderte. Jeg fikk ikke tilbud om lån med pant i den spanske boligen fra banken min i Norge.",
          "Erfaringen lærte meg hvor viktig det er å skille mellom bankenes foreløpige vurdering og en ferdig prosess med dokumentasjon og takst. Skulle jeg planlagt kjøpet på nytt i dag, ville jeg sammenlignet flere tilbud tidligere og beregnet hele finansieringskostnaden, inkludert valutarisiko og kontantbehov ved overtakelse.",
          "Dette beskriver mitt valg og mine vurderinger, ikke en garanti for hva som lønner seg for andre. Det finnes nå også norsktilknyttede tilbud med pant i spansk eiendom, som DNB Luxembourg; derfor bør alternativer undersøkes konkret."
        ]
      },
      {
        "heading": "Usikker på hvilken finansieringsløsning som passer deg?",
        "body": [
          "Riktig løsning avhenger av disponible egne midler, eventuell ledig sikkerhet i norsk bolig, inntekt, gjeld, lånebehov og valuta. I en uforpliktende boligprat kan vi se på hvordan ønsket bolig, område og budsjett henger sammen, før du tar lånespørsmålene videre til banken.",
          "Bestill en boligprat på /booking. ZenEcoHomes gir eiendomsveiledning, ikke personlige lånetilsagn eller uavhengig finansiell rådgivning."
        ]
      }
    ],
    "nextSteps": [
      "Fastsett total kjøpsramme inkludert omkostninger og buffer.",
      "Be om konkrete lånetilbud og sammenlign sikkerhet, valuta og totalkostnad.",
      "Avklar finansiering og betalingsfrister før du reserverer bolig.",
      "La uavhengig advokat vurdere eventuelle finansieringsforbehold."
    ],
    "faq": [
      {
        "question": "Hvordan kan jeg finansiere kjøp av bolig i Spania?",
        "answer": "Du kan bruke egne midler, spansk boliglån, lån med pant i norsk bolig eller en norsktilknyttet bank som tilbyr pant i spansk bolig. Flere løsninger kan kombineres."
      },
      {
        "question": "Bør jeg finansiere boligkjøpet i NOK eller euro?",
        "answer": "Det avhenger av inntekt, sparing, lånetilbud og valutarisiko. NOK-lån kan være praktisk med NOK-inntekt, men eurokjøpet eksponeres for kursen. EUR-lån følger boligens valuta, men betalingene kan svinge målt i NOK."
      },
      {
        "question": "Kan jeg kombinere egne midler og lån?",
        "answer": "Ja. Banken vurderer hvor mye du kan låne, og du dekker resten av kjøpesummen og kjøpsomkostningene med tilgjengelige midler."
      },
      {
        "question": "Når bør finansieringen være avklart?",
        "answer": "Avklar realistisk låneramme før reservasjon eller bindende avtale. Advokaten bør vurdere finansieringsforbehold og frister, og du bør ikke forveksle forhåndsvurdering med endelig lånetilsagn."
      },
      {
        "question": "Hvor mye egenkapital må man ha for å kjøpe hus i Spania?",
        "answer": "Det varierer med banken, taksten, belåningsgraden og kjøpskostnadene. Med et hypotetisk lån på 60 % må du dekke 40 % av kjøpesummen, samt skatter, oppgjørskostnader og en reserve."
      }
    ],
    "cta": {
      "label": "Bestill en uforpliktende boligprat",
      "href": "/booking"
    }
  },
  {
    slug: "omkostninger-nybygg-spania",
    title: "Omkostninger ved kjøp av nybygg i Spania: skatter og gebyrer",
    excerpt:
      "Hva kommer i tillegg til kjøpesummen på et nybygg? Oversikt over IVA, regional AJD, notar, register, juridisk bistand og andre kostnader som må beregnes konkret.",
    date: "2026-09-07",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/finansiering.svg",
    imageAlt: "Illustrasjon av kostnader, skatter og gebyrer ved boligkjøp i Spania",
    seoTitle: "Omkostninger ved kjøp av nybygg i Spania | Guide 2026",
    seoDescription:
      "Hva kommer i tillegg til prisen på nybygg i Spania? Se 10 % IVA på ordinære nye boliger, regional AJD, notar, registrering og andre kjøpskostnader.",
    keywords: [
      "omkostninger boligkjøp Spania nybygg",
      "skatt nybygg Spania",
      "gebyrer boligkjøp Spania",
      "IVA nybygg Spania",
      "AJD stempelavgift Spania",
    ],
    intro: [
      "Ved kjøp av nybygg kommer skatter og transaksjonskostnader i tillegg til annonsert kjøpesum. Den nøyaktige totalsummen avhenger blant annet av region, boligtype, kjøpesum, finansiering, notar-/registertariffer og hvilke profesjonelle tjenester du bruker.",
      "For ordinære nye boliger som omfattes av den reduserte bolig-IVA-satsen, er IVA normalt 10 %. I tillegg kommer regional AJD og øvrige kostnader. Få alltid en skriftlig, konkret beregning før du signerer eller betaler.",
    ],
    sections: [
      {
        heading: "Rask oversikt: Hva kan utgjøre omkostningene på et nybygg?",
        body: [
          "Skatter kan beregnes etter lovbestemte satser, mens notar, register, juridisk bistand, bank og tilkoblinger må beregnes for den konkrete transaksjonen. Tabellen er derfor en struktur – ikke et løfte om totalprosent.",
        ],
        table: {
          headers: ["Kostnadstype", "Hva er det?", "Sats / beregning", "Kommentar"],
          rows: [
            ["IVA", "Merverdiavgift på ordinære nye boliger", "Normalt 10 %", "Bekreft at den konkrete transaksjonen omfattes av satsen"],
            ["AJD", "Regional dokumentavgift på relevant offentlig skjøte", "1,5 % generell sats i Comunitat Valenciana; 1,5 % i Murcia for aktuelle IVA-pliktige, ikke-fritatte eiendomsoverføringer", "Regionale satser og eventuelle reduserte satser må bekreftes"],
            ["Notar", "Offentlig skjøte og notarialarbeid", "Regulert tariff – varierer", "Be om konkret beregning"],
            ["Eiendomsregister", "Registrering av eierskap", "Regulert tariff – varierer", "Avhenger av transaksjonen"],
            ["Uavhengig advokat", "Juridisk kontroll og kontraktsbistand", "Avtales med advokat", "Be om skriftlig honorar og omfang"],
            ["Strøm/vann og etablering", "Eventuelle nye kontrakter, målere eller tekniske arbeider", "Prosjekt- og leverandøravhengig", "Bekreft hva utbygger faktisk leverer"],
            ["Andre kostnader", "Bank, takst, oversettelser, fullmakt m.m. ved behov", "Avhenger av kjøpet", "Ta dem inn i totalbudsjettet"],
          ],
        },
      },
      {
        heading: "1. De offentlige skattene ved nybygg: IVA og AJD",
        body: [
          "Ordinære nye boliger som selges i en IVA-pliktig førstegangsoverdragelse beskattes normalt med 10 % IVA. Enkelte boligtyper eller transaksjoner kan ha andre regler, så den konkrete handelen må klassifiseres riktig.",
          "AJD er regional. I Comunitat Valenciana er den generelle satsen for relevante notarielle dokumenter 1,5 %. I Region Murcia ble satsen fra 25. juli 2025 satt til 1,5 % for første kopier av offentlige skjøter som formaliserer eiendomsoverføringer som er IVA-pliktige og ikke fritatt.",
        ],
        bullets: [
          "Bekreft IVA-behandlingen for den konkrete boligen og selgeren.",
          "Generell AJD i Comunitat Valenciana: 1,4 % fra 1. juni 2026 for relevante notarielle dokumenter, med mulige sær-/reduserte satser i bestemte tilfeller.",
          "Murcia: 1,5 % AJD for de nevnte IVA-pliktige, ikke-fritatte eiendomsoverføringene fra 25. juli 2025.",
          "Bruktboliger følger normalt ITP-reglene i stedet for IVA; i Murcia er den generelle ITP-satsen for fast eiendom 7,75 % fra 25. juli 2025. Andre regionale satser og reduksjoner må kontrolleres separat.",
        ],
      },
      {
        heading: "2. Notar og eiendomsregister",
        body: [
          "Det offentlige skjøtet signeres normalt hos notar. Notaren er en upartisk offentlig fagperson og kontrollerer/formaliserer sentrale sider ved dokumentet, men er ikke kjøpers private juridiske rådgiver.",
          "Etter signering registreres eierskapet normalt i Registro de la Propiedad for å sikre den registrerte rettsstillingen. Notar- og registerkostnader følger regulerte tariffer og bør beregnes konkret for transaksjonen fremfor å presenteres som faste beløp.",
        ],
      },
      {
        heading: "3. Juridisk bistand og etableringskostnader",
        body: [
          "En uavhengig advokat anbefales for å kontrollere kontrakt, eierskap, prosjekt-/byggetillatelser, relevante garantier og øvrige juridiske forhold på kjøpers vegne. Honoraret varierer mellom firmaer og oppdrag og bør avtales skriftlig på forhånd.",
          "Ved ferdigstillelse kan det også komme kostnader til strøm, vann, målere, tekniske sertifikater, fullmakt, oversettelser eller andre etableringstjenester. Avklar hva som er inkludert i utbyggers leveranse før du budsjetterer.",
        ],
        bullets: [
          "La advokaten kontrollere relevante tillatelser og kontraktsvilkår.",
          "Kontroller hvordan forskuddsbetalinger er sikret når lovens garantiordning gjelder.",
          "Bekreft dokumentasjon for ferdigstillelse/bruk før sluttoppgjør etter råd fra advokat.",
          "Avklar om NIE/fullmakt og andre tjenester er inkludert i advokatens honorar.",
        ],
      },
      {
        heading: "Eksempel: slik lager du riktig kostnadskalkyle",
        body: [
          "Start med kjøpesummen og de lovbestemte skattene som gjelder for regionen og transaksjonen. Legg deretter inn faktiske tilbud eller estimater fra notar/register, advokat, bank og eventuelle leverandører. Da får du et budsjett som kan etterprøves, i stedet for en generell prosent som kan være feil for akkurat ditt kjøp.",
        ],
        table: {
          caption: "Mal for kostnadsbudsjett – fyll inn faktiske tall før reservasjon.",
          headers: ["Post", "Beløp / status"],
          rows: [
            ["Kjøpesum", "Fyll inn konkret pris"],
            ["IVA", "Beregn gjeldende sats for transaksjonen"],
            ["AJD", "Beregn gjeldende regional sats"],
            ["Notar", "Innhent estimat"],
            ["Eiendomsregister", "Innhent estimat"],
            ["Advokat", "Avtal honorar og omfang"],
            ["Bank/takst", "Legg inn dersom relevant"],
            ["Strøm/vann/tilkoblinger", "Bekreft med utbygger/leverandør"],
            ["Andre dokumenterte kostnader", "Oversettelse, fullmakt, forsikring m.m. ved behov"],
            ["Total investering", "Summer alle faktiske poster"],
          ],
        },
      },
      {
        heading: "Hva koster det hvis du skal ha spansk boliglån?",
        body: [
          "Etter Ley 5/2019 fordeles flere kostnader ved selve boliglånet mellom bank og låntaker. Låntaker dekker taksten, mens långiver blant annet dekker gestoría, notarhonorar for selve låneskjøtet og registrering av pantesikkerheten. Andre bankvilkår og eventuelle gebyrer må fremgå av lånedokumentasjonen.",
        ],
        bullets: [
          "Takst (tasación): kostnaden ligger hos låntaker; pris varierer med leverandør og eiendom.",
          "Eventuelle etableringsgebyrer eller andre bankkostnader må fremgå av tilbudet og sammenlignes på totalkostnad.",
        ],
      },
    ],
    nextSteps: [
      "Be om en konkret kostnadsoppstilling for akkurat boligen, regionen og finansieringen din.",
      "Engasjer en uavhengig spansk advokat før du binder deg til vesentlige kontraktsvilkår eller betalinger.",
      "Be om dokumentasjon på hvordan forskuddsbetalinger er sikret ved kjøp på prospekt.",
      "Legg alle bekreftede kostnader inn i totalbudsjettet før du reserverer.",
    ],
    faq: [
      {
        question: "Kan jeg forhandle bort IVA på nybygg?",
        answer:
          "Nei, en lovpålagt IVA-sats er ikke et honorar som kan forhandles bort. Det avgjørende er hvilken avgiftsbehandling den konkrete transaksjonen etter loven skal ha.",
      },
      {
        question: "Når må omkostningene betales?",
        answer:
          "Tidspunktet varierer mellom skattetyper, delbetalinger og sluttoppgjør. Ved kjøp under oppføring kan IVA følge de avgiftspliktige delbetalingene. Advokat og utbygger bør gi deg en skriftlig betalings- og kostnadsplan for prosjektet.",
      },
      {
        question: "Hvem betaler megler, rådgiver og advokat?",
        answer:
          "Det finnes ikke én betalingsmodell som gjelder alle aktører og alle salg. Avklar skriftlig hvem som betaler megler-/rådgiverhonorar i den konkrete handelen, og avtal separat honorar og oppdrag med din uavhengige advokat.",
      },
    ],
    cta: { label: "Prøv Boligmatchen – finn prosjekter som passer budsjettet", href: "/eiendommer#boligmatch" },
  },
  {
    slug: "bankgaranti-nybygg-spania",
    title: "Bankgaranti ved nybygg i Spania: slik sikres forskuddsbetalinger",
    excerpt:
      "Kjøper du bolig under oppføring i Spania, finnes det lovregler om sikring av forskuddsbetalinger. Slik kontrollerer du garanti, særskilt konto og dokumentasjon med advokaten din.",
    date: "2026-09-07",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/kjopsprosess.svg",
    imageAlt: "Illustrasjon av sikret betaling og bankgaranti ved nybygg i Spania",
    seoTitle: "Bankgaranti ved nybygg i Spania | Forskuddsbetaling forklart",
    seoDescription:
      "Hvordan kan forskuddsbetalinger ved bolig under oppføring i Spania sikres? Guide til garanti, særskilt konto og juridisk kontroll for norske kjøpere.",
    keywords: [
      "bankgaranti nybygg Spania",
      "Ley 57/1968 Spania",
      "sikkerhet nybygg Spania",
      "forskuddsbetaling utbygger Spania",
      "aval bancario Spania",
    ],
    intro: [
      "Når du kjøper bolig under oppføring i Spania, betaler du ofte deler av kjøpesummen før boligen står ferdig. Da er dokumentasjonen rundt forskuddsbetalingene en sentral del av kjøpers juridiske kontroll.",
      "Reglene om sikring av forskudd bygger i dag på gjeldende lovverk som videreførte beskyttelsen fra den historiske Ley 57/1968. Din uavhengige advokat bør verifisere hvilken garanti/forsikring, konto og dokumentasjon som gjelder for prosjektet og hver betaling før du overfører vesentlige beløp.",
    ],
    sections: [
      {
        heading: "Hva er garantien ved nybygg – og hvorfor er den viktig?",
        body: [
          "Ved bolig under oppføring kan lovens vilkår utløse krav om at kjøpers forskuddsbetalinger sikres gjennom garanti eller forsikring. Poenget er å gi kjøper et krav mot garantisten dersom de lovbestemte vilkårene for tilbakebetaling blir oppfylt.",
          "Garantidokumentasjon må leses sammen med kjøpekontrakt, byggestatus og betalingsplan. Ikke anta at en generell prosjektpresentasjon alene dokumenterer at dine konkrete innbetalinger er sikret.",
        ],
      },
      {
        heading: "Loven bak: Fra Ley 57/1968 til dagens regler",
        body: [
          "Ley 57/1968 er historisk opphevet, mens beskyttelsen av forskuddsbetalinger er videreført gjennom senere lovgivning, blant annet i Ley de Ordenación de la Edificación (LOE) med endringer som trådte i kraft i 2016. Din advokat bør anvende gjeldende regler på det konkrete prosjektet.",
        ],
        table: {
          caption: "Forenklet kontrolliste. Juridisk vurdering gjøres på konkret kontrakt og prosjekt.",
          headers: ["Element", "Hva du bør få kontrollert"],
          rows: [
            ["Betalingene", "Hvilke forskudd omfattes av lovens sikringskrav"],
            ["Garanti/forsikring", "Hvem som garanterer, beløp, varighet og vilkår"],
            ["Konto", "At betaling skjer til korrekt konto oppgitt for prosjektet"],
            ["Byggetillatelse", "At nødvendige tillatelser foreligger på riktig tidspunkt"],
            ["Tilbakebetaling", "Når og hvordan et krav kan gjøres gjeldende"],
          ],
        },
      },
      {
        heading: "Slik kontrolleres ordningen i praksis",
        body: [
          "Før hver vesentlig betaling bør advokaten kontrollere at kontonummer, garanti-/forsikringsdokumentasjon og beløp samsvarer med kontrakten og gjeldende regler. Be om dokumentasjon som er knyttet til din konkrete kjøperposisjon og betalingsplan.",
        ],
        bullets: [
          "Betal bare til kontoen som er kontrollert mot kontrakt og prosjekt.",
          "Be om dokumentasjon på garanti/forsikring som faktisk dekker dine relevante innbetalinger.",
          "Kontroller beløp, kjøpernavn, prosjekt, frister og vilkår i dokumentene.",
          "Ta vare på kvitteringer og all garanti-/forsikringsdokumentasjon.",
        ],
      },
      {
        heading: "Hva du må sjekke før du betaler",
        body: [
          "Dette er juridisk kontroll som bør gjøres før vesentlige forskuddsbetalinger, ikke etter at penger er overført.",
        ],
        bullets: [
          "At prosjekt og selger er korrekt identifisert i kontrakten.",
          "At nødvendige tillatelser og byggestatus er kontrollert.",
          "At betalingskontoen er korrekt og dokumentert.",
          "At garanti-/forsikringsordningen er kontrollert for din betaling.",
          "At vilkår for ferdigstillelse og sluttoppgjør er tydelige.",
        ],
      },
      {
        heading: "Hva skjer hvis utbygger ikke leverer?",
        body: [
          "Hvilke rettigheter du har ved manglende levering eller forsinkelse avhenger av kontrakten og lovens vilkår. En gyldig garanti eller forsikringsordning kan gi et selvstendig krav mot garantisten når vilkårene er oppfylt.",
          "Nettopp derfor er dokumentasjonen viktig. Advokaten trenger kontrakt, betalingsbevis og garanti-/forsikringsdokumenter for å vurdere hvilke krav som kan fremmes og hvordan.",
        ],
      },
    ],
    nextSteps: [
      "La en uavhengig spansk advokat kontrollere kontrakt, betalingskonto og garanti/forsikring før vesentlige forskudd.",
      "Ta vare på dokumentasjonen som gjelder dine konkrete innbetalinger.",
      "Bekreft byggestatus og nødvendige tillatelser før nye delbetalinger.",
      "Få skriftlig avklart hvilke dokumenter som skal foreligge før sluttoppgjør.",
    ],
    faq: [
      {
        question: "Gjelder Ley 57/1968 fortsatt?",
        answer:
          "Selve Ley 57/1968 er opphevet. Beskyttelsen av forskuddsbetalinger er videreført i senere lovgivning. Din advokat bør kontrollere gjeldende regler og garantiordning for akkurat ditt prosjekt.",
      },
      {
        question: "Må forskuddsbetalinger være sikret?",
        answer:
          "Spansk lov har regler om sikring av forskudd ved bolig under oppføring når vilkårene er oppfylt. Hvilke betalinger og dokumenter som omfattes bør advokaten bekrefte konkret før du betaler.",
      },
      {
        question: "Hva er en særskilt prosjektkonto?",
        answer:
          "Lovverket stiller krav til hvordan relevante forskuddsbetalinger håndteres i de tilfellene reglene gjelder. Be advokaten kontrollere at kontoen du skal betale til er korrekt for prosjektet og betalingsformålet.",
      },
    ],
    cta: { label: "Bruk Boligmatchen for å finne aktuelle nybyggprosjekter", href: "/eiendommer#boligmatch" },
  },
  {
    slug: "nybygg-finestrat-omradeguide",
    title: "Nybygg og moderne villaer i Finestrat: områdeguide for norske kjøpere",
    excerpt:
      "Vurderer du nybygg i Finestrat? Les om mikro-lokasjonene, solforhold, utsikt, service og hva du bør sjekke før du reserverer.",
    date: "2026-09-07",
    updated: "2026-09-15",
    category: "Områdeguide",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/omradevalg.svg",
    imageAlt: "Illustrasjon av Finestrat med fjell, kyst og moderne nybygg på Costa Blanca Nord",
    seoTitle: "Nybygg i Finestrat, Spania | Villa og norsk rådgivning",
    seoDescription:
      "Vurderer du nybygg i Finestrat? Les om solforhold, mikrobeliggenheter som Sierra Cortina og Balcón de Finestrat og hva du bør kontrollere før kjøp.",
    keywords: [
      "nybygg Finestrat",
      "villa Finestrat nybygg",
      "leilighet Finestrat Sierra Cortina",
      "bolig Finestrat Costa Blanca",
      "Balcón de Finestrat",
    ],
    intro: [
      "Finestrat ligger på Costa Blanca Nord mellom Puig Campana og kysten ved Benidorm. Kommunen kombinerer historisk landsby, åssider med boligområder og kystnære soner, og har et betydelig innslag av moderne boligprosjekter.",
      "Denne guiden forklarer forskjellen på mikro-lokasjonene og hvilke spørsmål du bør stille om utsikt, sol, innsyn, naboarealer, service og byggeaktivitet før du reserverer.",
    ],
    sections: [
      {
        heading: "Hvorfor vurdere Finestrat?",
        body: [
          "Finestrat kan passe kjøpere som vil kombinere fjell og utsikt med praktisk tilgang til Benidorm, shopping, golf og strender. Opplevelsen er svært forskjellig mellom selve landsbyen, åssidene og områdene nær kysten.",
          "Det finnes moderne leilighets- og villaprosjekter i kommunen, men energiklasse, standard, solceller og det som faktisk følger med må kontrolleres for hvert prosjekt.",
        ],
        bullets: [
          "Utsikt: kontroller både dagens utsikt og hva som kan bygges på nabotomter.",
          "Beliggenhet: kjøretid til strand, service og Alicante-Elche flyplass varierer med mikrobeliggenhet og trafikk.",
          "Livsstil: sammenlign landsbyliv, åssideområder og mer kystnære soner.",
          "Boligtype: vurder konkret energiklasse, fellesanlegg, uteplass og vedlikeholdsbehov.",
        ],
      },
      {
        heading: "Mikro-lokasjonene forklart",
        body: [
          "Finestrat er ikke ett ensartet område. Hvor i kommunen du kjøper påvirker utsikt, behov for bil, hverdagsliv, støy og pris. Her er tre områder mange kjøpere møter i søket:",
        ],
        bullets: [
          "Sierra Cortina: etablert bolig-/resortområde i åssiden nær Benidorm og flere fritidstilbud. Kontroller gang-/kjøreavstander og det konkrete prosjektets fasiliteter.",
          "Balcón de Finestrat: åssideområde med mange nyere boliger og utsikt fra flere prosjekter. Sjekk høyde, nabotomter, vind, innsyn og faktisk sjøutsikt fra den aktuelle enheten.",
          "Finestrat Pueblo: den historiske landsbyen i fjellsiden, med en annen hverdagsrytme og karakter enn de nyere boligområdene nærmere Benidorm.",
        ],
      },
      {
        heading: "Pris og hva som er inkludert",
        body: [
          "Prisene endrer seg og varierer med mikrobeliggenhet, utsikt, boligtype, areal, byggefase og standard. Bruk derfor oppdatert tilgjengelighet og sammenlignbare enheter når du vurderer et prosjekt – ikke gamle startpriser eller generelle prisintervaller.",
          "Sjekk også hva prisen faktisk inkluderer: basseng, parkering, bod, hvitevarer, solceller, landskapsarbeid, tilvalg, felleskostnader og eventuelle ekstra kjøpskostnader.",
        ],
      },
      {
        heading: "Freddys vurdering",
        body: [
          "«I Finestrat er det tre ting jeg alltid ber kjøpere sjekke før de reserverer: Hva skjer på nabotomtene? Hvordan er vind- og solforholdene på akkurat den beliggenheten? Og hvor mye innsyn får du fra naboterrasser i tett bebygde komplekser?»",
          "«Dette er forhold som sjelden kommer tydelig frem i en portalannonse. De bør vurderes på den konkrete tomten, enheten og reguleringen rundt prosjektet.»",
        ],
      },
    ],
    nextSteps: [
      "Bestem hvilken type mikrobeliggenhet som passer: landsby, åsside eller nærmere kyst/service.",
      "Sjekk byggeaktivitet og regulering på nabotomtene før du reserverer.",
      "Vurder sol-, vind-, støy- og innsynsforhold på den konkrete beliggenheten.",
      "Sammenlign oppdatert pris, tilgjengelighet og spesifikasjon før du legger inn reservasjon.",
    ],
    faq: [
      {
        question: "Er Finestrat et godt sted for nordmenn å kjøpe nybygg?",
        answer:
          "Finestrat kan være et godt valg dersom du ønsker moderne bolig, nærhet til Benidorm og kysten og samtidig aksepterer at mange boligområder er bilbaserte og kuperte. Riktig mikrobeliggenhet og prosjekt er viktigere enn nasjonalitet.",
      },
      {
        question: "Hva er forskjellen på Sierra Cortina og Balcón de Finestrat?",
        answer:
          "Begge ligger i åssiden i Finestrat-området, men prosjekter og nærmiljø varierer. Sammenlign faktisk adkomst, service, utsikt, fellesanlegg og naboarealer i stedet for å velge kun ut fra områdenavnet.",
      },
      {
        question: "Hvor langt er det fra Finestrat til flyplassen?",
        answer:
          "Kjøretiden til Alicante-Elche flyplass varierer med hvor i kommunen du starter og trafikken. Bruk kart/ruteplanlegging fra den konkrete boligen når flyplasstid er viktig for kjøpet.",
      },
    ],
    cta: { label: "Se aktuelle boliger i Finestrat", href: "/eiendommer?q=finestrat" },
  },
  {
    slug: "utleie-inntektspotensial-bolig-spania",
    title: "Utleie av bolig på Costa Blanca: hva kan du faktisk tjene?",
    excerpt: "Ferieutleie eller langtidsleie? Se et konkret regneeksempel, hva som påvirker nettoinntekten, og hvilke regler du må kontrollere før boligkjøp i Spania.",
    date: "2026-09-08",
    updated: "2026-10-09",
    category: "Guide",
    readingTime: "12 min lesing",
    image: "/assets/magasin-covers/utleie-inntekt.svg",
    imageAlt: "Illustrasjon av bolig, utleieinntekter og vurdering av utleiepotensial i Spania",
    seoTitle: "Utleie av bolig i Spania | Inntekt, regler og regneeksempel",
    seoDescription: "Hva kan du tjene på utleie på Costa Blanca? Sammenlign turistutleie og langtidsleie, se netto-regneeksempel og regler du må sjekke før kjøp.",
    keywords: ["utleie bolig Spania", "leieinntekt Costa Blanca", "turistutleie Valencia regler", "netto leieinntekt Spania", "langtidsutleie Spania"],
    intro: [
      "Kan leieinntektene betale deler av ferieleiligheten i Spania – eller til og med gjøre den til en investering? Det korte svaret er at det er mulig, men verken høy annonsert døgnpris eller en pen avkastningsprosent forteller hva du faktisk sitter igjen med.",
      "Det avgjørende er kombinasjonen av lovlig utleieform, beliggenhet, tilgjengelige utleieuker, realistisk etterspørsel og kostnader. Her viser vi hvordan du vurderer en konkret bolig på Costa Blanca – og hvorfor regnestykket bør være klart før reservasjon, ikke etter overtakelse.",
    ],
    sections: [
      {
        heading: "Kort fortalt: dette må du vite før du kjøper",
        bullets: [
          "Avklar først om boligen lovlig kan brukes til akkurat den utleieformen du planlegger.",
          "Skill mellom turistutleie, annen tidsbegrenset leie og ordinær boligleie; kontraktstype og faktisk formål betyr noe.",
          "Beregn utleieukene du virkelig kan tilby, etter at eget bruk og tomme perioder er trukket fra.",
          "Sammenlign netto driftsresultat og kontantstrøm – ikke bare brutto leieinntekt.",
          "Undersøk bygningens sameieregler, kommunale krav og dokumentasjon for akkurat den boligen.",
        ],
      },
      {
        heading: "Tre ulike måter å leie ut bolig i Spania på",
        body: [
          "Turistutleie: Korte ferieopphold kan gi høye priser i populære perioder, men innebærer omfattende krav, sesongvariasjoner, gjesteskifter og aktiv drift. Denne modellen må være lovlig på den konkrete adressen.",
          "Tidsbegrenset leie for et reelt midlertidig behov: Kan passe for eksempel for personer på arbeidsopphold. Dette er ikke en automatisk omvei rundt turistreglene; faktisk bruk, kontraktsgrunnlag, regionale krav og eventuelle registreringsplikter må vurderes.",
          "Ordinær langtidsutleie: Kan gi mer forutsigbar inntekt og mindre hyppig drift, men omfattes av egne regler om blant annet kontrakter, leietakerrettigheter og oppsigelse. Egen bruk av boligen blir mindre fleksibelt.",
          "Viktig: Velg ikke kontraktslengde alene for å forsøke å omgå krav til turistutleie. Be en kvalifisert lokal rådgiver eller advokat avklare riktig modell.",
        ],
      },
      {
        heading: "Hva påvirker leieinntektene på Costa Blanca?",
        body: [
          "En god utleiebolig er ikke nødvendigvis den største eller dyreste. To leiligheter til samme pris kan få svært forskjellig etterspørsel. Gangavstand til strand, restauranter og dagligvarer, adkomst fra flyplass, parkering, heis, solforhold, terrasse og gode soverom kan telle mer enn ekstra kvadratmeter.",
        ],
        bullets: [
          "Benidorm: Vurder mikroområde, strandtilgang, støy, bygningens profil og hvilken type gjester boligen faktisk passer for.",
          "Finestrat: Skill mellom strandnære områder og boligområder der bil ofte er nødvendig. Nybyggstandard og uteplass må vurderes mot prisnivå og sesong.",
          "Villajoyosa: Undersøk avstand til strand, sentrum, transport og hva slags opphold området tiltrekker seg gjennom året.",
          "Albir: Vurder gangavstand, tilgjengelighet og hvilken etterspørsel det kan være utenfor høysesongen.",
          "Altea: Utsikt, adkomst, parkering og boligtype betyr mye; en spektakulær beliggenhet gir ikke automatisk høyt belegg.",
        ],
      },
      {
        heading: "Eksempel: fra brutto leieinntekt til netto resultat",
        body: [
          "La oss bruke en tenkt leilighet med lovlig utleieadgang. Tallene nedenfor er kun et pedagogisk scenario, ikke markedsstatistikk, pristilbud eller prognose for noen bestemt adresse.",
          "Anta 8 utleide høysesonguker til 1 200 euro per uke, 10 uker i skuldersesong til 800 euro og 8 uker i lavsesong til 550 euro. Da blir brutto leieinntekt 22 000 euro per år. Resten av året består av eget bruk, vedlikehold eller ubookede perioder.",
        ],
        table: {
          caption: "Illustrativt årsregnskap i euro – tallene må erstattes med dokumenterte anslag for den aktuelle boligen.",
          headers: ["Post", "Årlig beløp", "Kommentar"],
          rows: [
            ["Brutto leieinntekt", "22 000 €", "26 utleide uker fordelt på tre sesonger"],
            ["Plattform og betalingsgebyr", "− 2 200 €", "Antatt 10 % samlet"],
            ["Administrasjon og gjestehåndtering", "− 3 300 €", "Antatt 15 % av brutto"],
            ["Rengjøring og vask, eierandel", "− 1 200 €", "Avhenger av oppholdslengde og gebyrmodell"],
            ["Strøm, vann og internett", "− 1 800 €", "Forenklet antakelse"],
            ["Comunidad, IBI og forsikring", "− 2 000 €", "Eksempel på samlede eierutgifter"],
            ["Vedlikehold og reserve", "− 1 500 €", "Løpende slitasje og uforutsette utgifter"],
            ["Driftsresultat før skatt og finansiering", "10 000 €", "Ikke det samme som disponibel nettoinntekt"],
          ],
        },
      },
      {
        heading: "Hva betyr resultatet for avkastningen?",
        body: [
          "Hvis boligen i eksemplet har en samlet investert kostnad på 300 000 euro, tilsvarer 10 000 euro i driftsresultat cirka 3,3 % årlig driftsavkastning før skatt og finansiering. Det er ikke en garanti for fremtidig inntekt eller verdiutvikling.",
          "Med boliglån må renter og avdrag inn i en separat kontantstrømkalkyle. Skatt kan avhenge av skattemessig bosted, inntektstype og relevante fradragsregler. En positiv driftsmargin kan derfor likevel gi svak eller negativ kontantstrøm.",
          "Regn også på et svakt år. Ved eksempelvis færre bookinger, lavere gjennomsnittspris eller større reparasjoner kan nettoresultatet falle betydelig. Eiendom bør ikke kjøpes med en økonomi som bare fungerer i det mest optimistiske scenariet.",
        ],
      },
      {
        heading: "Turistutleie i Comunitat Valenciana: hvilke regler gjelder?",
        body: [
          "I Comunitat Valenciana omfatter den regionale definisjonen av vivienda de uso turístico normalt utleie av en komplett bolig for turistformål i høyst 10 sammenhengende dager til samme leietaker. Opphold på 11 dager eller mer faller utenfor denne spesifikke definisjonen, men blir ikke automatisk fritt for andre lover eller registreringskrav.",
          "For turistutleie må blant annet kommunal arealkompatibilitet, relevante kommunale tillatelser, regional registrering og tekniske krav undersøkes. Regional turistregistrering har som hovedregel fem års gyldighet, med lovbestemte unntak. Kontroller den offisielle statusen – ikke bare hva det står i en salgsannonse.",
          "Fra 3. april 2025 krever nye turistutleieaktiviteter i sameier som omfattes av den nasjonale eierseksjonsloven normalt uttrykkelig godkjenning fra sameiet etter reglene om tre femdels flertall. Eksisterende lovlig virksomhet kan omfattes av overgangsregler. Eksisterende vedtektsforbud kan kreve en egen vurdering. For nettannonsering kan også nasjonal registrering for korttidsutleie være nødvendig.",
          "Ikke legg en forventet turistinntekt inn som forutsetning i kjøpsbudsjettet før advokat og relevante myndigheter har bekreftet at modellen er tillatt for den konkrete boligen.",
        ],
        bullets: [
          "Undersøk kommune og adresse, ikke bare regionen.",
          "Be om dokumentasjon for kommunal kompatibilitet og nødvendig regional registrering.",
          "Les sameiets vedtekter og relevante protokoller, inkludert krav om uttrykkelig godkjenning.",
          "Kontroller eventuell nasjonal registreringsplikt for markedsføring på digitale plattformer.",
          "Avklar plikt til gjesteregistrering, forsikring og skattemessig rapportering før oppstart.",
        ],
      },
      {
        heading: "Egen feriebruk og utleie konkurrerer om de samme ukene",
        body: [
          "Mange ønsker å bruke boligen selv i juli og august, men det er ofte nettopp slike perioder en utleiekalkyle forutsetter høyere inntekter fra. Derfor bør du først reservere de ukene familien faktisk ønsker å bruke boligen, og deretter beregne inntekt fra resten.",
          "En bolig som skal være et godt familiehjem kan være et utmerket kjøp selv med begrenset utleie. Men hvis leieinntektene er avgjørende for å betjene lånet, må boligvalg og risikotoleranse være annerledes.",
        ],
      },
      {
        heading: "Hva må du organisere når du ikke bor i Spania?",
        body: [
          "Utleie er også drift. Noen må ta imot gjester, håndtere nøkler, kontrollere boligen, organisere rengjøring, følge opp skader og reagere ved vannlekkasje eller uvær. Dette koster penger, men god oppfølging kan redusere risikoen for tap og konflikter.",
          "ZenEcoHomes kan hjelpe med å vurdere de praktiske behovene, mens tjenester for nøkkelhåndtering og boligtilsyn kan organiseres separat. Et realistisk regnestykke må inkludere slike tjenester – også når eieren planlegger å ordne det meste selv.",
        ],
      },
      {
        heading: "Slik vurderer vi en bolig med utleiepotensial",
        body: [
          "Vi starter med det viktigste spørsmålet: Skal boligen først og fremst være ditt eget sted i Spania, eller må den også oppfylle et bestemt inntektsmål? Deretter sammenligner vi aktuelle boliger ut fra bruk, tilgjengelige utleieperioder, målgruppe, beliggenhet og dokumenterbar lovlighet.",
          "Vi kan bidra med bolig- og områdeanalyse og en praktisk, scenario-basert inntektsvurdering. Uavhengig juridisk og skattemessig kontroll bør utføres av kvalifiserte fagpersoner. Målet er ikke å selge en optimistisk avkastning, men å hjelpe deg å ta en beslutning du forstår.",
        ],
      },
      {
        heading: "Offisielle kilder og videre kontroll",
        body: [
          "Regler kan endres. Kontroller gjeldende rett hos Generalitat Valenciana (sede.gva.es, prosedyre 19207), i regional turismelov Ley 15/2018 artikkel 65 (boe.es) og i den nasjonale eierseksjonsloven Ley de Propiedad Horizontal artikkel 7.3 og 17.12 (boe.es). Bruk en lokal jurist for å bekrefte konsekvensene for den bestemte eiendommen.",
        ],
      },
    ],
    nextSteps: [
      "Bestem om utleie er et krav til finansieringen eller bare en mulig tilleggsinntekt.",
      "Avklar lovlig utleieform, kommunale krav og sameiets dokumentasjon før reservasjon.",
      "Lag minst tre scenarier: forsiktig, forventet og optimistisk, med dokumenterte antakelser.",
      "Beregn netto driftsresultat, skatt, finansiering og reelt kontantbehov hver for seg.",
      "Be ZenEcoHomes om en konkret vurdering av aktuelle boliger og områder.",
    ],
    faq: [
      { question: "Hvor mye kan jeg tjene på å leie ut en bolig i Spania?", answer: "Det finnes ikke ett pålitelig beløp for hele Spania eller Costa Blanca. Resultatet avhenger av lovlig utleieform, sesong, leiepris, belegg, egen bruk, driftskostnader og skatt. Start med et netto årsbudsjett for den konkrete boligen." },
      { question: "Er utleie over 10 dager alltid lovlig uten turistlisens?", answer: "Nei. I Comunitat Valenciana faller opphold på minst 11 sammenhengende dager utenfor den spesifikke regionale definisjonen av turistbolig, men annen boliglovgivning, nasjonal registrering, kommunale krav, kontraktsregler og faktisk bruksformål kan fortsatt gjelde." },
      { question: "Kan jeg kjøpe en leilighet med eksisterende turistregistrering?", answer: "Muligens, men kontroller om registrering og eventuelle tillatelser fortsatt er gyldige, om overdragelse eller endring krever ny dokumentasjon, og hva sameiet og kommunen tillater. Ikke anta at rettigheter automatisk følger med ved eierskifte." },
      { question: "Hva er forskjellen på brutto- og nettoavkastning?", answer: "Bruttoavkastning sammenligner leieinntekt med investeringen før utgifter. Netto driftsavkastning trekker fra relevante driftskostnader. Skatt, renter og avdrag må vurderes separat for å forstå hva du faktisk sitter igjen med." },
      { question: "Kan jeg bruke boligen selv og samtidig leie den ut?", answer: "Ja, hvis utleieformen er lovlig og kontraktene tillater det. Men ukene du bruker selv kan ikke samtidig gi leieinntekter. Høysesonguker kan derfor ha en viktig alternativkostnad." },
      { question: "Hjelper ZenEcoHomes med vurdering av utleiepotensial?", answer: "Vi kan hjelpe med boligvalg, områdeanalyse og realistiske økonomiske scenarier. Juridisk kontroll, skatterådgivning og endelig godkjenning av utleie må avklares med riktige fagpersoner og myndigheter." },
    ],
    cta: { label: "Finn en bolig som passer både eget bruk og utleie", href: "/eiendommer#boligmatch" },
  },
  {
    "slug": "lopende-kostnader-eie-bolig-spania",
    "title": "Løpende kostnader ved å eie bolig i Spania",
    "excerpt": "Hva koster det å eie bolig i Spania per år? Få oversikt over IBI, comunidad, Modelo 210, strøm, vann, forsikring, vedlikehold og kostnader ved tom bolig.",
    "date": "2026-09-08",
    "updated": "2026-10-12",
    "category": "Kjøpsprosess",
    "readingTime": "12 min lesing",
    "image": "/assets/magasin-covers/kostnader-eie.svg",
    "imageAlt": "Regninger og løpende utgifter ved å eie bolig i Spania",
    "seoTitle": "Løpende kostnader ved å eie bolig i Spania | Guide",
    "seoDescription": "Hva koster det å eie bolig i Spania? Oversikt over IBI, comunidad, strøm, vann, forsikring, Modelo 210 og vedlikehold. Sjekklister og årsbudsjett.",
    "keywords": [
      "løpende kostnader ved å eie bolig i Spania",
      "hva koster det å eie bolig i Spania",
      "IBI Spania",
      "comunidad Spania",
      "Modelo 210",
      "utgifter villa privat basseng Spania"
    ],
    "author": {
      "name": "Freddy Bremseth",
      "href": "/eiendomsradgiver-spania.html"
    },
    "intro": [
      "Hva koster det å eie bolig i Spania når kjøpet er gjennomført? Her får du et konkret, illustrativt årsbudsjett for leilighet og villa – og en oversikt over IBI, fellesutgifter, forsikring, strøm, vann og vedlikehold. Tallene er planleggingseksempler, ikke dokumenterte markedspriser.",
      "En leilighet uten spesielt kostbare fellesanlegg kan i vårt regneeksempel ha 2 400–5 400 euro i årlige driftsutgifter, mens en villa med privat basseng og hage kan ha 5 400–12 000 euro. Dette er illustrative budsjettrammer før lån, større reparasjoner og individuelle skatter. Be alltid om faktiske regninger for boligen før du bestemmer deg."
    ],
    "sections": [
      {
        "heading": "Hva koster det å eie bolig i Spania?",
        "body": [
          "Som illustrasjon kan du budsjettere omtrent 200–450 euro i måneden for en enklere leilighet og 450–1 000 euro for en villa med privat basseng og hage. Dette er ikke observerte gjennomsnitt eller pristilbud. Fellesanlegg, bruk, boligens alder og kommune kan gi langt høyere eller lavere beløp. Tabellen viser et kompakt regneeksempel; sjekk faktiske fakturaer for din bolig."
        ],
        "table": {
          "headers": ["Utgift", "Leilighet / år", "Villa / år"],
          "rows": [
            ["IBI og renovasjon", "€300–700", "€600–1 400"],
            ["Comunidad", "€500–1 500", "€0–600"],
            ["Strøm og vann", "€600–1 200", "€1 200–2 400"],
            ["Forsikring", "€200–400", "€400–800"],
            ["Vedlikehold, hage og basseng", "€800–1 600", "€3 200–6 800"]
          ],
          "caption": "Illustrative planleggingstall, ikke statistikk eller tilbud. Sum: leilighet €2 400–5 400; villa €5 400–12 000 per år. Lån, individuelle skatter og større engangsreparasjoner kommer eventuelt i tillegg."
        }
      },
      {
        "heading": "Løpende drifts- og bokostnader",
        "body": [
          "Boligen har vanligvis både faste abonnementer og forbruksavhengige kostnader. Leiligheter og rekkehus kan ha flere fellesutgifter, mens villaer ofte krever mer individuelt vedlikehold. Sjekk også hvilke tjenester som er frivillige.",
          "Et praktisk råd ved boligkjøp på Costa Blanca er å undersøke kostnadsdriverne før du sammenligner to boliger med samme kjøpesum: heis og oppvarmet fellesbasseng kan gi høye fellesutgifter, mens en villa uten comunidad kan kreve egne serviceavtaler og større vedlikeholdsreserve. Be om styreprotokoller og fakturaer, ikke bare salgsoppgavens anslag.",
          "### Strøm og elektrisitet",
          "Strømregningen består normalt av faste ledd knyttet til avtalt kapasitet, forbruk og andre regulerte eller avtalte kostnader. Klimaanlegg, oppvarming, varmtvann og bassengpumpe kan øke forbruket merkbart. Be om tidligere regninger og kontroller avtalt effekt.",
          "### Vann og avløp",
          "Regningen kan inneholde fast abonnement, forbruksledd, avløp og lokale avgifter. Hagevanning, bassengpåfylling og lekkasjer kan gjøre en stor forskjell. Be om faktiske fakturaer fra lokale leverandører.",
          "### Renovasjon og andre kommunale avgifter",
          "Basura er en kommunal avgift for avfallshåndtering, der den ilegges. Den kan kreves separat eller etter den lokale betalingsordningen. Undersøk også andre kommunale gebyrer knyttet til eiendommen.",
          "### Forsikring på bolig i Spania",
          "Vurder dekning for bygningsskade, innbo, ansvar, vannskader, uvær og skade når boligen står ubebodd. Sameiets forsikring kan dekke felles bygningsdeler, men erstatter ikke nødvendigvis din egen dekning. Be om polise og vilkår; en långiver kan kreve nødvendig skadeforsikring for pantet.",
          "### Fellesutgifter (comunidad)",
          "Fellesutgifter finansierer vedtatte fellesoppgaver som trapper, heis, fellesbasseng, hage, renhold, belysning, administrasjon og vedlikehold. Fordelingen følger normalt eierandel/fordelingsnøkkel og vedtekter, ikke nødvendigvis lik pris per bolig. Be om budsjett, protokoller og bekreftelse på utestående krav.",
          "### Ekstraordinære felleskostnader",
          "Et sameie kan vedta ekstra innbetalinger (derramas) til for eksempel fasade, heis, tak eller rehabilitering. Disse kan komme i tillegg til vanlige felleskostnader. Gjennomgå møteprotokoller og planlagte arbeider før kjøpet.",
          "### Vedlikehold av bolig og uteområder",
          "Sett av penger til maling, tetting, hvitevarer, klimaanlegg, varmtvannsbereder, rør, terrasse og hage. En eldre bolig og en stor tomt kan kreve mer arbeid. Avklar hvem som har ansvar for vegger, tak, uteplasser og tekniske installasjoner.",
          "### Kostnader ved privat basseng",
          "Privat basseng kan kreve rengjøring, kjemikalier, filter, pumpeelektrisitet, vannpåfylling og fagservice. Utgifter til reparasjoner eller utskifting av teknikk kommer i tillegg. Kontroller alder, tilstand og driftsjournal.",
          "### TV, internett og abonnementer",
          "Internett og TV er vanligvis valgfrie avtaler med månedlig betaling. Sjekk dekning og bindingstid, særlig på landeiendom eller i områder med begrenset fiber.",
          "### Innbruddsalarm og sikkerhet",
          "Alarm kan medføre installasjon, utstyr og løpende abonnement til alarmsentral. Undersøk om alarmsystemet eies, leies eller er bundet til kontrakt.",
          "### Keyholder, tilsyn og vaktmester",
          "Når du bor i Norge eller er bortreist, kan et lokalt tilsyn oppdage lekkasjer, strømbrudd eller stormskader og bistå med nøkkeloverlevering og håndverkere. Tjenesten er normalt valgfri; kontroller hva avtalen faktisk inkluderer.",
          "### Bankgebyrer og kostnader til bankkonto",
          "En spansk bankkonto kan ha gebyrer for konto, kort og overføringer, avhengig av produktet. Be om oppdatert prisliste og vurder om direktebetalinger og avtalegiro er satt opp riktig."
        ]
      },
      {
        "heading": "Skatter og avgifter ved å eie bolig i Spania",
        "body": [
          "IBI er en lokal eiendomsskatt. Andre skatter avhenger blant annet av om du er skattemessig bosatt i Spania, om du leier ut boligen, og størrelsen på din skattepliktige formue.",
          "### IBI – kommunal eiendomsskatt",
          "IBI (Impuesto sobre Bienes Inmuebles) beregnes med utgangspunkt i eiendommens cadastralverdi (valor catastral) og kommunens regler og sats. Den er ikke det samme som en prosentandel av annonseringsprisen. Siste IBI-kvittering er det beste utgangspunktet, men undersøk også varslede omtakseringer eller endringer.",
          "### Skatt for ikke-residenter og Modelo 210",
          "Eier du en spansk bolig som skattemessig ikke-resident, kan egen bruk og perioder uten utleie gi beregnet skattepliktig eiendomsinntekt (renta inmobiliaria imputada). Beregningsgrunnlaget følger egne regler knyttet til cadastralverdi, ofte 1,1 % eller 2 % etter gjeldende vilkår; prosentsatsene er beregningsgrunnlag, ikke selve skattesatsen. Modelo 210 er skjemaet som benyttes til å rapportere og betale den relevante ikke-residentskatten (IRNR).",
          "Ved utleie beskattes faktiske leieinntekter etter egne regler, og for visse skattemessige bostedsland kan direkte tilknyttede kostnader trekkes fra hvis vilkårene oppfylles. Tid som er utleid, og tid til privat bruk eller tilgjengelighet, kan dermed behandles ulikt. Kontroller riktig sats, frister og fradrag i [[Skatteetatens spanske veiledning for Modelo 210|https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html]] eller hos skatterådgiver.",
          "### Formuesskatt og eventuell solidaritetsskatt",
          "Impuesto sobre el Patrimonio og Impuesto Temporal de Solidaridad de las Grandes Fortunas kan være aktuelle ved større formuer. Regler, fritak, terskler, verdsetting, gjeld og regionalt regelverk gjør dette til en individuell vurdering. Les reglene om [[spansk formuesskatt|https://sede.agenciatributaria.gob.es/Sede/declaraciones-informativas-otros-impuestos-tasas/impuesto-sobre-patrimonio.html]] og [[solidaritetsskatt på store formuer|https://sede.agenciatributaria.gob.es/Sede/declaraciones-informativas-otros-impuestos-tasas/impuesto-temporal-solidaridad-grandes-fortunas.html]].",
          "### Skatt for deg som er skattemessig bosatt i Spania",
          "Skattemessig residenter følger andre regler for inntekt og formue, blant annet spansk personinntektsskatt (IRPF). Dette er ikke en full guide til skattemessig bosted eller internasjonal beskatning. Få vurdert din konkrete situasjon, også med hensyn til Norge.",
          "### Skatterepresentant og regnskapshjelp",
          "En gestor eller skatterådgiver kan hjelpe med skatteplikt, oppgaver og frister. Betalt representasjon er ikke automatisk et generelt krav for enhver utenlandsk eier; særskilte representasjonsplikter avhenger av lovbestemte forhold. Avklar behov og fullmakter før du inngår en avtale."
        ]
      },
      {
        "heading": "Hva koster det å eie bolig når den står tom?",
        "body": [
          "IBI, eventuelle comunidad-krav, faste abonnementer, forsikring, renovasjon og relevante skatter fortsetter normalt selv om du ikke oppholder deg i boligen. Strøm- og vannforbruk kan falle, men faste ledd og sikringsbehov forsvinner ikke nødvendigvis.",
          "Før lengre fravær bør du gjøre disse kontrollene:"
        ],
        "bullets": [
          "Vurder stenging av vann og kontroller mulige lekkasjepunkter.",
          "Sjekk strøm, sikringer, kjøleskap og hva som må være påslått.",
          "Gå gjennom forsikringsvilkår for perioder uten tilsyn.",
          "Avtal tilsyn, nøkkeltilgang og kontaktperson ved skader.",
          "Planlegg lufting, hage- og bassengvedlikehold også mens boligen er tom."
        ]
      },
      {
        "heading": "Hva er forskjellen på kostnadene ved å eie leilighet, rekkehus og villa?",
        "body": [
          "Forskjellen ligger først og fremst i hvem som betaler for vedlikehold og felles fasiliteter. En stor leilighet med heis og flere bassenger kan koste mer i fellesutgifter enn et enkelt rekkehus; en villa kan ha høyere direkte driftsansvar."
        ],
        "table": {
          "headers": [
            "Kostnadsdriver",
            "Leilighet",
            "Villa"
          ],
          "rows": [
            ["Basseng og hage", "Ofte felleskostnad", "Ofte privat drift"],
            ["Bygningsvedlikehold", "Delt med sameiet", "Direkte eieransvar"],
            ["Ekstra innbetalinger", "Mulig derrama", "Egne reparasjoner"]
          ],
          "caption": "Den konkrete fordelingen av ansvar følger eiendommens rettslige organisering, sameievedtekter og avtaler."
        }
      },
      {
        "heading": "Hvordan lager du et realistisk budsjett for bolig i Spania?",
        "body": [
          "Lag et årsbudsjett basert på dokumenterte tall, ikke standardanslag fra annonser. Regn først ut kostnader som påløper uansett bruk, deretter de som varierer med forbruk, sesong og vedlikehold.",
          "Be om siste IBI og basura, aktuelle comunidad-fakturaer med budsjetter og protokoller, 12 måneders strøm- og vannregninger, forsikringstilbud og servicekostnader for basseng/hage. Spør også etter vedtatte eller forventede derramas.",
          "Eksempel på budsjettmetode: Summer årlige avgifter og forsikring + 12 måneders abonnement/forbruk + fire kvartalsbetalinger til sameie dersom det er betalingsformen + planlagt vedlikehold + separat reserve til uforutsett reparasjon. Del totalen på 12 for en sammenlignbar månedskostnad. Ikke forveksle gjennomsnitt per måned med når regningene faktisk forfaller.",
          "Har du lån, legg renter og avdrag inn i husholdningens totalbudsjett. Selve valg av finansiering beskrives i [[finansieringsguiden|/guide/finansiere-bolig-i-spania]]. Skatter og engangsomkostninger ved kjøpet hører til [[guiden om kjøpskostnader|/guide/kostnader-boligkjop-spania]]."
        ],
        "bullets": [
          "Årlig: IBI, mange forsikringer og enkelte kommunale avgifter.",
          "Kvartalsvis eller månedlig: comunidad etter sameiets betalingsplan.",
          "Månedlig/etter faktura: strøm, vann, telekom, alarm og tilsyn.",
          "Uregelmessig: reparasjoner, oppgraderinger, ekstraordinære sameieinnbetalinger.",
          "Legg på en reserve som passer boligens alder, tekniske tilstand og vedlikeholdsansvar."
        ]
      }
    ],
    "nextSteps": [
      "Be om siste IBI, renovasjonsavgift og sameiets regnskap/budsjett.",
      "Kontroller dokumenterte strøm- og vannregninger gjennom ulike sesonger.",
      "Undersøk vedtatte ekstraordinære sameieinnbetalinger og teknisk vedlikehold.",
      "Avklar spanske skatteplikter ut fra bosted, eierform og eventuell utleie.",
      "Lag én årsoversikt med forfall og en egen uforutsett reserve."
    ],
    "faq": [
      {
        "question": "Hva koster det å eie bolig i Spania per år?",
        "answer": "I våre illustrative eksempler: €2 400–5 400 per år for leilighet og €5 400–12 000 for villa med basseng og hage, før lån, individuelle skatter og større reparasjoner. Dette er ikke dokumenterte markedspriser. Bruk faktiske regninger fra boligen for et reelt budsjett."
      },
      {
        "question": "Må jeg betale skatt på bolig i Spania når jeg bor i Norge?",
        "answer": "Som eier kan du skylde spansk kommunal IBI og skatt etter reglene for ikke-residenter, selv om du bor i Norge. Avklar også rapporteringsplikter i Norge ut fra din situasjon."
      },
      {
        "question": "Hva er IBI og comunidad?",
        "answer": "IBI er kommunal eiendomsskatt. Comunidad er boligens andel av kostnadene i et sameie eller en urbanisasjon, for eksempel til heis, fellesarealer og basseng."
      },
      {
        "question": "Må jeg betale skatt selv om jeg ikke leier ut boligen?",
        "answer": "Ja, mange ikke-residente eiere av byeiendom kan få skatt på beregnet inntekt ved egen bruk eller når boligen står til disposisjon. Den deklareres normalt via Modelo 210 etter gjeldende regler."
      },
      {
        "question": "Må jeg betale felleskostnader når boligen står tom?",
        "answer": "Ja. Sameiets vedtatte fellesutgifter gjelder normalt uavhengig av om du bruker boligen."
      },
      {
        "question": "Hvilke kostnader har jeg ved å eie en villa med privat basseng?",
        "answer": "I tillegg til vanlig boligdrift må du budsjettere med rengjøring, kjemikalier, pumpe og strøm, vannpåfylling, service og reparasjoner, samt eventuell hage og vanning."
      },
      {
        "question": "Hvilke kostnader bør jeg undersøke før jeg kjøper?",
        "answer": "Be om IBI, basura, sameiebudsjett og protokoller, strøm/vann, forsikring, teknisk tilstand, basseng- og hagekostnader, aktuelle skatter og eventuelle ekstraordinære innbetalinger."
      }
    ],
    "cta": {
      "label": "Snakk med oss om den konkrete boligens kostnader",
      "href": "/booking"
    }
  },
  {
    slug: "innlandet-finca-olivengard-spania",
    title: "Innlandet i Spania: finca, olivengård og livet bort fra kysten",
    excerpt:
      "Mer plass, natur og ro. Slik kan livet i innlandet rundt Biar, Pinoso og Villena være – og dette bør du sjekke ved tomt, finca og landeiendom.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Områdeguide",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/innlandet-livsstil.svg",
    imageAlt: "Illustrasjon av finca, olivengård og innlandslandskap i Alicante-provinsen",
    seoTitle: "Innlandet i Alicante og Murcia | Finca, tomt og landlig liv",
    seoDescription:
      "Vurderer du innlandet i Alicante eller Murcia? Les om Biar, Pinoso, Villena og Jumilla, og hva du bør sjekke ved tomt, finca, vann, strøm og lovlighet.",
    keywords: [
      "finca Spania",
      "olivengård Spania",
      "innlandet Alicante",
      "landeiendom Spania",
      "bolig Pinoso Biar",
    ],
    intro: [
      "For mange handler drømmen om Spania om sol og strand. Innlandet gir en annen mulighet: mer åpent landskap, landsbyer, vin- og olivenområder og eiendomstyper som finca, tomt og villa med større uteareal. Pris og totaløkonomi varierer like mye her som på kysten og må vurderes konkret.",
      "Denne guiden forklarer forskjeller i livsstil og hva du bør kontrollere før du kjøper landeiendom.",
    ],
    sections: [
      {
        heading: "Hvorfor velge innlandet?",
        body: [
          "Innlandet kan passe deg som prioriterer plass, natur, landsbyliv eller egen tomt fremfor å bo ved stranden. Forskjellen mellom Busot, Biar, Villena, Hondón, Pinoso og Jumilla er stor, så velg område etter faktisk hverdagsliv og reisebehov.",
        ],
        bullets: [
          "Flere muligheter for større tomt, finca og frittliggende villa i mange delområder.",
          "Stor variasjon mellom fjellområder, vinland, byer og små landsbyer.",
          "Avstand til kyst, flyplass og service varierer betydelig mellom stedene.",
          "Mulighet for oliven, mandel, vin eller annen landlig bruk på enkelte eiendommer.",
        ],
      },
      {
        heading: "Bil og hverdagslogistikk",
        body: [
          "Mange landeiendommer og mindre innlandsområder er bilbaserte, mens større byer som Villena og Jumilla har mer lokal service. Vurder konkret avstand til lege, butikk, skole, tog, flyplass og kyst ut fra hvordan du faktisk skal bruke boligen.",
        ],
      },
      {
        heading: "Dette må sjekkes ved tomt og finca",
        body: [
          "Landeiendom krever grundig kontroll av juridiske og tekniske forhold. Lovlighet, registrering, vann, strøm, avløp, adkomst og hva som kan bygges eller utvides må dokumenteres for den konkrete eiendommen.",
        ],
        bullets: [
          "Er bygninger og arealer korrekt registrert, og hvilke tillatelser foreligger?",
          "Vann: kilde, rettighet, kapasitet og dokumentasjon.",
          "Strøm og avløp: eksisterende løsning, kapasitet og eventuelle tilkoblingskostnader.",
          "Lovlig adkomst og eventuelle veirettigheter.",
          "Hva tillater gjeldende arealplan og regler på tomten?",
        ],
      },
      {
        heading: "Olivengård og landlig liv",
        body: [
          "En eiendom med oliven-, mandel- eller andre trær kan gi et meningsfullt landlig liv, men også arbeid, vannbehov og løpende drift. Vurder jordbruksdelen like konkret som selve boligen før du kjøper.",
        ],
      },
    ],
    nextSteps: [
      "Bestem hvor mye plass, ro og natur du prioriterer kontra strandnærhet og service.",
      "Sjekk lovlighet, vann, strøm, avløp og adkomst før du reserverer landeiendom.",
      "Vurder avstand til service, lege, skole, transport og flyplass ut fra hverdagen din.",
      "La uavhengig juridisk og teknisk fagperson kontrollere dokumentasjon og tillatelser.",
    ],
    faq: [
      {
        question: "Er det trygt å kjøpe finca i innlandet?",
        answer:
          "Det kan være et trygt kjøp når juridiske og tekniske forhold er grundig kontrollert. Landeiendom krever særlig oppmerksomhet på registrering, vann, strøm, avløp, adkomst, arealbruk og tillatelser.",
      },
      {
        question: "Hvilke innlandsområder bør jeg sammenligne?",
        answer:
          "Det avhenger av ønsket livsstil. Busot er mer kystnært; Biar, Castalla og Banyeres gir mer fjellpreg; Villena og Sax gir by/service og transport; Hondón, Pinoso og Monóvar gir vin-/landbrukslandskap; Jumilla gir et dypere Murcia-innland med sterk vinidentitet.",
      },
      {
        question: "Trenger jeg bil i innlandet?",
        answer:
          "For mange fincaer og mindre steder er bil svært praktisk eller nødvendig, men behovet varierer. Sjekk den konkrete eiendommens avstand til service og kollektivtransport før du bestemmer deg.",
      },
    ],
    cta: { label: "Utforsk boliger og tomter i innlandet", href: "/omrader/innlandet" },
  },
  {
    slug: "flytte-til-spania-som-pensjonist",
    title: "Flytte til Spania som pensjonist: opphold, skatt og hverdag",
    excerpt:
      "Drømmer du om pensjonisttilværelsen i solen? Om oppholdsregler, helsetjenester, skatt og hva som skiller ferie fra å bo fast i Spania.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Guide",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/pensjon-flytte.svg",
    imageAlt: "Illustrasjon av pensjonistliv og flytting til Spania med sol og palmer",
    seoTitle: "Flytte til Spania som pensjonist | Opphold, skatt og hverdag",
    seoDescription:
      "Vurderer du å bo fast i Spania som pensjonist? Les om opphold, helsetjenester, skatt, økonomi og hva som skiller ferieopphold fra å bosette seg fast.",
    keywords: [
      "flytte til Spania pensjonist",
      "bo fast i Spania",
      "residens Spania",
      "skatt pensjonist Spania",
      "pensjonistliv Costa Blanca",
    ],
    intro: [
      "Å feriere i Spania er én ting – å bo der fast er noe annet. For mange pensjonister kan Spania være attraktivt på grunn av klima, hverdagsliv og etablerte internasjonale miljøer, men økonomi og regler må vurderes individuelt.",
      "Denne guiden gir oversikt over det praktiske rundt å bosette seg: opphold, helse, skatt og hva du bør tenke gjennom før du tar steget fra feriebolig til fast bosted.",
    ],
    sections: [
      {
        heading: "Ferie eller fast bosetting?",
        body: [
          "Vil du bo fast eller oppholde deg lenge i Spania, må du forholde deg til andre praktiske og juridiske forhold enn ved korte ferieopphold. Oppholdsstatus, registrering, helse og skatt bør avklares ut fra statsborgerskap og faktisk oppholdsmønster.",
        ],
      },
      {
        heading: "Opphold og registrering",
        body: [
          "Reglene avhenger av statsborgerskap, oppholdstid og situasjon. NIE er et identifikasjonsnummer som brukes i mange økonomiske og administrative sammenhenger, men er ikke det samme som oppholdsregistrering eller skattemessig bosted. Få konkret veiledning om hvilke registreringer du trenger.",
        ],
      },
      {
        heading: "Helse og hverdag",
        body: [
          "Vurder tilgang til lege, sykehus og apotek der du vurderer å bo. Hvilken offentlig helsedekning du har avhenger av status og rettigheter. Tenk også gjennom bil, avstander, sosialt miljø, språk og hverdagen utenfor feriemodus.",
        ],
      },
      {
        heading: "Skatt ved fast bosted",
        body: [
          "Skattemessig bosted må vurderes etter gjeldende regler og faktiske forhold. Hvis du blir skattemessig bosatt i Spania, kan skattebildet endre seg betydelig. Planlegg dette med kvalifisert skatterådgiver, gjerne med kompetanse på både Norge og Spania.",
        ],
      },
    ],
    nextSteps: [
      "Bestem om boligen skal være feriebolig eller fast bosted – det styrer mye.",
      "Avklar oppholds- og registreringskrav for din statsborgerskap og situasjon.",
      "Kartlegg helsetjenester og hverdagslogistikk i området.",
      "Få skatte- og juridisk rådgivning før en permanent flytting.",
    ],
    faq: [
      {
        question: "Kan jeg bo fast i Spania som norsk pensjonist?",
        answer:
          "Det kan være mulig, men du må følge oppholdsreglene som gjelder for norsk/EØS-borger, samt avklare helse og skatt. Få konkret veiledning for din situasjon før flytting.",
      },
      {
        question: "Er NIE det samme som å være resident i Spania?",
        answer:
          "Nei. NIE er et identifikasjonsnummer. Det er ikke i seg selv bevis på oppholdsrett eller skattemessig bosted.",
      },
      {
        question: "Hvordan påvirker fast bosetting skatten min?",
        answer:
          "Det avhenger av hvor du blir skattemessig bosatt og hvilke inntekter og eiendeler du har. Dette bør planlegges med kvalifisert skatte-/juridisk rådgiver før flytting.",
      },
    ],
    cta: { label: "Ta en uforpliktende prat om bolig og område", href: "/booking" },
  },
  {
    slug: "energieffektive-nybygg-spania",
    title: "Energieffektive nybygg i Spania: energiklasse, isolasjon og solceller",
    excerpt:
      "Slik sammenligner du energiklasse, isolasjon, tekniske løsninger og solceller når du vurderer nybygg og eksisterende bolig i Spania.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Guide",
    readingTime: "6 min lesing",
    image: "/assets/magasin-covers/energi-baerekraft.svg",
    imageAlt: "Illustrasjon av energieffektivt nybygg med solceller og sol i Spania",
    seoTitle: "Energieffektive nybygg i Spania | Isolasjon og solceller",
    seoDescription:
      "Sammenlign energiklasse, isolasjon, solceller og forventet energibruk når du vurderer nybygg eller eksisterende bolig i Spania før du reserverer.",
    keywords: [
      "energieffektive nybygg Spania",
      "energiklasse bolig Spania",
      "isolasjon nybygg Spania",
      "solceller Spania bolig",
      "energimerking Spania",
    ],
    intro: [
      "Komforten i spanske boliger kan variere mye gjennom året. Byggeår alene forteller ikke nok: isolasjon, vinduer, solskjerming, ventilasjon, klimaanlegg, orientering og energiklasse bør vurderes på den konkrete boligen.",
      "Denne guiden forklarer hva energieffektivitet betyr i praksis og hvilke dokumenter og tekniske forhold du bør sammenligne.",
    ],
    sections: [
      {
        heading: "Energiklasse og energiattest",
        body: [
          "Spansk regelverk omfatter blant annet nye bygninger og eksisterende bygninger eller deler av bygninger som selges eller leies ut til ny leietaker, med lovbestemte unntak. Der sertifikat kreves, gir energiattesten og energimerket et standardisert grunnlag for å sammenligne energiytelse.",
        ],
      },
      {
        heading: "Isolasjon – vinter og sommer",
        body: [
          "Isolasjon i vegger, tak og vinduer kan redusere behovet for oppvarming og kjøling, men faktisk komfort påvirkes også av orientering, solinnstråling, ventilasjon, tetthet og tekniske installasjoner. Les spesifikasjonen og se energidokumentasjonen i stedet for å anta at nytt alltid er bedre.",
        ],
      },
      {
        heading: "Solceller og energibruk",
        body: [
          "Solceller kan redusere kjøpt strøm når produksjon og forbruk passer sammen, men økonomien avhenger av anleggsstørrelse, orientering, skygge, forbruk, strømavtale og eventuell lagring. Sjekk hva som faktisk er installert eller klargjort i prosjektet.",
        ],
      },
      {
        heading: "Sammenlign dokumentert ytelse – ikke bare salgsord",
        body: [
          "Høy energiklasse og god teknisk spesifikasjon kan være positivt for komfort og drift, men er ingen garanti for lav strømregning eller framtidig salgsverdi. Sammenlign dokumentasjon, planløsning, orientering og forventet bruk før du bestemmer deg.",
        ],
      },
    ],
    nextSteps: [
      "Be om energiattesten/energimerket der regelverket krever det, og les energiklassen.",
      "Sjekk isolasjon, vinduer, solskjerming og tekniske installasjoner – ikke bare estetikk.",
      "Avklar hva som faktisk er installert eller klargjort for solceller.",
      "Vurder energibruk som en del av totaløkonomien, ikke bare kjøpesummen.",
    ],
    faq: [
      {
        question: "Hva betyr energiklassen på en spansk bolig?",
        answer:
          "Energiklassen er en del av den standardiserte energisertifiseringen og gir informasjon om byggets energiytelse etter beregningsmetoden. Bruk den sammen med teknisk spesifikasjon og forventet bruk.",
      },
      {
        question: "Er nybygg alltid billigere i drift enn eldre boliger?",
        answer:
          "Nei, ikke nødvendigvis. Nyere byggekrav kan gi bedre energiytelse, men faktisk drift avhenger av bolig, størrelse, orientering, utstyr, bruk og energipriser. Sammenlign dokumentasjonen på de konkrete boligene.",
      },
      {
        question: "Bør jeg velge bolig med solceller?",
        answer:
          "Solceller kan være en fordel, men lønnsomheten varierer. Be om spesifikasjon på anlegg, forventet produksjon, orientering, eventuelt batteri og hvordan løsningen passer ditt forbruk.",
      },
    ],
    cta: { label: "Se moderne nybygg", href: "/eiendommer?type=villa" },
  },
  {
    slug: "juridiske-fallgruver-boligkjop-spania",
    title: "Juridiske fallgruver ved boligkjøp i Spania: sjekk dette før du signerer",
    excerpt:
      "Hva må kontrolleres før boligkjøp i Spania? Få oversikt over nota simple, heftelser, Catastro, ulovlige tilbygg, arras, sameiegjeld, nybygg og dokumentene advokaten bør undersøke.",
    date: "2026-09-08",
    updated: "2026-10-10",
    category: "Kjøpsprosess",
    readingTime: "14 min lesing",
    image: "/assets/magasin-covers/juridisk.svg",
    imageAlt: "Juridisk dokumentkontroll ved boligkjøp i Spania, med kontrakt og eiendomsregister",
    seoTitle: "Juridiske fallgruver ved boligkjøp i Spania | Sjekkliste",
    seoDescription:
      "Unngå juridiske feil ved boligkjøp i Spania. Sjekk nota simple, heftelser, byggeløyver, arras, sameiegjeld og dokumenter før du reserverer boligen.",
    keywords: [
      "juridiske fallgruver boligkjøp Spania",
      "advokat boligkjøp Spania",
      "nota simple bolig Spania",
      "due diligence bolig Spania",
      "ulovlige tilbygg Spania",
      "arras kontrakt Spania",
      "heftelser bolig Spania",
    ],
    intro: [
      "Det viktigste juridiske rådet ved boligkjøp i Spania er enkelt: Kontroller selger, eiendom, gjeld, lovlig bruk og avtalevilkår før du binder deg økonomisk. En bolig kan se perfekt ut på visning, selv om den har et uavklart tilbygg, registrert pant, manglende brukstillatelse eller en reservasjonsavtale som er vanskelig å komme ut av.",
      "En uavhengig spansk advokat bør gjennomføre juridisk due diligence for akkurat den boligen du vurderer. Denne guiden viser hvilke spørsmål du bør stille, hva typiske dokumenter betyr og hvordan du kan oppdage varselsignaler. Den erstatter ikke juridisk rådgivning eller kommunal kontroll for en konkret eiendom.",
    ],
    sections: [
      {
        heading: "Kort svar: hva må være kontrollert før boligkjøpet?",
        body: [
          "Før du betaler et større beløp eller signerer en bindende avtale, bør du vite hvem som har rett til å selge, hva du faktisk kjøper, hvilke heftelser og forpliktelser som følger eiendommen, om bruken er lovlig, og hva avtalen sier dersom noe går galt.",
          "Et godt kontrollresultat er ikke bare at «dokumentene ser greie ut». Advokaten bør kunne forklare hva som er kontrollert, hvilke avvik som gjenstår, hvem som skal rette dem, når det skal skje og hva kjøperen risikerer dersom forholdet ikke løses.",
        ],
        bullets: [
          "Oppdatert nota simple fra Registro de la Propiedad og bekreftelse på selgers identitet og signaturrett.",
          "Sammenligning av skjøte, eiendomsregister, Catastro og faktisk tomt eller bolig.",
          "Kontroll av pant, utlegg, servitutter og hvordan eventuelle heftelser skal slettes.",
          "Undersøkelse av byggetillatelser, tilbygg, basseng, bruk/okkupasjon og kommunale forhold.",
          "Kontroll av IBI, sameiegjeld, vedtekter, vedtatte ekstraordinære innbetalinger og andre relevante krav.",
          "Gjennomgang av reservasjons-/arrasavtale, frister, forbehold og dokumentert betalingsflyt.",
        ],
      },
      {
        heading: "De viktigste dokumentene – og hva de faktisk forteller deg",
        body: [
          "Disse dokumentene har forskjellige funksjoner. En nota simple viser registrerte eier- og heftelsesforhold, mens Catastro beskriver eiendommen for blant annet matrikkel- og skatteformål. Ingen av dem er alene en full kommunal godkjenning av alt som er bygget eller bruken du planlegger.",
        ],
        table: {
          headers: ["Dokument eller kilde", "Hva du bør undersøke", "Hvis opplysningene ikke stemmer"],
          rows: [
            ["Nota simple / Registro de la Propiedad", "Eier, registrert eiendom, pant, beslag, rettigheter og begrensninger", "Få advokaten til å avklare avvik og sletting av relevante heftelser"],
            ["Escritura / skjøte", "Tidligere overdragelse, eierforhold, arealbeskrivelse og rettigheter", "Kontroller hva som faktisk inngår i salget"],
            ["Catastro", "Kart, referanse, bruksangivelse, tomt og bygningsareal", "Ikke anta at registrering i Catastro betyr lovlig byggetillatelse"],
            ["Ayuntamiento / kommune", "Regulering, byggetillatelser, relevante lovlighetsspørsmål og okkupasjonsdokumentasjon", "Be om kommunal avklaring og eventuelt teknisk fagrapport"],
            ["Comunidad de propietarios", "Utestående felleskostnader, vedtekter, referater og planlagte arbeider", "Avklar økonomisk ansvar og bruksbegrensninger før kontrakt"],
            ["IBI / skattedokumentasjon", "At kommunal eiendomsskatt og relevante krav er gjort opp", "La advokaten avklare restanser og hvordan oppgjøret sikres"],
          ],
          caption: "Dokumentbehovet varierer etter kommune, boligtype, alder, byggeprosjekt og faktisk bruk.",
        },
      },
      {
        heading: "Fallgruve 1: Selger er ikke alene om retten til å selge",
        body: [
          "En bolig kan være registrert på flere eiere, være del av et dødsbo, ligge i et selskap eller selges gjennom fullmektig. Be advokaten kontrollere at personen som signerer har nødvendig rett eller fullmakt, og at alle påkrevde samtykker foreligger.",
          "Varselsignal: Navnet i annonse, kontrakt eller betalingsinstruks samsvarer ikke med eieren som fremgår av dokumentene, uten at dette er godt forklart og dokumentert.",
        ],
      },
      {
        heading: "Fallgruve 2: Pant, heftelser og gammel gjeld følger eiendommen",
        body: [
          "Et registrert pant betyr ikke nødvendigvis at boligen ikke kan kjøpes. Men kjøpet må struktureres slik at heftelser som skal bort faktisk slettes, og at dette kontrolleres ved sluttoppgjøret. En muntlig forsikring fra selger om at et lån «blir ordnet» er ikke nok.",
          "For leiligheter og boliger i eierseksjonssameier er det dessuten viktig å kontrollere et oppdatert gjeldssertifikat fra sameiet. Etter spansk lov kan eiendommen i visse tilfeller være ansvarlig for sameierestanser fra inneværende år og de tre foregående kalenderårene. Ikke gi avkall på dokumentasjonen uten at advokaten forklarer konsekvensene.",
        ],
        bullets: [
          "Hvilke pant, utlegg eller servitutter er registrert?",
          "Hvilke beløp skal eventuelt innfris fra kjøpesummen, og hvem sørger for formell sletting?",
          "Er sameiegjeld og ekstraordinære bidrag (derramas) avklart skriftlig?",
          "Finnes det andre utestående offentlige eller private krav som må kontrolleres?",
        ],
      },
      {
        heading: "Fallgruve 3: Det som er bygget, er ikke nødvendigvis lovlig",
        body: [
          "Et basseng, innglasset terrasse, ekstra soverom eller en utvidet villa kan eksistere fysisk og likevel mangle nødvendig tillatelse eller korrekt registrering. Dette er særlig viktig for eldre villaer og eiendommer i innlandet, men kan også gjelde nyere boliger.",
          "Sammenlign faktisk situasjon med opplysninger i eiendomsregister, Catastro, godkjente planer og kommunale arkiver. Er det avvik, bør advokaten og en kvalifisert arkitekt eller teknisk rådgiver undersøke om det lar seg rette, hva det koster og om det finnes begrensninger. At en endring er gammel, betyr ikke automatisk at den kan legaliseres eller bygges videre på.",
        ],
      },
      {
        heading: "Fallgruve 4: Boligen kan mangle dokumentasjon for lovlig bruk",
        body: [
          "I Comunitat Valenciana må du undersøke hvilken dokumentasjon som kreves for å ta i bruk eller fortsette å bruke en bestemt bolig. Første eller senere okkupasjon kan være regulert gjennom lisens eller declaración responsable, avhengig av situasjonen og kommunen. Det som kreves ved eierskifte eller opprettelse av strøm- og vannavtaler må avklares lokalt.",
          "Også bolig med lys og vann på visningsdagen kan ha uavklarte rettslige eller tekniske forhold. La derfor advokat og eventuelt teknisk sakkyndig kontrollere brukskategori, nødvendig dokumentasjon og eventuelle pågående kommunale saker – særlig hvis boligen er ombygget eller ligger på rustikk grunn.",
        ],
      },
      {
        heading: "Fallgruve 5: Sameiets regler kan endre hvordan du får bruke boligen",
        body: [
          "En leilighet kan ha lovlige begrensninger knyttet til terrasse, fasade, fellesarealer, installasjoner eller utleie. Be om vedtekter, relevante møtereferater, opplysninger om gjeld og planlagte større arbeider. Et lavt månedlig sameiebeløp utelukker ikke et kommende ekstraordinært bidrag.",
          "Dersom du kjøper med tanke på turistutleie, må kommunale, regionale og eventuelle sameierettslige krav vurderes særskilt. At den tidligere eieren har leid ut, eller at utleie annonseres på nettet, er ikke bevis for at du lovlig kan videreføre samme aktivitet etter kjøpet.",
        ],
      },
      {
        heading: "Fallgruve 6: Reservasjonsavtalen binder deg før undersøkelsene er klare",
        body: [
          "Reservasjonsavtaler og contrato de arras kan ha forskjellige rettsvirkninger. Artikkel 1454 i den spanske Código Civil beskriver en ordning der kjøper kan tre tilbake ved å tape avtalt arras, mens selger ved å betale dobbelt tilbake. Men ikke alle depositum eller kontrakter er slike arras penitenciales. Det er ordlyden og avtalens rettslige karakter som avgjør.",
          "La advokaten gjennomgå kontraktutkastet før signering. Avklar hvilke undersøkelser som gjenstår, om kjøpet er betinget av finansiering eller tilfredsstillende juridisk kontroll, når pengene blir tilbakebetalt og hva som skjer ved forsinkelser, avvik eller avslag fra bank.",
        ],
        table: {
          headers: ["Før du signerer", "Spørsmål til advokaten"],
          rows: [
            ["Betaling", "Hvem mottar depositumet, og på hvilke vilkår holdes eller frigjøres det?"],
            ["Finansiering", "Er manglende finansiering en uttrykkelig avtalt opphørsgrunn?"],
            ["Dokumentkontroll", "Kan kjøpet avsluttes uten tap dersom vesentlige avvik avdekkes?"],
            ["Frister", "Når må due diligence, bankvurdering, privat kontrakt og notar være gjennomført?"],
            ["Mislighold", "Hva kan hver av partene kreve hvis avtalen ikke oppfylles?"],
          ],
          caption: "Dette er forhandlings- og kontrollspørsmål, ikke standardvilkår som automatisk gjelder i alle avtaler.",
        },
      },
      {
        heading: "Fallgruve 7: Nybygg betales før boligen er ferdig",
        body: [
          "Ved kjøp av bolig under oppføring må du undersøke utbyggerens rett til tomten, tillatelser, prosjektbeskrivelse, betalingsplan, leveransebeskrivelse og hva som skjer ved forsinkelse eller vesentlig endring. Kontroller hvilken sikkerhet loven krever for relevante forskuddsbetalinger, når den gjelder, hvem garantisten er og hvilken konto betalingene skal inn på.",
          "Reglene om garanti og forsikring for forskuddsbetalinger har konkrete anvendelsesvilkår. Be om dokumentasjonen for ditt prosjekt, fremfor å stole på en generell påstand om at alle innbetalinger er «trygge». For den samlede nybyggprosessen bruker du den separate nybyggguiden.",
        ],
      },
      {
        heading: "Fallgruve 8: Landeiendom, finca og tomt krever ekstra undersøkelser",
        body: [
          "Utenfor tettbygde områder kan det være avgjørende å kontrollere reguleringskategori, rettmessig adkomst, veiretter, vannrettigheter, brønn, avløp, strøm, tomtegrenser, landbrukstilknytning og muligheten for å reparere eller bygge ut. En annonse som lover «mulighet for basseng eller gjestehus» er ikke en kommunal tillatelse.",
          "Dette gjelder spesielt rustikke tomter, eldre fincaer og bolig med flere bygninger. La advokat og teknisk rådgiver få skriftlig klarhet fra relevante myndigheter før du avtaler bruk, utbygging eller pris ut fra en antatt mulighet.",
        ],
      },
      {
        heading: "Tre eksempler: hva gjør du når advokaten finner et avvik?",
        body: [
          "Eksemplene er oppdiktede illustrasjoner, ikke beskrivelser av faktiske kundesaker. Hensikten er å vise forskjellen mellom et problem som kan avklares og risiko du ikke bør overta uten dokumentasjon.",
        ],
        table: {
          headers: ["Situasjon", "Riktig neste handling", "Unngå dette"],
          rows: [
            ["Leilighet: registrert pant", "Få skriftlig plan for innfrielse og formell sletting ved oppgjør", "Å stole på muntlig løfte om at pantet forsvinner"],
            ["Villa: basseng eller tilbygg mangler i godkjente dokumenter", "Be om kommunal og teknisk vurdering av lovlighet, eventuell utbedring og kostnad", "Å anta at bygget automatisk er lovlig fordi det er gammelt"],
            ["Nybygg: forskuddsbetaling uten tydelig garanti", "Stopp betalingen inntil advokaten har kontrollert lovens krav og prosjektets dokumentasjon", "Å betale til ubekreftet konto under tidspress"],
          ],
        },
      },
      {
        heading: "Hvem gjør hva – og når bør du stoppe?",
        body: [
          "Eiendomsrådgiveren kan hjelpe med informasjon om bolig og prosess, hente inn tilgjengelige dokumenter og koordinere dialogen. En uavhengig advokat vurderer dine rettigheter og risiko i den konkrete transaksjonen. Notaren har egne lovbestemte kontroll- og formaliseringsoppgaver og er ikke din private advokat. Ved byggetekniske eller reguleringsmessige spørsmål kan også arkitekt, teknisk sakkyndig eller kommunen måtte involveres.",
          "Ta en pause i signering eller betaling dersom selger ikke kan dokumentere eierskap, vesentlige avvik ikke er vurdert, kontraktens risiko er uklar, eller mottaker av pengene ikke er uavhengig verifisert. Ingen tidsfrist fra en annonsør bør erstatte nødvendige kontroller.",
        ],
        bullets: [
          "Før reservasjon: avklar advokat, finansiering, kontraktsvilkår og hvilke dokumenter som må frem.",
          "Før privat kjøpekontrakt: få skriftlig vurdering av eierskap, heftelser, bruk og eventuelle avvik.",
          "Før notar: kontroller oppdatert registerstatus, sletting av relevante pant, innfrielse av krav og betalingsinstruks.",
          "Etter signering: følg opp skatter, registrering av eierskap og overføring av relevante avtaler med fagpersonene.",
        ],
      },
      {
        heading: "Offentlige kilder du kan kontrollere",
        body: [
          "Be advokaten vise hvilke primærkilder som er brukt i vurderingen. Relevante eksempler er Registro de la Propiedad for nota simple, kommunens urbanisme- og okkupasjonsregler, den spanske sivilloven for aktuelle kontraktsvilkår, Ley de Propiedad Horizontal for sameieforhold og lovverket om sikkerhet ved forskuddsbetaling på nybygg.",
          "Kildene forklarer regelverket, men erstatter ikke den eiendomsspesifikke vurderingen. Du finner utvalgte offisielle lenker nedenfor.",
        ],
      },
    ],
    nextSteps: [
      "Velg en uavhengig spanskspråklig advokat som representerer deg som kjøper, og avklar oppdraget skriftlig.",
      "Be om oppdatert nota simple, skjøte og relevant kommunal dokumentasjon før bindende forpliktelser.",
      "Sammenlign register, Catastro og den fysiske boligen; bruk teknisk fagperson ved avvik.",
      "Få kontrollert heftelser, IBI, sameiegjeld, vedtekter og planlagte ekstraordinære utgifter.",
      "Avklar reservasjons-/arrasvilkår, finansieringsforbehold og konsekvensene ved avvik før signering.",
      "Bekreft betalingsmottaker og konto gjennom en uavhengig kanal før enhver stor overføring.",
      "Be om en kort skriftlig oppsummering fra advokaten: kontrollert, uavklart, tiltak og ansvar før notar.",
    ],
    faq: [
      { question: "Hva er de vanligste juridiske fallgruvene ved boligkjøp i Spania?", answer: "Typiske risikoer er uklart eierskap, registrert pant eller andre heftelser, avvik mellom eiendomsregister og faktisk bolig, ulovlige tilbygg, manglende tillatelser, restanser til sameiet og ugunstige kontraktsvilkår. Hvilke punkter som er viktige avhenger av eiendommen." },
      { question: "Er nota simple nok til å vite om en bolig er lovlig?", answer: "Nei. Nota simple viser registrerte opplysninger om eierskap og rettigheter, men den er ikke en full kommunal godkjenning av bygget eller en teknisk tilstandsrapport. Catastro og kommunal dokumentasjon må kontrolleres separat der det er relevant." },
      { question: "Må jeg ha egen advokat når jeg har megler og notar?", answer: "Det er sterkt anbefalt å bruke en uavhengig advokat som vurderer eiendommen og kontrakten på dine vegne. Notaren er upartisk og har egne lovpålagte oppgaver; meglerens rolle er forskjellig fra advokatens." },
      { question: "Kan jeg miste reservasjonsbeløpet eller depositumet?", answer: "Ja, avhengig av avtaletype, ordlyd og omstendigheter. Ikke alle reservasjonsbeløp er arras penitenciales etter Código Civil artikkel 1454. La advokaten forklare rettsvirkningene og avtalte forbehold før du betaler." },
      { question: "Hva skjer hvis selger har boliglån på eiendommen?", answer: "Kjøpet kan ofte gjennomføres dersom det avklares hvordan lånet innfris og heftelsen formelt slettes som del av et kontrollert oppgjør. Dette må være dokumentert og koordinert av advokat, bank og notar." },
      { question: "Betyr registrert basseng i Catastro at det er lovlig?", answer: "Ikke nødvendigvis. Matrikkelopplysninger og kommunale byggetillatelser er forskjellige kilder. Få en konkret vurdering av godkjente tegninger, tillatelser og aktuell rettsstilling." },
      { question: "Kan jeg overta en tidligere eiers turistutleie uten videre?", answer: "Ikke uten egen kontroll. Utleie kan være begrenset av kommunale, regionale og sameierettslige regler. Registrering, rettigheter og eventuelle krav ved eierskifte må undersøkes særskilt før kjøpet." },
      { question: "Hvem kontrollerer at et nybygg har garanti for forskuddsbetaling?", answer: "Din uavhengige advokat bør kontrollere hvilke lovbestemte krav som gjelder for prosjektet og betalingene, og be om konkret dokumentasjon fra utbygger og eventuell garantist før du betaler." },
    ],
    cta: { label: "Få hjelp til en trygg boligkjøpsprosess", href: "/booking" },
  },
  {
    slug: "skatt-ved-salg-bolig-spania",
    title: "Skatt ved salg av bolig i Spania: gevinstskatt, plusvalía og 3 %-regelen",
    excerpt:
      "Skal du selge boligen i Spania en dag? Slik fungerer gevinstskatt, kommunal plusvalía og det 3 % tilbaketrekket som kan gjelde når selger er ikke-resident.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/skatt-salg.svg",
    imageAlt: "Illustrasjon av skatt og kostnader ved salg av bolig i Spania",
    seoTitle: "Skatt ved salg av bolig i Spania | Gevinst og plusvalía",
    seoDescription:
      "Hva kan utløses av skatt ved salg av bolig i Spania? Les om gevinstskatt, kommunal plusvalía og 3 %-tilbaketrekket for ikke-residenter ved salg.",
    keywords: [
      "skatt salg bolig Spania",
      "gevinstskatt Spania",
      "plusvalia Spania",
      "3 prosent tilbakehold Spania",
      "selge bolig Spania skatt",
    ],
    intro: [
      "Skatte- og avgiftsregler ved salg påvirker nettoresultatet og bør vurderes med oppdaterte regler når et salg blir aktuelt. Dette er generell informasjon; en kvalifisert skatterådgiver, gestor eller advokat må beregne ditt konkrete tilfelle.",
      "Her er tre forhold eiere ofte møter ved salg av spansk eiendom.",
    ],
    sections: [
      {
        heading: "Gevinstbeskatning",
        body: [
          "Ved gevinst kan det oppstå spansk skatt etter reglene som gjelder for selgerens status. Beregningsgrunnlaget påvirkes av lovens regler om anskaffelses-/salgsverdi og hvilke dokumenterte kostnader som kan tas med. Ta vare på relevante fakturaer og dokumenter.",
        ],
      },
      {
        heading: "3 %-tilbaketrekket når selger er ikke-resident",
        body: [
          "Når lovens vilkår er oppfylt for salg fra ikke-resident selger, skal kjøper normalt holde tilbake 3 % av vederlaget og innbetale beløpet til skattemyndighetene som forskudd. Endelig skatt og eventuell tilbakebetaling avhenger av den konkrete beregningen.",
        ],
      },
      {
        heading: "Plusvalía municipal",
        body: [
          "Kommunal plusvalía (IIVTNU) kan være relevant ved overføring av urban grunn. Beregning, ansvar og eventuelle unntak må vurderes etter gjeldende regler og den konkrete eiendommen/kommunen.",
        ],
      },
      {
        heading: "Tenk på et framtidig salg allerede ved kjøp",
        body: [
          "Beliggenhet, standard, dokumentasjon og etterspørsel kan påvirke hvor lett en bolig lar seg selge videre. Det er fornuftig å vurdere videresalg som ett av flere kriterier, men framtidig pris kan aldri garanteres.",
        ],
      },
    ],
    nextSteps: [
      "Ta vare på dokumentasjon på kjøp, kostnader og oppgraderinger.",
      "Få skatteberegning når et konkret salg blir aktuelt.",
      "Bruk kvalifisert fagperson til å håndtere rapportering og eventuelle tilbakehold.",
      "Vurder dokumentasjon og videresalgbarhet allerede når du kjøper.",
    ],
    faq: [
      {
        question: "Hva er 3 %-regelen i Spania?",
        answer:
          "Ved enkelte salg fra ikke-resident selger skal kjøper holde tilbake 3 % av vederlaget og innbetale det som forskudd til skattemyndighetene. Få fagperson til å bekrefte om regelen gjelder din handel og hvordan sluttoppgjøret håndteres.",
      },
      {
        question: "Hva er plusvalía municipal?",
        answer:
          "Det er den kommunale skatten IIVTNU knyttet til verdistigning på urban grunn ved relevante overføringer. Beregning og eventuelle unntak må vurderes konkret.",
      },
      {
        question: "Kan dokumenterte kostnader påvirke gevinstskatten?",
        answer:
          "Ja, hvilke beløp som kan inngå i skattemessig beregning følger gjeldende regler. Ta vare på fakturaer og la kvalifisert rådgiver beregne salget konkret.",
      },
    ],
    cta: { label: "Ta en prat om langsiktig boligøkonomi", href: "/booking" },
  },
  {
    slug: "arv-gaveskatt-bolig-spania",
    title: "Arv og gaveskatt på spansk bolig: dette bør du planlegge",
    excerpt:
      "Hva skjer med den spanske boligen ved arv eller gave? Om arve- og gaveskatt (ISD), regionale forskjeller, testament og hvorfor konkret planlegging er viktig.",
    date: "2026-09-08",
    updated: "2026-09-08",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/arv-gave.svg",
    imageAlt: "Illustrasjon av arv, gaveskatt og generasjoner knyttet til bolig i Spania",
    seoTitle: "Arv og gaveskatt på bolig i Spania | Guide for norske eiere",
    seoDescription:
      "Hvordan håndteres arv og gave av spansk bolig? Les om ISD, regionale forskjeller, testament og behovet for konkret rådgivning for norske eiere i Spania.",
    keywords: [
      "arv bolig Spania",
      "gaveskatt Spania",
      "arveskatt Spania",
      "spansk testament",
      "ISD Spania bolig",
    ],
    intro: [
      "Et boligkjøp i Spania er ofte et langsiktig eierskap som kan gå i arv. Arv og gave over landegrenser påvirkes av flere regelsett og bør vurderes konkret før tiltak gjennomføres. Dette er generell informasjon; spesialisert juridisk/skatterådgivning anbefales.",
      "Her er hovedpunktene eiere bør være oppmerksomme på.",
    ],
    sections: [
      {
        heading: "Arve- og gaveskatt (ISD)",
        body: [
          "Spania har arve- og gaveskatt (Impuesto sobre Sucesiones y Donaciones, ISD). Den konkrete beregningen avhenger blant annet av slektskap, verdi, bosted/tilknytning og regionale regler og fordeler.",
        ],
      },
      {
        heading: "Store regionale forskjeller",
        body: [
          "ISD påvirkes av regionale regler og skattefordeler. Reglene kan endres, så en beregning bør gjøres med oppdaterte regler for den aktuelle regionen og familien, ikke med gamle standardsatser.",
        ],
      },
      {
        heading: "Testament og grensekryssende arv",
        body: [
          "For noen eiere kan et spansk testament for spanske eiendeler gjøre den praktiske håndteringen enklere, men riktig løsning avhenger av familie, statsborgerskap, bosted og eksisterende testamenter. Få grensekryssende juridisk rådgivning før du oppretter eller endrer testament.",
        ],
      },
      {
        heading: "Planlegg i tide",
        body: [
          "Arv og gave av eiendom over landegrenser kan bli komplisert. Planlegging bør se på både spansk og norsk side, eierskap, testament, skatt og praktisk gjennomføring.",
        ],
      },
    ],
    nextSteps: [
      "Kartlegg hvordan boligen eies og familiesituasjonen din.",
      "Vurder behovet for testament med spesialisert juridisk rådgiver.",
      "Få beregnet arv/gave med oppdaterte regler før en overføring.",
      "Søk rådgivning som dekker både norsk og spansk side ved behov.",
    ],
    faq: [
      {
        question: "Må det betales arve- eller gaveskatt på bolig i Spania?",
        answer:
          "Spansk ISD kan være relevant, men faktisk skatt avhenger av region, relasjon, verdi og gjeldende skattefordeler. Få beregningen gjort konkret før du planlegger arv eller gave.",
      },
      {
        question: "Bør jeg ha et spansk testament?",
        answer:
          "Det kan være hensiktsmessig for noen, men bør ses i sammenheng med norsk rett, bosted og øvrige testamenter. En rådgiver med grensekryssende kompetanse bør vurdere løsningen.",
      },
      {
        question: "Er arveskatten lik i hele Spania?",
        answer:
          "Nei. Regionale regler og fordeler kan gi store forskjeller, og regelverket kan endres. Bruk oppdaterte regler for den aktuelle regionen og situasjonen.",
      },
    ],
    cta: { label: "Snakk med oss om hvem som kan hjelpe med langsiktig eierskap", href: "/booking" },
  },
  {
    "slug": "nie-skattenummer-spania",
    "title": "NIE-nummer i Spania – slik søker du steg for steg",
    "excerpt": "Slik får du NIE i Spania eller Norge: EX-15, Modelo 790 Código 012, ambassade i Oslo, fullmakt, dokumentasjon, gebyr og behandlingstid.",
    "date": "2026-09-08",
    "updated": "2026-10-12",
    "category": "Kjøpsprosess",
    "readingTime": "11 min lesing",
    "image": "/assets/magasin-covers/nie-skattenummer.svg",
    "imageAlt": "NIE-nummer og dokumentene som kreves ved søknad om identifikasjonsnummer i Spania",
    "seoTitle": "NIE-nummer i Spania | Slik søker du steg for steg 2026",
    "seoDescription": "Hvordan få NIE-nummer i Spania? Se EX-15, Modelo 790, søknad ved ambassaden i Oslo, pris, dokumenter, fullmakt og behandlingstid for boligkjøpere.",
    "keywords": [
      "NIE nummer Spania",
      "hvordan få NIE nummer i Spania",
      "NIE i Norge",
      "hva trengs for å få NIE nummer",
      "hvor finner jeg mitt NIE nummer",
      "EX-15",
      "Modelo 790 Código 012"
    ],
    "author": {
      "name": "Freddy Bremseth",
      "href": "/om-oss/freddy"
    },
    "intro": [
      "NIE (Número de Identificación de Extranjero) er identifikasjonsnummeret utlendinger bruker i en rekke økonomiske, juridiske og administrative prosesser i Spania. Skal du kjøpe bolig, bør du normalt avklare NIE tidlig – helst før tidsfrister for kontrakt og overtakelse blir kritiske.",
      "Du kan søke selv i Spania, undersøke søknad ved Spanias ambassade i Oslo eller la en kvalifisert representant bistå med uttrykkelig fullmakt. Her får du dokumentlisten, fremgangsmåten og offisielle kilder."
    ],
    "sections": [
      {
        "heading": "Hva er NIE-nummer?",
        "body": [
          "NIE står for Número de Identificación de Extranjero og er et personlig, unikt identifikasjonsnummer som spanske myndigheter tildeler utlendinger med relevante økonomiske, profesjonelle eller sosiale forhold til Spania. Nummeret er ikke en oppholdstillatelse eller bekreftelse på at du er skattemessig bosatt i landet.",
          "NIE er et nummer. TIE er et fysisk identitetskort for visse utenlandske personer med oppholdsrett eller -tillatelse. NIF er betegnelsen på skatteidentifikasjonen; for utenlandske privatpersoner brukes normalt NIE som skattemessig identifikator. Reglene for oppholdsregistrering og skatteresidens er egne spørsmål.",
          "### Hva brukes NIE-nummer til?",
          "Du trenger ofte NIE når du skal identifiseres ved boligkjøp og skjøteregistrering, skattebetaling og -rapportering, boliglån og enkelte bankprosesser, arv, juridiske transaksjoner og registrering av andre eiendeler eller kontrakter. At du har NIE betyr ikke at banken automatisk godkjenner finansiering. Se [[finansieringsguiden|/guide/finansiere-bolig-i-spania]] for selve lånevalget."
        ]
      },
      {
        "heading": "Trenger jeg NIE for å kjøpe bolig i Spania?",
        "body": [
          "Ja. Som utenlandsk boligkjøper må du normalt ha et NIE-nummer for identifikasjon ved skattemessig håndtering og den formelle eiendomstransaksjonen. Notar, bank og eiendomsregistrering vil kunne etterspørre nummeret og tilhørende dokumentasjon.",
          "Start derfor NIE-prosessen i god tid før avtalt overtakelse. Les [[hele kjøpsprosessen for bolig i Spania|/guide/kjope-bolig-i-spania]] for hvordan NIE passer inn i reservasjon, kontrakt og oppgjør."
        ]
      },
      {
        "heading": "Hvordan få NIE-nummer i Spania?",
        "body": [
          "Som nordmann har du normalt tre praktiske veier: søke selv i Spania, søke ved Spanias ambassade i Oslo når konsulatets vilkår er oppfylt, eller bruke en representant med riktig fullmakt når myndighetene tillater det. Riktig søknadsvei avhenger av hvor du befinner deg og formålet med søknaden."
        ],
        "table": {
          "headers": [
            "Søknadsvei",
            "Hvem passer den for?",
            "Viktig å vite"
          ],
          "rows": [
            [
              "Personlig i Spania",
              "Deg som kan møte på relevant politi-/utlendingskontor",
              "Tilgjengelige timer og lokale instrukser varierer"
            ],
            [
              "Ambassaden i Oslo",
              "Bosatte i konsulærdistriktet som ikke skal etablere bosted i Spania",
              "Forhåndsbestilt time og ambassadens dokumentkrav"
            ],
            [
              "Representant med fullmakt",
              "Boligkjøpere som bruker advokat eller annen kvalifisert representant",
              "Særskilt fullmaktsordlyd og dokumentkrav må bekreftes"
            ]
          ],
          "caption": "Offentlig behandlingstid og oppmøtekrav avhenger av søknadsvei og myndighet."
        }
      },
      {
        "heading": "Søke om NIE i Spania",
        "body": [
          "Du søker normalt ved kompetent politi- eller utlendingsmyndighet i Spania. Finn riktig kontor for din sak, kontroller om timebestilling er nødvendig, og følg kontorets aktuelle dokumentliste.",
          "Se [[Policía Nacional – offisiell informasjon om NIE|https://www.policia.es/_es/extranjeria_extranjeros.php]] og [[offisiell betalingsside for Modelo 790 Código 012|https://sede.policia.gob.es/Tasa790_012/]]. Ledige timer og utleveringstid varierer lokalt."
        ],
        "bullets": [
          "1. Finn kontor og bestill cita previa (time) når dette kreves.",
          "2. Fyll ut og signer søknadsskjema EX-15.",
          "3. Fyll ut Modelo 790 Código 012, velg riktig NIE-gebyr og betal etter anvisningene.",
          "4. Ta med gyldig pass eller godkjent legitimasjon, påkrevde kopier og betalingsbevis.",
          "5. Dokumenter den konkrete økonomiske eller juridiske begrunnelsen, for eksempel et planlagt boligkjøp.",
          "6. Møt til avtalt tid, lever dokumentasjonen og følg beskjed om utlevering av NIE-beviset."
        ]
      },
      {
        "heading": "Søke om NIE i Norge",
        "body": [
          "Spanias ambassade i Oslo behandler NIE-søknader for personer som ikke planlegger å etablere bosted i Spania, når de oppfyller konsulære krav. Dette er ofte praktisk når boligkjøpet planlegges fra Norge.",
          "Bestill time via [[ambassadens offisielle NIE-side|https://www.exteriores.gob.es/Embajadas/oslo/en/ServiciosConsulares/Paginas/Consular/NIE.aspx]]. Ambassaden krever originalt og kopiert EX-15-skjema, Modelo 790 Código 012 med gebyr, gyldig pass og kopi av personalsiden, dokumentasjon på grunnen til søknaden og dokumentasjon på bosted i konsulærdistriktet. Ved representasjon gjelder egne krav til fullmakt og legitimasjon.",
          "Formålet må være konkret, for eksempel dokumentasjon på et boligkjøp eller arveforhold. Ambassaden opplyser at gebyret kan betales med kort ved konsulærseksjonen, og at resultatet normalt sendes på e-post. Kontroller gjeldende fremgangsmåte og timebestilling før du møter. Kontakt: emb.oslo.sc@maec.es."
        ]
      },
      {
        "heading": "Få hjelp via fullmakt",
        "body": [
          "En advokat eller annen representant kan i enkelte tilfeller fremme NIE-søknaden på dine vegne med en gyldig, tilstrekkelig presis fullmakt. Fullmakten må uttrykkelig omfatte rett til å levere søknad om NIE; en generell bistandsavtale er ikke nødvendigvis tilstrekkelig.",
          "Mange boligkjøpere velger representasjon fordi de ikke kan reise til Spania for hver administrativ oppgave. Avklar med advokaten hvilken original, bekreftelse, oversettelse eller annen dokumentasjon den aktuelle myndigheten krever.",
          "Vi i ZenEcoHomes kan hjelpe deg å koordinere dette med riktig fagperson som en del av [[kjøpsprosessen|/kjopsprosessen]]. Vi er ikke utstedende myndighet og kan ikke garantere saksbehandlingstid."
        ]
      },
      {
        "heading": "Hva trenger jeg for å få NIE-nummer?",
        "body": [
          "Du trenger normalt gyldig identifikasjon, søknadsskjema EX-15, gebyrskjema Modelo 790 Código 012, en konkret begrunnelse og dokumentasjon som underbygger hvorfor nummeret er nødvendig. Krav til kopier, time og representasjon avhenger av søknadsstedet."
        ],
        "bullets": [
          "Utfylt og signert EX-15, med kopi der det kreves.",
          "Utfylt Modelo 790 Código 012 og dokumentasjon på betaling etter gjeldende prosedyre.",
          "Gyldig pass eller annet akseptert ID-dokument og påkrevde kopier.",
          "Konkret beskrivelse av grunnen til søknaden.",
          "Dokumentasjon på formålet – for eksempel relevant kjøpe- eller reservasjonsdokumentasjon når dette etterspørres.",
          "Eventuell uttrykkelig fullmakt og representantens ID.",
          "Dokumentasjon på bosted i konsulærdistriktet og andre tilleggskrav ved søknad i Oslo."
        ]
      },
      {
        "heading": "Slik fyller du ut EX-15",
        "body": [
          "EX-15 er det offisielle søknadsskjemaet for tildeling av NIE og visse sertifikater. Det fylles ut på spansk med blant annet navn, fødselsdato, nasjonalitet, passnummer, adresse og kontaktopplysninger.",
          "Oppgi riktig grunn til søknaden og samsvarende dokumentasjon. Sammenlign opplysningene med passet og kontroller underskrift og dato. Ambassaden i Oslo lenker til både skjema og eksempel på utfylling fra [[sin NIE-veiledning|https://www.exteriores.gob.es/Embajadas/oslo/en/ServiciosConsulares/Paginas/Consular/NIE.aspx]]."
        ]
      },
      {
        "heading": "Hva er Modelo 790 Código 012?",
        "body": [
          "Modelo 790 Código 012 er gebyrskjemaet som brukes ved blant annet søknad om tildeling av NIE. Velg tjenesten som gjelder tildeling av NIE, kontroller oppdatert gebyr, og betal på måten myndigheten eller ambassaden instruerer.",
          "Ikke velg et gebyr for TIE-kort dersom du søker om selve NIE-nummeret. Se [[Policía Nacionals offisielle gebyrskjema|https://sede.policia.gob.es/Tasa790_012/]]; ved søknad i Oslo følges ambassadens betalingsinformasjon."
        ]
      },
      {
        "heading": "Hvor mye koster et NIE-nummer?",
        "body": [
          "Den offentlige avgiften for selve NIE-søknaden er forholdsvis lav, men satsen kan justeres. Kontroller beløpet i aktuell Modelo 790 Código 012 eller hos ambassaden den dagen du søker.",
          "Bruker du advokat, gestor, oversettelse eller fullmaktshåndtering, betaler du eventuelt for disse tjenestene i tillegg. Be om et spesifisert pristilbud; tjenesteprisen er ikke en offentlig NIE-avgift."
        ]
      },
      {
        "heading": "Hvor lang tid tar det å få NIE?",
        "body": [
          "Det finnes ikke én behandlingstid som gjelder for alle NIE-søknader. Skill mellom ventetid for å få time, myndighetenes behandling etter korrekt mottatt søknad og en eventuell søknad sendt via ambassaden i Oslo.",
          "I Spania kan tilgjengelige timer og saksflyt variere fra kontor til kontor. For Oslo oppgir ambassaden at NIE normalt utstedes innen opptil fem uker, men at tiden kan forlenges av forhold utenfor konsulatets kontroll. Det er ingen garanti for at et bestemt boligoppgjør kan gjennomføres innen denne perioden. [[Kontroller oppdatert informasjon hos ambassaden|https://www.exteriores.gob.es/Embajadas/oslo/en/ServiciosConsulares/Paginas/Consular/NIE.aspx]]."
        ]
      },
      {
        "heading": "Hvor finner jeg NIE-nummeret mitt?",
        "body": [
          "Du finner normalt NIE på tildelingsbeviset eller NIE-sertifikatet. Har du et TIE-kort, vil nummeret også stå der. Det kan dessuten fremgå av enkelte spanske skatte-, bank- og myndighetsdokumenter.",
          "Et NIE består typisk av en innledende bokstav, sju sifre og en kontrollbokstav, for eksempel X1234567L (illustrasjon, ikke et gyldig identitetsbevis). Har du mistet sertifikatet, sjekk først dokumentarkivet ditt og med den myndigheten eller rådgiveren som behandlet saken."
        ]
      },
      {
        "heading": "Trenger begge kjøpere NIE?",
        "body": [
          "Ja, normalt må hver utenlandske person som skal registreres som kjøper eller eier identifiseres med sitt eget NIE. Et ektepar som kjøper sammen, skal derfor ikke bruke ett felles nummer.",
          "Avklar eiersammensetningen tidlig med advokaten, slik at nødvendige identifikasjonsopplysninger er klare til kontrakt og skjøte."
        ]
      },
      {
        "heading": "Vanlige feil når nordmenn søker om NIE",
        "body": [
          "De vanligste praktiske problemene er mangelfull dokumentasjon og sen oppstart. Mange feil kan unngås ved å kontrollere kravene hos det kontoret som skal behandle søknaden, før du bestiller time eller reise."
        ],
        "bullets": [
          "Søknaden startes først rett før en bindende overtakelsesfrist.",
          "Formålet er for vagt eller det mangler bevis på hvorfor NIE er nødvendig.",
          "EX-15 er ufullstendig, usignert eller inneholder opplysninger som avviker fra passet.",
          "Modelo 790 Código 012 eller betalingsbevis mangler.",
          "Søkeren antar at NIE gir bostedsregistrering eller skattemessig residens.",
          "Påkrevde kopier, originaler eller fullmaktsdokumenter er ikke med.",
          "Man følger foreldede bloggoppskrifter i stedet for gjeldende myndighetsinformasjon."
        ]
      },
      {
        "heading": "Få hjelp med NIE og boligkjøpet",
        "body": [
          "Vi hjelper deg å planlegge NIE-dokumentasjon og tidsfrister sammen med resten av boligkjøpet på Costa Blanca, og kan koordinere kontakt med relevante advokater eller andre kvalifiserte representanter.",
          "[[Bestill en uforpliktende boligprat|/booking]]. Du beholder oversikten over hvem som gjør hva, mens myndighetene avgjør søknaden."
        ]
      }
    ],
    "nextSteps": [
      "Bestem om du skal søke i Spania, via ambassaden i Oslo eller gjennom representant.",
      "Samle EX-15, gebyrskjema, pass/ID, kopier og bevis på formålet.",
      "Kontroller gjeldende krav og timebestilling direkte hos søknadsstedet.",
      "Legg inn realistisk tidsmargin før avtalt overtakelse.",
      "Oppbevar tildelingsbeviset og del identifikasjonsopplysninger sikkert med advokaten."
    ],
    "faq": [
      {
        "question": "Kan jeg søke om NIE fra Norge uten å reise til Spania?",
        "answer": "Ja, når vilkårene er oppfylt kan du søke ved Spanias ambassade i Oslo. Du må bestille time, levere dokumentasjon og normalt møte selv eller gjennom godkjent representant."
      },
      {
        "question": "Er NIE det samme som spansk skattemessig bosted?",
        "answer": "Nei. NIE er et personlig identifikasjonsnummer. Skattemessig bosted og oppholdsregistrering avgjøres etter andre regler."
      },
      {
        "question": "Kan en advokat ordne NIE-nummer for meg?",
        "answer": "I enkelte tilfeller ja, med uttrykkelig fullmakt som godtas av relevant myndighet. Kontroller formkrav og om representanten kan møte på dine vegne."
      },
      {
        "question": "Hvor finner jeg mitt NIE-nummer hvis dokumentet er borte?",
        "answer": "Se etter NIE-beviset, eventuelt TIE-kort eller relevante spanske myndighets- og skattedokumenter. Be om hjelp fra utstedende instans hvis dokumentasjonen er mistet."
      },
      {
        "question": "Hvor lang tid tar NIE via ambassaden i Oslo?",
        "answer": "Ambassaden oppgir normalt inntil fem uker etter sin prosess, men det kan ta lenger tid. Tilgjengelige timer kommer i tillegg."
      },
      {
        "question": "Må begge ektefeller ha NIE ved felles boligkjøp?",
        "answer": "Normalt ja. Hver utenlandske person som skal stå som eier eller kjøper må kunne identifiseres individuelt."
      }
    ],
    "cta": {
      "label": "Bestill en uforpliktende boligprat",
      "href": "/booking"
    }
  },
  {
    slug: "spansk-bankkonto-valutaveksling",
    title: "Spansk bankkonto og valutaveksling for boligkjøpere",
    excerpt:
      "Er spansk bankkonto nødvendig for ditt kjøp? Slik planlegger du betalinger og sammenligner kostnaden ved veksling fra kroner til euro.",
    date: "2026-09-08",
    updated: "2026-10-10",
    category: "Kjøpsprosess",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/bankkonto-valuta.svg",
    imageAlt: "Illustrasjon av spansk bank og valutaveksling mellom euro og kroner",
    seoTitle: "Spansk bankkonto og valuta | Guide for boligkjøpere",
    seoDescription:
      "Trenger du spansk bankkonto for boligkjøp i Spania? Om betalingsflyt, dokumentasjon og hvordan du sammenligner valutaveksling fra kroner til euro.",
    keywords: [
      "spansk bankkonto",
      "valutaveksling euro kroner",
      "betale bolig Spania",
      "bank Spania nordmenn",
      "overføre penger Spania",
    ],
    intro: [
      "Et boligkjøp i Spania betales i euro. En spansk bankkonto er ofte praktisk for kjøpsoppgjør og løpende kostnader, men er ikke et universelt lovkrav for alle transaksjoner. Bank, advokat, betalingsmetode og leverandører avgjør hva som er praktisk og nødvendig i ditt kjøp.",
      "Valutaveksling fra kroner til euro kan samtidig påvirke totaløkonomien. Sammenlign totalkostnad og planlegg betalingsflyten i god tid. Dette er generell informasjon, ikke finansiell rådgivning.",
    ],
    sections: [
      {
        heading: "Hvorfor mange bruker spansk bankkonto",
        body: [
          "En lokal konto kan gjøre enkelte betalinger og faste trekk enklere, men ulike banker og leverandører har forskjellige krav og SEPA-løsninger. Avklar med advokat, bank og forsyningsselskaper hva som faktisk kreves for din bolig.",
        ],
      },
      {
        heading: "Betaling av kjøpesummen",
        body: [
          "Betalingsmåte ved sluttoppgjør avtales og dokumenteres i kjøpsprosessen. Banksjekk, bankoverføring eller andre kontrollerte løsninger kan brukes avhengig av transaksjonen. Avklar tidlig med advokat og bank hvor midlene må være, frister og hvilken dokumentasjon som kreves.",
        ],
      },
      {
        heading: "Valutaveksling",
        body: [
          "Vekslingskurs og gebyrer varierer mellom banker og andre leverandører. På store beløp kan forskjeller i kursmargin og gebyr bli betydelige. Sammenlign derfor hva du faktisk mottar i euro for samme kronebeløp.",
        ],
        bullets: [
          "Sammenlign effektiv totalkostnad, ikke bare annonsert valutakurs.",
          "Sjekk overføringsgrenser, gebyrer og behandlingstid.",
          "Planlegg større betalinger i god tid før kontraktsfristen.",
          "Behold dokumentasjon på overføringer og midlenes opprinnelse.",
        ],
      },
      {
        heading: "Slik kvalitetssikrer du store betalinger",
        body: [
          "Ved reservasjon, delbetaling og sluttoppgjør kan pengene gå til forskjellige mottakere på forskjellige tidspunkter. Avklar hver betaling med din uavhengige advokat og betalingsansvarlige før beløpet sendes. Ikke stol på nye kontonumre som bare kommer i en e-post eller melding – kontroller en eventuell endring gjennom en separat, kjent kontaktkanal.",
          "En godt planlagt betalingsflyt er særlig viktig når pengene skal veksles fra NOK til EUR. Sørg for å kjenne bankenes behandlingstid, eventuelle beløpsgrenser og hvilke dokumenter som må være godkjent før sluttoppgjøret.",
        ],
        bullets: [
          "Be om skriftlig betalingsplan med mottaker, formål, valuta, beløp og forfallsdato.",
          "Verifiser kontodetaljer direkte med advokat eller bank gjennom et kjent telefonnummer.",
          "Få bekreftet samlet eurobeløp etter valutapåslag og gebyrer før overføring.",
          "Sørg for at dokumentasjon om midlenes opprinnelse er klar i god tid.",
        ],
      },
      {
        heading: "Dokumentasjon og midlenes opprinnelse",
        body: [
          "Banker og andre aktører i transaksjonen har plikter etter hvitvaskingsregelverket. Vær forberedt på å dokumentere identitet, økonomi og hvor midlene kommer fra. Hvilke dokumenter som kreves varierer med bank og transaksjon.",
        ],
      },
    ],
    nextSteps: [
      "Avklar tidlig om en spansk konto er nødvendig eller praktisk i ditt konkrete kjøp.",
      "Sjekk dokumentkrav med banken før større overføringer.",
      "Sammenlign valutaaktører på effektiv totalkostnad før du veksler store beløp.",
      "Ta vare på dokumentasjon på midlenes opprinnelse og overføringer.",
    ],
    faq: [
      {
        question: "Må jeg ha spansk bankkonto for å kjøpe bolig i Spania?",
        answer:
          "Ikke som en universell regel for alle kjøp, men en spansk konto kan være praktisk og enkelte banker, finansieringsopplegg eller leverandører kan stille egne krav. Avklar dette konkret med advokat og bank.",
      },
      {
        question: "Hvordan sammenligner jeg veksling fra kroner til euro?",
        answer:
          "Sammenlign hvor mange euro du faktisk mottar etter kursmargin, gebyrer og andre kostnader. På store beløp bør du også vurdere behandlingstid, overføringsgrenser og dokumentkrav.",
      },
      {
        question: "Må jeg dokumentere hvor pengene kommer fra?",
        answer:
          "Du bør være forberedt på det. Banker og andre relevante aktører kan kreve dokumentasjon på midlenes opprinnelse som ledd i hvitvaskingskontroll.",
      },
    ],
    cta: { label: "Ta en prat om budsjett og betaling", href: "/booking" },
  },
  {
    slug: "boliglan-spansk-bank-nordmenn",
    title: "Boliglån i Spania: Slik får du lån i spansk bank",
    excerpt:
      "Kan nordmenn få boliglån i Spania? Om bankens vurdering, belåningsgrad, takst og kostnadene ved å låne til bolig i Spania.",
    date: "2026-09-08",
    updated: "2026-10-10",
    category: "Kjøpsprosess",
    readingTime: "16 min lesing",
    image: "/assets/magasin-covers/boliglan-bank.svg",
    imageAlt: "Illustrasjon av bolig og spansk bank med boliglån",
    seoTitle: "Boliglån i Spania | Slik får nordmenn lån i spansk bank",
    seoDescription:
      "Boliglån i Spania for nordmenn: se belåningsgrad, renter, Euribor, TAE, egenkapital, kostnader, søknadsprosess og forskjellen på spansk og norsk lån.",
    keywords: [
      "boliglån i Spania",
      "låne penger i spansk bank",
      "lån i spansk bank",
      "Hva er renten på boliglån i Spania",
      "kalkulator for boliglån i Spania",
      "spansk lånekalkulator",
      "belåningsgrad ikke-resident Spania",
      "finansiering bolig Spania",
    ],
    intro: [
      "Boliglån i Spania er fullt mulig for nordmenn, også dersom du bor og skatter i Norge. Men prosessen fungerer ikke helt som i en norsk bank. Hvor mye du kan låne avhenger blant annet av om boligen skal være fast bolig eller feriebolig, inntekten og gjelden din, bankens takst av eiendommen og hvilken bank du søker hos.",
      "Jeg har selv spansk boliglån og har fulgt boligkjøpsprosessen både som privat kjøper og som rådgiver for nordmenn som kjøper bolig i Spania. Mitt viktigste råd er å ikke behandle finansieringen som noe man ordner helt til slutt. Får du oversikt over lånemuligheter, egenkapital og totale kjøpskostnader tidlig, blir resten av boligjakten betydelig enklere – og du står sterkere når du finner boligen du faktisk ønsker å kjøpe.",
    ],
    sections: [
      {
        heading: "Kan jeg låne penger i spansk bank?",
        body: [
          "Ja. Norske statsborgere kan låne penger i spansk bank uten å være residenter i Spania. Det første jeg ville vært forsiktig med, er likevel påstander som «residenter får 80 prosent og ikke-residenter får 70 prosent». Virkeligheten er mer nyansert. Flere banker oppgir opptil 80 prosent finansiering for primærbolig og opptil 70 prosent for andrebolig, mens egne produkter for ikke-residenter også kan ligge på opptil 70 prosent. Dette er maksimumsgrenser – ikke et løfte om at du faktisk får låne så mye.",
          "Banken foretar alltid en individuell vurdering, og taksten kan påvirke finansieringen betydelig. Dersom du avtaler å kjøpe en bolig for 500.000 euro, men bankens godkjente takstmann vurderer den lavere, må du være forberedt på at bankens finansieringsgrunnlag kan bli lavere enn kjøpesummen. Derfor anbefaler jeg å få finansieringen vurdert før du binder deg økonomisk til en bolig.",
          "Jeg ville nesten aldri vurdert et spansk boliglån på grunnlag av ett tilbud alene. Be minst to banker om å regne på den samme finansieringen. Når Bank A har gitt deg et skriftlig tilbud, kan du vise de relevante betingelsene til Bank B og spørre om de kan gi deg et bedre totaltilbud. Hvis Bank B forbedrer tilbudet, kan du gå tilbake til Bank A. Det viktigste er at du sammenligner hele pakken, ikke bare den annonserte renten.",
        ],
        table: {
          headers: ["Situasjon", "Eksempler på maksimal finansiering"],
          rows: [
            ["Primærbolig", "Opptil ca. 80 %"],
            ["Andrebolig", "Opptil ca. 70 %"],
            ["Ikke-residentprodukt", "Opptil ca. 70 %"],
          ],
          caption:
            "Dette er eksempler på maksimale nivåer i markedet. Bankens konkrete tilbud avhenger av kunden, boligen og bankens kredittregler.",
        },
      },
      {
        heading: "Viktige krav for å få lån i Spania",
        body: [
          "Når du søker om lån i spansk bank, er bankens hovedspørsmål i praksis hvor stor risiko den tar ved å låne deg penger. Det skiller seg ikke grunnleggende fra Norge, men dokumentasjonen kan oppleves mer omfattende. En norsk bank kjenner ofte økonomien din fra før og arbeider i de samme norske systemene som skatte- og inntektsopplysningene dine. En spansk bank må forstå en norsk kundes økonomi gjennom dokumentasjonen du sender inn.",
          "Banco de España bruker rundt 40 prosent av nettoinntekt som en viktig referanse i informasjonen sin om samlet gjeldsbelastning. Det betyr ikke at alle banker vil godta 40 prosent. Banken kan legge seg lavere ut fra kundens profil, valuta, alder, eksisterende gjeld og egne risikoregler.",
          "Min erfaring er at det er mye lettere å få en effektiv bankprosess når dokumentasjonen leveres komplett og ryddig fra starten. Jeg ville samlet alt i én strukturert mappe før søknaden sendes, i stedet for å vente på at banken etterspør ett dokument om gangen. Er du selvstendig næringsdrivende eller har flere selskaper og inntektskilder, må du regne med at banken stiller flere spørsmål.",
        ],
        bullets: [
          "Fast og dokumenterbar inntekt og hvor stabil den er.",
          "Eksisterende boliglån, kreditter og andre månedlige forpliktelser.",
          "Alder og ønsket løpetid.",
          "Arbeidsforhold, pensjon eller næringsinntekt.",
          "Skattemessig bosted og valutaen inntekten mottas i.",
          "Egenkapital, formue og dokumentasjon på hvor pengene kommer fra.",
          "Boligen som skal stilles som sikkerhet og bankens takst av eiendommen.",
          "Pass, NIE, skattemelding, lønnsslipper eller pensjonsdokumentasjon, kontoutskrifter og låneoversikt etter bankens krav.",
        ],
      },
      {
        heading: "Slik foregår en vanlig søknadsprosess",
        body: [
          "En typisk søknad om boliglån i Spania starter med økonomien din og avsluttes med den konkrete boligen. Først vurderer banken inntekt, gjeld, egenkapital og øvrig økonomi. Når du har funnet en bolig, må eiendommen normalt takseres av en godkjent takstmann. Banken vurderer deretter både kunden og sikkerheten før den gir endelig lånetilbud.",
          "Etter den spanske boliglånsloven skal kunden blant annet få FEIN, den standardiserte europeiske låneinformasjonen, og FiAE med viktige vilkår og advarsler. Dokumentasjonen skal normalt være tilgjengelig minst ti kalenderdager før signering. Notaren skal kontrollere informasjonen og gi kunden individuell rådgivning før boliglånet kan gjennomføres.",
          "Her er det en tydelig forskjell fra det mange er vant til i Norge. Flere spanske banker har digitalisert selve søknaden og lar utenlandske kunder sende inn dokumentasjon elektronisk, så det er ikke riktig at du alltid må møte fysisk i banken. Notarprosessen er derimot en egen del av gjennomføringen. Låntakeren eller en behørig representant må oppfylle kravene til notarial behandling og rådgivning. En advokat, gestor eller annen representant med korrekt fullmakt kan håndtere mye praktisk, men en fullmakt må dekke det som faktisk skal gjøres.",
        ],
        bullets: [
          "Økonomisk forhåndsvurdering.",
          "Innsending og kontroll av dokumentasjon.",
          "Valg av konkret eiendom.",
          "Bankens takst – tasación.",
          "Endelig kredittgodkjenning.",
          "Lånetilbud og FEIN/FiAE.",
          "Obligatorisk notarkontroll.",
          "Signering av boliglån og kjøp.",
        ],
      },
      {
        heading: "Hva er renten på boliglån i Spania?",
        body: [
          "Det korte svaret er at det ikke finnes én rente på boliglån i Spania. Renten avhenger av banken, belåningsgraden, økonomien din, løpetiden og om du velger fast, variabel eller blandet rente. Derfor bør et banktilbud alltid leses som en helhet.",
          "For å forstå variable spanske boliglån bør du kjenne Euribor. Euribor – Euro Interbank Offered Rate – er en markedsbasert referanserente for euroområdet. 12-måneders Euribor er den viktigste referansen for mange spanske boliglån med variabel rente. Et lån kan for eksempel prises som 12-måneders Euribor pluss bankens avtalte margin. Dersom Euribor er 3,0 prosent og bankens margin er 1,0 prosentpoeng, vil den nominelle renten i et forenklet eksempel ligge rundt 4,0 prosent frem til neste renteregulering.",
          "I september 2026 var 12-måneders Euribor 3,247 prosent, ifølge Banco de España. Euribor er ikke det samme som styringsrenten til Den europeiske sentralbanken. For norske lesere er den nærmeste sammenligningen egentlig NIBOR: Norges Bank setter styringsrenten, som påvirker pengemarkedsrentene og bankenes finansiering; i euroområdet påvirker ECBs renter blant annet Euribor. Banken setter til slutt renten du som kunde får.",
        ],
        table: {
          headers: ["Rentetype", "Hvordan fungerer den?", "Hva bør du tenke på?"],
          rows: [
            ["Fast rente", "Renten avtales for hele eller store deler av lånetiden.", "Gir forutsigbar månedskostnad."],
            ["Variabel rente", "Ofte Euribor + bankens margin.", "Kostnaden kan både stige og falle."],
            ["Blandet rente", "Fast rente først, variabel senere.", "Kombinerer forutsigbarhet med senere renterisiko."],
          ],
        },
      },
      {
        heading: "Hva betyr TAE – og hvorfor er det viktig?",
        body: [
          "Når jeg sammenligner spanske lånetilbud, er TAE et av de første tallene jeg ser etter. TAE står for Tasa Anual Equivalente og kan sammenlignes med effektiv rente i Norge. Den nominelle renten – ofte omtalt som TIN i Spania – forteller hvilken rente banken beregner på lånet, mens TAE forsøker å uttrykke den årlige samlede kostnaden når relevante gebyrer og kostnader tas med etter reglene for beregningen.",
          "Det betyr at Bank A kan ha lavere nominell rente enn Bank B, men likevel være dyrere totalt dersom den krever kostbare forsikringer, konto, kort eller andre produkter. CaixaBanks offentlig tilgjengelige ikke-residenteksempel i oktober 2026 illustrerer dette godt: Et lån på 150.000 euro over 20 år vises med 2,80 prosent fast nominell rente og 4,374 prosent APR/TAE med maksimal rabatt, mens varianten uten rabattene har 3,80 prosent nominell rente og 4,398 prosent APR/TAE. Forskjellen i nominell rente er stor, men forskjellen i oppgitt samlet lånekostnad er langt mindre fordi bonusalternativet er knyttet til andre produkter og kostnader.",
          "Derfor ville jeg alltid regnet om tilbudene til faktiske euro per måned og per år. Se på TAE, men kontroller også kostnaden på konto, kort, boligforsikring, livsforsikring, alarm- eller sikkerhetstjenester og andre betingelser. Det hjelper lite med en lavere rente dersom de andre månedlige kostnadene spiser opp gevinsten.",
        ],
        table: {
          headers: ["Sammenlign", "Bank A", "Bank B"],
          rows: [
            ["Lånebeløp", "", ""],
            ["Løpetid", "", ""],
            ["TIN / nominell rente", "", ""],
            ["TAE / effektiv kostnad", "", ""],
            ["Månedlig lånebetaling", "", ""],
            ["Konto og kort", "", ""],
            ["Bolig- og livsforsikring", "", ""],
            ["Andre produkter", "", ""],
            ["Kostnad ved ekstra nedbetaling", "", ""],
            ["Total årlig kostnad", "", ""],
          ],
          caption: "Bruk samme sammenligningsgrunnlag hos begge banker. Da blir det enklere å forhandle og se hva tilbudet faktisk koster.",
        },
      },
      {
        heading: "Kalkulator for boliglån i Spania",
        body: [
          "En kalkulator for boliglån i Spania bør vise mer enn bare månedlig avdrag. For en norsk boligkjøper er det minst like viktig å vite hvor mye kapital som faktisk må være tilgjengelig for å gjennomføre kjøpet. En god spansk lånekalkulator bør derfor regne på kjøpesum, bruktbolig eller nybygg, region, belåningsgrad, lånebeløp, rente, løpetid, månedlig betaling, skatter, øvrige kjøpskostnader og total egen kapital som kreves.",
          "La oss bruke en bolig til 500.000 euro som eksempel. Dersom banken godkjenner 70 prosent finansiering, blir boliglånet 350.000 euro og egenkapitalen til selve kjøpesummen 150.000 euro. Men det betyr ikke at 150.000 euro er nok til å kjøpe boligen. Skatter og andre kjøpskostnader kommer i tillegg.",
          "CaixaBank bruker i sitt generelle ikke-residenteksempel ytterligere omtrent 12–15 prosent av boligverdien til skatter og andre kostnader. På en bolig til 500.000 euro tilsvarer det omtrent 60.000–75.000 euro. Samlet kapitalbehov blir da omtrent 210.000–225.000 euro. Det er dette tallet jeg mener en boliglånskalkulator bør vise tydelig, fordi det gir et langt mer realistisk bilde enn bare å si at du trenger 30 prosent egenkapital.",
          "På Costa Blanca er det også nyttig å se hva skatten alene kan gjøre med regnestykket. For ordinær bruktbolig i Comunitat Valenciana er den generelle ITP-satsen 9 prosent for eiendommer under én million euro fra 1. juni 2026. På en bruktbolig til 500.000 euro utgjør det 45.000 euro i ITP før øvrige kjøpskostnader. Ved ordinært nybygg gjelder normalt 10 prosent IVA, og andre skatter og kostnader kommer i tillegg.",
        ],
        table: {
          headers: ["Eksempel: bolig til 500.000 €", "Beløp"],
          rows: [
            ["Kjøpesum", "500.000 €"],
            ["Boliglån 70 %", "350.000 €"],
            ["Egenkapital til kjøpesummen", "150.000 €"],
            ["Skatter og øvrige kjøpskostnader, ca. 12–15 %", "60.000–75.000 €"],
            ["Estimert kapital du bør ha tilgjengelig", "210.000–225.000 €"],
          ],
          caption:
            "12–15 prosent er et generelt bankeksempel for ikke-residenter. Den faktiske kostnaden avhenger blant annet av bruktbolig eller nybygg, region, boligverdi og hvilke tjenester du bruker.",
        },
      },
      {
        heading: "Hva koster et spansk boliglån?",
        body: [
          "Her må vi skille mellom kostnadene ved å kjøpe boligen og kostnadene ved selve boliglånet. Etter den spanske boliglånsloven betaler kunden normalt taksten av boligen. Banken betaler blant annet kostnadene til notar, eiendomsregister, gestoría og skatt knyttet til etableringen av selve pantelånet. Dette gjelder boliglånet – ikke kjøpsskatter og andre kostnader ved eiendomsoverdragelsen.",
          "Det som ofte blir dyrt over tid er derfor ikke etableringen av pantet, men renten og de løpende produktene banken knytter til lånet. Hvis én bank gir deg 0,3 prosentpoeng lavere rente, men krever forsikringer og produkter som koster betydelig mer per år, må du regne på om rentebesparelsen faktisk er større enn merkostnaden.",
          "TAE hjelper deg med å sammenligne, men jeg ville likevel sett på de faktiske eurobeløpene produkt for produkt. Spør banken hva du betaler i året med og uten rabatter, og hvilke produkter som er obligatoriske, valgfrie eller bare nødvendige for å få den annonserte renten.",
        ],
        table: {
          headers: ["Kostnad ved selve boliglånet", "Normalt betaler"],
          rows: [
            ["Takst – tasación", "Kunde"],
            ["Notar for låneskjøtet", "Bank"],
            ["Registrering av pant", "Bank"],
            ["Gestoría knyttet til pantelånet", "Bank"],
            ["AJD på selve pantelånet", "Bank"],
            ["Eventuelt etableringsgebyr", "Avhenger av tilbudet"],
            ["Forsikringer og tilleggsprodukter", "Avhenger av vilkårene"],
          ],
        },
      },
      {
        heading: "Spansk lån vs norsk lån",
        body: [
          "Når du vurderer et spansk boliglån, bør du også sammenligne alternativet med å låne mot sikkerhet i Norge. Et spansk lån er normalt knyttet til boligen i euro, mens norsk finansiering ofte innebærer pant i en norsk eiendom og tilbakebetaling i kroner. Begge løsningene kan være aktuelle, avhengig av økonomi og bankens vurdering.",
          "Den grundige sammenligningen av sikkerhet, valutarisiko og total kostnad ligger i vår egen artikkel om lån i Norge eller Spania. Denne guiden konsentrerer seg om søknaden, lånevilkårene og dokumentasjonskravene i spansk bank.",
        ],
      },
      {
        heading: "Husk dette når du søker boliglån i Spania",
        body: [
          "Jeg har selv spansk boliglån, og hvis jeg skulle redusere hele guiden til ett praktisk råd, ville det være dette: Begynn med banken før du forelsker deg i boligen. Det er lett å starte på boligportalene, finne en fantastisk leilighet eller villa og først deretter tenke finansiering. Dersom du trenger lån, mener jeg rekkefølgen bør være motsatt.",
          "Finn først ut hva du komfortabelt kan bruke totalt, inkludert skatt, omkostninger og reserve, og få en realistisk forhåndsvurdering fra banken. Da vet du hvilken prisklasse du faktisk bør lete i, og du står sterkere når du finner riktig bolig.",
          "Jeg ville heller ikke valgt et lån bare fordi banken gir deg muligheten til å låne maksimalt. At banken sier at du kan låne 350.000 euro, betyr ikke nødvendigvis at du bør låne 350.000 euro. Boligen skal fortsatt være økonomisk komfortabel dersom renten endrer seg, euroen blir dyrere mot norske kroner, fellesutgiftene øker eller det oppstår andre kostnader. Det er forskjellen mellom å få finansiering og å ha en god finansieringsplan.",
        ],
        bullets: [
          "Innhent tilbud fra minst to banker.",
          "Sammenlign TAE og total kostnad – ikke bare nominell rente.",
          "Regn ut kostnaden på forsikringer, konto, kort og andre produkter i euro.",
          "Vis bankene konkurrentens tilbud og spør om de kan forbedre vilkårene.",
          "Kontroller hva banken finansierer dersom taksten blir lavere enn kjøpesummen.",
          "Avklar kostnader ved ekstraordinær nedbetaling eller førtidig innfrielse.",
          "Regn egenkapital pluss alle kjøpskostnader før boligbudsjettet fastsettes.",
          "Planlegg valutavekslingen dersom kapitalen eller inntekten din er i NOK.",
          "Sørg for at reservasjons- eller kjøpekontrakten håndterer finansieringsrisikoen på riktig måte.",
          "Bruk kvalifisert juridisk og skattemessig rådgivning når situasjonen krever det.",
        ],
      },
      {
        heading: "Skal du kjøpe bolig i Spania med finansiering?",
        body: [
          "Hvis du vurderer boliglån i Spania, anbefaler jeg å se finansieringen som en del av hele boligvalget – ikke som en separat bankoppgave. Boligpris, egenkapital, skatt, omkostninger, valuta, bankvilkår og månedlige kostnader henger sammen.",
          "Hos Zen Eco Homes kan vi hjelpe deg med å forstå hvordan boligbudsjettet og kjøpsprosessen henger sammen, finne boliger innenfor den reelle økonomiske rammen din og koordinere de praktiske delene rundt kjøpet. Banken tar selve kredittbeslutningen, og juridisk og skattemessig rådgivning må gis av kvalifiserte fagpersoner på de respektive områdene.",
        ],
      },
    ],
    nextSteps: [
      "Få en tidlig finansieringsvurdering før du setter endelig boligbudsjett.",
      "Be minst to banker om sammenlignbare tilbud og vurder TAE, totalpris og tilleggsprodukter.",
      "Regn ut nødvendig egenkapital inkludert skatter og øvrige kjøpskostnader.",
      "Avklar bankens takst, finansieringsgrad og eventuelle vilkår før du binder deg til boligen.",
    ],
    faq: [
      {
        question: "Kan nordmenn få boliglån i Spania?",
        answer:
          "Ja. Norske kjøpere kan søke om boliglån hos spanske banker selv om de ikke er residenter i Spania. Banken vurderer blant annet inntekt, gjeld, egenkapital, alder og eiendommen som skal stilles som sikkerhet.",
      },
      {
        question: "Hvor mye kan en ikke-resident låne i Spania?",
        answer:
          "Enkelte banker tilbyr ikke-residenter finansiering på opptil 70 prosent av boligens verdi. Den faktiske belåningsgraden bestemmes etter bankens individuelle kredittvurdering og eiendommens verdi.",
      },
      {
        question: "Kan jeg få 80 prosent boliglån i Spania?",
        answer:
          "Det finnes banker som tilbyr opptil 80 prosent ved kjøp av primærbolig, mens andreboliger ofte begrenses til rundt 70 prosent. Boligtype og bankens vurdering er avgjørende, ikke bare om du er resident.",
      },
      {
        question: "Hva er renten på boliglån i Spania?",
        answer:
          "Det finnes ingen felles boliglånsrente. Renten avhenger av bank, økonomi, belåningsgrad, løpetid og om du velger fast, variabel eller blandet rente. For variable lån brukes 12-måneders Euribor ofte som referanse.",
      },
      {
        question: "Hva er Euribor?",
        answer:
          "Euribor er en markedsbasert referanserente for euroområdet. For mange spanske boliglån med variabel rente består renten av Euribor pluss en avtalt margin til banken.",
      },
      {
        question: "Hva betyr TAE?",
        answer:
          "TAE står for Tasa Anual Equivalente og kan sammenlignes med effektiv rente i Norge. Den gjør det lettere å sammenligne lånetilbud fordi relevante kostnader og gebyrer tas med i beregningen, ikke bare den nominelle renten.",
      },
      {
        question: "Bør jeg spørre flere spanske banker?",
        answer:
          "Ja. Jeg anbefaler å innhente minst to tilbud og sammenligne TAE, månedlig betaling, forsikringer, kontoavgifter, øvrige produkter og betingelser for førtidig nedbetaling. Bruk gjerne det beste tilbudet som utgangspunkt når du forhandler med den andre banken.",
      },
      {
        question: "Må jeg møte fysisk i banken i Spania?",
        answer:
          "Ikke nødvendigvis. Enkelte banker tilbyr digital søknad og elektronisk innsending av dokumentasjon til utenlandske kjøpere. Boliglånsprosessen innebærer imidlertid notarial behandling, og låntaker eller behørig representant må oppfylle kravene til fremmøte og rådgivning hos notaren.",
      },
      {
        question: "Hvor mye egenkapital trenger jeg til bolig i Spania?",
        answer:
          "Dersom banken finansierer 70 prosent, må du dekke minst de resterende 30 prosentene selv. I tillegg kommer skatter og andre kjøpskostnader. Et generelt ikke-residenteksempel fra CaixaBank legger til grunn ytterligere rundt 12–15 prosent, altså samlet kapital på omtrent 42–45 prosent av boligverdien.",
      },
      {
        question: "Hvem betaler taksten ved spansk boliglån?",
        answer:
          "Låntakeren betaler normalt taksten. Banken betaler etter gjeldende regler blant annet notar, register, gestoría og skatten knyttet til etableringen av selve pantelånet.",
      },
      {
        question: "Bør jeg ta boliglån i Norge eller Spania?",
        answer:
          "Det finnes ikke ett riktig svar. Sammenlign renten, total kostnad, valuta, hvilken eiendom som stilles som sikkerhet, hvor mye fleksibilitet du ønsker og hvordan inntekten din er fordelt mellom NOK og EUR.",
      },
      {
        question: "Når bør jeg begynne låneprosessen?",
        answer:
          "Helst før du har bundet deg til en bestemt bolig. En tidlig finansieringsvurdering gir et mer realistisk boligbudsjett og gjør det enklere å handle når du finner riktig eiendom.",
      },
    ],
    cta: { label: "Få rådgivning om boligbudsjett og kjøpsprosess", href: "/booking" },
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const processSteps = [
  "Behovskartlegging – hvordan skal boligen brukes, og hva er totalbudsjettet?",
  "Områdevalg – vi sammenligner steder før vi velger konkrete boliger.",
  "Boligsøk – aktuelle prosjekter og boliger snevres inn til en relevant shortlist.",
  "Visning og visningstur – bolig, område og praktiske forhold vurderes sammen.",
  "Bud eller reservasjon – vilkår, beløp og forutsetninger avklares før du binder deg.",
  "Advokat og juridiske undersøkelser – relevante fagpersoner kontrollerer dokumentasjon og eiendommen.",
  "NIE, bank og finansiering – praktiske og økonomiske forutsetninger klargjøres.",
  "Kontrakt – kjøpeavtalen gjennomgås og signeres etter nødvendige kontroller.",
  "Notar – skjøtet signeres og kjøpet sluttføres.",
  "Overtakelse – nøkler, praktiske forhold og registrering følges opp.",
  "Oppfølging etter kjøpet – videre hjelp og Zen Eco Homes Care ved behov.",
];
