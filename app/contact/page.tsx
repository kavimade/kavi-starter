import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { Nav } from "@/components/layout/Nav"
import { ContactForm } from "@/components/blocks/ContactForm"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { FadeIn } from "@/components/ui/fade-in"
import { Mail, Play } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Luke Ketterhagen",
  description:
    "Get in touch with Luke Ketterhagen about yoga retreats, international excursions, teacher trainings, or corporate wellness programs.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>

        <section className="py-24 lg:py-32" style={{ background: "var(--background)" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

              {/* Left — info */}
              <FadeIn direction="right">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-4" style={{ color: "var(--warm)" }}>
                      Get in Touch
                    </p>
                    <h1
                      className="font-normal leading-[1.05]"
                      style={{
                        fontFamily: "var(--theme-font-display)",
                        fontSize:   "clamp(2.8rem, 5vw, 4rem)",
                        color:      "var(--foreground)",
                      }}
                    >
                      I&rsquo;d love to<br />
                      <em className="italic" style={{ color: "var(--primary)" }}>hear from you.</em>
                    </h1>
                  </div>

                  <div className="w-10 h-px" style={{ background: "var(--primary)", opacity: 0.3 }} />

                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    Whether you have a question about an upcoming retreat, want to join an
                    excursion, or are interested in bringing a wellness program to your
                    organization — reach out and I'll get back to you personally.
                  </p>

                  <div className="flex flex-col gap-4">
                    <a
                      href="mailto:LukeKetterhagen@gmail.com"
                      className="flex items-center gap-3 group"
                      style={{ color: "var(--foreground)" }}
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--bg-alt)" }}
                      >
                        <Mail size={15} style={{ color: "var(--primary)" }} />
                      </div>
                      <span
                        className="text-[1rem] group-hover:underline underline-offset-4"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        LukeKetterhagen@gmail.com
                      </span>
                    </a>

                    <a
                      href="https://www.youtube.com/@lukeketterhagen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--bg-alt)" }}
                      >
                        <Play size={15} style={{ color: "var(--primary)" }} />
                      </div>
                      <span
                        className="text-[1rem] group-hover:underline underline-offset-4"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        YouTube — excursion videos & more
                      </span>
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Right — form */}
              <FadeIn direction="left" delay={0.1}>
                <div
                  className="p-8 lg:p-10 rounded-sm"
                  style={{ background: "var(--bg-alt)", boxShadow: "0 1px 4px var(--shape-2)" }}
                >
                  <ContactForm />
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

      </main>
      <EmailCapture />
      <ScrollToTop />
    </>
  )
}
