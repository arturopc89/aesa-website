import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800", "900"],
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
    "Empresa de ingeniería multisectorial. Soluciones tecnológicas de vanguardia en Energía, Industrias y Telecomunicaciones. Paraguay, desde el año 2000.",
  keywords: [
    "AESA",
    "Atenas Energía",
    "Ingeniería Paraguay",
    "SCADA",
    "Energía",
    "Telecomunicaciones",
    "Automatización",
    "Subestaciones",
    "Reconectadores",
  ],
  authors: [{ name: "Atenas Energía S.A." }],
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://aesa.com.py",
    title: "AESA · Atenas Energía S.A.",
    description:
      "Ingeniería multisectorial llave en mano para Energía, Industrias y Telecomunicaciones.",
    siteName: "AESA",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
