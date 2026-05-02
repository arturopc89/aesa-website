import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Watermark } from "@/components/Watermark";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a AESA · Atenas Energía S.A. Asunción, Paraguay. Hablemos sobre tu próximo proyecto en Energía, Industrias o Telecomunicaciones.",
};

export default function ContactoPage() {
  const cards = [
    { l: "TELÉFONO", v: CONTACT.phone },
    { l: "EMAIL", v: CONTACT.email },
    { l: "DIRECCIÓN", v: CONTACT.address },
    { l: "HORARIOS", v: CONTACT.hours },
  ];

  return (
    <>
      <section style={{ position: "relative", paddingTop: 180, paddingBottom: 48, overflow: "hidden" }} className="pattern-bg">
        <Watermark side="right" size={680} opacity={0.07} top={40} />
        <div className="wrap" style={{ position: "relative", textAlign: "center" }}>
          <div className="eyebrow">CONTACTO</div>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(48px,6vw,92px)", margin: "18px auto 24px", color: "var(--aesa-1)", maxWidth: "14ch" }}
          >
            Contáctanos.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--aesa-mute)", maxWidth: 580, margin: "0 auto 24px" }}>
            Ante consultas o requisitos de información, completá el formulario. Uno de nuestros especialistas se pondrá en contacto a la brevedad.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
                <div className="asym-lg" style={{ height: 300, position: "relative", background: "linear-gradient(135deg,#1B5E37,#0E1A12)", overflow: "hidden" }}>
                  <svg viewBox="0 0 600 400" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".5" />
                      </pattern>
                    </defs>
                    <rect width="600" height="400" fill="url(#g)" />
                    <path d="M0 220 Q150 200 300 230 T600 210" stroke="rgba(255,255,255,.15)" strokeWidth="1" fill="none" />
                    <path d="M0 260 Q200 250 350 275 T600 280" stroke="rgba(255,255,255,.1)" strokeWidth="1" fill="none" />
                    <path d="M120 100 L300 200 L500 80" stroke="rgba(76,175,114,.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                    <circle cx="300" cy="200" r="36" fill="rgba(76,175,114,.18)" />
                    <circle cx="300" cy="200" r="20" fill="rgba(76,175,114,.35)" />
                    <circle cx="300" cy="200" r="8" fill="#4CAF72" />
                    <circle cx="300" cy="200" r="3" fill="#fff" />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      padding: "10px 14px",
                      background: "rgba(255,255,255,.96)",
                      borderRadius: 10,
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "var(--aesa-1)",
                    }}
                  >
                    Atenas Energía S.A.
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 11.5, color: "var(--aesa-mute)", marginTop: 2 }}>
                      Av. Madame Lynch 627, Asunción
                    </div>
                  </div>
                </div>
                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
                  {cards.map((c) => (
                    <div key={c.l} style={{ padding: "22px 22px", background: "var(--aesa-bg2)", borderRadius: 14 }}>
                      <div className="eyebrow" style={{ fontSize: 10 }}>{c.l}</div>
                      <div style={{ fontSize: 14.5, color: "var(--aesa-ink-2)", lineHeight: 1.5, marginTop: 8 }}>{c.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
