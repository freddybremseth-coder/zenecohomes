import {
  getPropertyArea,
  getPropertyRef,
  getPropertyTown,
  normalizeSearchText,
  type Property,
} from "@/lib/realtyflow";

function read(property: Property, key: string): string {
  const value = (property as Record<string, unknown>)[key];
  return typeof value === "string" ? value.trim() : "";
}

function translated(property: Property, field: string): string {
  const value = property.translations;
  if (!value) return "";
  if (Array.isArray(value)) {
    const match = value.find((item) => {
      if (!item || typeof item !== "object") return false;
      const row = item as Record<string, unknown>;
      const lang = String(row.locale || row.language || row.lang || "").toLowerCase();
      return lang === "es" || lang.startsWith("es-");
    }) as Record<string, unknown> | undefined;
    const result = match?.[field] ?? match?.[`${field}_es`];
    return typeof result === "string" ? result.trim() : "";
  }
  if (typeof value === "object") {
    const row = value as Record<string, unknown>;
    const es = row.es;
    if (es && typeof es === "object") {
      const result = (es as Record<string, unknown>)[field];
      if (typeof result === "string") return result.trim();
    }
    const direct = row[`${field}_es`];
    if (typeof direct === "string") return direct.trim();
  }
  return "";
}

function has(raw: string, ...terms: string[]) {
  const value = normalizeSearchText(raw);
  return terms.some((term) => value.includes(normalizeSearchText(term)));
}

export function getSpanishPropertyType(property: Property): string {
  const localized = read(property, "property_type_es") || read(property, "type_es") || translated(property, "property_type") || translated(property, "type");
  if (localized) return localized;

  const raw = read(property, "property_type") || read(property, "type") || "Vivienda";
  if (has(raw, "penthouse", "atico", "ático")) return "Ático";
  if (has(raw, "studio", "estudio")) return "Estudio";
  if (has(raw, "duplex", "dúplex")) return "Dúplex";
  if (has(raw, "bungalow")) return "Bungalow";
  if (has(raw, "semi detached", "semi-detached", "semidetached", "tomannsbolig", "pareado")) return "Chalet pareado";
  if (has(raw, "quad", "townhouse", "terraced", "rekkehus", "adosado")) return "Adosado";
  if (has(raw, "apartment", "apartments", "flat", "wohnung", "leilighet", "ground floor", "top floor", "apartamento")) return "Apartamento";
  if (has(raw, "finca", "country house", "cortijo", "rural")) return "Finca";
  if (has(raw, "villa", "detached", "chalet")) return "Villa";
  if (has(raw, "plot", "land", "grundst", "tomt", "terreno", "parcela")) return "Terreno";
  if (has(raw, "commercial", "business", "local")) return "Local comercial";
  if (has(raw, "new build", "neubau", "nybygg", "obra nueva")) return "Obra nueva";
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
}

export function getSpanishPropertyHeading(property: Property): string {
  const type = getSpanishPropertyType(property);
  const town = getPropertyTown(property);
  const bedrooms = property.bedrooms || 0;
  if (town && bedrooms) return `${type} de ${bedrooms} dormitorios en ${town}`;
  if (town) return `${type} en ${town}`;
  if (bedrooms) return `${type} de ${bedrooms} dormitorios`;
  return type;
}

export function getSpanishPropertyTitle(property: Property): string {
  const localized = read(property, "title_es") || translated(property, "title");
  return localized || getSpanishPropertyHeading(property);
}

export function getSpanishPropertyDescription(property: Property): string {
  const localized =
    read(property, "marketing_description_es") ||
    read(property, "description_es") ||
    translated(property, "marketing_description") ||
    translated(property, "description");
  if (localized) return localized;

  const town = getPropertyTown(property);
  const type = getSpanishPropertyType(property).toLowerCase();
  const facts = [
    property.bedrooms ? `${property.bedrooms} dormitorios` : "",
    property.bathrooms ? `${property.bathrooms} baños` : "",
    getPropertyArea(property) ? `${getPropertyArea(property)} m² construidos` : "",
    property.plot_size ? `parcela de ${property.plot_size} m²` : "",
    property.pool ? "piscina" : "",
  ].filter(Boolean);
  const place = town ? ` en ${town}` : " en España";
  return `Esta ${type}${place}${facts.length ? ` cuenta con ${facts.join(", ")}` : ""}. Solicita información actualizada, planos, disponibilidad y condiciones antes de reservar.`;
}

export function formatSpanishPrice(price?: number): string {
  if (!price) return "Precio a consultar";
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getSpanishPropertySeoDescription(property: Property): string {
  const town = getPropertyTown(property) || property.location || "España";
  return `${formatSpanishPrice(property.price)} · ${town} · ${getSpanishPropertyType(property)}. Solicita planos, disponibilidad, coste total orientativo y asesoramiento de Zen Eco Homes.`;
}

export function spanishPropertyPath(property: Property) {
  return `/es/propiedades/${encodeURIComponent(getPropertyRef(property))}`;
}
