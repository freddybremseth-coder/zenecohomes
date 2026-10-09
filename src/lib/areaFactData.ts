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
export type CountFact = { value: number; scope: string; year: number; source: FactSource };
export type TownAreaFacts = {
  name: string;
  population: PopulationFact | null;
  nationality: { label: string; value: number; source: FactSource }[] | null;
  restaurants: CountFact | null;
  bars: CountFact | null;
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

// Sep 2026, 2025, 2024, 2023, 2022: matched month/year, original source units.
const PRICE: Record<string, PriceFact> = {
  altea: {
    municipality: "Altea",
    months: { 2026: 3504, 2025: 3361, 2024: 2984, 2023: 2859, 2022: 2531 },
    source: { label: "Idealista · historiske annonserte salgspriser", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/altea/historico/", date: "2026-09" },
  },
  benidorm: {
    municipality: "Benidorm",
    months: { 2026: 3824, 2025: 3456, 2024: 2953, 2023: 2542, 2022: 2296 },
    source: { label: "Idealista · historiske annonserte salgspriser", url: "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante/benidorm/historico/", date: "2026-09" },
  },
};

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
    population: POPULATION[key] || null,
    // Never publish demographic shares without official municipality-year table.
    nationality: null,
    restaurants: null,
    bars: null,
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
