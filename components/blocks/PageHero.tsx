import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

interface Props {
  image:       string
  imageAlt?:   string
  eyebrow?:    string
  heading:     string
  subheading?: string
  objectPosition?: string
}

export function PageHero({
  image,
  imageAlt    = "",
  eyebrow,
  heading,
  subheading,
  objectPosition = "center",
}: Props) {
  return (
    <section>
      {/* Full-width image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "55svh" }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        {/* Subtle bottom fade to connect with content below */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </div>

      {/* Page title block */}
      <div style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-18">
          <FadeIn>
            <div className="flex flex-col gap-3 max-w-2xl">
              {eyebrow && (
                <p
                  className="text-[0.69rem] tracking-[0.22em] uppercase"
                  style={{ color: "var(--warm)" }}
                >
                  {eyebrow}
                </p>
              )}
              <h1
                className="leading-[1.0] font-normal"
                style={{
                  fontFamily: "var(--theme-font-display)",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  color: "var(--foreground)",
                }}
              >
                {heading}
              </h1>
              {subheading && (
                <p
                  className="text-[1.05rem] leading-relaxed mt-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {subheading}
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
