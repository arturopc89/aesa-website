type Props = {
  eyebrow?: string;
  title?: string;
  sub?: string;
  align?: "left" | "center";
  light?: boolean;
  big?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  light = false,
  big = false,
}: Props) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 780 : 680,
        margin: align === "center" ? "0 auto" : 0,
      }}
    >
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>}
      {title && (
        <h2
          className="h-section"
          style={{
            fontSize: big ? "clamp(40px,5vw,72px)" : "clamp(32px,3.6vw,52px)",
            color: light ? "#fff" : "var(--aesa-ink)",
            margin: 0,
          }}
        >
          {title}
        </h2>
      )}
      {sub && (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: light ? "rgba(255,255,255,.78)" : "var(--aesa-mute)",
            marginTop: 18,
            maxWidth: 620,
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
