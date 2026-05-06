import Link from "next/link";
import { NOVEDADES } from "@/lib/data";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Watermark } from "../Watermark";

export function NovedadesSection() {
  return (
    <section className="sec" style={{ background: "var(--aesa-bg2)", position: "relative" }}>
      <Watermark side="left" size={780} opacity={0.07} top={60} />
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            <SectionHeader
              eyebrow="NOVEDADES"
              title="Casos recientes."
              sub="Proyectos entregados a clientes públicos y privados en los últimos meses."
            />
            <Link href="/casos" className="btn btn-ghost btn-sm">
              Ver todos los casos →
            </Link>
          </div>
        </Reveal>
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {NOVEDADES.slice(0, 4).map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <article className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="asym" style={{ height: 200, borderRadius: "18px 18px 0 0", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".12em", color: "var(--aesa-3)", fontWeight: 600 }}>
                    {c.tag}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 17,
                      margin: 0,
                      letterSpacing: "-.005em",
                      lineHeight: 1.3,
                      flex: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {c.t}
                  </h4>
                  <Link
                    href={`/casos/${c.slug}`}
                    style={{
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "var(--aesa-1)",
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Leer más →
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
