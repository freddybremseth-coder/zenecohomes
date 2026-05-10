import type { MetadataRoute } from "next";
import { localSeoLandingPages } from "@/lib/localSeoLandingPages";
import { allArticles } from "@/lib/magazine";
import { getProperties, getPropertyRef, regions } from "@/lib/realtyflow";
import { seoLandingPages } from "@/lib/seoLandingPages";

const baseUrl = "https://www.zenecohomes.com";
const allSeoPages = [...seoLandingPages, ...localSeoLandingPages];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/eiendommer",
    "/tomter",
    "/omrader",
    ...regions.map((region) => `/omrader/${region.key}`),
    ...allSeoPages.map((page) => `/${page.slug}`),
    "/kjopsprosessen",
    "/magasin",
    ...allArticles.map((article) => `/magasin/${article.slug}`),
    "/min-side",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/magasin/") ? "monthly" : route === "/eiendommer" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/magasin/") ? 0.75 : allSeoPages.some((page) => route === `/${page.slug}`) ? 0.86 : 0.8,
  }));

  const properties = await getProperties(100);
  const propertyRoutes = properties
    .map((property) => getPropertyRef(property))
    .filter(Boolean)
    .map((ref) => ({
      url: `${baseUrl}/eiendommer/${encodeURIComponent(ref)}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...propertyRoutes];
}
