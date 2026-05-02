"use client";
import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  height?: number | string;
  style?: CSSProperties;
  parallax?: boolean;
  parallaxStrength?: number;
};

export function AsymImage({
  src,
  alt = "",
  size = "md",
  height,
  style,
  parallax = false,
  parallaxStrength = 0.25,
}: Props) {
  const cls = size === "lg" ? "asym-lg" : size === "sm" ? "asym-sm" : "asym";
  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    const img = imgRef.current;
    if (!el || !img) return;

    let lastY = -1;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const travel = parallaxStrength * 100;
      const offset = -travel / 2 + clamped * travel;
      if (Math.abs(offset - lastY) < 0.05) return;
      lastY = offset;
      img.style.transform = `translate3d(0, ${offset.toFixed(2)}%, 0)`;
    };
    update();
    const id = window.setInterval(update, 50);
    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [parallax, parallaxStrength]);

  return (
    <div
      ref={ref}
      className={cls}
      style={{ height, position: "relative", background: "var(--aesa-bg2)", overflow: "hidden", ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        style={
          parallax
            ? {
                width: "100%",
                height: "130%",
                objectFit: "cover",
                position: "absolute",
                top: "-15%",
                left: 0,
                willChange: "transform",
              }
            : { width: "100%", height: "100%", objectFit: "cover" }
        }
      />
    </div>
  );
}
