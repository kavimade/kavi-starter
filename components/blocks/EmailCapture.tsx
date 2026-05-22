"use client"
import { useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { siteConfig } from "@/config/site"

export function EmailCapture() {
  const [email, setEmail]     = useState("")
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errMsg, setErrMsg]   = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res  = await fetch("/api/subscribe", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
      } else {
        setErrMsg(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  const year = new Date().getFullYear()

  return (
    <footer>
      {/* ── Email capture — image section ─────────────────── */}
      <div className="relative min-h-[70svh] flex flex-col overflow-hidden">
        <Image
          src="/luke-ketterhagen-newsletter-signup.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "var(--overlay-heavy)" }} />

        <div className="relative z-10 flex-1 flex items-center justify-center py-32 max-w-xl mx-auto w-full px-6 lg:px-8 text-center">
        <FadeIn>
          <h2
            className="font-light leading-[1.08] mb-5"
            style={{
              fontFamily: "var(--theme-font-display)",
              color: "var(--primary-foreground)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            }}
          >
            Stay <em className="italic">Connected</em>
          </h2>

          <p
            className="leading-relaxed mb-10 text-[1.05rem]"
            style={{ color: "var(--primary-foreground)", opacity: 0.65 }}
          >
            Get email notifications when Luke travels to your town.
          </p>

          {status === "success" ? (
            <div style={{ color: "var(--primary-foreground)" }}>
              <p
                className="text-2xl font-light italic mb-2"
                style={{ fontFamily: "var(--theme-font-display)" }}
              >
                Welcome to the practice.
              </p>
              <p className="text-sm" style={{ opacity: 0.5 }}>
                Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle") }}
                placeholder="Your email address"
                required
                disabled={status === "loading"}
                className="w-full sm:flex-1 h-12 px-5 rounded-[6px] text-[1rem] outline-none transition-colors disabled:opacity-60"
                style={{
                  background: "color-mix(in oklch, var(--primary-foreground) 10%, transparent)",
                  border: status === "error"
                    ? "1px solid #f87171"
                    : "1px solid color-mix(in oklch, var(--primary-foreground) 22%, transparent)",
                  color: "var(--primary-foreground)",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-12 px-7 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.68rem] tracking-[0.13em] uppercase font-bold transition-opacity hover:opacity-88 whitespace-nowrap disabled:opacity-60"
                style={{ background: "var(--primary-foreground)", color: "var(--foreground)" }}
              >
                {status === "loading" ? "Subscribing…" : "Subscribe Free"}
              </button>
              {status === "error" && (
                <p className="text-[0.7rem] mt-1 text-red-400 sm:col-span-2">{errMsg}</p>
              )}
            </form>
          )}

          <p
            className="mt-5 text-[0.6rem] tracking-[0.1em] uppercase"
            style={{ color: "var(--primary-foreground)", opacity: 0.38 }}
          >
            No spam. Unsubscribe anytime.
          </p>
        </FadeIn>
        </div>

      </div>

      {/* ── Kavi sub-strip ───────────────────────────────── */}
      <div
        className="flex flex-col items-center gap-4 pt-6 pb-28 md:pb-8 px-6"
        style={{ background: "var(--bg-dark)" }}
      >
        {/* Badge */}
        <a
          href="https://kavimade.com?utm_source=kavi-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 lift-btn"
          style={{
            background:    "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border:        "1px solid rgba(232,223,200,0.18)",
            borderRadius:  "14px 4px 14px 4px",
            padding:       "10px 18px",
            boxShadow:     "0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(232,223,200,0.08)",
          }}
        >
          {/* K monogram */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width:        30,
              height:       30,
              borderRadius: "50%",
              background:   "rgba(232,223,200,0.1)",
              border:       "1px solid rgba(232,223,200,0.2)",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: "#E8DFC8", lineHeight: 1 }}>K</span>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-0">
            <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#E8DFC8", letterSpacing: "0.04em" }}>
              Made by Kavi
            </span>
            <span style={{ fontSize: "0.76rem", color: "rgba(232,223,200,0.5)", letterSpacing: "0.02em" }}>
              kavimade.com
            </span>
          </div>
        </a>

        {/* Copyright */}
        <span style={{ fontSize: "0.76rem", color: "rgba(232,223,200,0.35)", letterSpacing: "0.03em" }}>
          © {year} {siteConfig.ownerName}
        </span>
      </div>
    </footer>
  )
}
