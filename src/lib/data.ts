// AESA · Centralized content & imagery references.
// Replace Unsplash placeholders with real AESA photography when client supplies it.

export const IMG = {
  heroField: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80",
  heroSub: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2400&q=80",
  heroIndustrial: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2400&q=80",
  energia: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  industrias: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
  telecom: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1600&q=80",
  seguridad: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
  datacenters: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  scada: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=80",
  solarBess: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  reclosers: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  statsBg: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80",
  case1: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  case2: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  case3: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  case4: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
  case5: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
  case6: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
  case7: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
  case8: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  aboutTeam: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  aboutOps: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
  aboutField: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80",
} as const;

export type NavItem = { id: string; label: string; href: string };

export const NAV: NavItem[] = [
  { id: "home", label: "INICIO", href: "/" },
  { id: "nosotros", label: "NOSOTROS", href: "/nosotros" },
  { id: "soluciones", label: "SOLUCIONES", href: "/soluciones" },
  { id: "casos", label: "CASOS DE ÉXITO", href: "/casos" },
  { id: "descargas", label: "DESCARGAS", href: "/descargas" },
  { id: "contacto", label: "CONTACTO", href: "/contacto" },
];

export const ISO_BADGES = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
];

export type Solution = {
  id: string;
  name: string;
  img: string;
  blurb: string;
  bullets: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    id: "energia",
    name: "Energía",
    img: IMG.energia,
    blurb:
      "Generación, transmisión y distribución. Renovables, almacenamiento y transición energética llave en mano.",
    bullets: [
      "Subestaciones MT/AT",
      "Reconectadores y telecontrol",
      "Solar + BESS",
      "Líneas y obra eléctrica",
    ],
  },
  {
    id: "industrias",
    name: "Industrias, Alimentos y Transporte",
    img: IMG.industrias,
    blurb:
      "Automatización industrial, integración de procesos y plataformas de control para plantas críticas, industria alimentaria y operaciones de transporte.",
    bullets: [
      "Automatización de procesos",
      "SCADA / HMI",
      "Sistemas de medición",
      "Mantenimiento e ingeniería",
    ],
  },
  {
    id: "telecomunicaciones",
    name: "Telecomunicaciones",
    img: IMG.telecom,
    blurb:
      "Infraestructura crítica, redes industriales y comunicaciones para servicios esenciales y enlaces de misión crítica.",
    bullets: [
      "Redes industriales",
      "Enlaces de misión crítica",
      "Tendido de fibra óptica",
      "Equipamiento de campo",
    ],
  },
  {
    id: "seguridad",
    name: "Seguridad",
    img: IMG.seguridad,
    blurb:
      "Sistemas integrales de seguridad electrónica y física: CCTV, control de accesos, cercos perimetrales, detección y aberturas técnicas.",
    bullets: [
      "CCTV y videoanalítica",
      "Cercos perimetrales",
      "Detección y PCI",
      "Aberturas técnicas y control de accesos",
    ],
  },
  {
    id: "datacenters",
    name: "Datacenters",
    img: IMG.datacenters,
    blurb:
      "Diseño, integración y operación de salas técnicas: energía crítica, climatización de precisión, racks, monitoreo DCIM y ciberseguridad OT.",
    bullets: [
      "Energía crítica · UPS · BESS",
      "Climatización de precisión",
      "Monitoreo DCIM",
      "Ciberseguridad OT",
    ],
  },
];

export const STEPS = [
  { n: "01", t: "Workstatement", d: "Definición de alcance, requisitos y entregables." },
  { n: "02", t: "Proyecto Ejecutivo", d: "Ingeniería de detalle, cómputos y planos." },
  { n: "03", t: "Fabricación y Desarrollo", d: "Producción local + integración con OEM." },
  { n: "04", t: "Pruebas FAT", d: "Factory Acceptance Test antes de despachar." },
  { n: "05", t: "Instalaciones", d: "Montaje en sitio con equipos certificados." },
  { n: "06", t: "Comisionamientos y SAT", d: "Puesta en servicio y validación operativa." },
  { n: "07", t: "Soporte", d: "Mantenimiento, garantías y mejora continua." },
];

export const TOOLS = [
  "ERP SAP",
  "Gerentes de Proyectos con certificaciones PMI",
  "CRM — Gestión de oportunidades",
  "GER — Gestión de eventos y reclamos",
  "GAL — Gestión de archivos en línea",
  "Project, Teams, ToDo, Planner",
];

export type Stat = { n: number; suf: string; label: string };

export const STATS: Stat[] = [
  { n: 519, suf: "", label: "Reconectadores" },
  { n: 5720, suf: "hs", label: "Mantenimiento MT y BT" },
  { n: 325, suf: " km", label: "Tendido de FO" },
  { n: 762, suf: "", label: "Equipos integrados en SCADA" },
  { n: 1121, suf: " hs", label: "Conexión de medidores" },
  { n: 816, suf: "", label: "Equipos de telecom" },
];

export const FEATURED = [
  {
    t: "Energía Alternativa",
    d: "Soluciones sostenibles con sistemas de generación solar y almacenamiento en bancos de baterías. Tecnologías limpias para la transición energética con autonomía garantizada.",
    img: IMG.solarBess,
  },
  {
    t: "Sistemas SCADA",
    d: "Plataformas SCADA de última generación para generación, transmisión, distribución y aplicaciones industriales. Supervisión, control y análisis en tiempo real.",
    img: IMG.scada,
  },
  {
    t: "Automatización",
    d: "Llaves telecomandadas en redes de distribución para automatización eficiente, rápida y segura. Maniobras remotas y reposición rápida ante fallas.",
    img: IMG.reclosers,
  },
];

