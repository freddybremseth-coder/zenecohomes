// Automatisk eiendomsimport for innlandet.
//
// Kilder, i prioritert rekkefølge:
//  1. RealtyFlow (som resten av siden) – filtrert på innlandsområdene.
//  2. Valgfri XML-feed (env INLAND_XML_FEED_URL) – samme feltlogikk som den
//     gamle PropertyImporter.php fra pinosoecolife: <property> med ref, price,
//     address/town, desc/no|en, images/image/url, surface_area osv.
//     Kyero-lignende felter (town, price, beds, baths, images) støttes også.
//
// Resultatene slås sammen og dedupliseres på referanse, slik at nye objekter i
// feeden dukker opp på /inland automatisk – uten manuelt arbeid.

import { XMLParser } from "fast-xml-parser";
import {
  getProperties,
  propertyMatchesRegion,
  getPropertyRef,
  type Property,
} from "@/lib/realtyflow";

const FEED_URL = process.env.INLAND_XML_FEED_URL || "";
const FEED_REVALIDATE_SECONDS = 60 * 60; // feeden caches i én time

type XmlNode = Record<string, unknown>;

function asArray<T>(value: T | T[] | undefined | null): T[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function text(value: unknown): string {
  if (value === undefined || value === null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value).trim();
  if (typeof value === "object") {
    const node = value as XmlNode;
    if (typeof node["#text"] === "string" || typeof node["#text"] === "number") {
      return String(node["#text"]).trim();
    }
  }
  return "";
}

function num(value: unknown): number {
  const parsed = Number(text(value).replace(/[^\d.,-]/g, "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function pick(node: XmlNode, ...keys: string[]): unknown {
  for (const key of keys) {
    if (node[key] !== undefined && node[key] !== null) return node[key];
  }
  return undefined;
}

function extractImages(node: XmlNode): string[] {
  const images: string[] = [];
  const imagesNode = pick(node, "images", "photos", "pictures");
  if (imagesNode && typeof imagesNode === "object") {
    const children = asArray(pick(imagesNode as XmlNode, "image", "photo", "picture", "url"));
    for (const child of children) {
      if (typeof child === "string") {
        if (child.startsWith("http")) images.push(child.trim());
        continue;
      }
      if (child && typeof child === "object") {
        const childNode = child as XmlNode;
        const url =
          text(pick(childNode, "url", "@_url", "@_src")) || text(childNode);
        if (url.startsWith("http")) images.push(url);
      }
    }
  }
  return images;
}

function extractDescription(node: XmlNode): { no: string; en: string } {
  const descNode = pick(node, "desc", "description", "descriptions");
  if (descNode && typeof descNode === "object") {
    const desc = descNode as XmlNode;
    return { no: text(pick(desc, "no", "nb", "nor")), en: text(pick(desc, "en", "eng")) };
  }
  const flat = text(descNode);
  return { no: flat, en: "" };
}

function mapFeedProperty(node: XmlNode): Property | null {
  const address = (pick(node, "address", "location") || {}) as XmlNode;
  const town =
    text(pick(address, "town", "city", "municipality")) || text(pick(node, "town", "city"));
  const ref = text(pick(node, "ref", "reference", "id", "external_id"));
  if (!ref && !town) return null;

  const surface = (pick(node, "surface_area", "surface", "size") || {}) as XmlNode;
  const type = text(pick(node, "type", "property_type")) || "Bolig";
  const desc = extractDescription(node);
  const gallery = extractImages(node);

  return {
    external_id: ref || undefined,
    ref: ref || undefined,
    title: type && town ? `${type} i ${town}` : type || town,
    title_no: type && town ? `${type} i ${town}` : undefined,
    description_no: desc.no || undefined,
    description_en: desc.en || undefined,
    location: town || undefined,
    town: town || undefined,
    region: "innlandet",
    price: num(pick(node, "price")) || undefined,
    bedrooms: num(pick(node, "beds", "bedrooms")) || undefined,
    bathrooms: num(pick(node, "baths", "bathrooms")) || undefined,
    built_area: num(pick(surface, "built_m2", "built")) || undefined,
    plot_size: num(pick(surface, "plot_m2", "plot")) || undefined,
    terrace_size: num(pick(surface, "terrace_m2", "terrace")) || undefined,
    property_type: type || undefined,
    primary_image: gallery[0],
    gallery: gallery.length ? gallery : undefined,
    pool: text(pick(node, "pool")) === "1" || text(pick(node, "pool")).toLowerCase() === "true" || undefined,
  };
}

async function getFeedProperties(): Promise<Property[]> {
  if (!FEED_URL) return [];
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: FEED_REVALIDATE_SECONDS },
      headers: { Accept: "application/xml, text/xml" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false, parseTagValue: false });
    const parsed = parser.parse(xml) as XmlNode;

    // Finn <property>-lister uansett rot-element (<root>, <properties>, <kyero> ...).
    const rootCandidates: XmlNode[] = [parsed, ...Object.values(parsed).filter(
      (value): value is XmlNode => Boolean(value) && typeof value === "object",
    )];
    let items: XmlNode[] = [];
    for (const candidate of rootCandidates) {
      const list = asArray(candidate.property as XmlNode | XmlNode[] | undefined);
      if (list.length) {
        items = list;
        break;
      }
    }

    return items
      .map((item) => mapFeedProperty(item))
      .filter((property): property is Property => Boolean(property));
  } catch {
    return [];
  }
}

/**
 * Alle innlandseiendommer: RealtyFlow-objekter som matcher innlandsområdene
 * pluss objekter fra XML-feeden (om konfigurert), deduplisert på referanse.
 */
export async function getInlandProperties(matchTerms?: string[]): Promise<Property[]> {
  const [realtyflow, feed] = await Promise.all([getProperties(), getFeedProperties()]);

  const inlandFromRealtyflow = realtyflow.filter((property) =>
    propertyMatchesRegion(property, "innlandet"),
  );

  const seen = new Set(
    inlandFromRealtyflow.map((property) => getPropertyRef(property)).filter(Boolean),
  );
  const merged = [
    ...inlandFromRealtyflow,
    ...feed.filter((property) => {
      const ref = getPropertyRef(property);
      return !ref || !seen.has(ref);
    }),
  ];

  if (!matchTerms || matchTerms.length === 0) return merged;

  const normalizedTerms = matchTerms.map((term) => term.toLowerCase());
  return merged.filter((property) => {
    const haystack = [property.town, property.location, property.title, property.title_no]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return normalizedTerms.some((term) => haystack.includes(term));
  });
}
