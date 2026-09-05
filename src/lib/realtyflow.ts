export type Property = {
  id?: string;
  ref?: string;
  external_id?: string;
  title?: string;
  title_no?: string;
  title_en?: string;
  title_de?: string;
  title_es?: string;
  title_fr?: string;
  title_ru?: string;
  description?: string;
  description_no?: string;
  description_en?: string;
  description_de?: string;
  description_es?: string;
  description_fr?: string;
  description_ru?: string;
  marketing_description?: string;
  marketing_description_no?: string;
  marketing_description_en?: string;
  marketing_description_de?: string;
  location?: string;
  town?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  built_area?: number;
  area?: number;
  plot_size?: number;
  terrace_size?: number;
  primary_image?: string;
  image_path?: string;
  gallery?: string[];
  images_json?: string | string[];
  property_type?: string;
  property_type_no?: string;
  property_type_en?: string;
  property_type_de?: string;
  type?: string;
  type_no?: string;
  type_en?: string;
  type_de?: string;
  pool?: boolean;
  energy_rating?: string;
  status?: string;
  region?: string;
  show_on_website?: boolean | null;
  website_visible?: boolean | null;
  translations?: unknown;
};

export type PropertyLocale = "no" | "de" | "en";

export type RegionKey = "costa-blanca-nord" | "costa-blanca-sor" | "costa-calida" | "innlandet";

export type AreaProfile = {
  id?: string;
  brand_id?: string;
  name: string;
  slug?: string;
  country?: string | null;
  region?: string | null;
  hero_blurb?: string | null;
  description?: string | null;
  highlights?: string[] | null;
  climate?: string | null;
  lifestyle?: string | null;
  photo_url?: string | null;
  show_on_website?: boolean | null;
  website_visible?: boolean | null;
  is_public?: boolean | null;
  published?: boolean | null;
};

export type LandPlot = {
  id?: string;
  plot_number?: string;
  plotNumber?: string;
  area?: number;
  price?: number;
  location?: string;
  municipality?: string;
  zoning?: string;
  water?: boolean;
  electricity?: boolean;
  slope?: string;
  road_access?: boolean;
  roadAccess?: boolean;
  notes?: string;
  lat?: number;
  lng?: number;
  source?: string;
};

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  preferred_area?: string;
  budget?: string;
  property_type?: string;
  bedrooms?: string;
  timeline?: string;
  purchase_goal?: string;
  financing_status?: string;
  spain_experience?: string;
  next_step?: string;
  message?: string;
  source?: string;
  property_ref?: string;
  property_title?: string;
  request_type?: string;
  page_url?: string;
};

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Normaliserte søkeord (spesifikke først) → pent visningsnavn for byen.
// Brukes til å vise ekte bynavn i stedet for RealtyFlows grove soner ("Costa Blanca South - Inland").
const TOWN_DISPLAY: Array<[string, string]> = [
  // Innlandet
  ["banyeres", "Banyeres de Mariola"], ["hondon de las nieves", "Hondón de las Nieves"],
  ["hondon de los frailes", "Hondón de los Frailes"], ["hondon", "Hondón"], ["monforte del cid", "Monforte del Cid"],
  ["monforte", "Monforte del Cid"], ["la romana", "La Romana"], ["el pinos", "Pinoso"], ["pinoso", "Pinoso"],
  ["monovar", "Monóvar"], ["novelda", "Novelda"], ["aspe", "Aspe"], ["villena", "Villena"], ["biar", "Biar"],
  ["castalla", "Castalla"], ["salinas", "Salinas"], ["alguena", "Algueña"], ["petrer", "Petrer"], ["elda", "Elda"],
  ["agost", "Agost"], ["onil", "Onil"], ["tibi", "Tibi"], ["ibi", "Ibi"], ["sax", "Sax"], ["fortuna", "Fortuna"],
  ["abanilla", "Abanilla"], ["crevillent", "Crevillent"], ["crevillente", "Crevillent"],
  // Costa Blanca Nord
  ["alfas del pi", "Alfàs del Pi"], ["alfaz", "Alfàs del Pi"], ["albir", "Albir"], ["altea", "Altea"],
  ["calpe", "Calpe"], ["calp", "Calpe"], ["denia", "Dénia"], ["finestrat", "Finestrat"], ["la nucia", "La Nucía"],
  ["nucia", "La Nucía"], ["moraira", "Moraira"], ["teulada", "Teulada"], ["polop", "Polop"], ["benidorm", "Benidorm"],
  ["campello", "El Campello"], ["sant joan", "Sant Joan d'Alacant"], ["mutxamel", "Mutxamel"], ["muchamiel", "Mutxamel"],
  ["javea", "Jávea"], ["xabia", "Jávea"], ["villajoyosa", "Villajoyosa"], ["vila joiosa", "Villajoyosa"],
  // Costa Blanca Sør
  ["torrevieja", "Torrevieja"], ["orihuela", "Orihuela Costa"], ["guardamar", "Guardamar del Segura"],
  ["santa pola", "Santa Pola"], ["gran alacant", "Gran Alacant"], ["ciudad quesada", "Ciudad Quesada"],
  ["rojales", "Rojales"], ["pilar de la horadada", "Pilar de la Horadada"], ["los montesinos", "Los Montesinos"],
  ["algorfa", "Algorfa"], ["benijofar", "Benijófar"], ["dolores", "Dolores"], ["catral", "Catral"],
  ["daya", "Daya Nueva"], ["bigastro", "Bigastro"], ["jacarilla", "Jacarilla"], ["san miguel", "San Miguel de Salinas"],
  // Costa Cálida / Almería
  ["san pedro del pinatar", "San Pedro del Pinatar"], ["san javier", "San Javier"], ["los alcazares", "Los Alcázares"],
  ["torre pacheco", "Torre Pacheco"], ["mazarron", "Mazarrón"], ["aguilas", "Águilas"], ["cartagena", "Cartagena"],
  ["fuente alamo", "Fuente Álamo"], ["alhama", "Alhama de Murcia"], ["banos y mendigo", "Baños y Mendigo"],
  ["avileses", "Avileses"], ["moratalla", "Moratalla"], ["vera", "Vera"], ["almerimar", "Almerimar"],
];

