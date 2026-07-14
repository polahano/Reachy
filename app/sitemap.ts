import type { MetadataRoute } from "next";
import { navItems } from "@/content/nav";
import { SITE_URL, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const item of navItems) {
    entries.push({
      url: `${SITE_URL}${localePath("ar", item.path)}`,
      lastModified: now,
      changeFrequency: item.key === "home" ? "weekly" : "monthly",
      priority: item.key === "home" ? 1 : 0.7,
      alternates: {
        languages: {
          ar: `${SITE_URL}${localePath("ar", item.path)}`,
          en: `${SITE_URL}${localePath("en", item.path)}`,
        },
      },
    });
    entries.push({
      url: `${SITE_URL}${localePath("en", item.path)}`,
      lastModified: now,
      changeFrequency: item.key === "home" ? "weekly" : "monthly",
      priority: item.key === "home" ? 1 : 0.7,
      alternates: {
        languages: {
          ar: `${SITE_URL}${localePath("ar", item.path)}`,
          en: `${SITE_URL}${localePath("en", item.path)}`,
        },
      },
    });
  }

  return entries;
}
