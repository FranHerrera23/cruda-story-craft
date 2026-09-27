# F49 · Reporte de uso de Vercel Image Optimization (plan Hobby)

Reporte previo al §3.3, antes de decidir si migrar los heroes de case
study a `next/image` en el deploy actual de Vercel Hobby.

## 1 · Universo real del cambio

En el diagnóstico F49 se dijo que §3.3 aplicaba a "todos los cases F33"
(Karen, Mike, José, Girish, Jack, Confidential). Al inventariar el hero
`<img>` que provoca el LCP alto encontramos algo distinto:

| Case | Layout que renderiza el hero | Path del hero | Peso |
|---|---|---|---:|
| Karen Mannheim         | `CaseStudyLayoutV2` (clients-v3) | `@/assets/pezet-05-context-skyline.jpg` (4000×2667) | **1170 kB** |
| Confidential Fashion   | `WorkLayout` (F26 molde)         | `/confidential-hero.jpg` (1×1 EXIF, tamaño real …) | **1233 kB** |
| Mike Kaeding           | `WorkLayout`                     | `/mike-kaeding.webp` | 36 kB |
| José Mannheim          | `WorkLayout`                     | `/jose-mannheim.webp` | 62 kB |
| Girish Sehgal          | `WorkLayout`                     | `/girish-sehgal.webp` | 83 kB |
| Jack Yeager            | `WorkLayout`                     | `/jack-yeager.jpeg` | 53 kB |
| Juan Pablo Romero      | `WorkLayout`                     | `/juan-pablo-romero.webp` | 29 kB |
| In & Out               | `WorkLayout`                     | `/inout-sliding-wall.jpg` | 85 kB |

Puntos importantes:

1. **Sólo Karen está en `CaseStudyLayoutV2`.** El resto viven en `WorkLayout`.
   Cambiar el `<img>` del V2 arregla Karen, pero no toca a los otros.
2. **Sólo Karen y Confidential tienen el problema real de peso.** Las
   demás heroes ya están por debajo de 90 kB (mayormente WebP). Migrarlas
   a `next/image` no mueve la aguja de LCP y sí consume cuota.
3. **El bug de F49 §3.3 son esos dos heroes**, no las seis cards.

## 2 · Vercel Image Optimization en Hobby

Plan Hobby (2025):
- **1000 source images / mes**. Una source image es una URL única de
  input; cada variante (width/quality/format) que Vercel emite cuenta
  dentro del pool de esa source.
- Cache de imágenes optimizadas: 30 días desde la primera transformación
  exitosa. Repeat views no re-transforman.
- Cada variante servida a un cliente sí cuenta como bandwidth aparte,
  pero el pool de "source images" es lo que triggerea overage.

## 3 · Uso estimado post-migración (a `next/image`)

**Escenario A — sólo Karen + Confidential migran (recomendado):**
- Source images totales: **2**
- Variantes servidas (Vercel default: `deviceSizes` × formatos AVIF/WebP):
  ~10 variantes por source = 20 variantes servidas.
- Consumo: **2 source images / mes** (independiente de cuánto tráfico).
- Overage risk: **cero**.

**Escenario B — las 8 heroes migran:**
- Source images totales: **8**
- Consumo: **8 source images / mes**.
- Overage risk: cero, pero se gasta cuota en imágenes que ya son WebP <100 kB.

**Escenario C — todo `<img>` del sitio migra a `next/image`** (heroes +
sub-cases + evidence + press + about photo, etc.): estimado 30-40 sources.
Todavía muy por debajo de 1000/mes. Overage risk: cero.

## 4 · Alternativa sin `next/image` — pre-optimización con `sharp`

Podríamos generar `pezet-05-context-skyline-{600,900,1200}.webp` a build
time con `sharp`, sin usar Image Optimization de Vercel:

- **Consumo de cuota Vercel:** 0.
- **Costo:** un script Node en el pipeline de build + `sharp` como
  devDependency (ya está en package.json).
- **Ventajas:** cero dependencia del proveedor; mismo asset servido
  a todos los deploys (Vercel, Netlify, self-hosted).
- **Desventajas:** el markup queda con `srcset` manual; menos flexibilidad
  para agregar variantes después; no hay AVIF automático (aunque `sharp`
  puede generarlo también).

## 5 · Recomendación

**Escenario A — migrar Karen + Confidential a `next/image` con `priority`,
`sizes` y `quality={80}`.**

Racional:
- Sólo son 2 sources → 0.2 % del pool mensual del plan Hobby.
- El cache de 30 días hace que en la práctica Vercel transforme cada
  source un puñado de veces al mes.
- El desktop pixel-diff se preserva usando `quality={90}` en el
  breakpoint más grande (comportamiento por defecto de `next/image` con
  q=75, se puede subir).
- La implementación es mínima: 1 componente (`CaseStudyLayoutV2.tsx` +
  `WorkLayout.tsx`) y 0 scripts nuevos.

Si preferís cero dependencia de Vercel, pasamos a Escenario C manual con
`sharp`. Aviso: eso agrega un paso de build y hay que mantener el script
cuando lleguen nuevos cases.

**Esperando decisión antes de arrancar §3.3.**
