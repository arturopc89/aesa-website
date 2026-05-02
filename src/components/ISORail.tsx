import { ISO_BADGES } from "@/lib/data";

type Props = { light?: boolean };

export function ISORail({ light = false }: Props) {
  return (
    <div className="iso-rail" style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          letterSpacing: ".04em",
          color: light ? "rgba(255,255,255,.85)" : "var(--aesa-ink-2)",
          whiteSpace: "nowrap",
        }}
      >
        {ISO_BADGES.map((b) => (
          <span key={b} style={{ display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
            <svg width="10" height="10" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
              <path d="M2 6 L5 9 L10 3" fill="none" stroke="var(--aesa-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </span>
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? "/assets/staregister-white.png" : "/assets/staregister-green.png"}
        alt="Staregister"
        style={{ height: 42, width: "auto", display: "block", objectFit: "contain" }}
      />
    </div>
  );
}