export const PARTNERS = [
  { n: "GE Vernova", src: "/assets/partners/ge.png" },
  { n: "ABB", src: "/assets/partners/abb.png" },
  { n: "Advantech", src: "/assets/partners/advantech.png" },
  { n: "AWS", src: "/assets/partners/aws.png" },
  { n: "Belden", src: "/assets/partners/belden.png" },
  { n: "Cincoze", src: "/assets/partners/cincoze.png" },
  { n: "Dell EMC", src: "/assets/partners/dell-emc.png" },
  { n: "Emerson", src: "/assets/partners/emerson.png" },
  { n: "Fortinet", src: "/assets/partners/fortinet.png" },
  { n: "Global Fire", src: "/assets/partners/global-fire.png" },
  { n: "Güralp", src: "/assets/partners/guralp.png" },
  { n: "Hirschmann", src: "/assets/partners/hirschmann.png" },
  { n: "Honeywell", src: "/assets/partners/honeywell.png" },
  { n: "Hitachi Energy", src: "/assets/partners/hitachi.png" },
  { n: "HP Enterprise", src: "/assets/partners/hp.png" },
  { n: "Huawei", src: "/assets/partners/huawei.png" },
  { n: "Kyland", src: "/assets/partners/kyland.png" },
  { n: "Landis+Gyr", src: "/assets/partners/landis.png" },
  { n: "Lionrock", src: "/assets/partners/lionrock.png" },
  { n: "Maxei", src: "/assets/partners/maxei.png" },
  { n: "Microsoft", src: "/assets/partners/microsoft.png" },
  { n: "Mitsubishi Electric", src: "/assets/partners/mitsubishi.png" },
  { n: "National Instruments", src: "/assets/partners/national-instruments.png" },
  { n: "Nexconec", src: "/assets/partners/nexconec.png" },
  { n: "Omicron", src: "/assets/partners/omicron.png" },
  { n: "Optex", src: "/assets/partners/optex.png" },
  { n: "Satec", src: "/assets/partners/satec.png" },
  { n: "Sonel", src: "/assets/partners/sonel.png" },
  { n: "Stellar Rad", src: "/assets/partners/stellar-rad.png" },
  { n: "Thales", src: "/assets/partners/thales.png" },
  { n: "VeEX", src: "/assets/partners/veex.png" },
  { n: "Vezco", src: "/assets/partners/vezco.png" },
  { n: "ViewZ", src: "/assets/partners/viewz.png" },
  { n: "Wago", src: "/assets/partners/wago.png" },
  { n: "WEG", src: "/assets/partners/weg.png" },
  { n: "Yokogawa", src: "/assets/partners/yokogawa.png" },
  { n: "ZGR", src: "/assets/partners/zgr.png" },
];

export const CLIENTS = [
  "ITAIPU Binacional",
  "ANDE",
  "MOPC",
  "Yacyretá",
  "CIE",
  "Petropar",
  "Copaco",
  "Essap",
];

export const NOVEDADES = [
  { t: "ITAIPU — Sistema de Monitoreo MATRIX", img: IMG.case1, tag: "ENERGÍA", slug: "itaipu-matrix" },
  { t: "ANDE — Automatización y Telecontrol de Red MT", img: IMG.case2, tag: "ENERGÍA", slug: "ande-telecontrol" },
  { t: "MOPC — Monitoreo Acueducto Chaco", img: IMG.case3, tag: "INDUSTRIAS", slug: "mopc-acueducto" },
  { t: "ANDE — SCADA Transmisión (General Electric)", img: IMG.case4, tag: "ENERGÍA", slug: "ande-scada-ge" },
  { t: "Yacyretá — Sistema de Comunicaciones", img: IMG.case5, tag: "TELECOM", slug: "yacyreta-comunicaciones" },
  { t: "CIE — Subestación Compacta", img: IMG.case6, tag: "ENERGÍA", slug: "cie-subestacion" },
  { t: "ANDE — Modernización Centro de Control", img: IMG.case7, tag: "ENERGÍA", slug: "ande-centro-control" },
  { t: "Industrial — Sala Eléctrica Llave en Mano", img: IMG.case8, tag: "INDUSTRIAS", slug: "industrial-sala-electrica" },
];

export const DOWNLOADS = [
  { t: "Política de Calidad", sz: "PDF · 480 kB", d: "22.11.2024 — REV.01" },
  { t: "Código de Ética", sz: "PDF · 320 kB", d: "15.03.2024 — REV.02" },
  { t: "Presentación AESA Corporativa 2025", sz: "PDF · 6.2 MB", d: "En español / inglés" },
  { t: "Catálogo Soluciones Energía", sz: "PDF · 4.8 MB", d: "Línea 2024-2025" },
  { t: "Catálogo Sistemas SCADA", sz: "PDF · 3.1 MB", d: "Edición 2024" },
  { t: "Brief Telecomunicaciones", sz: "PDF · 1.9 MB", d: "Q1 2025" },
];

export const CONTACT = {
  email: "info@aesa.com.py",
  phone: "+595 21 674524",
  address: "Madame Lynch 627 esq. Antolín Irala, Asunción, Paraguay",
  hours: "Lun – Vie · 08:00 – 17:30",
};
