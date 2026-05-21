"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { MarqueeStrip } from "@/components/blocks/MarqueeStrip"

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
}
const line = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export function HeroBlock() {
  const desktopImgRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const objectX = useTransform(scrollY, [0, 1800], [-650, -850], { clamp: true })

  useMotionValueEvent(objectX, "change", (x) => {
    const img = desktopImgRef.current?.querySelector("img")
    if (img) img.style.objectPosition = `${Math.round(x)}px 0px`
  })
  return (
    <section>
      {/* ── Full-bleed image + left overlay panel ─────────── */}
      <div className="lg:relative lg:min-h-[100svh]">

        {/* Background image — mobile: fixed height; desktop: absolute fill */}
        <motion.div
          className="relative h-[40svh] lg:h-auto lg:absolute lg:inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease }}
        >
          {/* Mobile image */}
          <Image
            src="/luke-ketterhagen-hero.webp"
            alt="Luke Ketterhagen"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-bottom lg:hidden"
          />
          {/* Desktop image — parallax via scroll */}
          <div ref={desktopImgRef} className="hidden lg:contents">
            <Image
              src="/luke-ketterhagen-hero-wide.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover hidden lg:block"
              style={{ objectPosition: "-650px 0px" }}
            />
          </div>
        </motion.div>

        {/* Left overlay panel */}
        <div className="relative lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-start lg:pl-12 xl:pl-20">
          <motion.div
            className="w-full lg:w-[44%] lg:max-w-[560px] px-8 lg:px-14 py-12 lg:py-16 rounded-sm"
            style={{
              background: "oklch(1 0 0 / 80%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 2px 12px color-mix(in oklch, var(--foreground) 8%, transparent)",
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease }}
          >

            {/* Stacked heading */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              {["Yoga.", "Meditation.", "Natural Health."].map((word, i) => (
                <motion.span
                  key={word}
                  variants={line}
                  className="block leading-[1.08]"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)",
                    fontWeight: 500,
                    color: i === 2 ? "var(--primary)" : "var(--foreground)",
                    fontStyle: i === 2 ? "italic" : "normal",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-[1rem] tracking-[0.06em] mb-5"
              style={{ color: "var(--warm)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease }}
            >
              Yoga &amp; Meditation &nbsp;·&nbsp; Himalayan Tradition
            </motion.p>

            {/* Rule */}
            <motion.div
              className="w-10 h-px mb-7"
              style={{ background: "var(--border)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.45, ease }}
            />

            {/* Body */}
            <motion.p
              className="leading-relaxed mb-8"
              style={{ color: "var(--fg-muted)", fontSize: "1.02rem" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.55, ease }}
            >
              Yoga, meditation, and breathwork in the Himalayan tradition.
              Join Luke on the path toward authentic strength, deep ease,
              and a clearer mind.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.55, ease }}
            >
              <Link
                href="/retreats"
                className="inline-flex items-center justify-center h-11 px-6 lift-btn rounded-[6px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Explore Retreats
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-11 px-6 lift-btn rounded-[6px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-60"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                About Luke
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* <MarqueeStrip /> */}
    </section>
  )
}
