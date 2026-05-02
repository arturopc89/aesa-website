"use client";
import { CLIENTS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function ClientesSection() {
  return (
    <section className="sec" style={{ background: "var(--aesa-bg2)", paddingTop: 80, paddingBottom: 96 }}>
      <div className="wrap">
        <Reveal>
          <SectionHeader eyebrow="CLIENTES" title="Trabajamos con líderes del sector público y privado." align="center" />
        </Reveal>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 64, marginTop: 48 }}>
          {CLIENTS.map((c) => (
            <div
              key={c}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                color: "var(--aesa-ink-2)",
                letterSpacing: "-.01em",
                opacity: 0.6,
                filter: "grayscale(1)",
                transition: "all .3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "none";
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = "var(--aesa-1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(1)";
                e.currentTarget.style.opacity = "0.6";
                e.currentTarget.style.color = "var(--aesa-ink-2)";
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
