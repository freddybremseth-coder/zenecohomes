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
    slug: "finansiere-bolig-i-spania",
    title: "Finansiere bolig i Spania: hvor mye kan du kjøpe for?",
    excerpt: "Egenkapital, boliglån i Norge eller Spania, valutarisiko og månedlig belastning. Slik lager du en trygg finansieringsplan før du reserverer bolig på Costa Blanca.",
    date: "2026-05-10",
    updated: "2026-10-10",
    category: "Kjøpsprosess",
    readingTime: "10 min lesing",
    image: "/assets/magasin-covers/finansiering.svg",
    imageAlt: "Finansieringsplan for boligkjøp i Spania med euro, lånevalg og totalbudsjett",
    seoTitle: "Finansiere bolig i Spania | Egenkapital, lån og budsjett",
    seoDescription: "Hvordan finansiere bolig i Spania? Se egenkapital, lån i Norge eller Spania, konkrete regneeksempler, valutarisiko og sjekkliste før reservasjon.",
    keywords: ["finansiere bolig i Spania", "egenkapital bolig Spania", "finansiering Costa Blanca", "låne til bolig i Spania", "budsjett boligkjøp Spania"],
    intro: [
      "Drømmen om en bolig på Costa Blanca begynner ofte med en pris i en boligannonse. Men den viktigste prisen er hva du faktisk må betale totalt, hvor stor del som må finansieres, og hvor mye økonomisk handlefrihet du har igjen etter overtakelsen.",
      "Det korte svaret er at du kan finansiere boligkjøp i Spania med egne midler, lån med sikkerhet i norsk eiendom, boliglån i spansk bank eller en kombinasjon. Det beste alternativet avhenger av sikkerhet, inntekt, valuta, lånekostnader og hvordan boligen skal brukes. Her får du en plan for å ta beslutningen i riktig rekkefølge – og lenker til detaljguidene der du trenger dem.",
    ],
    sections: [
      {
        heading: "Start med totalrammen – ikke annonsert boligpris",
        body: [
          "Har du 500 000 euro tilgjengelig totalt, kan du normalt ikke bruke hele beløpet på selve boligen. Skatt, notar, eiendomsregister, juridisk bistand og eventuelle bank- eller valutakostnader må også få plass. Nybygg og bruktbolig har ulike skatteregler, og satsene varierer etter region, eiendom og tidspunkt.",
          "Vår separate guide til kjøpskostnader har den detaljerte og oppdaterbare kostnadsoversikten med kalkulator. Denne finansieringsguiden handler i stedet om hvordan du setter sammen pengene, lånet og sikkerhetsmarginen.",
        ],
        bullets: [
          "Fastsett samlet ramme for kjøpesum, kjøpskostnader, tilvalg og nødvendige oppgraderinger.",
          "Trekk fra en buffer du ønsker å beholde etter kjøpet.",
          "Avklar hvor mye kontant egenkapital du har – og hvor mye som eventuelt er bundet i annen eiendom.",
          "Få en realistisk låneramme før du legger inn reservasjon eller signerer en bindende avtale.",
        ],
      },
      {
        heading: "Fire finansieringsmåter – med ulike fordeler og risiko",
        table: {
          headers: ["Modell", "Kan passe når", "Dette må du kontrollere"],
          rows: [
            ["Egne midler", "Du ønsker å kjøpe uten lån", "Likviditetsbuffer, valutakurs og kapitalbinding"],
            ["Lån med sikkerhet i Norge", "Du har ledig sikkerhet og tilgang til norsk finansiering", "Rentebetingelser, pant i norsk bolig og valutarisiko i kjøpet"],
            ["Spansk boliglån", "Du ønsker finansiering med pant i den spanske boligen", "Belåningsgrad, bankens takst, kredittvurdering, lånevilkår og finansieringsfrist"],
            ["Kombinasjon", "Du vil fordele egenkapital og lånebehov mellom kilder", "Samlet gjeldsbetjening, sikkerhet og samordnet betalingsplan"],
          ],
          caption: "Modellene er alternativer, ikke personlige låneanbefalinger. Endelige vilkår vurderes av bankene.",
        },
        body: [
          "Det viktigste skillet er ikke nødvendigvis Norge mot Spania. Det er om finansieringen passer din totale økonomi. Et lån med lav annonsert rente kan ha andre kostnader eller større risiko enn et alternativ med høyere nominell rente. Sammenlign tilbud ut fra faktisk samlet kostnad, løpetid, betingelser og valuta.",
          "For en konkret sammenligning av de to landene har vi en egen artikkel om lån i Norge eller Spania. Søknadsprosessen og bankenes krav behandles i detaljguiden om spansk boliglån.",
        ],
      },
      {
        heading: "Hvor mye egenkapital kan du trenge?",
        body: [
          "Ved spansk boligfinansiering er bankens belåningsgrad bare ett av flere forhold. Ikke-residenter kan i enkelte banker få finansiering opptil rundt 70 prosent, men dette er ingen generell rett eller et lånetilsagn. Banken vurderer inntekt, eksisterende gjeld, alder, boligtype og takst. Lånegrunnlaget kan bli lavere dersom bankens verdsettelse er lavere enn avtalt kjøpesum.",
          "I tillegg kommer kjøpskostnader som i mange tilfeller må betales av egne midler. Derfor er egenkapitalbehovet større enn bare den delen av boligprisen som banken ikke finansierer.",
        ],
      },
      {
        heading: "Eksempel: bolig til 400 000 euro med spansk finansiering",
        body: [
          "Anta en ordinær bruktbolig på Costa Blanca med avtalt kjøpesum 400 000 euro. For å vise mekanikken legger vi inn et hypotetisk boliglån på 70 prosent av kjøpesummen og illustrative øvrige kjøpskostnader på 42 000 euro. Beløpet for kjøpskostnader er kun et eksempel – bruk den oppdaterte kostnadskalkulatoren og dokumenterte tilbud for riktig resultat.",
        ],
        table: {
          headers: ["Post", "Illustrativt beløp"],
          rows: [
            ["Kjøpesum", "400 000 €"],
            ["Mulig banklån, antatt 70 %", "280 000 €"],
            ["Kontantandel av kjøpesummen", "120 000 €"],
            ["Antatte kjøpskostnader", "42 000 €"],
            ["Egne midler før ekstra buffer", "162 000 €"],
            ["Eksempel på separat reserve", "15 000 €"],
            ["Samlet tilgjengelig likviditet i dette scenariet", "177 000 €"],
          ],
          caption: "Pedagogisk regneeksempel, ikke et banktilbud. En lavere takst, lavere innvilget lånegrad eller andre kostnader øker kapitalbehovet.",
        },
        body: [
          "En kjøper som bare har 120 000 euro tilgjengelig, har altså ikke nødvendigvis nok egenkapital selv om banken vurderer et lån på 70 prosent. Skattene og kjøpskostnadene kommer i tillegg, og finansieringen bør tåle uventede utgifter.",
        ],
      },
      {
        heading: "Hva tåler månedsøkonomien?",
        body: [
          "Et lånetilsagn er ikke det samme som et komfortabelt privatbudsjett. Undersøk rente, løpetid, terminbeløp, lånets samlede kostnad, forsikringer som er knyttet til rentebetingelser, og hva som skjer hvis renten stiger eller inntekten endrer seg.",
          "Legg boligdrift som comunidad, IBI, forsikring, strøm, vedlikehold og reiser til Spania oppå lånekostnadene. Dersom planen er å leie ut boligen, bør usikre leieinntekter vurderes separat og konservativt – ikke brukes til å skjule svak løpende betalingsevne.",
        ],
        bullets: [
          "Lag et normalbudsjett uten antatt utleieinntekt.",
          "Lag et stresstestbudsjett med høyere renter og økte driftskostnader.",
          "Se på total gjeld i Norge og Spania, ikke bare lånet til denne boligen.",
          "Hold rom for ferier, familie, uforutsette kostnader og vedlikehold.",
        ],
      },
      {
        heading: "Valuta: når økonomien din er i kroner og kjøpet er i euro",
        body: [
          "Kjøpesummen og spanske kjøpskostnader betales i euro. Hvis sparepengene eller inntekten er i norske kroner, kan valutakursen endre hvor mye kjøpet reelt koster deg. Den samme usikkerheten kan også påvirke fremtidige terminbetalinger dersom lånet løper i euro og inntekten er i kroner.",
          "Be om dokumentert kurs og totalkostnad ved overføring. Sammenlign eurobeløpet du faktisk mottar, planlegg betalingsfristene med banken og la advokaten verifisere oppgjørsinstruksjonene. Praktiske detaljer om spansk bankkonto, valutaveksling og dokumentasjon er samlet i den egne bank- og valutaguiden.",
        ],
      },
      {
        heading: "Når må finansieringen være på plass?",
        body: [
          "En god finansieringsplan følger kjøpsprosessen. Før visning vet du hva du kan kjøpe for. Før reservasjon vet du hvilke betingelser som må være oppfylt. Før privat kjøpekontrakt avklarer du fristene med advokaten. Før notar og overtakelse er betalingsmåte, midler og bankens dokumenter bekreftet.",
          "Særlig ved boliglån i Spania kan bankens kredittvurdering, takst og påkrevde dokument- og gjennomgangstrinn påvirke tidsplanen. Ikke anta at et uformelt signal fra banken betyr endelig finansiering. Be advokaten vurdere om kontrakten trenger en uttrykkelig finansieringsbetingelse, og hva konsekvensen blir om banken avslår lånet.",
        ],
      },
      {
        heading: "NIE, bankkonto, advokat og notar: hva har de med finansiering å gjøre?",
        body: [
          "NIE er et identifikasjonsnummer som normalt trengs ved eiendomshandelen og den tilhørende skatte- og registreringsprosessen. En spansk konto er ofte praktisk, og noen låne- eller betalingsløsninger kan kreve den, men den er ikke automatisk lovpålagt for alle kjøp.",
          "Kjøpers uavhengige advokat bør kontrollere kontrakter, eiendomsdokumentasjon og oppgjøret. Notaren er en upartisk offentlig fagperson som formaliserer skjøtet og kontrollerer sentrale lovpålagte forhold. Dette er støttefunksjoner i kjøpet – ikke alternativer til en ordentlig finansieringsplan.",
        ],
      },
      {
        heading: "Hva vi kan hjelpe deg å avklare før du velger bolig",
        body: [
          "Vi hjelper deg å koble ønsket boligtype og område til en realistisk kjøpsramme, slik at du kan filtrere boligene ut fra hva som faktisk er økonomisk mulig. Vi kan også synliggjøre spørsmål du bør ta med til bank og advokat, og hjelpe deg å planlegge en ryddig kjøpsprosess.",
          "ZenEcoHomes er eiendomsrådgiver, ikke bank eller uavhengig finansrådgiver. Lånevilkår, skattemessige forhold og juridiske konsekvenser må bekreftes av kvalifiserte fagpersoner. Et godt boligkjøp begynner med en finansieringsplan som tåler virkeligheten.",
        ],
      },
    ],
    nextSteps: [
      "Sett opp total kjøpsramme med boligpris, kjøpskostnader og likviditetsreserve.",
      "Undersøk egne midler og få skriftlig vurdering av mulig låneramme.",
      "Sammenlign norsk og spansk lånefinansiering på totalkostnad og risiko.",
      "Bruk kostnadskalkulatoren for å beregne riktig maksimal kjøpesum.",
      "Avklar valuta, bankkonto, NIE og betalingstidsplan før kontraktsfrister blir kritiske.",
      "La uavhengig advokat kontrollere eventuelle finansieringsforbehold før reservasjon.",
    ],
    faq: [
      { question: "Hvordan kan nordmenn finansiere bolig i Spania?", answer: "Vanlige løsninger er egne midler, lån med sikkerhet i norsk eiendom, boliglån i spansk bank eller en kombinasjon. Valget avhenger av egenkapital, gjeld, inntekt, sikkerhet, valuta og bankenes individuelle kredittvurdering." },
      { question: "Hvor mye egenkapital trenger jeg for å kjøpe bolig i Spania?", answer: "Det avhenger av finansieringsmodellen og kjøpskostnadene. Ved spansk finansiering kan ikke-residenter i noen tilfeller få lån opptil rundt 70 prosent av bankens finansieringsgrunnlag, men banken kan tilby mindre. Skatter og andre kjøpskostnader må normalt dekkes i tillegg." },
      { question: "Er det best å låne i Norge eller Spania?", answer: "Ingen løsning er best for alle. Sammenlign sikkerhet, rente, effektiv kostnad, valuta, løpetid, eksisterende gjeld og egen betalingsevne. Et norsk lån kan stille krav om pant i norsk eiendom, mens et spansk lån normalt bruker den spanske boligen som sikkerhet." },
      { question: "Kan jeg reservere boligen før jeg har fått endelig lån?", answer: "Det kan være mulig, men innebærer risiko. Avklar med uavhengig advokat om avtalen har et reelt finansieringsforbehold, frister og konsekvensene dersom banken avslår søknaden." },
      { question: "Må jeg ha NIE og spansk bankkonto?", answer: "NIE er normalt nødvendig for eiendomskjøpet. Spansk bankkonto er ofte praktisk, og kan være nødvendig etter konkrete bank- eller betalingskrav, men er ikke et generelt lovkrav i alle boligkjøp." },
      { question: "Hvor ser jeg skatter og kjøpskostnader?", answer: "Bruk vår egen guide om kostnader ved boligkjøp i Spania, med kalkulator. Der behandles ITP, IVA, AJD og øvrige kjøpskostnader, slik at denne finansieringsguiden kan konsentrere seg om lånevalg, likviditet og risiko." },
    ],
    cta: { label: "Få hjelp til å finne bolig innenfor din økonomiske ramme", href: "/booking" },
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
    seoTitle: "Kostnader ved bolig i Spania | IBI, comunidad og skatt",
    seoDescription:
      "Hva koster det årlig å eie bolig i Spania? Se IBI, fellesutgifter, forsikring, strøm, vann og skatteforhold som norske boligeiere bør planlegge for.",
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
    title: "Juridiske fallgruver ved boligkjøp i Spania – og hvordan redusere risikoen",
    excerpt:
      "Heftelser, registreringsavvik, ulovlige tilbygg, tillatelser og bindende reservasjons-/arrasavtaler er blant forholdene som bør kontrolleres før boligkjøp i Spania.",
    date: "2026-09-08",
    updated: "2026-09-15",
    category: "Kjøpsprosess",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/juridisk.svg",
    imageAlt: "Illustrasjon av juridiske fallgruver og kontroll ved boligkjøp i Spania",
    seoTitle: "Juridiske fallgruver ved boligkjøp i Spania | Guide",
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
    cta: { label: "Les mer om en trygg kjøpsprosess", href: "/guide/kjope-bolig-i-spania" },
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
    seoTitle: "NIE i Spania | Slik søker du steg for steg | Guide 2026",
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
    cta: { label: "Les mer om finansiering, notar og NIE", href: "/guide/finansiering-notar-nie-boligkjop-spania" },
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
    updated: "2026-10-07",
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
          "For mange nordmenn er det reelle valget ikke bare mellom to spanske banker, men mellom å låne i Norge eller å ta boliglån i Spania. Begge løsninger kan være gode, og jeg synes det blir for enkelt å velge ut fra hvilken rente som ser lavest ut akkurat i dag.",
          "Med et spansk boliglån er boligen og lånet normalt i samme valuta. Det gir en naturlig kobling mellom eiendommen i euro og gjelden i euro. Har du fortsatt inntekten din i norske kroner, har du likevel ikke fjernet valutarisikoen. Du må kjøpe euro for å betale lånet, og en svakere norsk krone kan derfor gjøre et uendret spansk lån dyrere målt i NOK.",
          "Har du betydelig egenkapital i norsk bolig, kan norsk finansiering være enklere. Banken kjenner økonomien din, språk og dokumentasjon er mer kjent, og prosessen kan oppleves enklere. På den andre siden belåner du da norske verdier for å kjøpe en eiendel i euro. Det bedre spørsmålet er derfor ikke bare «hvor er renten lavest?», men hvilken finansieringsstruktur som passer økonomien din best over de neste 10–20 årene.",
        ],
        table: {
          headers: ["", "Spansk boliglån", "Norsk finansiering"],
          rows: [
            ["Sikkerhet", "Vanligvis boligen i Spania", "Ofte norsk bolig eller formue"],
            ["Lånevaluta", "Vanligvis EUR", "Vanligvis NOK"],
            ["Bankens kjennskap til deg", "Må dokumenteres", "Ofte eksisterende kundeforhold"],
            ["Dokumentasjon", "Kan være omfattende", "Ofte enklere"],
            ["Valutarisiko", "Bolig og lån i EUR, men inntekt kan være i NOK", "Lån i NOK, bolig i EUR"],
            ["Prosess", "Spansk bank, takst og notar", "Mer kjent norsk bankprosess"],
          ],
        },
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
