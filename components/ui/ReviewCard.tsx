import { Star } from "lucide-react"

interface Props {
  quote:    string
  name:     string
  subtitle: string
}

export function ReviewCard({ quote, name, subtitle }: Props) {
  return (
    <div
      className="flex flex-col gap-5 p-8 h-full rounded-sm lift-card"
      style={{ background: "var(--card)", boxShadow: "0 1px 4px var(--shape-2)" }}
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} style={{ color: "var(--sand)", fill: "var(--sand)" }} />
        ))}
      </div>

      <blockquote
        className="leading-[1.5] flex-1 text-[1.15rem]"
        style={{ fontFamily: "var(--theme-font-display)", color: "var(--foreground)" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex flex-col gap-0.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="text-[1rem] font-medium" style={{ color: "var(--foreground)" }}>
          {name}
        </span>
        <span className="text-[0.75rem] tracking-[0.12em] uppercase" style={{ color: "var(--fg-muted)" }}>
          {subtitle}
        </span>
      </div>
    </div>
  )
}
