"use client";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function SolucionesSection() {
  return (
    <section className="sec pattern-bg" style={{ position: "relative" }}>
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <SectionHeader
            eyebrow="SOLUCIONES"
            title="Proyectos llave en mano, a medida."
            sub="Cumplimos las normas internacionales vigentes en cada proceso, con las garantías y soportes correspondientes."
            align="center"
          />
        </Reveal>
        <div
          className="grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 72 }}
        >
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 120}>
              <article className="card" style={{ padding: 14, height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="asym" style={{ height: 280, position: "relative", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .8s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      padding: "5px 10px",
                      background: "rgba(255,255,255,.92)",
                      borderRadius: 99,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: ".1em",
                      color: "var(--aesa-1)",
                      fontWeight: 600,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div style={{ padding: "24px 16px 12px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 className="h-display" style={{ fontSize: 32, margin: 0, color: "var(--aesa-1)" }}>
                    {s.name}
                  </h3>
                  <p style={{ color: "var(--aesa-mute)", fontSize: 14.5, lineHeight: 1.6, margin: "14px 0 18px", flex: 1 }}>
                    {s.blurb}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: 7 }}>
                    {s.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5, color: "var(--aesa-ink-2)" }}>
                        <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--aesa-3)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/soluciones" className="btn btn-primary btn-sm" style={{ alignSelf: "flex-start" }}>
                    Ver más <span>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
