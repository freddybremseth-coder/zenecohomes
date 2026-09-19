import { createClient } from "@supabase/supabase-js";

/**
 * Public, narrowly scoped metadata written by the owner-approved Sam pilot.
 * Anon can SELECT the active title/description only; writes require RealtyFlow's
 * service role and optimistic revision checked by a database RPC.
 *
 * This is deliberately NOT a generic CMS or a Google Search Console writer.
 */
const SEO_PILOT_SLUGS = new Set([
  "bolig-i-spania", "nybygg-i-spania", "nybygg-costa-blanca",
  "eiendomsradgiver-spania",
]);

export type PublicSeoOverride = { seo_title: string; seo_description: string };

export async function readZenEcoSeoOverride(slug: string): Promise<PublicSeoOverride | null> {
  if (!SEO_PILOT_SLUGS.has(slug)) return null;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await supabase.from("seo_page_overrides")
      .select("seo_title,seo_description")
      .eq("brand_id", "zeneco")
      .eq("page_path", "/" + slug)
      .eq("active", true)
      .maybeSingle();
    if (error || !data) {
      if (error) console.warn("[ZenEco SEO] Metadata read unavailable", error.code);
      return null;
    }
    if (typeof data.seo_title !== "string" ||
        typeof data.seo_description !== "string" ||
        data.seo_title.length < 22 || data.seo_title.length > 65 ||
        data.seo_description.length < 70 || data.seo_description.length > 160) return null;
    return { seo_title: data.seo_title, seo_description: data.seo_description };
  } catch {
    return null; // Preserve original static metadata if network / Supabase fails.
  }
}
