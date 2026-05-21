"use client"
import { motion } from "framer-motion"

const words = [
  "Yoga",
  "Meditation",
  "Breathwork",
  "Himalayan Tradition",
  "Retreats",
  "Philosophy",
  "Stillness",
  "Presence",
  "Inner Work",
  "Movement",
]

export function MarqueeStrip() {
  const doubled = [...words, ...words]

  return (
    <div
      className="overflow-hidden py-[14px]"
      style={{ background: "var(--bg-dark)" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="flex items-center whitespace-nowrap"
      >
        {doubled.map((word, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-[0.65rem] tracking-[0.22em] uppercase"
              style={{ color: "var(--primary-foreground)", padding: "0 1.4rem", opacity: 0.75 }}
            >
              {word}
            </span>
            <span
              className="text-[0.5rem]"
              style={{ color: "var(--terracotta)", opacity: 0.7 }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
