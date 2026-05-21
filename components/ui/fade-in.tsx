"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  duration?: number
  className?: string
}

const directionOffsets = {
  up:    { y: 28, x: 0 },
  left:  { y: 0,  x: 28 },
  right: { y: 0,  x: -28 },
  none:  { y: 0,  x: 0 },
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.72,
  className,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-56px 0px" })
  const offset = directionOffsets[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
