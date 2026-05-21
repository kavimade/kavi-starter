interface Props {
  onDark?: boolean
}

export function LukeLogo({ onDark = false }: Props) {
  return (
    <div className="flex items-center gap-3">

      {/* LK badge mark */}
      <div
        className="flex items-center justify-center font-bold flex-shrink-0"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: onDark ? "var(--primary-foreground)" : "var(--primary)",
          color: onDark ? "var(--primary)" : "var(--primary-foreground)",
          fontFamily: "var(--theme-font-body)",
          fontSize: "0.88rem",
          letterSpacing: "0.06em",
        }}
      >
        LK
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-[5px]">
        <span
          className="text-[0.95rem] tracking-[0.2em] uppercase font-bold"
          style={{
            color: onDark ? "var(--primary-foreground)" : "var(--foreground)",
          }}
        >
          Luke
        </span>
        <span
          className="text-[0.72rem] tracking-[0.22em] uppercase font-bold"
          style={{
            color: onDark ? "var(--primary-foreground)" : "var(--foreground)",
            opacity: onDark ? 0.55 : 0.45,
          }}
        >
          Ketterhagen
        </span>
      </div>

    </div>
  )
}
