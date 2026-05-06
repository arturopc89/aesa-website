import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aesa.com.py"),
  title: {
    default: "AESA · Atenas Energía S.A.",
    template: "%s · AESA",
  },
  description:
    "Atenas Energía S.A. (AESA) — Empresa de ingeniería eléctrica, SCADA y automatización industrial en Asunción, Paraguay. Subestaciones MT/AT, reconectadores, telecomunicaciones y datacenters. Proyectos llave en mano para ANDE, ITAIPU, MOPC y sector privado desde el año 2000.",
  keywords: [
    "AESA",
    "Atenas Energía",
    "ingeniería eléctrica Paraguay",
    "SCADA Paraguay",
    "automatización industrial Paraguay",
    "subestaciones Paraguay",
    "reconectadores ANDE",
    "telecomunicaciones industriales",
    "datacenters Paraguay",
    "ingeniería llave en mano Asunción",
    "ITAIPU ANDE MOPC",
    "ISO 9001 ingeniería Paraguay",
  ],
  authors: [{ name: "Atenas Energía S.A." }],
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://aesa.com.py",
    title: "AESA · Atenas Energía S.A.",
    description:
      "Ingeniería eléctrica, SCADA y automatización para Energía, Industrias y Telecomunicaciones. Proyectos llave en mano en Paraguay desde el año 2000.",
    siteName: "AESA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AESA · Atenas Energía S.A. — Ingeniería en Paraguay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AESA · Atenas Energía S.A.",
    description:
      "Ingeniería eléctrica, SCADA y automatización en Paraguay. Proyectos llave en mano para ANDE, ITAIPU y sector privado desde el año 2000.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://aesa.com.py/#organization",
      name: "Atenas Energía S.A.",
      alternateName: ["AESA", "Atenas Energia SA"],
      url: "https://aesa.com.py",
      logo: {
        "@type": "ImageObject",
        url: "https://aesa.com.py/assets/aesa-logo-eslogan-color.png",
        width: 400,
        height: 120,
      },
      image: "https://aesa.com.py/opengraph-image",
      description:
        "Empresa de ingeniería eléctrica, SCADA y automatización industrial en Asunción, Paraguay. Proyectos llave en mano para ANDE, ITAIPU, MOPC y sector privado desde el año 2000.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Madame Lynch 627 esq. Antolín Irala",
        addressLocality: "Asunción",
        addressRegion: "Asunción",
        addressCountry: "PY",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -25.2867,
        longitude: -57.647,
      },
      telephone: "+595-21-674524",
      email: "info@aesa.com.py",
      foundingDate: "2000",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 100 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:30",
        },
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 9001:2015 — Sistema de Gestión de Calidad" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 14001:2015 — Gestión Ambiental" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 45001:2018 — Seguridad y Salud en el Trabajo" },
      ],
      areaServed: [
        { "@type": "Country", name: "Paraguay" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Brasil" },
      ],
      knowsAbout: [
        "Ingeniería eléctrica",
        "SCADA",
        "Automatización industrial",
        "Subestaciones de media y alta tensión",
        "Reconectadores automáticos",
        "Telecomunicaciones industriales",
        "Fibra óptica",
        "Datacenters",
        "Ciberseguridad OT",
        "Seguridad electrónica",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
