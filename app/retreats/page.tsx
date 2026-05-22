import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { Nav } from "@/components/layout/Nav"
import { RetreatsGrid } from "@/components/blocks/RetreatsGrid"
import { TestimonialsBlock } from "@/components/blocks/TestimonialsBlock"
import { ExploreMore } from "@/components/blocks/ExploreMore"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retreats — Luke Ketterhagen",
  description:
    "Join Luke Ketterhagen for yoga and meditation retreats at the Himalayan Institute in Honesdale, PA. Three residential retreats per year.",
}

export default function RetreatsPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <RetreatsGrid />
        <TestimonialsBlock />
        <ExploreMore
          eyebrow="With Luke"
          heading="There's a Path for Everyone"
          items={[
            {
              num: "01",
              label: "Global Travel",
              title: "Excursions",
              description: "Small-group spiritual journeys to India and Uganda. Cultural immersion, sacred sites, and dedicated practice — travel that transforms.",
              href: "/excursions",
            },
            {
              num: "02",
              label: "Professional Development",
              title: "Trainings",
              description: "Yoga teacher training programs rooted in the Himalayan tradition. Deepen your own practice while building the skills to teach others.",
              href: "/trainings",
            },
            {
              num: "03",
              label: "For Organizations",
              title: "Corporate Wellness",
              description: "Lunchtime yoga, seminars, and corporate retreats tailored to your team. Luke brings the practice to the workplace.",
              href: "/corporate",
            },
          ]}
        />
      </main>
      <EmailCapture />
      <ScrollToTop />
    </>
  )
}
