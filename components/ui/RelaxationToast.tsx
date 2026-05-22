"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site"

type ToastState = "expanded" | "pill" | "hidden" | null

const { slug, freebie } = siteConfig
const STATE_KEY      = `${slug}_toast_state`
const UNTIL_KEY      = `${slug}_toast_hidden_until`
const SUPPRESS_MS    = freebie.suppressDays * 24 * 60 * 60 * 1000

// Dark navy matching --bg-dark in water theme
const PILL_DARK = "oklch(0.245 0.062 250)"

export function RelaxationToast() {
  const [state,        setState]        = useState<ToastState>(null)
  const [overFooter,   setOverFooter]   = useState(false)
  const [email,        setEmail]        = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // Scroll trigger for initial appearance
  useEffect(() => {
    const hiddenUntil = localStorage.getItem(UNTIL_KEY)
    if (hiddenUntil && Date.now() < parseInt(hiddenUntil)) return

    if (hiddenUntil) {
      localStorage.removeItem(UNTIL_KEY)
      localStorage.removeItem(STATE_KEY)
    }

    const saved = localStorage.getItem(STATE_KEY) as ToastState | null
    if (saved === "pill") {
      setState("pill")
      return
    }

    const onScroll = () => {
      const scrolled = window.scrollY
      const total    = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0 && scrolled / total >= freebie.scrollThreshold) {
        setState("expanded")
        window.removeEventListener("scroll", onScroll)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Detect when pill enters footer zone
  useEffect(() => {
    if (state !== "pill") return
    const check = () => {
      const footer = document.querySelector("footer")
      if (!footer) return
      // Pill sits at bottom-6 (24px) + ~44px height = 68px from bottom
      setOverFooter(footer.getBoundingClientRect().top < window.innerHeight - 60)
    }
    check()
    window.addEventListener("scroll", check, { passive: true })
    return () => window.removeEventListener("scroll", check)
  }, [state])

  const collapseToPill = () => {
    setState("pill")
    localStorage.setItem(STATE_KEY, "pill")
  }

  const hidePermanently = () => {
    setState("hidden")
    localStorage.setItem(UNTIL_KEY, String(Date.now() + SUPPRESS_MS))
    localStorage.removeItem(STATE_KEY)
  }

  const expand = () => setState("expanded")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitStatus("loading")
    try {
      const res  = await fetch("/api/subscribe", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email, tags: [freebie.mailchimpTag] }),
      })
      const data = await res.json()
      if (data.success) setSubmitStatus("success")
      else              setSubmitStatus("error")
    } catch {
      setSubmitStatus("error")
    }
  }

  if (!freebie.enabled || state === null || state === "hidden") return null

  // Pill colors
  const pillBg      = overFooter ? "rgba(255,255,255,0.20)" : PILL_DARK
  const pillText    = "#ffffff"
  const pillXBg     = "rgba(255,255,255,0.1)"
  const pillXColor  = "#ffffff"
  const pillShadow  = overFooter
    ? "0 4px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)"
    : "0 4px 16px rgba(0,0,0,0.22)"

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence mode="wait">

        {/* ── Expanded toast ── */}
        {state === "expanded" && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[360px] rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md overflow-hidden"
            style={{
              background: "var(--background)",
              boxShadow:  "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-end px-5 pt-4 pb-1">
              <button
                onClick={collapseToPill}
                aria-label="Minimize"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 cursor-pointer"
                style={{ background: "var(--bg-alt)" }}
              >
                <X size={13} style={{ color: "var(--fg-muted)" }} />
              </button>
            </div>

            {/* Photo + text */}
            <div className="flex gap-4 px-5 pb-4 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={freebie.photo}
                alt={freebie.photoAlt}
                className="flex-shrink-0 object-cover object-right"
                style={{ width: 80, height: 96, borderRadius: "12px 4px 12px 4px" }}
              />
              <div className="flex flex-col gap-2">
                <p
                  className="font-normal leading-snug"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize:   "1.3rem",
                    color:      "var(--foreground)",
                  }}
                >
                  {freebie.heading}
                </p>
                <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {freebie.subheading}
                </p>
              </div>
            </div>

            {/* Email form */}
            <div className="px-5 pb-5">
              {submitStatus === "success" ? (
                <p
                  className="text-[0.95rem] py-2 italic"
                  style={{ fontFamily: "var(--theme-font-display)", color: "var(--primary)" }}
                >
                  {freebie.successMsg}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    disabled={submitStatus === "loading"}
                    className="flex-1 h-10 px-3.5 text-[0.88rem] outline-none rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] disabled:opacity-60"
                    style={{
                      background: "var(--bg-alt)",
                      border:     "1.5px solid var(--border)",
                      color:      "var(--foreground)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="h-10 px-4 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.72rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85 disabled:opacity-60 flex items-center gap-1.5 cursor-pointer"
                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  >
                    {submitStatus === "loading" ? "…" : <ArrowRight size={13} />}
                  </button>
                </form>
              )}
              {submitStatus === "error" && (
                <p className="text-[0.75rem] mt-1.5" style={{ color: "oklch(0.55 0.18 25)" }}>
                  Something went wrong — please try again.
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Pill ── */}
        {state === "pill" && (
          <motion.div
            key="pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity:         1,
              y:               0,
              backgroundColor: pillBg,
              boxShadow:       pillShadow,
            }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-2 pr-1 pl-4 h-11 rounded-full"
            style={{
              backdropFilter:       overFooter ? "blur(12px)" : "none",
              WebkitBackdropFilter: overFooter ? "blur(12px)" : "none",
            }}
          >
            <motion.button
              onClick={expand}
              animate={{ color: pillText }}
              transition={{ duration: 0.3 }}
              className="text-[0.72rem] tracking-[0.1em] uppercase font-bold whitespace-nowrap cursor-pointer"
            >
              {freebie.pillText}
            </motion.button>
            <motion.button
              onClick={hidePermanently}
              aria-label="Dismiss"
              animate={{ backgroundColor: pillXBg }}
              transition={{ duration: 0.3 }}
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-70 cursor-pointer"
            >
              <motion.span animate={{ color: pillXColor }} transition={{ duration: 0.3 }}>
                <X size={12} />
              </motion.span>
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
