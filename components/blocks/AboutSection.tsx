import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <FadeIn direction="right">
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-3/4 h-3/4 rounded-full pointer-events-none"
                style={{ background: "var(--shape-1)" }}
              />
              <div className="relative aspect-[4/5] rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md overflow-hidden">
                <Image
                  src="/luke-ketterhagen-about-photo.webp"
                  alt="Luke Ketterhagen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-right"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full pointer-events-none"
                style={{ background: "var(--shape-2)" }}
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left" delay={0.14}>
            <div className="flex flex-col gap-6">
              <p
                className="text-[0.69rem] tracking-[0.22em] uppercase"
                style={{ color: "var(--warm)" }}
              >
                Luke Ketterhagen
              </p>

              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "var(--theme-font-display)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  color: "var(--foreground)",
                  fontWeight: 500,
                }}
              >
                Nearly 18 Years<br />
                of Practice{" "}
                <em className="italic" style={{ color: "var(--primary)" }}>
                  &amp; Teaching
                </em>
              </h2>

              <div
                className="w-10 h-px"
                style={{ background: "var(--primary)", opacity: 0.35 }}
              />

              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "var(--fg-muted)" }}
              >
                My practice is rooted in the Himalayan tradition, and my approach
                is straightforward: you are responsible for your own happiness —
                and that happiness is completely within reach. Through dedicated
                study and practice, you begin to recognize your authentic nature,
                independent of external circumstances.
              </p>

              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "var(--fg-muted)" }}
              >
                I believe in the goodness and joy in the human spirit. I have
                seen what becomes possible when inner faith meets sustained effort
                — and I have spent nearly two decades helping students find
                exactly that.
              </p>

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

              <a
                href="https://www.lukeketterhagen.com/about-me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.14em] uppercase font-medium w-fit group transition-all hover:gap-3"
                style={{ color: "var(--primary)" }}
              >
                Full Bio
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
