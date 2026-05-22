import Image from "next/image"
import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { Nav } from "@/components/layout/Nav"
import { PageHero } from "@/components/blocks/PageHero"
import { ExploreMore } from "@/components/blocks/ExploreMore"
import { EmailCapture } from "@/components/blocks/EmailCapture"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { FadeIn } from "@/components/ui/fade-in"
import { Check, ArrowRight, Play } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Excursions — Luke Ketterhagen",
  description:
    "Small-group spiritual journeys to India and Uganda with Luke Ketterhagen. Cultural immersion, sacred sites, and daily yoga practice.",
}

const excursions = [
  {
    year:    "2026",
    status:  "Registration Open",
    region:  "North India",
    title:   "North India Excursion",
    description:
      "Journey through the sacred landscapes of northern India — ancient temples, mountain villages, Himalayan culture, and a dedicated yoga and meditation retreat. Luke leads each day with intention, blending spiritual exploration with the practical comfort of small-group travel.",
    highlights: [
      "Sacred temple complexes and pilgrimage sites",
      "Daily yoga, meditation, and breathwork with Luke",
      "Himalayan culture, markets, and local cuisine",
      "5-day integrated yoga and wellness retreat",
      "All accommodations and meals included",
    ],
    image: "/luke-ketterhagen-taj-mahal.webp",
    links: [
      { label: "Full Itinerary", href: "https://www.lukeketterhagen.com/s/2026-North-India-Excursion-Itinerary.pdf", primary: false },
      { label: "Register Now",   href: "https://clients.mindbodyonline.com/classic/ws?studioid=5728520&stype=-8&sTG=40&sVT=223&sView=day&sLoc=0&date=11/06/26", primary: true },
    ],
    flip: false,
  },
  {
    year:    "2027",
    status:  "Registration Open",
    region:  "East Africa",
    title:   "Uganda Excursion",
    description:
      "An intimate journey into the heart of Uganda — one of the world's most vibrant and welcoming destinations. Wildlife, culture, community, and daily practice woven together into an experience that changes your relationship with the world and with yourself.",
    highlights: [
      "Wildlife safaris and national park experiences",
      "Cultural immersion and community visits",
      "Daily yoga and meditation with Luke",
      "Outstanding local food and lodging",
      "Small group — personal and unhurried",
    ],
    image: "/luke-ketterhagen-moka-uganda-excursion.webp",
    links: [
      { label: "View Itinerary & Register", href: "https://mokaorigins.com/pages/688cbec168663c3988011c74", primary: true },
    ],
    flip: true,
  },
  {
    year:    "2028",
    status:  "Coming Soon",
    region:  "South India",
    title:   "South India Excursion",
    description:
      "Cultural charm, spiritual richness, and historical significance across the southern tip of India. Tamil Nadu temples, Kerala backwaters, tea plantations, and a 5-day Ayurvedic spa retreat — this is one of the most beloved journeys Luke leads.",
    highlights: [
      "Rameshwaram temple and Agni Theertham bathing",
      "Mahabalipuram UNESCO World Heritage Site",
      "Houseboat dinner on Kerala's Lake Vembanad",
      "5-day Ayurveda retreat: yoga, massage, oil therapy",
      "Tea plantations and Kerala rainforest",
    ],
    image: "/luke-ketterhagen-excursion-south-india.webp",
    links: [
      { label: "Full Itinerary", href: "https://www.lukeketterhagen.com/s/2025-South-India-Itinerary.pdf", primary: true },
    ],
    flip: false,
  },
]

const included = [
  "All accommodation throughout the journey",
  "Meals — from local restaurants to immersive cultural dining",
  "Daily yoga, meditation, and breathwork sessions with Luke",
  "All cultural site admissions and guided visits",
  "Ground transportation within the destination",
  "Small group size — unhurried, personal, intentional",
]

const testimonials = [
  {
    quote: "This was my second trip to India with Luke, and it was even better than the last. The variety, pace, lodgings, food, and the way he manages a group of thirteen people — seamlessly adjusting the itinerary when needed — was truly remarkable.",
    name:  "Christine P.",
    trip:  "South India, 2023",
  },
  {
    quote: "My South India experience was nothing but amazing. The beauty and universal spirituality of this part of the world is stunning — and Luke made sure we experienced it fully.",
    name:  "Lyn C.",
    trip:  "South India, 2023",
  },
  {
    quote: "If you are looking for a stress-free first trip to India, go with Luke. The perfect balance of culture, history, daily life, reflection, and relaxation.",
    name:  "Christina C.",
    trip:  "South India, 2023",
  },
]

