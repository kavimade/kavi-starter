import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

export function PhilosophyQuote() {
  return (
    <section className="relative py-36 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--overlay-heavy)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Top rule */}
          <div
            className="w-px h-14 mx-auto mb-12"
            style={{ background: "color-mix(in oklch, var(--primary-foreground) 28%, transparent)" }}
          />

          <blockquote
            className="italic leading-[1.22]"
            style={{
              fontFamily: "var(--theme-font-display)",
              color: "var(--primary-foreground)",
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
            }}
          >
            &ldquo;After practice you become more of your authentic self.
            <br className="hidden sm:block" />
            {" "}With passion for your practice you will begin to trust yourself more.&rdquo;
          </blockquote>

          <cite
            className="not-italic mt-8 block text-[0.69rem] tracking-[0.22em] uppercase"
            style={{ color: "var(--primary-foreground)", opacity: 0.5 }}
          >
            — Luke Ketterhagen
          </cite>

          {/* Bottom rule */}
          <div
            className="w-px h-14 mx-auto mt-12"
            style={{ background: "color-mix(in oklch, var(--primary-foreground) 28%, transparent)" }}
          />
        </FadeIn>
      </div>
    </section>
  )
}
