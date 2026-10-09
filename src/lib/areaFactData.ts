import { getAreaMapCoordinate } from "@/lib/areaMapLocations";
import { normalizeSearchText } from "@/lib/realtyflow";
import { verifiedAreaEditorial } from "@/lib/areaVerifiedEditorial";

/**
 * Curated evidence, never inferred from nearby municipalities.
 * Population: officially registered inhabitants of municipality, not urbanisation.
 * Price: idealista published ASKING PRICE €/m², Sep yearly snapshots.
 * Other fields deliberately null if no municipality-level reliable measurement.
 */
export type FactSource = { label: string; url: string; date?: string };
export type PopulationFact = { value: number; year: number; municipality: string; source: FactSource };
export type PriceFact = { municipality: string; months: Record<number, number>; source: FactSource };
export type NationalityOverview = { description: string; scope: string; year: number; source: FactSource };
export type BeachDistance = { display: string; note: string; source?: FactSource };
export type DistrictOverview = {
  name: string;
  focus: string;
  buyerNote: string;
  beach: string;
  source: FactSource;
  price?: { euroM2: number; period: string; source: FactSource };
};

export type TownAreaFacts = {
  name: string;
  districts: DistrictOverview[];
  population: PopulationFact | null;
  nationality: NationalityOverview | null;
  beachDistance: BeachDistance | null;
  price: PriceFact | null;
  airportDirectKm: number | null;
  airportMapsUrl: string;
  beachMapsUrl: string;
  beachNote: string | null;
  attractions: string[];
  attractionSource: FactSource | null;
};

const POPULATION: Record<string, PopulationFact> = {
  altea: {
    value: 24592, year: 2025, municipality: "Altea",
    source: { label: "INE · Padrón municipal", url: "https://ine.es/consul/serie.do?d=true&s=DPOP478", date: "2025-01-01" },
  },
  benidorm: {
    value: 77327, year: 2025, municipality: "Benidorm",
    source: { label: "INE · Padrón municipal", url: "https://ine.es/consul/serie.do?L=0&d=true&s=DPOP517", date: "2025-01-01" },
  },
};

/**
 * 1 January 2025, official municipal register. These are NOT counts for
 * urbanisations, beaches, separate hamlets or a specific RealtyFlow listing.
 * Every key is an explicit match to its actual municipality.
 * Alicante: Diputación de Alicante (INE). Murcia: CREM (INE).
 */
const ALICANTE_CENSUS: FactSource = {
  label: "INE via Diputación de Alicante · padrón 2025",
  url: "https://documentacion.diputacionalicante.es/censo.asp",
  date: "2025-01-01",
};
const MURCIA_CENSUS: FactSource = {
  label: "INE via CREM · padrón 2025",
  url: "https://econet.carm.es/web/crem/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html",
  date: "2025-01-01",
};

