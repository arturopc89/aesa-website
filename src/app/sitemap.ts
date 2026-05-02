import type { MetadataRoute } from "next";
import { NOVEDADES } from "@/lib/data";

const BASE = "https://aesa.com.py";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/nosotros", "/soluciones", "/casos", "/descargas", "/contacto"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const cases = NOVEDADES.map((n) => ({
    url: `${BASE}/casos/${n.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  return [...routes, ...cases];
}
