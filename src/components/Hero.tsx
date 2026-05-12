"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type SectorIconName =
  | "industria"
  | "alimentos"
  | "transporte"
  | "energia"
  | "telecom"
  | "datacenter"
  | "seguridad"
  | "desarrollo";

type Sector = { id: string; label: string; angle: number; r: number; icon: SectorIconName };

const SECTORS: Sector[] = [
  { id: "industrias", label: "Industrias", angle: -28, r: 46, icon: "industria" },
  { id: "alimentos", label: "Alimentos", angle: 18, r: 48, icon: "alimentos" },
  { id: "transporte", label: "Transporte", angle: 62, r: 46, icon: "transporte" },
  { id: "energia", label: "Energía", angle: 110, r: 46, icon: "energia" },
  { id: "telecom", label: "Telecom", angle: 158, r: 48, icon: "telecom" },
  { id: "datacenter", label: "Datacenter", angle: 202, r: 46, icon: "datacenter" },
  { id: "seguridad", label: "Seguridad", angle: 248, r: 46, icon: "seguridad" },
  { id: "desarrollo", label: "Desarrollo", angle: 294, r: 46, icon: "desarrollo" },
];

function SectorIcon({ name }: { name: SectorIconName }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "industria":
      return (
        <svg {...props}>
          <path d="M3 21V10l5 3V10l5 3V8l5 3v10z" />
          <path d="M3 21h18" />
        </svg>
      );
    case "alimentos":
      return (
        <svg {...props}>
          <path d="M12 3c-3 4-3 8 0 13 3-5 3-9 0-13z" />
          <path d="M12 16v5" />
        </svg>
      );
    case "transporte":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="13" height="10" rx="1.5" />
          <path d="M15 10h4l3 3v4h-7z" />
          <circle cx="6" cy="18" r="1.5" />
          <circle cx="18" cy="18" r="1.5" />
        </svg>
      );
    case "energia":
      return (
        <svg {...props}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
        </svg>
      );
    case "telecom":
      return (
        <svg {...props}>
          <path d="M5 12a10 10 0 0 1 14 0" />
          <path d="M8 15a6 6 0 0 1 8 0" />
          <circle cx="12" cy="18" r="1.5" />
        </svg>
      );
    case "datacenter":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="6" rx="1.5" />
          <rect x="4" y="14" width="16" height="6" rx="1.5" />
          <circle cx="8" cy="7" r="1" />
          <circle cx="8" cy="17" r="1" />
        </svg>
      );
    case "seguridad":
      return (
        <svg {...props}>
          <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "desarrollo":
      return (
        <svg {...props}>
          <path d="M9 8 4 12l5 4M15 8l5 4-5 4" />
        </svg>
      );
  }
}

const NODE_POSITIONS: [number, number][] = [
  [78, 28], [84, 62], [74, 84], [38, 88], [14, 74], [12, 40], [22, 16], [56, 14],
  [62, 32], [68, 55], [42, 72], [28, 55], [35, 30], [58, 76],
];

