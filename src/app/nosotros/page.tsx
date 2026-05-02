import type { Metadata } from "next";
import { AsymImage } from "@/components/AsymImage";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Watermark } from "@/components/Watermark";
import { IMG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Atenas Energía S.A. — Empresa de ingeniería multisectorial fundada en el año 2000. Más de 100 colaboradores, 30 ingenieros y certificaciones ISO.",
};

const STATS_NOSOTROS: [string, string][] = [
  ["+100", "Colaboradores"],
  ["30", "Ingenieros"],
  ["26", "Años"],
  ["3", "Países"],
];

const POLITICA_PUNTOS = [
  "Cumplimiento de las exigencias legales del país y del código de ética de la empresa.",
  "Identificación de riesgos y enfoques preventivos para cada caso.",
  "Sensibilización y capacitación constante a colaboradores.",
  "Promoción de la mejora continua del SGI con participación proactiva.",
];

const ISOS = [
  { n: "ISO 9001:2015", d: "Sistema de Gestión de la Calidad", c: "#1B5E37" },
  { n: "ISO 14001:2015", d: "Gestión Ambiental", c: "#2E7D4F" },
  { n: "ISO 45001:2018", d: "Seguridad y Salud en el Trabajo", c: "#4CAF72" },
];

const DOCS = ["Política de Calidad", "Código de Ética", "Manual SGI"];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Atenas Energía S.A."
        kicker="NOSOTROS"
        sub="Una empresa de ingeniería multisectorial fundada en el año 2000 por sus actuales directores."
      />

      <section className="sec" style={{ position: "relative" }}>
        <Watermark side="left" size={620} opacity={0.05} top={80} />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="eyebrow">LA EMPRESA</div>
              <h2
                className="h-section"
                style={{ fontSize: "clamp(32px,3.6vw,52px)", margin: "14px 0 28px", color: "var(--aesa-1)" }}
              >
                Soluciones llave en mano de alta tecnología.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 15.5, lineHeight: 1.7, color: "var(--aesa-ink-2)" }}>
                <p style={{ margin: 0 }}>
                  Atenas Energía S.A. (AESA) es una empresa de ingeniería multisectorial que ofrece soluciones tecnológicas de vanguardia a diferentes sectores del mercado, con presencia en Paraguay y países de la región.
                </p>
                <p style={{ margin: 0 }}>
                  Fue fundada en el año 2000 por sus actuales directores y actualmente el equipo se encuentra conformado por más de 100 colaboradores, incluyendo 30 ingenieros y técnicos en permanente capacitación y actualización.
                </p>
                <p style={{ margin: 0 }}>
                  La empresa desarrolla soluciones llave en mano de alta tecnología, incluyendo proyectos, provisiones, comisionamientos, soportes y actualizaciones, priorizando relaciones estables y formales con fabricantes internacionales de nivel mundial.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 48,
                  marginTop: 40,
                  paddingTop: 28,
                  borderTop: "1px solid var(--aesa-line)",
                  flexWrap: "wrap",
                }}
              >
                {STATS_NOSOTROS.map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, color: "var(--aesa-1)", letterSpacing: "-.02em" }}>
                      {n}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--aesa-mute)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Reveal>
              <AsymImage src={IMG.aboutOps} height={560} size="lg" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="sec" style={{ background: "var(--aesa-1)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-12%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "70%",
            height: "140%",
            opacity: 0.09,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 18 L186 182 L150 182 L132 146 L68 146 L50 182 L14 182 Z M82 118 L118 118 L100 80 Z' fill='white'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left center",
          }}
        />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            {[
              {
                l: "MISIÓN",
                t: "Atender de forma eficiente las cambiantes demandas del mercado.",
                d: "Ser una empresa en permanente cambio y adaptación a los nuevos avances de la ciencia y las coyunturas económicas, para siempre atender de forma eficiente las cambiantes demandas del mercado y de cada caso en particular.",
              },
              {
                l: "VISIÓN",
                t: "Ser una empresa sólida, confiable y de largo plazo.",
                d: "Ser una empresa sólida y confiable, priorizando las relaciones de largo plazo en el marco de la confianza y promoviendo el crecimiento responsable de colaboradores y clientes.",
              },
            ].map((b) => (
              <Reveal key={b.l}>
                <div>
                  <div className="eyebrow" style={{ color: "var(--aesa-3)" }}>{b.l}</div>
                  <h3 className="h-display" style={{ fontSize: "clamp(28px,3vw,42px)", color: "#fff", margin: "14px 0 22px" }}>
                    {b.t}
                  </h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,.82)", margin: 0, maxWidth: 480 }}>
                    {b.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Política */}
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <SectionHeader
              eyebrow="SISTEMA DE GESTIÓN INTEGRADO"
              title="Política de calidad, ambiente y seguridad."
            />
          </Reveal>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, marginTop: 48, alignItems: "start" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 15, lineHeight: 1.7, color: "var(--aesa-ink-2)" }}>
              <p style={{ margin: 0 }}>
                <strong>ATENAS ENERGÍA S.A.</strong> es una empresa de ingeniería multidisciplinaria que provee soluciones tecnológicas a diferentes sectores del mercado, brindando productos y servicios de la mejor calidad, comprometida con el aumento constante de la satisfacción de sus clientes, proveedores y aliados.
              </p>
              <p style={{ margin: 0 }}>
                Reconoce su responsabilidad en la preservación del ambiente, por lo cual adopta buenas prácticas ambientales para prevenir la contaminación, minimizando los impactos ambientales que pudieran derivar de sus procesos operativos y productivos.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
                {POLITICA_PUNTOS.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--aesa-3)", marginTop: 8, flexShrink: 0 }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: ".06em", color: "var(--aesa-mute)" }}>
                FECHA DE APROBACIÓN: 22.11.2024 · REV.01
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 120 }}>
              {DOCS.map((d) => (
                <a
                  key={d}
                  className="card"
                  style={{ padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>{d}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aesa-mute)", letterSpacing: ".06em", marginTop: 4 }}>
                      PDF · DESCARGAR
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M10 3 L10 14 M5 9 L10 14 L15 9 M3 17 L17 17" fill="none" stroke="var(--aesa-1)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="sec" style={{ background: "var(--aesa-bg2)" }}>
        <div className="wrap">
          <Reveal>
            <SectionHeader
              eyebrow="CERTIFICACIONES"
              title="Tres ISOs auditadas anualmente por IAS / Staregister."
              align="center"
            />
          </Reveal>
          <div
            className="grid-3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 56 }}
          >
            {ISOS.map((b) => (
              <Reveal key={b.n}>
                <div className="card" style={{ padding: "40px 32px", background: "#fff" }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 14,
                      background: b.c,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28">
                      <path d="M5 14 L11 20 L23 8" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, margin: "0 0 8px", letterSpacing: "-.02em" }}>
                    {b.n}
                  </h3>
                  <p style={{ margin: 0, color: "var(--aesa-mute)", fontSize: 14 }}>{b.d}</p>
                  <div
                    style={{
                      marginTop: 24,
                      paddingTop: 18,
                      borderTop: "1px solid var(--aesa-line)",
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: ".06em",
                      color: "var(--aesa-mute)",
                    }}
                  >
                    <span>IAS · STAREGISTER</span>
                    <span>VIGENTE</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
