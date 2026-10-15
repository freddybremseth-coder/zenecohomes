import { articles as baseArticles, type Article } from "./content";
import { corporateArticles } from "./corporate-content";

export const LEGACY_MARKET_COMPARISON_SLUGS = new Set([
  "costa-blanca-nord-500000-euro-hva-kjope-na",
  "benidorm-villa-456000-vs-516000",
  "finestrat-villa-650000-700000-735000",
  "villajoyosa-275000-vs-375000",
  "costa-blanca-nord-under-300000-tre-kjop",
  "600000-euro-benidorm-polop-finestrat",
  "finestrat-430000-leilighet-eller-bungalow",
  "finestrat-rundt-700000-114-155-314-m2",
  "finestrat-735000-vs-735950",
]);


export const extraArticles: Article[] = [
  {
    slug: "boligmarkedet-costa-blanca-hosten-2026",
    title: "Boligmarkedet på Costa Blanca høsten 2026: Prisene stiger – men kronen hjelper norske kjøpere",
    excerpt:
      "Prisene i Spania stiger fortsatt, men utviklingen varierer mye lokalt. Her ser vi på Costa Blanca, utenlandske kjøpere, renter og hva kronekursen betyr for norske kjøpere.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Marked",
    readingTime: "8 min lesing",
    image: "/assets/areas.jpg",
    imageAlt: "Boliger og kystlandskap på Costa Blanca i Spania",
    seoTitle: "Boligmarkedet på Costa Blanca høsten 2026: priser og krone",
    seoDescription:
      "Prisene i Spania stiger fortsatt. Se utviklingen på Costa Blanca, hvem som kjøper, rentene i euro og Norge og hva sterkere krone betyr for norske kjøpere.",
    keywords: [
      "boligmarked Costa Blanca 2026",
      "boligpriser Spania",
      "boligpriser Benidorm",
      "boligpriser Finestrat",
      "boligpriser Villajoyosa",
      "norsk krone euro bolig Spania",
      "rente Spania bolig",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Det spanske boligmarkedet går inn i høsten 2026 med fortsatt høy prisvekst, samtidig som bildet er mer sammensatt lokalt enn de nasjonale overskriftene kan gi inntrykk av. For norske kjøpere er det dessuten ikke bare boligprisen i euro som teller. Renter og kronekurs påvirker den reelle kostnaden betydelig.",
      "Tallene nedenfor bør derfor leses som markedsindikatorer, ikke som en prisliste for den enkelte bolig. Beliggenhet, standard, utsikt, byggeår, prosjektfase og mikroområde kan gi store utslag innen samme kommune.",
    ],
    sections: [
      {
        heading: "Spanske boligpriser fortsetter opp",
        body: [
          "Det offisielle boligprisindekset fra INE viste en årsvekst på 12,2 prosent i andre kvartal 2026. Bruktboliger steg 12,9 prosent, mens nybygg steg 7,4 prosent. Fra første til andre kvartal steg den samlede indeksen 3,4 prosent.",
          "Det betyr ikke at alle områder eller boligtyper har hatt samme utvikling. For en kjøper på Costa Blanca er lokale prisdata langt mer nyttige når budsjettet skal vurderes.",
        ],
      },
      {
        heading: "Store forskjeller på Costa Blanca",
        body: [
          "Idealistas prisstatistikk for august 2026 viser tydelige forskjeller mellom kommunene. Benidorm lå på rundt 3.807 euro per kvadratmeter, opp 12,6 prosent fra året før. Villajoyosa lå på 3.072 euro, opp 12,2 prosent. Alfaz del Pi lå på 3.128 euro, opp 11,2 prosent.",
          "Finestrat lå på 3.328 euro per kvadratmeter, med 3,8 prosent årsvekst, mens Altea lå på 3.486 euro og 2,5 prosent årsvekst. Det viser hvorfor en generell påstand om at «Costa Blanca stiger med X prosent» blir for grov.",
        ],
        bullets: [
          "Benidorm: ca. €3.807/m² · +12,6 % siste år.",
          "Finestrat: ca. €3.328/m² · +3,8 % siste år.",
          "Villajoyosa: ca. €3.072/m² · +12,2 % siste år.",
          "Altea: ca. €3.486/m² · +2,5 % siste år.",
          "Alfaz del Pi: ca. €3.128/m² · +11,2 % siste år.",
        ],
      },
      {
        heading: "Hvem kjøper?",
        body: [
          "Alicante-provinsen er fortsatt et av de spanske markedene med høyest andel utenlandske boligkjøpere. Det bidrar til at etterspørselen i mange kystområder ikke bare styres av spansk økonomi eller norske kjøpere.",
          "For nordmenn betyr det at konkurransen om attraktive boliger ofte kommer fra flere europeiske markeder samtidig. Det er særlig relevant for nybygg, boliger nær sjøen og eiendommer med gode kvaliteter som skiller seg ut.",
        ],
      },
      {
        heading: "Euro-renten har også gått opp",
        body: [
          "Den europeiske sentralbanken hevet i september sine tre styringsrenter med 0,25 prosentpoeng. Innskuddsrenten ble satt til 2,50 prosent fra 16. september 2026.",
          "For boligkjøpere som finansierer i euro betyr det at lånekostnaden fortsatt må regnes nøye på. Den faktiske boliglånsrenten avhenger av bank, belåningsgrad, kundens økonomi og om lånet er fast eller flytende.",
        ],
      },
      {
        heading: "Norges Bank: styringsrenten er 4,50 prosent",
        body: [
          "Norges Bank hevet styringsrenten fra 4,25 til 4,50 prosent i september. For nordmenn som finansierer kjøpet gjennom norsk økonomi eller vurderer hvor mye kapital som skal bindes i Spania, er dette en viktig del av regnestykket.",
          "Høyere norsk rente kan dempe kjøpekraften, men samtidig har kronekursen utviklet seg gunstigere for norske eurokjøpere enn på de svakeste nivåene.",
        ],
      },
      {
        heading: "Kronekursen kan bety hundretusener",
        body: [
          "For en norsk kjøper er valutakursen i praksis en del av boligprisen. Når én euro blir billigere målt i kroner, faller den norske kostnaden selv om boligprisen i euro står stille.",
          "Som illustrasjon: en endring fra rundt 11,79 til 10,87 kroner per euro reduserer kronebeløpet på et kjøp til 500.000 euro med omtrent 460.000 kroner. På 700.000 euro er forskjellen rundt 640.000 kroner. Valuta kan derfor være like viktig som noen prosent prisendring på selve boligen.",
        ],
      },
      {
        heading: "Hva betyr dette for en kjøper høsten 2026?",
        body: [
          "Markedet er ikke et sted der én konklusjon passer alle. Prisene er høye og har steget kraftig i flere områder, men lokale forskjeller er store. Samtidig kan en sterkere norsk krone delvis kompensere for prisveksten for kjøpere som kommer med norske kroner.",
          "Det viktigste er derfor å regne på den konkrete boligen i både euro og kroner, sammenligne med relevante alternativer i samme mikroområde og kontrollere at pris, tilgjengelighet og prosjektfase faktisk er oppdatert.",
        ],
        bullets: [
          "Sammenlign lokale priser, ikke bare nasjonale gjennomsnitt.",
          "Regn totalbudsjettet både i euro og norske kroner.",
          "Legg inn rente, kjøpskostnader og eventuell valutarisiko.",
          "Kontroller reell tilgjengelighet før du planlegger visning.",
          "Vurder området og videresalgsmarkedet sammen med selve boligen.",
        ],
      },
    ],
    nextSteps: [
      "Se boliger som faktisk er tilgjengelige nå.",
      "Sammenlign Benidorm, Finestrat, Villajoyosa, Altea og Alfaz del Pi ut fra ditt budsjett.",
      "Regn kjøpesummen i både euro og NOK før du bestemmer prisrammen.",
      "Book en boligprat hvis du ønsker en konkret shortlist basert på område, bruk og budsjett.",
    ],
    faq: [
      {
        question: "Stiger boligprisene fortsatt i Spania i 2026?",
        answer:
          "Ja. INEs boligprisindeks viste 12,2 prosent årsvekst i andre kvartal 2026, men lokale markeder utvikler seg ulikt og bør vurderes separat.",
      },
      {
        question: "Er Costa Blanca like dyrt overalt?",
        answer:
          "Nei. Prisnivå og årsvekst varierer betydelig mellom kommuner og mikroområder. Benidorm, Finestrat, Villajoyosa, Altea og Alfaz del Pi viser tydelig forskjellige nivåer og vekstrater.",
      },
      {
        question: "Hvor viktig er kronekursen ved boligkjøp i Spania?",
        answer:
          "Svært viktig for kjøpere med norsk kapital. Selv en moderat endring i EUR/NOK kan flytte den reelle kjøpesummen med flere hundre tusen kroner på en bolig til 500.000–700.000 euro.",
      },
    ],
    cta: { label: "Se boliger til salgs", href: "/eiendommer" },
  },
  {
    slug: "det-du-ikke-ser-i-boligannonsen",
    title: "Det du ikke ser i boligannonsen i Spania – 7 ting å sjekke",
    excerpt: "Bilder og kartplassering forteller ikke hele historien. Her er sju forhold jeg undersøker før jeg anbefaler en bolig på Costa Blanca.",
    date: "2026-09-29",
    updated: "2026-10-15",
    category: "Rådgivning",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/omradet-for-boligen.svg",
    imageAlt: "Illustrasjon av bolig og nærområde på Costa Blanca, med kyst, bebyggelse og fjell",
    seoTitle: "Boligannonse i Spania: 7 ting å sjekke før visning",
    seoDescription: "Hva viser ikke en boligannonse i Spania? Sjekk støy, avstand, solforhold, utsikt, utgifter og området på Costa Blanca før du bestiller visning.",
    keywords: [
      "boligannonse Spania",
      "hva sjekke før boligkjøp i Spania",
      "områdevalg Costa Blanca",
      "boligvisning Spania",
      "boligkjøp Costa Blanca"
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "En boligannonse i Spania viser gjerne pris, bilder, størrelse og fasiliteter. Den forteller sjelden nok om støy, faktiske gangavstander, solforhold gjennom året, byggeplaner rundt boligen eller kostnadene som kommer i tillegg. Det er ofte disse forholdene som avgjør om boligen passer deg.",
      "Når noen sender meg en annonse og spør hva jeg synes, begynner jeg derfor med adressen og hverdagen rundt boligen. Et fint kjøkken kan du endre. Beliggenheten kan du ikke flytte. Her er sju ting jeg mener du bør undersøke før du bestemmer deg for en visning."
    ],
    sections: [
      {
        heading: "Hva forteller ikke en boligannonse om hverdagen?",
        body: [
          "En boligannonse er en presentasjon av det selger ønsker å fremheve, ikke en fullstendig vurdering av hverdagen du får. Det betyr ikke at annonsen er feil. Det betyr at viktige spørsmål ofte står ubesvart.",
          "Jeg ville særlig undersøkt disse sju forholdene før jeg satte en bolig på kortlisten:"
        ],
        bullets: [
          "Adkomst: faktiske gangruter, bakker, fortau og hvor ofte du må bruke bil.",
          "Helårsliv: tjenester som er tilgjengelige også utenfor feriesesongen.",
          "Sol og vind: orientering, skygge og når uteplassen er behagelig å bruke.",
          "Støy og innsyn: trafikk, nabobygg, aktivitet og privatliv.",
          "Utsikt og omgivelser: hva som ligger utenfor bildene, og hva som kan endre seg.",
          "Løpende utgifter: sameie, kommunale avgifter, forsikring og vedlikehold.",
          "Dokumentasjon: hva som er registrert, godkjent og inkludert i kjøpet."
        ]
      },
      {
        heading: "Hvorfor velge område før bolig på Costa Blanca?",
        body: [
          "Området bør komme først fordi det bestemmer hvordan du faktisk kommer til å bruke boligen. En leilighet med havutsikt er ikke nødvendigvis riktig for den som vil gå til butikker og restauranter hver dag. En bolig med større tomt kan på sin side passe den som prioriterer privatliv.",
          "På Costa Blanca kan to boliger med samme pris og omtrent samme størrelse gi svært ulike hverdager. En sentrumsnær leilighet i Benidorm eller Albir og en bolig høyt oppe i Finestrat er ikke automatisk sammenlignbare. Det er den konkrete adressen som avgjør, ikke kommunenavnet.",
          "Start med tre spørsmål: Hvor mange måneder i året vil du være her? Hva ønsker du å gjøre uten bil? Hvilke kompromisser kan du leve med? Bruk deretter [[områdeoversikten for Costa Blanca|/omrader]] til å velge aktuelle steder."
        ]
      },
      {
        heading: "Er «kort vei til stranden» det samme som gangavstand?",
        body: [
          "Nei. Oppgitt avstand viser ikke nødvendigvis hvor enkel turen er til fots. Luftlinje og gangrute kan være forskjellige, og stigning, store veier og manglende fortau betyr ofte mer enn kilometertallet.",
          "En kort avstand på kartet kan oppleves lang når du skal opp en bakke med handleposer eller barnevogn. Sjekk derfor både veien ned til stranden og veien hjem igjen."
        ],
        bullets: [
          "Bruk kartets gangrute, ikke bare avstand i luftlinje.",
          "Se etter bakker, trapper, veikryss og sammenhengende fortau.",
          "Kontroller veien til dagligvare, apotek, sentrum og kollektivtransport.",
          "Vurder parkering og biladkomst også i sommermånedene."
        ]
      },
      {
        heading: "Hvordan fungerer området i januar, ikke bare i juli?",
        body: [
          "Et område som er livlig om sommeren, kan være betydelig roligere utenfor høysesongen. Hvis du vil bruke boligen mye gjennom året, bør du sjekke hvilke butikker, restauranter og tjenester som faktisk er tilgjengelige når feriegjestene har reist.",
          "Vinterro er ikke en ulempe i seg selv. For noen er den hele poenget. Men du bør vite om ønsket om helårsliv betyr at du trenger bil til det meste.",
          "Se etter faste åpningstider, kollektivtilbud og hvor mye aktivitet området har året rundt. Om mulig bør du besøke det på en vanlig ukedag utenfor høysesongen."
        ]
      },
      {
        heading: "Kan sol, støy, innsyn og havutsikt være annerledes enn på bildene?",
        body: [
          "Ja. Et bilde viser én vinkel på ett tidspunkt. Det dokumenterer ikke hvor lenge terrassen har sol, hva du hører med åpne vinduer, om naboene ser rett inn, eller hva som kan skje med ubebygde arealer rundt boligen.",
          "Se om mulig boligen fra flere vinkler og på ulike tider av dagen. Ved spørsmål om mulig utbygging bør relevant kommunal planinformasjon undersøkes. Ingen kan garantere at omgivelsene aldri endres."
        ],
        bullets: [
          "Sol: Hvilken retning vender terrassen mot, og hva skygger for den?",
          "Støy: Ligger det trafikk, utesteder, lekeområder eller tekniske anlegg nær?",
          "Innsyn: Kan naboer se direkte inn på balkong, terrasse eller i stue?",
          "Utsikt: Stammer bildene fra akkurat den boligen og etasjen du vurderer?",
          "Planer: Finnes det relevant regulering eller kjente byggesaker i nærheten?"
        ]
      },
      {
        heading: "Hvilke kostnader og dokumenter ser du ikke i annonsen?",
        body: [
          "Kjøpesummen er ikke det samme som kostnaden ved å eie boligen. Felleskostnader, kommunal eiendomsskatt (IBI), forsikring, strøm, vann og vedlikehold varierer med bolig og bruk. Be om dokumentasjon fremfor bare et muntlig anslag.",
          "At parkering, bod, terrasse eller tilbygg vises på bilder, betyr heller ikke alene at alt er registrert og juridisk inkludert i kjøpet slik du forventer.",
          "Før bindende avtaler bør en uavhengig advokat kontrollere eierskap, heftelser, dokumentasjon og relevante tillatelser. Les om [[juridiske fallgruver ved boligkjøp|/guide/juridiske-fallgruver-boligkjop-spania]] og [[løpende kostnader ved å eie bolig i Spania|/guide/lopende-kostnader-eie-bolig-spania]]."
        ]
      },
      {
        heading: "Hvordan sammenligne to boliger som ser like gode ut?",
        body: [
          "Sammenlign boligene ut fra det annonsen ikke dokumenterer, ikke bare pris, bilder og antall soverom. Da ser du hvilke kompromisser du faktisk velger mellom.",
          "Bruk spørsmålene under som en enkel kontroll før visning:"
        ],
        table: {
          headers: [
            "Annonsen sier",
            "Kontroller",
            "Hvorfor"
          ],
          rows: [
            [
              "«Kort vei til strand»",
              "Gangrute, bakker og fortau",
              "Avgjør om bilen blir nødvendig i hverdagen."
            ],
            [
              "«Solrik terrasse»",
              "Himmelretning, naboskygge og årstid",
              "Påvirker når uteplassen kan brukes."
            ],
            [
              "«Rolig beliggenhet»",
              "Trafikk og aktivitet på ulike tider",
              "Gir bedre bilde av støy og privatliv."
            ],
            [
              "«Fin havutsikt»",
              "Utsikt fra riktig enhet og planstatus",
              "Reduserer risiko for feil forventninger."
            ],
            [
              "«Lave kostnader»",
              "Dokumenterte eierutgifter og vedlikeholdsbehov",
              "Gjør totaløkonomien lettere å vurdere."
            ]
          ],
          caption: "Kontrollspørsmålene er ikke en garanti for boligens tilstand eller fremtidige omgivelser."
        }
      },
      {
        heading: "Hva bør du gjøre før du bestiller visning?",
        body: [
          "Velg noen få boliger som passer behovene, og undersøk adresse, rutene du vil bruke og åpne spørsmål for hver bolig. En god visningstur handler ikke om å rekke flest mulig visninger, men om å sammenligne reelle alternativer.",
          "Når vi planlegger visning med kunder, vil jeg også sette av tid til nærområdet: gå en aktuell rute, vurdere trafikk og se hvordan stedet fungerer. [[Slik planlegger vi en visningstur|/visningstur]] forklarer arbeidsmåten.",
          "Finner du en aktuell bolig, gå videre til [[hele kjøpsprosessen i Spania|/guide/kjope-bolig-i-spania]] og få nødvendige kontroller gjort før du binder deg. Du kan også [[se aktuelle boliger til salgs|/eiendommer]] når område og behov er avklart."
        ]
      }
    ],
    nextSteps: [
      "Skriv ned tre ting som må fungere i hverdagen, og tre ting du kan kompromisse på.",
      "Kontroller gangruter, helårstilbud og forhold rundt hver aktuelle adresse.",
      "Be om avklaringer om sol, støy, innsyn, utgifter og dokumentasjon før visningen.",
      "Velg en kortliste med reelle alternativer, og bruk visningen til å vurdere boligen og området."
    ],
    faq: [
      {
        question: "Kan jeg stole på utsikten i en spansk boligannonse?",
        answer: "Bildene kan vise faktisk utsikt på et tidspunkt, men sjekk at de er tatt fra riktig bolig og etasje. Be om oppdaterte bilder eller video og undersøk relevant planstatus. Fremtidig utsikt kan normalt ikke garanteres."
      },
      {
        question: "Hvordan undersøker jeg om det kan bygges foran boligen?",
        answer: "Undersøk kommunens planinformasjon og be en lokal fagperson eller uavhengig advokat hjelpe med å tolke den. Gjeldende planer gir bedre beslutningsgrunnlag, men utelukker ikke senere endringer."
      },
      {
        question: "Bør jeg se boligen mer enn én gang før jeg kjøper?",
        answer: "Det kan være lurt, særlig hvis sol, trafikk eller støy er viktig. Et besøk på en annen tid av døgnet eller utenfor høysesongen kan vise sider ved området som ikke kommer frem på én visning."
      },
      {
        question: "Følger parkering og bod alltid med når de vises i annonsen?",
        answer: "Nei. Hva som juridisk følger boligen, må kontrolleres i salgsdokumentasjon og relevante registre. Få en uavhengig advokat til å bekrefte dette før du binder deg."
      }
    ],
    cta: {
      label: "Finn området som passer deg",
      href: "/omrader"
    }
  },
  {
    "slug": "hvorfor-god-eiendomsradgiver-er-viktig",
    "title": "Hvorfor er en god eiendomsrådgiver viktig når du kjøper bolig i Spania?",
    "excerpt": "En god rådgiver hjelper deg å vurdere område, pris, risiko og hele kjøpsprosessen. Her er hva du bør forvente, og hvilke spørsmål du må stille.",
    "date": "2026-05-10",
    "updated": "2026-10-15",
    "category": "Rådgivning",
    "readingTime": "9 min lesing",
    "image": "/assets/magasin-covers/radgiver.svg",
    "imageAlt": "Illustrasjon av eiendomsrådgiver som hjelper kjøpere å vurdere boliger i Spania",
    "seoTitle": "Eiendomsrådgiver i Spania: slik velger du riktig hjelp",
    "seoDescription": "Hva gjør en god eiendomsrådgiver i Spania? Se hvordan du vurderer område, boligpris, honorar, interessekonflikter og juridiske kontroller før kjøp.",
    "keywords": [
      "eiendomsrådgiver Spania",
      "norsk eiendomsrådgiver Costa Blanca",
      "velge eiendomsmegler Spania",
      "kjøpe bolig Spania rådgivning",
      "boligkjøp Spania advokat"
    ],
    "author": {
      "name": "Freddy Bremseth",
      "href": "/om-freddy"
    },
    "intro": [
      "En god eiendomsrådgiver gjør mer enn å finne annonser og åpne dører. Verdien ligger i å forstå behovene dine, sile bort feil boliger, vurdere pris og beliggenhet, stille kritiske spørsmål og koordinere kjøpsprosessen med riktige fagpersoner. Det kan redusere risiko og unødvendige visninger, men ingen kan love laveste pris eller et problemfritt kjøp.",
      "Spør derfor ikke bare hvilke boliger rådgiveren kan vise. Undersøk også hvem vedkommende representerer, hvordan honoraret betales og hvem som kontrollerer de juridiske forholdene. Her er hva jeg mener du bør få svar på før du velger samarbeidspartner."
    ],
    "sections": [
      {
        "heading": "Hva gjør en god eiendomsrådgiver før den første visningen?",
        "body": [
          "En god rådgiver starter med behov, totalbudsjett og områdevalg – ikke med en tilfeldig annonse. Målet er en kortliste med boliger som passer livet du ønsker å ha i Spania.",
          "Skal du bo fast, kan skole, helårstilbud og gangavstand være avgjørende. Skal boligen brukes som feriebolig, kan vedlikehold, reisevei og praktisk oppfølging bety mer. Riktig pris hjelper lite dersom hverdagen rundt ikke passer.",
          "Jeg begynner med å avklare bruk og kompromisser før vi ser på [[områder på Costa Blanca|/omrader]] og velger hvilke eiendommer som er verdt en visning."
        ],
        "bullets": [
          "Hvordan skal boligen brukes: ferie, helårsliv, utleie eller en kombinasjon?",
          "Hva er totalbudsjettet med kjøpskostnader og reserve?",
          "Hva må kunne nås til fots, og hvor mye vil du bruke bil?",
          "Hvilke krav er ufravikelige, og hva kan du kompromisse på?"
        ]
      },
      {
        "heading": "Hvordan hjelper lokalkunnskap deg å velge riktig bolig?",
        "body": [
          "Lokalkunnskap gjør det lettere å oppdage forhold som ikke er tydelige i en annonse: bakker, støy, solretning, helårsliv, adkomst, innsyn og mulige endringer rundt eiendommen.",
          "På Costa Blanca Nord kan to boliger i samme prisklasse gi helt forskjellige hverdager. En leilighet ved strandpromenaden og en villa i et høyereliggende område bør ikke sammenlignes bare etter antall kvadratmeter. En rådgiver bør forklare hvorfor akkurat adressen passer dine prioriteringer – og hvorfor den kanskje ikke gjør det.",
          "Vi har samlet flere praktiske kontrollspørsmål i artikkelen [[det du ikke ser i boligannonsen|/magasin/det-du-ikke-ser-i-boligannonsen]]."
        ]
      },
      {
        "heading": "Hvordan vurderer rådgiveren om en bolig er riktig priset?",
        "body": [
          "Rådgiveren bør sammenligne eiendommen med reelle alternativer i samme område og standardklasse og undersøke hva totalprisen faktisk omfatter. Annonsert pris er bare ett av flere vurderingspunkter.",
          "For nybygg bør du undersøke leveransebeskrivelse, betalingsplan, tilvalg, prosjektets fremdrift og fellesfasiliteter. For bruktbolig er teknisk tilstand, dokumentasjon og vedlikehold viktig. Forhandlingsrommet varierer; nybygg er ikke automatisk riktig priset, og en lav bruktboligpris betyr ikke automatisk at eiendommen har skjulte feil.",
          "Be om begrunnelse for prisvurderingen, og skill mellom annonserte priser og dokumenterte salg. En rådgivers vurdering erstatter ikke en uavhengig takst når det er behov for det."
        ]
      },
      {
        "heading": "Kan rådgiveren hjelpe med boliger annonsert av andre meglere?",
        "body": [
          "Ofte kan en rådgiver undersøke boliger som andre aktører markedsfører, men det er ingen garanti for at han eller hun kan formidle enhver eiendom. Tilgang og samarbeid avhenger av selger, oppdrag, eksisterende avtaler og vilkår mellom involverte parter.",
          "Send gjerne annonser du vurderer til rådgiveren du har valgt. Be om at tilgjengelighet, pris, visningsmuligheter og eventuelt samarbeid undersøkes før du kontakter flere meglere om samme eiendom.",
          "En ryddig rådgiver skal også kunne si fra når samarbeid ikke er mulig, og hjelpe deg videre med et godt beslutningsgrunnlag uten å love mer enn han eller hun kan levere."
        ]
      },
      {
        "heading": "Hva er forskjellen på rådgiver, megler og uavhengig advokat?",
        "body": [
          "En rådgiver eller eiendomsmegler kan bidra med boligsøk, visning, forhandling og koordinering etter det konkrete oppdraget. En uavhengig advokat bør kontrollere juridiske forhold, dokumentasjon og kontrakter. Den ene rollen erstatter ikke den andre.",
          "Før bindende avtaler bør advokaten vurdere registrert eierskap, heftelser, nødvendige tillatelser og kontraktsvilkår. Eiendomsregisterets *nota simple* gir informasjon om registrert eier og rettigheter, men en slik utskrift er ikke en full juridisk eller teknisk gjennomgang.",
          "Du kan undersøke [[nota simple hos det spanske eiendomsregisteret|https://sede.registradores.org/site/propiedad?lang=es]] og lese [[guiden vår om juridiske fallgruver|/guide/juridiske-fallgruver-boligkjop-spania]]."
        ]
      },
      {
        "heading": "Hva koster det å bruke eiendomsrådgiver i Spania?",
        "body": [
          "Det finnes ikke ett honorar som gjelder alle handler. Betaling kan komme fra selger eller utbygger, fra kjøper etter særskilt avtale eller gjennom en annen avklart samarbeidsmodell. At du ikke mottar en separat faktura, betyr ikke at formidlingen mangler en økonomisk interesse.",
          "Be derfor om skriftlig oversikt over hvem som representeres, hvem som betaler honoraret, hvilke tjenester som inngår og hva du eventuelt betaler ekstra for. Spør også om tjenester etter overtakelsen faktureres separat.",
          "Valenciaregionen har et offentlig regelverk og register for eiendomsformidlere, med krav blant annet knyttet til profesjonell informasjon og åpenhet. Dersom virksomheten omfattes, bør du kunne få opplysninger som lar deg kontrollere registreringen. Se [[Generalitat Valencianas informasjon om registrering av eiendomsformidlere|https://sede.gva.es/es/detall-tramit?id_proc=G22848]]."
        ]
      },
      {
        "heading": "Hvordan vet du om rådgiveren faktisk ivaretar dine interesser?",
        "body": [
          "Det beste tegnet er åpne svar på risiko, kostnader og alternativer – også når svaret kan være at du bør velge en annen bolig eller vente. En rådgiver som får betalt ved gjennomført handel, har en økonomisk interesse i salget. Det gjør det ekstra viktig å avklare roller og interessekonflikter.",
          "Still disse spørsmålene før du inngår et samarbeid:"
        ],
        "bullets": [
          "Hvem representerer du i denne handelen, og hvordan får du betalt?",
          "Hvorfor mener du akkurat denne boligen passer meg bedre enn alternativene?",
          "Hva er de viktigste ulempene eller risikoene ved eiendommen?",
          "Hvilke opplysninger er bekreftet, og hva gjenstår å kontrollere?",
          "Hvem gjør juridisk og teknisk kontroll, og er disse fagpersonene uavhengige?",
          "Kan du vise relevante referanser og beskrive oppfølgingen etter kjøpet?"
        ]
      },
      {
        "heading": "Hvordan sammenligner du boligene i praksis?",
        "body": [
          "To annonser kan se like attraktive ut. God rådgivning handler om å sammenligne det som betyr noe i kjøperens hverdag, ikke om å presentere flest mulig alternativer.",
          "Dette er et illustrerende eksempel på kontrollspørsmål ved visning, ikke en vurdering av konkrete boliger:"
        ],
        "table": {
          "headers": [
            "Tema",
            "Annonse A",
            "Annonse B",
            "Spørsmål rådgiveren bør avklare"
          ],
          "rows": [
            [
              "Hverdagsliv",
              "Kort vei til sentrum",
              "Større uteplass i roligere område",
              "Faktisk gangrute, bakker og bilbehov"
            ],
            [
              "Totalpris",
              "Nybygg med tilvalg",
              "Bruktbolig med vedlikeholdsbehov",
              "Inkluderte ytelser, dokumenterte kostnader og nødvendige arbeider"
            ],
            [
              "Beliggenhet",
              "Nær restauranter",
              "Mer privatliv",
              "Støy, sol, innsyn og helårsservice"
            ],
            [
              "Kjøpsrisiko",
              "Fremtidig ferdigstillelse",
              "Eksisterende teknisk tilstand",
              "Utbygger, garantier, lovlighet og dokumentasjon"
            ]
          ],
          "caption": "Eksemplene er tenkte. Riktig valg avhenger av dine behov, ikke av hvilken annonse som ser finest ut."
        }
      },
      {
        "heading": "Hva bør skje etter visningen og etter overtakelsen?",
        "body": [
          "Rådgivningen bør ikke slutte når du har funnet en bolig du liker. Deretter følger spørsmål om reservasjon, dokumentasjon, finansiering, kontrakt, notar og overtakelse. Du bør vite hvem som er ansvarlig for hvert steg, og hva rådgiveren konkret leverer.",
          "Etter kjøpet kan du trenge praktisk hjelp med nøkler, leverandører, tilsyn og klargjøring når du ikke er i Spania. Slike tjenester varierer og kan koste ekstra; få dette avklart.",
          "Hos Zen Eco Homes er målsetningen en oversiktlig prosess fra behov til overtakelse. Se [[slik jobber vi gjennom kjøpsprosessen|/kjopsprosessen]] og [[hvordan vi planlegger visningstur|/visningstur]]."
        ]
      },
      {
        "heading": "Hvorfor bør en god rådgiver også kunne si nei?",
        "body": [
          "En god rådgiver skal ikke bare bekrefte kjøperens førsteinntrykk. Hvis beliggenhet, økonomi eller dokumentasjon ikke passer med målet, er det bedre å oppdage det før kunden inngår en bindende avtale.",
          "Jeg har selv kjøpt bolig i Spania og opplevd hvor mye tid som kan gå med til annonser som ikke besvarer enkle spørsmål om tilgjengelighet, nøyaktig beliggenhet og dokumentasjon. Derfor prøver jeg å avklare slike forhold før en travel visningstur. Det er en beskrivelse av min arbeidsmåte, ikke en garanti for at en handel blir problemfri.",
          "Du kan lese om erfaringene og tilnærmingen min på [[min profil som eiendomsrådgiver på Costa Blanca|/om-freddy]]. Målet er ikke flest mulig visninger, men å forstå hva du kjøper, hvorfor det passer og hvilke spørsmål som fortsatt står åpne."
        ]
      }
    ],
    "nextSteps": [
      "Beskriv boligbehov, område, totalbudsjett og tidsplan før du ber om konkrete forslag.",
      "Be om å få forklart rolle, godtgjørelse, samarbeid med andre meglere og hva oppdraget inkluderer.",
      "Sammenlign noen få relevante boliger med dokumenterte fordeler, ulemper og uavklarte spørsmål.",
      "Bruk uavhengig advokat og eventuelt teknisk fagperson før bindende avtaler.",
      "Avtal oppfølgingen gjennom kjøpsprosess og overtakelse."
    ],
    "faq": [
      {
        "question": "Må jeg ha eiendomsrådgiver for å kjøpe bolig i Spania?",
        "answer": "Nei. Du kan kjøpe uten en personlig rådgiver. Verdien av rådgivning ligger særlig i områdevalg, sammenligning, visningsplan og koordinering. Uavhengig juridisk kontroll anbefales uansett."
      },
      {
        "question": "Er en eiendomsrådgiver alltid på kjøperens side?",
        "answer": "Ikke nødvendigvis. Det avhenger av oppdraget, hvem rådgiveren representerer og hvem som betaler. Spør konkret om rolle, honorar og eventuelle interessekonflikter."
      },
      {
        "question": "Er det gratis for kjøper å bruke megler i Spania?",
        "answer": "Ikke alltid. Noen handler har honorar fra selger eller utbygger, mens andre har kjøperhonorar eller særskilte tilleggstjenester. Få skriftlig informasjon før du inngår avtale."
      },
      {
        "question": "Kan jeg bruke egen rådgiver for en bolig som annonseres av en annen megler?",
        "answer": "Det kan være mulig dersom selgeren, involverte meglere og avtalene tillater samarbeid. Det er ikke garantert; la rådgiveren undersøke forholdene før du legger planer."
      },
      {
        "question": "Kan eiendomsmegleren gjøre samme jobb som advokaten?",
        "answer": "Nei. Megleren kan bidra med informasjon og koordinering, men en uavhengig advokat bør kontrollere eierskap, heftelser, relevante tillatelser og kontrakter. Teknisk tilstand kan kreve egen fagperson."
      }
    ],
    "cta": {
      "label": "Bestill en uforpliktende boligprat",
      "href": "/booking"
    }
  },
  {
    "slug": "idealista-finn-ikke-alltid-til-a-stole-pa",
    "title": "Idealista og FINN.no: Hvor mange boliger er egentlig til salgs?",
    "excerpt": "Mange boligannonser betyr ikke nødvendigvis mange forskjellige, tilgjengelige boliger. Her forklarer jeg hvorfor – og hvordan du finner en rådgiver som kjenner boligen, ikke bare annonsen.",
    "date": "2026-05-10",
    "updated": "2026-10-15",
    "category": "Rådgivning",
    "readingTime": "9 min lesing",
    "image": "/assets/magasin-covers/boligportaler.svg",
    "imageAlt": "Illustrasjon av boligannonser på nett og dupliserte oppføringer for boliger i Spania",
    "seoTitle": "Idealista og FINN.no i Spania: Unngå duplikatannonser",
    "seoDescription": "Samme bolig kan annonseres av ti meglere, og annonser kan være utdaterte. Slik bruker du Idealista og FINN.no smart og velger en rådgiver som kjenner boligen.",
    "keywords": [
      "Idealista Spania",
      "FINN.no bolig i Spania",
      "duplikatannonser bolig Spania",
      "boliger til salgs Costa Blanca",
      "megler Spania annonser",
      "eiendomsrådgiver Costa Blanca"
    ],
    "author": {
      "name": "Freddy Bremseth",
      "href": "/om-freddy"
    },
    "intro": [
      "Et søk på Idealista eller FINN.no kan gi inntrykk av at det finnes hundrevis av aktuelle boliger i et område. Men antall annonser er ikke det samme som antall unike boliger som faktisk kan kjøpes. Én bolig kan markedsføres av flere meglere, andre kan være reservert eller solgt, og enkelte annonser mangler oppdatert informasjon.",
      "Jeg bruker gjerne portalene for å finne interessante alternativer. Problemet oppstår når kjøperen tror at annonsen er en bekreftelse på tilgjengelighet – eller at personen bak den kjenner boligen og området i detalj. I det spanske markedet er det ofte klokere å velge en god rådgiver først og deretter undersøke boligene."
    ],
    "sections": [
      {
        "heading": "Hvorfor betyr ikke 500 boligannonser at 500 boliger er ledige?",
        "body": [
          "Fordi en portal normalt teller annonser, ikke nødvendigvis unike eiendommer med bekreftet tilgjengelighet. Hvis den samme leiligheten markedsføres av ti meglere, kan den gi ti treff selv om det bare finnes én leilighet. Og dersom noen annonser ikke er oppdatert etter reservasjon eller salg, blir det reelle utvalget mindre enn trefflisten antyder.",
          "Dette er ikke bare min erfaring fra det spanske markedet. Idealista tilbyr selv en egen tjeneste som oppdager samme bolig annonsert av forskjellige meglere eller på forskjellige portaler. Det dokumenterer at duplikater er en reell utfordring, men sier ikke hvor stor andel av alle boligannonser som er duplisert.",
          "[[Idealistas egen forklaring av duplikatkontroll|https://www.idealista.com/tools/centrodeayuda/articulos/control-duplicados/]] beskriver både hvordan like annonser oppdages og hvordan prisendringer og fjerning av annonser kan overvåkes."
        ],
        "bullets": [
          "Flere annonser kan vise nøyaktig den samme boligen.",
          "Samme prosjekt kan markedsføres med forskjellige bilder, enhetsnumre og fra-priser.",
          "En annonse kan ligge synlig uten at tilgjengeligheten nylig er kontrollert.",
          "Antall søkeresultater er derfor ikke et pålitelig mål på antall kjøpsklare eiendommer."
        ]
      },
      {
        "heading": "Hvordan fungerer FINNs annonsepriser for boliger i utlandet?",
        "body": [
          "FINN tilbyr profesjonell annonsering av boliger i utlandet med pristrinn etter annonsevolum. I FINNs offentlige prisliste for 2026 er det et lavere annonseprisnivå ved 500 eller flere annonser enn ved 1–10 annonser. Det gjør storskala annonsering økonomisk annerledes enn å legge ut bare noen få utvalgte eiendommer.",
          "Det betyr ikke at alle store annonsører har kjøpt en fast «pakke på 500 boliger» eller at annonsene oppdateres tilfeldig. Men det viser hvorfor antall annonser i seg selv ikke sier noe sikkert om hvor grundig hvert objekt er kontrollert. En stor portefølje kan også være et verktøy for å skape henvendelser om andre boliger.",
          "[[Se FINNs offisielle prisliste for eiendom i utlandet, 2026|https://www.finn.no/eiendom/prisoversikt/2026]]. Prisene og vilkårene kan endres, så daterte prislister må ikke brukes som evigvarende satser."
        ]
      },
      {
        "heading": "Hvorfor kan en boligannonse bli liggende etter at boligen er solgt?",
        "body": [
          "En annonse kan bli stående fordi annonsøren ennå ikke har fått salgsinformasjonen, fordi flere formidlere ikke oppdaterer samtidig, eller fordi markedsføringen ikke blir fulgt godt nok opp. At en annonse fortsatt er synlig, beviser verken at boligen er ledig eller at annonsøren bevisst villede kjøperen.",
          "Jeg kjenner også til arbeidsmåter der en megler betaler for annonsering eller markedsføringskapasitet for en lengre periode. Når utgiften allerede er påløpt, kan det oppleves mindre viktig å erstatte eller avslutte en annonse raskt, samtidig som synlighet fortsatt kan gi nye kundehenvendelser. Men kontraktens varighet, eventuell refusjon og rutiner for fjerning varierer.",
          "Jeg vil derfor ikke hevde at FINN generelt har en ufravikelig 12-månedersregel eller at ingen får penger tilbake ved tidlig salg. Det er ikke dokumentert i den åpne prislisten og må kontrolleres mot annonsørens faktiske avtale. For deg som boligkjøper er poenget enklere: Be alltid om fersk bekreftelse på status."
        ]
      },
      {
        "heading": "Hvordan kan den samme spanske boligen ligge ute hos ti meglere?",
        "body": [
          "Mange boliger i Spania markedsføres uten at én megler har eksklusiv rett til salget. Selger eller utbygger kan bruke flere samarbeidspartnere, og eiendommen kan deles gjennom meglersamarbeid og prosjektporteføljer. Da kan den samme boligen dukke opp med ulike bilder, beskrivelser eller priser.",
          "En bolig annonsert av ti forskjellige meglere er et illustrerende eksempel, ikke en opptelling av en bestemt portal. Ulike annonsepriser kan skyldes at informasjon oppdateres til ulike tider, ulike inkluderte ytelser eller feil. Det betyr ikke automatisk at kjøperen kan velge den laveste prisen uten å undersøke hva som faktisk selges.",
          "Ikke alle eiendommer er åpne for alle formidlere. Eksklusive oppdrag, utbyggeravtaler, tilgang og eksisterende kunderegistreringer kan begrense hvem som kan bistå. En god rådgiver bør undersøke samarbeidsmulighetene før han eller hun lover en visning."
        ]
      },
      {
        "heading": "Hvorfor bør du velge rådgiver før du velger meglerannonsen?",
        "body": [
          "Fordi det avgjørende er hvem som hjelper deg å forstå markedet, undersøke tilgjengelighet, vurdere pris og risiko og koordinere kjøpet. Annonsøren er ikke nødvendigvis den som kjenner boligen best eller den eneste som kan formidle den.",
          "Jeg mener en boligkjøper først bør finne en rådgiver som tar seg tid til behovene, kjenner nærområdet og er villig til å anbefale noe annet dersom den første annonsen ikke passer. Send deretter aktuelle lenker fra Idealista, FINN.no eller andre portaler til denne rådgiveren og få undersøkt hvilke av boligene som faktisk kan vises.",
          "Samtidig må du avklare hvem rådgiveren representerer, hvordan vedkommende får betalt og om samarbeid med annonsøren er mulig. [[Slik velger du en god eiendomsrådgiver i Spania|/magasin/hvorfor-god-eiendomsradgiver-er-viktig]] går gjennom spørsmålene du bør stille."
        ]
      },
      {
        "heading": "Har megleren som annonserer et nybygg nødvendigvis besøkt prosjektet?",
        "body": [
          "Nei. En annonse kan være publisert fra en felles prosjektkatalog, et markedssystem eller utbyggers salgsinformasjon uten at den enkelte annonsøren selv har besøkt tomten eller sett den konkrete enheten. Det er ikke i seg selv uprofesjonelt å videreformidle et prosjekt, men rådgiveren bør være ærlig om hva han eller hun faktisk vet.",
          "Min erfaring er at enkelte annonsører først må hente inn grunnleggende prosjektinformasjon når en kunde viser interesse. For kjøperen kan det være frustrerende dersom man forventet å snakke med en lokalkjent ekspert. Dette er en praktisk observasjon, ikke grunnlag for å si at de fleste nybyggannonsører aldri har vært på stedet.",
          "En seriøs rådgiver bør skille mellom opplysninger fra utbygger, det han eller hun selv har kontrollert, og forhold som fortsatt er uavklarte. Før du reiser på visning, be om svar på punktene under."
        ],
        "bullets": [
          "Hvilken blokk, etasje og konkret enhet gjelder annonsen?",
          "Er denne enheten ledig i dag, og når ble status bekreftet hos utbygger?",
          "Har rådgiveren besøkt tomten eller prosjektet – og når?",
          "Hva viser en oppdatert prisliste og godkjent plantegning?",
          "Hva er inkludert i prisen, og hva kommer i tillegg?",
          "Når er forventet ferdigstillelse, og hvilke garantier og avtalevilkår gjelder?"
        ]
      },
      {
        "heading": "Hvordan ser du om en boligannonse er duplisert eller utdatert?",
        "body": [
          "Begynn med adresse, kartposisjon, byggnavn, planløsning, terrasseareal og bildedetaljer. Når flere annonser ligner, kan de gjelde samme eiendom selv om bilder, annonsetittel og pris er forskjellige.",
          "Ikke anta at en annonse er feil bare fordi den ligner en annen. I et nybyggprosjekt kan like plantegninger også gjelde ulike enheter. Få bekreftet referanse eller enhetsnummer hos formidler eller utbygger før du konkluderer.",
          "Bruk denne enkle sjekklisten når du finner en bolig du vil undersøke:"
        ],
        "table": {
          "headers": [
            "Dette ser du i annonsen",
            "Dette bør du spørre om",
            "Hvorfor"
          ],
          "rows": [
            [
              "Samme bilder hos flere meglere",
              "Gjelder det nøyaktig samme enhet?",
              "Én bolig kan være talt flere ganger."
            ],
            [
              "Prisen er forskjellig",
              "Hva er oppdatert pris hos eier eller utbygger?",
              "Tall kan være gamle eller gjelde forskjellig leveranse."
            ],
            [
              "«Fra-pris» på nybygg",
              "Hvilken enhet er faktisk ledig til den prisen?",
              "Inngangsprisen er ikke nødvendigvis tilgjengelig."
            ],
            [
              "Annonse publisert lenge",
              "Når ble tilgjengelighet bekreftet?",
              "Synlig annonse er ikke bevis på salgsstatus."
            ],
            [
              "Flott utsikt og mange bilder",
              "Er bildene fra akkurat denne boligen?",
              "Prosjektbilder og illustrasjoner kan avvike fra konkret enhet."
            ]
          ],
          "caption": "Praktiske kontrollspørsmål – ikke en rangering av de enkelte boligportalene."
        }
      },
      {
        "heading": "Hva bør være bekreftet før du reiser til Spania på visning?",
        "body": [
          "Før du kjøper flybilletter eller legger opp en tett visningsdag, bør du ha en kortliste med boliger som er sjekket for tilgjengelighet, pris, adresse og grunnleggende dokumentasjon. Ved nybygg må vi også vite hvilken konkret enhet som skal vises, ikke bare hvilket prosjekt annonsen gjelder.",
          "Jeg foretrekker færre, bedre forberedte visninger framfor at vi fyller dagen med annonser som viser seg å være solgt eller uaktuelle. Et realistisk og oppdatert utvalg gir bedre mulighet til å sammenligne beliggenhet, byggekvalitet og totalbudsjett.",
          "Les gjerne [[hva du ikke ser i boligannonsen|/magasin/det-du-ikke-ser-i-boligannonsen]] og [[hvordan vi planlegger visningstur på Costa Blanca|/visningstur]]."
        ]
      },
      {
        "heading": "Er Idealista og FINN.no nyttige når du skal kjøpe bolig i Spania?",
        "body": [
          "Ja. Portalene er nyttige for å oppdage områder, prisantydninger, boligtyper og prosjekter. Kritikken handler ikke om at alle annonser er upålitelige, men om at et søkeresultat ikke er en kvalitetssikret oversikt over unike, ledige eiendommer.",
          "Den beste fremgangsmåten er å bruke portalene til å finne muligheter, og deretter bruke lokalkunnskap, oppdatert informasjon og juridisk kontroll til å avgjøre hvilke som faktisk er aktuelle.",
          "Når behov og område er avklart, kan du [[se aktuelle boliger på Costa Blanca|/eiendommer]] og lese [[hele kjøpsprosessen i Spania|/guide/kjope-bolig-i-spania]] før du eventuelt reserverer."
        ]
      }
    ],
    "nextSteps": [
      "Bruk Idealista og FINN.no til å utforske boliger, men ikke bruk antall annonser som antall tilgjengelige eiendommer.",
      "Velg en rådgiver som kan forklare området, kontrollere konkret enhet og si hva vedkommende selv har verifisert.",
      "Send over en kortliste og be om oppdatert pris, status og referanse/enhetsnummer før visning.",
      "Få avklart meglerens rolle og godtgjørelse, og bruk uavhengig advokat før bindende avtaler."
    ],
    "faq": [
      {
        "question": "Hvorfor finner jeg samme bolig hos mange meglere i Spania?",
        "answer": "Fordi mange boliger kan formidles gjennom flere ikke-eksklusive salgsoppdrag eller samarbeid. De ulike annonsene kan gjelde én og samme eiendom, og det er viktig å kontrollere referanse, pris og tilgjengelighet."
      },
      {
        "question": "Kan jeg stole på antall boliger som vises på Idealista og FINN.no?",
        "answer": "Tallene viser annonser, ikke nødvendigvis unike eiendommer som er ledige. Duplikater og utdaterte annonser kan gjøre antallet misvisende. Be om en bekreftet oversikt før visning."
      },
      {
        "question": "Har FINN en ettårspakke for utenlandsboliger som ikke kan refunderes?",
        "answer": "FINNs åpne prisliste for 2026 viser volumavhengige annonsepriser, men dokumenterer ikke at alle annonser er bundet til tolv måneder uten refusjon. Avtaleperioder og refusjonsvilkår må avklares i den konkrete bedriftsavtalen."
      },
      {
        "question": "Kan jeg bruke min egen rådgiver selv om jeg fant boligen hos en annen megler?",
        "answer": "Ofte kan det undersøkes, men det avhenger av selgerens avtaler, meglersamarbeidet og eventuell kunderegistrering. Det er ikke slik at alle meglere automatisk kan formidle alle boliger."
      },
      {
        "question": "Hvordan vet jeg om en nybyggannonse gjelder en ledig leilighet?",
        "answer": "Be om prosjekt, blokk, etasje, enhetsnummer, oppdatert pris og skriftlig tilgjengelighet fra utbygger eller autorisert formidler. Prosjektbilder og fra-priser bekrefter ikke at akkurat den enheten er ledig."
      }
    ],
    "cta": {
      "label": "Få hjelp til å vurdere aktuelle boliger",
      "href": "/booking"
    }
  },
  {
    "slug": "hva-far-du-for-4-6-8-10-millioner-costa-blanca",
    "title": "Hva får du for 4, 6, 8 og 10 millioner på Costa Blanca – inkludert kjøpskostnader?",
    "excerpt": "Hvor dyr bolig kan du kjøpe i Spania med 4, 6, 8 eller 10 millioner kroner totalt? Sammenlign realistisk kjøpesum, nybygg og bruktbolig – med eksemplet 500 000 euro.",
    "date": "2026-09-29",
    "updated": "2026-10-15",
    "category": "Budsjett og marked",
    "readingTime": "11 min lesing",
    "image": "/assets/magasin-covers/finansiering.svg",
    "imageAlt": "Sammenligning av boligbudsjett i norske kroner, maksimal kjøpesum i euro og kostnader ved boligkjøp på Costa Blanca",
    "seoTitle": "Bolig på Costa Blanca for 4, 6, 8 og 10 millioner?",
    "seoDescription": "Hva får du for 4, 6, 8 og 10 millioner kroner på Costa Blanca? Regn fra totalbudsjett til boligpris, se eksemplet 500 000 euro og sammenlign nybygg og bruktbolig.",
    "keywords": [
      "bolig Costa Blanca 4 millioner",
      "bolig Spania 6 millioner kroner",
      "bolig Spania 8 millioner",
      "bolig Costa Blanca 10 millioner",
      "500000 euro bolig totalbudsjett",
      "omkostninger boligkjøp Valencia",
      "maks kjøpesum bolig Spania"
    ],
    "author": {
      "name": "Freddy Bremseth",
      "href": "/om-oss/freddy"
    },
    "intro": [
      "Har du 4, 6, 8 eller 10 millioner kroner totalt til bolig i Spania, kan du ikke bruke hele beløpet på kjøpesummen. Skatt, juridisk bistand, notar, register og eventuell innredning eller finansiering kommer i tillegg. Den riktige rekkefølgen er å starte med totalrammen i norske kroner og regne bakover til en maksimal boligpris i euro.",
      "Under viser jeg hva budsjettene kan bety for ulike boligtyper på Costa Blanca, med tydelige regneforutsetninger. Du finner også eksemplet med en bolig til 500 000 euro og vår interaktive kalkulator. Anslagene er illustrasjoner, ikke verifiserte salgspriser eller en garanti for hvilke boliger som er ledige i dag."
    ],
    "sections": [
      {
        "heading": "Hvor dyr bolig kan du kjøpe for 4, 6, 8 eller 10 millioner kroner?",
        "body": [
          "Det avhenger av om millionbeløpet er maksimal kjøpesum eller hele totalbudsjettet, hva euroen koster, og om du kjøper nybygg eller bruktbolig. Når kjøpskostnadene er inkludert, blir den realistiske maksimalprisen lavere enn beløpet du får ved å veksle kroner til euro.",
          "Tabellen viser et **regneeksempel**, med valutakurs 11,50 kroner per euro (ikke dagens kurs), ordinær bruktboligskatt på 9 % i Valenciaregionen, nybygg med 10 % IVA og ordinær 1,4 % AJD, samt antatte 1 % til advokat og 0,5 % til notar/registrering. Beløpene er avrundet ned til nærmeste 1 000 euro. Møbler, finansiering og en egen kontantreserve kommer i tillegg og må trekkes fra budsjettet før beregningen hvis de skal finansieres av den samme totalrammen.",
          "Disse valgene gjenspeiler standardforutsetningene i kalkulatoren under. **Endre selv valutakurs, boligtype, avgiftsforutsetninger og reserve** for et mer relevant estimat før du velger bolig."
        ],
        "table": {
          "headers": [
            "Totalbudsjett",
            "Euro før kostnader",
            "Omtrentlig maksimal bruktboligpris",
            "Omtrentlig maksimal nybyggpris"
          ],
          "rows": [
            [
              "4 mill. kr",
              "ca. 347 826 €",
              "ca. 314 000 €",
              "ca. 308 000 €"
            ],
            [
              "6 mill. kr",
              "ca. 521 739 €",
              "ca. 472 000 €",
              "ca. 462 000 €"
            ],
            [
              "8 mill. kr",
              "ca. 695 652 €",
              "ca. 629 000 €",
              "ca. 616 000 €"
            ],
            [
              "10 mill. kr",
              "ca. 869 565 €",
              "ca. 786 000 €",
              "ca. 770 000 €"
            ]
          ],
          "caption": "Illustrasjoner ved EUR/NOK 11,50. Forutsetter ordinær skattesats, 1,5 % anslåtte øvrige kjøpskostnader og ingen separat reserve. Skattefordeler og særtilfeller er ikke modellert; få tallene kontrollert."
        }
      },
      {
        "heading": "Hva kan du forvente for rundt 4 millioner kroner på Costa Blanca?",
        "body": [
          "Ved totalramme på fire millioner kroner gir regneeksemplet plass til bruktbolig rundt 314 000 euro eller ordinært nybygg rundt 308 000 euro før en ekstra personlig reserve. I dette segmentet kan leiligheter og enkelte mer kompakte boliger være relevante alternativer, men boligtype og kvalitet varierer sterkt mellom kommuner og bydeler.",
          "I Villajoyosa eller mer tilbaketrukne boligområder kan det være verdt å undersøke leiligheter med god planløsning og praktisk beliggenhet, mens svært sentrale sjøfrontbeliggenheter kan gjøre at du må prioritere størrelse eller standard ned. Det er ikke grunnlag for å anta at en bestemt bolig står ledig til disse prisene uten å kontrollere markedet.",
          "Bruk [[boligsøket for Costa Blanca|/eiendommer]] og [[områdeguiden for Villajoyosa|/omrader/costa-blanca-nord/villajoyosa]] til å sammenligne konkrete muligheter."
        ]
      },
      {
        "heading": "Hva kan du kjøpe for rundt 6 millioner kroner?",
        "body": [
          "Et totalbudsjett på seks millioner kroner gir i dette eksemplet rom for omtrent 472 000 euro i bruktboligpris eller 462 000 euro for nybygg, før en eventuell ekstra reserve. Det utvider utvalget av leiligheter og rekkehus, og i noen delmarkeder kan enkelte villaalternativer være aktuelle.",
          "Forskjellen mellom Albir, Benidorm, Finestrat og Villajoyosa handler ikke bare om kvadratmeter. Nærhet til stranden, faktisk gangavstand, utsikt, vedlikeholdsbehov og kvaliteten på fellesområdene påvirker hvor godt kjøpet passer.",
          "Vurder hele tilbudet: Kan den samme totalrammen gi en mindre bolig med gangavstand til strand og restauranter, eller et større hjem med basseng og mer bilbruk? Det er behovet som bør avgjøre."
        ]
      },
      {
        "heading": "Hva kan du kjøpe for rundt 8 millioner kroner?",
        "body": [
          "Med en ramme på åtte millioner kroner viser eksemplet en maksimal bruktboligpris på cirka 629 000 euro og nybyggpris på cirka 616 000 euro. På dette nivået vil flere større leiligheter, rekkehus og enkelte villaer kunne være aktuelle, men det er ingen garanti for en frittliggende villa i de mest etterspurte områdene.",
          "På steder som Finestrat og Polop kan avveiingen være moderne bolig med mer uteplass og basseng mot lengre avstand til strand og sentrum. I Albir og deler av Altea kan samme ramme gi en annen kombinasjon av areal, beliggenhet og standard.",
          "Når du sammenligner villaer, må du også undersøke byggeår, energiutgifter, felleskostnader, vedlikehold og eventuelle uferdige tilvalg – ikke bare basseng og utsikt."
        ]
      },
      {
        "heading": "Hva kan du kjøpe for rundt 10 millioner kroner?",
        "body": [
          "Ti millioner kroner i totalramme tilsvarer rundt 870 000 euro før omkostninger med den illustrative kursen. Med skatte- og kostnadsforutsetningene i tabellen blir maksimal boligpris cirka 786 000 euro for bruktbolig eller 770 000 euro for nybygg, før separat reserve.",
          "Det kan gi gode valgmuligheter blant større leiligheter og villaer flere steder på Costa Blanca Nord, men kvaliteten på beliggenheten kan fremdeles være den største kostnadsdriveren. En attraktiv adresse nær sjøen kan gi mindre bolig enn en adresse høyere i terrenget.",
          "Ikke bruk et høyt budsjett som grunn til å hoppe over kontrollen av utsikt, naboarealer, adkomst og juridisk status. [[Dette bør du sjekke bak boligannonsen|/magasin/det-du-ikke-ser-i-boligannonsen]] forklarer hvorfor."
        ]
      },
      {
        "heading": "Hva koster en bolig til 500 000 euro totalt i Spania?",
        "body": [
          "En annonsert pris på 500 000 euro er ikke det samme som samlet kapitalbehov. For et ordinært boligkjøp i Valenciaregionen blir de største forskjellene hvilken skatt som gjelder for nybygg eller bruktbolig og hvor mye du avsetter til øvrige kostnader.",
          "Eksemplet under bruker de samme enkle forutsetningene som tabellen: bruktbolig med 9 % ITP, nybygg med 10 % IVA + ordinær 1,4 % AJD, samt 1 % antatt advokatutgift og 0,5 % antatt notar-/registerutgift. Det forutsettes ingen særskilte skattefordeler, finansieringskostnader, møblering eller separat reserve.",
          "For en bruktbolig blir regnestykket 500 000 + 45 000 i ITP + 5 000 i advokatpost + 2 500 i notar-/registerpost = **552 500 euro**. For vanlig nybygg blir det 500 000 + 50 000 i IVA + 7 000 i AJD + 5 000 + 2 500 = **564 500 euro**. Ved den illustrative kursen 11,50 tilsvarer det omtrent 6,35 og 6,49 millioner kroner. Dette er to budsjettscenarioer, ikke tilbud eller endelig oppgjørsoppstilling."
        ],
        "table": {
          "headers": [
            "Post for bolig til €500 000",
            "Bruktbolig",
            "Nybygg"
          ],
          "rows": [
            [
              "Kjøpesum",
              "500 000 €",
              "500 000 €"
            ],
            [
              "Kjøpsskatt (ordinær)",
              "45 000 € ITP (9 %)",
              "50 000 € IVA (10 %) + 7 000 € AJD (1,4 %)"
            ],
            [
              "Antatt juridisk bistand (1 %)",
              "5 000 €",
              "5 000 €"
            ],
            [
              "Antatt notar og register (0,5 %)",
              "2 500 €",
              "2 500 €"
            ],
            [
              "Illustrert total før ekstra reserve",
              "552 500 €",
              "564 500 €"
            ]
          ],
          "caption": "Eksempel for Valenciaregionen per oktober 2026. Illustrerte rådgiver-/notarposter er ikke offentlige satser; skatteplikt og særtilfeller må bekreftes."
        }
      },
      {
        "heading": "Hvorfor er skatten forskjellig for nybygg og bruktbolig?",
        "body": [
          "Ved vanlig kjøp av en eksisterende bolig i Valenciaregionen er hovedregelen overføringsskatt (ITP). Den ordinære satsen ble 9 % fra 1. juni 2026, med 11 % der verdigrensen over én million euro utløser denne satsen. Andre satser og fritak kan gjelde etter konkrete vilkår. Ved ordinært kjøp av nybygg fra utbygger betales normalt 10 % merverdiavgift (IVA) og i tillegg dokumentavgift (AJD). Den generelle AJD-satsen i regionen ble 1,4 % fra 1. juni 2026. Spesialregler, blant annet for kvalifiserende primærbolig, kan endre AJD.",
          "Det er derfor feil å legge den samme generelle tilleggssatsen på alle boliger. Låneform og skattegrunnlag kan også påvirke totalen. En uavhengig advokat må bekrefte avgiftsbehandlingen og konkret kjøpsoppgjør før signering.",
          "Kilder: [[BOE, Valenciaregionens lovendringer med virkning fra 1. juni 2026|https://www.boe.es/buscar/doc.php?id=BOE-A-2025-11959]] og [[Agencia Tributaria om IVA og ITP ved boligkjøp|https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html]]. Les også [[guiden til kjøpskostnader i Spania|/guide/kostnader-boligkjop-spania]]."
        ]
      },
      {
        "heading": "Hvorfor kan valutakursen endre hva du har råd til?",
        "body": [
          "De fleste boligkjøp i Spania avtales i euro. Har du inntekt, sparing eller låneramme i kroner, er EUR/NOK-kursen en viktig del av budsjettet. Du må se på beløpet du faktisk får overført etter eventuell veksling og bankens kostnader.",
          "En bolig til 500 000 euro koster 5,75 millioner kroner ved en tenkt kurs på 11,50, men 6 millioner kroner ved kurs 12,00 – en forskjell på 250 000 kroner allerede før skatt og omkostninger. Dette er illustrasjoner, ikke dagens valutakurser.",
          "Bruk [[guiden om valutaveksling og betaling i Spania|/guide/spansk-bankkonto-valutaveksling]] sammen med kalkulatoren under; der kan du endre EUR/NOK-kursen til det du faktisk får tilbud om."
        ]
      },
      {
        "heading": "Hvor mye egenkapital og reserve trenger du?",
        "body": [
          "En totalramme er ikke nødvendigvis det samme som sparepengene du har tilgjengelig. Hvis du finansierer en del av kjøpesummen, må du skille mellom bankens eventuelle lånetilsagn, egenkapital, kostnader banken ikke finansierer og kontanter du ønsker å beholde etter kjøpet.",
          "Vurder møbler, hvitevarer, forsikring, strøm, internett, felleskostnader, eiendomsskatt og fremtidig vedlikehold. Særlig ved villa med basseng eller bolig som står tom store deler av året, kan driftsutgiftene ha stor betydning.",
          "Les [[hvordan finansiere boligkjøpet|/guide/finansiere-bolig-i-spania]] og [[hva det koster å eie bolig i Spania hvert år|/guide/lopende-kostnader-eie-bolig-spania]] for separate vurderinger."
        ]
      },
      {
        "heading": "Hva er viktigere enn om du har 4 eller 10 millioner kroner?",
        "body": [
          "Før du bestiller visninger bør du avklare om boligen skal brukes til ferie, helårsbolig eller langtidsplaner, og om gangavstand, utsikt, uteareal, antall soverom eller minimalt vedlikehold er viktigst. To kunder med samme budsjett kan få helt forskjellige anbefalinger.",
          "Jeg bruker derfor ikke budsjettnivåene til å love en bestemt bolig. Jeg starter med beløpet du kan bruke totalt og lager deretter en kortliste som viser hvilke alternativer som faktisk er tilgjengelige. For konkrete, løpende boligsammenligninger kan du gå til [[vår oppdaterte markedssammenligning for Costa Blanca Nord|/magasin/hva-far-du-for-pengene-costa-blanca-nord-na]].",
          "Når beliggenhet og behov er klare, kan du utforske [[boliger til salgs|/eiendommer]] eller [[bestille en boligprat|/booking]]."
        ]
      }
    ],
    "nextSteps": [
      "Bestem om 4, 6, 8 eller 10 millioner kroner er hele totalrammen, ikke bare ønsket annonsepris.",
      "Sett av ønsket reserve og juster valutaen i kalkulatoren før du regner maksimal kjøpesum.",
      "Sammenlign nybygg og bruktbolig med riktige skatter og egne konkrete kostnadsanslag.",
      "Velg noen få områder og få bekreftet både pris og faktisk tilgjengelighet før visning.",
      "La bank og uavhengig advokat bekrefte finansiering og det konkrete oppgjøret før reservasjon."
    ],
    "faq": [
      {
        "question": "Hva får jeg for 4 millioner kroner på Costa Blanca?",
        "answer": "Med et illustrativt totalbudsjett på fire millioner kroner og kurs EUR/NOK 11,50 kan du i vårt regneeksempel se på bruktboliger rundt 314 000 euro eller nybygg rundt 308 000 euro før ekstra reserve. Faktiske boliger og priser varierer med område, standard og tilgjengelighet."
      },
      {
        "question": "Kan jeg kjøpe villa på Costa Blanca for 6 millioner kroner?",
        "answer": "Det kan være mulig i enkelte områder, særlig hvis du prioriterer beliggenhet eller boligstandard annerledes. Men med seks millioner kroner som totalramme blir maksimalt annonsebeløp lavere enn seks millioner når kjøpsskatten og øvrige kostnader tas med."
      },
      {
        "question": "Hvor mye koster en bolig til 500 000 euro totalt?",
        "answer": "Med eksemplets ordinære skatter for Valenciaregionen, 1 % antatt juridisk bistand og 0,5 % anslått notar/registrering, blir totalen cirka 552 500 euro for bruktbolig eller 564 500 euro for nybygg, før møbler, lån og separat reserve. Regnestykket må tilpasses den konkrete handelen."
      },
      {
        "question": "Hvor mye må jeg legge på boligprisen i Spania i 2026?",
        "answer": "Det avhenger av region og boligtype. I Valenciaregionen er ordinær ITP 9 % for bruktboliger innenfor det generelle prisnivået fra 1. juni 2026. Ordinære nybygg har normalt 10 % IVA og 1,4 % AJD. Honorar, notar, register, finansiering og reserve kommer i tillegg."
      },
      {
        "question": "Hvorfor viser tabellen lavere maksimal boligpris for nybygg enn bruktbolig?",
        "answer": "Fordi eksempelmodellen bruker ordinære skatter på 11,4 % ved nybygg (IVA og AJD), mot 9 % ITP på vanlig bruktbolig innenfor prisnivåene i tabellen. Det finnes unntak, og nybygg og bruktbolig må alltid sammenlignes med alle relevante kostnader."
      },
      {
        "question": "Bruker kalkulatoren dagens valutakurs?",
        "answer": "Kalkulatoren forsøker å hente oppdatert EUR/NOK via en datatjeneste og viser en beregningskurs som kan redigeres. Hvis kursen ikke kan hentes, brukes en reserveverdi. Be alltid om faktisk valutatilbud før du overfører penger."
      }
    ],
    "cta": {
      "label": "Finn boliger innenfor totalbudsjettet ditt",
      "href": "/eiendommer"
    }
  },
  {
    slug: "lan-i-norge-eller-spania-boligkjop",
    title: "Lån i Norge eller Spania når du kjøper bolig – hva bør du sammenligne?",
    excerpt:
      "Norsk sikkerhet, spansk boliglån, renter, valuta og egenkapital påvirker kjøpet på ulike måter. Her er regnestykket norske kjøpere bør gjøre før de velger finansiering.",
    date: "2026-09-29",
    updated: "2026-10-10",
    category: "Finansiering",
    readingTime: "9 min lesing",
    image: "/assets/magasin-covers/boliglan-bank.svg",
    imageAlt: "Sammenligning av norsk og spansk finansiering ved boligkjøp i Spania",
    seoTitle: "Lån i Norge eller Spania ved boligkjøp – hva bør du vite?",
    seoDescription:
      "Skal du finansiere bolig i Spania med lån i Norge eller spansk bank? Sammenlign rente, sikkerhet, valuta, egenkapital, løpetid og kontantbehov.",
    keywords: [
      "lån i Norge eller Spania",
      "finansiere bolig i Spania",
      "spansk boliglån nordmann",
      "lån til bolig i Spania",
      "boliglån Spania rente",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Det korte svaret: Norsk finansiering kan passe godt når du har ledig sikkerhet og inntekt i kroner. Spansk finansiering kan passe når du ønsker pant i den spanske boligen. Hvilken løsning som er best, avhenger av bankens tilbud og hele økonomien – ikke bare nominell rente.",
      "Det finnes ikke én løsning som alltid er best. En korrekt sammenligning må se på rente, løpetid, sikkerhet, belåningsgrad, valutarisiko, etableringskostnader og hvor mye kontanter du trenger ved kjøpet.",
    ],
    sections: [
      {
        heading: "Lån i Norge: enkelt å forstå, men ikke automatisk billigst",
        body: [
          "Har du ledig sikkerhet i norsk bolig kan det være praktisk å finansiere hele eller deler av Spania-kjøpet i Norge. Du kjenner banken, lånet er i samme valuta som eventuell norsk inntekt, og oppgjøret i Spania kan gjennomføres med høy egenkapital.",
          "Ulempen er at norsk rente kan være høyere enn finansieringsalternativer i euro, og du øker samtidig belåningen på eiendommen i Norge. Rentekostnad og risiko må derfor vurderes for hele husholdningen, ikke bare Spania-boligen.",
        ],
      },
      {
        heading: "Lån i Spania: sikkerheten ligger i boligen du kjøper",
        body: [
          "Et spansk boliglån bruker normalt den spanske boligen som sikkerhet. For en norsk kjøper kan det være attraktivt fordi finansieringen kobles direkte til eiendommen i Spania.",
          "Banken vurderer økonomi, dokumentasjon og verdi på boligen, og ikke-residenter kan møte andre krav til belåningsgrad enn personer som er fast bosatt i Spania. Derfor bør låneramme avklares før du legger opp boligjakten rundt et bestemt prisnivå.",
        ],
      },
      {
        heading: "Valuta er den skjulte forskjellen mellom løsningene",
        body: [
          "Har du inntekt og formue i norske kroner, men lån og bolig i euro, får du en valutakomponent i privatøkonomien. En sterkere krone gjør eurobetalinger billigere i NOK, mens en svakere krone gjør dem dyrere.",
          "Et lån i Norge kan redusere valutarisikoen på selve lånebetalingen hvis inntekten også er i kroner, men du må fortsatt kjøpe euro til boligen. Et lån i Spania reduserer behovet for å veksle hele kjøpesummen med én gang, men gir i stedet løpende euroforpliktelser.",
        ],
      },
      {
        heading: "Renten alene forteller ikke hvilken løsning som er best",
        body: [
          "En rente som er noen tideler lavere kan se attraktiv ut, men totalen påvirkes også av etableringskostnader, krav til forsikringer eller andre bankprodukter, løpetid og hvor mye egenkapital som bindes.",
          "Sammenlign effektiv kostnad og kontantstrøm over flere år, ikke bare første måneds rente.",
        ],
      },
      {
        heading: "Sammenligning: hva er den reelle forskjellen?",
        body: [
          "Tabellen viser hvilke spørsmål som må besvares for samme kjøp. Den rangerer ikke bankene og bruker ingen uverifiserte renter. Be om skriftlige tilbud, og sammenlign samme lånebeløp, løpetid og nedbetalingsprofil før du velger.",
        ],
        table: {
          headers: ["Spørsmål", "Finansiering i Norge", "Spansk boliglån"],
          rows: [
            ["Hvor ligger sikkerheten?", "Ofte pant i bolig eller annen sikkerhet i Norge", "Normalt pant i boligen i Spania"],
            ["Hvilken valuta betales lånet i?", "Ofte NOK; avhenger av bankprodukt", "Vanligvis EUR"],
            ["Hvordan påvirker valutakursen?", "EUR-beløpet ved kjøp må finansieres, mens NOK-lån typisk betjenes i NOK", "EUR-lånet må betjenes løpende, selv om inntekten er i NOK"],
            ["Hva bestemmer lånebeløpet?", "Samlet gjeldsbetjening og tilgjengelig sikkerhet", "Kredittvurdering, sikkerhet og bankens takst av den spanske boligen"],
            ["Hvilken risiko må vurderes?", "Belåning av norske verdier, renter og bundet likviditet", "Rente, EUR/NOK, takst, lånevilkår og finansieringsfrist"],
            ["Hva bør sammenlignes?", "Effektiv kostnad, løpetid, bindinger og konsekvenser for norsk bolig", "TAE, forsikringer/tilleggsprodukter, løpetid og samlede vilkår"],
          ],
          caption: "Overordnet sammenligning, ikke et individuelt tilbud. Bankene kan ha ulike produkter og krav.",
        },
      },
      {
        heading: "Hva bør du sammenligne før du bestemmer deg?",
        bullets: [
          "Effektiv rente og om den er fast eller flytende.",
          "Hvor mye banken faktisk vil finansiere av kjøpesummen eller taksten.",
          "Hvor mye egenkapital og kontanter du må ha tilgjengelig ved kjøpet.",
          "Valutaen på inntekten din og valutaen på lånet.",
          "Løpetid og månedlig betaling.",
          "Kostnader ved etablering, forsikring og eventuelle tilleggstjenester.",
          "Hva som skjer med økonomien dersom EUR/NOK eller rentene beveger seg tydelig.",
        ],
      },
      {
        heading: "Min anbefalte arbeidsrekkefølge",
        body: [
          "Avklar først hva du komfortabelt kan bruke på bolig totalt. Deretter innhenter du et realistisk norsk finansieringsalternativ og et realistisk spansk alternativ. Først da sammenligner du boligbudsjettet i euro.",
          "På denne måten unngår du å forelske deg i boliger basert på en låneramme som senere viser seg å være for optimistisk.",
        ],
      },
    ],
    nextSteps: [
      "Be norsk bank beregne faktisk kostnad ved ønsket ekstra finansiering.",
      "Be en spansk bank eller finansieringspartner vurdere mulig låneramme.",
      "Sammenlign kontantbehov, rente, valuta og løpetid.",
      "Sett maksimal kjøpesum i euro etter at finansieringen er realistisk avklart.",
    ],
    faq: [
      {
        question: "Kan nordmenn få boliglån i Spania?",
        answer:
          "Ja. Spanske banker tilbyr boliglån til utenlandske kjøpere, men krav til dokumentasjon, belåningsgrad og vilkår varierer mellom banker og kundens økonomiske profil.",
      },
      {
        question: "Er det billigere å låne i Spania enn i Norge?",
        answer:
          "Ikke nødvendigvis. Du må sammenligne effektiv rente, løpetid, etableringskostnader, krav til egenkapital og valutarisiko på samme tidspunkt.",
      },
      {
        question: "Bør jeg få finansiering på plass før jeg ser på boliger?",
        answer:
          "Det er en klar fordel å kjenne en realistisk finansieringsramme før du snevrer inn boligjakten, særlig hvis lånet utgjør en betydelig del av kjøpesummen.",
      },
    ],
    cta: { label: "Lag finansieringsplanen for boligkjøpet", href: "/guide/finansiere-bolig-i-spania" },
  },
  {
    slug: "albir-finestrat-villajoyosa-benidorm-hvor-kjope",
    title: "Albir, Finestrat, Villajoyosa eller Benidorm – hvor bør du kjøpe?",
    excerpt:
      "Fire populære områder nord på Costa Blanca gir svært forskjellige hverdager. Vi sammenligner Albir, Finestrat, Villajoyosa og Benidorm ut fra boligtype, beliggenhet og livsstil.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Områder",
    readingTime: "9 min lesing",
    image: "/assets/magasin-covers/omradevalg.svg",
    imageAlt: "Kystområdene Albir, Finestrat, Villajoyosa og Benidorm på Costa Blanca",
    seoTitle: "Albir, Finestrat, Villajoyosa eller Benidorm – hvor kjøpe?",
    seoDescription:
      "Sammenlign Albir, Finestrat, Villajoyosa og Benidorm før boligkjøp. Se forskjeller i boligtyper, hverdag, gangavstand, prispress og hvem områdene passer for.",
    keywords: [
      "Albir eller Finestrat",
      "Villajoyosa eller Benidorm",
      "hvor kjøpe Costa Blanca",
      "bolig Albir",
      "bolig Finestrat",
      "bolig Villajoyosa",
      "bolig Benidorm",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Albir, Finestrat, Villajoyosa og Benidorm ligger relativt nær hverandre, men de gir fire ganske forskjellige måter å bo på. Derfor er dette først og fremst et livsstilsvalg – og deretter et boligvalg.",
      "For norske kjøpere er det lett å sammenligne annonsepris og antall kvadratmeter. Men avstand til strand, behov for bil, helårsservice, terreng, boligtype og hvor mye nybygg som finnes kan ha større betydning for hvor fornøyd du blir.",
    ],
    sections: [
      {
        heading: "Albir: kompakt, etablert og lett å bruke i hverdagen",
        body: [
          "Albir tiltrekker mange som ønsker et oversiktlig område med strandpromenade, restauranter, butikker og et etablert internasjonalt miljø. For kjøpere som vil kunne gå mye i hverdagen er det en tydelig styrke.",
          "Samtidig er tilgangen på helt nytt boligtilbud mer begrenset enn i store utviklingsområder. Det kan gjøre gode boliger knappe, og du betaler ofte mye for riktig beliggenhet.",
        ],
        bullets: [
          "Passer for: kjøpere som prioriterer gangavstand og etablert nærmiljø.",
          "Styrke: kompakt hverdag og kort vei mellom strand og service.",
          "Vurder: mindre nybyggtilbud og høy pris på attraktive beliggenheter.",
        ],
      },
      {
        heading: "Finestrat: moderne nybygg, utsikt og mer plass",
        body: [
          "Finestrat har et stort og variert nybyggmarked, særlig i områdene mellom fjellet, kjøpesentrene og Benidorm. Her finner du både leilighetsprosjekter og moderne villaer med basseng og utsikt.",
          "Til gjengjeld er mange boligområder mer bilorienterte enn Albir og sentrale deler av Benidorm. Det er derfor viktig å kontrollere de reelle avstandene, ikke bare kilometer på kartet.",
        ],
        bullets: [
          "Passer for: kjøpere som ønsker moderne bolig og større utvalg av nybygg.",
          "Styrke: villaer, nyere prosjekter, utsikt og god tilgang til handel.",
          "Vurder: bilbehov, høydeforskjeller og hvilken del av Finestrat boligen faktisk ligger i.",
        ],
      },
      {
        heading: "Villajoyosa: strandby med stadig større boliginteresse",
        body: [
          "Villajoyosa kombinerer en tydelig spansk byidentitet med strand, havn og voksende boligtilbud. Det finnes både eldre byboliger og nyere prosjekter langs kysten.",
          "For kjøpere som ønsker et sted som føles mindre som et rendyrket ferieområde kan Villajoyosa være interessant. Samtidig varierer de ulike delene av kommunen mye når det gjelder gangavstand og service.",
        ],
        bullets: [
          "Passer for: kjøpere som ønsker kystby, strand og mer lokal byfølelse.",
          "Styrke: flere prispunkter og ulike typer boligmiljø.",
          "Vurder: stor forskjell mellom sentrum, strandnære prosjekter og ytre deler av kommunen.",
        ],
      },
      {
        heading: "Benidorm: mest by, mest service og svært ulike delmarkeder",
        body: [
          "Benidorm er langt mer enn høyhus og feriehoteller. Poniente, Levante, sentrum og boligområdene rundt byen gir svært forskjellige opplevelser.",
          "Byen har et nivå av helårsservice som få andre steder på Costa Blanca kan matche. Det er attraktivt for kjøpere som vil ha restauranter, strand, kollektivtransport og byliv tett på. Samtidig må den konkrete mikrobeliggenheten vurderes nøye fordi støy, trafikk og turisttrykk varierer mye.",
        ],
        bullets: [
          "Passer for: kjøpere som ønsker by, strand og mye helårsservice.",
          "Styrke: bredt tilbud av aktiviteter og tjenester.",
          "Vurder: velg delområde nøye; Benidorm er ikke ett homogent marked.",
        ],
      },
      {
        heading: "Samme budsjett gir fire forskjellige kjøp",
        body: [
          "I Albir kan en kjøper akseptere mindre bolig for å få gangavstand og et etablert miljø. I Finestrat kan samme budsjett i større grad brukes på nyere bolig, utsikt eller villa. I Villajoyosa kan prisen gi en annen balanse mellom kyst, by og areal. I Benidorm varierer regnestykket kraftig mellom Poniente, sentrum og områdene rundt.",
          "Derfor bør du ikke starte med spørsmålet «hvor får jeg flest kvadratmeter?». Start med spørsmålet «hvilken hverdag vil jeg kjøpe?».",
        ],
      },
      {
        heading: "En enkel måte å velge område på",
        table: {
          headers: ["Hvis du prioriterer", "Se først på"],
          rows: [
            ["Gangavstand, etablert miljø og roligere kysthverdag", "Albir"],
            ["Moderne nybygg, villa og utsikt", "Finestrat"],
            ["Spansk kystby, strand og flere prispunkter", "Villajoyosa"],
            ["Byliv, strand, transport og helårsservice", "Benidorm"],
          ],
        },
      },
    ],
    nextSteps: [
      "Velg de to områdene som best passer hverdagen du ønsker.",
      "Sammenlign faktiske boliger i samme budsjett i begge områdene.",
      "Kontroller gangavstand, stigning, trafikk og service på stedet.",
      "Bruk visningsturen til å velge område før du velger endelig bolig.",
    ],
    faq: [
      {
        question: "Er Albir dyrere enn Finestrat?",
        answer:
          "Prisnivået varierer med boligtype og mikrobeliggenhet. Albir har et mer begrenset tilbud av nytt, mens Finestrat har mange moderne prosjekter. Sammenlign konkrete boliger fremfor bare kommunegjennomsnitt.",
      },
      {
        question: "Er Villajoyosa et godt alternativ til Benidorm?",
        answer:
          "For kjøpere som ønsker strand og byliv, men en annen lokal karakter enn Benidorm, kan Villajoyosa være et relevant alternativ. Hvilket som passer best avhenger av ønsket hverdag og den konkrete boligen.",
      },
      {
        question: "Hvilket område passer best uten bil?",
        answer:
          "Sentrale deler av Albir og Benidorm kan være praktiske for en hverdag med mye til fots. I Finestrat er bil oftere viktig, mens Villajoyosa avhenger sterkt av hvilken del av kommunen boligen ligger i.",
      },
    ],
    cta: { label: "Sammenlign områder på Costa Blanca", href: "/omrader/costa-blanca-nord" },
  },
  {
    slug: "nybygg-eller-bruktbolig-costa-blanca",
    title: "Nybygg eller bruktbolig på Costa Blanca – hva passer faktisk best for deg?",
    excerpt:
      "Nybygg er ikke automatisk best, og bruktbolig er ikke automatisk billigst. Vi sammenligner valgene ut fra beliggenhet, vedlikehold, leveringstid, risiko og hvordan boligen skal brukes.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Boligvalg",
    readingTime: "9 min lesing",
    image: "/assets/magasin-covers/omradet-for-boligen.svg",
    imageAlt: "Moderne nybygg og etablert boligmiljø på Costa Blanca",
    seoTitle: "Nybygg eller bruktbolig på Costa Blanca – hva passer best?",
    seoDescription:
      "Sammenlign nybygg og bruktbolig på Costa Blanca. Se forskjeller i beliggenhet, kostnader, vedlikehold, risiko, leveringstid og videresalg før du velger.",
    keywords: [
      "nybygg eller bruktbolig Spania",
      "nybygg Costa Blanca",
      "bruktbolig Costa Blanca",
      "kjøpe bolig Spania",
      "boligvalg Costa Blanca",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Mange starter boligjakten med et standpunkt: «Vi vil bare ha nybygg» eller «Vi vil ha mest mulig bolig for pengene og ser derfor brukt». Begge utgangspunktene kan bli for enkle.",
      "Det riktige valget avhenger av hva du vil oppnå. Zen Eco Homes har hovedfokus på moderne nybygg og moderne boliger, men hvis en bruktbolig tydelig gir deg bedre beliggenhet, bedre økonomi eller en hverdag som passer bedre, bør den vurderes.",
      "Spørsmålet er derfor ikke hvilken kategori som er best. Spørsmålet er hvilken bolig som løser behovet ditt med færrest dårlige kompromisser.",
    ],
    sections: [
      {
        heading: "Nybygg: du kjøper forutsigbarhet – men ikke alltid den beste beliggenheten",
        body: [
          "Den store styrken ved nybygg er at du vet mer om standarden du overtar. Moderne tekniske løsninger, nyere energikrav, mindre vedlikeholdsbehov og en tydelig leveransebeskrivelse gjør hverdagen enklere for mange som bor deler av året i Norge.",
          "Ulempen er at de beste etablerte kystområdene ofte har lite ledig tomt. Nybygg kan derfor ligge høyere i terrenget, lenger fra sentrum eller i områder som fortsatt er under utvikling. En flott bolig er ikke nødvendigvis riktig dersom du egentlig ønsket å gå til strand og restauranter.",
        ],
        bullets: [
          "Sterkt valg når lavt vedlikehold og moderne standard betyr mye.",
          "Sjekk nøyaktig hva som inngår i prisen og hva som er tilvalg.",
          "Kontroller reelle avstander og høydeforskjeller, ikke bare kartet.",
          "Ved bolig under bygging må betalingsplan, bankgaranti og levering vurderes.",
        ],
      },
      {
        heading: "Bruktbolig: du kan kjøpe beliggenheten nybygg ikke kan gjenskape",
        body: [
          "Bruktboligens største fordel er ofte ikke prisen, men beliggenheten. I etablerte områder kan du kjøpe gangavstand, modne grøntområder, et ferdig nabolag og en plassering som det ikke lenger er mulig å bygge mye nytt på.",
          "Til gjengjeld kjøper du også boligens historie. Teknisk tilstand, tidligere ombygginger, fukt, elektrisk anlegg, fellesøkonomi og juridisk dokumentasjon må kontrolleres grundigere.",
        ],
        bullets: [
          "Sterkt valg når mikrobeliggenheten er viktigere enn å være førstegangseier.",
          "Se på dokumentert tilstand, ikke bare nye overflater og styling.",
          "Be om faktiske felleskostnader og tilgjengelig informasjon om sameiet.",
          "Bruk uavhengig juridisk kontroll før du binder deg.",
        ],
      },
      {
        heading: "Pris: brukt er ikke automatisk billigere",
        body: [
          "Det er lett å sammenligne kvadratmeterpris og konkludere. Det kan bli feil. En bruktbolig kan kreve nytt kjøkken, bad, vinduer, klimaanlegg eller større arbeid kort tid etter overtakelse. Et nybygg kan på sin side ha kostnader til møbler, belysning, solskjerming og tilvalg.",
          "Sammenlign derfor totalen for de første tre til fem årene, ikke bare kjøpesummen på kontraktsdagen.",
        ],
      },
      {
        heading: "Tid: skal du bruke boligen nå eller kan du vente?",
        body: [
          "En ferdig bruktbolig kan normalt tas i bruk langt raskere enn et prosjekt som fortsatt bygges. For kjøpere som vil ha bolig til kommende vinter eller sommer kan leveringstid alene avgjøre valget.",
          "Kjøper du tidlig i et nybyggprosjekt, får du ofte større utvalg av etasje, orientering og planløsning. Men du må akseptere byggeperioden og at omgivelsene kan være uferdige en stund.",
        ],
      },
      {
        heading: "Videresalg: det er beliggenhet og brukbarhet som må tåle tid",
        body: [
          "Ny og blank standard er attraktiv ved kjøp, men alle nybygg blir bruktboliger. Når du senere skal selge, konkurrerer boligen på beliggenhet, planløsning, sol, parkering, uteareal, utsikt og hvor lett hverdagen fungerer.",
          "Det er derfor bedre å kjøpe en bolig som mange kan forstå verdien av enn å betale maksimalt for detaljer som bare betyr mye for deg.",
        ],
      },
      {
        heading: "En enkel beslutningsregel",
        table: {
          headers: ["Hvis du prioriterer", "Se først på"],
          rows: [
            ["Lavt vedlikehold, moderne standard og energieffektivitet", "Nybygg"],
            ["Etablert område og best mulig gangavstand", "Bruktbolig og ferdige nybygg"],
            ["Ta boligen i bruk raskt", "Ferdig bolig"],
            ["Størst mulig valg av planløsning og orientering", "Tidlig fase nybygg"],
            ["Unik mikrobeliggenhet som ikke kan bygges på nytt", "Bruktbolig"],
          ],
        },
      },
    ],
    nextSteps: [
      "Definer først hvordan boligen faktisk skal brukes.",
      "Sammenlign én god bruktbolig og ett godt nybygg i samme totalbudsjett.",
      "Regn inn oppgraderinger, tilvalg og vedlikehold før du sammenligner pris.",
      "Velg beliggenhet før du lar nyhetsfølelsen avgjøre.",
    ],
    faq: [
      {
        question: "Er nybygg tryggere enn bruktbolig i Spania?",
        answer:
          "Nybygg gir ofte mer forutsigbar teknisk standard, men krever kontroll av utbygger, kontrakt, bankgaranti og levering. Bruktbolig krever grundigere kontroll av eksisterende teknisk og juridisk tilstand. Begge bør undersøkes før kjøp.",
      },
      {
        question: "Er bruktbolig alltid billigere enn nybygg?",
        answer:
          "Nei. Kjøpesummen kan være lavere, men oppussing og vedlikehold kan endre totalregnestykket. Sammenlign total kostnad og beliggenhet, ikke bare pris per kvadratmeter.",
      },
      {
        question: "Selger Zen Eco Homes bruktboliger?",
        answer:
          "Hovedfokuset er moderne nybygg og moderne boliger. Når en bruktbolig tydelig passer kundens behov bedre, kan den også vurderes.",
      },
    ],
    cta: { label: "Se nybygg og boliger", href: "/eiendommer" },
  },
  {
    slug: "eurokurs-boligbudsjett-spania-nordmenn",
    title: "Eurokursen kan flytte boligbudsjettet med hundretusener – slik bør norske kjøpere tenke",
    excerpt:
      "En bolig kan koste nøyaktig det samme i euro og likevel bli flere hundre tusen kroner dyrere eller billigere. Her viser vi hvordan valutakursen påvirker et norsk boligbudsjett.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Valuta og økonomi",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/bankkonto-valuta.svg",
    imageAlt: "Euro og norske kroner ved boligkjøp i Spania",
    seoTitle: "Eurokurs og bolig i Spania – slik påvirkes norske kjøpere",
    seoDescription:
      "Se hvordan EUR/NOK påvirker kjøpesummen på bolig i Spania. Eksempler for 350.000, 500.000 og 750.000 euro viser hvorfor valuta må inn i budsjettet.",
    keywords: [
      "eurokurs bolig Spania",
      "EUR NOK bolig Spania",
      "norsk krone Costa Blanca",
      "valuta boligkjøp Spania",
      "kjøpe euro bolig Spania",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "For en norsk kjøper finnes det to priser på boligen: prisen i euro og prisen i norske kroner. Selgeren forholder seg til den første. Privatøkonomien din påvirkes av den andre.",
      "Den 29. september 2026 lå EUR/NOK rundt 10,87. Ved inngangen til året kostet euroen rundt 11,79 kroner. Det viser hvor mye kjøpekraften kan flytte seg uten at en eneste bolig i Spania endrer pris.",
      "Dette er ikke et argument for å spekulere i valuta. Det er et argument for å bygge valutarisiko inn i beslutningen.",
    ],
    sections: [
      {
        heading: "En bolig til €500.000 er ikke et fast kronebeløp",
        body: [
          "Ved EUR/NOK 10,87 er 500.000 euro omtrent 5,44 millioner kroner. Ved kurs 11,50 er samme bolig 5,75 millioner kroner. Ved kurs 12,00 er den 6 millioner kroner.",
          "Forskjellen mellom kurs 10,87 og 12,00 er rundt 565.000 kroner. Boligen, utsikten og kontrakten er identisk. Bare valutaen har endret seg.",
        ],
      },
      {
        heading: "Slik slår ulike kurser ut",
        table: {
          headers: ["Boligpris", "EUR/NOK 10,50", "EUR/NOK 10,87", "EUR/NOK 11,50", "EUR/NOK 12,00"],
          rows: [
            ["€350.000", "3,68 mill. kr", "3,80 mill. kr", "4,03 mill. kr", "4,20 mill. kr"],
            ["€500.000", "5,25 mill. kr", "5,44 mill. kr", "5,75 mill. kr", "6,00 mill. kr"],
            ["€750.000", "7,88 mill. kr", "8,15 mill. kr", "8,63 mill. kr", "9,00 mill. kr"],
          ],
        },
      },
      {
        heading: "Ikke bruk dagens kurs som om den er garantert på overtakelsesdagen",
        body: [
          "Nybygg kan ha betalinger fordelt over mange måneder. Også ved bruktbolig går det tid mellom boligjakt, reservasjon og sluttoppgjør. Hvis kapitalen står i norske kroner, kan kronebeløpet endre seg i perioden.",
          "En enkel sikkerhetsmargin i budsjettet kan være mer verdifull enn å presse maksimal kjøpesum helt opp til grensen.",
        ],
      },
      {
        heading: "Delbetalinger gjør valutaplanlegging viktigere",
        body: [
          "Ved nybygg betales kjøpesummen ofte i flere trinn. Det betyr at du ikke bare har én valutakurs å forholde deg til. Hver betaling kan få en annen kronekostnad.",
          "Be om betalingsplanen tidlig. Da kan du se hvor store eurobeløp som forfaller og når, og planlegge likviditeten i stedet for å reagere når fakturaen kommer.",
        ],
      },
      {
        heading: "Valuta og finansiering må ses sammen",
        body: [
          "Har du lån i Norge og inntekt i kroner, påvirker norsk rente finansieringen. Har du spansk lån, får du løpende betalinger i euro. Har du stor egenkapital i NOK, påvirker tidspunktet for veksling hvor mye kapital som går med.",
          "Derfor bør finansieringsvalg og valutaplan være ett regnestykke, ikke to separate beslutninger.",
        ],
      },
      {
        heading: "Det vi ikke anbefaler",
        bullets: [
          "Å basere boligkjøpet på en spådom om hvor euroen skal stå om seks måneder.",
          "Å bruke absolutt maksimal kjøpesum uten valutamargin.",
          "Å overse fremtidige delbetalinger fordi første reservasjon er liten.",
          "Å sammenligne norsk og spansk finansiering uten å ta med valutaen på gjelden.",
        ],
      },
    ],
    nextSteps: [
      "Sett maksimal boligpris både i euro og norske kroner.",
      "Test budsjettet på minst én svakere kronekurs enn dagens.",
      "Be om hele betalingsplanen før du reserverer nybygg.",
      "Sammenlign valuta og finansiering i samme regneark.",
    ],
    faq: [
      {
        question: "Bør jeg vente på en bedre eurokurs før jeg kjøper?",
        answer:
          "Ingen vet sikkert hvor EUR/NOK står senere. En bedre metode er å teste om kjøpet fortsatt er komfortabelt ved flere kurser og kjøpe når bolig, økonomi og tidspunkt passer samlet.",
      },
      {
        question: "Hvor mye betyr 50 øre på eurokursen?",
        answer:
          "På 500.000 euro betyr 0,50 kroner per euro 250.000 kroner i forskjell. På 750.000 euro er forskjellen 375.000 kroner.",
      },
      {
        question: "Er valutakurs viktig også med spansk lån?",
        answer:
          "Ja, dersom inntekten og egenkapitalen din hovedsakelig er i norske kroner. Du reduserer behovet for å veksle hele kjøpesummen, men får løpende euroforpliktelser.",
      },
    ],
    cta: { label: "Les om bankkonto og valuta", href: "/guide/spansk-bankkonto-valutaveksling" },
  },
  {
    slug: "hva-koster-feriebolig-spania-i-aret",
    title: "Hva koster ferieboligen i Spania å eie i året? Slik får du et realistisk svar før kjøp",
    excerpt:
      "Det finnes ikke én riktig årspris for å eie bolig i Spania. Men du kan få et svært godt svar før du kjøper hvis du ber om de riktige tallene.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Eierøkonomi",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/kostnader-eie.svg",
    imageAlt: "Årsbudsjett og løpende kostnader for feriebolig i Spania",
    seoTitle: "Hva koster det å eie feriebolig i Spania hvert år?",
    seoDescription:
      "IBI, felleskostnader, forsikring, strøm, vann, internett, skatt og vedlikehold. Slik lager norske kjøpere et realistisk årsbudsjett før boligkjøpet.",
    keywords: [
      "kostnader eie bolig Spania",
      "feriebolig Spania kostnader",
      "IBI Spania",
      "felleskostnader bolig Spania",
      "årsbudsjett bolig Costa Blanca",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Spørsmålet «hva koster en bolig i Spania å eie i året?» får ofte et for enkelt svar. Det finnes ingen standardprosent som passer en leilighet i Albir, en villa i Finestrat og en bolig med store fellesanlegg i Benidorm.",
      "Den gode nyheten er at mye av årsbudsjettet kan dokumenteres før kjøp. Be om faktiske kostnader på den konkrete boligen i stedet for å nøye deg med et generelt anslag.",
    ],
    sections: [
      {
        heading: "Start med kostnadene som allerede finnes",
        body: [
          "På en bruktbolig bør du be om siste IBI-kvittering, faktiske comunidad- eller felleskostnader og informasjon om eventuelle ekstraordinære innbetalinger i sameiet. Da slipper du å gjette på flere av de største faste postene.",
          "På nybygg bør utbygger eller administrator kunne gi et forventet nivå for felleskostnader, men det er et estimat frem til sameiet faktisk er etablert og driften har historikk.",
        ],
      },
      {
        heading: "Dette skal inn i årsbudsjettet",
        table: {
          headers: ["Post", "Hva du bør kontrollere før kjøp"],
          rows: [
            ["IBI / kommunal eiendomsskatt", "Be om konkret kvittering eller estimat for boligen"],
            ["Comunidad / felleskostnader", "Måneds- eller kvartalsbeløp og hva som inngår"],
            ["Forsikring", "Hent tilbud for boligtypen og bruken din"],
            ["Strøm og vann", "Fastledd, forbruk og om boligen står tom i perioder"],
            ["Internett / alarm", "Avtaler du faktisk ønsker å beholde"],
            ["Ikke-resident skatt", "Få beregning etter eier- og skattesituasjonen din"],
            ["Vedlikehold", "Boligtype, basseng, hage, klima og alder"],
            ["Property care / nøkkelhold", "Relevant hvis du bor mye av året i Norge"],
          ],
        },
      },
      {
        heading: "En billig comunidad kan være dyr hvis anlegget er dårlig",
        body: [
          "Lav felleskostnad er ikke alltid et kvalitetsstempel. Et sameie med basseng, heiser, store grøntområder og fellesbygg må finansiere vedlikeholdet på en eller annen måte.",
          "Det viktige er om økonomien er sunn, hva som faktisk inngår og om større arbeider er planlagt. Et svært lavt løpende beløp kan bli mindre interessant hvis store ekstraordinære innbetalinger kommer senere.",
        ],
      },
      {
        heading: "Villa og leilighet har forskjellige kostnadsprofiler",
        body: [
          "En leilighet deler mange kostnader med resten av sameiet. En villa kan ha lavere eller ingen comunidad, men du betaler selv for basseng, hage, fasade, tekniske installasjoner og alt annet som tilhører eiendommen.",
          "Derfor bør du ikke konkludere med at villa er billigere å eie bare fordi felleskostnaden er lav.",
        ],
      },
      {
        heading: "Boligen står tom – kostnadene gjør ikke det",
        body: [
          "Mange norske eiere bruker boligen noen måneder i året. IBI, forsikring, deler av strøm- og vannregningen, internett, felleskostnader og tilsyn fortsetter likevel.",
          "Det er derfor bedre å beregne kostnad per år enn kostnad per måned du faktisk oppholder deg i Spania.",
        ],
      },
      {
        heading: "Be om årsbudsjettet før du forelsker deg i fellesanlegget",
        body: [
          "Store bassengområder, spa, treningsrom, vakthold og omfattende beplantning kan være fantastisk. Men de har en pris. Det er ikke et argument mot slike prosjekter – bare et argument for å vite hva du kjøper.",
          "Hvis to boliger koster omtrent det samme, kan forskjellen i årlige kostnader påvirke hvilket kjøp som passer best over tid.",
        ],
      },
    ],
    nextSteps: [
      "Be om konkret IBI og comunidad for boligen du vurderer.",
      "Hent forsikring og eventuelle care-tjenester inn i samme regnestykke.",
      "Skill mellom faste kostnader og forbruksavhengige kostnader.",
      "Sett av en vedlikeholdsreserve som passer boligtypen.",
    ],
    faq: [
      {
        question: "Hva er de vanligste løpende kostnadene ved bolig i Spania?",
        answer:
          "Typisk IBI, felleskostnader der det finnes sameie, forsikring, strøm, vann, internett, relevant skatt og vedlikehold. Villa med basseng og hage har ofte flere kostnader eieren håndterer direkte.",
      },
      {
        question: "Kan jeg vite felleskostnadene før jeg kjøper?",
        answer:
          "På etablerte boliger bør faktiske kostnader kunne dokumenteres. På helt nye prosjekter er beløpet normalt et estimat til sameiet har reell driftshistorikk.",
      },
      {
        question: "Er det dyrt å eie feriebolig som står tom?",
        answer:
          "Flere kostnader løper uansett bruk. Derfor bør du regne på helårsbudsjettet, ikke bare månedene du planlegger å oppholde deg i boligen.",
      },
    ],
    cta: { label: "Se komplett guide til løpende kostnader", href: "/guide/lopende-kostnader-eie-bolig-spania" },
  },
  {
    slug: "7-dyre-feil-nordmenn-bolig-spania",
    title: "7 dyre feil nordmenn gjør når de kjøper bolig i Spania",
    excerpt: "De dyreste feilene ved boligkjøp i Spania kan skje før du signerer. Lær hvordan du unngår feil område, feil budsjett og mangelfull kontroll.",
    date: "2026-09-29",
    updated: "2026-10-15",
    category: "Kjøpsråd",
    readingTime: "10 min lesing",
    image: "/assets/magasin-covers/juridisk.svg",
    imageAlt: "Sjekkliste med viktige kontrollpunkter før boligkjøp i Spania",
    seoTitle: "7 dyre feil ved boligkjøp i Spania – slik unngår du dem",
    seoDescription: "Skal du kjøpe bolig i Spania? Unngå syv vanlige og kostbare feil med områdevalg, totalbudsjett, reservasjon, juridisk kontroll og senere videresalg.",
    keywords: [
      "feil ved boligkjøp i Spania",
      "kjøpe bolig i Spania",
      "boligkjøp Spania sjekkliste",
      "kjøpe bolig Costa Blanca",
      "juridisk kontroll bolig Spania",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "De dyreste feilene ved boligkjøp i Spania skjer ofte før kjøpekontrakten signeres. Du kan velge feil område, bruke hele budsjettet på kjøpesummen eller reservere uten å forstå vilkårene. Mye av dette kan unngås med riktig rekkefølge og grundige undersøkelser.",
      "Som eiendomsrådgiver på Costa Blanca mener jeg at den beste boligjakten starter med hvordan boligen skal brukes, ikke med en annonse. Her får du syv konkrete feil å se etter – og hva du bør gjøre i stedet.",
    ],
    sections: [
      {
        heading: "1. Du velger bolig før du velger område",
        body: [
          "Velg først området som passer hverdagen din. En flott leilighet eller villa kan være et dårlig kjøp dersom avstanden til strand, butikker og restauranter ikke stemmer med måten du vil bruke boligen på.",
          "På Costa Blanca kan hverdagen være svært forskjellig i Benidorm, Villajoyosa, Albir og Finestrat. En bolig i en åsside kan gi bedre utsikt og mer plass, men samtidig gjøre deg avhengig av bil. Tenk gjennom en vanlig tirsdag, ikke bare en feriedag.",
          "Skriv ned hva du vil kunne nå til fots, hvor ofte du vil bruke bil, og om boligen skal fungere hele året. Sammenlign deretter områdene før du bestiller visninger.",
        ],
      },
      {
        heading: "2. Du forveksler totalbudsjett med kjøpesum",
        body: [
          "Maksimal kjøpesum må være lavere enn totalbudsjettet fordi skatter, avgifter og andre kjøpskostnader kommer i tillegg. Hvor mye du må sette av, avhenger blant annet av om du kjøper nybygg eller bruktbolig.",
          "Har du seks millioner kroner som samlet ramme, kan du ikke uten videre kjøpe for seks millioner. Du må også vurdere juridisk bistand, notar, registrering, eventuell finansiering og utgifter til møblering eller oppussing.",
          "Lag ett budsjett med kjøpesum og kjøpskostnader, og ett med løpende utgifter etter overtakelse. Regn bakover fra totalrammen før du begynner å sammenligne boliger.",
        ],
      },
      {
        heading: "3. Du antar at alle boligannonser er oppdaterte",
        body: [
          "En annonse er ikke en bekreftelse på at boligen fortsatt er til salgs. Den samme boligen kan være publisert av flere aktører, og både pris og tilgjengelighet kan ha endret seg.",
          "Ti annonser betyr derfor ikke nødvendigvis ti ulike boliger. Be om å få bekreftet hvilke boliger som faktisk er tilgjengelige, hva prisen omfatter, og om annonsens opplysninger er oppdaterte.",
          "Gjør denne kontrollen før du bestiller fly og legger opp visningsturen. Da bruker du tiden på aktuelle boliger i stedet for utdaterte annonser.",
        ],
      },
      {
        heading: "4. Du reserverer boligen før vilkår og finansiering er avklart",
        body: [
          "Ikke betal et reservasjonsbeløp før du forstår avtalen og hvilke konsekvenser det kan få å trekke seg. Vilkårene varierer, og en reservasjon er ikke automatisk risikofri bare fordi beløpet er lite sammenlignet med kjøpesummen.",
          "Avklar finansieringen og la en uavhengig advokat kontrollere hva som skal undersøkes, hvilke frister som gjelder, og når betalingene skal skje. Be spesielt om en tydelig forklaring på om og når reservasjonsbeløpet kan tilbakebetales.",
          "For bruktboliger kan kontrollen blant annet omfatte eierskap, heftelser, tillatelser og eventuelle utestående forpliktelser. For nybygg må du også forstå leveransebeskrivelse, betalingsplan og sikkerhet for forskuddsbetalinger der dette er relevant.",
        ],
      },
      {
        heading: "5. Du lar havutsikten overskygge beliggenheten",
        body: [
          "Vurder hvordan beliggenheten fungerer i praksis, ikke bare hvordan utsikten ser ut på bildene. Støy, vind, solforhold, bratt adkomst og nærliggende byggeprosjekter kan påvirke både trivsel og bruk.",
          "En kilometer på flat vei i Albir er ikke det samme som en kilometer opp en bratt bakke i Finestrat. Gå den faktiske ruten til butikk eller strand. Besøk gjerne området på ulike tider av døgnet.",
          "Undersøk også om det er planlagt bebyggelse som kan påvirke utsikten. Ikke betal ekstra for en antatt varig kvalitet uten å ha undersøkt forutsetningene.",
        ],
      },
      {
        heading: "6. Du undervurderer valutakurs og renteendringer",
        body: [
          "Når boligen prises i euro og pengene dine står i norske kroner, påvirker valutakursen hvor mye kjøpet koster. Har du lån med flytende rente, må du også tåle at finansieringskostnadene endrer seg.",
          "Et enkelt regneeksempel: Hvis eurokursen øker med 50 øre, blir en bolig til 500 000 euro 250 000 kroner dyrere målt i norske kroner. Eksemplet gjelder den samme kjøpesummen og ser bort fra øvrige kostnader.",
          "Test budsjettet med en høyere eurokurs og en høyere rente enn du forventer. Skille mellom lån med sikkerhet i Norge og finansiering gjennom spansk bank, siden vilkår og kostnader kan være forskjellige.",
        ],
      },
      {
        heading: "7. Du tenker ikke på hvem som skal kjøpe boligen etter deg",
        body: [
          "Tenk på videresalg allerede når du kjøper. Selv om du planlegger å beholde boligen lenge, kan familie, helse eller økonomi gjøre at du ønsker å selge tidligere.",
          "En praktisk planløsning, god adkomst, parkering, uteplass og nærhet til tjenester kan gjøre boligen aktuell for flere kjøpergrupper. En svært spesiell bolig kan være riktig for deg, men ha et smalere marked ved salg.",
          "Still deg spørsmålet: Ville denne boligen fortsatt vært attraktiv for andre hvis mine egne behov endrer seg? Det gir et nyttig korrektiv før du bestemmer deg.",
        ],
      },
      {
        heading: "Slik reduserer du risikoen før boligkjøpet",
        body: [
          "Den tryggeste rekkefølgen er å avklare behov og bruksformål, velge område, sette et realistisk totalbudsjett, avklare finansieringen og først deretter gå på visninger. Før du binder deg, må nødvendige juridiske og tekniske undersøkelser være planlagt.",
          "Ingen sjekkliste fjerner all risiko. Men en tydelig prosess gjør det lettere å sammenligne aktuelle boliger, stille bedre spørsmål og si nei når noe ikke stemmer.",
        ],
      },
    ],
    nextSteps: [
      "Beskriv hvordan boligen skal brukes, og velg de viktigste kravene til området.",
      "Beregn maksimal kjøpesum etter at skatter, avgifter og øvrige kostnader er tatt med.",
      "Bekreft pris og tilgjengelighet før du planlegger visninger.",
      "Avklar finansiering og få gjennomgått reservasjonsvilkår og nødvendig kontroll med en uavhengig advokat.",
    ],
    faq: [
      {
        question: "Hva er den vanligste feilen når nordmenn kjøper bolig i Spania?",
        answer: "En grunnleggende feil er å forelske seg i boligen før område, bruk og totalbudsjett er avklart. Da kan en flott bolig vise seg å passe dårlig i hverdagen.",
      },
      {
        question: "Hvor mye bør jeg sette av til kostnader utover kjøpesummen?",
        answer: "Det avhenger av boligtype, region og kjøpssituasjon. Skatter og avgifter er forskjellige for nybygg og bruktbolig. Sett opp en individuell beregning av kjøpskostnader før du fastsetter maksimal kjøpesum.",
      },
      {
        question: "Kan jeg stole på annonser på spanske boligportaler?",
        answer: "Portaler er nyttige for å orientere seg, men annonser kan være dupliserte eller utdaterte. Be om bekreftelse på pris og tilgjengelighet før du planlegger visning.",
      },
      {
        question: "Hva må jeg kontrollere før jeg reserverer en bolig i Spania?",
        answer: "Du bør forstå reservasjonsavtalen, finansieringen, betalingsfrister og vilkår for eventuell tilbakebetaling. En uavhengig advokat bør avklare nødvendige juridiske undersøkelser og risiko før du binder deg.",
      },
    ],
    cta: { label: "Se hvordan kjøpsprosessen fungerer", href: "/kjopsprosessen" },
  },
  {
    slug: "havutsikt-eller-gangavstand-costa-blanca",
    title: "Havutsikt eller gangavstand – hva er mest verdt når du kjøper på Costa Blanca?",
    excerpt:
      "Havutsikt ser fantastisk ut på visning, mens gangavstand merkes hver dag. Vi sammenligner hva de to kvalitetene faktisk betyr for bruk, pris og videresalg.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Boligvalg",
    readingTime: "7 min lesing",
    image: "/assets/magasin-covers/omradet-for-boligen.svg",
    imageAlt: "Havutsikt og gangavstand som boligvalg på Costa Blanca",
    seoTitle: "Havutsikt eller gangavstand på Costa Blanca – hva velger du?",
    seoDescription:
      "Havutsikt eller gangavstand til strand og restauranter? Se hvordan valget påvirker hverdagen, pris, bilbehov og videresalg på Costa Blanca nå.",
    keywords: ["havutsikt Costa Blanca","gangavstand strand Spania","bolig beliggenhet Costa Blanca","boligkjøp Spania beliggenhet"],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Havutsikt er en av de sterkeste følelsene på en visning. Gangavstand er en av de sterkeste kvalitetene etter at du har flyttet inn. Når budsjettet ikke gir begge deler, må du velge hva som faktisk betyr mest.",
      "Det riktige valget avhenger av hvordan boligen skal brukes. En feriebolig med fantastisk utsikt kan være perfekt hvis du likevel kjører mye. For en kjøper som vil sette fra seg bilen og leve til fots, kan 800 meter flat vei til sentrum være mer verdt enn panoramautsikt fra en bratt åsside.",
    ],
    sections: [
      {
        heading: "Havutsikt koster – men all havutsikt er ikke lik",
        body: [
          "Frontlinje, åpen panoramautsikt og et lite blått felt mellom to bygg er tre helt forskjellige kvaliteter. Før du betaler premium bør du forstå hva som faktisk kan beholdes.",
          "Sjekk regulering og mulige fremtidige bygg foran boligen. En utsikt som er avhengig av en ubebygd tomt bør ikke verdsettes som en permanent kvalitet uten kontroll.",
        ],
      },
      {
        heading: "Gangavstand handler om mer enn antall meter",
        body: [
          "Én kilometer på flat promenade og én kilometer opp en bratt bakke er ikke det samme. Fortau, belysning, kryssing av trafikkerte veier og sommervarme påvirker om avstanden faktisk brukes til fots.",
          "Test ruten selv. Hvis du allerede på visning tar bilen til restauranten, er boligen sannsynligvis ikke en reell gangavstandsbolig.",
        ],
      },
      {
        heading: "Feriebruk og helårsbruk gir forskjellige svar",
        body: [
          "Bruker du boligen tre–fire intensive ferieuker i året, kan utsikt og terrasse ha enorm verdi. Skal du bo der flere måneder, blir dagligvare, helsetjenester, kollektivtransport og en enkel hverdag viktigere.",
          "Jo mer boligen brukes, desto mer ville jeg vektlagt friksjonen i hverdagen.",
        ],
      },
      {
        heading: "Videresalg: begge kvaliteter kan være sterke – men målgruppen er forskjellig",
        body: [
          "God havutsikt er lett å forstå i en annonse og kan skille boligen fra andre. Reell gangavstand gjør boligen aktuell for flere aldersgrupper og kjøpere som ikke ønsker å være avhengige av bil.",
          "Den sterkeste kombinasjonen er naturligvis begge deler. Hvis budsjettet tvinger frem et valg, bør du tenke på hvem som sannsynligvis vil kjøpe boligen etter deg.",
        ],
      },
      {
        heading: "Min praktiske beslutningsregel",
        table: {
          headers: ["Hvis dette beskriver deg", "Prioriter"],
          rows: [
            ["Du vil gå til strand, butikk og restaurant nesten hver dag", "Gangavstand"],
            ["Terrassen er hovedrommet ditt i ferien", "God og varig utsikt"],
            ["Du vil klare deg uten bil store deler av oppholdet", "Gangavstand"],
            ["Du aksepterer bil og ønsker ro, høyde og utsikt", "Havutsikt"],
            ["Boligen skal fungere for mange typer fremtidige kjøpere", "God adkomst + reell nærhet til service"],
          ],
        },
      },
    ],
    nextSteps: [
      "Gå den faktiske ruten fra boligen til strand og service.",
      "Kontroller hva som kan bygges foran utsikten.",
      "Vurder boligen ut fra normal hverdag, ikke bare første visningsinntrykk.",
      "Sammenlign to boliger med samme budsjett og forskjellige beliggenhetskvaliteter.",
    ],
    faq: [
      { question: "Er havutsikt verdt å betale ekstra for?", answer: "Det kan være det hvis utsikten er god, varig og viktig for hvordan du bruker boligen. Men den bør sammenlignes mot andre kvaliteter du gir avkall på, som gangavstand, areal og adkomst." },
      { question: "Hva regnes som gangavstand?", answer: "Det finnes ingen universell grense. Terreng, fortau, varme og trafikk betyr minst like mye som meter. Test ruten selv før kjøp." },
      { question: "Hva er best for videresalg?", answer: "Både varig havutsikt og god gangavstand kan være sterke kvaliteter. Det viktigste er at kvaliteten er reell, lett å forstå og passer en bred nok kjøpergruppe." },
    ],
    cta: { label: "Sammenlign områder på Costa Blanca", href: "/omrader/costa-blanca-nord" },
  },
  {
    slug: "leilighet-eller-villa-costa-blanca",
    title: "Leilighet eller villa på Costa Blanca – hva passer livet du faktisk skal leve?",
    excerpt:
      "Villa gir frihet og privatliv. Leilighet kan gi enklere drift og bedre beliggenhet. Det riktige valget handler mer om bruk enn om prestisje.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Boligvalg",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/omradevalg.svg",
    imageAlt: "Leilighet og villa på Costa Blanca sammenlignet",
    seoTitle: "Leilighet eller villa på Costa Blanca – hva passer best?",
    seoDescription:
      "Sammenlign leilighet og villa på Costa Blanca ut fra vedlikehold, privatliv, beliggenhet, kostnader, feriebruk, bilbehov og videresalg før du kjøper.",
    keywords: ["leilighet eller villa Costa Blanca","villa Spania","leilighet Spania","feriebolig Costa Blanca"],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Mange norske kjøpere begynner med drømmen om villa. Andre vil ha en leilighet som kan låses og forlates. Ingen av delene er automatisk riktig.",
      "Spør hvor mye av tiden du faktisk skal være i boligen, hvor mye vedlikehold du vil eie alene og om beliggenhet er viktigere enn privat tomt.",
    ],
    sections: [
      {
        heading: "Villa: du kjøper kontroll og privatliv",
        body: [
          "Egen tomt, privat basseng, mer uteplass og færre naboer tett på er reelle kvaliteter. For familier eller lengre opphold kan en villa gi en helt annen livsfølelse.",
          "Men alt som er ditt, er også ditt ansvar. Basseng, hage, fasade, tekniske installasjoner og sikkerhet må håndteres selv eller gjennom lokale tjenester.",
        ],
      },
      {
        heading: "Leilighet: du deler kostnader og forenkler driften",
        body: [
          "En god leilighet kan være svært effektiv som feriebolig: heis, parkering, fellesbasseng og et sameie som håndterer store deler av fellesvedlikeholdet.",
          "Til gjengjeld må du forholde deg til comunidad, regler, naboer og beslutninger som tas i fellesskap.",
        ],
      },
      {
        heading: "Samme budsjett kan kjøpe bedre beliggenhet i leilighet",
        body: [
          "En villa krever mer tomt og ligger derfor ofte lenger fra de mest kompakte kystsentrene. Med samme budsjett kan en leilighet gi kortere vei til strand, restauranter og service.",
          "Hvis du verdsetter å leve til fots, kan dette være viktigere enn å ha eget basseng.",
        ],
      },
      {
        heading: "Hvor mye av året står boligen tom?",
        body: [
          "En villa som står tom store deler av året trenger tilsyn. En leilighet i et godt organisert bygg kan være enklere å forlate mellom opphold.",
          "Det betyr ikke at leilighet er vedlikeholdsfri, men ansvarsbildet er ofte enklere for en eier som bor i Norge.",
        ],
      },
      {
        heading: "Sammenlign slik",
        table: {
          headers: ["Prioritet", "Ofte sterkest"],
          rows: [
            ["Privatliv og eget uteområde", "Villa"],
            ["Enkel feriebruk og mindre eget utvendig vedlikehold", "Leilighet"],
            ["Gangavstand i etablerte kystområder", "Leilighet"],
            ["Basseng og uteplass helt for deg selv", "Villa"],
            ["Lås og reis", "Leilighet"],
            ["Større familie og lange opphold", "Villa eller stor leilighet"],
          ],
        },
      },
      {
        heading: "Ikke la boligtypen bli viktigere enn området",
        body: [
          "En villa på feil sted er fortsatt feil bolig. En leilighet med perfekt beliggenhet kan gi mer bruk og større glede enn en større eiendom du alltid må kjøre fra.",
          "Velg derfor først hverdagen og området, og la boligtypen være en konsekvens av det.",
        ],
      },
    ],
    nextSteps: [
      "Bestem hvor mye privat uteareal du faktisk trenger.",
      "Sammenlign årlig drift for én konkret villa og én konkret leilighet.",
      "Vurder hvor lenge boligen står tom mellom opphold.",
      "Test om ønsket område realistisk tilbyr boligtypen innen budsjettet.",
    ],
    faq: [
      { question: "Er villa dyrere å eie enn leilighet?", answer: "Ikke alltid, men villaen har flere kostnader du håndterer direkte. Leiligheten har ofte comunidad. Sammenlign faktiske årsbudsjett på konkrete boliger." },
      { question: "Er leilighet enklere som feriebolig?", answer: "For mange er den det fordi fellesarealer og bygningsdrift deles. Men sameiets økonomi og regler må fortsatt vurderes." },
      { question: "Hva er best for langtidsopphold?", answer: "Det avhenger av plassbehov og hverdag. En romslig leilighet i riktig område kan fungere bedre enn en villa med stor bilavhengighet, og omvendt." },
    ],
    cta: { label: "Se boliger til salgs", href: "/eiendommer" },
  },
  {
    slug: "bolig-som-er-lett-a-selge-igjen-spania",
    title: "Kjøp boligen du vil ha – men ikke glem den dagen du skal selge",
    excerpt:
      "Du kan planlegge å eie boligen i 20 år og likevel måtte selge tidligere. Vi ser på hvilke kvaliteter som gjør en bolig lettere å forstå og kjøpe for neste eier.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Videresalg",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/radgiver.svg",
    imageAlt: "Boligvalg i Spania med tanke på fremtidig videresalg",
    seoTitle: "Slik kjøper du bolig i Spania som blir lettere å selge",
    seoDescription:
      "Beliggenhet, sol, parkering, planløsning, uteareal og adkomst påvirker videresalg. Slik vurderer du neste kjøper før du selv kjøper bolig i Spania.",
    keywords: ["videresalg bolig Spania","selge bolig Costa Blanca","bolig investering Spania","velge bolig Costa Blanca"],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Det er din bolig og den skal først og fremst passe deg. Men det er fornuftig å stille ett ekstra spørsmål før kjøp: Hvem vil forstå verdien av denne boligen den dagen jeg skal selge?",
      "Videresalg handler ikke om å spå prisutviklingen. Det handler om å unngå unødvendige begrensninger i kjøpergruppen.",
    ],
    sections: [
      {
        heading: "Mikrobeliggenhet slår postnummer",
        body: [
          "To boliger i samme kommune kan ha helt forskjellig etterspørsel. Solforhold, støy, adkomst, avstand til service og hva som ligger rett rundt eiendommen betyr ofte mer enn kommunenavnet.",
          "Vurder den konkrete gaten og bygningen, ikke bare området på kartet.",
        ],
      },
      {
        heading: "Planløsning må fungere uten forklaring",
        body: [
          "En bolig med store døde arealer, gjennomgangsrom eller veldig spesielle løsninger kan være riktig for én kjøper og vanskelig for mange andre.",
          "En enkel, logisk planløsning med brukbare soverom, god stue og direkte forbindelse til uteareal er lettere å forstå.",
        ],
      },
      {
        heading: "Parkering blir viktigere når beliggenheten krever bil",
        body: [
          "I bilorienterte områder bør parkering behandles som en del av boligen, ikke som en detalj. Manglende plass eller vanskelig adkomst kan begrense kjøpergruppen betydelig.",
          "I svært sentrale områder kan andre kvaliteter veie opp, men også der er sikker parkering ofte attraktivt.",
        ],
      },
      {
        heading: "Sol og uteareal må være brukbart – ikke bare stort",
        body: [
          "En 100 m² terrasse er lite verdt dersom den er utsatt for sterk vind, mangler privatliv eller får feil sol for bruken din. Et mindre uteareal med god orientering kan fungere langt bedre.",
          "Se hvordan solen faller på boligen i den årstiden du faktisk skal bruke den mest.",
        ],
      },
      {
        heading: "Unngå å betale premium for noe neste kjøper ikke ser verdien av",
        body: [
          "Dyre spesialtilvalg kan være fantastiske for deg, men de kommer ikke nødvendigvis tilbake krone for krone ved salg. Betal for dem fordi du ønsker dem, ikke fordi du antar at de er en investering.",
          "Varig beliggenhet, god standard og praktisk funksjon er enklere for markedet å verdsette.",
        ],
      },
      {
        heading: "Fem kvaliteter jeg ville kontrollert ekstra",
        bullets: [
          "God og dokumenterbar mikrobeliggenhet.",
          "Enkel adkomst og parkering der bil er nødvendig.",
          "Planløsning som fungerer for flere typer kjøpere.",
          "Sol, terrasse og uteareal som faktisk kan brukes.",
          "Ingen åpenbare fremtidige problemer med utsikt, støy eller store vedlikeholdsbehov.",
        ],
      },
    ],
    nextSteps: [
      "Se på boligen med øynene til en fremtidig kjøper i ti minutter.",
      "Sammenlign mikrobeliggenheten med tre konkurrerende boliger.",
      "Kontroller planlagt bygging og forhold rundt eiendommen.",
      "Skill personlige tilvalg fra varige kvaliteter.",
    ],
    faq: [
      { question: "Hvilke boliger er lettest å selge på Costa Blanca?", answer: "Det finnes ingen garanti, men boliger med forståelig beliggenhet, god adkomst, brukbar planløsning, sol og relevante utearealer har kvaliteter mange kjøpere kan verdsette." },
      { question: "Bør jeg kjøpe bare med videresalg i tankene?", answer: "Nei. Boligen skal passe deg. Poenget er å unngå unødvendige svakheter som kan gjøre salget vanskeligere senere." },
      { question: "Er havutsikt viktig for videresalg?", answer: "God og varig havutsikt kan være attraktivt, men den må vurderes sammen med pris, adkomst, gangavstand og andre kvaliteter." },
    ],
    cta: { label: "Se hvordan vi vurderer boliger", href: "/eiendomsradgiver-spania" },
  },
  {
    slug: "bolig-under-bygging-eller-ferdig-spania",
    title: "Kjøpe bolig under bygging eller vente på noe ferdig – hva er smartest for deg?",
    excerpt:
      "Tidlig i et prosjekt kan du få bedre utvalg. Ferdig bolig gir deg mer sikkerhet om det du faktisk kjøper. Vi sammenligner de to valgene uten salgspress.",
    date: "2026-09-29",
    updated: "2026-09-29",
    category: "Nybygg",
    readingTime: "8 min lesing",
    image: "/assets/magasin-covers/kjopsprosess.svg",
    imageAlt: "Nybygg under bygging og ferdig bolig i Spania",
    seoTitle: "Under bygging eller ferdig bolig i Spania – hva passer?",
    seoDescription:
      "Sammenlign bolig under bygging og ferdig nybygg i Spania. Se forskjeller i utvalg, betaling, leveringstid, visning, risiko og hvor raskt du kan bruke boligen.",
    keywords: ["bolig under bygging Spania","ferdig nybygg Spania","kjøpe off plan Spania","nybygg Costa Blanca"],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Når et nytt prosjekt lanseres, er argumentet ofte at de beste enhetene går først. Det kan være riktig. Men det betyr ikke at alle bør kjøpe tidlig.",
      "Kjøp under bygging gir større valg og tid til å planlegge. Ferdig bolig gir langt bedre mulighet til å se utsikt, lys, omgivelser og faktisk sluttresultat før du bestemmer deg.",
    ],
    sections: [
      {
        heading: "Tidlig kjøp: størst utvalg er den reelle fordelen",
        body: [
          "I første fase kan du ofte velge mellom flere etasjer, orienteringer og planløsninger. Dersom prosjektet er riktig, kan dette være viktigere enn en eventuell prisforskjell.",
          "Men du kjøper mer på tegning. Visualiseringer viser intensjonen, ikke hvordan det faktisk føles å stå på terrassen.",
        ],
      },
      {
        heading: "Ferdig bolig: du kan kontrollere mer med egne øyne",
        body: [
          "Når boligen er ferdig kan du vurdere utsikt, innsyn, sol, støy, materialfølelse, fellesområder og hvordan området har utviklet seg.",
          "Ulempen er at de mest attraktive enhetene kan være solgt, og valgmulighetene kan være mindre.",
        ],
      },
      {
        heading: "Betalingsplanen må passe økonomien din",
        body: [
          "Bolig under bygging innebærer normalt betalinger i flere trinn. Det påvirker valuta, likviditet og finansiering. Be om hele betalingsplanen før du vurderer om kjøpet passer.",
          "En ferdig bolig kan kreve at en større del av oppgjøret skjer raskere, men perioden med usikker fremtidig valutakostnad blir kortere.",
        ],
      },
      {
        heading: "Bankgaranti er ikke en detalj",
        body: [
          "Ved forskuddsbetaling på nybygg skal du forstå hvordan innbetalingene er sikret og hvilke dokumenter som gjelder. Dette er et juridisk kontrollpunkt, ikke markedsføring.",
          "Bruk uavhengig advokat til å kontrollere kontrakt, garantier og prosjektets dokumentasjon før større betalinger.",
        ],
      },
      {
        heading: "Leveringstid bør styres av livet ditt, ikke av salgsfasen",
        body: [
          "Hvis du trenger bolig til neste vinter, hjelper det lite at et prosjekt er perfekt dersom levering er to år frem. Hvis du først skal flytte om tre år, kan tidlig kjøp derimot passe svært godt.",
          "Start med din tidslinje før du lar prosjektets salgsplan bestemme.",
        ],
      },
      {
        heading: "En enkel sammenligning",
        table: {
          headers: ["Du prioriterer", "Se først på"],
          rows: [
            ["Størst valg av etasje og orientering", "Tidlig fase"],
            ["Se den faktiske utsikten før kjøp", "Ferdig bolig"],
            ["Bruke boligen snart", "Ferdig eller nær ferdigstillelse"],
            ["Planlegge tilvalg over tid", "Under bygging"],
            ["Minst mulig usikkerhet om sluttresultatet", "Ferdig bolig"],
          ],
        },
      },
    ],
    nextSteps: [
      "Match prosjektets levering mot din egen tidslinje.",
      "Be om betalingsplan og garantidokumentasjon.",
      "Sammenlign tidligfase-enheten med ferdige alternativer i samme budsjett.",
      "Ikke reserver før juridisk kontroll og finansieringsplan er forstått.",
    ],
    faq: [
      { question: "Er det billigere å kjøpe nybygg tidlig?", answer: "Noen prosjekter endrer priser mellom faser, men det er ikke en garanti. Den sikreste fordelen ved tidlig kjøp er ofte større valg av enheter." },
      { question: "Hva er fordelen med ferdig nybygg?", answer: "Du kan se den faktiske boligen, utsikten, solforholdene og fellesområdene før kjøp, og du slipper lang ventetid." },
      { question: "Er forskuddsbetaling på nybygg trygt?", answer: "Betalinger skal håndteres med korrekt juridisk sikkerhet og dokumentasjon. Bruk uavhengig advokat til å kontrollere kontrakt og garantier for det konkrete prosjektet." },
    ],
    cta: { label: "Les om bankgaranti ved nybygg", href: "/guide/bankgaranti-nybygg-spania" },
  },
  {
    slug: "hva-far-du-for-pengene-costa-blanca-nord-na",
    title: "Hva får du for pengene på Costa Blanca Nord akkurat nå?",
    excerpt:
      "Én samlet sammenligning av konkrete prisnivåer fra under €300.000 til rundt €735.000 i Villajoyosa, Benidorm, Polop og Finestrat.",
    date: "2026-09-29",
    updated: "2026-10-07",
    category: "Marked akkurat nå",
    readingTime: "10 min lesing",
    image: "/assets/areas.jpg",
    imageAlt: "Costa Blanca Nord med boliger langs kysten",
    seoTitle: "Hva får du for pengene på Costa Blanca Nord akkurat nå?",
    seoDescription:
      "Sammenlign konkrete boliger og prisnivåer på Costa Blanca Nord fra under 300.000 til rundt 735.000 euro i Villajoyosa, Benidorm, Polop og Finestrat.",
    keywords: [
      "hva får du for pengene Costa Blanca",
      "boligpriser Costa Blanca Nord",
      "bolig Finestrat pris",
      "bolig Benidorm pris",
      "bolig Villajoyosa pris",
      "bolig Polop pris",
      "boligbudsjett Spania",
    ],
    author: { name: "Freddy Bremseth", href: "/om-oss/freddy" },
    intro: [
      "Pris alene sier overraskende lite om hva du faktisk får på Costa Blanca Nord. To boliger kan ligge nesten likt i pris og likevel være svært forskjellige i boligtype, areal, tomt, beliggenhet og hvordan de fungerer i hverdagen.",
      "Derfor samler vi nå de konkrete sammenligningene på én side i stedet for å publisere mange nesten like artikler. Åpne prisnivået som er relevant for deg, sammenlign stedene og bruk tallene som et utgangspunkt – ikke som en automatisk rangering av hva som er et godt kjøp.",
    ],
    sections: [
      {
        heading: "Sammenlign prisnivå først – og deretter hva pengene faktisk kjøper",
        body: [
          "Et prisfilter er nyttig for å begrense markedet, men det kan ikke fortelle deg om du bør prioritere villa, leilighet, penthouse, gangavstand, større tomt eller enklere drift.",
          "Sammenligningene på denne siden bruker konkrete Zen-objekter som markedsøyeblikksbilder. Pris, tilgjengelighet, areal, leveranse og spesifikasjoner må bekreftes på nytt før visning eller reservasjon.",
        ],
      },
      {
        heading: "Ikke bruk kvadratmeterpris som eneste fasit",
        body: [
          "Publisert boligflate kan være målt og presentert forskjellig mellom prosjekter. I tillegg påvirker tomt, terrasse, utsikt, energiklasse, fellesanlegg, leveringsnivå og mikrobeliggenhet hva markedet faktisk priser inn.",
          "Store forskjeller i euro per kvadratmeter er derfor et signal om å undersøke mer – ikke en ferdig konklusjon om hvilken bolig som er best verdi.",
        ],
      },
      {
        heading: "Fra markedspris til ditt reelle budsjett",
        body: [
          "Husk at prisene i sammenligningene er kjøpesummer, ikke totalbudsjett. Skatter, dokument-/stempelavgift der det gjelder, advokat, notarius, register og eventuelle kostnader etter overtakelse kommer i tillegg.",
          "Bruk boligbudsjett-kalkulatoren på siden til å regne bakover fra totalrammen din før du setter makspris i boligsøket.",
        ],
      },
    ],
    nextSteps: [
      "Åpne prisnivået som ligger nær totalrammen din.",
      "Sammenlign områdene før du sammenligner bare antall kvadratmeter.",
      "Regn bakover fra totalbudsjettet til realistisk maksimal kjøpesum.",
      "Be om oppdatert tilgjengelighet og en kort shortlist før du planlegger visning.",
    ],
    faq: [
      {
        question: "Hvor ofte oppdateres prisene i sammenligningen?",
        answer:
          "Dette er markedsøyeblikksbilder. Pris og tilgjengelighet kan endres raskt, så vi bekrefter alltid dagens status før visning eller reservasjon.",
      },
      {
        question: "Er boligen med lavest pris per kvadratmeter det beste kjøpet?",
        answer:
          "Ikke nødvendigvis. Arealgrunnlag, tomt, uteareal, utsikt, prosjekt, standard, beliggenhet og hva som er inkludert må vurderes sammen.",
      },
      {
        question: "Er kjøpskostnader inkludert i prisene?",
        answer:
          "Nei. Prisene er oppgitte kjøpesummer. Skatter og øvrige kjøpskostnader kommer i tillegg og må beregnes ut fra boligtype og den konkrete handelen.",
      },
    ],
    cta: { label: "Se boliger som er tilgjengelige nå", href: "/eiendommer?region=costa-blanca-nord" },
  },
];