const MUNICIPAL_COUNTS: Record<string, [number, string, "A" | "M"]> = {
  finestrat: [9919, "Finestrat", "A"],
  polop: [5828, "Polop", "A"],
  albir: [21080, "L'Alfàs del Pi", "A"],
  "l albir": [21080, "L'Alfàs del Pi", "A"],
  "alfas del pi": [21080, "L'Alfàs del Pi", "A"],
  "alfaz del pi": [21080, "L'Alfàs del Pi", "A"],
  "la nucia": [19121, "La Nucía", "A"],
  calpe: [27616, "Calp", "A"],
  calp: [27616, "Calp", "A"],
  moraira: [12912, "Teulada (inkl. Moraira)", "A"],
  teulada: [12912, "Teulada", "A"],
  javea: [30642, "Xàbia", "A"],
  xabia: [30642, "Xàbia", "A"],
  denia: [47261, "Dénia", "A"],
  villajoyosa: [37449, "La Vila Joiosa", "A"],
  "la vila joiosa": [37449, "La Vila Joiosa", "A"],
  "el campello": [31419, "El Campello", "A"],
  mutxamel: [28621, "Mutxamel", "A"],
  "sant joan d'alacant": [26834, "Sant Joan d'Alacant", "A"],
  alicante: [366221, "Alicante", "A"],
  "guardamar del segura": [18564, "Guardamar del Segura", "A"],
  "ciudad quesada": [17652, "Rojales (inkl. Ciudad Quesada)", "A"],
  rojales: [17652, "Rojales", "A"],
  torrevieja: [98533, "Torrevieja", "A"],
  "orihuela costa": [84560, "Orihuela (hele kommunen)", "A"],
  orihuela: [84560, "Orihuela", "A"],
  "la zenia": [84560, "Orihuela (hele kommunen)", "A"],
  "cabo roig": [84560, "Orihuela (hele kommunen)", "A"],
  "santa pola": [39709, "Santa Pola", "A"],
  "gran alacant": [39709, "Santa Pola (inkl. Gran Alacant)", "A"],
  "pilar de la horadada": [24316, "Pilar de la Horadada", "A"],
  "los montesinos": [5786, "Los Montesinos", "A"],
  algorfa: [3788, "Algorfa", "A"],
  benijofar: [3679, "Benijófar", "A"],
  dolores: [8326, "Dolores", "A"],
  catral: [9600, "Catral", "A"],
  "san miguel de salinas": [7177, "San Miguel de Salinas", "A"],
  biar: [3677, "Biar", "A"],
  villena: [34712, "Villena", "A"],
  sax: [10346, "Sax", "A"],
  castalla: [11908, "Castalla", "A"],
  "banyeres de mariola": [7347, "Banyeres de Mariola", "A"],
  busot: [3782, "Busot", "A"],
  pinoso: [8523, "Pinoso", "A"],
  "el pinos": [8523, "Pinoso", "A"],
  monovar: [13116, "Monóvar", "A"],
  "hondon de las nieves": [2738, "Hondón de las Nieves", "A"],
  aspe: [22397, "Aspe", "A"],
  novelda: [26606, "Novelda", "A"],
  "la romana": [2729, "La Romana", "A"],
  "monforte del cid": [9283, "Monforte del Cid", "A"],
  jumilla: [27574, "Jumilla", "M"],
  "san pedro del pinatar": [29674, "San Pedro del Pinatar", "M"],
  "san javier": [36524, "San Javier", "M"],
  "los alcazares": [20408, "Los Alcázares", "M"],
  murcia: [479405, "Murcia", "M"],
  cartagena: [220704, "Cartagena", "M"],
  "torre pacheco": [41479, "Torre Pacheco", "M"],
  mazarron: [35449, "Mazarrón", "M"],
  aguilas: [37811, "Águilas", "M"],
};
const EXPANDED_POPULATION: Record<string, PopulationFact> = Object.fromEntries(
  Object.entries(MUNICIPAL_COUNTS)
    .filter(([, [value]]) => value > 0)
    .map(([name, [value, municipality, region]]) => [
      name,
      { value, year: 2025, municipality, source: region === "A" ? ALICANTE_CENSUS : MURCIA_CENSUS },
    ])
);

/* Nationality summaries refer to the municipality, not a particular estate.
   Lists are NOT current rankings unless a recent municipal source expressly says so. */
const NATIONALITIES: Record<string, NationalityOverview> = {
  altea: {
    description: "Blant annet britiske, nederlandske, rumenske, tyske og russiske innbyggere.",
    scope: "Altea kommune · historisk dokumentasjon, ikke en aktuell rangering",
    year: 2021,
    source: { label: "Altea kommune · sosialplan og demografisk oversikt", url: "https://altea.es/wp-content/uploads/2023/05/PLAN-ESTRATEGICO-ZONAL-SERVICIOS-SOCIALES-DE-ALTEA.pdf", date: "2021" },
  },
  albir: {
    description: "Særlig synlige norske, nederlandske og britiske bomiljøer.",
    scope: "L'Alfàs del Pi kommune (Albir er del av kommunen)",
    year: 2026,
    source: { label: "L'Alfàs del Pi kommune · internasjonale innbyggere", url: "https://alfas.es/lalfas-se-vuelca-un-ano-mas-con-el-dia-nacional-de-noruega-lalfas-2026/", date: "2026-05-19" },
  },
  benidorm: {
    description: "Blant annet britiske, rumenske og colombianske innbyggere.",
    scope: "Benidorm kommune · eldre kommunal kartlegging, ikke dagens rangering",
    year: 2021,
    source: { label: "Benidorm kommune · klimatilpasningsplan, demografi", url: "https://contenidos.benidorm.org/sites/default/files/descargas/2022-05/PLAN%20DE%20ADAPTACI%C3%93N%20ANTE%20EL%20CAMBIO%20CLIM%C3%81TICO%20DE%20BENIDORM_OCT21_IC.pdf", date: "2021" },
  },
  torrevieja: {
    description: "Store ukrainske, colombianske, russiske og britiske grupper.",
    scope: "Torrevieja kommune · kommunalt innbyggerregister",
    year: 2026,
    source: { label: "Torrevieja kommune · innbyggerregister", url: "https://torrevieja.es/en/noticias/2026-05-12-torrevieja-now-has-over-113000-registered-inhabitants-and-is-consolidating-its", date: "2026-05-12" },
  },
  "ciudad quesada": {
    description: "Et tydelig britisk bomiljø; også en etablert norsk tilstedeværelse.",
    scope: "Rojales kommune · tall beskriver ikke Ciudad Quesada alene",
    year: 2025,
    source: { label: "Cadena SER · intervju og omtale av Rojales", url: "https://cadenaser.com/comunitat-valenciana/2025/02/03/cinco-anos-despues-del-brexit-en-rojales-alicante-el-municipio-con-mayor-porcentaje-de-britanicos-de-espana-radio-alicante/", date: "2025-02-03" },
  },
  rojales: {
    description: "Stor britisk befolkning; også en norsk tilstedeværelse.",
    scope: "Rojales kommune",
    year: 2025,
    source: { label: "Cadena SER · intervju og omtale av Rojales", url: "https://cadenaser.com/comunitat-valenciana/2025/02/03/cinco-anos-despues-del-brexit-en-rojales-alicante-el-municipio-con-mayor-porcentaje-de-britanicos-de-espana-radio-alicante/", date: "2025-02-03" },
  },
};