export function Hero() {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = orbRef.current?.getBoundingClientRect();
      if (!r) return;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setMouse({ x: (e.clientX - cx) / r.width, y: (e.clientY - cy) / r.height });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const tx = mouse.x * 14;
  const ty = mouse.y * 14;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg,#f4f8f5 0%,#eaf3ec 45%,#dceee2 100%)",
      }}
    >
      {/* soft tech grid backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(4,96,59,.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 75% 50%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 75% 50%, #000 30%, transparent 75%)",
        }}
      />
      {/* faint A watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-6%",
          bottom: "-12%",
          width: "82vw",
          height: "82vw",
          opacity: 0.22,
          pointerEvents: "none",
          backgroundImage: 'url("/assets/aesa-A-official.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
        }}
      />

      <div
        className="wrap hero-stack"
        style={{
          position: "relative",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)",
          gap: 48,
          alignItems: "center",
          paddingTop: 140,
          paddingBottom: 80,
          zIndex: 2,
        }}
      >
        {/* LEFT — copy */}
        <div style={{ position: "relative" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--aesa-1)", marginBottom: 22, letterSpacing: ".14em" }}>
              ATENAS ENERGÍA · DESDE 2000
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="h-display"
              style={{
                fontSize: "clamp(40px,4.6vw,76px)",
                color: "#0b1a12",
                margin: "0 0 26px",
                maxWidth: "16ch",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Proveemos soluciones tecnológicas de vanguardia.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.6, color: "#3b4a40", maxWidth: 540, margin: "0 0 36px" }}>
              Ingeniería multisectorial llave en mano para Energía, Industrias y Telecomunicaciones. 26 años entregando proyectos críticos en Paraguay y la región.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/soluciones"
                className="btn btn-primary"
                style={{ padding: "18px 28px", borderRadius: 14, fontSize: 15, boxShadow: "0 8px 24px rgba(4,96,59,.28)" }}
              >
                Ver soluciones <span>→</span>
              </Link>
              <Link
                href="/contacto"
                className="btn"
                style={{
                  padding: "18px 28px",
                  borderRadius: 14,
                  fontSize: 15,
                  background: "#fff",
                  color: "var(--aesa-1)",
                  border: "1.5px solid #d4e3d8",
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--aesa-1)",
                    color: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    marginRight: 6,
                  }}
                >
                  ▶
                </span>
                Hablar con un especialista
              </Link>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Interactive sector orb */}
        <div
          ref={orbRef}
          className="hero-orb"
          style={{
            position: "relative",
            height: "min(640px,72vh)",
            transform: `translate3d(${tx}px,${ty}px,0)`,
            transition: "transform .25s ease-out",
          }}
        >
          <div className="orb-ring orb-ring-out" style={{ position: "absolute", inset: "4%", border: "1px solid rgba(4,96,59,.14)", borderRadius: "50%" }} />
          <div className="orb-ring orb-ring-mid" style={{ position: "absolute", inset: "14%", border: "1px dashed rgba(4,96,59,.22)", borderRadius: "50%" }} />
          <div className="orb-ring orb-ring-in" style={{ position: "absolute", inset: "24%", border: "1px solid rgba(4,96,59,.18)", borderRadius: "50%" }} />

          <div
            style={{
              position: "absolute",
              inset: "30%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(6,151,89,.42), rgba(4,96,59,.18) 55%, rgba(4,96,59,0) 70%)",
              filter: "blur(8px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "34%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,.85), rgba(220,238,226,.4) 60%, rgba(4,96,59,.1))",
              boxShadow: "0 30px 80px -20px rgba(4,96,59,.4), inset 0 0 60px rgba(6,151,89,.18)",
            }}
          />

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            <defs>
              <radialGradient id="nodeG" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06975a" stopOpacity=".9" />
                <stop offset="100%" stopColor="#04603b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g stroke="rgba(4,96,59,.32)" strokeWidth=".18" fill="none" className="orb-lines">
              <line x1="50" y1="50" x2="78" y2="28" />
              <line x1="50" y1="50" x2="84" y2="62" />
              <line x1="50" y1="50" x2="74" y2="84" />
              <line x1="50" y1="50" x2="38" y2="88" />
              <line x1="50" y1="50" x2="14" y2="74" />
              <line x1="50" y1="50" x2="12" y2="40" />
              <line x1="50" y1="50" x2="22" y2="16" />
              <line x1="50" y1="50" x2="56" y2="14" />
              <line x1="78" y1="28" x2="84" y2="62" />
              <line x1="84" y1="62" x2="74" y2="84" />
              <line x1="38" y1="88" x2="14" y2="74" />
              <line x1="22" y1="16" x2="56" y2="14" />
              <line x1="56" y1="14" x2="78" y2="28" />
            </g>
            {NODE_POSITIONS.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r=".9" fill="#04603b" className={`orb-node n-${i % 5}`} />
            ))}
            <circle r=".6" fill="#06975a" className="pulse-dot">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M50 50 L78 28" />
            </circle>
            <circle r=".6" fill="#06975a" className="pulse-dot">
              <animateMotion dur="4.1s" repeatCount="indefinite" path="M50 50 L14 74" />
            </circle>
            <circle r=".6" fill="#06975a" className="pulse-dot">
              <animateMotion dur="3.7s" repeatCount="indefinite" path="M50 50 L74 84" />
            </circle>
            <circle r=".6" fill="#06975a" className="pulse-dot">
              <animateMotion dur="4.6s" repeatCount="indefinite" path="M50 50 L22 16" />
            </circle>
          </svg>

          {/* Sector chips around the ring */}
          {SECTORS.map((s, i) => {
            const rad = ((s.angle - 90) * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * s.r;
            const y = 50 + Math.sin(rad) * s.r;
            return (
              <Link
                key={s.id}
                href="/soluciones"
                className="orb-sector"
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%,-50%)",
                  animationDelay: `${i * 0.18}s`,
                }}
              >
                <div className="orb-chip">
                  <SectorIcon name={s.icon} />
                </div>
                <div className="orb-label">{s.label}</div>
              </Link>
            );
          })}

          {/* Floating KPI cards */}
          <div className="kpi-card kpi-1" style={{ position: "absolute", left: "8%", top: "30%" }}>
            <div className="kpi-eye">EFICIENCIA OPERATIVA</div>
            <div className="kpi-row">
              <div className="kpi-num">+18%</div>
              <svg viewBox="0 0 60 24" width="60" height="24">
                <polyline points="0,18 10,14 20,16 30,10 40,12 50,6 60,8" fill="none" stroke="#06975a" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="kpi-sub">vs. mes anterior</div>
          </div>

          <div className="kpi-card kpi-2" style={{ position: "absolute", right: "4%", top: "14%" }}>
            <div className="kpi-eye">DISPONIBILIDAD</div>
            <div className="kpi-donut">
              <svg viewBox="0 0 36 36" width="64" height="64">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#e2eee6" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#04603b"
                  strokeWidth="3"
                  strokeDasharray="92 100"
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                  className="donut-anim"
                />
              </svg>
              <div className="kpi-donut-num">99.97%</div>
            </div>
          </div>

          <div className="kpi-card kpi-3" style={{ position: "absolute", right: "-2%", bottom: "22%" }}>
            <div className="kpi-eye">PROYECTOS ACTIVOS</div>
            <div className="kpi-num" style={{ fontSize: 30 }}>247</div>
            <div className="kpi-sub">en 8 sectores</div>
          </div>

          <div className="kpi-card kpi-4" style={{ position: "absolute", left: "2%", bottom: "12%" }}>
            <div className="kpi-eye">ALERTAS · TIEMPO REAL</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="kpi-pulse-dot" />
              <div className="kpi-num" style={{ fontSize: 22 }}>3</div>
              <div className="kpi-sub" style={{ margin: 0 }}>requieren atención</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