// Nøklene sammenlignes mot normalisert tekst – normaliser dem for å unngå aksent-bommer.
const TOWN_MATCH: Array<[string, string]> = TOWN_DISPLAY.map(([key, display]) => [normalizeSearchText(key), display]);

/**
 * Pent bynavn for en bolig – trekkes ut fra tittel/sted (byen ligger i tittelen,
 * mens RealtyFlows `location` ofte bare er en grov sone). Faller tilbake til
 * delen før komma i location, ellers null.
 */
export function getPropertyTown(property: Property): string | null {
  if (property.town && property.town.trim()) return property.town.trim();
  // 1) Tittel + sted er mest pålitelig.
  const hay = normalizeSearchText(
    [property.title, property.title_no, property.title_en, property.title_de, property.location]
      .filter(Boolean)
      .join(" "),
  );
  for (const [key, display] of TOWN_MATCH) {
    if (hay.includes(key)) return display;
  }
  // 2) "Town, Area"-sted (ikke en grov "Costa ..."-sone).
  const loc = (property.location || "").trim();
  if (loc && !/^costa /i.test(loc)) {
    const first = loc.split(/[,_]/)[0].trim();
    if (first) return first;
  }
  // 3) Fallback: byen ligger noen ganger bare i beskrivelsesteksten – velg den mest omtalte.
  const desc = normalizeSearchText(
    [
      property.description,
      property.description_no,
      property.description_en,
      property.description_de,
      property.marketing_description,
      property.marketing_description_no,
      property.marketing_description_en,
      property.marketing_description_de,
    ]
      .filter(Boolean)
      .join(" "),
  );
  if (desc) {
    let best: string | null = null;
    let bestCount = 0;
    for (const [key, display] of TOWN_MATCH) {
      const count = desc.split(key).length - 1;
      if (count > bestCount) {
        bestCount = count;
        best = display;
      }
    }
    if (best) return best;
  }
  return null;
}

