import Link from "next/link";
import { IMG } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 680, overflow: "hidden", color: "#fff" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.heroField} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(11,15,12,.55) 0%, rgba(11,15,12,.35) 35%, rgba(11,15,12,.85) 100%)",
          }}
        />
      </div>

      {/* watermark A */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-6%",
          bottom: "-12%",
          width: "52vw",
          height: "52vw",
          opacity: 0.07,
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 18 L186 182 L150 182 L132 146 L68 146 L50 182 L14 182 Z M82 118 L118 118 L100 80 Z' fill='white'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="hero-electric" aria-hidden="true">
        <div className="source strike-1" style={{ position: "absolute", top: "-2%", left: "72%", transform: "translate(-50%,-50%)" }} />
        <div className="source strike-2" style={{ position: "absolute", top: "-2%", left: "18%", transform: "translate(-50%,-50%)" }} />
        <div className="source strike-3" style={{ position: "absolute", top: "-2%", left: "46%", transform: "translate(-50%,-50%)" }} />

        <svg className="arcs" viewBox="0 0 1000 700" preserveAspectRatio="none">
          <g className="strike-1">
            <path className="glow" d="M720 -10 L726 40 L712 90 L735 145 L708 200 L740 260 L712 320 L745 385 L716 455 L750 525 L724 600 L758 700" />
            <path d="M720 -10 L726 40 L712 90 L735 145 L708 200 L740 260 L712 320 L745 385 L716 455 L750 525 L724 600 L758 700" />
            <path className="glow" d="M740 260 L680 280 L640 310 L580 320 L520 350 L470 360 L410 395 L360 410 L320 445 L280 470" />
            <path d="M740 260 L680 280 L640 310 L580 320 L520 350 L470 360 L410 395 L360 410 L320 445 L280 470" />
            <path className="thin" d="M580 320 L560 380 L540 420 L548 470 L528 520 L540 580 L520 640" />
            <path className="thin" d="M470 360 L450 410 L430 450 L440 500 L420 555 L432 610" />
            <path className="thin" d="M410 395 L385 440 L370 490 L380 540 L360 600 L370 660" />
            <path className="thin" d="M320 445 L300 490 L290 540 L300 590 L285 650" />
            <path className="thin" d="M745 385 L780 410 L800 460 L790 510 L815 560" />
            <path className="thin" d="M716 455 L750 480 L770 520 L760 560 L780 610" />
            <path className="thin" d="M708 200 L678 230 L660 270 L645 320" />
            <path className="thin" d="M735 145 L760 170 L780 210 L775 250" />
            <path className="thin" d="M540 420 L515 450 L500 480" />
            <path className="thin" d="M450 410 L420 430 L405 460" />
            <path className="thin" d="M280 470 L260 510 L250 550" />
          </g>
          <g className="strike-2">
            <path className="glow" d="M180 -10 L195 50 L175 110 L210 175 L185 240 L220 310 L195 380 L230 450 L205 520 L240 590 L215 700" />
            <path d="M180 -10 L195 50 L175 110 L210 175 L185 240 L220 310 L195 380 L230 450 L205 520 L240 590 L215 700" />
            <path className="glow" d="M220 310 L270 320 L320 350 L370 360 L420 395 L470 405 L520 440 L570 455 L620 490" />
            <path d="M220 310 L270 320 L320 350 L370 360 L420 395 L470 405 L520 440 L570 455 L620 490" />
            <path className="thin" d="M320 350 L335 405 L320 455 L340 510 L325 565" />
            <path className="thin" d="M420 395 L440 445 L425 495 L445 550 L430 605" />
            <path className="thin" d="M520 440 L540 490 L525 540 L545 595" />
            <path className="thin" d="M210 175 L180 210 L160 250 L170 295 L150 340" />
            <path className="thin" d="M195 380 L165 410 L145 455 L155 505 L135 555" />
            <path className="thin" d="M230 450 L260 480 L250 520 L275 565" />
            <path className="thin" d="M270 320 L260 360 L245 400" />
            <path className="thin" d="M370 360 L385 400 L370 440" />
            <path className="thin" d="M620 490 L640 530 L625 570" />
          </g>
          <g className="strike-3">
            <path className="glow" d="M460 -10 L478 60 L455 130 L490 200 L468 275 L500 350 L475 420 L510 495 L485 570 L520 670" />
            <path d="M460 -10 L478 60 L455 130 L490 200 L468 275 L500 350 L475 420 L510 495 L485 570 L520 670" />
            <path className="glow" d="M500 350 L560 370 L610 405 L670 415 L730 450 L790 460 L850 495" />
            <path d="M500 350 L560 370 L610 405 L670 415 L730 450 L790 460 L850 495" />
            <path className="glow" d="M468 275 L420 290 L370 320 L320 330 L270 360" />
            <path d="M468 275 L420 290 L370 320 L320 330 L270 360" />
            <path className="thin" d="M610 405 L630 450 L615 500 L635 555" />
            <path className="thin" d="M730 450 L750 495 L740 540 L760 590" />
            <path className="thin" d="M370 320 L355 365 L370 410 L355 460" />
            <path className="thin" d="M510 495 L540 530 L525 575 L555 615" />
            <path className="thin" d="M490 200 L465 230 L450 270" />
            <path className="thin" d="M455 130 L430 160 L420 200" />
            <path className="thin" d="M850 495 L880 530 L870 570" />
            <path className="thin" d="M270 360 L245 395 L260 430" />
          </g>
        </svg>
      </div>

      <div
        className="wrap"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 140,
          paddingBottom: 96,
          zIndex: 2,
        }}
      >
        <Reveal>
          <div className="eyebrow" style={{ color: "var(--aesa-3)", marginBottom: 24 }}>
            ATENAS ENERGÍA · DESDE 2000
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(40px,5.4vw,92px)", color: "#fff", margin: "0 0 28px", maxWidth: "16ch" }}
          >
            Proveemos soluciones tecnológicas <span style={{ color: "var(--aesa-3)" }}>de vanguardia.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p
            style={{
              fontSize: "clamp(16px,1.4vw,20px)",
              lineHeight: 1.55,
              color: "rgba(255,255,255,.82)",
              maxWidth: 560,
              margin: "0 0 36px",
            }}
          >
            Ingeniería multisectorial llave en mano para Energía, Industrias y Telecomunicaciones. 26 años entregando proyectos críticos en Paraguay y la región.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/soluciones" className="btn btn-primary">
              Ver soluciones <span>→</span>
            </Link>
            <Link
              href="/contacto"
              className="btn"
              style={{
                background: "rgba(255,255,255,.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.24)",
                backdropFilter: "blur(8px)",
              }}
            >
              Hablar con un especialista
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 48,
          background: "linear-gradient(90deg,var(--aesa-1),var(--aesa-2))",
          clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}
