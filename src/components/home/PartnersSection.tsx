"use client";
import { useEffect, useRef, useState } from "react";
import { PARTNERS } from "@/lib/data";
import { PartnerLogo } from "../PartnerLogo";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const COLS = 8;

export function PartnersSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      PARTNERS.forEach((_, i) => {
        const row = Math.floor(i / COLS);
        const col = i % COLS;
        const delay = row * 420 + col * 60;
        window.setTimeout(() => {
          setRevealedSet((prev) => {
            const next = new Set(prev);
            next.add(i);
            return next;
          });
        }, delay);
      });
    };
    const obs = new IntersectionObserver(
      ([ent]) => {
        if (ent.isIntersecting) {
          trigger();
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -25% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            eyebrow="PARTNERS"
            title="Socios estratégicos."
            sub="Trabajamos con los principales fabricantes globales de tecnología industrial, energía y telecomunicaciones."
            align="center"
          />
        </Reveal>
        <div
          ref={gridRef}
          className="partners-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            rowGap: 36,
            columnGap: 24,
            marginTop: 64,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {PARTNERS.map((p, i) => {
            const isOn = revealedSet.has(i);
            return (
              <div
                key={p.n}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: isOn ? 1 : 0,
                  transform: isOn ? "translateY(0) scale(1)" : "translateY(40px) scale(0.85)",
                  transition: "opacity .9s cubic-bezier(.2,.8,.2,1), transform .9s cubic-bezier(.2,.8,.2,1)",
                  willChange: "opacity, transform",
                }}
              >
                <PartnerLogo name={p.n} src={p.src} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
