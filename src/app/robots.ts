import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.zenecohomes.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Allow the public sign-in pages to be crawled so their noindex
        // meta directives can be seen. Auth and API resources stay blocked.
        disallow: ["/auth/", "/api/portal/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        // Allow the public sign-in pages to be crawled so their noindex
        // meta directives can be seen. Auth and API resources stay blocked.
        disallow: ["/auth/", "/api/portal/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
