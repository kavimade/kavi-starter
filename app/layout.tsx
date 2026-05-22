import type { Metadata } from "next"
import localFont from "next/font/local"
import { RelaxationToast } from "@/components/ui/RelaxationToast"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

// TEMP: testing Playfair Display — swap to next/font/local once confirmed
const serifMain = Playfair_Display({
  variable: "--font-serif-main",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const sansMain = localFont({
  variable: "--font-sans-main",
  display: "swap",
  src: [
    { path: "../public/fonts/jost-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/jost-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/jost-700.woff2", weight: "700", style: "normal" },
  ],
})

const scriptMain = localFont({
  variable: "--font-script-main",
  display: "swap",
  src: [
    { path: "../public/fonts/pinyon-script-400.woff2", weight: "400", style: "normal" },
  ],
})

const siteUrl = "https://lukeketterhagen.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png",       sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default:  "Luke Ketterhagen — Yoga, Meditation & Retreats",
    template: "%s — Luke Ketterhagen",
  },
  description:
    "Yoga, meditation, and breathwork in the Himalayan tradition. Retreats, excursions, and teacher trainings with Luke Ketterhagen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type:        "website",
    siteName:    "Luke Ketterhagen",
    title:       "Luke Ketterhagen — Yoga, Meditation & Retreats",
    description: "Yoga, meditation, and breathwork in the Himalayan tradition. Retreats, excursions, and teacher trainings with Luke Ketterhagen.",
    url:         siteUrl,
    images: [{
      url:    "/luke-ketterhagen-hero.webp",
      width:  1920,
      height: 1080,
      alt:    "Luke Ketterhagen — Yoga & Meditation",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Luke Ketterhagen — Yoga, Meditation & Retreats",
    description: "Yoga, meditation, and breathwork in the Himalayan tradition.",
    images:      ["/luke-ketterhagen-hero.webp"],
  },
}

const personSchema = {
  "@context":    "https://schema.org",
  "@type":       "Person",
  "name":        "Luke Ketterhagen",
  "jobTitle":    "Yoga Teacher & Meditation Guide",
  "url":         siteUrl,
  "image":       `${siteUrl}/luke-ketterhagen-about-photo.webp`,
  "description": "Yoga teacher and meditation guide with nearly 18 years of experience in the Himalayan tradition. Leads retreats, international excursions, teacher trainings, and corporate wellness programs.",
  "sameAs": [
    "https://www.youtube.com/@lukeketterhagen8133",
    "https://www.lukeketterhagen.com",
  ],
  "knowsAbout": ["Yoga", "Meditation", "Himalayan Tradition", "Pranayama", "Breathwork", "Ayurveda", "Corporate Wellness"],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name":  "Himalayan Institute",
    "url":   "https://himalayaninstitute.org",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="water"
      className={`${serifMain.variable} ${sansMain.variable} ${scriptMain.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="flex flex-col flex-1">{children}</div>
        <RelaxationToast />
      </body>
    </html>
  )
}
