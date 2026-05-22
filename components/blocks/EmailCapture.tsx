"use client"
import { useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

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

        {/* ── Copyright bar — pinned to bottom ─────────────── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-6">
          <div
            className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2"
            style={{ borderTop: "1px solid color-mix(in oklch, var(--primary-foreground) 18%, transparent)" }}
          >
            <span
              className="text-[0.69rem] tracking-[0.22em] uppercase"
              style={{ color: "var(--primary-foreground)", opacity: 0.38 }}
            >
              © {year} Luke Ketterhagen
            </span>
            <a
              href="https://seancorey.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.69rem] tracking-[0.22em] uppercase underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "var(--primary-foreground)", opacity: 0.55 }}
            >
              Website by Sean Corey
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
