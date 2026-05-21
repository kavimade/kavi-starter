import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"

export function AboutSplit() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Background decorative shape */}
              <div
                className="absolute -top-8 -left-8 w-3/4 h-3/4 rounded-full pointer-events-none"
                style={{ background: "var(--shape-1)" }}
              />
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
                  alt="Marcus in a yoga practice outdoors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Small accent shape */}
              <div
                className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: "var(--shape-2)" }}
              />
            </div>
          </FadeIn>

          {/* Content column */}
          <FadeIn direction="left" delay={0.14}>
            <div className="flex flex-col gap-6">
              <p
                className="text-[0.63rem] tracking-[0.22em] uppercase font-medium"
                style={{ color: "var(--primary)" }}
              >
                Your Teacher
              </p>

              <h2
                className="leading-[1.02]"
                style={{
                  fontFamily: "var(--theme-font-display)",
                  color: "var(--foreground)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 400,
                }}
              >
                Humor, Science,<br />
                and <em className="italic">Spirituality</em>
              </h2>

              <div
                className="w-10 h-px"
                style={{ background: "var(--primary)", opacity: 0.4 }}
              />

              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "var(--fg-muted)" }}
              >
                I teach yoga and meditation in the Himalayan tradition — a lineage
                that treats the whole person: body, breath, and mind together. My
                classes weave postures and breathwork alongside philosophy and
                practical tools you can use long after the mat is rolled up.
              </p>

              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "var(--fg-muted)" }}
              >
                I lead residential retreats at the Himalayan Institute in Pennsylvania,
                guide small groups on spiritual excursions through India and Uganda,
                and offer 100+ online classes through Yoga International. Whether
                you are new to the mat or deepening a long-held practice, I meet
                you exactly where you are.
              </p>

              {/* Signature */}
              <div className="pt-1">
                <span
                  className="text-[3.2rem] leading-none"
                  style={{
                    fontFamily: "var(--theme-font-script)",
                    color: "var(--primary)",
                  }}
                >
                  Luke
                </span>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.14em] uppercase font-medium w-fit group transition-all hover:gap-3"
                style={{ color: "var(--primary)" }}
              >
                My Full Story
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
