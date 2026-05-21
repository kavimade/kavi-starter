"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export function HeroBlock() {
  return (
    <section>

      {/* Full-width image — no text overlay, no container constraints */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ height: "82svh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease }}
      >
        <Image
          src="/luke-ketterhagen-hero.webp"
          alt="Luke Ketterhagen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Below image: heading left · description + CTAs right */}
      <div
        className="border-b"
        style={{
          background: "var(--background)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* Left: Heading */}
            <motion.h1
              className="leading-[1.0]"
              style={{
                fontFamily: "var(--theme-font-display)",
                fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
                color: "var(--foreground)",
                fontWeight: 500,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.72, ease }}
            >
              Yoga. Meditation.<br />Natural Health.
            </motion.h1>

            {/* Right: Eyebrow + description + CTAs */}
            <motion.div
              className="flex flex-col gap-6 lg:pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.72, ease }}
            >
              <p
                className="text-[0.65rem] tracking-[0.22em] uppercase"
                style={{ color: "var(--primary)" }}
              >
                Yoga &amp; Meditation · Himalayan Tradition
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--fg-muted)", fontSize: "1.05rem" }}
              >
                Yoga, meditation, and breathwork in the Himalayan tradition.
                Join Luke on the path toward clarity, authentic strength, and
                lasting ease.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] text-[0.76rem] tracking-[0.09em] uppercase font-medium transition-opacity hover:opacity-85"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Start Your Practice
                </Link>
                <Link
                  href="#retreats"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] text-[0.76rem] tracking-[0.09em] uppercase font-medium transition-opacity hover:opacity-60"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  Explore Retreats
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  )
}
