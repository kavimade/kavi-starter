import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    category: "Breathwork",
    title: "Why Pranayama Changes Everything About How You Handle Stress",
    excerpt:
      "Most of us breathe reactively — short, shallow, and fast when pressure rises. Learning to breathe intentionally may be the single most practical skill the practice offers.",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=600&q=80",
    href: "/journal/pranayama-stress",
  },
  {
    category: "Philosophy",
    title: "Becoming More of Your Authentic Self Through Practice",
    excerpt:
      "The Himalayan tradition doesn't ask you to become someone else. It asks you to shed what isn't you — and trust what remains.",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    href: "/journal/authentic-self",
  },
  {
    category: "Retreats",
    title: "What Really Happens at a Himalayan Institute Retreat",
    excerpt:
      "People arrive stressed, skeptical, and slightly unsure. By Sunday morning, something has shifted. Here is what three and a half days actually looks like.",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    href: "/journal/himalayan-institute-retreat",
  },
]

export function JournalPreview() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header row */}
        <FadeIn>
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p
                className="text-[0.69rem] tracking-[0.22em] uppercase mb-3"
                style={{ color: "var(--primary)" }}
              >
                Thoughts &amp; Practice
              </p>
              <h2
                className="font-light"
                style={{
                  fontFamily: "var(--theme-font-display)",
                  color: "var(--foreground)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                }}
              >
                From the Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden sm:inline-flex items-center gap-2 text-[0.68rem] tracking-[0.13em] uppercase font-medium transition-all hover:gap-3 group"
              style={{ color: "var(--primary)" }}
            >
              All Articles
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeIn>

        {/* Article cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.href} delay={i * 0.1} direction="up">
              <Link href={article.href} className="group block">
                {/* Thumbnail */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[0.58rem] tracking-[0.17em] uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    {article.category}
                  </span>
                  <span
                    className="w-px h-3"
                    style={{ background: "var(--border)" }}
                  />
                  <span
                    className="text-[0.58rem] tracking-[0.1em] uppercase"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[1.35rem] leading-snug mb-2 transition-colors"
                  style={{
                    fontFamily: "var(--theme-font-display)",
                    color: "var(--foreground)",
                  }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-[1rem] leading-relaxed line-clamp-2"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {article.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.13em] uppercase font-medium"
            style={{ color: "var(--primary)" }}
          >
            All Articles <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
