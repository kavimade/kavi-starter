"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function scrollToTop() {
  const startY   = window.scrollY
  const duration = 800
  const startTime = performance.now()

  function step(now: number) {
    const elapsed  = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY * (1 - easeInOutCubic(progress)))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function ScrollToTop() {
  const [visible,    setVisible]    = useState(false)
  const [overFooter, setOverFooter] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 400)

      const footer = document.querySelector("footer")
      if (footer) {
        const rect = footer.getBoundingClientRect()
        setOverFooter(rect.top < window.innerHeight - 60)
      }
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const color  = overFooter ? "rgba(255,255,255,0.9)" : "var(--bg-dark)"
  const border = overFooter ? "1.5px solid rgba(255,255,255,0.7)" : `1.5px solid var(--bg-dark)`

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "transparent",
            border,
            color,
            transition: "color 0.3s ease, border-color 0.3s ease",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 14V4M4 9l5-5 5 5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
