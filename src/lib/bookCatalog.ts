import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export type PublishedGuide = {
  slug: string;
  title: string;
  language: string;
  coverImageUrl: string | null;
  excerpt: string | null;
};

type GuideRow = {
  slug: string;
  title: string;
  language: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const aliases: Record<string, string[]> = {
  albir: ["albir", "l alfas del pi albir", "l alfas albir"],
  "l alfas del pi": ["albir", "l alfas del pi albir", "l alfas albir"],
  "la nucia": ["la nucia"],
  benidorm: ["benidorm"],
  denia: ["denia"],
  moraira: ["moraira"],
  mutxamel: ["mutxamel"],
  "el campello": ["el campello"],
  "sant joan d alacant": ["sant joan d alacant"],
};

let cachedSeriesId: string | null | undefined;
let cachedGuides: PublishedGuide[] | null = null;
let cacheExpiresAt = 0;

async function getGuideSeriesId() {
  if (cachedSeriesId !== undefined) return cachedSeriesId;
  const supabase = getSupabaseAdmin();
  if (!supabase) return (cachedSeriesId = null);

  const { data, error } = await supabase
    .from("book_series")
    .select("id")
    .eq("slug", "let-me-guide-you")
    .maybeSingle();

  if (error || !data?.id) return (cachedSeriesId = null);
  return (cachedSeriesId = data.id as string);
}

export async function getPublishedGuides(): Promise<PublishedGuide[]> {
  const now = Date.now();
  if (cachedGuides && now < cacheExpiresAt) return cachedGuides;

  const supabase = getSupabaseAdmin();
  const seriesId = await getGuideSeriesId();
  if (!supabase || !seriesId) return [];

  const { data, error } = await supabase
    .from("book_titles")
    .select("slug,title,language,cover_image_url,excerpt")
    .eq("series_id", seriesId)
    .eq("status", "published");

  if (error || !data) return [];

  cachedGuides = (data as GuideRow[]).map((row) => ({
    slug: row.slug,
    title: row.title,
    language: row.language || "no",
    coverImageUrl: row.cover_image_url,
    excerpt: row.excerpt?.trim() || null,
  }));
  cacheExpiresAt = now + 5 * 60 * 1000;
  return cachedGuides;
}

export async function getPublishedGuideForPlace(placeName: string, locale = "no"): Promise<PublishedGuide | null> {
  const guides = await getPublishedGuides();
  const place = normalize(placeName);
  const terms = aliases[place] || [place];

  const matches = guides.filter((guide) => {
    const title = normalize(guide.title);
    return terms.some((term) => {
      const normalizedTerm = normalize(term);
      return title === normalizedTerm || title.includes(normalizedTerm) || normalizedTerm.includes(title);
    });
  });

  if (!matches.length) return null;
  return (
    matches.find((guide) => guide.language === locale) ||
    matches.find((guide) => guide.language === "en") ||
    matches[0]
  );
}