/** These coastal communities reach the sea. 0 km means coastal PLACE,
    never that every property or historical town centre is on the beach. */
const COASTAL_PLACES = new Set([
  "benidorm", "altea", "albir", "calpe", "calp", "moraira", "javea", "xabia", "denia",
  "villajoyosa", "la vila joiosa", "el campello", "santa pola",
  "guardamar del segura", "torrevieja", "orihuela costa", "la zenia",
  "cabo roig", "campoamor", "mil palmeras", "los alcazares", "la manga",
  "santiago de la ribera", "alicante",
]);

/** Rounded town-centre-to-nearby-beach approximations from named sources.
    These are not legal property measurements or guaranteed walking/driving distances. */
const CHECKED_BEACH_DISTANCE: Record<string, BeachDistance> = {
  polop: { display: "ca. 7 km", note: "Fra Polop sentrum til kyststrender i luftlinje; faktisk vei er lengre.", source: { label: "BeachAtlas · strender ved Polop", url: "https://www.beachatlas.com/es/polop" } },
  "la nucia": { display: "ca. 7 km", note: "Fra La Nucía sentrum til stranden ved Albir i luftlinje.", source: { label: "BeachAtlas · strender ved La Nucía", url: "https://www.beachatlas.com/es/la-nucia" } },
  "ciudad quesada": { display: "ca. 6 km", note: "Fra områdesenter til kyststrender i Guardamar, luftlinje.", source: { label: "BeachAtlas · strender ved Ciudad Quesada", url: "https://www.beachatlas.com/es/ciudad-quesada-alicante" } },
  rojales: { display: "ca. 7 km", note: "Fra Rojales sentrum til Guardamar-strendene i luftlinje.", source: { label: "BeachAtlas · strender ved Rojales", url: "https://www.beachatlas.com/es/rojales" } },
  mutxamel: { display: "ca. 4 km", note: "Fra Mutxamel sentrum til Muchavista-stranden i luftlinje.", source: { label: "BeachAtlas · strender ved Mutxamel", url: "https://www.beachatlas.com/es/mutxamel" } },
  finestrat: { display: "ca. 8 km", note: "Fra gamlebyen til Cala de Finestrat, grov veilengde. I La Cala er stranden ved stedet.", source: { label: "BeachAtlas · Cala de Finestrat", url: "https://www.beachatlas.com/es/finestrat" } },
};

