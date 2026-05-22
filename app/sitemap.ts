import { MetadataRoute } from "next"

const base = "https://lukeketterhagen.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",            priority: 1.0, freq: "weekly"  },
    { path: "/retreats",   priority: 0.9, freq: "monthly" },
    { path: "/excursions", priority: 0.9, freq: "monthly" },
    { path: "/trainings",  priority: 0.8, freq: "monthly" },
    { path: "/corporate",  priority: 0.8, freq: "monthly" },
    { path: "/about",      priority: 0.7, freq: "monthly" },
    { path: "/contact",    priority: 0.6, freq: "yearly"  },
  ]

  return pages.map(({ path, priority, freq }) => ({
    url:              `${base}${path}`,
    lastModified:     new Date(),
    changeFrequency:  freq,
    priority,
  }))
}
