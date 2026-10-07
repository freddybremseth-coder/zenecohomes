import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.zenecohomes.com";
  const blockedPaths = ["/api/portal/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Public portal/auth pages stay crawlable so search engines can read
        // their explicit noindex directives. Private API resources stay blocked.
        disallow: blockedPaths,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: blockedPaths,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
