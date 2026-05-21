import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Retreats",
    tag: "Himalayan Institute, PA",
    description:
      "Three residential retreats each year at the Himalayan Institute in Honesdale, Pennsylvania. Three and a half days of yoga, meditation, breathwork, and deep rest — fully supported.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    href: "/retreats",
    external: false,
  },
  {
    title: "Online Classes",
    tag: "Yoga International",
    description:
      "Over 100 classes available on Yoga International — yoga, meditation, guided relaxation, and breathwork you can practice anywhere, at any time, at any level.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
    href: "https://yogainternational.com/profile/luke-ketterhagen/",
    external: true,
  },
  {
    title: "Excursions",
    tag: "India · Uganda",
    description:
      "Small-group spiritual journeys through India and Uganda. Cultural immersion, sacred sites, and a dedicated yoga and Ayurveda retreat — travel that transforms.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    href: "/excursions",
    external: false,
  },
]

function CardInner({ service }: { service: typeof services[number] }) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span
          className="absolute top-4 left-4 px-3 py-1.5 text-[0.58rem] tracking-[0.15em] uppercase backdrop-blur-sm"
          style={{
            background: "color-mix(in oklch, var(--background) 88%, transparent)",
            color: "var(--foreground)",
          }}
        >
          {service.tag}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3
          className="text-[1.5rem] font-normal"
          style={{ fontFamily: "var(--theme-font-display)", color: "var(--foreground)" }}
        >
          {service.title}
        </h3>
        <p className="text-[1rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          {service.description}
        </p>
        <div
          className="flex items-center gap-1.5 mt-2 text-[0.68rem] tracking-[0.12em] uppercase font-medium transition-all group-hover:gap-2.5"
          style={{ color: "var(--primary)" }}
        >
          Learn More <ArrowRight size={12} />
        </div>
      </div>
    </>
  )
}

const cardClass =
  "group block rounded-sm overflow-hidden lift-card"
const cardStyle = {
  background: "var(--card)",
  boxShadow: "0 1px 4px var(--shape-2)",
}

export function ServicesGrid() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--primary)" }}
            >
              How We Work Together
            </p>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Ways to Practice
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1} direction="up">
              {service.external ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                  style={cardStyle}
                >
                  <CardInner service={service} />
                </a>
              ) : (
                <Link href={service.href} className={cardClass} style={cardStyle}>
                  <CardInner service={service} />
                </Link>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
