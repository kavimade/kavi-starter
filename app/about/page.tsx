import Image from "next/image"
import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { Nav } from "@/components/layout/Nav"
import { ExploreMore } from "@/components/blocks/ExploreMore"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { FadeIn } from "@/components/ui/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Luke Ketterhagen",
  description:
    "Luke Ketterhagen is a yoga teacher, meditation guide, and world traveler with nearly 18 years of practice and teaching in the Himalayan tradition.",
}

const beliefs = [
  {
    heading: "You are responsible for yourself",
    body: "Yoga is built on a simple but profound message: your happiness and well-being are yours to cultivate. Not circumstance, not conditions — you.",
  },
  {
    heading: "People are inherently good",
    body: "I teach from a deep faith in human potential. Joy isn't something to be earned — it already exists within you. Practice makes it accessible.",
  },
  {
    heading: "Discipline is not restriction",
    body: "The combination of inner joy and active effort creates the kind of happiness that lasts. Self-discipline, practiced with care, becomes freedom.",
  },
]

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>

        {/* Hero — split layout */}
        <section className="grid lg:grid-cols-[1.1fr_1fr] min-h-[88svh]">

          {/* Image */}
          <div className="relative min-h-[60vw] lg:min-h-0 overflow-hidden">
            <Image
              src="/luke-ketterhagen-about-photo.webp"
              alt="Luke Ketterhagen"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-right"
            />
          </div>

          {/* Content */}
          <div
            className="flex items-center px-8 lg:px-14 xl:px-20 py-16 lg:py-12"
            style={{ background: "var(--background)" }}
          >
            <FadeIn>
              <div className="flex flex-col gap-7 max-w-[440px]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-px flex-shrink-0" style={{ background: "var(--warm)" }} />
                  <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--primary)" }}>
                    About Luke
                  </p>
                </div>

                <h1
                  className="font-normal leading-[1.0]"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
                    color: "var(--foreground)",
                  }}
                >
                  Nearly 18 years<br />
                  <em className="italic" style={{ color: "var(--primary)" }}>of practice</em>
                </h1>

                <div className="w-10 h-px" style={{ background: "var(--border)" }} />

                <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  I've been teaching yoga and meditation since 2007, rooted in the Himalayan
                  tradition — one of the oldest and most systematic lineages of yogic practice
                  in the world.
                </p>

                <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  I lead retreats at the Himalayan Institute, take small groups on immersive
                  excursions across India and East Africa, and bring wellness programs to
                  organizations across the country.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Philosophy — the quote */}
        <section className="py-24 lg:py-32" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col gap-8">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--warm)" }}>
                  My Philosophy
                </p>
                <blockquote
                  className="leading-[1.35] font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    color: "var(--foreground)",
                  }}
                >
                  &ldquo;To learn about yoga is to learn that you are responsible for
                  yourself — for your own happiness, your own well-being,
                  your own becoming.&rdquo;
                </blockquote>
                <div className="w-12 h-px" style={{ background: "var(--primary)", opacity: 0.35 }} />
                <p className="text-[1.05rem] leading-relaxed max-w-2xl" style={{ color: "var(--fg-muted)" }}>
                  Through systematic study of this ancient tradition, I've watched students
                  discover something deeper than flexibility or calm — a recognition of who
                  they already are, beneath the noise of circumstance and role.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Three beliefs */}
        <section className="py-24 lg:py-32" style={{ background: "var(--background)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="mb-14">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-3" style={{ color: "var(--warm)" }}>
                  What I Believe
                </p>
                <h2
                  className="font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--foreground)",
                  }}
                >
                  The principles behind the practice
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {beliefs.map((b, i) => (
                <FadeIn key={b.heading} delay={i * 0.1} direction="up">
                  <div
                    className="flex flex-col gap-4 p-8 h-full rounded-sm"
                    style={{ background: "var(--card)", boxShadow: "0 1px 4px var(--shape-2)" }}
                  >
                    <h3
                      className="font-normal leading-snug"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        fontSize: "1.4rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {b.heading}
                    </h3>
                    <div className="w-8 h-px" style={{ background: "var(--primary)", opacity: 0.3 }} />
                    <p className="text-[1rem] leading-relaxed flex-1" style={{ color: "var(--fg-muted)" }}>
                      {b.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Himalayan Institute affiliation */}
        <section className="py-24" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/luke-ketterhagen-trainings.webp"
                    alt="Luke Ketterhagen teaching at the Himalayan Institute"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--warm)" }}>
                    Training & Lineage
                  </p>
                  <h2
                    className="font-normal leading-[1.08]"
                    style={{
                      fontFamily: "var(--theme-font-display)",
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      color: "var(--foreground)",
                    }}
                  >
                    Rooted in the<br />
                    <em className="italic" style={{ color: "var(--primary)" }}>Himalayan tradition</em>
                  </h2>
                  <div className="w-10 h-px" style={{ background: "var(--primary)", opacity: 0.3 }} />
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    I trained at the Himalayan Institute in Honesdale, Pennsylvania — a
                    world-renowned center for yoga science founded by Swami Rama. The Himalayan
                    tradition integrates the physical, mental, and spiritual dimensions of practice
                    into a complete, systematic path.
                  </p>
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    I continue to lead residential retreats there several times a year, and draw
                    on this lineage in every class, training, and journey I guide.
                  </p>
                </div>
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
