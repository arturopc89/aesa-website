"use client";
import { useEffect, useRef, useState } from "react";
import { FEATURED } from "@/lib/data";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function SistemasDestacados() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const inViewRef = useRef(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting && entry.intersectionRatio > 0.35;
      },
      { threshold: [0, 0.35, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!inViewRef.current || pausedRef.current) return;
      setActive((a) => (a + 1) % FEATURED.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section ref={sectionRef} className="sec" style={{ background: "var(--aesa-bg2)", position: "relative" }}>
      <div className="wrap">
        <Reveal>
          <SectionHeader eyebrow="SISTEMAS DESTACADOS" title="Líneas técnicas que dominan nuestro día a día." />
        </Reveal>
        <div
          className="grid-2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 56, alignItems: "center" }}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FEATURED.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div
                  onMouseEnter={() => setActive(i)}
                  style={{
                    padding: "28px 0",
                    borderTop: active === i ? "1px solid var(--aesa-1)" : "1px solid var(--aesa-line)",
                    opacity: active === i ? 1 : 0.45,
                    transition: "opacity .35s ease, border-color .35s ease",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: -1,
                      height: 2,
                      width: active === i ? "100%" : "0%",
                      background: "var(--aesa-1)",
                      transition: "width 2.2s linear",
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-.01em" }}>
                      {f.t}
                    </h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aesa-3)", letterSpacing: ".08em" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--aesa-mute)" }}>{f.d}</p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--aesa-line)" }} />
          </div>
          <Reveal delay={200}>
            <div className="asym-lg" style={{ position: "relative", height: 560, background: "var(--aesa-bg2)", overflow: "hidden" }}>
              {FEATURED.map((f, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={f.t}
                  src={f.img}
                  alt={f.t}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? "scale(1)" : "scale(1.04)",
                    transition: "opacity .8s ease, transform 4s ease-out",
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
