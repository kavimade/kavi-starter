"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [name,    setName]    = useState("")
  const [email,   setEmail]   = useState("")
  const [message, setMessage] = useState("")
  const [status,  setStatus]  = useState<Status>("idle")
  const [errMsg,  setErrMsg]  = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrMsg("")

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        setName(""); setEmail(""); setMessage("")
      } else {
        setStatus("error")
        setErrMsg(data.error ?? "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrMsg("Something went wrong. Please try again.")
    }
  }

  const inputBase = "w-full px-4 py-3 rounded-[6px] text-[1rem] outline-none transition-colors"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.69rem] tracking-[0.15em] uppercase font-bold" style={{ color: "var(--fg-muted)" }}>
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className={inputBase}
            style={{
              background:   "var(--card)",
              border:       "1.5px solid var(--border)",
              color:        "var(--foreground)",
            }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.69rem] tracking-[0.15em] uppercase font-bold" style={{ color: "var(--fg-muted)" }}>
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputBase}
            style={{
              background: "var(--card)",
              border:     "1.5px solid var(--border)",
              color:      "var(--foreground)",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[0.69rem] tracking-[0.15em] uppercase font-bold" style={{ color: "var(--fg-muted)" }}>
          Message
        </label>
        <textarea
          required
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className={`${inputBase} resize-none`}
          style={{
            background: "var(--card)",
            border:     "1.5px solid var(--border)",
            color:      "var(--foreground)",
          }}
        />
      </div>

      {status === "error" && (
        <p className="text-[0.88rem]" style={{ color: "oklch(0.55 0.18 25)" }}>
          {errMsg}
        </p>
      )}

      {status === "success" ? (
        <p
          className="text-[1.05rem] leading-relaxed py-3"
          style={{ color: "var(--primary)" }}
        >
          Message sent — I'll be in touch soon.
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 h-11 px-6 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85 w-fit"
          style={{
            background: "var(--primary)",
            color:      "var(--primary-foreground)",
            opacity:    status === "loading" ? 0.6 : 1,
          }}
        >
          {status === "loading" ? "Sending…" : <>Send Message <ArrowRight size={14} /></>}
        </button>
      )}
    </form>
  )
}
