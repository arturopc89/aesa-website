import type { Metadata } from "next";
import { ClientesSection } from "@/components/home/ClientesSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SOLUTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Soluciones tecnológicas de vanguardia en Energía, Industrias y Telecomunicaciones. Proyectos llave en mano por AESA.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        title="Soluciones tecnológicas de vanguardia."
        kicker="SOLUCIONES"
        sub="Proyectos llave en mano para entregar resultados a medida en Energía, Industrias y Telecomunicaciones."
      />
      <section className="sec pattern-bg">
        <div className="wrap">
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <article className="card" style={{ padding: 14, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className="asym" style={{ height: 300 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "24px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", color: "var(--aesa-3)", fontWeight: 600 }}>
                      0{i + 1} · SECTOR
                    </span>
                    <h3 className="h-display" style={{ fontSize: 34, margin: "10px 0 14px", color: "var(--aesa-1)" }}>
                      {s.name}
                    </h3>
                    <p style={{ color: "var(--aesa-mute)", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 22px", flex: 1 }}>
                      {s.blurb}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                      {s.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5, color: "var(--aesa-ink-2)" }}>
                          <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--aesa-3)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PartnersSection />
      <ClientesSection />
    </>
  );
}
