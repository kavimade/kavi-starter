"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LukeLogo } from "@/components/ui/LukeLogo"

const links = [
  { href: "/retreats",   label: "Retreats",   num: "01" },
  { href: "/trainings",  label: "Trainings",  num: "02" },
  { href: "/excursions", label: "Excursions", num: "03" },
  { href: "/corporate",  label: "Corporate",  num: "04" },
  { href: "/about",      label: "About",      num: "05" },
  { href: "/contact",    label: "Contact",    num: "06" },
]

const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number]

const curtain = {
  hidden:  { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: curtainEase },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.48, ease: curtainEase },
  },
}

export function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  /* Lock body scroll while overlay is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const onDark = mobileOpen

  return (
    <>
      {/* ── Sticky header ───────────────────────────────────── */}
      <header
        className={`${mobileOpen ? "fixed top-0 left-0 right-0" : "sticky top-0"} z-[65] transition-all duration-300`}
        style={{
          background: onDark ? "transparent" : "var(--background)",
          boxShadow: onDark
            ? "none"
            : "0 2px 12px color-mix(in oklch, var(--foreground) 8%, transparent)",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center md:grid md:grid-cols-[1fr_auto_1fr]"
          style={{ height: scrolled ? "68px" : "90px", transition: "height 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
        >

          {/* Logo — left */}
          <motion.div
            className="flex-shrink-0 relative z-10 justify-self-start"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.1 }}
          >
            <Link href="/" aria-label="Luke Ketterhagen — Home">
              <LukeLogo onDark={onDark} />
            </Link>
          </motion.div>

          {/* Desktop nav — center */}
          <motion.nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.2 }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8rem] tracking-[0.15em] uppercase font-bold transition-colors"
                style={{
                  color: isActive(link.href) ? "var(--primary)" : "var(--foreground)",
                  opacity: isActive(link.href) ? 1 : 0.75,
                }}
                onMouseEnter={e => { if (!isActive(link.href)) e.currentTarget.style.color = "var(--primary)" }}
                onMouseLeave={e => { if (!isActive(link.href)) e.currentTarget.style.color = "var(--foreground)" }}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Right — CTA + mobile toggle */}
          <div className="flex items-center gap-4 justify-self-end">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.2 }}
            >
              <Link
                href="/retreats"
                className="inline-flex items-center justify-center h-9 px-5 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.72rem] tracking-[0.18em] uppercase font-bold transition-opacity hover:opacity-85"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Retreats
              </Link>
            </motion.div>

            {/* Mobile toggle */}
            <motion.button
              className="md:hidden relative z-10 flex flex-col justify-between cursor-pointer"
              style={{ width: 26, height: 16 }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.span
                className="block w-full h-px origin-center"
                style={{ background: onDark ? "var(--primary-foreground)" : "var(--foreground)" }}
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                transition={{ duration: 0.3, ease: curtainEase }}
              />
              <motion.span
                className="block w-full h-px origin-center"
                style={{ background: onDark ? "var(--primary-foreground)" : "var(--foreground)" }}
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                transition={{ duration: 0.3, ease: curtainEase }}
              />
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            variants={curtain}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-[60] flex flex-col px-8 pb-12"
            style={{
              background: "var(--bg-dark)",
              paddingTop: "140px",
            }}
          >
            {/* Nav links */}
            <nav className="flex flex-col flex-1" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.32 + i * 0.065,
                    duration: 0.52,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline gap-5 py-[10px]"
                    style={{
                      borderBottom: "1px solid color-mix(in oklch, var(--primary-foreground) 10%, transparent)",
                    }}
                  >
                    {/* Number */}
                    <span
                      className="text-[0.56rem] tracking-[0.22em] uppercase tabular-nums flex-shrink-0 w-4"
                      style={{ color: "var(--primary-light)" }}
                    >
                      {link.num}
                    </span>

                    {/* Label — italicises on hover */}
                    <span
                      className="font-normal leading-tight transition-all duration-200 group-hover:italic"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        color: "var(--primary-foreground)",
                        fontSize: "clamp(1.9rem, 7vw, 2.4rem)",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.78, duration: 0.38 }}
              className="flex items-end justify-start pt-6"
            >
              <Link
                href="/retreats"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center h-11 px-6 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.76rem] tracking-[0.09em] uppercase font-medium transition-opacity hover:opacity-85"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Retreats
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