export const regions: Array<{ key: RegionKey; label: string; description: string; aliases: string[]; locations: string[] }> = [
  {
    key: "costa-blanca-nord",
    label: "Costa Blanca Nord",
    description: "Altea, Albir, Calpe, Finestrat, Polop, La Nucia, Denia, Javea og Moraira.",
    aliases: ["costa blanca north", "costa blanca north inland", "costa blanca nord", "costa blanca norte"],
    locations: ["altea", "albir", "calpe", "benidorm", "denia", "javea", "jávea", "polop", "la nucia", "finestrat", "villajoyosa", "moraira", "alfaz", "alfas"],
  },
  {
    key: "costa-blanca-sor",
    label: "Costa Blanca Sør",
    description: "Torrevieja, Orihuela Costa, Ciudad Quesada, Guardamar, Alicante og Santa Pola.",
    aliases: ["costa blanca south", "costa blanca south inland", "costa blanca sør", "costa blanca sor", "costa blanca sur"],
    locations: [
      "torrevieja",
      "orihuela",
      "ciudad quesada",
      "ciudad quesasa",
      "villamartin",
      "guardamar",
      "alicante",
      "santa pola",
      "rojales",
      "san miguel",
      "campoamor",
      "gran alacant",
      "la mata",
      "la zenia",
      "san fulgencio",
    ],
  },
  {
    key: "costa-calida",
    label: "Costa Calida",
    description: "San Pedro del Pinatar, Los Alcazares, La Manga, Cartagena, Murcia og nærliggende områder.",
    aliases: ["costa calida", "costa cálida", "costa calida inland", "costa cálida inland"],
    locations: [
      "calida",
      "cálida",
      "murcia",
      "la manga",
      "san pedro",
      "san pienetar",
      "pilar de la horadada",
      "los alcazares",
      "los alcázares",
      "torre pacheco",
      "cartagena",
      "altaona",
      "calasparra",
      "playa honda",
      "roda",
      "san javier",
      "santiago de la ribera",
      "santiage de la ribera",
      "yecla",
    ],
  },
  {
    key: "innlandet",
    label: "Innlandet",
    description: "Biar, Villena, Sax, Castalla, Banyeres, Pinoso, Monóvar, Salinas, La Romana og Hondón-dalene.",
    aliases: [
      "innlandet",
      "inland",
      "costa blanca inland",
      "costa blanca innland",
      "alicante inland",
      "vinalopo",
      "vinalopó",
    ],
    locations: [
      "biar",
      "villena",
      "sax",
      "castalla",
      "onil",
      "ibi",
      "tibi",
      "agost",
      "banyeres",
      "bañeres",
      "beneixama",
      "camp de mirra",
      "canada",
      "cañada",
      "pinoso",
      "el pinos",
      "el pinós",
      "monovar",
      "monóvar",
      "salinas",
      "la romana",
      "alguena",
      "algueña",
      "hondon",
      "hondón",
      "aspe",
      "novelda",
      "monforte del cid",
      "petrer",
      "elda",
    ],
  },
];

const defaultTitle: Record<PropertyLocale, string> = {
  no: "Nybygg i Spania",
  de: "Neubau in Spanien",
  en: "New build in Spain",
};

const fallbackLocaleOrder: Record<PropertyLocale, PropertyLocale[]> = {
  no: ["no", "en", "de"],
  de: ["de", "en", "no"],
  en: ["en", "de", "no"],
};

