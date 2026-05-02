import { STATS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { StatCounter } from "../StatCounter";

export function StatsSection() {
  return (
    <section className="sec" style={{ position: "relative", color: "#fff", overflow: "hidden", padding: "120px 0" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <iframe
          src="https://player.vimeo.com/video/1113182936?background=1&autoplay=1&loop=1&muted=1&autopause=0"
          allow="autoplay; fullscreen"
          title="AESA — Trabajos realizados 2024"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            border: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(11,15,12,.7) 0%, rgba(27,94,55,.55) 50%, rgba(11,15,12,.85) 100%)",
          }}
        />
      </div>
      <div className="wrap" style={{ position: "relative", textAlign: "center" }}>
        <div className="eyebrow" style={{ color: "var(--aesa-3)" }}>
          TRABAJOS REALIZADOS · 2024
        </div>
        <h2 className="h-section" style={{ fontSize: "clamp(36px,4.4vw,60px)", color: "#fff", margin: "12px auto 56px", maxWidth: 680 }}>
          Resultados que respaldan cada proyecto.
        </h2>
        <div
          className="grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48, maxWidth: 1020, margin: "0 auto" }}
        >
          {STATS.slice(0, 6).map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(48px,5vw,84px)",
                    color: "#fff",
                    letterSpacing: "-.03em",
                    lineHeight: 1,
                  }}
                >
                  <StatCounter value={s.n} suffix={s.suf} />
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.78)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
