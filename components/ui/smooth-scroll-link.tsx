"use client"

interface Props {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  duration?: number
  offset?: number
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function SmoothScrollLink({
  href,
  children,
  className,
  style,
  duration = 900,
  offset = 88, // clear the sticky nav
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return
    e.preventDefault()

    const target = document.querySelector(href)
    if (!target) return

    const targetY =
      target.getBoundingClientRect().top + window.scrollY - offset
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, startY + distance * easeInOutCubic(progress))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  )
}
