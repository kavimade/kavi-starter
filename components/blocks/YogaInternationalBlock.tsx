import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { YogaInternationalLogo } from "@/components/ui/YogaInternationalLogo"
import { ArrowRight, Clock } from "lucide-react"

const courseFeatures = [
  "Chakra Yoga Practices",
  "Daily Integration Tools",
  "Downloadable Workbook",
]

const cardClass =
  "group block rounded-sm overflow-hidden flex flex-col h-full lift-card cursor-pointer"
const cardStyle = {
  background: "var(--card)",
  boxShadow: "0 1px 4px var(--shape-2)",
}

export function YogaInternationalBlock() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <div className="flex justify-center mb-10">
              <YogaInternationalLogo />
            </div>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Practice Anywhere, Anytime
            </h2>
          </div>
        </FadeIn>

        {/* Two fully-clickable cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 — Online Library */}
          <FadeIn direction="up" delay={0}>
            <a
              href="https://yogainternational.com/profile/luke-ketterhagen/"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
              style={cardStyle}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/luke-yi-library.webp"
                  alt="Luke Ketterhagen online classes on Yoga International"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-[0.58rem] tracking-[0.15em] uppercase"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  On Demand
                </span>
              </div>

              <div className="p-7 flex flex-col gap-4 flex-1">
                <div>
                  <p
                    className="text-[0.69rem] tracking-[0.2em] uppercase mb-2"
                    style={{ color: "var(--warm)" }}
                  >
                    Online Library
                  </p>
                  <h3
                    className="font-normal leading-snug"
                    style={{
                      fontFamily: "var(--theme-font-display)",
                      color: "var(--foreground)",
                      fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                    }}
                  >
                    100+ Classes, Meditations<br />&amp; Courses
                  </h3>
                </div>

                <div className="w-8 h-px" style={{ background: "var(--primary)", opacity: 0.35 }} />

                <p className="text-[1rem] leading-relaxed flex-1" style={{ color: "var(--fg-muted)" }}>
                  A full on-demand library of yoga, meditation, guided relaxation,
                  and breathwork with Luke on Yoga International. Every level,
                  every length — accessible anywhere, any time.
                </p>

                <div
                  className="inline-flex items-center gap-2 self-start text-[0.72rem] tracking-[0.12em] uppercase font-bold transition-all group-hover:gap-3"
                  style={{ color: "var(--primary)" }}
                >
                  Browse the Library <ArrowRight size={12} />
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Card 2 — Featured Course */}
          <FadeIn direction="up" delay={0.1}>
            <a
              href="https://yogainternational.com/ecourse/player/yoga-and-the-chakras-for-transformation/?utm_source=ambassador&utm_medium=luke-ketterhagen&utm_campaign=the-yogic-science-of-tranformation"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
              style={cardStyle}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/luke-yi-course.webp"
                  alt="The Yogic Science of Transformation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-[0.58rem] tracking-[0.15em] uppercase"
                  style={{ background: "var(--warm)", color: "var(--warm-fg)" }}
                >
                  Featured Course
                </span>
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 text-[0.6rem] tracking-[0.1em] uppercase backdrop-blur-sm"
                  style={{
                    background: "color-mix(in oklch, var(--background) 88%, transparent)",
                    color: "var(--foreground)",
                  }}
                >
                  <Clock size={10} />
                  2h 53min
                </div>
              </div>

              <div className="p-7 flex flex-col gap-4 flex-1">
                <div>
                  <p
                    className="text-[0.69rem] tracking-[0.2em] uppercase mb-2"
                    style={{ color: "var(--warm)" }}
                  >
                    Online Course
                  </p>
                  <h3
                    className="font-normal leading-snug"
                    style={{
                      fontFamily: "var(--theme-font-display)",
                      color: "var(--foreground)",
                      fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                    }}
                  >
                    The Yogic Science<br />of Transformation
                  </h3>
                  <p className="text-[0.8rem] leading-snug mt-1.5" style={{ color: "var(--fg-muted)" }}>
                    Activating Change and Repatterning Your Habits through the Chakras
                  </p>
                </div>

                <div className="w-8 h-px" style={{ background: "var(--primary)", opacity: 0.35 }} />

                <ul className="flex flex-col gap-2 flex-1">
                  {courseFeatures.map((label) => (
                    <li key={label} className="flex items-center gap-2.5 text-[0.9rem]" style={{ color: "var(--fg-muted)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--primary)" }} />
                      {label}
                    </li>
                  ))}
                </ul>

                <div
                  className="inline-flex items-center gap-2 self-start text-[0.72rem] tracking-[0.12em] uppercase font-bold transition-all group-hover:gap-3"
                  style={{ color: "var(--primary)" }}
                >
                  Browse the Course <ArrowRight size={12} />
                </div>
              </div>
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
