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
      "Generación, transmisión y distribución. Energías renovables, almacenamiento y transición energética llave en mano.",
    bullets: [
      "Subestaciones MT/AT",
      "Reconectadores y telecontrol",
      "Solar + BESS",
      "Líneas y tendido FO",
    ],
  },
  {
    id: "industrias",
    name: "Industrias",
    img: IMG.industrias,
    blurb:
      "Automatización industrial, integración de procesos y plataformas de control para plantas críticas.",
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
      "Infraestructura crítica, redes industriales, seguridad y comunicaciones para servicios esenciales.",
    bullets: [
      "Redes industriales",
      "Ciberseguridad OT",
      "Tendido de fibra óptica",
      "Equipamiento de campo",
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

export type CasoDetail = {
  client: string;
  year: string;
  location: string;
  scope: string;
  challenge: string;
  solution: string;
  results: string[];
  metaDescription: string;
};

export const CASOS_DETAIL: Record<string, CasoDetail> = {
  "itaipu-matrix": {
    client: "ITAIPU Binacional",
    year: "2023",
    location: "Hernandarias, Paraguay",
    scope: "Integración de sistema SCADA · Sensórica distribuida · Comunicaciones redundantes",
    challenge:
      "ITAIPU Binacional necesitaba centralizar el monitoreo sísmico, estructural e hidráulico de la represa en una única plataforma de supervisión en tiempo real, reemplazando sistemas heterogéneos con escasa interoperabilidad y alto costo de mantenimiento.",
    solution:
      "AESA diseñó e integró el sistema MATRIX: una plataforma SCADA con adquisición de datos de sensores sísmicos, piezómetros, inclinómetros y sensores de desplazamiento. La arquitectura incluye servidores redundantes, comunicaciones en anillo de fibra óptica y un dashboard unificado para el centro de control de la represa.",
    results: [
      "Centralización de más de 200 instrumentos de medición en una sola plataforma",
      "Alarmas automatizadas con escalamiento a técnicos y dirección en tiempo real",
      "Reducción del 60 % en tiempos de diagnóstico ante eventos sísmicos",
      "Arquitectura redundante con disponibilidad 99.97 % desde la puesta en marcha",
    ],
    metaDescription:
      "Sistema de monitoreo MATRIX para ITAIPU Binacional, ejecutado por AESA en Paraguay. Plataforma SCADA con sensores sísmicos, hidráulicos y estructurales integrados en tiempo real.",
  },
  "ande-telecontrol": {
    client: "ANDE — Administración Nacional de Electricidad",
    year: "2022",
    location: "Asunción y Gran Asunción, Paraguay",
    scope: "Reconectadores automáticos · SCADA de distribución · Telecontrol GPRS/4G",
    challenge:
      "La red de distribución de media tensión de ANDE operaba con reposición manual de fallas, lo que generaba tiempos de interrupción elevados y alta demanda de recursos de campo. Se necesitaba una solución de automatización que permitiera la reposición remota y automática del servicio eléctrico.",
    solution:
      "AESA suministró, instaló y comisionó reconectadores automáticos de media tensión con telecontrol integrado. Cada equipo se comunicó con el SCADA de distribución a través de protocolos IEC 60870-5-104 sobre enlaces GPRS/4G, habilitando maniobras remotas desde el centro de control y reposición automática ante fallas.",
    results: [
      "519 reconectadores integrados al SCADA de distribución de ANDE",
      "Reposición automática del servicio eléctrico en menos de 30 segundos",
      "Reducción del 70 % en desplazamientos de cuadrillas a fallas en red MT",
      "Mejora del índice SAIDI/SAIFI en las zonas de cobertura del proyecto",
    ],
    metaDescription:
      "Automatización y telecontrol de red de media tensión para ANDE Paraguay. AESA integró 519 reconectadores automáticos con SCADA IEC 60870-5-104 para reposición automática del servicio eléctrico.",
  },
  "mopc-acueducto": {
    client: "MOPC — Ministerio de Obras Públicas y Comunicaciones",
    year: "2022",
    location: "Región Occidental (Chaco), Paraguay",
    scope: "SCADA de supervisión · RTUs de campo · Medición de caudal y calidad de agua",
    challenge:
      "El acueducto que abastece a comunidades del Chaco paraguayo carecía de un sistema de supervisión en tiempo real. Los operadores no tenían visibilidad sobre caudales, presiones y niveles de cloración a lo largo de 120 kilómetros de infraestructura crítica.",
    solution:
      "AESA implementó un sistema SCADA de supervisión distribuida con RTUs de campo instaladas en estaciones de bombeo, tanques y puntos de muestreo. La telemetría se transmite por radio y fibra óptica hasta el centro de control del MOPC en Asunción, con alarmas configurables por parámetro.",
    results: [
      "Supervisión en tiempo real de 120+ kilómetros de acueducto en el Chaco",
      "Monitoreo continuo de caudal, presión y calidad de agua (cloro residual, pH)",
      "Reducción de pérdidas no detectadas gracias a alertas de variación de flujo",
      "Plataforma escalable para integrar nuevas estaciones sin modificar la arquitectura central",
    ],
    metaDescription:
      "Sistema SCADA de monitoreo del Acueducto del Chaco para el MOPC Paraguay. AESA integró RTUs de campo, telemetría y supervisión en tiempo real de caudal y calidad de agua en 120 km de infraestructura.",
  },
  "ande-scada-ge": {
    client: "ANDE — Administración Nacional de Electricidad",
    year: "2021",
    location: "Asunción, Paraguay",
    scope: "SCADA GE eTerra · Integración ICCP · IEC 60870-5-101/104 · Estaciones de operador",
    challenge:
      "El centro de control de transmisión de ANDE operaba con tecnología propietaria obsoleta, sin interfaz con sistemas modernos ni capacidad de intercambio de datos ICCP con entidades vecinas. Se requería una migración tecnológica sin interrumpir la operación continua de la red de transmisión.",
    solution:
      "AESA ejecutó la migración al sistema SCADA GE eTerra para gestión de la red de transmisión. La integración incluyó interfaces ICCP para intercambio con Yacyretá e ITAIPU, protocolos IEC 60870-5-101/104 sobre los RTUs existentes, y la puesta en marcha de nuevas estaciones de operador con visualización single-line de la red nacional.",
    results: [
      "Centro de control de transmisión modernizado con plataforma GE eTerra",
      "Interfaz ICCP activa con ITAIPU Binacional y Entidad Binacional Yacyretá",
      "Integración de más de 50 subestaciones de transmisión en una vista unificada",
      "Migración ejecutada sin interrupciones en la operación de la red",
    ],
    metaDescription:
      "Modernización del SCADA de transmisión de ANDE con plataforma General Electric eTerra. AESA integró interfaces ICCP, IEC 60870-5-104 y nuevas estaciones de operador en el centro de control nacional.",
  },
  "yacyreta-comunicaciones": {
    client: "Entidad Binacional Yacyretá",
    year: "2023",
    location: "Ayolas, Paraguay",
    scope: "Fibra óptica industrial · Switches Hirschmann · Red IP convergente · VoIP",
    challenge:
      "La red de telecomunicaciones de la central hidroeléctrica Yacyretá operaba con equipamiento envejecido, incapaz de soportar los protocolos de protección IEC 61850 y las demandas de ancho de banda de los nuevos sistemas de control. Se necesitaba una modernización sin afectar la operación continua de la central.",
    solution:
      "AESA renovó la infraestructura de telecomunicaciones de Yacyretá con switches industriales Hirschmann en topología de anillo redundante, migración de la planta de fibra óptica multimodo a monomodo, e implementación de VoIP corporativo con calidad de servicio priorizada para aplicaciones críticas.",
    results: [
      "325 km de fibra óptica integrada en red redundante de topología anillo",
      "Disponibilidad de red superior al 99.9 % desde la puesta en servicio",
      "Soporte de protocolos IEC 61850 GOOSE para protección diferencial",
      "VoIP con 200+ extensiones y calidad de servicio garantizada",
    ],
    metaDescription:
      "Modernización de red de telecomunicaciones en la Central Hidroeléctrica Yacyretá, ejecutada por AESA. Fibra óptica monomodo, switches Hirschmann en anillo redundante e implementación VoIP.",
  },
  "cie-subestacion": {
    client: "CIE — Compañía de Ingeniería Eléctrica",
    year: "2024",
    location: "Paraguay",
    scope: "Subestación compacta MT · Celdas GIS · Protección y control · Puesta en servicio",
    challenge:
      "El cliente requería una subestación de media tensión compacta para la alimentación confiable de un complejo industrial con alta demanda de continuidad operativa. El espacio físico disponible era limitado y los plazos de entrega muy exigentes.",
    solution:
      "AESA diseñó, fabricó e integró una subestación compacta de media tensión llave en mano, con celdas de aislamiento en gas SF6 (GIS), protecciones de sobreintensidad y distancia, transformadores de potencia y panel de control con SCADA local. Todo el proyecto fue coordinado desde el workstatement hasta la puesta en servicio (SAT).",
    results: [
      "Subestación compacta MT energizada dentro del cronograma establecido",
      "Cero incidentes durante la construcción, montaje y puesta en servicio",
      "Protecciones calibradas según normas IEC 60255 y coordinación de aislamiento",
      "Sistema de control con visualización local y alarmas configurables",
    ],
    metaDescription:
      "Subestación compacta de media tensión llave en mano, ejecutada por AESA para CIE en Paraguay. Celdas GIS SF6, protecciones IEC 60255, SCADA local y puesta en servicio SAT.",
  },
  "ande-centro-control": {
    client: "ANDE — Administración Nacional de Electricidad",
    year: "2023",
    location: "Asunción, Paraguay",
    scope: "SCADA de distribución · IEC 61968/61970 · Estaciones de operador · Integración OMS",
    challenge:
      "El centro de control de distribución de ANDE operaba con plataformas propietarias sin interoperabilidad entre sistemas, dificultando la gestión coordinada de la red y el análisis de fallas. La falta de estándares abiertos impedía la integración con sistemas de gestión de interrupciones (OMS) y medición avanzada (AMI).",
    solution:
      "AESA ejecutó la modernización del centro de control de distribución con migración a una plataforma SCADA abierta compatible con IEC 61968/61970 (CIM), integración del sistema OMS para gestión de interrupciones, e instalación de nuevas estaciones de operador con single-line diagram de la red de distribución metropolitana.",
    results: [
      "762 equipos de campo integrados al nuevo SCADA de distribución",
      "Visibilidad unificada de la red de distribución de Asunción y Gran Asunción",
      "Integración OMS con cálculo automático de zonas de corte y restauración",
      "Reducción del tiempo medio de localización de fallas (MTTR) en un 45 %",
    ],
    metaDescription:
      "Modernización del centro de control de distribución de ANDE con SCADA abierto IEC 61968/61970. AESA integró 762 equipos, sistema OMS y nuevas estaciones de operador en Asunción, Paraguay.",
  },
  "industrial-sala-electrica": {
    client: "Empresa del sector industrial (confidencial)",
    year: "2024",
    location: "Paraguay",
    scope: "Sala eléctrica MT/BT · Tableros de distribución · Transformadores · Sistema de control",
    challenge:
      "Una planta industrial de gran escala requería una sala eléctrica completa para alimentar una nueva línea de producción con alta demanda de potencia y exigentes requisitos de continuidad y calidad de energía. El proyecto debía coordinarse con la puesta en marcha de la línea para no generar retrasos operativos.",
    solution:
      "AESA ejecutó el diseño, fabricación, transporte, montaje y comisionamiento de la sala eléctrica llave en mano: tableros de media tensión con celdas SF6, transformadores de potencia, tableros de baja tensión con sistemas de arranque progresivo, UPS para cargas críticas e integración al sistema de automatización de la planta.",
    results: [
      "Sala eléctrica en operación dentro del cronograma, sincronizada con la línea de producción",
      "Cero incidentes de seguridad eléctrica durante construcción, montaje y comisionamiento",
      "Calidad de energía validada según normas IEC 61000 (armónicos, factor de potencia)",
      "Sistema de UPS con autonomía de 30 minutos para cargas críticas de producción",
    ],
    metaDescription:
      "Sala eléctrica industrial llave en mano ejecutada por AESA en Paraguay. Tableros MT/BT con celdas SF6, transformadores de potencia, UPS y sistema de control integrado al proceso productivo.",
  },
};

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
