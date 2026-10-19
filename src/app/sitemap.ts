import type { MetadataRoute } from "next";
import { getAllWorkSlugs } from "@/lib/work";

// Canonical production origin (www, no trailing slash).
const baseUrl = "https://www.hellostudio5designs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // getAllWorkSlugs() is the same unfiltered source used by the detail pages'
  // generateStaticParams, so new case studies appear automatically. Note it
  // includes `hidden` entries (e.g. the BPI case study): those pages are still
  // generated and live, so they belong in the sitemap too.
  const workEntries: MetadataRoute.Sitemap = getAllWorkSlugs().map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...workEntries];
}
