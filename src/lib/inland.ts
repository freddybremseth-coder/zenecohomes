// Innlandsavdelingen (zenecohomes.com/inland).
// All merkevaretekst og område-copy for innlandet samles her, slik at navn og
// posisjonering kan justeres ett sted.

export const INLAND_BRAND = {
  name: "ZenEco Inland",
  tagline: "Fincaer, landsbyhus og det ekte Spania – mellom kyst, fjell og vinland",
  // Kort beskrivelse brukt i metadata og strukturerte data.
  description:
    "Norsk rådgiver for kjøp av finca, landsbyhus, gård og tomt i innlandet i Alicante og Murcia – Biar, Busot, Villena, Sax, Pinoso, Hondón de las Nieves, Jumilla og flere områder.",
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
  /** Murcia settes eksplisitt; øvrige steder ligger i Alicante-provinsen. */
  region?: "Alicante" | "Murcia";
};

// Konkrete reisetider er omtrentlige og skal jevnlig verifiseres mot oppdaterte
// rute-/transportkilder. Trafikk, rutetilbud og avgang kan endre faktisk reisetid.
export const inlandTowns: InlandTown[] = [
  {
    slug: "biar",
    name: "Biar",
    title: "Bolig og finca i Biar",
    eyebrow: "Middelalderlandsby · ca. 700 moh",
    intro:
      "Biar er en av de best bevarte middelalderlandsbyene i Alicante-provinsen – smale gater, et borgtårn fra 1100-tallet over hustakene, og et levende landsbyliv hele året. Familien har en oliveneiendom i Biar, så området er også en del av vår egen hverdag.",
    body: [
      "Landsbyen ligger ved foten av Serra de Mariola, med fjelluft, oliven- og mandellunder og et klima som er merkbart friskere enn kysten om sommeren. Rundt landsbyen finner du fincaer og gårder med store tomter, og i selve landsbyen tradisjonelle landsbyhus med mye sjel.",
      "Biar har det som gjør en innlandslandsby levedyktig: skole, helsetilbud, butikker, restauranter og et sterkt lokalmiljø med fester og tradisjoner. Alicante-Elche flyplass når du normalt på under en time med bil.",
    ],
    highlights: ["Borg fra 1100-tallet og bevart gamleby", "Fincaer og gårder med store tomter", "Under en time med bil til Alicante-Elche flyplass"],
    matchTerms: ["biar"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pueblo_y_castillo_de_Biar%2C_Alicante.jpg/960px-Pueblo_y_castillo_de_Biar%2C_Alicante.jpg",
  },
  {
    slug: "villena",
    name: "Villena",
    title: "Bolig i Villena",
    eyebrow: "By med borg, vin og høyhastighetstog",
    intro:
      "Villena er et viktig bysentrum i innlandet – en historisk by med borgen Castillo de la Atalaya, egen stasjon på høyhastighetslinjen og et bredt servicetilbud, omgitt av vinmarker og landbruksland.",
    body: [
      "Her får du byliv i spansk format: handlegater, marked, restauranter, helsetjenester og skoler – og likevel er du minutter unna åpne landskap med fincaer og gårder til priser langt under kysten.",
      "Høyhastighetsstasjonen Villena AV gir tog til Alicante-Terminal på rundt 20 minutter og Madrid på litt over to timer. Stasjonen ligger omtrent seks kilometer utenfor sentrum, så faktisk dør-til-dør-reisetid blir lengre enn selve togtiden.",
    ],
    highlights: ["Full byservice og helsetjenester", "Villena AV – Alicante ca. 20 min, Madrid litt over 2 timer", "Vinområde med lange tradisjoner"],
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
      "Castalla ligger i en vid dal omkranset av fjell, med borgen på haugen midt i byen og gode veiforbindelser sørover mot Alicante.",
    body: [
      "Dalen (Foia de Castalla) rommer også Ibi, Onil og Tibi, og har et variert tilbud av landsbyhus, villaer i urbanisasjoner og fincaer. Området har solid lokal økonomi og infrastruktur, og Alicante-Elche flyplass ligger rundt en halvtimes kjøring unna under normale forhold.",
      "For deg som vil ha fjellnatur rett utenfor døren – Maigmó, Xorret de Catí og fjellene rundt Foia de Castalla – og samtidig rask vei mot Alicante og kysten, er Castalla-dalen et praktisk valg i innlandet.",
    ],
    highlights: ["Ca. 30–35 min med bil til Alicante-Elche flyplass", "Borg, gamleby og ekte landsbyliv", "Fjellnatur og kjøligere innlandsklima"],
    matchTerms: ["castalla", "onil", "ibi", "tibi"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Castillo_de_Castalla_visto_de_lejos_03.jpg/960px-Castillo_de_Castalla_visto_de_lejos_03.jpg",
  },
  {
    slug: "banyeres-de-mariola",
    name: "Banyeres de Mariola",
    title: "Bolig i Banyeres de Mariola",
    eyebrow: "Fjellandsby · over 800 moh",
    intro:
      "Banyeres de Mariola ligger på over 800 meter ved Serra de Mariola – med frisk fjelluft, Vinalopó-elvens kilder i området og en landsby med borg, historie og sterke tradisjoner.",
    body: [
      "Dette er valget for deg som vil ha fjell-Spania på ordentlig: skog, turstier, tydeligere vinter og svalere netter enn ved kysten gjennom deler av året.",
      "Landsbyen har butikker, skole og et aktivt foreningsliv, med veiforbindelser videre til Alcoy, Villena og Ontinyent.",
    ],
    highlights: ["Ved Serra de Mariola", "Over 800 moh", "Levende landsby med lokale tjenester"],
    matchTerms: ["banyeres", "bañeres", "beneixama", "camp de mirra", "canada", "cañada"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Banyeres._Castell_1.JPG/960px-Banyeres._Castell_1.JPG",
  },
  {
    slug: "busot",
    name: "Busot",
    title: "Bolig og finca i Busot",
    eyebrow: "Cabeçó d'Or · fjell bare kilometer fra kysten",
    intro:
      "Busot er et av de mest interessante overgangsområdene mellom kyst og innland: en liten fjellandsby nord for Alicante, ved Cabeçó d'Or og de kjente Cuevas del Canelobre, men samtidig bare rundt sju kilometer fra kysten.",
    body: [
      "Her kan du bo med fjell, åpent landskap og landsbyfølelse rundt deg, samtidig som El Campello, Alicante og kystlivet fortsatt er lett tilgjengelig. Det gjør Busot interessant for kjøpere som liker innlandsroen, men ikke ønsker å flytte langt bort fra sjøen.",
      "Kommunen har skole, lege, lokale tjenester og et aktivt landsbyliv. Rundt sentrum og i områdene ned mot kysten finner du villaer, landsteder og tomter med mer luft rundt seg enn i de tetteste kystområdene.",
    ],
    highlights: ["Ca. 7 km fra kysten", "Cabeçó d'Or og Cuevas del Canelobre", "Ca. 19 km nord for Alicante"],
    matchTerms: ["busot", "busott"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Busot_001.jpg",
  },
  {
    slug: "pinoso",
    name: "Pinoso",
    title: "Bolig og finca i Pinoso",
    eyebrow: "Vin, marmor og godt liv",
    intro:
      "Pinoso (El Pinós) er et kjent innlandsområde blant utenlandske kjøpere – en vin- og marmorby med sterk lokal matkultur og lange tradisjoner for Monastrell-vin.",
    body: [
      "Byen er kjent for arroz con conejo y caracoles, vinkooperativet og et rikt tilbud av fincaer og landsteder i alle prisklasser rundt landsbyene Ubeda, Lel, Encebras og Casas del Pino.",
      "Pinoso har et etablert internasjonalt miljø og servicetilbud vant til utenlandske eiere. Kommunen oppgir Alicante-Elche flyplass til rundt 61 km og ca. 45 minutter med bil, mens Murcia by ligger omtrent 50–55 minutter unna med bil under normale forhold.",
    ],
    highlights: ["Stort utvalg fincaer og landsteder", "Alicante-Elche flyplass ca. 45 min med bil", "Vinlandskap og sterk lokal økonomi"],
    matchTerms: ["pinoso", "el pinos", "el pinós", "ubeda", "encebras"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Pinoso-_Torre_del_Reloj.jpg/960px-Pinoso-_Torre_del_Reloj.jpg",
  },
  {
    slug: "jumilla",
    name: "Jumilla",
    title: "Bolig og finca i Jumilla",
    eyebrow: "Murcia · Monastrell, bodegas og fjell",
    intro:
      "Jumilla ligger i Altiplano nord i Murcia-regionen og er et veletablert vinområde. Byen, borgen og landskapet rundt er tett knyttet til Monastrell, bodegas, lokal gastronomi og et tørt, åpent innland med sterk egen identitet.",
    body: [
      "Dette er et større og mer selvstendig innlandssentrum enn mange av landsbyene i Alicante. Du får handel, restauranter, kultur og daglige tjenester i byen, mens vinmarker og landlige eiendommer begynner kort vei utenfor sentrum.",
      "Jumilla passer spesielt godt for deg som liker vinland, store horisonter og et mer utpreget innlandsklima. Sierra de Santa Ana sør for byen gir turterreng og natur, og Ruta del Vino gjør lokale bodegas og mattradisjoner til en naturlig del av hverdagen.",
    ],
    highlights: ["DOP Jumilla og Monastrell", "Historisk sentrum og Castillo de Jumilla", "Sierra de Santa Ana og vinruter"],
    matchTerms: ["jumilla", "jumella"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castillo_de_Jumilla.jpg/1024px-Castillo_de_Jumilla.jpg",
    region: "Murcia",
  },
  {
    slug: "monovar",
    name: "Monóvar",
    title: "Bolig i Monóvar",
    eyebrow: "Vinby med kort vei til alt",
    intro:
      "Monóvar er en klassisk spansk vinby – hjembyen til forfatteren Azorín – med bodegas, mandel- og vinmarker og et stort omland av fincaer mellom byen og grensen mot Murcia.",
    body: [
      "Byen har alt av daglig service og ligger rundt 10–15 minutter fra Elda/Petrer med bil. Monóvar kommune oppgir Alicante-Elche flyplass som nærmeste flyplass, omtrent 42 km unna.",
      "Rundt Monóvar og nabolandsbyene La Romana, Algueña og Salinas ligger mange landsteder, ofte med vinmark, mandeltrær og romslige tomter.",
    ],
    highlights: ["Ca. 42 km til Alicante-Elche flyplass", "Vinmarker og fincaer", "Ekte spansk byliv uten masseturisme"],
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
      "Hondón-dalene består av to landsbyområder i et vakkert vinlandskap og er godt kjent blant internasjonale boligkjøpere som ønsker villa, finca og helårsliv i innlandet.",
    body: [
      "Her finner du et modent marked med villaer, fincaer og landsteder i ulike aldre og standarder. Som ellers i innlandet må regulering, registrering, vann, strøm, adkomst og øvrig dokumentasjon kontrolleres konkret for hver eiendom.",
      "Kysten er fortsatt innen praktisk kjøreavstand: fra Hondón de las Nieves er det rundt 35 minutter med bil til Santa Pola under normale forhold. Fra andre deler av dalene varierer reisetiden.",
    ],
    highlights: ["Hondón de las Nieves–Santa Pola ca. 35 min med bil", "Etablert marked med villaer og fincaer", "Vinlandskap og rolige landsbyer"],
    matchTerms: ["hondon", "hondón", "la canalosa"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hond%C3%B3n_de_las_Nieves_-_Plaza_de_la_Villa_y_Ayuntamiento.jpg/960px-Hond%C3%B3n_de_las_Nieves_-_Plaza_de_la_Villa_y_Ayuntamiento.jpg",
  },
  {
    slug: "hondon-de-las-nieves",
    name: "Hondón de las Nieves",
    title: "Bolig og finca i Hondón de las Nieves",
    eyebrow: "El Fondó de les Neus · vinmarker og Sierra de Crevillent",
    intro:
      "Hondón de las Nieves – på valenciansk El Fondó de les Neus – ligger i Medio Vinalopó, beskyttet av Sierra de Crevillent og omgitt av vinmarker, mandeltrær og oliven. Det er en egen landsbyprofil innenfor de større Hondón-dalene.",
    body: [
      "Landsbyen gir en rolig, lokal hverdag med sentrum, kommunale tjenester og La Canalosa i samme kommune, mens landskapet rundt er åpent og landlig. Her er det lett å forstå hvorfor området tiltrekker kjøpere som ønsker større uteplass og mindre tetthet enn ved kysten.",
      "Samtidig er dette et godt sted å vurdere hvis du vil ha innlandsfølelse uten å gå helt ut til de dypeste delene av Alicante-provinsen. Vinlandskapet, åsene og landsbylivet gir karakter, mens Aspe, Elche-området og kysten fortsatt ligger innen praktisk rekkevidde.",
    ],
    highlights: ["Også kjent som El Fondó de les Neus", "Vinmarker, mandel- og oliventrær", "Ved Sierra de Crevillent"],
    matchTerms: [
      "hondon de las nieves",
      "hondón de las nieves",
      "el fondo de les neus",
      "el fondó de les neus",
      "fondo de les neus",
      "fondó de les neus",
      "la canalosa",
    ],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hond%C3%B3n_de_las_Nieves_-_Plaza_de_la_Villa_y_Ayuntamiento.jpg/960px-Hond%C3%B3n_de_las_Nieves_-_Plaza_de_la_Villa_y_Ayuntamiento.jpg",
  },
  {
    slug: "aspe",
    name: "Aspe",
    title: "Bolig og finca i Aspe",
    eyebrow: "Bordruer og nybygg · Vinalopó",
    intro:
      "Aspe ligger i Vinalopó-dalen, kjent for de innpakkede bordruene (uva embolsada), et livlig sentrum rundt Basílica del Socorro og god forbindelse til Alicante-Elche flyplass. Et voksende område med både tradisjonelle fincaer og moderne nybygg.",
    body: [
      "Aspe er en ekte spansk arbeidsby som lever hele året – med marked, butikker, skoler og helsetilbud – omgitt av druemarker, oliven og mandeltrær. Rundt byen finner du casas de campo og fincaer med romslige tomter, og de siste årene har det kommet et godt tilbud av nybygde villaer med basseng.",
      "Beliggenheten er noe av det sterkeste: Alicante-Elche flyplass ligger rundt 28 km vei unna og omtrent 20–25 minutter med bil under normale forhold. Elche, motorveien, Santa Pola-kysten og Hondón-dalene ligger også innen praktisk rekkevidde.",
    ],
    highlights: ["Ca. 28 km til Alicante-Elche flyplass", "Nybygde villaer og finca-tomter", "Levende by med druer, oliven og mandel"],
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
      "Novelda er en vin- og industriby kjent for marmor, safran og krydder – og for modernistisk arkitektur, kronet av Santuario de Santa María Magdalena på åsen over byen.",
    body: [
      "Sentrum har full byservice, praktbygg fra modernismen og et rikt kulturliv, mens omlandet mot Monóvar, Aspe og La Romana byr på vinmarker, mandeltrær og fincaer i alle prisklasser. For deg som vil ha en by med sjel og historie – ikke bare en soveby – er Novelda et komplett innlandsalternativ.",
      "Byen ligger midt i Vinalopó med gode veiforbindelser. Alicante-Elche flyplass ligger rundt 29 km vei unna og omtrent 20 minutter med bil under normale forhold, mens Elda/Petrer, Monóvar og Aspe ligger i nærområdet.",
    ],
    highlights: ["Full byservice og rikt kulturliv", "Santuario og modernistisk arkitektur", "Ca. 29 km til Alicante-Elche flyplass"],
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
      "La Romana er en liten, rolig landsby omgitt av vinmarker og mandeltrær, mellom Pinoso, Novelda og Monóvar. Området er kjent blant utenlandske kjøpere som ønsker finca-ro uten å være langt fra daglig service.",
    body: [
      "Her handler livet om det landlige: druemarker, olivenlunder og casas de campo med brønner, uthus og romslige tomter. Landsbyen selv har det daglige du trenger og et uturistisk lokalmiljø.",
      "Til tross for roen er Novelda omtrent 13 km og rundt 14 minutter unna med bil. Alicante-Elche flyplass ligger rundt 39 km vei unna og omtrent 34 minutter med bil under normale forhold.",
    ],
    highlights: ["Novelda ca. 13 km unna", "Alicante-Elche flyplass ca. 34 min med bil", "Vinmarker og landlig lokalmiljø"],
    matchTerms: ["la romana", "romana"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/La_Romana_Sunrise.jpg/960px-La_Romana_Sunrise.jpg",
  },
  {
    slug: "monforte-del-cid",
    name: "Monforte del Cid",
    title: "Bolig i Monforte del Cid",
    eyebrow: "Vin og golf · nær flyplassen",
    intro:
      "Monforte del Cid ligger blant vinmarker i Vinalopó, med kort kjørevei til Alicante-Elche flyplass, golfbanen Font del Llop og et voksende tilbud av nybygg, villaer og fincaer. Kombinasjonen av landlig ro og god beliggenhet gjør området interessant for både helårs- og deltidsboende.",
    body: [
      "Byen har et hyggelig historisk sentrum med den gamle morería-bydelen, daglige tjenester og et omland av druemarker og landsteder. Rundt golfresortet Font del Llop finner du moderne villaer og bungalower, mens du utenfor byen fortsatt finner klassiske fincaer med plass og tomt.",
      "Det som virkelig skiller Monforte ut er nærheten: Alicante-Elche flyplass ligger rundt 25 km vei unna og omtrent 15–20 minutter med bil under normale forhold. Motorveien gir enkel forbindelse videre mot både kysten og innlandet, med Elche, Novelda og Aspe som nære naboer.",
    ],
    highlights: ["Ca. 25 km til Alicante-Elche flyplass", "Golf (Font del Llop) og moderne nybygg", "Vinmarker, morería og ekte byliv"],
    matchTerms: ["monforte", "monforte del cid"],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vi%C3%B1edos_en_Monforte_del_Cid.jpg/960px-Vi%C3%B1edos_en_Monforte_del_Cid.jpg",
  },
];

export function getInlandTown(slug: string) {
  return inlandTowns.find((town) => town.slug === slug) || null;
}
