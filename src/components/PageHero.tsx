type Props = { title: string; kicker?: string; sub?: string };

export function PageHero({ title, kicker, sub }: Props) {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: 200,
        paddingBottom: 96,
        background: "linear-gradient(110deg,#0B0F0C 0%,#0E1A12 30%,var(--aesa-1) 100%)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-8%",
          top: "-10%",
          width: "48vw",
          height: "120%",
          opacity: 0.07,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 18 L186 182 L150 182 L132 146 L68 146 L50 182 L14 182 Z M82 118 L118 118 L100 80 Z' fill='white'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div className="wrap" style={{ position: "relative" }}>
        {kicker && (
          <div className="eyebrow" style={{ color: "var(--aesa-3)", marginBottom: 18 }}>
            {kicker}
          </div>
        )}
        <h1 className="h-display" style={{ fontSize: "clamp(48px,7vw,108px)", color: "#fff", margin: 0, maxWidth: "18ch" }}>
          {title}
        </h1>
        {sub && (
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.78)", maxWidth: 620, margin: "24px 0 0" }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
