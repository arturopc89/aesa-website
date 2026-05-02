import { STEPS, TOOLS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const TOOL_LOGOS = [
  { src: "/assets/sap.png", alt: "SAP" },
  { src: "/assets/zoho.png", alt: "Zoho" },
  { src: "/assets/teams.png", alt: "Microsoft Teams" },
  { src: "/assets/todo.png", alt: "Microsoft ToDo" },
  { src: "/assets/planner.png", alt: "Microsoft Planner" },
  { src: "/assets/staregister-white.png", alt: "Staregister" },
];

export function DesarrolloSection() {
  return (
    <section className="sec" style={{ position: "relative" }}>
      <div className="wrap">
        <Reveal>
          <SectionHeader
            eyebrow="METODOLOGÍA"
            title="Desarrollo de proyectos."
            sub="Un proceso riguroso de 7 fases respaldado por las herramientas y certificaciones de la industria."
          />
        </Reveal>
        <div
          className="grid-2"
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, marginTop: 64, alignItems: "start" }}
        >
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
            {STEPS.map((st, i) => (
              <Reveal key={st.n} delay={i * 60}>
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "68px 1fr auto",
                    gap: 20,
                    padding: "22px 0",
                    borderBottom: "1px solid var(--aesa-line)",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--aesa-3)", fontWeight: 500, letterSpacing: ".04em" }}>
                    {st.n}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: 22,
                        margin: 0,
                        letterSpacing: "-.01em",
                        textTransform: "uppercase",
                      }}
                    >
                      {st.t}
                    </h4>
                    <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--aesa-mute)" }}>{st.d}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aesa-mute)", letterSpacing: ".08em" }}>FASE</span>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={300}>
            <div
              style={{
                position: "sticky",
                top: 120,
                background: "var(--aesa-1)",
                color: "#fff",
                borderRadius: "24px 24px 0 24px",
                padding: "40px 36px",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: -40,
                  bottom: -40,
                  width: 240,
                  height: 240,
                  opacity: 0.08,
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 18 L186 182 L150 182 L132 146 L68 146 L50 182 L14 182 Z M82 118 L118 118 L100 80 Z' fill='white'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
              <div className="eyebrow" style={{ color: "rgba(255,255,255,.6)", marginBottom: 14 }}>
                HERRAMIENTAS Y RECURSOS
              </div>
              <h3 className="h-section" style={{ fontSize: 32, color: "#fff", margin: "0 0 26px" }}>
                Stack de operaciones.
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
                {TOOLS.map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14.5, lineHeight: 1.5, color: "rgba(255,255,255,.92)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M2 7 L6 11 L12 3" fill="none" stroke="var(--aesa-3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: 30, position: "relative" }}>
                {TOOL_LOGOS.map((l) => (
                  <div
                    key={l.alt}
                    style={{
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 8px",
                      background: "rgba(255,255,255,.06)",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={l.src}
                      alt={l.alt}
                      style={{ height: "100%", width: "auto", objectFit: "contain", display: "block", maxWidth: 90 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