const commonTypeTranslations: Record<PropertyLocale, Record<string, string>> = {
  no: {
    apartment: "Leilighet",
    apartments: "Leilighet",
    wohnung: "Leilighet",
    townhouse: "Rekkehus",
    townhouses: "Rekkehus",
    reihenhaus: "Rekkehus",
    plot: "Tomt",
    plots: "Tomt",
    grundstuck: "Tomt",
    grundstueck: "Tomt",
    "new build": "Nybygg",
    neubau: "Nybygg",
  },
  de: {
    leilighet: "Wohnung",
    apartment: "Wohnung",
    apartments: "Wohnung",
    rekkehus: "Reihenhaus",
    townhouse: "Reihenhaus",
    townhouses: "Reihenhaus",
    tomannsbolig: "Doppelhaushälfte",
    "semi detached": "Doppelhaushälfte",
    nybygg: "Neubau",
    "new build": "Neubau",
    "new builds": "Neubau",
    tomt: "Grundstück",
    plot: "Grundstück",
    plots: "Grundstücke",
    villa: "Villa",
    penthouse: "Penthouse",
    bungalow: "Bungalow",
    duplex: "Duplex",
    finca: "Finca",
  },
  en: {
    leilighet: "Apartment",
    wohnung: "Apartment",
    rekkehus: "Townhouse",
    reihenhaus: "Townhouse",
    tomannsbolig: "Semi-detached",
    doppelhaushalfte: "Semi-detached",
    doppelhaushaelfte: "Semi-detached",
    nybygg: "New build",
    neubau: "New build",
    tomt: "Plot",
    grundstuck: "Plot",
    grundstueck: "Plot",
    villa: "Villa",
    penthouse: "Penthouse",
    bungalow: "Bungalow",
    duplex: "Duplex",
    finca: "Finca",
  },
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanStringValue(value: unknown) {
  if (typeof value === "string") return cleanPropertyText(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return "";
}

function readField(property: Property, key: string) {
  return cleanStringValue((property as Record<string, unknown>)[key]);
}

function readTranslationObject(value: unknown, field: string, locale: PropertyLocale): string {
  if (!isRecord(value)) return "";

  const directLocale = value[locale];
  if (isRecord(directLocale)) {
    const translated =
      directLocale[field] ||
      directLocale[`${field}_${locale}`] ||
      (field === "title" ? directLocale.name || directLocale.heading : undefined);
    const translatedText = cleanStringValue(translated);
    if (translatedText) return translatedText;
  }

  const directField = value[field];
  if (isRecord(directField)) {
    const translated = cleanStringValue(directField[locale]);
    if (translated) return translated;
  }

  const localeField = cleanStringValue(value[`${field}_${locale}`]);
  if (localeField) return localeField;

  return "";
}

function readTranslationArray(value: unknown, field: string, locale: PropertyLocale): string {
  if (!Array.isArray(value)) return "";
  const match = value.find((item) => {
    if (!isRecord(item)) return false;
    const lang = cleanStringValue(item.locale || item.language || item.lang).toLowerCase();
    return lang === locale || lang.startsWith(`${locale}-`) || (locale === "no" && lang === "nb");
  });
  return isRecord(match)
    ? cleanStringValue(match[field] || match[`${field}_${locale}`] || (field === "title" ? match.name : undefined))
    : "";
}

function readTranslatedField(property: Property, field: string, locale: PropertyLocale) {
  const fromObject = readTranslationObject(property.translations, field, locale);
  if (fromObject) return fromObject;
  return readTranslationArray(property.translations, field, locale);
}

function pickLongest(candidates: string[]) {
  return candidates.filter(Boolean).sort((a, b) => b.length - a.length)[0] || "";
}

function localizedFieldCandidates(field: string, locale: PropertyLocale) {
  const suffixes =
    locale === "no"
      ? ["no", "nb", "nb_no", "nb-NO"]
      : locale === "de"
        ? ["de", "de_de", "de-DE"]
        : ["en", "en_gb", "en-GB", "en_us", "en-US"];
  return suffixes.map((suffix) => `${field}_${suffix}`);
}

export function getLocalizedPropertyTitle(property: Property, locale: PropertyLocale = "no") {
  const localized = [
    ...localizedFieldCandidates("title", locale).map((field) => readField(property, field)),
    readTranslatedField(property, "title", locale),
  ].find(Boolean);
  if (localized) return localized;

  for (const fallbackLocale of fallbackLocaleOrder[locale]) {
    const fallback = [
      ...localizedFieldCandidates("title", fallbackLocale).map((field) => readField(property, field)),
      readTranslatedField(property, "title", fallbackLocale),
    ].find(Boolean);
    if (fallback) return fallback;
  }

  return readField(property, "title") || defaultTitle[locale];
}

export function getLocalizedPropertyDescription(property: Property, locale: PropertyLocale = "no") {
  const localized = pickLongest([
    ...localizedFieldCandidates("marketing_description", locale).map((field) => readField(property, field)),
    ...localizedFieldCandidates("description", locale).map((field) => readField(property, field)),
    readTranslatedField(property, "marketing_description", locale),
    readTranslatedField(property, "description", locale),
  ]);
  if (localized) return localized;

  for (const fallbackLocale of fallbackLocaleOrder[locale]) {
    const fallback = pickLongest([
      ...localizedFieldCandidates("marketing_description", fallbackLocale).map((field) => readField(property, field)),
      ...localizedFieldCandidates("description", fallbackLocale).map((field) => readField(property, field)),
      readTranslatedField(property, "marketing_description", fallbackLocale),
      readTranslatedField(property, "description", fallbackLocale),
    ]);
    if (fallback) return fallback;
  }

  return pickLongest([readField(property, "marketing_description"), readField(property, "description")]);
}

export function getLocalizedPropertyType(property: Property, locale: PropertyLocale = "no") {
  const localized = [
    ...localizedFieldCandidates("property_type", locale).map((field) => readField(property, field)),
    ...localizedFieldCandidates("type", locale).map((field) => readField(property, field)),
    readTranslatedField(property, "property_type", locale),
    readTranslatedField(property, "type", locale),
  ].find(Boolean);
  if (localized) return localized;

  const raw = readField(property, "property_type") || readField(property, "type") || "Nybygg";
  const key = normalizeSearchText(raw);
  return commonTypeTranslations[locale][key] || raw;
}

export function getPropertyTitle(property: Property) {
  return getLocalizedPropertyTitle(property, "no");
}

export function getPropertyDescription(property: Property) {
  return getLocalizedPropertyDescription(property, "no");
}

export function cleanPropertyText(value: string) {
  return value
    .replace(/&#13;|&#x0d;|&#xD;/gi, "\n")
    .replace(/&#10;|&#x0a;|&#xA;/gi, "\n")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/\r/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function getPropertyRef(property: Property) {
  return property.ref || property.external_id || property.id || "";
}

export function getPropertyType(property: Property) {
  return getLocalizedPropertyType(property, "no");
}

export function getPropertyArea(property: Property) {
  return property.built_area || property.area || 0;
}

export function getPropertyImages(property: Property) {
  const images = new Set<string>();
  if (property.primary_image) images.add(property.primary_image);
  if (property.image_path) images.add(property.image_path);

  if (Array.isArray(property.gallery)) {
    property.gallery.filter(Boolean).forEach((image) => images.add(image));
  }

  if (Array.isArray(property.images_json)) {
    property.images_json.filter(Boolean).forEach((image) => images.add(image));
  }

  if (typeof property.images_json === "string") {
    try {
      const parsed = JSON.parse(property.images_json);
      if (Array.isArray(parsed)) parsed.filter(Boolean).forEach((image) => images.add(String(image)));
    } catch {
      if (property.images_json.startsWith("http")) images.add(property.images_json);
    }
  }

  return Array.from(images);
}

export function getPrimaryImage(property: Property, fallback = fallbackImages[0]) {
  return getPropertyImages(property)[0] || fallback;
}

export function formatPriceForLocale(price?: number, locale: PropertyLocale = "no") {
  if (!price) {
    if (locale === "de") return "Preis auf Anfrage";
    if (locale === "en") return "Price on request";
    return "Pris på forespørsel";
  }
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : locale === "en" ? "en-GB" : "nb-NO", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPrice(price?: number) {
  return formatPriceForLocale(price, "no");
}

export function getRegionLabel(region?: string) {
  return regions.find((item) => item.key === region)?.label || "";
}

export function getPropertySearchText(property: Property) {
  return normalizeSearchText(
    [
      property.region,
      property.location,
      property.town,
      property.title,
      property.title_no,
      property.title_en,
      property.title_de,
      property.title_es,
      property.title_fr,
      property.title_ru,
      property.description,
      property.description_no,
      property.description_en,
      property.description_de,
      property.description_es,
      property.description_fr,
      property.description_ru,
      property.ref,
      property.external_id,
      property.property_type,
      property.property_type_no,
      property.property_type_en,
      property.property_type_de,
      property.type,
      property.type_no,
      property.type_en,
      property.type_de,
      JSON.stringify(property.translations || ""),
    ]
      .filter(Boolean)
      .join(" "),
  );
}

export function propertyMatchesRegion(property: Property, region?: string) {
  if (!region) return true;
  const selected = regions.find((item) => item.key === region);
  if (!selected) return true;
  const explicitRegionText = normalizeSearchText([property.region, property.location].filter(Boolean).join(" "));
  if (explicitRegionText) {
    // RealtyFlow merker innlandssonene på Costa Blanca som "Costa Blanca South/North - Inland".
    // Disse hører til innlandet (Aspe, Pinoso, Hondón, Monóvar m.fl.), selv om teksten også
    // inneholder kyst-aliaset "costa blanca south/north". La innland-signalet vinne her.
    // Costa Calida - Inland / Costa de Almeria - Inland berøres ikke (utenfor Costa Blanca-innlandet).
    if (/costa blanca[^]*\b(inland|innland)/.test(explicitRegionText)) {
      return selected.key === "innlandet";
    }
    const regionAliases = regions.flatMap((item) =>
      item.aliases.map((alias) => ({ region: item.key, alias: normalizeSearchText(alias) })),
    );
    const explicitMatch = regionAliases.find(({ alias }) => explicitRegionText.includes(alias));
    if (explicitMatch) return explicitMatch.region === selected.key;
  }
  const normalizedHaystack = getPropertySearchText(property);
  const regionTerms = [...selected.aliases, ...selected.locations];
  return regionTerms.some((term) => normalizedHaystack.includes(normalizeSearchText(term)));
}

export function propertyMatchesArea(property: Property, area?: string) {
  if (!area) return true;
  const areaTerm = normalizeSearchText(area);
  const normalizedHaystack = getPropertySearchText(property);
  return normalizedHaystack.includes(areaTerm);
}

export function propertyMatchesLifestyle(property: Property, lifestyle?: string) {
  if (!lifestyle) return true;
  const haystack = getPropertySearchText(property);
  const terms: Record<string, string[]> = {
    pool: ["pool", "basseng", "private pool", "privat basseng"],
    sea: ["sea", "sjo", "sjø", "beach", "strand", "hav", "seafront", "sea view", "havutsikt"],
    golf: ["golf", "golf resort", "golfbane", "la marquesa", "altaona", "roda"],
  };

  if (lifestyle === "pool" && property.pool) return true;
  return (terms[lifestyle] || []).some((term) => haystack.includes(normalizeSearchText(term)));
}

export function areaMatchesRegion(profile: AreaProfile, region?: string) {
  if (!region) return true;
  const selected = regions.find((item) => item.key === region);
  if (!selected) return true;
  const haystack = [profile.region, profile.name, profile.slug]
    .filter(Boolean)
    .join(" ")
    .toString();
  const normalizedHaystack = normalizeSearchText(haystack);

  if (region === "costa-blanca-sor" && /(sor|south|sur)/.test(normalizedHaystack)) return true;
  if (region === "costa-calida" && /(calida|murcia)/.test(normalizedHaystack)) return true;
  if (region === "costa-blanca-nord" && /(nord|north|norte)/.test(normalizedHaystack)) return true;

  return [...selected.aliases, ...selected.locations].some((location) =>
    normalizedHaystack.includes(normalizeSearchText(location)),
  );
}

export async function getProperties(limit?: number): Promise<Property[]> {
  try {
    const res = await fetch(`${REALTYFLOW_BASE}/api/properties`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return fallbackProperties.slice(0, limit);
    const data = await res.json();
    const items = (Array.isArray(data) ? data : []).filter((property: Property) => {
      if (typeof property.show_on_website === "boolean") return property.show_on_website;
      if (typeof property.website_visible === "boolean") return property.website_visible;
      return true;
    });
    return (limit ? items.slice(0, limit) : items) as Property[];
  } catch {
    return fallbackProperties.slice(0, limit);
  }
}

export async function getAreaProfiles(): Promise<AreaProfile[]> {
  try {
    const res = await fetch(`${REALTYFLOW_BASE}/api/area-profiles?brandId=zeneco&public=1`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const profiles = Array.isArray(data.profiles) ? (data.profiles as AreaProfile[]) : [];
    return profiles.filter((profile) => {
      const visibilityFields = [
        profile.show_on_website,
        profile.website_visible,
        profile.is_public,
        profile.published,
      ].filter((value) => typeof value === "boolean");
      return visibilityFields.length ? visibilityFields.some(Boolean) : true;
    });
  } catch {
    return [];
  }
}

export async function getLandPlots(): Promise<LandPlot[]> {
  try {
    const res = await fetch(`${REALTYFLOW_BASE}/api/plots`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.plots) ? (data.plots as LandPlot[]) : [];
  } catch {
    return [];
  }
}

export async function getProperty(id: string): Promise<Property | null> {
  const properties = await getProperties();
  return (
    properties.find((property) => {
      const ref = getPropertyRef(property);
      return property.id === id || ref === id;
    }) || null
  );
}

export async function sendLead(payload: LeadPayload) {
  const pipelineValue = payload.budget ? Number(String(payload.budget).replace(/[^0-9]/g, "")) || 0 : 0;
  const propertyInterest = [payload.property_ref, payload.property_title].filter(Boolean).join(" - ");
  const notes = [
    payload.request_type ? `Forespørsel: ${payload.request_type}` : "",
    payload.property_ref ? `Boligref: ${payload.property_ref}` : "",
    payload.property_title ? `Bolig: ${payload.property_title}` : "",
    payload.message,
    payload.preferred_area ? `Område: ${payload.preferred_area}` : "",
    payload.budget ? `Budsjett: ${payload.budget}` : "",
    payload.property_type ? `Boligtype: ${payload.property_type}` : "",
    payload.bedrooms ? `Soverom: ${payload.bedrooms}` : "",
    payload.timeline ? `Tidslinje: ${payload.timeline}` : "",
    payload.purchase_goal ? `Bruk/mål: ${payload.purchase_goal}` : "",
    payload.financing_status ? `Finansiering: ${payload.financing_status}` : "",
    payload.spain_experience ? `Spania-erfaring: ${payload.spain_experience}` : "",
    payload.next_step ? `Ønsket neste steg: ${payload.next_step}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.ZENECO_API_KEY) {
    headers["x-realtyflow-source-key"] = process.env.ZENECO_API_KEY;
  }

  const res = await fetch(`${REALTYFLOW_BASE}/api/public/leads`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || null,
      page_url: payload.page_url || null,
      source: payload.source || "zenecohomes-next",
      notes,
      pipeline_status: "NEW",
      pipeline_value: pipelineValue,
      property_interest: propertyInterest || payload.preferred_area || "",
      brand: "zeneco",
      brand_id: "zeneco",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error("Kunne ikke sende lead til RealtyFlow");
  }

  return res.json();
}

export const fallbackImages = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82",
];

export const fallbackProperties: Property[] = [
  {
    id: "fallback-finestrat",
    ref: "ZEH-FIN-001",
    title_no: "Moderne villa med basseng",
    title_de: "Moderne Villa mit Pool",
    title_en: "Modern villa with pool",
    location: "Finestrat",
    price: 545000,
    bedrooms: 3,
    bathrooms: 3,
    built_area: 156,
    property_type: "Villa",
    primary_image: fallbackImages[0],
    description_no:
      "Et stilrent nybygg med privat uteområde, moderne planløsning og kort vei til strand, golf og servicetilbud.",
    description_de:
      "Ein stilvoller Neubau mit privatem Außenbereich, moderner Raumaufteilung und kurzer Entfernung zu Strand, Golf und Dienstleistungen.",
    description_en:
      "A stylish new build with private outdoor space, a modern layout and easy access to beach, golf and everyday services.",
  },
  {
    id: "fallback-altea",
    ref: "ZEH-ALT-002",
    title_no: "Ny leilighet nær strand og sentrum",
    title_de: "Neue Wohnung nahe Strand und Zentrum",
    title_en: "New apartment near the beach and town centre",
    location: "Altea",
    price: 349000,
    bedrooms: 2,
    bathrooms: 2,
    built_area: 98,
    property_type: "Leilighet",
    primary_image: fallbackImages[1],
    description_no:
      "Lys og moderne leilighet i et nyere prosjekt med gode fellesområder og praktisk beliggenhet.",
    description_de:
      "Helle, moderne Wohnung in einem neueren Projekt mit guten Gemeinschaftsbereichen und praktischer Lage.",
    description_en:
      "A bright modern apartment in a newer development with good communal areas and a practical location.",
  },
  {
    id: "fallback-polop",
    ref: "ZEH-POL-003",
    title_no: "Energieffektivt rekkehus med takterrasse",
    title_de: "Energieeffizientes Reihenhaus mit Dachterrasse",
    title_en: "Energy-efficient townhouse with roof terrace",
    location: "Polop",
    price: 289000,
    bedrooms: 3,
    bathrooms: 2,
    built_area: 112,
    property_type: "Rekkehus",
    primary_image: fallbackImages[2],
    description_no:
      "Et innbydende nybygg for deg som vil ha roligere omgivelser, fjellutsikt og kort vei til kysten.",
    description_de:
      "Ein einladender Neubau für Käufer, die ruhigere Umgebung, Bergblick und kurze Wege zur Küste wünschen.",
    description_en:
      "An inviting new build for buyers who want quieter surroundings, mountain views and quick access to the coast.",
  },
];
