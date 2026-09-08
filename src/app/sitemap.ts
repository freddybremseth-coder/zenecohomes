import type { MetadataRoute } from "next";

import { localSeoLandingPages } from "@/lib/localSeoLandingPages";
import { allArticles, articlePath } from "@/lib/magazine";
import { getProperties, getPropertyRef, regions } from "@/lib/realtyflow";
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
  const now = new Date();
  const cmsPosts = await fetchPublishedPosts("magasin");
  const articlePaths = Array.from(
    new Set([
      ...allArticles.map((article) => articlePath(article)),
      ...cmsPosts.map((post) => `/magasin/${post.slug}`),
    ]),
  );
  const isArticleRoute = (route: string) =>
    route.startsWith("/magasin/") || route.startsWith("/kjopsprosess/") || route.startsWith("/guide/");

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/de",
    "/en",
    "/es",
    "/eiendommer",
    "/de/immobilien",
    "/en/properties",
    "/es/propiedades",
    "/tomter",
    "/inland",
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
    ...regions.map((region) => `/omrader/${region.key}`),
    ...inlandTowns.map((town) => `/inland/${town.slug}`),
    ...allSeoPages.map((page) => `/${page.slug}`),
    ...seoLandingPagesDE.map((page) => `/de/${page.slug}`),
    ...localSeoLandingPagesDE.map((page) => `/de/${page.slug}`),
    ...seoLandingPagesEN.map((page) => `/en/${page.slug}`),
    ...localSeoLandingPagesEN.map((page) => `/en/${page.slug}`),
    ...seoLandingPagesES.map((page) => `/es/${page.slug}`),
    ...localSeoLandingPagesES.map((page) => `/es/${page.slug}`),
    "/kjopsprosessen",
    "/kjopsprosess",
    "/guide",
    "/magasin",
    ...articlePaths,
    "/om-freddy",
    "/de/ueber-freddy",
    "/en/about-freddy",
    "/es/sobre-freddy",
    "/min-side",
    "/de/min-side",
    "/en/min-side",
    "/es/mi-area",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
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

  const properties = await getProperties(100);
  const propertyRefs = properties
    .map((property) => getPropertyRef(property))
    .filter(Boolean);
  const propertyRoutes = propertyRefs.flatMap((ref) =>
    (["no", "de", "en", "es"] as const).map((locale) => ({
      url: `${baseUrl}${getPropertyDetailPath(ref, locale)}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...propertyRoutes];
}
