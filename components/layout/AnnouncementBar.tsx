export function AnnouncementBar() {
  return (
    <div
      className="flex items-center justify-center min-h-[40px] px-6"
      style={{ background: "var(--primary)" }}
    >
      <p
        className="text-[0.68rem] tracking-[0.14em] uppercase leading-none m-0 text-center"
        style={{ color: "var(--primary-foreground)" }}
      >
        Balancing Strength &amp; Ease Retreat · June 4–7 ·{" "}
        <a
          href="https://himalayaninstitute.org/event/balancing-strength-and-ease-jun-2026/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
        >
          Register now →
        </a>
      </p>
    </div>
  )
}
