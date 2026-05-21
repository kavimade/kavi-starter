import { FadeIn } from "@/components/ui/fade-in"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Thanks again for a great weekend. It was exactly what I was looking for and what I needed. I took so much away from you.",
    name: "Matt H.",
    location: "September 2025 Retreat",
  },
  {
    quote: "Luke's Yoga and Meditation Retreat was truly life-changing. His ability to create deep group connections made us feel like lifelong friends, comfortable enough to open up and let go. As someone who struggles with anxiety, his relaxation techniques have been a game-changer.",
    name: "A.N.",
    location: "Labor Day Weekend 2025",
  },
  {
    quote: "The whole retreat was everything I expected, and I got to meet great people with whom I am still in touch as of today. You have given me inspiration that will help me go through my grief and healing process.",
    name: "Elisabeth G.",
    location: "Labor Day Weekend 2025",
  },
  {
    quote: "What a great weekend that was filled with awesome people, rest, food and of course, you! You taught me more than you know in such a short amount of time. Thank you for being your true and best self. Don't ever change!",
    name: "Marta K.",
    location: "November 2025 Retreat",
  },
  {
    quote: "Even as a yoga teacher, I still needed to hear what may seem like simple concepts, but were spot on for what we need to live harmoniously within ourselves and the world. Thank you, Luke!",
    name: "Heidi A.",
    location: "December 2022 Retreat",
  },
  {
    quote: "Your yoga and meditation workshop at Himalayan Institute was fun, easy, and relaxing; and at the same time full of valuable and essential information that I will carry with me for the rest of my life. I don't know how you do it!",
    name: "Linda F.",
    location: "July 2022 Retreat",
  },
]

export function TestimonialsBlock() {
  return (
    <section id="testimonials" className="py-28 lg:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--warm)" }}
            >
              Student Stories
            </p>
            <h2
              className=""
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Retreat Testimonials
            </h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1} direction="up">
              <div
                className="flex flex-col gap-5 p-8 h-full rounded-sm lift-card"
                style={{
                  background: "var(--card)",
                  boxShadow: "0 1px 4px var(--shape-2)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      style={{ color: "var(--sand)", fill: "var(--sand)" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="leading-[1.5] flex-1 text-[1.15rem]"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    color: "var(--foreground)",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div
                  className="flex flex-col gap-0.5 pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span
                    className="text-[1rem] font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-[0.6rem] tracking-[0.12em] uppercase"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {t.location}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
