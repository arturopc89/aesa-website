import { IMG } from "@/lib/data";
import { AsymImage } from "../AsymImage";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Watermark } from "../Watermark";

export function QuienesSomos() {
  return (
    <section className="sec" style={{ position: "relative" }}>
      <Watermark side="left" size={780} opacity={0.07} top={40} />
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <SectionHeader
            eyebrow="¿QUIÉNES SOMOS?"
            sub="Somos una empresa de ingeniería multisectorial que ofrece soluciones tecnológicas de vanguardia a diferentes sectores del mercado, con apoyo formal de fabricantes de nivel mundial y un equipo de trabajo estable y comprometido."
            align="center"
          />
        </Reveal>
        <div
          className="grid-3"
          style={{ display: "grid", gridTemplateColumns: "1.4fr .9fr 1fr", gap: 18, marginTop: 64 }}
        >
          <Reveal delay={100}>
            <AsymImage src={IMG.aboutTeam} height={420} size="lg" parallax parallaxStrength={0.5} />
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Reveal delay={200}>
              <AsymImage src={IMG.aboutOps} height={200} size="sm" parallax parallaxStrength={0.45} />
            </Reveal>
            <Reveal delay={280}>
              <div
                style={{
                  padding: "26px 24px",
                  background: "var(--aesa-1)",
                  color: "#fff",
                  borderRadius: "18px 18px 0 18px",
                  height: 202,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className="h-display"
                  style={{ fontSize: 22, color: "#fff", lineHeight: 1.2, margin: 0, fontWeight: 700, textWrap: "balance" }}
                >
                  Tecnología de punta que marca la diferencia en cada detalle.
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <AsymImage src={IMG.aboutField} height={420} size="lg" parallax parallaxStrength={0.55} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
