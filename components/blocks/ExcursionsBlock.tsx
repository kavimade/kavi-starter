import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"

const excursions = [
  {
    tag: "Registration Open",
    region: "Asia",
    title: "North India Excursion",
    year: "2026",
    description:
      "A small-group spiritual journey through the sacred landscapes of northern India — ancient temples, Himalayan culture, and a dedicated yoga and Ayurveda retreat. Logistics handled, transformative experience guaranteed.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    href: "https://www.lukeketterhagen.com/excursions",
    cta: "View Itinerary & Register",
  },
  {
    tag: "Registration Open",
    region: "Africa",
    title: "Uganda Excursion",
    year: "2026",
    description:
      "An intimate group journey into the heart of Uganda — wildlife, culture, and community woven together with daily practice. One of the world's most vibrant and welcoming destinations, experienced slowly and intentionally.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80",
    href: "https://www.lukeketterhagen.com/excursions",
    cta: "View Itinerary & Register",
  },
]

export function ExcursionsBlock() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p
              className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--primary)" }}
            >
              Small-Group Travel
            </p>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Upcoming Excursions
            </h2>
          </div>
        </FadeIn>

        {/* Two excursion cards side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {excursions.map((ex, i) => (
            <FadeIn key={ex.title} delay={i * 0.12} direction="up">
              <div
                className="group rounded-sm overflow-hidden flex flex-col"
                style={{
                  background: "var(--card)",
                  boxShadow: "0 1px 4px var(--shape-2)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={ex.image}
                    alt={ex.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Region + status chips */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="px-3 py-1 text-[0.58rem] tracking-[0.15em] uppercase backdrop-blur-sm"
                      style={{
                        background: "color-mix(in oklch, var(--background) 90%, transparent)",
                        color: "var(--foreground)",
                      }}
                    >
                      {ex.region}
                    </span>
                    <span
                      className="px-3 py-1 text-[0.58rem] tracking-[0.15em] uppercase"
                      style={{
                        background: "var(--terracotta)",
                        color: "var(--terracotta-fg)",
                      }}
                    >
                      {ex.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div>
                    <p
                      className="text-[0.69rem] tracking-[0.2em] uppercase mb-1.5"
                      style={{ color: "var(--primary)" }}
                    >
                      {ex.year} Excursion
                    </p>
                    <h3
                      className="font-normal leading-snug"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        color: "var(--foreground)",
                        fontSize: "clamp(1.6rem, 3vw, 2rem)",
                      }}
                    >
                      {ex.title}
                    </h3>
                  </div>

                  <div
                    className="w-8 h-px"
                    style={{ background: "var(--primary)", opacity: 0.35 }}
                  />

                  <p
                    className="text-[1rem] leading-relaxed flex-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {ex.description}
                  </p>

                  <a
                    href={ex.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start text-[0.72rem] tracking-[0.12em] uppercase font-medium transition-all hover:gap-3 group/link"
                    style={{ color: "var(--primary)" }}
                  >
                    {ex.cta}
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
