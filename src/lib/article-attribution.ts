const BASE = "https://www.zenecohomes.com";

const ATTRIBUTABLE_PREFIXES = [
  "/eiendommer",
  "/booking",
  "/omrader",
  "/kontakt",
  "/boligmatch",
];

export function withArticleAttribution(
  href: string,
  articleSlug?: string | null,
  enabled = true,
) {
  if (!enabled || !articleSlug || !href) return href;
  if (/^(?:#|mailto:|tel:|javascript:)/i.test(href)) return href;

  try {
    const url = new URL(href, BASE);
    if (url.origin !== BASE) return href;
    if (!ATTRIBUTABLE_PREFIXES.some(prefix => url.pathname === prefix || url.pathname.startsWith(prefix + "/"))) {
      return href;
    }

    url.searchParams.set("utm_source", "zen_magasin");
    url.searchParams.set("utm_medium", "internal");
    url.searchParams.set("utm_campaign", "marked_akkurat_na");
    url.searchParams.set("utm_content", articleSlug);

    return url.pathname + url.search + url.hash;
  } catch {
    return href;
  }
}
