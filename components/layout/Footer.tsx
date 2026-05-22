import Link from "next/link"

const navLinks = [
  { href: "/about",    label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/retreat",  label: "Retreat" },
  { href: "/journal",  label: "Journal" },
  { href: "/contact",  label: "Contact" },
]

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)" }}>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p
              className="text-sm leading-relaxed italic"
              style={{
                fontFamily: "var(--theme-font-display)",
                color: "var(--primary-foreground)",
                opacity: 0.42,
              }}
            >
              After practice, you become<br />more of your authentic self.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-80"
                style={{ color: "var(--primary-foreground)", opacity: 0.38 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="transition-opacity hover:opacity-80"
                style={{ color: "var(--primary-foreground)", opacity: 0.38 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[0.58rem] tracking-[0.22em] uppercase mb-5"
              style={{ color: "var(--primary-foreground)", opacity: 0.38 }}
            >
              Explore
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-80"
                  style={{ color: "var(--primary-foreground)", opacity: 0.55 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[0.58rem] tracking-[0.22em] uppercase mb-5"
              style={{ color: "var(--primary-foreground)", opacity: 0.38 }}
            >
              Get In Touch
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--primary-foreground)", opacity: 0.5 }}
            >
              For retreat registrations, corporate inquiries,
              or excursion information, reach out directly.
            </p>
            <a
              href="mailto:LukeKetterhagen@gmail.com"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--primary-light)" }}
            >
              LukeKetterhagen@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.58rem] tracking-[0.1em] uppercase"
          style={{
            borderTop: "1px solid color-mix(in oklch, var(--primary-foreground) 10%, transparent)",
            color: "var(--primary-foreground)",
            opacity: 0.28,
          }}
        >
          <span>© 2026 Luke Ketterhagen. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
