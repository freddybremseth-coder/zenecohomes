// Innlandsavdelingen (zenecohomes.com/inland).
// All merkevaretekst og område-copy for innlandet samles her, slik at navn og
// posisjonering kan justeres ett sted.

export const INLAND_BRAND = {
  name: "ZenEco Inland",
  tagline: "Fincaer, landsbyhus og det ekte Spania – en time fra kysten",
  // Kort beskrivelse brukt i metadata og strukturerte data.
  description:
    "Norsk rådgiver for kjøp av finca, landsbyhus, gård og tomt i innlandet på Costa Blanca – Biar, Villena, Sax, Castalla, Pinoso, Monóvar og Hondón-dalene.",
  leadSource: "zeneco-inland",
};

export type InlandTown = {
  slug: string;
  name: string;
  title: string;
  eyebrow: string;
  intro: string;
  body: string[];
  highlights: string[];
  /** Søkeord som matcher eiendommer i RealtyFlow/feed mot dette stedet. */
  matchTerms: string[];
  photo: string;
};

export const inlandTowns: InlandTown[] = [
  {
    slug: "biar",
    name: "Biar",
    title: "Bolig og finca i Biar",
    eyebrow: "Middelalderlandsby · 650 moh",
    intro:
      "Biar er en av de best bevarte middelalderlandsbyene i Alicante-provinsen – smale gater, et borgtårn fra 1100-tallet over hustakene, og et levende landsbyliv hele året. Det er her Freddy selv bor og driver olivengård.",
    body: [
      "Landsbyen ligger ved foten av Serra de Mariola, med fjelluft, oliven- og mandellunder og et klima som er merkbart friskere enn kysten om sommeren. Rundt landsbyen finner du fincaer og gårder med store tomter, og i selve landsbyen tradisjonelle landsbyhus med mye sjel.",
      "Biar har det som gjør en innlandslandsby levedyktig: skole, helsetilbud, butikker, restauranter og et sterkt lokalmiljø med fester og tradisjoner. Alicante og flyplassen når du på under en time.",
    ],
    highlights: ["Borg fra 1100-tallet og bevart gamleby", "Fincaer og gårder med store tomter", "Ca. 45–55 min til Alicante flyplass"],
    matchTerms: ["biar"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pueblo_y_castillo_de_Biar%2C_Alicante.jpg/960px-Pueblo_y_castillo_de_Biar%2C_Alicante.jpg",
  },
  {
    slug: "villena",
    name: "Villena",
    title: "Bolig i Villena",
    eyebrow: "By med borg, vin og AVE-tog",
    intro:
      "Villena er innlandets 'hovedstad' – en historisk by med borgen Castillo de la Atalaya, egen stasjon på høyhastighetslinjen og alt av byservice, omgitt av vinmarker og landbruksland.",
    body: [
      "Her får du byliv i spansk format: handlegater, marked, restauranter, sykehus og skoler – og likevel er du minutter unna åpne landskap med fincaer og gårder til priser langt under kysten.",
      "AVE-stasjonen gjør Villena unik i innlandet: Madrid og Alicante på rundt 20–40 minutters togtur gjør byen praktisk både for helårsboende og for deg som pendler til og fra Norge.",
    ],
    highlights: ["Full byservice og sykehus", "AVE-stasjon – Alicante på ca. 20 min", "Vinområde med lange tradisjoner"],
    matchTerms: ["villena"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sierra_de_la_Villa._Villena._Castillo_de_la_Atalaya_1.jpg/960px-Sierra_de_la_Villa._Villena._Castillo_de_la_Atalaya_1.jpg",
  },
  {
    slug: "sax",
    name: "Sax",
    title: "Bolig i Sax",
    eyebrow: "Borgen på klippen · Vinalopó-dalen",
    intro:
      "Sax kjenner du igjen på mils avstand: borgen ligger på en smal klipperygg rett over byen. Under den finner du en arbeidsom, ekte spansk småby i Vinalopó-dalen med gode priser på både byhus og fincaer.",
    body: [
      "Sax ligger praktisk til langs A-31 mellom Alicante og Villena, med togstasjon og kort vei til både Elda/Petrer og Villena. Det gjør byen til et godt utgangspunkt for deg som vil ha innlandsliv uten å gi slipp på hverdagslogistikken.",
      "Rundt byen ligger jordbruksland og casas de campo, ofte med etablerte hager, brønner og uthus – eiendomstyper som nesten ikke finnes på kysten lenger.",
    ],
    highlights: ["Særpreget borg og levende sentrum", "Togstasjon og enkel adkomst via A-31", "Casas de campo med etablerte tomter"],
    matchTerms: ["sax"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sax.Castillo.jpg/960px-Sax.Castillo.jpg",
  },
  {
    slug: "castalla",
    name: "Castalla",
    title: "Bolig i Castalla",
    eyebrow: "Foia de Castalla · fjell og fincaer",
    intro:
      "Castalla ligger i en vid dal omkranset av fjell, med borgen på haugen midt i byen – og med noe av den korteste kjøreveien til Alicante av alle innlandsområdene.",
    body: [
      "Dalen (Foia de Castalla) rommer også Ibi, Onil og Tibi, og har et variert tilbud av landsbyhus, villaer i urbanisasjoner og fincaer. Området har solid lokal økonomi og infrastruktur, og motorveien tar deg til Alicante på rundt en halvtime.",
      "For deg som vil ha fjellnatur rett utenfor døren – Maigmó og Sierra del Menejador – og samtidig rask vei til kysten, er Castalla-dalen et av de mest praktiske valgene i innlandet.",
    ],
    highlights: ["Ca. 30–40 min til Alicante", "Borg, gamleby og ekte landsbyliv", "Fjellnatur og kjøligere somre"],
    matchTerms: ["castalla", "onil", "ibi", "tibi"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Castillo_de_Castalla_visto_de_lejos_03.jpg/960px-Castillo_de_Castalla_visto_de_lejos_03.jpg",
  },
  {
    slug: "banyeres-de-mariola",
    name: "Banyeres de Mariola",
    title: "Bolig i Banyeres de Mariola",
    eyebrow: "Provinsens høyestliggende landsby",
    intro:
      "Banyeres de Mariola ligger på over 800 meter, inne i naturparken Serra de Mariola – frisk fjelluft, elven Vinalopós kilder og en landsby med borg, historie og sterke tradisjoner.",
    body: [
      "Dette er valget for deg som vil ha fjell-Spania på ordentlig: kastanje- og furuskog, turstier rett fra døren, kalde vinternetter med peiskos og somre der du sover godt uten aircondition.",
      "Landsbyen har butikker, skole og et aktivt foreningsliv, og du når både Alcoy, Villena og Ontinyent på under en halvtime.",
    ],
    highlights: ["Inne i naturparken Serra de Mariola", "Kjølige somre – over 800 moh", "Levende landsby med full service"],
    matchTerms: ["banyeres", "bañeres", "beneixama", "camp de mirra", "canada", "cañada"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Banyeres._Castell_1.JPG/960px-Banyeres._Castell_1.JPG",
  },
  {
    slug: "pinoso",
    name: "Pinoso",
    title: "Bolig og finca i Pinoso",
    eyebrow: "Vin, marmor og godt liv",
    intro:
      "Pinoso (El Pinós) er innlandets mest kjente adresse blant utenlandske kjøpere – en velstående vin- og marmorby med ry for god mat, godt vann og noen av Spanias beste Monastrell-viner.",
    body: [
      "Byen er kjent for arroz con conejo y caracoles, vinkooperativet og et rikt tilbud av fincaer og landsteder i alle prisklasser rundt landsbyene Ubeda, Lel, Encebras og Casas del Pino.",
      "Pinoso har et etablert internasjonalt miljø med gode håndverkere, meglere og servicetilbud vant til utenlandske eiere – en myk start på innlandslivet, med Alicante og Murcia cirka 45–60 minutter unna.",
    ],
    highlights: ["Stort utvalg fincaer og landsteder", "Etablert internasjonalt miljø", "Vinlandskap og sterk lokal økonomi"],
    matchTerms: ["pinoso", "el pinos", "el pinós", "ubeda", "encebras"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Pinoso-_Torre_del_Reloj.jpg/960px-Pinoso-_Torre_del_Reloj.jpg",
  },
  {
    slug: "monovar",
    name: "Monóvar",
    title: "Bolig i Monóvar",
    eyebrow: "Vinby med kort vei til alt",
    intro:
      "Monóvar er en klassisk spansk vinby – hjembyen til forfatteren Azorín – med bodegas, mandel- og vinmarker og et stort omland av fincaer mellom byen og grensen mot Murcia.",
    body: [
      "Byen har alt av daglig service og ligger bare 10–15 minutter fra Elda/Petrer og motorveien. Til Alicante og flyplassen kjører du på rundt 35–45 minutter – blant det korteste du finner for et ekte finca-område.",
      "Rundt Monóvar og nabolandsbyene La Romana, Algueña og Salinas ligger noen av innlandets mest prisgunstige landsteder, ofte med vinmark, mandeltrær og romslige tomter.",
    ],
    highlights: ["Ca. 35–45 min til flyplassen", "Vinmarker og prisgunstige fincaer", "Ekte spansk byliv uten turisme"],
    matchTerms: ["monovar", "monóvar", "alguena", "algueña", "salinas"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Monovar.Ermita_de_Santa_B%C3%A1rbara.jpg/960px-Monovar.Ermita_de_Santa_B%C3%A1rbara.jpg",
  },
  {
    slug: "hondon-dalene",
    name: "Hondón-dalene",
    title: "Bolig i Hondón-dalene",
    eyebrow: "Hondón de las Nieves & de los Frailes",
    intro:
      "Hondón-dalene er innlandets mest etablerte 'expat-daler' – to landsbyer i et vakkert vinlandskap 30 minutter fra kysten, med et stort utvalg villaer og fincaer bygget for helårsliv.",
    body: [
      "Her finner du et modent marked med mange ferdig oppgraderte eiendommer: villaer med basseng, lovlige fincaer med all dokumentasjon på plass, og et servicetilbud som er vant til utenlandske eiere.",
      "Dalene ligger perfekt til for deg som vil ha innlandsprisene og roen, men strand i Alicante eller Elche-området på en drøy halvtime.",
    ],
    highlights: ["Ca. 30–40 min til kysten", "Modent marked, mange villaer med basseng", "Vinlandskap og rolige landsbyer"],
    matchTerms: ["hondon", "hondón", "la canalosa"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hond%C3%B3n_de_las_Nieves_-_Plaza_de_la_Villa_y_Ayuntamiento.jpg/960px-Hond%C3%B3n_de_las_Nieves_-_Plaza_de_la_Villa_y_Ayuntamiento.jpg",
  },
  {
    slug: "aspe",
    name: "Aspe",
    title: "Bolig og finca i Aspe",
    eyebrow: "Bordruer og nybygg · Vinalopó",
    intro:
      "Aspe ligger i Vinalopó-dalen, kjent for de innpakkede bordruene (uva embolsada), et livlig sentrum rundt Basílica del Socorro og noe av den korteste veien til flyplassen av alle innlandsområdene. Et voksende område med både tradisjonelle fincaer og moderne nybygg.",
    body: [
      "Aspe er en ekte spansk arbeidsby som lever hele året – med marked, butikker, skoler og helsetilbud – omgitt av druemarker, oliven og mandeltrær. Rundt byen finner du casas de campo og fincaer med romslige tomter, og de siste årene har det kommet et godt tilbud av nybygde villaer med basseng.",
      "Beliggenheten er noe av det sterkeste: Alicante flyplass, Elche og motorveien nås på 20–30 minutter, og både kysten ved Santa Pola og innlandsroen i Hondón-dalene ligger like ved. Det gjør Aspe til et praktisk valg for deg som vil ha plass og pris uten å gi slipp på nærheten til alt.",
    ],
    highlights: ["Ca. 20–30 min til Alicante flyplass", "Nybygde villaer og finca-tomter", "Levende by med druer, oliven og mandel"],
    matchTerms: ["aspe"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Basilica_de_Aspe.JPG/960px-Basilica_de_Aspe.JPG",
  },
  {
    slug: "novelda",
    name: "Novelda",
    title: "Bolig i Novelda",
    eyebrow: "Modernisme, marmor og safran",
    intro:
      "Novelda er en velstående vin- og industriby kjent for marmor, safran og krydder – og for enestående modernistisk arkitektur, kronet av det Gaudí-inspirerte Santuario de Santa María Magdalena på åsen over byen.",
    body: [
      "Sentrum har full byservice, praktbygg fra modernismen og et rikt kulturliv, mens omlandet mot Monóvar, Aspe og La Romana byr på vinmarker, mandeltrær og fincaer i alle prisklasser. For deg som vil ha en by med sjel og historie – ikke bare en soveby – er Novelda et av innlandets mest komplette valg.",
      "Byen ligger midt i Vinalopó med motorvei til Alicante og flyplassen på rundt 30 minutter, og med Elda/Petrer, Monóvar og Pinoso som nære naboer. Godt utgangspunkt både for helårsliv og for deg som pendler til og fra Norge.",
    ],
    highlights: ["Full byservice og rikt kulturliv", "Gaudí-inspirert santuario og modernisme", "Ca. 30 min til Alicante flyplass"],
    matchTerms: ["novelda"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Santuario_Novelda.jpg/960px-Santuario_Novelda.jpg",
  },
  {
    slug: "la-romana",
    name: "La Romana",
    title: "Bolig og finca i La Romana",
    eyebrow: "Stille vindal mellom Pinoso og Novelda",
    intro:
      "La Romana er en liten, rolig landsby omgitt av vinmarker og mandeltrær, midt mellom Pinoso, Novelda og Monóvar. Et etablert favorittområde for utenlandske kjøpere som vil ha ekte finca-ro uten å være langt fra service.",
    body: [
      "Her handler livet om det landlige: druemarker, olivenlunder og casas de campo med brønner, uthus og romslige tomter – ofte til priser godt under de mer kjente nabolandsbyene. Landsbyen selv har det daglige du trenger, og et hyggelig, uturistisk lokalmiljø.",
      "Til tross for roen er du bare 10–15 minutter fra Novelda og Pinoso, og rundt 35–45 minutter fra Alicante flyplass. La Romana passer deg som vil ha innlandslivet på sitt mest autentiske, med naboer, natur og god plass.",
    ],
    highlights: ["Prisgunstige fincaer og landsteder", "Vinmarker og mandeltrær rundt landsbyen", "Rolig, uturistisk lokalmiljø"],
    matchTerms: ["la romana", "romana"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/La_Romana_Sunrise.jpg/960px-La_Romana_Sunrise.jpg",
  },
  {
    slug: "monforte-del-cid",
    name: "Monforte del Cid",
    title: "Bolig i Monforte del Cid",
    eyebrow: "Vin og golf · minutter fra flyplassen",
    intro:
      "Monforte del Cid ligger blant vinmarker i Vinalopó, bare et kvarter fra Alicante flyplass, med golfbanen Font del Llop og et voksende tilbud av nybygg, villaer og fincaer. Kombinasjonen av landlig ro og topp beliggenhet gjør byen stadig mer ettertraktet.",
    body: [
      "Byen har et hyggelig historisk sentrum med den gamle morería-bydelen, alt av daglig service, og et omland av druemarker og landsteder. Rundt golfresortet Font del Llop finner du moderne villaer og bungalower, mens du utenfor byen fortsatt finner klassiske fincaer med plass og tomt.",
      "Det som virkelig skiller Monforte ut er nærheten: Alicante flyplass på cirka 15 minutter, motorvei til både kysten og innlandet, og Elche, Novelda og Aspe som nære naboer. Ideelt for deg som vil ha innlandsro og enkel reise til og fra Norge i samme pakke.",
    ],
    highlights: ["Ca. 15 min til Alicante flyplass", "Golf (Font del Llop) og moderne nybygg", "Vinmarker, morería og ekte byliv"],
    matchTerms: ["monforte", "monforte del cid"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vi%C3%B1edos_en_Monforte_del_Cid.jpg/960px-Vi%C3%B1edos_en_Monforte_del_Cid.jpg",
  },
];

export function getInlandTown(slug: string) {
  return inlandTowns.find((town) => town.slug === slug) || null;
}
