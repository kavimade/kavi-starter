import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             "Luke Ketterhagen — Yoga & Meditation",
    short_name:       "Luke Ketterhagen",
    description:      "Yoga, meditation, and breathwork in the Himalayan tradition.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#f5f0e8",
    theme_color:      "#2d4a6e",
    icons: [
      {
        src:   "/icon-192.png",
        sizes: "192x192",
        type:  "image/png",
      },
      {
        src:     "/icon-512.png",
        sizes:   "512x512",
        type:    "image/png",
        purpose: "any maskable",
      },
    ],
  }
}
