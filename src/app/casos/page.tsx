import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Watermark } from "@/components/Watermark";
import { NOVEDADES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Proyectos entregados por AESA a clientes públicos y privados en Paraguay y la región. ITAIPU, ANDE, MOPC, Yacyretá, y más.",
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        title="Casos de éxito."
        kicker="PROYECTOS"
        sub="Una selección de proyectos entregados a clientes públicos y privados en los últimos años."
      />
      <section className="sec" style={{ position: "relative" }}>
        <Watermark side="left" size={520} opacity={0.05} top={80} />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {NOVEDADES.map((c, i) => (
              <Reveal key={c.t} delay={(i % 4) * 80}>
                <Link
                  href={`/casos/${c.slug}`}
                  className="card"
                  style={{ padding: 0, display: "flex", flexDirection: "column", height: "100%" }}
                >
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
                        fontSize: 16,
                        margin: 0,
                        letterSpacing: "-.005em",
                        lineHeight: 1.3,
                        flex: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {c.t}
                    </h4>
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "var(--aesa-1)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Leer más →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
