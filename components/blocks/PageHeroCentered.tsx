"use client"
import Image from "next/image"
import { useId } from "react"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

interface Props {
  image:           string
  imageAlt?:       string
  eyebrow?:        string
  heading:         string
  subheading?:     string
  objectPosition?: string
  height?:         string
  mobileHeight?:   string
}

export function PageHeroCentered({
  image,
  imageAlt       = "",
  eyebrow,
  heading,
  subheading,
  objectPosition = "center",
  height         = "82svh",
  mobileHeight,
}: Props) {
  const uid = useId().replace(/:/g, "")

  return (
    <section>
      {mobileHeight && (
        <style>{`
          #phc-${uid} { height: ${mobileHeight}; }
          @media (min-width: 768px) { #phc-${uid} { height: ${height}; } }
        `}</style>
      )}
      {/* Full-width image */}
      <motion.div
        id={mobileHeight ? `phc-${uid}` : undefined}
        className="relative w-full overflow-hidden"
        style={mobileHeight ? undefined : { height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease }}
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
      </motion.div>

      {/* Centered content below */}
      <div
        className="border-b"
        style={{ background: "var(--background)", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-28 flex flex-col items-center text-center gap-5">

          {eyebrow && (
            <motion.p
              className="text-[0.75rem] tracking-[0.22em] uppercase"
              style={{ color: "var(--warm)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65, ease }}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            className="leading-[1.0] font-normal"
            style={{
              fontFamily: "var(--theme-font-display)",
              fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)",
              color: "var(--foreground)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.65, ease }}
          >
            {heading}
          </motion.h1>

          {subheading && (
            <motion.p
              className="leading-relaxed text-[1.05rem] max-w-xl"
              style={{ color: "var(--fg-muted)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74, duration: 0.65, ease }}
            >
              {subheading}
            </motion.p>
          )}

        </div>
      </div>
    </section>
  )
}
