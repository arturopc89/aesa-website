import { Hero } from "@/components/Hero";
import { ClientesSection } from "@/components/home/ClientesSection";
import { DesarrolloSection } from "@/components/home/DesarrolloSection";
import { NovedadesSection } from "@/components/home/NovedadesSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { QuienesSomos } from "@/components/home/QuienesSomos";
import { SistemasDestacados } from "@/components/home/SistemasDestacados";
import { SolucionesSection } from "@/components/home/SolucionesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { VideosSection } from "@/components/home/VideosSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <SolucionesSection />
      <DesarrolloSection />
      <SistemasDestacados />
      <StatsSection />
      <PartnersSection />
      <NovedadesSection />
      <VideosSection />
      <ClientesSection />
    </>
  );
}
