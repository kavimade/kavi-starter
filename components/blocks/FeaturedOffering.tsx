import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { Check, ArrowRight } from "lucide-react"

const features = [
  "Daily yoga, breathwork, and meditation sessions",
  "Systematic guided relaxation and restorative practices",
  "Philosophy discussions and practical tools for daily life",
  "All accommodation and nourishing meals included",
]

export function FeaturedOffering() {
  return (
    <section id="retreat" className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p
              className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--primary)" }}
            >
              Featured Experience
            </p>
            <h2
              className=""
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Upcoming Retreat
            </h2>
          </div>
        </FadeIn>

        {/* Card */}
        <div
          className="grid lg:grid-cols-2 overflow-hidden rounded-sm"
          style={{
            background: "var(--card)",
            boxShadow: "0 4px 32px var(--shape-2)",
          }}
        >
          {/* Image */}
          <FadeIn direction="right" className="relative min-h-[380px] lg:min-h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80"
              alt="Bali rice terrace landscape for the retreat"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Date badge */}
            <div
              className="absolute top-6 left-6 px-4 py-2.5 text-center backdrop-blur-sm"
              style={{ background: "color-mix(in oklch, var(--background) 90%, transparent)" }}
            >
              <p
                className="text-[0.58rem] tracking-[0.18em] uppercase"
                style={{ color: "var(--primary)" }}
              >
                June 4–7, 2026
              </p>
              <p
                className="text-[0.56rem] tracking-[0.12em] uppercase mt-0.5"
                style={{ color: "var(--fg-muted)" }}
              >
                3.5 Days · Thu–Sun
              </p>
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn direction="left" delay={0.14} className="p-10 lg:p-14 flex flex-col justify-center gap-6">
            <div>
              <p
                className="text-[0.69rem] tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--primary)" }}
              >
                Himalayan Institute · Honesdale, PA
              </p>
              <h3
                className="leading-[1.05]"
                style={{
                  fontFamily: "var(--theme-font-display)",
                  color: "var(--foreground)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                }}
              >
                Balancing Strength<br />
                <em className="italic">&amp; Ease</em>
              </h3>
            </div>

            <div
              className="w-10 h-px"
              style={{ background: "var(--primary)", opacity: 0.35 }}
            />

            <p
              className="text-[1rem] leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              A clear, accessible approach to developing strength and ease through
              systematic practice, guided relaxation, and time for integration.
              Held at the beautiful Himalayan Institute campus in the Pocono
              Mountains of Pennsylvania.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[1rem]" style={{ color: "var(--foreground)" }}>
                  <Check
                    size={13}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--primary)" }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="flex flex-col gap-4 pt-2">
              <p
                className="text-[0.69rem] tracking-[0.1em] uppercase"
                style={{ color: "var(--fg-muted)" }}
              >
                Registration open · Himalayan Institute campus
              </p>
              <Link
                href="/retreat"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.68rem] tracking-[0.13em] uppercase font-medium transition-opacity hover:opacity-85 w-fit group"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Reserve Your Place
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
