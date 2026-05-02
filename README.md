# AESA · Atenas Energía S.A. — Sitio web

Sitio corporativo de **Atenas Energía S.A. (AESA)** — empresa de ingeniería multisectorial con presencia en Paraguay y la región. Construido con Next.js 16 (App Router), TypeScript y Tailwind CSS v4.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind v4 + CSS variables (tokens AESA)
- **Hosting recomendado**: Vercel

## Páginas

| Ruta | Descripción |
| --- | --- |
| `/` | Inicio — Hero con lightning SVG, soluciones, metodología, sistemas destacados, stats, partners, novedades, videos, clientes |
| `/nosotros` | La empresa, misión/visión, política SGI, certificaciones ISO |
| `/soluciones` | Energía, Industrias, Telecomunicaciones |
| `/casos` | Listado de casos de éxito |
| `/casos/[slug]` | Detalle de cada proyecto (SSG) |
| `/descargas` | Documentación corporativa |
| `/contacto` | Formulario + datos de contacto |

## Desarrollo

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Deploy a Vercel

1. Push a GitHub.
2. En Vercel → **Add New Project** → importar este repo.
3. Vercel detecta Next.js automáticamente. Sin variables de entorno requeridas.
4. Deploy.

## Estructura

```
src/
├─ app/                      # App Router routes + layout
│  ├─ casos/[slug]/          # Detalle de caso (SSG)
│  ├─ contacto/
│  ├─ descargas/
│  ├─ nosotros/
│  ├─ soluciones/
│  ├─ layout.tsx             # Root layout (Navbar/Footer/fonts)
│  ├─ page.tsx               # Home
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/               # Componentes compartidos
│  ├─ home/                  # Secciones de la Home
│  ├─ AsymImage.tsx          # Imágenes con clip-path + parallax
│  ├─ ContactForm.tsx
│  ├─ Footer.tsx
│  ├─ Hero.tsx               # Hero + lightning SVG animado
│  ├─ ISORail.tsx
│  ├─ Navbar.tsx             # Overlay → sticky on scroll
│  ├─ PageHero.tsx
│  ├─ PartnerLogo.tsx
│  ├─ Reveal.tsx             # IO-based reveal animation
│  ├─ SectionHeader.tsx
│  ├─ StatCounter.tsx        # Animated number counter
│  └─ Watermark.tsx
└─ lib/
   └─ data.ts                # Contenido (NAV, SOLUTIONS, STATS, PARTNERS, ...)

public/
└─ assets/                   # Logo, partners (37), certificaciones, herramientas
```

## Tokens de marca

Definidos en `src/app/globals.css`:

```
--aesa-1: #1B5E37   /* Verde primario */
--aesa-2: #2E7D4F   /* Verde medio */
--aesa-3: #4CAF72   /* Verde acento */
--aesa-ink: #0F1A12 /* Texto */
--aesa-mute: #6c7a70
```

## Notas

- Las imágenes de fondo provienen de Unsplash como placeholders. Reemplazar por fotografía real de AESA antes de producción (los URLs viven en `src/lib/data.ts → IMG`).
- El formulario de contacto usa `mailto:` como fallback. Para envío server-side, integrar Resend / SendGrid en una Route Handler bajo `src/app/api/contact/route.ts`.
- El video de stats usa el embed Vimeo `1113182936`. Reemplazar por el video oficial cuando esté disponible.
- Animaciones respetan `prefers-reduced-motion: reduce`.

---

© Atenas Energía S.A. · Asunción, Paraguay.
