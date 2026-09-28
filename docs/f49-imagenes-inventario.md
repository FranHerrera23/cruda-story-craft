# F49 §3.3 · Inventario de imágenes por página (pre-migración)

Auditoría LH mobile + desktop (mediana run 2, post §3.2). Sólo se listan
imágenes que aparecen en `image-delivery-insight` o `unsized-images`.

## `/` — home

| Archivo | Servido | Mostrado (mobile · desktop) | Componente · selector | Rol |
|---|---:|---|---|---|
| `/why-now/bust-01-dense.png` (1024×1024 PNG) | **134 kB** | 721×721 · 459×459 | `Act2WhyNow.tsx:99` · `.act2__arts > img.act2__art--bust[data-art=0]` | Art 1 (eager, primer frame Act2) |
| `/why-now/bust-02-mid.png` (1024×1024 PNG)   | 125 kB | (same) | (same, data-art=1) | Art 2 |
| `/why-now/book-01-dense.png` (1024×1024 PNG) | 113 kB | (same) | (same, data-art=2) | Art 3 |
| `/why-now/book-02-mid.png` (1024×1024 PNG)   | 104 kB | (same) | (same, data-art=3) | Art 4 |
| `/why-now/bust-03-min.png` (1024×1024 PNG)   | 60 kB  | (same) | (same, data-art=4) | Art 5 |
| `/why-now/book-03-min.png` (1024×1024 PNG)   | 15 kB  | (same) | (same, data-art=5) | Art 6 |
| `/cruda-logo-cream.png` (708×284 PNG)        | 25 kB  | 209×84 · 219×88 | `Loader.tsx:189` · `.loader__logo` | Loader overlay |
| `/cruda-logo-cream-2x.png` / `-1x.png`       | 16 kB / 6 kB | 100×40 · 100×40 | `Nav.tsx` brand (styled-jsx) | Nav en superficies dark |
| `/cruda-logo-black-2x.png` / `-1x.png`       | 13 kB / 5 kB | 100×40 · 100×40 | `Nav.tsx` brand (styled-jsx) | Nav en superficies paper |
| `/cruda-logo-black.png` (708×284 PNG)        | 25 kB  | 420×168 · — | `SiteFooter.tsx` · `.site-footer__wordmark-logo` | Wordmark footer (fixed §3.2) |

## `/work/karen-mannheim` — case study

| Archivo | Servido | Mostrado (mobile · desktop) | Componente · selector | Rol |
|---|---:|---|---|---|
| `pezet-05-context-skyline.jpg` (4000×2667 JPG) | **1170 kB** | 567×378 · 1143×762 | `CaseStudyLayoutV2.tsx:157` · `article.cs > figure.cs-wrap > div.cs-hero > img` | Hero LCP |
| `/cruda-logo-cream.png` + nav logos + footer wordmark | idem home | idem | idem | Compartidos |

## `/services`

| Archivo | Servido | Mostrado (mobile · desktop) | Componente · selector | Rol |
|---|---:|---|---|---|
| `/cruda-logo-cream.png` (loader) + nav + footer | idem home | idem | idem | Compartidos |

Sin imágenes propias. LCP es texto.

## `/about`

| Archivo | Servido | Mostrado (mobile · desktop) | Componente · selector | Rol |
|---|---:|---|---|---|
| `/fran-herrera.webp` (WebP) | 52 kB (waste 9 kB) | ~155×340 · ~380×620 | `app/about/page.tsx:315` · `.about-who__port > img` | Retrato section 06 |
| `/cruda-logo-cream.png` + nav + footer | idem | idem | idem | Compartidos |

## Alcance de la migración

**Imágenes con `<img>` que se migran a `next/image` en §3.3:**

1. **6× `/why-now/*.png`** (`Act2WhyNow.tsx`) · el primero con `priority`,
   los demás lazy. `sizes` real para que Vercel emita variantes 460/720
   apuntando al display real (459×459 desktop, 721×721 mobile).
2. **Karen hero** (`CaseStudyLayoutV2.tsx`) · `priority` + `sizes` con
   los breakpoints reales del hero (mobile 100vw, tablet 90vw,
   desktop max 1200px).
3. **Fran portrait** (`app/about/page.tsx`) · lazy + `sizes` para el
   split de columnas (38% del viewport en desktop, 100vw en mobile).

**Imágenes que quedan como `<img>`:**

1. **Nav logos** (Nav.tsx brand) · srcset 1x/2x ya optimizado (5–16 kB),
   viven dentro de `<style jsx global>` que Next.js 14 no serializa en
   el HTML servido (ver reporte de §3.2). Migrar a `next/image` acá
   forzaría refactorear la CSS del nav — fuera del scope de F49.
2. **Loader logo** (Loader.tsx) · overlay decorativo que corre 850 ms
   en mobile / 2 s en desktop. `next/image` con `priority` triggerea
   una segunda transformación por variante. Overhead > beneficio.
3. **Footer wordmark** (SiteFooter.tsx) · ya con `width`/`height`
   explícitos + `loading="lazy"` desde §3.2 (fix del CLS).

## LCP desktop post §3.2 (mediana 3× runs)

| Página | LCP desktop | Sobre-budget 1200 ms | Elemento LCP |
|---|---:|---:|---|
| `/`                     | **4584 ms** | +3384 ms | `h1.beat__phrase` (dentro del gate `.page-root`) |
| `/work/karen-mannheim`  | 11 283 ms | +10 083 ms | hero `<img>` (peso del jpg) |
| `/services`             | **1862 ms** | +662 ms  | `h1.name` (dentro del gate) |
| `/about`                | **1537 ms** | +337 ms  | `h1.about-h1` (dentro del gate) |

**Reporte pedido por Fran:** el gate `.page-root:not(.ready) { opacity: 0 }`
sigue activo en desktop (F49 §3.2 lo acotó a `(min-width: 768px) and
(pointer: fine)`). Eso explica que home, services y about pasen el
presupuesto desktop de 1.2 s aún después de §3.2:

- El motor `Act1Hero.fitAllPhrases` mide el ancho y baja el font-size
  en un rAF post-mount. Sin el gate en desktop, se vería un flash de
  dos line-boxes antes del auto-fit.
- Para bajar el LCP desktop < 1.2 s hay que reemplazar ese gate por un
  approach que no oculte toda la página — por ejemplo, gate SÓLO sobre
  `.beat__phrase` del hero de home hasta que corra el fit, dejando el
  resto del `<main>` visible desde SSR. Cambio fuera del scope de
  §3.2, requiere OK explícito.

**Karen desktop** (11 283 ms) es puro peso de imagen → lo resuelve §3.3.

Espera decisión sobre el gate de `.page-root` en desktop antes de tocarlo.
Mientras tanto ejecuto §3.3 (`next/image` sobre las 3 tandas de arriba).
