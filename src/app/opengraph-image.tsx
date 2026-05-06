import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AESA · Atenas Energía S.A. — Ingeniería eléctrica, SCADA y automatización en Paraguay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg,#04603b 0%,#055029 50%,#0b1a12 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background A watermark */}
        <div
          style={{
            position: "absolute",
            right: -60,
            bottom: -80,
            width: 640,
            height: 640,
            opacity: 0.12,
            fontSize: 640,
            lineHeight: 1,
            color: "#fff",
            fontWeight: 900,
            fontFamily: "serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          A
        </div>
        {/* Grid dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            display: "flex",
          }}
        />
        {/* ISO badge */}
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 88,
            display: "flex",
            gap: 10,
          }}
        >
          {["ISO 9001", "ISO 14001", "ISO 45001"].map((iso) => (
            <div
              key={iso}
              style={{
                padding: "6px 14px",
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.18)",
                borderRadius: 99,
                fontSize: 13,
                color: "rgba(255,255,255,.8)",
                fontFamily: "monospace",
                letterSpacing: "0.06em",
                display: "flex",
              }}
            >
              {iso}
            </div>
          ))}
        </div>
        {/* Eyebrow */}
        <div
          style={{
            fontSize: 15,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#4CAF72",
            fontWeight: 600,
            marginBottom: 20,
            display: "flex",
          }}
        >
          INGENIERÍA MULTISECTORIAL · DESDE EL AÑO 2000
        </div>
        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Atenas Energía S.A.</span>
        </div>
        {/* Services row */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Energía · SCADA", "Automatización", "Telecomunicaciones", "Datacenters"].map((s) => (
            <div
              key={s}
              style={{
                padding: "10px 20px",
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.14)",
                borderRadius: 10,
                fontSize: 18,
                color: "rgba(255,255,255,.9)",
                display: "flex",
              }}
            >
              {s}
            </div>
          ))}
        </div>
        {/* URL */}
        <div
          style={{
            marginTop: 32,
            fontSize: 16,
            color: "rgba(255,255,255,.45)",
            letterSpacing: "0.04em",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          aesa.com.py · Asunción, Paraguay
        </div>
      </div>
    ),
    { ...size }
  );
}
