import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link"
import { ArrowRight } from "lucide-react"

const retreats = [
  {
    month: "JUN",
    day: "4",
    title: "Balancing Strength and Ease",
    subtitle: "A Yoga and Meditation Retreat",
    description:
      "A clear, accessible approach to developing those qualities through systematic practice, guided relaxation, and time for integration.",
    dates: "June 4–7, 2026",
    image: "/retreat-1.webp",
    href: "https://himalayaninstitute.org/event/balancing-strength-and-ease-jun-2026/",
  },
  {
    month: "SEP",
    day: "4",
    title: "Rejuvenation in Practice",
    subtitle: "A Labor Day Weekend Yoga and Meditation Retreat",
    description:
      "Every moment — whether in gentle yoga, mindful breathwork, meditation, or quiet rest — invites the body and mind to restore, release, and renew.",
    dates: "September 4–7, 2026",
    image: "/retreat-2.webp",
    href: "https://himalayaninstitute.org/event/rejuvenation-in-practice-sep-2026/",
  },
  {
    month: "OCT",
    day: "29",
    title: "Returning to Center",
    subtitle: "A Yoga and Meditation Retreat",
    description:
      "A sanctuary to reconnect with your inner steadiness, cultivating calm, clarity, and strength through yoga, breathwork, meditation, and restorative practices.",
    dates: "October 29 – November 1, 2026",
    image: "/retreat-3.webp",
    href: "https://himalayaninstitute.org/event/returning-to-center-oct-2026/",
  },
]

export function RetreatsGrid() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--primary)" }}
            >
              Himalayan Institute · Honesdale, PA
            </p>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Upcoming Retreats
            </h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreats.map((retreat, i) => (
            <FadeIn key={retreat.title} delay={i * 0.1} direction="up">
              <a
                href={retreat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-sm overflow-hidden lift-card"
                style={{
                  background: "var(--card)",
                  boxShadow: "0 1px 4px var(--shape-2)",
                }}
              >
                {/* Image with date badge */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={retreat.image}
                    alt={retreat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Date badge */}
                  <div
                    className="absolute top-4 right-4 flex flex-col items-center px-3 pt-2 pb-2.5 min-w-[52px]"
                    style={{ background: "var(--card)" }}
                  >
                    <span
                      className="text-[0.55rem] tracking-[0.2em] uppercase font-semibold leading-none"
                      style={{ color: "var(--primary)" }}
                    >
                      {retreat.month}
                    </span>
                    <span
                      className="text-[2rem] leading-[1.1] font-normal tabular-nums"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        color: "var(--foreground)",
                      }}
                    >
                      {retreat.day}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <h3
                      className="text-[1.35rem] leading-snug font-normal mb-0.5"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        color: "var(--foreground)",
                      }}
                    >
                      {retreat.title}
                    </h3>
                    <p
                      className="text-[0.72rem] tracking-[0.06em]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {retreat.subtitle}
                    </p>
                  </div>

                  <p
                    className="text-[1rem] leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {retreat.description}
                  </p>

                  {/* Date range + link */}
                  <div className="flex items-center justify-between pt-2 mt-auto">
                    <span
                      className="text-[0.72rem] tracking-[0.04em]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {retreat.dates}
                    </span>
                    <span
                      className="flex items-center gap-1 text-[0.68rem] tracking-[0.12em] uppercase font-medium transition-all group-hover:gap-2"
                      style={{ color: "var(--primary)" }}
                    >
                      Register <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Single featured testimonial */}
        <FadeIn>
          <div className="mt-20 flex flex-col items-center text-center gap-6 max-w-[46rem] mx-auto">
            <div
              className="w-8 h-px"
              style={{ background: "var(--primary)", opacity: 0.3 }}
            />
            <blockquote
              className="leading-relaxed"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
              }}
            >
              &ldquo;Luke&rsquo;s insight and teaching provided the perfect blend of humor,
              science and spirituality to create a relaxing, uplifting weekend while
              still allowing me to deepen my practice.&rdquo;
            </blockquote>
            <cite
              className="not-italic text-[0.68rem] tracking-[0.18em] uppercase"
              style={{ color: "var(--fg-muted)" }}
            >
              — Karen M. &nbsp;·&nbsp; July 2022 Retreat
            </cite>
            <SmoothScrollLink
              href="#testimonials"
              className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.12em] uppercase font-medium transition-opacity hover:opacity-60 mt-2"
              style={{ color: "var(--primary)" }}
            >
              More Testimonials
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2v8M2 7l4 4 4-4" />
              </svg>
            </SmoothScrollLink>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
