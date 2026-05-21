"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MarqueeStrip } from "@/components/blocks/MarqueeStrip"

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export function HeroBlock() {
  return (
    <section>

      {/* Full-width image — no text overlay, no container constraints */}
      <motion.div
        className="relative w-full overflow-hidden h-[40svh] lg:h-[82svh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease }}
      >
        <Image
          src="/luke-ketterhagen-hero.webp"
          alt="Luke Ketterhagen"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </motion.div>

      <MarqueeStrip />

      {/* Below image: centered content */}
      <div
        className="border-b"
        style={{
          background: "var(--background)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center gap-6">

          {/* Eyebrow */}
          <motion.p
            className="text-[0.69rem] tracking-[0.22em] uppercase"
            style={{ color: "var(--primary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.72, ease }}
          >
            Yoga &amp; Meditation · Himalayan Tradition
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="leading-[1.0]"
            style={{
              fontFamily: "var(--theme-font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "var(--foreground)",
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.72, ease }}
          >
            <span style={{ color: "var(--primary)" }}>Yoga.</span>{" "}
            Meditation. Natural Health.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="leading-relaxed max-w-xl"
            style={{ color: "var(--fg-muted)", fontSize: "1.05rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.72, ease }}
          >
            Yoga, meditation, and breathwork in the Himalayan tradition.
            Join Luke on the path toward clarity, authentic strength, and
            lasting ease.
          </motion.p>

          {/* CTAs — commented out for now
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84, duration: 0.72, ease }}
          >
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
          </motion.div>
          */}

        </div>
      </div>

    </section>
  )
}
