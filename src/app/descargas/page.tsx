import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DOWNLOADS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Descargas",
  description:
    "Documentación corporativa, catálogos técnicos y materiales descargables de AESA · Atenas Energía S.A.",
};

export default function DescargasPage() {
  return (
    <>
      <PageHero
        title="Zona de descargas."
        kicker="RECURSOS"
        sub="Documentación corporativa, catálogos técnicos y materiales descargables."
      />
      <section className="sec" style={{ background: "var(--aesa-bg2)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 14 }}>ARCHIVOS</div>
            <h2 className="h-section" style={{ fontSize: "clamp(28px,3vw,42px)", color: "var(--aesa-1)", margin: "0 0 40px" }}>
              Documentación corporativa.
            </h2>
          </Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              background: "var(--aesa-line)",
              border: "1px solid var(--aesa-line)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {DOWNLOADS.map((d, i) => (
              <Reveal key={d.t} delay={i * 60}>
                <a
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr auto auto",
                    gap: 24,
                    alignItems: "center",
                    padding: "22px 28px",
                    background: "#fff",
                    transition: "background .2s ease",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(76,175,114,.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20">
                      <path d="M10 3 L10 14 M5 9 L10 14 L15 9 M3 17 L17 17" fill="none" stroke="var(--aesa-1)" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>{d.t}</div>
                    <div style={{ fontSize: 13, color: "var(--aesa-mute)", marginTop: 3 }}>{d.d}</div>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", color: "var(--aesa-mute)" }}>
                    {d.sz}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", color: "var(--aesa-1)", fontWeight: 600 }}>
                    DESCARGAR →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
