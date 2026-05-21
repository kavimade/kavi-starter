import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const playfairDisplay = localFont({
  variable: "--font-playfair",
  display: "swap",
  src: [
    { path: "../public/fonts/playfair-display-400.woff2",         weight: "400", style: "normal" },
    { path: "../public/fonts/playfair-display-400-italic.woff2",  weight: "400", style: "italic" },
    { path: "../public/fonts/playfair-display-500.woff2",         weight: "500", style: "normal" },
    { path: "../public/fonts/playfair-display-500-italic.woff2",  weight: "500", style: "italic" },
    { path: "../public/fonts/playfair-display-600.woff2",         weight: "600", style: "normal" },
    { path: "../public/fonts/playfair-display-700.woff2",         weight: "700", style: "normal" },
  ],
})

const lato = localFont({
  variable: "--font-lato",
  display: "swap",
  src: [
    { path: "../public/fonts/lato-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/lato-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/lato-700.woff2", weight: "700", style: "normal" },
  ],
})

const pinyonScript = localFont({
  variable: "--font-pinyon",
  display: "swap",
  src: [
    { path: "../public/fonts/pinyon-script-400.woff2", weight: "400", style: "normal" },
  ],
})

export const metadata: Metadata = {
  title: "Luke Ketterhagen — Yoga & Meditation",
  description:
    "Yoga, meditation, and breathwork in the Himalayan tradition. Retreats, online classes, and excursions with Luke Ketterhagen.",
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
      className={`${playfairDisplay.variable} ${lato.variable} ${pinyonScript.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-col flex-1">{children}</div>
      </body>
    </html>
  )
}
