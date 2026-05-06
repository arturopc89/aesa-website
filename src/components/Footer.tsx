import Link from "next/link";
import { CONTACT, ISO_BADGES, NAV } from "@/lib/data";
import { Watermark } from "./Watermark";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--aesa-footer)",
        color: "#cdd5cf",
        paddingTop: 80,
        paddingBottom: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Watermark side="right" size={580} opacity={0.07} light top={-80} />
      <div className="wrap" style={{ position: "relative" }}>
        <div
          className="grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/aesa-logo-eslogan-white.png"
              alt="AESA · Adding Value"
              style={{ height: 56, width: "auto" }}
            />
            <p style={{ maxWidth: 320, marginTop: 18, fontSize: 13.5, lineHeight: 1.7, color: "#9aa39d" }}>
              Empresa de ingeniería multisectorial que ofrece soluciones tecnológicas de vanguardia a diferentes sectores del mercado, con presencia en Paraguay y la región.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {["F", "In", "Li"].map((s) => (
                <a
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#cdd5cf",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 18px",
              }}
            >
              Enlaces
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {NAV.map((n) => (
                <li key={n.id}>
                  <Link href={n.href} style={{ fontSize: 13.5, color: "#9aa39d" }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 18px",
              }}
            >
              Contacto
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11, fontSize: 13.5, color: "#9aa39d" }}>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li style={{ lineHeight: 1.6 }}>{CONTACT.address}</li>
              <li style={{ fontFamily: "var(--font-mono)", fontSize: 11, marginTop: 6, color: "#7a847e" }}>{CONTACT.hours}</li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 18px",
              }}
            >
              Certificaciones
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#9aa39d" }}>
              {ISO_BADGES.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--aesa-3)" }} />
                  {b}
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: 18,
                fontFamily: "var(--font-mono)",
                fontSize: 10.5,
                letterSpacing: ".06em",
                color: "#5d6661",
              }}
            >
              SGI · Sistema de Gestión Integrado
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            fontSize: 12,
            color: "#6c736e",
            fontFamily: "var(--font-mono)",
            letterSpacing: ".04em",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© {new Date().getFullYear()} ATENAS ENERGÍA S.A. · TODOS LOS DERECHOS RESERVADOS</span>
          <span>ASUNCIÓN · PARAGUAY</span>
        </div>
      </div>
    </footer>
  );
}
