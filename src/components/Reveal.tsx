"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span";
  style?: CSSProperties;
  className?: string;
};

export function Reveal({ children, delay = 0, as = "div", style, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => el.classList.add("in"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={`reveal${className ? " " + className : ""}`} style={style}>
      {children}
    </Tag>
  );
}
