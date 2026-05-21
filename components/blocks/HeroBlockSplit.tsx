"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}
const item = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease } },
}

export function HeroBlock() {
  return (
    <section className="grid lg:grid-cols-[1.15fr_1fr] min-h-[90svh]">

      {/* ── Left: Editorial image ──────────────────────────────── */}
      <motion.div
        className="relative min-h-[58vw] lg:min-h-0 overflow-hidden"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        <Image
          src="/luke-ketterhagen-hero.webp"
          alt="Luke Ketterhagen"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-top"
        />

        {/* Credential badge — sits over the image bottom-left */}
        <motion.div
          className="absolute bottom-6 left-6 px-4 py-2.5"
          style={{ background: "var(--background)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease }}
        >
          <p
            className="text-[0.58rem] tracking-[0.22em] uppercase"
            style={{ color: "var(--primary)" }}
          >
            Himalayan Institute · Honesdale, PA
          </p>
        </motion.div>
      </motion.div>

      {/* ── Right: Content on clean background ────────────────── */}
      <div
        className="flex items-center px-8 lg:px-12 xl:px-16 py-16 lg:py-12"
        style={{ background: "var(--background)" }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 w-full max-w-[420px]"
        >

          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3">
            <div
              className="w-7 h-px flex-shrink-0"
              style={{ background: "var(--warm)" }}
            />
            <p
              className="text-[0.65rem] tracking-[0.22em] uppercase"
              style={{ color: "var(--primary)" }}
            >
              Yoga &amp; Meditation · Himalayan Tradition
            </p>
          </motion.div>

          {/* Headline — roman + italic mix */}
          <motion.h1
            variants={item}
            className="leading-[0.98]"
            style={{
              fontFamily: "var(--theme-font-display)",
              fontSize: "clamp(3.2rem, 5.5vw, 5rem)",
              color: "var(--foreground)",
              fontWeight: 400,
            }}
          >
            Come Back
            <br />
            <em
              className="italic"
              style={{ color: "var(--primary)" }}
            >
              To Yourself.
            </em>
          </motion.h1>

          {/* Thin rule */}
          <motion.div
            variants={item}
            className="w-10 h-px"
            style={{ background: "var(--border)" }}
          />

          {/* Description */}
          <motion.p
            variants={item}
            className="leading-relaxed"
            style={{
              color: "var(--fg-muted)",
              fontSize: "1.02rem",
            }}
          >
            Yoga, meditation, and breathwork in the Himalayan tradition.
            Join Luke on the path toward authentic strength, deep ease,
            and a clearer mind.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
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
        </motion.div>
      </div>
    </section>
  )
}