// Sep 2026, 2025, 2024, 2023, 2022: matched month/year, original source units.
const PRICE: Record<string, PriceFact> = {
  altea: {
    municipality: "Altea",
    months: { 2026: 3504, 2025: 3361, 2024: 2984, 2023: 2859, 2022: 2531 },
    source: { label: "Idealista · historiske annonserte salgspriser", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/altea/historico/", date: "2026-09" },
  },
  polop: {
    municipality: "Polop",
    months: { 2026: 2911, 2025: 2653, 2024: 2606, 2023: 2256, 2022: 2182 },
    source: { label: "Idealista · historiske annonserte priser i Polop", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/polop/historico/", date: "2026-09" },
  },
  calpe: {
    municipality: "Calpe (Calp)",
    months: { 2026: 3496, 2025: 3288, 2024: 2945, 2023: 2679, 2022: 2476 },
    source: { label: "Idealista · historiske annonserte priser i Calpe", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/calpe/historico/", date: "2026-09" },
  },
  calp: {
    municipality: "Calpe (Calp)",
    months: { 2026: 3496, 2025: 3288, 2024: 2945, 2023: 2679, 2022: 2476 },
    source: { label: "Idealista · historiske annonserte priser i Calpe", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/calpe/historico/", date: "2026-09" },
  },
  "la nucia": {
    municipality: "La Nucía",
    months: { 2026: 2504, 2025: 2251, 2024: 1943, 2023: 1728, 2022: 1558 },
    source: { label: "Idealista · historiske annonserte priser i La Nucía", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/la-nucia/historico/", date: "2026-09" },
  },
  denia: {
    municipality: "Dénia",
    months: { 2026: 3354, 2025: 3084, 2024: 2791, 2023: 2486, 2022: 2263 },
    source: { label: "Idealista · historiske annonserte priser i Dénia", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/denia/historico/", date: "2026-09" },
  },
  torrevieja: {
    municipality: "Torrevieja",
    months: { 2026: 2561, 2025: 2344, 2024: 2019, 2023: 1810, 2022: 1632 },
    source: { label: "Idealista · historiske annonserte priser i Torrevieja", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/torrevieja/historico/", date: "2026-09" },
  },
  finestrat: {
    municipality: "Finestrat kommune (alle delområder)",
    months: { 2026: 3316, 2025: 3175, 2024: 2794, 2023: 2562, 2022: 2433 },
    source: {
      label: "Idealista · historiske annonserte salgspriser i Finestrat",
      url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/historico/",
      date: "2026-09",
    },
  },
  benidorm: {
    municipality: "Benidorm",
    months: { 2026: 3824, 2025: 3456, 2024: 2953, 2023: 2542, 2022: 2296 },
    source: { label: "Idealista · historiske annonserte salgspriser", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/benidorm/historico/", date: "2026-09" },
  },
};

/**
 * Distinct places within one municipality must not receive an invented
 * single beach distance, price estimate or population as if they were alike.
 * All descriptions are source-backed; prices shown only for Idealista's
 * explicitly named published sub-market areas.
 */
const FINESTRAT_DISTRICTS: DistrictOverview[] = [
  {
    name: "Sierra Cortina",
    focus: "Etablert boligområde med villaer, leiligheter og nyere boligprosjekter. Ligger ikke i den historiske landsbyen.",
    buyerNote: "Vurder den konkrete gaten, bakkehelling, bilbehov, utsikt og felleskostnader. Boliger her skal ikke vurderes som boliger i gamlebyen.",
    beach: "Ikke strandnært sentrum; beregn kjørerute fra boligadresse.",
    source: {
      label: "Finestrat kommune · omtale av Sierra Cortina og Balcón",
      url: "https://ayto-finestrat.es/sigue-la-expansion-de-tecnologia-led-en-finestrat-con-200-luminarias-en-la-urbanizacion-sierra-cortina/",
    },
  },
  {
    name: "Balcón de Finestrat",
    focus: "Eget boligområde i Finestrat med nyere boliger og prosjekter.",
    buyerNote: "Kontroller beliggenhet og byggeetappe før du sammenligner en bolig med Sierra Cortina, Golf Bahía eller gamlebyen.",
    beach: "Kjøreavstanden varierer med prosjekt og gate; se rute i kart.",
    source: {
      label: "Idealista · Balcón de Finestrat–Terra Marina",
      url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/",
    },
    price: { euroM2: 3272, period: "2026-09", source: { label: "Idealista · annonserte priser", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/", date: "2026-09" } },
  },
  {
    name: "Golf Bahía",
    focus: "Et boligområde i Finestrat, med ulike villaer, rekkehus og leilighetsprosjekter.",
    buyerNote: "Undersøk delområdet, solforhold, adkomst og vedlikehold. Portalens Golf Bahía-statistikk dekker et markedsområde; den er ikke prisantydning for enkeltboligen.",
    beach: "Ikke ved stranden; bruk adressen når du beregner kjøreruten.",
    source: {
      label: "Idealista · Golf Bahía, Finestrat",
      url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/",
    },
    price: { euroM2: 3450, period: "2026-09", source: { label: "Idealista · annonserte priser", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/", date: "2026-09" } },
  },
  {
    name: "Finestrat gamleby",
    focus: "Historisk landsbysentrum i høyden – et annet boligmarked enn de større urbanisasjonene.",
    buyerNote: "Vurder trappetrinn, parkering, adkomst og tilstand i eldre bygninger. En bolig her bør ikke sammenlignes direkte med nybygg i Sierra Cortina.",
    beach: "Ikke ved stranden. Kommunen har også La Cala ved sjøen.",
    source: {
      label: "Finestrat kommune · historisk sentrum og La Cala",
      url: "https://ayto-finestrat.es/finestrat-en-fitur-2026/",
    },
    price: { euroM2: 3245, period: "2026-09", source: { label: "Idealista · Finestrat Pueblo", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/finestrat-pueblo/", date: "2026-09" } },
  },
  {
    name: "La Cala de Finestrat",
    focus: "Kystdelen ved sandstranden – ikke det samme som gamlebyen eller boligprosjektene i høyden.",
    buyerNote: "Kontroller sesongstøy, parkering, fellesutgifter og gangavstand fra den konkrete boligen.",
    beach: "0 m · kystområde. Eiendommens avstand til sandstranden varierer.",
    source: { label: "Turisme Comunitat Valenciana · Playa de la Cala de Finestrat", url: "https://www.comunitatvalenciana.com/es/alacant-alicante/finestrat/playas/playa-de-la-cala-de-finestrat" },
    price: { euroM2: 3044, period: "2026-09", source: { label: "Idealista · Cala de Finestrat", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/finestrat/cala-de-finestrat/", date: "2026-09" } },
  },
];

// Place features appear in the existing destination articles, and are attributed
// to the same local editorial destination source when available.
const ATTRACTIONS: Record<string, string[]> = {
  altea: ["Gamlebyen", "Sjøfronten", "La Olla", "Cap Negret"],
  benidorm: ["Levante-stranden", "Poniente-stranden", "Gamlebyen"],
  albir: ["Stranden i Albir", "Sierra Helada-området"],
  calpe: ["Peñón de Ifach", "Arenal-Bol", "La Fossa", "Saltsjøen"],
  denia: ["Havnen", "Den historiske bykjernen", "Las Marinas", "Montgó"],
  javea: ["Historisk sentrum", "Strender og bukter"],
  xabia: ["Historisk sentrum", "Strender og bukter"],
  finestrat: ["Puig Campana", "Den historiske landsbyen", "La Cala"],
  villajoyosa: ["Den fargerike gamlebyen", "Sjøfronten"],
  polop: ["Plaza de los Chorros", "Gamlebyen", "Ponoig"],
  moraira: ["Marinaen", "El Portet", "Kystbuktene"],
  torrevieja: ["Playa del Cura", "Los Locos", "La Mata", "Saltsjøene"],
  "guardamar del segura": ["Strendene", "Sanddynene", "Furuskogen ved kysten"],
  "el campello": ["Illeta dels Banyets", "Strandpromenaden"],
  "santa pola": ["Las Salinas de Santa Pola", "Den historiske bykjernen"],
  "san pedro del pinatar": ["Lo Pagán", "Saltlandskapet ved Mar Menor"],
  "san javier": ["Santiago de la Ribera", "Mar Menor"],
  "los alcazares": ["Kysten ved Mar Menor"],
  "la manga": ["Mar Menor", "Middelhavssiden"],
  "ciudad quesada": ["Rojales sentrum"],
  "orihuela costa": ["Kystområdene langs Middelhavet"],
  "la nucia": ["La Nucías bykjerne"],
  "mutxamel": ["Historisk sentrum"],
};

// Beach availability is a place descriptor, not a fabricated distance measured
// from an arbitrary property address. For any address, use mapped directions.
const COAST_NOTE: Record<string, string> = {
  altea: "Sjøfront og strandområder ved bl.a. La Olla og Cap Negret.",
  albir: "Strand i L'Albir; avstanden avhenger av boligens beliggenhet.",
  benidorm: "Levante og Poniente er de sentrale bystrendene.",
  calpe: "Blant annet Arenal-Bol og La Fossa.",
  denia: "Forskjellige strand- og kystområder langs kommunen.",
  javea: "Flere bukter og strender fordelt mellom delområdene.",
  villajoyosa: "Strandområder langs kommunen.",
  moraira: "Strender og bukter ved sentrum og langs kysten.",
  torrevieja: "Flere bystrender, blant annet El Cura og Los Locos.",
  "el campello": "Strand og promenade langs kysten.",
  "santa pola": "Strandsoner og maritimt bymiljø.",
  "guardamar del segura": "Lange strender og sanddyner.",
  "la manga": "Strender mot både Mar Menor og Middelhavet.",
  "san javier": "Kystområder ved Mar Menor.",
  "los alcazares": "Lagunestrender ved Mar Menor.",
  "san pedro del pinatar": "Kyst og badeområder ved Mar Menor.",
};

/* A rough coastal orientation for inland towns without a sourced beach
   listing. The anchors are settlement-centre coordinates from the site's
   own map, NOT precise sand/waterline coordinates. This MUST say 'kyststed'
   rather than claim an exact distance to a beach. */
const COAST_REFERENCES = [
  "albir", "benidorm", "altea", "calpe", "moraira", "javea", "denia",
  "villajoyosa", "el campello", "alicante", "santa pola",
  "guardamar del segura", "torrevieja", "la zenia", "la manga",
  "los alcazares", "santiago de la ribera",
].map((name) => getAreaMapCoordinate(name)).filter((value): value is { lat: number; lng: number } => value !== null);

function betweenKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const rad = (x: number) => x * Math.PI / 180;
  const dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(Math.max(0, 1 - h)));
}

function beachOverview(key: string, coords: { lat: number; lng: number } | null): BeachDistance | null {
  if (COASTAL_PLACES.has(key)) {
    return { display: "0 m · kyststed", note: "Stedet ligger ved sjøen. Avstanden fra den enkelte bolig varierer." };
  }
  if (CHECKED_BEACH_DISTANCE[key]) return CHECKED_BEACH_DISTANCE[key];
  if (!coords || !COAST_REFERENCES.length) return null;
  const nearest = Math.min(...COAST_REFERENCES.map((place) => betweenKm(coords, place)));
  // Do not present approximate city-centre proxies with false km precision.
  const coarse = nearest < 20 ? Math.round(nearest / 2) * 2 : Math.round(nearest / 5) * 5;
  return {
    display: `ca. ${Math.max(2, coarse)} km til kystby`,
    note: "Grovt orienteringsmål i luftlinje fra sentrum til nærmeste kartlagte kyststed – ikke målt strand- eller kjøreavstand.",
  };
}

const AIRPORT = { lat: 38.28217, lng: -0.55816 };
const radians = (n: number) => n * Math.PI / 180;
function directDistanceKm(lat: number, lon: number): number {
  const latD = radians(AIRPORT.lat - lat);
  const lonD = radians(AIRPORT.lng - lon);
  const a = Math.sin(latD / 2) ** 2 +
    Math.cos(radians(lat)) * Math.cos(radians(AIRPORT.lat)) * Math.sin(lonD / 2) ** 2;
  return Math.round(6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.max(0, 1 - a))));
}

export function getTownAreaFacts(name: string): TownAreaFacts {
  const key = normalizeSearchText(name).trim();
  const coords = getAreaMapCoordinate(name);
  const editorial = verifiedAreaEditorial(name);
  const mapsName = encodeURIComponent(name + ", Spania");
  return {
    name,
    districts: key === "finestrat" ? FINESTRAT_DISTRICTS : [],
    population: POPULATION[key] || EXPANDED_POPULATION[key] || null,
    nationality: NATIONALITIES[key] || null,
    beachDistance: beachOverview(key, coords),
    price: PRICE[key] || null,
    airportDirectKm: coords ? directDistanceKm(coords.lat, coords.lng) : null,
    airportMapsUrl: `https://www.google.com/maps/dir/?api=1&origin=${mapsName}&destination=Alicante-Elche+Airport&travelmode=driving`,
    beachMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("playa near " + name + ", Spain")}`,
    beachNote: COAST_NOTE[key] || null,
    attractions: ATTRACTIONS[key] || [],
    attractionSource: editorial?.source || null,
  };
}

export function priceGrowth(fact: PriceFact, years: 1 | 2 | 3 | 4): number | null {
  const now = fact.months[2026], baseline = fact.months[2026 - years];
  if (!now || !baseline || baseline <= 0) return null;
  return (now / baseline - 1) * 100;
}
