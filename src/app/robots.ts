import type { MetadataRoute } from "next";

// Canonical production origin (www, no trailing slash).
const baseUrl = "https://www.hellostudio5designs.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
