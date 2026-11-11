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
  sections: { heading: string; body: string[]; bullets?: string[]; afterBullets?: string[] }[];
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
      { label: "Finansiering, notar og NIE", href: "/guide/finansiere-bolig-i-spania" },
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
    secondaryCta: { label: "Beregn kjøpskostnadene", href: "/guide/kjope-bolig-i-spania" },
    sections: [
      {
        heading: "Hvorfor mange velger nybygg i Spania",
        body: [
          "Nybygg gir ofte moderne planløsninger, nye tekniske installasjoner, god energieffektivitet og mindre vedlikeholdsbehov de første årene. For mange som kjøper feriebolig i Spania, er det attraktivt å vite at rør, elektriske anlegg, klimaanlegg, vinduer og fellesanlegg er nye, og at boligen er bygget etter dagens tekniske standarder.",
          "En annen fordel med nybygg er muligheten til å velge en bolig som passer egne ønsker og behov. Avhengig av prosjektets fremdrift kan du ofte påvirke materialvalg, overflater og enkelte løsninger før boligen ferdigstilles.",
        ],
        bullets: [
          "Mindre vedlikehold: Nye installasjoner og materialer gir vanligvis lavere vedlikeholdsbehov de første årene.",
          "Energieffektivitet: Moderne isolasjon, vinduer og tekniske løsninger kan gi bedre energiytelse.",
          "Tilpasningsmuligheter: Mulighet til å velge enkelte materialer og løsninger dersom du kjøper tidlig nok i prosjektet.",
          "Moderne standard: Planløsninger, fasiliteter og tekniske løsninger tilpasset dagens boligbehov.",
          "Forutsigbarhet: Du får oversikt over boligens standard, leveranse og forventede ferdigstillelse før overtakelse.",
        ],
        afterBullets: [
          "For å få mest mulig ut av kjøpet er det likevel viktig å sette seg inn i prosjektets leveransebeskrivelse, kontrakt og betalingsplan før du reserverer.",
        ],
      },
      {
        heading: "Kjøp av nybygg før boligen er ferdig",
        body: [
          "Når du kjøper bruktbolig i Spania, kan du undersøke den ferdige boligen og vurdere standard, teknisk tilstand og beliggenhet før du bestemmer deg. Med nybygg kjøper du ofte før boligen er ferdigstilt, og må i større grad basere vurderingen på tegninger, leveransebeskrivelse og dokumentasjon fra utbyggeren.",
          "Nybygg gir gjerne moderne løsninger og mindre vedlikeholdsbehov de første årene, mens bruktboliger kan gi tilgang til etablerte områder og mulighet for raskere overtakelse.",
          "Vil du se nærmere på fordeler og ulemper ved de to boligtypene? Les vår [[sammenligning av nybygg eller bruktbolig på Costa Blanca|/magasin/nybygg-eller-bruktbolig-costa-blanca]].",
        ],
      },
      {
        heading: "Hva du bør kontrollere før du reserverer",
        body: [
          "Før du reserverer et nybygg, bør du undersøke hvem som står bak prosjektet, hvor langt byggeprosessen har kommet, og hva som faktisk inngår i kjøpet. Be om skriftlig dokumentasjon på pris, tilgjengelighet, forventet ferdigstillelse og leveranse.",
          "Jeg anbefaler at en uavhengig spansk advokat kontrollerer prosjektets dokumentasjon og kontraktene før du signerer eller gjør større innbetalinger. Megler, utbygger, notar og kjøpers advokat har forskjellige roller. Advokaten skal ivareta dine interesser.",
        ],
        bullets: [
          "Utbygger: Hvem står bak prosjektet, og hvilke boliger har selskapet levert tidligere?",
          "Byggetillatelser: Foreligger nødvendige tillatelser for prosjektet og byggefasen?",
          "Fremdrift: Når er boligen forventet ferdigstilt, og hva sier kontrakten om eventuelle forsinkelser?",
          "Boligen du kjøper: Hvilken bolig, parkering, bod, terrasse og uteareal inngår i avtalen?",
          "Leveransen: Hva er inkludert i prisen, for eksempel hvitevarer, belysning, klimaanlegg, møbler, basseng og hage?",
          "Betalingsplan: Når skal de ulike innbetalingene gjennomføres, og hvordan er forskuddsbetalingene sikret?",
        ],
      },
      {
        heading: "Betalingsplan og sikring av forskuddsbetalinger",
        body: [
          "Når du kjøper bolig under oppføring, betaler du ofte deler av kjøpesummen før boligen er ferdig. Betalingsplanen varierer fra prosjekt til prosjekt, men fordeles gjerne over byggeperioden frem til sluttoppgjøret ved overtakelse. Ved kjøp av ferdigstilt bolig betales normalt en større del av kjøpesummen på kortere tid. Be om en fullstendig betalingsplan tidlig, slik at du kan planlegge finansieringen og ta høyde for eventuelle endringer i valutakursen dersom du betaler med norske kroner.",
          "Etter dagens regler i Ley de Ordenación de la Edificación skal relevante forskuddsbetalinger, fra tidspunktet lovens vilkår er oppfylt, sikres gjennom godkjent forsikring eller bankgaranti dersom prosjektet ikke blir startet eller ferdigstilt som avtalt.",
          "Reglene krever også at slike forskudd håndteres gjennom en særskilt konto, og garantien skal omfatte forskuddsbeløpene, relevante skatter og lovbestemt rente. Din advokat bør kontrollere at garantien, kontoen, beløpet, kjøpernavnet og den konkrete boligen stemmer før vesentlige overføringer.",
          "Vil du lese mer om kravene for bankgaranti, forskuddsbetalinger og kjøperbeskyttelse? Se [[vår grundige guide til nybygg under oppføring eller innflyttingsklar bolig i Spania|/magasin/nybygg-under-oppforing-eller-innflyttingsklar-spania]].",
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
          "Når du kjøper nybygg i Spania, betaler du normalt 10 % IVA (merverdiavgift) og dokumentavgift (AJD). På Costa Blanca i Comunitat Valenciana er den generelle AJD-satsen 1,4 % fra 1. juni 2026. Det finnes reduserte satser dersom boligen skal brukes som fast bolig og vilkårene er oppfylt.",
          "I tillegg bør du undersøke om det kommer kostnader for tilvalg, møblering eller opparbeiding av uteområder. Dette varierer fra prosjekt til prosjekt, og er ikke alltid inkludert i annonsert pris. Be om en skriftlig oversikt over hva som inngår i prisen, og hvilke tillegg du må regne med. Da får du et mer realistisk bilde av hva boligen faktisk vil koste.",
        ],
        bullets: [
          "IVA: Betales normalt sammen med de ulike innbetalingene dersom boligen kjøpes før den er ferdig.",
          "AJD: Beregnes separat og betales i forbindelse med skjøtet.",
          "Tilvalg og tillegg: Ekstra materialvalg, hvitevarer, møbler, basseng eller hage kan påvirke totalprisen.",
          "Juridisk bistand, notar og eiendomsregister: Kommer i tillegg og bør tas med i totalbudsjettet.",
        ],
      },
      {
        heading: "Leveransebeskrivelsen er like viktig som plantegningen",
        body: [
          "Plantegninger og illustrasjoner gir et inntrykk av hvordan boligen skal bli, men det er leveransebeskrivelsen og kontrakten som viser hvilken standard og hvilke materialer du faktisk får. Kontroller hva som er inkludert i kjøpesummen, og om utbygger kan erstatte avtalte produkter med tilsvarende alternativer.",
          "Ikke ta for gitt at alt du ser i illustrasjoner eller visningsboliger følger med. Be om en skriftlig oversikt over hva som inngår, og hvilke tilvalg eller tilleggskostnader du må regne med.",
          "Vil du vite mer om hva som vanligvis inngår i prisen, og hvilke tilvalg som kan gi ekstra kostnader? Les [[guide til hva som inngår i nybyggprisen i Spania|/magasin/hva-inngar-i-prisen-nybygg-spania]].",
        ],
      },
      {
        heading: "Energiklasse, isolasjon og solceller",
        body: [
          "Nyere byggekrav gir ofte bedre energiytelse enn i mange eldre spanske boliger, men du bør fortsatt lese dokumentasjonen. Energiklasse, isolasjon, vinduer, orientering, solskjerming, ventilasjon og klimaanlegg påvirker både komfort og strømforbruk.",
          "Solceller kan være positivt, men sjekk hva som faktisk er installert eller klargjort, anleggets størrelse, orientering og om løsningen er individuell eller felles.",
        ],
      },
      {
        heading: "Overtakelse: kontroller boligen før sluttoppgjøret",
        body: [
          "Når boligen nærmer seg ferdigstillelse, bør du kontrollere både dokumentasjonen og den fysiske leveransen før sluttoppgjøret. Gå gjennom boligen systematisk, og sjekk at den samsvarer med kontrakten og leveransebeskrivelsen.",
          "Dokumenter eventuelle mangler med bilder og en skriftlig liste. Be om en plan for utbedring, og få advokaten din til å vurdere dokumentasjonen og eventuelle uavklarte forhold før sluttoppgjøret.",
          "Spansk byggelovgivning har ulike ansvarsperioder for bestemte typer byggfeil. Det er viktig å kjenne forskjellen mellom disse og garantier for forskuddsbetalinger. Les mer: [[Feil og mangler i nybygg i Spania – slik går du frem ved overtakelse og reklamasjon|/magasin/feil-mangler-nybygg-spania-reklamasjon]].",
        ],
        bullets: [
          "Overflater og utførelse: Gulv, fliser, vegger, fuger og maling.",
          "Dører og vinduer: Åpning, lukking, låser og tetting.",
          "Tekniske installasjoner: Vann, avløp, strøm, ventilasjon og klimaanlegg.",
          "Avtalte leveranser: Hvitevarer, belysning, garderober, basseng, hage og eventuelle tilvalg.",
          "Dokumentasjon: Nødvendige ferdigstillelses- og bruksdokumenter, energidokumentasjon og garantier.",
        ],
      },
      {
        heading: "Tidlig prosjektfase eller nesten ferdig?",
        body: [
          "Kjøper du tidlig i et byggeprosjekt, får du ofte flere boligenheter å velge mellom. Du kan ha større mulighet til å velge etasje, orientering, utsikt og plassering, og i noen prosjekter kan du også påvirke materialvalg og tilvalg før byggingen har kommet for langt.",
          "Prisene kan endre seg gjennom byggeprosessen, og noen utbyggere justerer prisene etter hvert som prosjektet utvikles. Ved å kjøpe tidlig kan du derfor i enkelte tilfeller få en gunstigere pris, samtidig som du gjerne har flere boliger å velge mellom.",
          "Kjøper du tidlig, må du samtidig ta utgangspunkt i tegninger, beskrivelser og eventuelle visningsboliger når du vurderer hvordan den ferdige boligen og omgivelsene vil bli. Det kan være lurt å undersøke solforhold, utsikt, innsyn, fremtidige byggetrinn og hvordan fellesområdene er planlagt.",
          "Velger du en ferdigstilt eller nesten ferdig bolig, får du mulighet til å se mer av det faktiske resultatet før du bestemmer deg. Du kan undersøke utsikten fra terrassen, vurdere solforhold, materialer, fellesområder og omgivelsene rundt boligen. Leveringstiden er gjerne kortere, men utvalget av boliger kan være mer begrenset, og mulighetene for individuelle tilpasninger færre.",
          "Prosjektfasen påvirker også hvordan kjøpet finansieres. Ved kjøp under oppføring fordeles betalingen ofte over byggeperioden. Det gir deg mulighet til å planlegge økonomien over lengre tid, men du bør også ta høyde for valutakursen dersom du betaler med norske kroner. Ved kjøp av ferdig bolig betales normalt en større del av kjøpesummen på kortere tid.",
          "Hva som passer best, avhenger av dine ønsker og behov. Ønsker du størst mulig valgfrihet og mulighet til å påvirke boligens utforming, kan det lønne seg å se på prosjekter tidlig i byggefasen. Vil du heller se den ferdige boligen før du kjøper og kunne flytte inn raskere, kan en innflyttingsklar bolig være et godt alternativ.",
          "Vil du sammenligne fordeler og ulemper ved å kjøpe bolig under oppføring eller velge en ferdigstilt bolig? Les [[vår guide til nybygg under oppføring eller innflyttingsklar bolig i Spania|/magasin/nybygg-under-oppforing-eller-innflyttingsklar-spania]].",
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
        question: "Kan prisene på nybygg forhandles?",
        answer:
          "Utbyggere har ofte faste prislister, men det kan i enkelte prosjekter være rom for å forhandle om tilvalg, møbler, hvitevarer, betalingsplan eller andre kommersielle vilkår. Mulighetene varierer mellom utbyggere og prosjektfaser. Sammenlign alltid totalpakken, ikke bare boligprisen.",
      },
      {
        question: "Hvor lang tid tar det før et nybygg er ferdig?",
        answer:
          "Det avhenger av hvor langt prosjektet har kommet når du kjøper. En bolig som fortsatt er under oppføring, kan ha betydelig lengre leveringstid enn en ferdigstilt bolig. Sjekk forventet ferdigstillelse og avtalte leveringsfrister i kontrakten. Vil du sammenligne fordeler og ulemper ved de ulike prosjektfasene? Les [[vår guide til nybygg under oppføring eller innflyttingsklar bolig i Spania|/magasin/nybygg-under-oppforing-eller-innflyttingsklar-spania]].",
      },
    ],
    related: [
      { label: "Kjøpe bolig i Spania – komplett guide", href: "/guide/kjope-bolig-i-spania" },
      { label: "Kostnader ved boligkjøp – med kalkulator", href: "/guide/kjope-bolig-i-spania" },
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
