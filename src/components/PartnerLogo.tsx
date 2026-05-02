"use client";
type Props = { name: string; src: string };

export function PartnerLogo({ name, src }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 56,
        width: "100%",
      }}
      title={name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        loading="lazy"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
          filter: "brightness(0)",
          opacity: 1,
          transition: "filter .35s ease, opacity .35s ease, transform .35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "none";
          e.currentTarget.style.transform = "scale(1.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "brightness(0)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </div>
  );
}
