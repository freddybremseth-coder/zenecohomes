import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.zenecohomes.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/auth/", "/api/portal/", "/min-side"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/auth/", "/api/portal/", "/min-side"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
