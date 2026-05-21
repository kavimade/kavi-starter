import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { Nav } from "@/components/layout/Nav"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { RetreatsGrid } from "@/components/blocks/RetreatsGrid"
import { AboutSection } from "@/components/blocks/AboutSection"
import { TestimonialsBlock } from "@/components/blocks/TestimonialsBlock"
import { PhilosophyQuote } from "@/components/blocks/PhilosophyQuote"
import { ExcursionsBlock } from "@/components/blocks/ExcursionsBlock"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { YogaInternationalBlock } from "@/components/blocks/YogaInternationalBlock"

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <HeroBlock />
        <RetreatsGrid />
        <AboutSection />
        <TestimonialsBlock />
        <PhilosophyQuote />
        <ExcursionsBlock />
        <YogaInternationalBlock />
      </main>
      <EmailCapture />
      <ScrollToTop />
    </>
  )
}