export default function ExcursionsPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>

        <PageHero
          image="/luke-ketterhagen-taj-mahal.webp"
          imageAlt="Luke Ketterhagen on excursion at the Taj Mahal"
          eyebrow="Small-Group Travel with Luke"
          heading="Excursions"
          subheading="Spiritual journeys woven with culture, practice, and community. Every trip is led personally by Luke."
          objectPosition="center 30%"
        />

        {/* Intro */}
        <section className="py-24" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-4">
                  <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--warm)" }}>
                    The Approach
                  </p>
                  <h2
                    className="font-normal leading-[1.08]"
                    style={{
                      fontFamily: "var(--theme-font-display)",
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      color: "var(--foreground)",
                    }}
                  >
                    Travel that goes<br />
                    <em className="italic" style={{ color: "var(--primary)" }}>beneath the surface</em>
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    These are not tours. They are small-group pilgrimages where daily practice meets
                    deep cultural immersion. Luke handles every logistical detail so you can be fully
                    present — to the place, the people, and to yourself.
                  </p>
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    Each excursion is designed around the idea that travel — done intentionally —
                    is one of the most transformative forms of practice.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Three excursions — alternating layout */}
        <section className="py-24 lg:py-32" style={{ background: "var(--background)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-32 lg:gap-40">
            {excursions.map((ex, i) => (
              <FadeIn key={ex.title} direction={ex.flip ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${ex.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src={ex.image}
                      alt={ex.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    {/* Status badge */}
                    <div
                      className="absolute top-4 left-4 px-2.5 py-1 text-[0.69rem] tracking-[0.15em] uppercase font-bold"
                      style={{
                        background: "var(--warm)",
                        color: "var(--warm-fg)",
                      }}
                    >
                      {ex.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-2" style={{ color: "var(--warm)" }}>
                        {ex.year} · {ex.region}
                      </p>
                      <h2
                        className="font-normal leading-[1.05]"
                        style={{
                          fontFamily: "var(--theme-font-display)",
                          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                          color: "var(--foreground)",
                        }}
                      >
                        {ex.title}
                      </h2>
                    </div>

                    <div className="w-10 h-px" style={{ background: "var(--primary)", opacity: 0.3 }} />

                    <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                      {ex.description}
                    </p>

                    <ul className="flex flex-col gap-2.5">
                      {ex.highlights.map(h => (
                        <li key={h} className="flex items-start gap-3 text-[1rem]" style={{ color: "var(--foreground)" }}>
                          <Check size={13} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-3">
                      {ex.links.map(link => link.primary ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 h-11 px-6 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85 w-fit group"
                          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                        >
                          {link.label} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 h-11 px-5 text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-70 w-fit group rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px]"
                          style={{ color: "var(--primary)", border: "1.5px solid var(--primary)" }}
                        >
                          {link.label} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="py-24" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                  <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-4" style={{ color: "var(--warm)" }}>
                    Every Excursion
                  </p>
                  <h2
                    className="font-normal leading-[1.05]"
                    style={{
                      fontFamily: "var(--theme-font-display)",
                      fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                      color: "var(--foreground)",
                    }}
                  >
                    What's Included
                  </h2>
                </div>
                <ul className="flex flex-col gap-4 pt-2">
                  {included.map(item => (
                    <li key={item} className="flex items-start gap-4">
                      <Check size={14} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
                      <span className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32" style={{ background: "var(--background)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase mb-3" style={{ color: "var(--warm)" }}>
                  Past Travelers
                </p>
                <h2
                  className="font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--foreground)",
                  }}
                >
                  What People Are Saying
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
                      <span className="text-[0.69rem] tracking-[0.12em] uppercase" style={{ color: "var(--warm)" }}>{t.trip}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Video section */}
        <section className="py-24" style={{ background: "var(--bg-dark)" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex flex-col items-center gap-6">
                <p className="text-[0.69rem] tracking-[0.22em] uppercase" style={{ color: "var(--warm)" }}>
                  See It For Yourself
                </p>
                <h2
                  className="font-normal"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Watch Previous Excursions
                </h2>
                <p
                  className="text-[1.05rem] leading-relaxed max-w-xl"
                  style={{ color: "var(--primary-foreground)", opacity: 0.65 }}
                >
                  Luke has documented over 16 videos from past excursions — temple visits,
                  practice sessions, wildlife encounters, and the moments in between.
                </p>
                <a
                  href="https://www.youtube.com/@lukeketterhagen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 h-11 px-6 lift-btn rounded-tl-xl rounded-br-xl rounded-tr-[3px] rounded-bl-[3px] text-[0.76rem] tracking-[0.09em] uppercase font-bold transition-opacity hover:opacity-85"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  <Play size={14} />
                  Watch on YouTube
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <ExploreMore
          eyebrow="With Luke"
          heading="There's a Path for Everyone"
          items={[
            {
              num: "01",
              label: "Yoga Retreats",
              title: "Retreats",
              description: "Three and a half days of yoga, meditation, and deep rest at the Himalayan Institute in the Pocono Mountains.",
              href: "/retreats",
            },
            {
              num: "02",
              label: "Professional Development",
              title: "Trainings",
              description: "Yoga teacher training and workshops rooted in the Himalayan tradition.",
              href: "/trainings",
            },
            {
              num: "03",
              label: "For Organizations",
              title: "Corporate Wellness",
              description: "Yoga, meditation, and stress management brought to your workplace or corporate retreat.",
              href: "/corporate",
            },
          ]}
        />

      </main>
      <EmailCapture />
      <ScrollToTop />
    </>
  )
}
