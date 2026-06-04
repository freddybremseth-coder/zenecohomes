import type { MetadataRoute } from "next";

import { localSeoLandingPages } from "@/lib/localSeoLandingPages";
import { allArticles } from "@/lib/magazine";
import { getProperties, getPropertyRef, regions } from "@/lib/realtyflow";
import { seoLandingPages } from "@/lib/seoLandingPages";
import { seoLandingPagesDE } from "@/lib/seoLandingPages.de";
import { localSeoLandingPagesDE } from "@/lib/localSeoLandingPages.de";
import { seoLandingPagesEN } from "@/lib/seoLandingPages.en";
import { localSeoLandingPagesEN } from "@/lib/localSeoLandingPages.en";
import { fetchPublishedPosts } from "@/lib/website-content";

const baseUrl = "https://www.zenecohomes.com";
const allSeoPages = [...seoLandingPages, ...localSeoLandingPages];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const cmsPosts = await fetchPublishedPosts("magasin");
  const articlePaths = Array.from(
    new Set([
      ...allArticles.map((article) => `/magasin/${article.slug}`),
      ...cmsPosts.map((post) => `/magasin/${post.slug}`),
    ]),
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/eiendommer",
    "/de/immobilien",
    "/en/properties",
    "/tomter",
    "/omrader",
    ...regions.map((region) => `/omrader/${region.key}`),
    ...allSeoPages.map((page) => `/${page.slug}`),
    ...seoLandingPagesDE.map((page) => `/de/${page.slug}`),
    ...localSeoLandingPagesDE.map((page) => `/de/${page.slug}`),
    ...seoLandingPagesEN.map((page) => `/en/${page.slug}`),
    ...localSeoLandingPagesEN.map((page) => `/en/${page.slug}`),
    "/kjopsprosessen",
    "/magasin",
    ...articlePaths,
    "/min-side",
    "/de/min-side",
    "/en/min-side",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency:
      route.startsWith("/magasin/") ||
      route === "/eiendommer" ||
      route === "/de/immobilien" ||
      route === "/en/properties"
        ? route.startsWith("/magasin/")
          ? "monthly"
          : "daily"
        : "weekly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/magasin/")
          ? 0.75
          : allSeoPages.some((page) => route === `/${page.slug}`)
            ? 0.86
            : 0.8,
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
