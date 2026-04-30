export type Property = {
  id?: string;
  ref?: string;
  external_id?: string;
  title?: string;
  title_no?: string;
  title_en?: string;
  description?: string;
  description_no?: string;
  description_en?: string;
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
  type?: string;
  pool?: boolean;
  energy_rating?: string;
  status?: string;
  region?: string;
};

export type RegionKey = "costa-blanca-nord" | "costa-blanca-sor" | "costa-calida";

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

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  preferred_area?: string;
  budget?: string;
  property_type?: string;
  bedrooms?: string;
  timeline?: string;
  message?: string;
  source?: string;
};

const REALTYFLOW_BASE = process.env.REALTYFLOW_BASE_URL || "https://realtyflow.chatgenius.pro";

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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
];

export function getPropertyTitle(property: Property) {
  return property.title_no || property.title || property.title_en || "Nybygg i Spania";
}

export function getPropertyDescription(property: Property) {
  return cleanPropertyText(property.description_no || property.description || property.description_en || "");
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
  return property.property_type || property.type || "Nybygg";
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

export function formatPrice(price?: number) {
  if (!price) return "Pris på forespørsel";
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
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
      property.description,
      property.description_no,
      property.description_en,
      property.ref,
      property.external_id,
      property.property_type,
      property.type,
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
    const items = Array.isArray(data) ? data : [];
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
  const notes = [
    payload.message,
    payload.preferred_area ? `Område: ${payload.preferred_area}` : "",
    payload.budget ? `Budsjett: ${payload.budget}` : "",
    payload.property_type ? `Boligtype: ${payload.property_type}` : "",
    payload.bedrooms ? `Soverom: ${payload.bedrooms}` : "",
    payload.timeline ? `Tidslinje: ${payload.timeline}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`${REALTYFLOW_BASE}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || null,
      source: payload.source || "zenecohomes-next",
      notes,
      pipeline_status: "NEW",
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
    location: "Finestrat",
    price: 545000,
    bedrooms: 3,
    bathrooms: 3,
    built_area: 156,
    property_type: "Villa",
    primary_image: fallbackImages[0],
    description_no:
      "Et stilrent nybygg med privat uteområde, moderne planløsning og kort vei til strand, golf og servicetilbud.",
  },
  {
    id: "fallback-altea",
    ref: "ZEH-ALT-002",
    title_no: "Ny leilighet nær strand og sentrum",
    location: "Altea",
    price: 349000,
    bedrooms: 2,
    bathrooms: 2,
    built_area: 98,
    property_type: "Leilighet",
    primary_image: fallbackImages[1],
    description_no:
      "Lys og moderne leilighet i et nyere prosjekt med gode fellesområder og praktisk beliggenhet.",
  },
  {
    id: "fallback-polop",
    ref: "ZEH-POL-003",
    title_no: "Energieffektivt rekkehus med takterrasse",
    location: "Polop",
    price: 289000,
    bedrooms: 3,
    bathrooms: 2,
    built_area: 112,
    property_type: "Rekkehus",
    primary_image: fallbackImages[2],
    description_no:
      "Et innbydende nybygg for deg som vil ha roligere omgivelser, fjellutsikt og kort vei til kysten.",
  },
];
