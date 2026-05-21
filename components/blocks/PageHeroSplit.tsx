"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ReactNode } from "react"

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}
const item = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease } },
}

interface Props {
  image:           string
  imageAlt?:       string
  badge?:          string
  eyebrow?:        string
  heading:         ReactNode
  description:     string
  objectPosition?: string
}

export function PageHeroSplit({
  image,
  imageAlt       = "",
  badge,
  eyebrow,
  heading,
  description,
  objectPosition = "center top",
}: Props) {
  return (
    <section className="grid lg:grid-cols-[1.15fr_1fr] min-h-[90svh]">

      {/* Left: image */}
      <motion.div
        className="relative min-h-[58vw] lg:min-h-0 overflow-hidden"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
          style={{ objectPosition }}
        />

        {badge && (
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
              {badge}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Right: content */}
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
          {eyebrow && (
            <motion.div variants={item} className="flex items-center gap-3">
              <div className="w-7 h-px flex-shrink-0" style={{ background: "var(--warm)" }} />
              <p
                className="text-[0.69rem] tracking-[0.22em] uppercase"
                style={{ color: "var(--primary)" }}
              >
                {eyebrow}
              </p>
            </motion.div>
          )}

          {/* Heading */}
          <motion.h1
            variants={item}
            className="leading-[1.0] font-normal"
            style={{
              fontFamily: "var(--theme-font-display)",
              fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
              color: "var(--foreground)",
            }}
          >
            {heading}
          </motion.h1>

          {/* Rule */}
          <motion.div
            variants={item}
            className="w-10 h-px"
            style={{ background: "var(--border)" }}
          />

          {/* Description */}
          <motion.p
            variants={item}
            className="leading-relaxed"
            style={{ color: "var(--fg-muted)", fontSize: "1.02rem" }}
          >
            {description}
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
