import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { Nav } from "@/components/layout/Nav"
import { PageHeroCentered } from "@/components/blocks/PageHeroCentered"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Wellness Programs",
  description:
    "Yoga, meditation, and stress management for organizations. Luke Ketterhagen brings evidence-based wellness to your workplace or corporate retreat.",
  alternates: { canonical: "/corporate" },
}

const services = [
  {
    num:         "01",
    title:       "Lunchtime Yoga",
    description: "Regular on-site yoga sessions that fit within the workday. A practical, accessible way to reduce tension, reset focus, and build a culture of well-being — without leaving the office.",
  },
  {
    num:         "02",
    title:       "Corporate Retreats",
    description: "A fully designed off-site wellness experience for your team. Luke leads yoga, meditation, and breathwork sessions woven into a retreat format tailored to your organization's goals.",
  },
  {
    num:         "03",
    title:       "Seminars & Lectures",
    description: "Educational presentations on stress management, the nervous system, and sustainable performance. Engaging, evidence-based, and immediately applicable to daily work life.",
  },
  {
    num:         "04",
    title:       "Workshops & Discussions",
    description: "Guided group sessions exploring specific dimensions of practice — breathwork, mindfulness, recovery, and resilience. Designed for teams at any experience level.",
  },
]

const testimonials = [
  {
    quote: "One of the best things our company did was offer a lunchtime yoga program. Luke was always eager to connect with everyone and interested in individual needs. His professionalism and sensitivity to the corporate environment made every session seamless.",
    name:  "Susanne Taslimi",
    role:  "CFO, Taslimi Construction",
  },
  {
    quote: "Luke is a warm, dedicated, and approachable expert who guided our weekly stretch and meditation sessions. He created a genuine respite for staff at every level of the organization.",
    name:  "Tiffany Fordham",
    role:  "Furlined",
  },
  {
    quote: "Luke adjusted his instruction to enable students of all levels to participate. His classes have made a real difference in the flexibility and focus of our team.",
    name:  "Gail",
    role:  "Brentwood Country Club",
  },
]

export default function CorporatePage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>

        <PageHeroCentered
          image="/Luke-Ketterhagen-Yoga-Teacher-Trainer-Corporate.webp"
          imageAlt="Luke Ketterhagen leading a corporate yoga session"
          eyebrow="For Organizations"
          heading="Corporate Wellness"
          subheading="Yoga, meditation, and stress management brought directly to your workplace or corporate retreat."
          objectPosition="center bottom"
          height="72svh"
        />

        {/* Intro */}
        <section className="py-24 lg:py-32" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-4">
                  <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--warm)" }}>
                    The Case for Wellness
                  </p>
                  <h2
                    className="font-normal leading-[1.08]"
                    style={{
                      fontFamily: "var(--theme-font-display)",
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      color: "var(--foreground)",
                    }}
                  >
                    High performance<br />
                    <em className="italic" style={{ color: "var(--primary)" }}>starts with the person</em>
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    Stress is universal — but the people who learn to manage it don't just survive it.
                    They excel, thrive, and bring a deeper satisfaction to everything they do.
                  </p>
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    Luke's corporate programs use yoga, meditation, and evidence-based stress management
                    techniques to create measurable improvements in focus, resilience, and team culture.
                    Every program is tailored to your organization — its people, its pace, its goals.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 lg:py-32" style={{ background: "var(--background)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="mb-14">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-3" style={{ color: "var(--warm)" }}>
                  What Luke Offers
                </p>
                <h2
                  className="font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--foreground)",
                  }}
                >
                  Programs & Services
                </h2>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1} direction="up">
                  <div
                    className="flex flex-col gap-4 p-8 h-full rounded-sm"
                    style={{ background: "var(--card)", boxShadow: "0 1px 4px var(--shape-2)" }}
                  >
                    <span
                      className="text-[2rem] leading-none font-normal tabular-nums"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        color: "var(--primary)",
                        opacity: 0.18,
                      }}
                    >
                      {s.num}
                    </span>
                    <h3
                      className="font-normal leading-snug"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        fontSize: "1.4rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {s.title}
                    </h3>
                    <div className="w-8 h-px flex-shrink-0" style={{ background: "var(--primary)", opacity: 0.3 }} />
                    <p className="text-[1rem] leading-relaxed flex-1" style={{ color: "var(--fg-muted)" }}>
                      {s.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-3" style={{ color: "var(--warm)" }}>
                  Organizations Luke Has Served
                </p>
                <h2
                  className="font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--foreground)",
                  }}
                >
                  What Leaders Are Saying
                </h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1} direction="up">
                  <div
                    className="flex flex-col gap-5 p-8 h-full rounded-sm lift-card"
                    style={{ background: "var(--card)", boxShadow: "0 1px 4px var(--shape-2)" }}
                  >
                    <blockquote
                      className="leading-[1.6] flex-1 text-[1.05rem]"
                      style={{ fontFamily: "var(--theme-font-display)", color: "var(--foreground)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex flex-col gap-0.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                      <span className="text-[1rem] font-medium" style={{ color: "var(--foreground)" }}>{t.name}</span>
                      <span className="text-[0.69rem] tracking-[0.12em] uppercase" style={{ color: "var(--warm)" }}>{t.role}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 lg:py-48" style={{ background: "var(--bg-dark)" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex flex-col items-center gap-6">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--warm)" }}>
                  Bring Luke to Your Organization
                </p>
                <h2
                  className="font-normal leading-[1.1]"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Ready to invest in your team?
                </h2>
                <p
                  className="text-[1.05rem] leading-relaxed max-w-xl"
                  style={{ color: "var(--primary-foreground)", opacity: 0.65 }}
                >
                  Every program is customized. Reach out to discuss your organization's needs,
                  schedule, and goals — and Luke will design something that fits.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 h-11 px-6 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Get in Touch <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>


      </main>
      <EmailCapture />
      <ScrollToTop />
    </>
  )
}
