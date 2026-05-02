"use client";
import { IMG } from "@/lib/data";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

type Video = { img: string; t: string; d: string; cat: string };

const VIDEOS: Video[] = [
  { img: IMG.heroField, t: "Tendido de FO en línea AT — Misiones", d: "04:32", cat: "TELECOM" },
  { img: IMG.heroSub, t: "Pruebas FAT subestación compacta — Asunción", d: "02:18", cat: "ENERGÍA" },
  { img: IMG.scada, t: "Comisionamiento SCADA — Centro de control", d: "03:47", cat: "SCADA" },
  { img: IMG.solarBess, t: "Parque solar híbrido + BESS — Chaco", d: "05:12", cat: "ENERGÍA" },
  { img: IMG.heroIndustrial, t: "Automatización planta cementera — Villeta", d: "02:54", cat: "INDUSTRIAS" },
  { img: IMG.reclosers, t: "Instalación de reclosers en MT — Alto Paraná", d: "03:08", cat: "ENERGÍA" },
];

function VideoTile({ v, featured = false }: { v: Video; featured?: boolean }) {
  return (
    <div
      className="asym"
      style={{ position: "relative", height: "100%", width: "100%", background: "#000", overflow: "hidden", cursor: "pointer" }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) (img as HTMLImageElement).style.transform = "scale(1.06)";
        const btn = e.currentTarget.querySelector("button");
        if (btn) (btn as HTMLButtonElement).style.transform = "translate(-50%,-50%) scale(1.08)";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) (img as HTMLImageElement).style.transform = "scale(1)";
        const btn = e.currentTarget.querySelector("button");
        if (btn) (btn as HTMLButtonElement).style.transform = "translate(-50%,-50%) scale(1)";
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={v.img}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.78, transition: "transform .8s cubic-bezier(.2,.8,.2,1)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%, rgba(0,0,0,.78))" }} />
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: ".12em",
          color: "#fff",
          background: "rgba(0,0,0,.5)",
          backdropFilter: "blur(8px)",
          padding: "6px 10px",
          border: "1px solid rgba(255,255,255,.2)",
        }}
      >
        {v.cat}
      </div>
      <button
        aria-label={`Reproducir ${v.t}`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: featured ? 84 : 56,
          height: featured ? 84 : 56,
          borderRadius: 99,
          background: "rgba(255,255,255,.95)",
          border: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform .35s cubic-bezier(.2,.8,.2,1)",
          boxShadow: "0 12px 40px rgba(0,0,0,.4)",
        }}
      >
        <svg width={featured ? 26 : 18} height={featured ? 26 : 18} viewBox="0 0 22 22">
          <path d="M5 3 L19 11 L5 19 Z" fill="var(--aesa-1)" />
        </svg>
      </button>
      <div
        style={{
          position: "absolute",
          left: featured ? 28 : 18,
          bottom: featured ? 24 : 16,
          right: featured ? 28 : 18,
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 14,
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: featured ? 22 : 14,
            lineHeight: 1.25,
            margin: 0,
            letterSpacing: "-.01em",
            textShadow: "0 2px 8px rgba(0,0,0,.5)",
          }}
        >
          {v.t}
        </h4>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: featured ? 13 : 11,
            background: "rgba(0,0,0,.5)",
            padding: "4px 8px",
            border: "1px solid rgba(255,255,255,.2)",
            flexShrink: 0,
          }}
        >
          {v.d}
        </span>
      </div>
    </div>
  );
}

export function VideosSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            <SectionHeader eyebrow="VIDEOS DESTACADOS" title="Operaciones en campo." />
            <button className="btn btn-ghost btn-sm">Ver biblioteca completa →</button>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gridAutoRows: "200px", gap: 18, marginTop: 8 }}>
          <Reveal style={{ gridColumn: "span 8", gridRow: "span 2", height: "100%" }} delay={0}>
            <VideoTile v={VIDEOS[0]} featured />
          </Reveal>
          <Reveal style={{ gridColumn: "span 4", gridRow: "span 1", height: "100%" }} delay={80}>
            <VideoTile v={VIDEOS[1]} />
          </Reveal>
          <Reveal style={{ gridColumn: "span 4", gridRow: "span 1", height: "100%" }} delay={160}>
            <VideoTile v={VIDEOS[2]} />
          </Reveal>
          <Reveal style={{ gridColumn: "span 4", gridRow: "span 1", height: "100%" }} delay={240}>
            <VideoTile v={VIDEOS[3]} />
          </Reveal>
          <Reveal style={{ gridColumn: "span 4", gridRow: "span 1", height: "100%" }} delay={320}>
            <VideoTile v={VIDEOS[4]} />
          </Reveal>
          <Reveal style={{ gridColumn: "span 4", gridRow: "span 1", height: "100%" }} delay={400}>
            <VideoTile v={VIDEOS[5]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
