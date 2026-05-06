import type { CSSProperties } from "react";

type Props = {
  side?: "left" | "right";
  size?: number;
  opacity?: number;
  light?: boolean;
  top?: number | string;
  style?: CSSProperties;
};

export function Watermark({
  side = "left",
  size = 480,
  opacity = 0.06,
  light = false,
  top = 0,
  style,
}: Props) {
  const horiz = side === "left" ? { left: -80 } : { right: -80 };
  return (
    <div
      className="watermark-A"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        top,
        opacity,
        backgroundImage: 'url("/assets/aesa-A-official.png")',
        filter: light ? "brightness(0) invert(1)" : "none",
        ...horiz,
        ...style,
      }}
    />
  );
}
