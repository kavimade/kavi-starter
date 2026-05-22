import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"

interface ExploreItem {
  num:         string
  label:       string
  title:       string
  description: string
  href:        string
  external?:   boolean
}

interface Props {
  items: ExploreItem[]
  heading?: string
  eyebrow?: string
}

export function ExploreMore({
  items,
  heading  = "Explore More",
  eyebrow  = "Keep Going",
}: Props) {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <FadeIn>
          <div className="mb-14">
            <p
              className="text-[0.75rem] tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--warm-muted)" }}
            >
              {eyebrow}
            </p>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--primary-foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              {heading}
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const inner = (
              <div className="group flex flex-col gap-5 p-8 h-full rounded-sm lift-card"
                style={{
                  background: "var(--bg-alt)",
                  boxShadow: "0 1px 4px var(--shape-2)",
                }}
              >
                {/* Number + eyebrow */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[0.78rem] tracking-[0.18em] uppercase"
                    style={{ color: "var(--warm)" }}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-normal leading-snug"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    color: "var(--foreground)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[1rem] leading-relaxed flex-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {item.description}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 text-[0.76rem] tracking-[0.12em] uppercase font-bold transition-all group-hover:gap-3"
                  style={{ color: "var(--primary)" }}
                >
                  Learn More <ArrowRight size={13} />
                </div>
              </div>
            )

            return (
              <FadeIn key={item.href} delay={i * 0.1} direction="up">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className="block h-full">
                    {inner}
                  </Link>
                )}
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
