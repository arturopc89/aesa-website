import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CASOS_DETAIL, NOVEDADES } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return NOVEDADES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata(props: PageProps<"/casos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const item = NOVEDADES.find((n) => n.slug === slug);
  if (!item) return { title: "Caso no encontrado" };
  const detail = CASOS_DETAIL[slug];
  const description = detail?.metaDescription ?? `${item.t} — proyecto llave en mano ejecutado por AESA · Atenas Energía S.A. en Paraguay. Sector ${item.tag}.`;
  return {
    title: item.t,
    description,
    openGraph: {
      title: `${item.t} · AESA`,
      description,
      images: [{ url: item.img, alt: item.t }],
    },
  };
}

export default async function CasoDetailPage(props: PageProps<"/casos/[slug]">) {
  const { slug } = await props.params;
  const item = NOVEDADES.find((n) => n.slug === slug);
  if (!item) notFound();

  const detail = CASOS_DETAIL[slug];
  const related = NOVEDADES.filter((n) => n.slug !== item.slug && n.tag === item.tag).slice(0, 3);

  return (
    <>
      <PageHero
        kicker={item.tag}
        title={item.t}
        sub={detail ? `${detail.client} · Asunción, Paraguay` : "Proyecto entregado por AESA · Atenas Energía S.A."}
      />

      <section className="sec">
        <div className="wrap">
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}
          >
            <Reveal>
              <div className="asym-lg" style={{ height: 520, overflow: "hidden", background: "var(--aesa-bg2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={`${item.t} — proyecto de ingeniería eléctrica y automatización en Paraguay`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <div className="eyebrow">DETALLE DEL PROYECTO</div>
                <h2 className="h-section" style={{ fontSize: "clamp(28px,3vw,42px)", margin: "14px 0 22px", color: "var(--aesa-1)" }}>
                  {detail ? "Resumen del alcance." : "Resumen del alcance."}
                </h2>

                {detail ? (
                  <>
                    <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--aesa-ink-2)", margin: "0 0 18px" }}>
                      <strong>Desafío:</strong> {detail.challenge}
                    </p>
                    <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--aesa-ink-2)", margin: "0 0 18px" }}>
                      <strong>Solución:</strong> {detail.solution}
                    </p>
                  </>
                ) : (
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--aesa-ink-2)", margin: "0 0 18px" }}>
                    Proyecto llave en mano ejecutado por AESA con ingeniería propia, integración con OEM y comisionamiento en sitio.
                  </p>
                )}

                <ul style={{ listStyle: "none", padding: 0, margin: "24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  {[
                    ["CLIENTE", detail?.client ?? item.tag],
                    ["AÑO", detail?.year ?? "2024"],
                    ["UBICACIÓN", detail?.location ?? "Paraguay"],
                    ["ALCANCE", detail?.scope ?? "Llave en mano"],
                  ].map(([l, v]) => (
                    <li key={l} style={{ borderTop: "1px solid var(--aesa-line)", paddingTop: 14, gridColumn: l === "ALCANCE" ? "1 / -1" : undefined }}>
                      <div className="eyebrow" style={{ fontSize: 10 }}>{l}</div>
                      <div style={{ marginTop: 6, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, lineHeight: 1.4 }}>{v}</div>
                    </li>
                  ))}
                </ul>

                <Link href="/casos" className="btn btn-ghost btn-sm">
                  ← Ver todos los casos
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {detail?.results && (
        <section className="sec" style={{ background: "var(--aesa-bg2)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 14 }}>RESULTADOS</div>
              <h2 className="h-section" style={{ fontSize: "clamp(28px,3vw,42px)", margin: "0 0 40px", color: "var(--aesa-1)" }}>
                Logros del proyecto.
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {detail.results.map((r) => (
                  <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 16, lineHeight: 1.6, color: "var(--aesa-ink-2)" }}>
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 99,
                        background: "var(--aesa-1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <path d="M2 6 L5 9 L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="sec" style={{ background: detail?.results ? "#fff" : "var(--aesa-bg2)" }}>
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: 14 }}>RELACIONADOS</div>
            <h2 className="h-section" style={{ fontSize: "clamp(28px,3vw,42px)", margin: "0 0 40px", color: "var(--aesa-1)" }}>
              Más proyectos del sector {item.tag}.
            </h2>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/casos/${c.slug}`}
                  className="card"
                  style={{ padding: 0, display: "flex", flexDirection: "column" }}
                >
                  <div className="asym" style={{ height: 200, borderRadius: "18px 18px 0 0", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={`${c.t} — caso de éxito AESA Paraguay`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: 10 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".12em", color: "var(--aesa-3)", fontWeight: 600 }}>
                      {c.tag}
                    </span>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 16,
                        margin: 0,
                        textTransform: "uppercase",
                        lineHeight: 1.3,
                      }}
                    >
                      {c.t}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
