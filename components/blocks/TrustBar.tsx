import { FadeIn } from "@/components/ui/fade-in"

const stats = [
  { value: "100+", label: "Online Classes" },
  { value: "3",    label: "Retreats in 2026" },
  { value: "3",    label: "Continents" },
  { value: "∞",    label: "Himalayan Lineage" },
]

export function TrustBar() {
  return (
    <section style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className="text-[3.8rem] leading-none"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    color: "var(--primary)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[0.75rem] tracking-[0.18em] uppercase"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
