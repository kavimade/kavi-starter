import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { Nav } from "@/components/layout/Nav"
import { PageHeroSplit } from "@/components/blocks/PageHeroSplit"
import { ExploreMore } from "@/components/blocks/ExploreMore"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trainings — Luke Ketterhagen",
  description:
    "Yoga teacher training programs and workshops with Luke Ketterhagen, rooted in the Himalayan tradition.",
}

const offerings = [
  {
    title: "200-Hour Yoga Teacher Training",
    description:
      "A comprehensive program rooted in the Himalayan tradition. Using the philosophy of Patanjali's Yoga Sutra as a backbone, this training develops your personal practice and teaches you to guide others with authenticity and confidence.",
    location: "Himalayan Institute · Honesdale, PA",
  },
  {
    title: "Workshops & Intensives",
    description:
      "Single-day and multi-day workshops exploring specific dimensions of practice — breathwork, the nervous system, yoga philosophy, and more. Designed for both new students and experienced practitioners.",
    location: "Various locations",
  },
  {
    title: "Professional Development",
    description:
      "For yoga teachers looking to deepen their understanding and refine their teaching. Drawing from the depth of the Himalayan lineage to help you develop a style that is authentically your own.",
    location: "In person & online",
  },
]

export default function TrainingsPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>

        <PageHeroSplit
          image="/luke-ketterhagen-trainings.webp"
          imageAlt="Luke Ketterhagen teaching a yoga training"
          eyebrow="With Luke Ketterhagen"
          heading={<>Trainings &amp;<br /><em className="italic" style={{ color: "var(--primary)" }}>Workshops</em></>}
          description="Deepen your practice. Develop your teaching. Discover who you are."
        />

        {/* Philosophy section */}
        <section className="py-24 lg:py-32" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col gap-8">
                <p
                  className="text-[0.69rem] tracking-[0.22em] uppercase"
                  style={{ color: "var(--warm)" }}
                >
                  Why Train
                </p>
                <blockquote
                  className="leading-[1.35] font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    color: "var(--foreground)",
                  }}
                >
                  &ldquo;Participating in a training program is one of the most powerful things
                  you can do to advance the understanding of who you are — and consequently,
                  your mission in life.&rdquo;
                </blockquote>
                <div
                  className="w-12 h-px"
                  style={{ background: "var(--primary)", opacity: 0.35 }}
                />
                <p
                  className="text-[1.05rem] leading-relaxed max-w-2xl"
                  style={{ color: "var(--fg-muted)" }}
                >
                  My training programs use the philosophy of Patanjali's Yoga Sutra as a
                  backbone, making the depth of this tradition accessible at every level. The
                  goal is always the same: to help you develop a practice and a way of teaching
                  that is unmistakably, completely your own.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-24 lg:py-32" style={{ background: "var(--background)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="mb-14">
                <p
                  className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
                  style={{ color: "var(--warm)" }}
                >
                  Programs
                </p>
                <h2
                  className="font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--foreground)",
                  }}
                >
                  What I Offer
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {offerings.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1} direction="up">
                  <div
                    className="flex flex-col gap-4 p-8 h-full rounded-sm"
                    style={{
                      background: "var(--card)",
                      boxShadow: "0 1px 4px var(--shape-2)",
                    }}
                  >
                    <h3
                      className="font-normal leading-snug"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        fontSize: "1.4rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      className="w-8 h-px flex-shrink-0"
                      style={{ background: "var(--primary)", opacity: 0.3 }}
                    />
                    <p
                      className="text-[1rem] leading-relaxed flex-1"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="text-[0.69rem] tracking-[0.12em] uppercase"
                      style={{ color: "var(--warm)" }}
                    >
                      {item.location}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry CTA */}
        <section className="py-24" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex flex-col items-center gap-6">
                <p
                  className="text-[0.69rem] tracking-[0.22em] uppercase"
                  style={{ color: "var(--warm)" }}
                >
                  Stay Informed
                </p>
                <h2
                  className="font-normal leading-[1.1]"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--foreground)",
                  }}
                >
                  Training schedule varies by season
                </h2>
                <p
                  className="text-[1.05rem] leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  I announce upcoming workshops and teacher trainings by email.
                  Reach out directly to inquire about what's current or coming up.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 h-11 px-6 lift-btn rounded-[6px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Get in Touch <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <ExploreMore
          eyebrow="With Luke"
          heading="There's More to Explore"
          items={[
            {
              num: "01",
              label: "Yoga Retreats",
              title: "Retreats",
              description: "Three and a half days of yoga, meditation, and deep rest at the Himalayan Institute in the Pocono Mountains.",
              href: "/retreats",
            },
            {
              num: "02",
              label: "Global Travel",
              title: "Excursions",
              description: "Small-group spiritual journeys to India and Uganda. Cultural immersion woven with daily practice.",
              href: "/excursions",
            },
            {
              num: "03",
              label: "For Organizations",
              title: "Corporate Wellness",
              description: "Yoga, meditation, and stress management brought directly to your workplace or corporate retreat.",
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
