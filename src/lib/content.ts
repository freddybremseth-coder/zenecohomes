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
    seoTitle: "Områdeguide for boligkjøp i Spania | Costa Blanca, Costa del Sol og Valencia",
    seoDescription:
      "Finn riktig område for boligkjøp i Spania. Guide for nordmenn som vurderer Costa Blanca, Costa del Sol, Valencia eller Kanariøyene.",
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
    seoTitle: "Kjøpe bolig i Spania nå eller vente? Beslutningsguide for nordmenn",
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
    slug: "finansiering-notar-nie-boligkjop-spania",
    title: "Finansiering, notar og NIE – praktisk veiledning for boligkjøp i Spania",
    excerpt:
      "En praktisk guide til lån i Norge eller Spania, egenkapital, kjøpskostnader, valutarisiko, NIE, bankkonto, notar og betalingsflyt.",
    date: "2026-05-10",
    updated: "2026-09-15",
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
      "Du trenger normalt NIE for eiendomstransaksjonen. En spansk bankkonto er ofte praktisk, men behovet avhenger av bank, betalingsmåte og leverandører. Uavhengig advokat anbefales for kjøpers juridiske kontroll, mens notaren har en offentlig og upartisk rolle ved skjøtet.",
    ],
    sections: [
      {
        heading: "Finansieringsvalg: Norge, Spania eller egenkapital",
        body: [
          "Lån i Norge kan være enklere å forstå fordi språk, bankforhold og regelverk er kjent. Samtidig tar du valutarisiko dersom lånet er i norske kroner og boligen kjøpes i euro.",
          "Lån i Spania kan redusere valutarisiko på selve lånet, men prosessen kan være mer dokumenttung. Spanske banker vurderer blant annet inntekt, gjeld, eiendommen og kundens risikoprofil.",
        ],
        bullets: [
          "Norsk lån: kjent bank, men valutarisiko NOK/EUR.",
          "Spansk lån: euro-lån og lokal sikkerhet, men bankspesifikke vilkår og dokumentasjonskrav.",
          "Egenkapital: ingen lånekostnad, men binder kapital og krever god valutaplan.",
          "Sammenlign totalkostnad, ikke bare nominell rente.",
        ],
      },
      {
        heading: "Kjøpskostnader og valutarisiko",
        body: [
          "Kjøpskostnader kommer i tillegg til kjøpesummen og varierer etter region, boligtype, finansiering og hvilke profesjonelle tjenester du bruker. Be om en konkret kostnadsoppstilling for den boligen og transaksjonen du vurderer fremfor å basere budsjettet på én standardprosent.",
          "Valutarisiko er viktig for nordmenn. En endring i EUR/NOK mellom reservasjon og sluttbetaling kan utgjøre store beløp. Snakk med bank eller relevant fagperson om overføringsplan og valutarisiko dersom beløpet er stort.",
        ],
        bullets: [
          "Beregn ITP eller IVA/AJD avhengig av transaksjon og region.",
          "Legg inn advokat, notar, register, eventuelle bankkostnader og oversettelser.",
          "Planlegg når euro skal kjøpes, spesielt ved større betalinger.",
          "Bruk skriftlig betalingsplan og unngå hastige overføringer uten kontroll.",
        ],
      },
      {
        heading: "NIE, bankkonto og notar",
        body: [
          "NIE er utlendingens identifikasjonsnummer og brukes i eiendoms- og skatteprosessen. Det bør ordnes tidlig etter gjeldende prosedyre.",
          "En spansk bankkonto er ofte praktisk for betalinger og løpende kostnader, men er ikke det samme som et generelt lovkrav for alle kjøp. Notaren er en upartisk offentlig fagperson som formaliserer og kontrollerer sentrale sider ved skjøtet; notaren erstatter ikke kjøpers egen juridiske rådgiver.",
        ],
        bullets: [
          "Start NIE-prosessen tidlig; behandlingstid og dokumentkrav kan variere.",
          "Forbered pass og dokumentasjon banken eller myndighetene ber om.",
          "La advokat kontrollere kontrakter og betalingsflyt før notarmøtet.",
          "Sørg for at strøm, vann, forsikring og felleskostnader håndteres etter kjøp.",
        ],
      },
      {
        heading: "Dokumentasjon banken ofte ber om",
        body: [
          "Banken vil normalt be om dokumentasjon på inntekt, formue, gjeld og skatteforhold. Norske dokumenter kan måtte oversettes, og enkelte dokumenter kan kreve ytterligere formalia avhengig av bank og formål.",
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
      "Snakk med bank før visningstur hvis finansiering er nødvendig.",
      "Søk NIE så tidlig som praktisk mulig.",
      "Velg uavhengig spansk advokat før du binder deg til viktige kontraktsvilkår eller betalinger.",
      "Lag en betalings- og valutaplan for reservasjon, delbetalinger og sluttoppgjør.",
    ],
    faq: [
      {
        question: "Må jeg ha NIE for å kjøpe bolig i Spania?",
        answer:
          "NIE er normalt nødvendig for eiendomstransaksjonen og den tilhørende skatte- og registreringsprosessen. Det bør derfor ordnes tidlig.",
      },
      {
        question: "Kan jeg finansiere bolig i Spania med norsk lån?",
        answer:
          "Det kan være mulig, for eksempel med sikkerhet i Norge. Du må likevel håndtere valutarisiko og dokumentasjon knyttet til kjøpet i Spania. Banken vurderer din konkrete situasjon.",
      },
      {
        question: "Hvor mye bør jeg beregne i kjøpskostnader?",
        answer:
          "Det avhenger av region, bruktbolig eller nybygg, kjøpesum, finansiering og hvilke tjenester du bruker. Be om en konkret beregning av skatt, notar, register, advokat og øvrige kostnader for akkurat ditt kjøp.",
      },
    ],
  },
  {
    slug: "kjopsprosess-bolig-i-spania",
    title: "Kjøpsprosess for bolig i Spania",
    excerpt:
      "Steg-for-steg forklaring av hvordan kjøp av bolig i Spania fungerer for nordmenn: megler, reservasjon, advokat, notar og overtakelse.",
    date: "2026-05-10",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "10 min lesing",
    image: "/assets/magasin-covers/kjopsprosess.svg",
    imageAlt: "Illustrasjon av kjøpsprosessen for bolig i Spania fra søk til nøkkeloverlevering",
    seoTitle: "Kjøpsprosess for bolig i Spania | Steg-for-steg for nordmenn",
    seoDescription:
      "Forstå kjøpsprosessen i Spania: boligsøk, megler, tilbud, reservasjonskontrakt, advokat, notar, kostnader og overtakelse.",
    keywords: ["kjøpsprosess Spania", "kjøpe bolig i Spania", "reservasjonskontrakt Spania", "advokat boligkjøp Spania"],
    intro: [
      "Å kjøpe bolig i Spania som nordmann er annerledes enn å kjøpe bolig i Norge. Meglersystemet, reservasjonsavtaler, advokatrollen, notar og betalingsflyt fungerer på en annen måte.",
      "Denne guiden gir deg en praktisk oversikt fra første boligsøk til overtakelse, slik at du vet hvilke steg som kan inngå og hvilke beslutninger du bør ta underveis.",
    ],
    sections: [
      {
        heading: "Slik fungerer eiendomsmeglere i Spania",
        body: [
          "I Spania kan flere meglere ofte markedsføre samme bolig. Du bør derfor velge rådgiver eller megler ut fra hvem som gir deg best beslutningsgrunnlag og oppfølging – ikke bare hvem du først så annonsen hos.",
          "Det viktigste er ikke bare hvem som finner boligen, men hvem som hjelper deg å vurdere område, pris, dokumenter, risiko, forhandling og videre koordinering med uavhengige fagpersoner.",
        ],
        bullets: [
          "Flere meglere kan ha tilgang til samme bolig.",
          "Velg samarbeidspartner etter tillit, kunnskap og oppfølging.",
          "God kommunikasjon reduserer risikoen for misforståelser.",
          "Avklar på forhånd hvilke tjenester rådgiveren faktisk følger opp etter signering.",
        ],
      },
      {
        heading: "Kjøpsprosessen steg for steg",
        body: [
          "Prosessen starter med behovsavklaring, finansiering og områdevalg. Deretter kan den omfatte boligsøk, visninger, tilbud, reservasjon, juridisk kontroll, finansiering, notarsignering og registrering.",
          "Rekkefølge og tempo varierer med boligtype, selger, finansiering og dokumentasjon. Derfor bør finansiering, NIE, juridisk rådgiver og egne beslutningskriterier avklares tidlig.",
        ],
        bullets: [
          "1. Avklar budsjett, bruk, område og finansiering.",
          "2. Gjennomfør boligsøk og visninger med tydelige kriterier.",
          "3. Forhandle pris og vilkår skriftlig.",
          "4. Forstå reservasjons-/arrasvilkår og juridiske forbehold før betaling.",
          "5. La uavhengig advokat gjøre nødvendig juridisk kontroll.",
          "6. Formaliser overdragelsen og sørg for registrering og etterarbeid.",
        ],
      },
      {
        heading: "Reservasjonsavtale, arras og due diligence",
        body: [
          "Reservasjonsavtale og/eller arras brukes ofte, men struktur og konsekvenser varierer. En slik avtale kan være bindende, så du må forstå hva som skjer dersom kjøper eller selger trekker seg før du signerer eller betaler.",
          "Før endelig overtakelse bør advokaten kontrollere blant annet registeropplysninger, heftelser, relevante avgifter, tillatelser, felleskostnader og eventuelle avvik eller ulovlige endringer.",
        ],
        bullets: [
          "Ikke betal reservasjon uten å forstå betingelsene.",
          "Bruk uavhengig advokat som ivaretar kjøpers juridiske interesser.",
          "Kontroller panteheftelser, utestående kostnader og relevante tillatelser.",
          "Avklar overtakelsesdato, inventar og betalingsplan skriftlig.",
        ],
      },
      {
        heading: "Kostnader ved boligkjøp",
        body: [
          "Kjøper må regne med kostnader utover kjøpesum. Nivået varierer etter region, skatteregler, bruktbolig eller nybygg, finansiering og profesjonelle tjenester. Bruk en konkret kostnadsoppstilling for boligen fremfor én standardprosent.",
          "I tillegg kommer løpende kostnader som IBI, forsikring, fellesutgifter, strøm, vann, internett, vedlikehold og eventuell skatterapportering.",
        ],
        bullets: [
          "ITP eller IVA/AJD avhengig av transaksjon og region.",
          "Notar, eiendomsregister og juridisk bistand.",
          "Eventuelle bank-, takst- og lånekostnader.",
          "Årlige kostnader som IBI, forsikring og fellesutgifter.",
        ],
      },
      {
        heading: "Etter overtakelse",
        body: [
          "Når skjøtet er signert og overtakelsen gjennomført, starter den praktiske delen: strøm, vann, internett, forsikring, felleskostnader, nøkler, vedlikehold og eventuelt keyholding.",
          "Avklar hvem som følger opp registrering, skatt, leverandørbytter og andre praktiske oppgaver, slik at ansvar ikke faller mellom flere aktører.",
        ],
        bullets: [
          "Håndter strøm, vann og felleskostnader etter overtakelse.",
          "Tegn relevant boligforsikring og vurder alarm eller keyholding.",
          "Planlegg møbler, hvitevarer og eventuell utleie først når reglene er avklart.",
          "Sørg for at advokat eller annen relevant fagperson følger opp registrering og skatteforhold.",
        ],
      },
    ],
    nextSteps: [
      "Avklar finansiering og totalbudsjett.",
      "Velg område før du velger enkeltbolig.",
      "Engasjer uavhengig spansk advokat tidlig.",
      "Avklar hvem som koordinerer de praktiske stegene gjennom prosessen.",
    ],
    faq: [
      {
        question: "Hvor lang tid tar et boligkjøp i Spania?",
        answer:
          "Det finnes ingen sikker standardtid. Finansiering, dokumentasjon, juridisk kontroll, selgers situasjon, boligtype og avtalt overtakelse kan gjøre prosessen kortere eller betydelig lengre. Få en konkret tidsplan for ditt kjøp.",
      },
      {
        question: "Trenger jeg advokat når jeg kjøper bolig i Spania?",
        answer:
          "Uavhengig juridisk bistand anbefales sterkt. Advokaten kan kontrollere juridiske forhold, kontrakter, heftelser, avgifter og tillatelser før du fullfører kjøpet.",
      },
      {
        question: "Kan samme bolig selges av flere meglere?",
        answer:
          "Ja, det forekommer ofte. Velg derfor megler eller rådgiver ut fra prosess, informasjon og oppfølging – ikke bare hvem som har annonsen.",
      },
    ],
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
      "Hva kommer i tillegg til prisen på nybygg i Spania? Oversikt over 10 % IVA på ordinære nye boliger, regional AJD og øvrige kjøpskostnader.",
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
          "Generell AJD i Comunitat Valenciana: 1,5 % for relevante notarielle dokumenter, med mulige sær-/reduserte satser i bestemte tilfeller.",
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
    cta: { label: "Prøv Boligmatchen – finn prosjekter som passer budsjettet", href: "/#boligmatch" },
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
    cta: { label: "Bruk Boligmatchen for å finne aktuelle nybyggprosjekter", href: "/#boligmatch" },
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
    seoTitle: "Nybygg og villa i Finestrat | Norsk rådgiverguide | Zen Eco Homes",
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
    title: "Utleie av bolig i Spania: kan boligen tjene penger?",
    excerpt:
      "Skal boligen også leies ut? Slik vurderer du realistisk utleiepotensial, turistregler, sesong, kostnader og nettoresultat.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Guide",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/utleie-inntekt.svg",
    imageAlt: "Illustrasjon av utleiebolig, avkastning og inntektspotensial i Spania",
    seoTitle: "Utleie av bolig i Spania | Inntektspotensial og turistregler",
    seoDescription:
      "Kan boligen din i Spania leies ut? Guide til utleiepotensial, turistregler, sesong, kostnader og realistisk nettoresultat for norske kjøpere.",
    keywords: [
      "utleie bolig Spania",
      "turistlisens Spania",
      "leieinntekt Costa Blanca",
      "korttidsutleie Spania",
      "investering bolig Spania",
    ],
    intro: [
      "Mange nordmenn tenker: «Vi skal bruke boligen selv, men kanskje leie den ut litt.» Da er det viktig å vurdere utleiepotensial og lovlighet før du kjøper – ikke etterpå. To boliger som ser nesten like ut kan fungere svært forskjellig i leiemarkedet.",
      "Denne guiden hjelper deg å tenke realistisk rundt inntekt: hva som påvirker etterspørselen, hvilke regler som gjelder for den konkrete boligen, og hvordan du regner på netto etter kostnader.",
    ],
    sections: [
      {
        heading: "Hva påvirker leieinntekten?",
        body: [
          "Beliggenhet, gangavstand, boligtype, uteplass, standard, kapasitet, utsikt og målgruppe kan påvirke etterspørselen på ulike måter. Ingen enkeltfaktor kan brukes som en sikker regel for pris eller belegg.",
        ],
        bullets: [
          "Beliggenhet: avstand til strand, service, aktiviteter og transport.",
          "Sesong: etterspørselen varierer mellom områder og gjennom året.",
          "Boligtype og standard: fasiliteter kan påvirke attraktivitet, men må vurderes mot målgruppen.",
          "Kapasitet: antall soverom og senger påvirker hvilke gjester boligen passer for.",
          "Presentasjon og drift: pris, bilder, tilgjengelighet og respons kan påvirke bestillinger.",
        ],
      },
      {
        heading: "Turistutleie og regler i Comunitat Valenciana",
        body: [
          "I Comunitat Valenciana defineres en vivienda de uso turístico blant annet som en komplett bolig som tilbys med turistformål for 10 sammenhengende dager eller mindre til samme leietaker. Regimet krever blant annet gunstig kommunal kompatibilitetsrapport eller tilsvarende dokumentasjon, og registreringen i turistregisteret har fem års gyldighet. Kommuner kan også ha egne begrensninger.",
          "Reglene er regionale og endres. Sameieregler, kommunale krav og annen bolig-/utleielovgivning kan også påvirke hva som er lovlig. Bekreft derfor gjeldende status for akkurat boligen før du baserer kjøpet på korttidsutleie.",
        ],
      },
      {
        heading: "Regn på reelt nettoresultat",
        body: [
          "Brutto leieinntekt er ikke det samme som det du sitter igjen med. Trekk fra relevante fellesutgifter, forsikring, strøm/vann, vedlikehold, rengjøring, forvaltning/administrasjon, skatt og perioder uten leietaker før du vurderer resultatet.",
        ],
        bullets: [
          "Bruk realistiske scenarier for belegg – ikke full sesong hele året.",
          "Avklar skattebehandling for din eier- og utleiesituasjon.",
          "Ta med forvaltning/nøkkelhåndtering hvis du ikke er der selv.",
          "Sett av til vedlikehold og uforutsette kostnader.",
        ],
      },
      {
        heading: "Eget bruk vs. utleie – en ærlig avveining",
        body: [
          "En bolig som er perfekt for deg er ikke nødvendigvis optimal for en bestemt leiemålgruppe. Hvis du vil bruke boligen selv i periodene med høyest etterspørsel, må kalkylen ta hensyn til det. Bestem hvor viktig utleie faktisk er før du velger bolig og område.",
        ],
      },
    ],
    nextSteps: [
      "Avklar om utleie er et krav, et pluss eller uaktuelt – det styrer bolig- og områdevalg.",
      "Sjekk regional registrering, kommunal kompatibilitet og relevante sameieregler før du reserverer med korttidsutleie som premiss.",
      "Sett opp et realistisk regnestykke med belegg, kostnader og skatt.",
      "Vurder forvaltning/nøkkelhåndtering hvis du ikke bor der fast.",
    ],
    faq: [
      {
        question: "Må jeg registrere boligen for turistutleie i Comunitat Valenciana?",
        answer:
          "Hvis utleien faller inn under regimet for vivienda de uso turístico, gjelder turistregelverket med blant annet registrering og kommunal kompatibilitetsdokumentasjon. Per gjeldende definisjon gjelder dette blant annet turistutleie av komplett bolig i 10 sammenhengende dager eller mindre til samme leietaker. Bekreft alltid de aktuelle reglene for boligen og kommunen før utleie.",
      },
      {
        question: "Hvor mye kan jeg realistisk tjene på utleie?",
        answer:
          "Det avhenger av bolig, beliggenhet, målgruppe, sesong, lovlig utleiemodell, drift og belegg. Regn på netto etter alle relevante kostnader og skatt – ikke bare annonsert døgnpris.",
      },
      {
        question: "Bør jeg velge bolig ut fra eget bruk eller utleie?",
        answer:
          "Det bør avklares før kjøp. Skal utleie være en viktig del av regnestykket, må lovlighet, målgruppe og etterspørsel inngå i område- og boligvalget. Skal du mest bruke boligen selv, kan andre hensyn veie tyngre.",
      },
    ],
    cta: { label: "Prøv Boligmatchen – finn en bolig som passer bruken din", href: "/#boligmatch" },
  },
  {
    slug: "lopende-kostnader-eie-bolig-spania",
    title: "Løpende kostnader ved å eie bolig i Spania",
    excerpt:
      "Hva koster det å eie bolig i Spania hvert år? Oversikt over IBI, fellesutgifter, forsikring, strøm og vann, og skatteforhold for ikke-residenter.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "6 min lesing",
    image: "/assets/magasin-covers/kostnader-eie.svg",
    imageAlt: "Illustrasjon av løpende kostnader og regninger ved å eie bolig i Spania",
    seoTitle: "Løpende kostnader ved å eie bolig i Spania | IBI, comunidad og skatt",
    seoDescription:
      "Hva koster det årlig å eie bolig i Spania? Oversikt over IBI, fellesutgifter, forsikring, strøm, vann og skatteforhold for norske eiere.",
    keywords: [
      "løpende kostnader bolig Spania",
      "IBI eiendomsskatt Spania",
      "comunidad fellesutgifter Spania",
      "ikke-resident skatt Spania",
      "eie bolig Spania kostnader",
    ],
    intro: [
      "Selve kjøpet er én ting – men hva koster det å eie boligen år etter år? De løpende kostnadene varierer betydelig med bolig, kommune, fellesanlegg og bruk, så be om faktiske tall før du kjøper.",
      "Her er de vanligste kostnadskategoriene en norsk boligeier i Spania bør undersøke.",
    ],
    sections: [
      {
        heading: "De vanligste løpende kostnadene",
        body: [
          "Utgiftene kan betales årlig, kvartalsvis eller løpende. Størrelsen avhenger av bolig, kommune, forbruk og om boligen ligger i en urbanisasjon med fellesanlegg.",
        ],
        table: {
          caption: "Kategorier og typisk betalingsmønster. Faktiske beløp må hentes fra den konkrete boligen.",
          headers: ["Kostnad", "Hva er det?", "Typisk frekvens"],
          rows: [
            ["IBI", "Kommunal eiendomsskatt basert på skattemessig verdi etter gjeldende regler", "Årlig"],
            ["Comunidad", "Fellesutgifter i sameie/urbanisasjon", "Månedlig/kvartalsvis eller etter vedtekter"],
            ["Forsikring", "Bygning/innbo etter behov og avtale", "Vanligvis årlig"],
            ["Strøm og vann", "Forbruk og faste abonnementsledd", "Etter leverandør"],
            ["Basura/renovasjon", "Kommunal avfalls-/renovasjonsavgift der den ilegges", "Etter kommune"],
            ["Skatt for ikke-resident", "Skatteforpliktelser avhenger av bruk, utleie og skattemessig status", "Etter gjeldende regler"],
          ],
        },
      },
      {
        heading: "IBI og skattemessig verdi",
        body: [
          "IBI (Impuesto sobre Bienes Inmuebles) er kommunal eiendomsskatt. Beregningsgrunnlag og lokal sats gjør at to tilsynelatende like boliger i ulike kommuner kan ha ulik IBI. Be om siste faktiske IBI-kvittering for boligen.",
        ],
      },
      {
        heading: "Skatt for ikke-residenter",
        body: [
          "Eier du spansk eiendom uten å være skattemessig bosatt i Spania, kan du ha plikter etter reglene for ikke-residenter. Skattebehandlingen avhenger blant annet av egen bruk, utleie og eierstruktur. En kvalifisert skatterådgiver eller gestor bør bekrefte hva som gjelder for deg.",
        ],
      },
      {
        heading: "Slik unngår du overraskelser",
        body: [
          "Be om dokumentasjon på faktiske løpende kostnader for den konkrete boligen før du kjøper – særlig IBI, comunidad, forsikring og historisk forbruk der det er relevant. Da kan du bygge et realistisk årsbudsjett.",
        ],
      },
    ],
    nextSteps: [
      "Be om siste IBI og comunidad for den konkrete boligen.",
      "Sett opp et årsbudsjett før du reserverer.",
      "Avklar skatteforpliktelser og hvem som skal håndtere dem for deg.",
      "Vurder forsikring og eventuell nøkkelhåndtering hvis boligen står tom deler av året.",
    ],
    faq: [
      {
        question: "Hva er IBI i Spania?",
        answer:
          "IBI er den kommunale eiendomsskatten. Beløpet påvirkes av skattemessig verdi og kommunens sats. Be om den konkrete boligens siste IBI-kvittering fremfor å bruke et generelt estimat.",
      },
      {
        question: "Må jeg betale skatt i Spania selv om jeg ikke bor der?",
        answer:
          "Som eier kan du ha spanske skatteforpliktelser selv om du ikke er skattemessig bosatt i Spania. Det avhenger av eierskap, bruk og eventuell utleie. Få din situasjon bekreftet av kvalifisert fagperson.",
      },
      {
        question: "Hvor høye er fellesutgiftene (comunidad)?",
        answer:
          "Det varierer sterkt med sameiet/urbanisasjonen og hvilke fellesanlegg som finnes. Be alltid om faktiske tall, budsjett og gjerne informasjon om planlagte ekstraordinære innbetalinger før kjøp.",
      },
    ],
    cta: { label: "Se boliger og be om konkrete kostnadsopplysninger", href: "/eiendommer" },
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
      "Vurderer du innlandet i Alicante eller Murcia? Om livet rundt blant annet Biar, Pinoso, Villena og Jumilla, og hva du bør sjekke ved tomt, finca, vann, strøm og lovlighet før kjøp.",
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
    cta: { label: "Utforsk boliger og tomter i innlandet", href: "/inland" },
  },
  {
    slug: "flytte-til-spania-pensjonist",
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
      "Vurderer du å bo fast i Spania som pensjonist? Guide til opphold, helsetjenester, skatt og hva som skiller ferie fra å bosette seg.",
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
    cta: { label: "Ta en uforpliktende prat om bolig og område", href: "/#kontakt" },
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
    seoTitle: "Energieffektive nybygg i Spania | Energiklasse, isolasjon og solceller",
    seoDescription:
      "Sammenlign energiklasse, isolasjon, solceller og forventet energibruk når du vurderer nybygg eller eksisterende bolig i Spania.",
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
    title: "Juridiske fallgruver ved boligkjøp i Spania – og hvordan redusere risikoen",
    excerpt:
      "Heftelser, registreringsavvik, ulovlige tilbygg, tillatelser og bindende reservasjons-/arrasavtaler er blant forholdene som bør kontrolleres før boligkjøp i Spania.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/juridisk.svg",
    imageAlt: "Illustrasjon av juridiske fallgruver og kontroll ved boligkjøp i Spania",
    seoTitle: "Juridiske fallgruver ved boligkjøp i Spania | Sjekkliste for kjøpere",
    seoDescription:
      "Dette bør kontrolleres ved boligkjøp i Spania: heftelser, registreringsavvik, tilbygg, tillatelser og kontraktsvilkår. Guide for norske kjøpere.",
    keywords: [
      "juridiske fallgruver boligkjøp Spania",
      "advokat boligkjøp Spania",
      "ulovlig tilbygg Spania",
      "heftelser bolig Spania",
      "trygg boligkjøp Spania",
    ],
    intro: [
      "Et boligkjøp i Spania kan gjennomføres ryddig når dokumenter, rettigheter, tillatelser, kontrakter og betalingsflyt blir kontrollert i riktig rekkefølge. Risikoen varierer med boligtype og sak, så generelle sjekklister kan ikke erstatte konkret juridisk vurdering.",
      "Denne guiden forklarer noen typiske kontrollpunkter og hvorfor en uavhengig advokat kan være viktig før du binder deg. Dette er generell informasjon; advokaten vurderer den konkrete boligen og avtalen.",
    ],
    sections: [
      {
        heading: "Megler, notar og din egen advokat har ulike roller",
        body: [
          "En notar er en upartisk offentlig fagperson og har viktige kontroll- og informasjonsoppgaver ved offentlig skjøte. Notaren er likevel ikke kjøpers private advokat. En uavhengig advokat kan gjøre juridisk due diligence og gi råd ut fra kjøpers interesser før signering og betaling.",
        ],
      },
      {
        heading: "Vanlige kontrollpunkter",
        body: [
          "Hva som er viktigst varierer, men disse forholdene går ofte igjen i juridisk kontroll:",
        ],
        bullets: [
          "Registeropplysninger, pant, heftelser og relevante utestående krav.",
          "Tilbygg, basseng, terrasse eller andre endringer og hvordan de er registrert/godkjent.",
          "Tillatelser og dokumentasjon som er relevante for boligtypen og kommunen.",
          "Uoverensstemmelser mellom eiendomsregister, matrikkel/catastro og faktisk eiendom.",
          "Areal, tomtegrenser, adkomst og veirett – særlig på landeiendom.",
          "Reservasjons- og arrasavtaler med uklare eller ugunstige vilkår.",
        ],
      },
      {
        heading: "Reservasjon, arras og press",
        body: [
          "Et kjøp kan involvere reservasjonsavtale, arras eller andre private avtaler før offentlig skjøte, men strukturen er ikke lik i alle handler. Private avtaler kan være bindende. La advokaten kontrollere vilkår, konsekvenser og dokumentasjon før du signerer eller betaler.",
          "Ved nybygg under oppføring bør advokaten også kontrollere hvordan relevante forskuddsbetalinger skal sikres etter gjeldende regler og at betaling skjer til korrekt dokumentert konto.",
        ],
      },
      {
        heading: "Slik reduserer du risikoen",
        body: [
          "Nøkkelen er å kontrollere før du binder deg økonomisk og å bruke riktig fagperson til riktig oppgave.",
        ],
        bullets: [
          "Skaff nødvendige identifikasjonsopplysninger og engasjer uavhengig advokat tidlig.",
          "La advokaten kontrollere register, kontrakter, tillatelser og relevante heftelser.",
          "Betal bare til konto og mottaker som er dokumentert og kontrollert for transaksjonen.",
          "Ved kjøp under oppføring: kontroller garanti-/forsikringsordningen for forskuddsbetalinger der lovens regler gjelder.",
        ],
      },
    ],
    nextSteps: [
      "Engasjer en uavhengig spansk advokat før vesentlige betalinger eller bindende avtaler.",
      "Be om oppdaterte registeropplysninger og relevant kommunal/prosjektmessig dokumentasjon.",
      "Kontroller avvik, tilbygg, tomt og tillatelser etter boligtype.",
      "Les og forstå reservasjons-/arrasavtalen før signering.",
    ],
    faq: [
      {
        question: "Trenger jeg advokat når jeg allerede har megler og notar?",
        answer:
          "Notaren er upartisk og meglerens rolle avhenger av oppdraget. Ingen av delene er det samme som en uavhengig advokat som gir juridiske råd på dine vegne. Derfor anbefales egen juridisk kontroll før du binder deg.",
      },
      {
        question: "Hva bør advokaten kontrollere?",
        answer:
          "Det avhenger av boligen, men typiske punkter er eierforhold, heftelser, kontrakt, register-/matrikkelavvik, tillatelser, utestående kostnader og særskilte forhold ved nybygg eller landeiendom.",
      },
      {
        question: "Kan jeg miste reservasjonsgebyret?",
        answer:
          "Det avhenger av avtalen og situasjonen. Derfor bør konsekvensene ved tilbaketrekning, forbehold og tilbakebetaling være forstått før du betaler.",
      },
    ],
    cta: { label: "Les mer om en trygg kjøpsprosess", href: "/kjopsprosess/kjopsprosess-bolig-i-spania" },
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
    seoTitle: "Skatt ved salg av bolig i Spania | Gevinstskatt, plusvalía og 3 %-regelen",
    seoDescription:
      "Hva kan utløses av skatt ved salg av bolig i Spania? Guide til gevinstskatt, kommunal plusvalía og 3 %-tilbaketrekket for ikke-residenter.",
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
    cta: { label: "Ta en prat om langsiktig boligøkonomi", href: "/#kontakt" },
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
      "Hvordan håndteres arv og gave av spansk bolig? Om ISD, regionale forskjeller, testament og behovet for konkret rådgivning for norske eiere.",
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
    cta: { label: "Snakk med oss om hvem som kan hjelpe med langsiktig eierskap", href: "/#kontakt" },
  },
  {
    slug: "nie-skattenummer-spania",
    title: "NIE i Spania steg for steg",
    excerpt:
      "NIE er utlendingens identifikasjonsnummer og brukes blant annet ved eiendomstransaksjoner og skatt. Slik forbereder du prosessen – og hva nummeret ikke betyr.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "6 min lesing",
    image: "/assets/magasin-covers/nie-skattenummer.svg",
    imageAlt: "Illustrasjon av NIE og spansk identifikasjonsnummer",
    seoTitle: "NIE i Spania steg for steg | Utlendingens identifikasjonsnummer forklart",
    seoDescription:
      "Hva er NIE, og hvordan skaffer du det? Guide til identifikasjonsnummeret utlendinger bruker ved blant annet eiendom, skatt og administrative prosesser i Spania.",
    keywords: [
      "NIE Spania",
      "spansk skattenummer",
      "NIE nummer bolig Spania",
      "hvordan få NIE",
      "identifikasjonsnummer Spania",
    ],
    intro: [
      "NIE (Número de Identificación de Extranjero) er utlendingens identifikasjonsnummer i Spania. Det brukes i eiendoms- og skatteprosessen og i en rekke andre administrative sammenhenger. NIE er ikke det samme som å være resident eller skattemessig bosatt i Spania.",
      "Denne guiden forklarer hva NIE er og hvordan prosessen kan organiseres. Krav og fremgangsmåte kan endres, så kontroller aktuell prosedyre hos myndighetene eller med kvalifisert gestor/advokat.",
    ],
    sections: [
      {
        heading: "Hva NIE er – og ikke er",
        body: [
          "NIE er et personlig identifikasjonsnummer for utlendinger. Det er ikke i seg selv et bostedsbevis eller en skatteresidens. Nummeret brukes når du må identifiseres i ulike spanske administrative og økonomiske prosesser.",
        ],
      },
      {
        heading: "Slik kan NIE skaffes",
        body: [
          "Søknadssted, timebestilling, dokumentasjon og muligheten til å bruke fullmektig avhenger av gjeldende prosedyre og hvor du søker. Mange boligkjøpere får hjelp av advokat eller gestor; andre søker selv i Spania eller gjennom relevante spanske utenriksstasjoner der det tilbys.",
        ],
        bullets: [
          "Kontroller aktuell søknadsprosedyre før du bestiller reise eller time.",
          "Avklar om advokat/gestor kan bistå og hvilke fullmakter som i så fall kreves.",
          "Ha gyldig pass og dokumentasjon på formålet med søknaden etter gjeldende krav.",
          "Start tidlig dersom et boligkjøp nærmer seg, siden behandlingstid kan variere.",
        ],
      },
      {
        heading: "Hva du bruker NIE til",
        body: [
          "NIE brukes blant annet i forbindelse med eiendomstransaksjoner, skatt og mange kontrakts-/myndighetsprosesser. Banker, forsikringsselskaper og leverandører har egne dokumentkrav, så ikke anta at NIE alene er nok for alle tjenester.",
        ],
      },
      {
        heading: "Vanlige feil",
        body: [
          "En vanlig utfordring er å starte for sent eller anta at NIE og oppholdsregistrering er det samme. Avklar identifikasjonsnummer, oppholdsstatus, bank og kjøpsdokumentasjon som separate arbeidsstrømmer.",
        ],
      },
    ],
    nextSteps: [
      "Start NIE-prosessen i god tid når et kjøp blir konkret.",
      "Avklar med advokat/gestor om de kan bistå og hvilke dokumenter som kreves.",
      "Ha gyldig pass og nødvendig formålsdokumentasjon klar.",
      "Skill mellom NIE, oppholdsregistrering og skattemessig bosted.",
    ],
    faq: [
      {
        question: "Hva er NIE?",
        answer:
          "NIE er utlendingens identifikasjonsnummer i Spania. Det brukes i blant annet eiendoms- og skatteprosesser og en rekke andre administrative sammenhenger.",
      },
      {
        question: "Må jeg møte opp personlig for å få NIE?",
        answer:
          "Det avhenger av aktuell søknadsvei og fullmakt. Advokat/gestor kan i enkelte situasjoner bistå via fullmakt. Kontroller gjeldende prosedyre før du planlegger.",
      },
      {
        question: "Betyr NIE at jeg er bosatt i Spania?",
        answer:
          "Nei. NIE er et identifikasjonsnummer og er ikke i seg selv bevis på oppholdsregistrering eller skattemessig bosted.",
      },
    ],
    cta: { label: "Les mer om finansiering, notar og NIE", href: "/kjopsprosess/finansiering-notar-nie-boligkjop-spania" },
  },
  {
    slug: "spansk-bankkonto-valutaveksling",
    title: "Spansk bankkonto og valutaveksling for boligkjøpere",
    excerpt:
      "Er spansk bankkonto nødvendig for ditt kjøp? Slik planlegger du betalinger og sammenligner kostnaden ved veksling fra kroner til euro.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "6 min lesing",
    image: "/assets/magasin-covers/bankkonto-valuta.svg",
    imageAlt: "Illustrasjon av spansk bank og valutaveksling mellom euro og kroner",
    seoTitle: "Spansk bankkonto og valutaveksling | Guide for norske boligkjøpere",
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
    cta: { label: "Ta en prat om budsjett og betaling", href: "/#kontakt" },
  },
  {
    slug: "boliglan-spansk-bank-nordmenn",
    title: "Boliglån i spansk bank for nordmenn: slik fungerer det",
    excerpt:
      "Kan nordmenn få boliglån i Spania? Om bankens vurdering, belåningsgrad, takst og kostnadene ved å låne til bolig i Spania.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/boliglan-bank.svg",
    imageAlt: "Illustrasjon av bolig og spansk bank med boliglån",
    seoTitle: "Boliglån i spansk bank for nordmenn | Belåning, takst og kostnader",
    seoDescription:
      "Kan nordmenn få boliglån i Spania? Guide til bankens vurdering, belåningsgrad, takst og de vanligste lånekostnadene.",
    keywords: [
      "boliglån Spania nordmenn",
      "lån bolig Spania",
      "belåningsgrad ikke-resident Spania",
      "spansk bank boliglån",
      "finansiering bolig Spania",
    ],
    intro: [
      "Spanske banker kan gi boliglån til utenlandske kjøpere, men tilbudet avhenger av bank, skattemessig bosted, inntekt, gjeld, alder, eiendom og øvrig risikoprofil. Ikke bruk én standard belåningsprosent som budsjett før du har et konkret tilbud.",
      "Denne guiden forklarer hva banken typisk vurderer og hvordan kostnader ved boliglån fordeles etter spansk regelverk. Dette er generell informasjon, ikke finansiell rådgivning.",
    ],
    sections: [
      {
        heading: "Belåningsgrad for ikke-residenter",
        body: [
          "Bankene setter egne grenser for belåningsgrad og kan behandle residenter og ikke-residenter forskjellig. Lånebeløpet vurderes også mot bankens takst og kjøpesum. Be derfor om forhåndsvurdering og et konkret tilbud før du setter endelig boligbudsjett.",
        ],
      },
      {
        heading: "Hva banken ser på",
        body: [
          "Banken vurderer blant annet betjeningsevne, inntekt, eksisterende gjeld, alder, valuta, skattemessig bosted og eiendommen som sikkerhet. Dokumentkrav varierer mellom banker.",
        ],
        bullets: [
          "Inntekt og betjeningsevne.",
          "Eksisterende gjeld og forpliktelser.",
          "Dokumentasjon på skatt, inntekt, konti og formue etter bankens krav.",
          "NIE og bank-/kontooppsett avklares med den aktuelle banken.",
        ],
      },
      {
        heading: "Takst (tasación)",
        body: [
          "Eiendom som stilles som sikkerhet skal takseres etter reglene for boliglån. Etter Ley 5/2019 ligger takstkostnaden hos låntaker. Bankens beregning av lånet påvirkes av den vurderte verdien og bankens egne kredittregler.",
        ],
      },
      {
        heading: "Kostnader og vilkår",
        body: [
          "Ley 5/2019 fordeler flere kostnader ved selve boliglånet: taksten bæres av låntaker, mens långiver blant annet bærer gestoría, notarhonorar for låneskjøtet og registrering av pantesikkerheten. Andre gebyrer og renter må vurderes i det konkrete tilbudet.",
        ],
      },
    ],
    nextSteps: [
      "Be om finansieringsvurdering før du fastsetter endelig boligbudsjett.",
      "Avklar dokumentkrav, NIE og bankoppsett med aktuelle långivere.",
      "Innhent tilbud fra flere banker og sammenlign effektiv kostnad og vilkår.",
      "Husk at bankens takst og kredittvurdering kan påvirke lånebeløpet.",
    ],
    faq: [
      {
        question: "Kan nordmenn få boliglån i spansk bank?",
        answer:
          "Ja, det kan være mulig. Banken vurderer den enkelte søkeren, eiendommen og dokumentasjonen og setter egne vilkår og grenser for belåning.",
      },
      {
        question: "Hvor mye egenkapital trenger jeg?",
        answer:
          "Det kan ikke fastsettes med én prosent uten et konkret banktilbud. Egenkapitalbehovet avhenger av bankens belåningsgrad, takst/kjøpesum og kjøpskostnadene som ikke finansieres. Be om forhåndsvurdering før du bestemmer budsjett.",
      },
      {
        question: "Hvilke kostnader har et spansk boliglån?",
        answer:
          "Etter Ley 5/2019 bæres taksten av låntaker, mens långiver blant annet dekker gestoría, notarhonorar for låneskjøtet og registrering av pantesikkerheten. Rente, eventuelle gebyrer og øvrige vilkår fremgår av bankens tilbud.",
      },
    ],
    cta: { label: "Les mer om omkostninger ved kjøp", href: "/kjopsprosess/omkostninger-nybygg-spania" },
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
  "Advokat, bank, NIE og kontrakt koordineres med relevante fagpersoner.",
  "Overtakelse og oppfølging gjøres ryddig etter kjøpet.",
];
