import type { MetadataRoute } from "next";

import { areaSlug } from "@/lib/areaRoutes";
import { localSeoLandingPages } from "@/lib/localSeoLandingPages";
import { allArticles, articlePath } from "@/lib/magazine";
import { areaMatchesRegion, fallbackProperties, getAreaProfiles, getProperties, getPropertyRef, regions, type RegionKey } from "@/lib/realtyflow";
import { seoLandingPages } from "@/lib/seoLandingPages";
import { inlandTowns } from "@/lib/inland";
import { seoLandingPagesDE } from "@/lib/seoLandingPages.de";
import { localSeoLandingPagesDE } from "@/lib/localSeoLandingPages.de";
import { seoLandingPagesEN } from "@/lib/seoLandingPages.en";
import { localSeoLandingPagesEN } from "@/lib/localSeoLandingPages.en";
import { seoLandingPagesES } from "@/lib/seoLandingPages.es";
import { localSeoLandingPagesES } from "@/lib/localSeoLandingPages.es";
import { getPropertyDetailPath } from "@/lib/propertyRouting";
import { fetchPublishedPosts } from "@/lib/website-content";

const baseUrl = "https://www.zenecohomes.com";
const allSeoPages = [...seoLandingPages, ...localSeoLandingPages];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cmsPosts, areaProfiles] = await Promise.all([
    fetchPublishedPosts("magasin"),
    getAreaProfiles(),
  ]);
  const retiredArticleSlugs = new Set(["kjopsprosess-bolig-i-spania"]);
  const articlePaths = Array.from(
    new Set([
      ...allArticles
        .filter((article) => !retiredArticleSlugs.has(article.slug))
        .map((article) => articlePath(article)),
      ...cmsPosts
        .filter((post) => !retiredArticleSlugs.has(post.slug))
        .map((post) => {
          const known = allArticles.find((article) => article.slug === post.slug);
          return known ? articlePath(known) : `/magasin/${post.slug}`;
        }),
    ]),
  );
  const nestedAreaPaths = (regions.map((region) => region.key).filter((key) => key !== "innlandet") as RegionKey[])
    .flatMap((region) =>
      areaProfiles
        .filter((profile) => areaMatchesRegion(profile, region))
        .map((profile) => `/omrader/${region}/${areaSlug(profile.name)}`),
    );
  const isArticleRoute = (route: string) =>
    route.startsWith("/magasin/") || route.startsWith("/guide/") || route.startsWith("/bedriftshytte-spania/");

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/de",
    "/en",
    "/es",
    "/eiendommer",
    "/de/immobilien",
    "/en/properties",
    "/es/propiedades",
    "/omrader/innlandet/tomter",
    "/bedriftshytte-spania",
    "/bedriftshytte-spania/guider",
    "/de/inland",
    "/en/inland",
    "/es/interior",
    "/de/regionen",
    "/de/kaufprozess",
    "/de/ratgeber",
    "/en/areas",
    "/en/buying-process",
    "/en/guides",
    "/es/zonas",
    "/es/proceso-de-compra",
    "/es/guias",
    "/omrader",
    "/guide/kjope-bolig-i-spania",
    "/guide/nybygg-i-spania",
    "/visningstur",
    "/kundeomtaler",
    "/om-oss",
    "/om-oss/freddy",
    "/om-oss/andrea",
    "/personvern",
    "/informasjonskapsler",
    ...regions.map((region) => `/omrader/${region.key}`),
    ...nestedAreaPaths,
    ...inlandTowns.map((town) => `/omrader/innlandet/${town.slug}`),
    ...allSeoPages.map((page) => `/${page.slug}`),
    ...seoLandingPagesDE.map((page) => `/de/${page.slug}`),
    ...localSeoLandingPagesDE.map((page) => `/de/${page.slug}`),
    ...seoLandingPagesEN.map((page) => `/en/${page.slug}`),
    ...localSeoLandingPagesEN.map((page) => `/en/${page.slug}`),
    ...seoLandingPagesES.map((page) => `/es/${page.slug}`),
    ...localSeoLandingPagesES.map((page) => `/es/${page.slug}`),
    "/kjopsprosessen",
    "/guide",
    "/magasin",
    ...articlePaths,
    "/de/ueber-freddy",
    "/en/about-freddy",
    "/es/sobre-freddy",
    "/booking",
    "/de/termin",
    "/en/booking",
    "/es/cita",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency:
      isArticleRoute(route) ||
      route === "/eiendommer" ||
      route === "/de/immobilien" ||
      route === "/en/properties" ||
      route === "/es/propiedades"
        ? isArticleRoute(route)
          ? "monthly"
          : "daily"
        : "weekly",
    priority:
      route === "" || route === "/de" || route === "/en" || route === "/es"
        ? 1
        : isArticleRoute(route)
          ? 0.75
          : allSeoPages.some((page) => route === `/${page.slug}`) ||
              seoLandingPagesES.some((page) => route === `/es/${page.slug}`) ||
              localSeoLandingPagesES.some((page) => route === `/es/${page.slug}`)
            ? 0.86
            : 0.8,
  }));

  // Enumerate all real visible inventory. A previous cap of 100 silently
  // omitted valid property pages. Never sitemap sample properties when the
  // upstream RealtyFlow feed is unavailable.
  const fallbackIds = new Set(fallbackProperties.map((property) => property.id));
  const properties = (await getProperties(0)).filter(
    (property) => !fallbackIds.has(property.id),
  );
  const uniqueProperties = new Map<string, (typeof properties)[number]>();
  for (const property of properties) {
    const reference = getPropertyRef(property);
    if (reference) uniqueProperties.set(reference, property);
  }
  const propertyRoutes = Array.from(uniqueProperties.entries()).flatMap(([ref, property]) => {
    const date = property.updated_at || property.updatedAt;
    const modified = date && Number.isFinite(Date.parse(date)) ? new Date(date) : null;
    return (["no", "de", "en", "es"] as const).map((locale) => ({
      url: `${baseUrl}${getPropertyDetailPath(ref, locale)}`,
      ...(modified ? { lastModified: modified } : {}),
      changeFrequency: "daily" as const,
      priority: 0.7,
    }));
  });

  return [...staticRoutes, ...propertyRoutes];
}
