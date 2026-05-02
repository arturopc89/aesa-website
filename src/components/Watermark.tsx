import type { CSSProperties } from "react";

type Props = {
  side?: "left" | "right";
  size?: number;
  opacity?: number;
  color?: string;
  top?: number | string;
  style?: CSSProperties;
};

export function Watermark({
  side = "left",
  size = 480,
  opacity = 0.06,
  color = "#1B5E37",
  top = 0,
  style,
}: Props) {
  const horiz = side === "left" ? { left: -80 } : { right: -80 };
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 18 L186 182 L150 182 L132 146 L68 146 L50 182 L14 182 Z M82 118 L118 118 L100 80 Z' fill='${color}'/></svg>`;
  return (
    <div
      className="watermark-A"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        top,
        opacity,
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svg).replace(/'/g, "%27")}")`,
        ...horiz,
        ...style,
      }}
    />
  );
}