export const allArticles: Article[] = [...baseArticles, ...extraArticles, ...corporateArticles];

export function getMagazineArticle(slug: string) {
  return allArticles.find((article) => article.slug === slug);
}

export type Silo = "kjopsprosess" | "guide" | "corporate";

/** Slug → silo. Styrer URL-struktur og tematisk gruppering; resten blir /magasin. */
const SILO_BY_SLUG: Record<string, Silo> = {
  "finansiere-bolig-i-spania": "guide",
  "omradeguide-eiendomskjop-i-spania": "guide",
  "guide-tomtekjop-bygging-i-spania": "guide",
  "utleie-inntektspotensial-bolig-spania": "guide",
  "lopende-kostnader-eie-bolig-spania": "guide",
  "flytte-til-spania-som-pensjonist": "guide",
  "juridiske-fallgruver-boligkjop-spania": "guide",
  "skatt-ved-salg-bolig-spania": "guide",
  "arv-gaveskatt-bolig-spania": "guide",
  "nie-skattenummer-spania": "guide",
  "spansk-bankkonto-valutaveksling": "guide",
  "boliglan-spansk-bank-nordmenn": "guide",
};

export const SILO_META: Record<Silo, { label: string; title: string; href: string; intro: string }> = {
  kjopsprosess: {
    label: "Kjøpsprosess",
    title: "Kjøpsprosessen i Spania",
    href: "/kjopsprosessen",
    intro:
      "Slik jobber Zen Eco Homes fra behovskartlegging til visning, kjøp, overtakelse og oppfølging.",
  },
  corporate: {
    label: "Zen Corporate Homes",
    title: "Kunnskap om bedriftshytte i Spania",
    href: "/bedriftshytte-spania",
    intro: "Praktiske guider for norske bedrifter og organisasjoner som vurderer bedriftshytte, firmabolig eller medlemsbolig på Costa Blanca.",
  },
  guide: {
    label: "Guide",
    title: "Guider om boligkjøp i Spania",
    href: "/guide",
    intro:
      "Alle søkeorienterte guider samlet på ett sted: kjøpe bolig i Spania, områdevalg, nybygg, tomt, finansiering, NIE, juridikk, kostnader, skatt og praktiske steg i kjøpsreisen.",
  },
};

export function articleSilo(article: Article): Silo | undefined {
  return article.silo ?? SILO_BY_SLUG[article.slug];
}

/** Kanonisk basissti for en artikkel: /kjopsprosess, /guide eller /magasin. */
export function articleBasePath(article: Article): string {
  const silo = articleSilo(article);
  return silo ? SILO_META[silo].href : "/magasin";
}

export function articlePath(article: Article): string {
  return `${articleBasePath(article)}/${article.slug}`;
}

export function articlesInSilo(silo: Silo): Article[] {
  return allArticles.filter((article) => articleSilo(article) === silo);
}

/** Slugs som har flyttet til en silo – brukes for 301-redirect fra /magasin. */
export function siloedSlugs(): string[] {
  return allArticles.filter((article) => articleSilo(article)).map((article) => article.slug);
}
