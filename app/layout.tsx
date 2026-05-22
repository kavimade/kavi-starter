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
      className={`${serifMain.variable} ${sansMain.variable} ${scriptMain.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-col flex-1">{children}</div>
        <RelaxationToast />
      </body>
    </html>
  )
}
