# F49 · Paso 1 · Diagnóstico Lighthouse mobile — 27-sep

**Rama:** `f49-performance` (base `main` @ `5fd5250`, F48 mergeado).
**Modo:** solo diagnóstico. Cero cambios de código en este paso.
**Setup:** `npm run build && PORT=3013 npm run start` (build de producción, puerto 3013).
**Runner:** Lighthouse CLI 13.5.0, `--preset=perf --form-factor=mobile --output=json`,
Chromium `/opt/pw-browsers/chromium`, 3 corridas por página.
**JSONs crudos:** `/tmp/lh-runs/{home,karen,services,about}-run{1,2,3}.json`.

Presupuesto móvil: LCP < 2.5s · CLS < 0.1 · TBT < 200ms.

---

## 1 · Mediana de métricas (3 corridas por página)

| Página | Perf | FCP | **LCP** | SI | **TBT** | **CLS** |
|---|---:|---:|---:|---:|---:|---:|
| `/`                      | 84 | 2287 ms | **2993 ms** | 6006 ms | 186 ms | 0.000 |
| `/work/karen-mannheim`   | 58 | 2856 ms | **10 873 ms** | 7109 ms | 283 ms | 0.000 |
| `/services`              | 90 | 2096 ms | **2721 ms** | 4462 ms | 174 ms | 0.000 |
| `/about`                 | 92 | 2002 ms | **2637 ms** | 4341 ms | 93 ms | 0.000 |

Presupuesto:

| Página | LCP | Sobre-budget | TBT | Sobre-budget | CLS |
|---|---:|---:|---:|---:|---:|
| `/`                      | 2993 | **+493 ms** | 186 | ok | 0.000 ok |
| `/work/karen-mannheim`   | 10 873 | **+8 373 ms** | 283 | **+83 ms** | 0.000 ok |
| `/services`              | 2721 | **+221 ms** | 174 | ok | 0.000 ok |
| `/about`                 | 2637 | **+137 ms** | 93 | ok | 0.000 ok |

Karen es el outlier absoluto: LCP 4× el presupuesto.
Home, services y about están 100-500 ms por encima.
CLS 0 en todas — no hay reserva de espacio pendiente.

LCP por corrida (dispersión):
- home: 2993, 2982, 3024 (rango 42 ms — muy estable)
- karen: 11 072, 10 799, 10 873 (rango 273 ms — estable en su malo)
- services: 2721, 2398, 2738 (rango 340 ms — el 2398 corresponde a la corrida donde el LCP eligió texto en vez del logo nav; ver §2)
- about: 2637, 2649, 2608 (rango 41 ms — muy estable)

---

## 2 · Elemento LCP y breakdown

### home · `/`

**Elemento LCP** (3/3 corridas): `<img src="/cruda-logo-black-2x.png" width=100 height=40>`
en `nav > div > a.cruda-global-nav-brand > img`.
No es el h1 del hero. El nav está fuera de `<PageShell>` en `app/layout.tsx:230`
(el nav renderea antes del `<PageShell>`), así que **no lo apaga el gate
`.page-root:not(.ready) { opacity: 0 }`** — mientras el `<main>` está oculto,
el navegador toma el logo de 100×40 del nav como el elemento pintado más grande.
`boundingRect` en el JSON de LH mide 0×0: el logo queda tapado por el panel
del Loader (fondo `--ink`, z-index alto), pero Chrome igual lo elige como LCP
porque es el nodo pintado (aunque cubierto) más grande antes de que el resto
del `<main>` levante opacity a 1.

**Breakdown** (mediana, run 2):

| Subpart | Duración |
|---|---:|
| Time to first byte     | 12 ms |
| Resource load delay    | 596 ms |
| Resource load duration | 2348 ms |
| Element render delay   | 27 ms |
| **Total ≈**            | **2983 ms** |

### `/work/karen-mannheim`

**Elemento LCP** (3/3 corridas): `<img src="/_next/static/media/pezet-05-context-skyline.f0ecf910.jpg" alt="" style="object-position:center 25%">`
en `article.cs > figure.cs-wrap > div.cs-hero > img`.
Ancho servido/mostrado: **324×182 css px, archivo 4000×2667, 1170 kB (jpeg)**.

**Breakdown** (mediana, run 2):

| Subpart | Duración |
|---|---:|
| Time to first byte     | 13 ms |
| Resource load delay    | 604 ms |
| Resource load duration | **10 009 ms** |
| Element render delay   | 173 ms |
| **Total ≈**            | **10 799 ms** |

El resource load duration de 10 s es el downlink del Slow-4G emulado
comiéndose 1.17 MB de JPG. Sobre red real de teléfono va a ser peor.

### `/services`

**Elemento LCP** — LH lo hace flip-flop entre corridas:
- run 1: el mismo `img.cruda-global-nav-brand__logo` del nav (100×40).
- run 2: **no image**, texto — score 1 (informative), `elementRenderDelay 2386 ms` (LCP text-only tras TTFB).
- run 3: `img.cruda-global-nav-brand__logo` (nav).

**Breakdown** (mediana, run 2 — el flip a text-only):

| Subpart | Duración |
|---|---:|
| Time to first byte     | 12 ms |
| Element render delay   | 2386 ms |
| **Total ≈**            | **2398 ms** |

Cuando el LCP cae en el logo del nav (runs 1/3), el breakdown es análogo al de home:
TTFB ~12 ms + resource load delay ~596 ms + resource load duration ~2095 ms + render delay ~19 ms ≈ 2721 ms.

### `/about`

**Elemento LCP** (3/3 corridas): mismo `<img>` del nav (100×40).
`boundingRect` mide 100×40 con `top:20`: acá el logo del nav sí es visible
(no hay Loader corriendo).

**Breakdown** (mediana, run 2):

| Subpart | Duración |
|---|---:|
| Time to first byte     | 15 ms |
| Resource load delay    | 618 ms |
| Resource load duration | 1992 ms |
| Element render delay   | 24 ms |
| **Total ≈**            | **2649 ms** |

---

## 3 · LCP request discovery

Datos por página desde `lcp-discovery-insight` (mediana, run 2).

| Página | fetchpriority=high | Descubrible en HTML inicial | eager (no lazy) |
|---|:---:|:---:|:---:|
| `/`                      | **NO** | sí | sí |
| `/work/karen-mannheim`   | **NO** | sí | sí |
| `/services`              | N/A (LCP texto) | — | — |
| `/about`                 | **NO** | sí | sí |

**El request del LCP está descubrible en el HTML inicial en las 3 páginas
con LCP imagen, pero ninguna declara `fetchpriority="high"`.**
- Home/about: el `<img>` del nav se emite con `srcset` de 1x/2x y sin priority. En mobile Chrome baja `cruda-logo-black-1x.png` (5 kB) — la lectura del audit está sobre `cruda-logo-black-2x.png` (13 kB) porque LH captura el `src` base.
- Karen: el `<img>` del hero (`CaseStudyLayoutV2.tsx:157`) es un `<img>` plano, sin `next/image`, sin `priority`, sin `fetchpriority`, sin `sizes`.

---

## 4 · Render-blocking (mediana, run 2)

Suma de bytes y de wall-clock desde `render-blocking-insight`:

### `/`  (8 CSS · 25.8 kB · wall clock 1180 ms)
| Archivo | Bytes | wastedMs |
|---|---:|---:|
| `_next/static/css/e8e078b7eccedad5.css` | 12 836 | 1180 |
| `_next/static/css/1f0a108948629b31.css` | 4953 | 1030 |
| `_next/static/css/25db9b035c738383.css` | 3093 | 1030 |
| `_next/static/css/747e37e481704dea.css` | 1566 | 880 |
| `_next/static/css/4b60b241f05cefed.css` | 1121 | 730 |
| `_next/static/css/596b0aee4ddc944d.css` | 910 | 880 |
| `_next/static/css/df15c3d67ec704b7.css` | 926 | 880 |
| `_next/static/css/b7fc22da9d06e714.css` | 370 | 880 |

### `/work/karen-mannheim`  (7 CSS · 30.7 kB · wall clock 1178 ms)
| Archivo | Bytes | wastedMs |
|---|---:|---:|
| `_next/static/css/e8e078b7eccedad5.css` | 12 836 | 1178 |
| `_next/static/css/3bc646b0f9623a86.css` | 5252 | 1028 |
| `_next/static/css/1f0a108948629b31.css` | 4953 | 1028 |
| `_next/static/css/a993eecd16bed387.css` | 4025 | 878 |
| `_next/static/css/fe388501f38fa842.css` | 1579 | 878 |
| `_next/static/css/4b60b241f05cefed.css` | 1121 | 728 |
| `_next/static/css/df15c3d67ec704b7.css` | 926 | 878 |

### `/services`  (7 CSS · 22.9 kB · wall clock 1172 ms)
| Archivo | Bytes | wastedMs |
|---|---:|---:|
| `_next/static/css/e8e078b7eccedad5.css` | 12 836 | 1172 |
| `_next/static/css/1f0a108948629b31.css` | 4953 | 1022 |
| `_next/static/css/747e37e481704dea.css` | 1566 | 872 |
| `_next/static/css/d5319e9680806302.css` | 1124 | 872 |
| `_next/static/css/4b60b241f05cefed.css` | 1121 | 722 |
| `_next/static/css/df15c3d67ec704b7.css` | 926 | 872 |
| `_next/static/css/b7fc22da9d06e714.css` | 370 | 872 |

### `/about`  (5 CSS · 22.2 kB · wall clock 1021 ms)
| Archivo | Bytes | wastedMs |
|---|---:|---:|
| `_next/static/css/e8e078b7eccedad5.css` | 12 836 | 1021 |
| `_next/static/css/1f0a108948629b31.css` | 4953 | 871 |
| `_next/static/css/8e79f8d99c3c0a30.css` | 2358 | 871 |
| `_next/static/css/df15c3d67ec704b7.css` | 926 | 871 |
| `_next/static/css/4b60b241f05cefed.css` | 1121 | 721 |

El grueso está en `e8e078b7eccedad5.css` (12.8 kB — probable `app/globals.css`
compilado con todo lo global + Tailwind base) y en `1f0a108948629b31.css`
(4.9 kB — probable segundo global). Ambos aparecen en las 4 páginas.
Los demás son chunks por ruta y por componente.

---

## 5 · Improve image delivery (mediana, run 2)

### `/`
| Archivo | Servido | Mostrado | Ahorro estimado |
|---|---:|---:|---:|
| `/why-now/bust-01-dense.png` (PNG 1024×1024) | 134 kB | 721×721 | **69 kB** |
| `/why-now/book-01-dense.png` (PNG 1024×1024) | 113 kB | 721×721 | ~50 kB |
| `/why-now/bust-02-mid.png` (PNG) | 126 kB | 721×721 | ~40 kB |
| `/why-now/book-02-mid.png` (PNG) | 104 kB | 721×721 | ~30 kB |
| `/why-now/bust-03-min.png` (PNG) | 60 kB | 721×721 | — |
| `/why-now/book-03-min.png` (PNG) | 15 kB | 721×721 | — |
| `/cruda-logo-cream.png` (708×284) | 25 kB | 209×84 | 23 kB |
| `/cruda-logo-black-2x.png` (200×80) | 13 kB | 100×40 | — |

Home carga las 6 PNG de `/why-now/` con `loading="eager"` en la primera
(Act1Hero/Act2WhyNow) y `lazy` en el resto, pero en la corrida de LH del build
mobile las 6 igual descargan a lo largo del load (~550 kB total).

### `/work/karen-mannheim`
| Archivo | Servido | Mostrado | Ahorro estimado |
|---|---:|---:|---:|
| `pezet-05-context-skyline.f0ecf910.jpg` (JPG 4000×2247) | **1143 kB** | 567×378 (324×182 css) | **1142 kB** |
| `/cruda-logo-cream.png` (708×284) | 25 kB | 209×84 | 23 kB |
| `/cruda-logo-black-2x.png` (200×80) | 13 kB | 100×40 | — |

Karen sirve 1.17 MB de JPG para pintar un thumb hero de 324×182 css px.
Escalar al ancho mostrado + servir AVIF/WebP debería bajar esa imagen a
< 40 kB sin pérdida visible.

### `/services`
| Archivo | Servido | Mostrado | Ahorro estimado |
|---|---:|---:|---:|
| `/cruda-logo-cream.png` (708×284) | 25 kB | 209×84 | 23 kB |
| `/cruda-logo-black.png` (708×284) | 25 kB | 420×168 (footer) | 16 kB |
| `/cruda-logo-black-2x.png` (200×80) | 13 kB | 100×40 | — |
| `/cruda-logo-cream-2x.png` | 17 kB | — | — |

Sin imagen LCP: el bottleneck acá es CSS render-blocking + hydration gate.

### `/about`
| Archivo | Servido | Mostrado | Ahorro estimado |
|---|---:|---:|---:|
| `fran-herrera.webp` (portrait) | 52 kB | ~ | — |
| `/cruda-logo-cream.png` | 25 kB | 209×84 | 23 kB |
| `/cruda-logo-black.png` | 25 kB | 420×168 (footer) | 16 kB |
| `/cruda-logo-black-2x.png` | 13 kB | 100×40 | — |

El retrato de Fran ya está en `.webp` y a peso razonable.

---

## 6 · JS / CSS que fuerza `opacity:0` o `visibility:hidden` en la primera pintura

Barrido del árbol de estilos y componentes:

| # | Archivo · línea | Selector · efecto |
|---|---|---|
| 1 | `app/globals.css:504` | `@media (scripting:enabled) { .page-root:not(.ready) { opacity: 0 } }` — **gate global del `<main>` en todas las páginas hasta que React hydrate. El nav queda fuera del wrapper (`app/layout.tsx:230`) y por eso su logo aparece antes que el resto.** |
| 2 | `src/components/PageShell.tsx:80,84-86,220` | `useState(false)` → `useEffect setReady(true)` — toggle que suelta el opacity anterior. Se ejecuta post-hydration del client component. |
| 3 | `src/components/home/acts.css:160` | `.js .act1 .beat { opacity: 0 }` — home Act1 (h1 + phrase). Neutralizado en mobile por F48 (`acts.css:525`), pero el gate `.page-root` sigue mandando. |
| 4 | `src/components/home/acts.css:168` | `.js #act2 .beat:not([data-beat="1"]) { visibility: hidden }` — beats 2–5 del Act2. Fuera del primer fold en mobile, no toca al LCP. |
| 5 | `src/components/home/acts.css:328,465,557` | `.act2__art { opacity: 0 }` (arts 2–5). El primer art queda opaco por `:first-child { opacity: 1 }`. Off-fold. |
| 6 | `src/components/motion/planes.css:44` | `.js [data-r] { opacity: 0; transform: translateY(22px) }` — todo lo etiquetado con `data-r` empieza invisible. Neutralizado en mobile por `app/globals.css:169-174` (`[data-reveal]` opacity 1) pero **`[data-r]` no está cubierto por esa regla** — sigue siendo `.js [data-r]` en mobile. Off-fold en home (`stack` empieza después del hero), pero relevante para about (`.page-root` gate ya lo cubre). |
| 7 | `app/globals.css:543` | `[data-reveal="text"] { opacity: 0; transform: translateY(16px) }` — case studies + about. Neutralizado en mobile por `app/globals.css:170-174` (`@media (max-width: 767px), (pointer: coarse)` fuerza `opacity: 1 !important`). |
| 8 | `src/components/home/work-card.css:94,176` | work-card arrow + scope · opacity 0 hasta hover. Off-fold. |
| 9 | `app/globals.css:461` | loader letter · animation `loader-line-in` a partir de opacity 0. Solo activo mientras el Loader está montado (home). |

**La causa dominante para /, /services y /about es la fila 1 — el gate global
`.page-root:not(.ready)`.** Mientras React no hidrata, todo lo que está
dentro de `<main>` es invisible; el navegador reporta el logo del nav (que
está fuera del wrapper) como LCP.

Karen es distinto: el hero `<img>` está adentro del `<main>`, pero es tan
grande vs. el logo del nav que Chrome lo elige igual como LCP a pesar del
gate. La demora acá es puro peso de imagen + falta de priority, no el gate.

---

## 7 · Por qué el loader corre en rutas distintas de `/`

**Verificación de código** en `src/components/Loader.tsx`:

1. `layout.tsx:230` monta `<Loader />` como client component antes del `<Nav />` y del `<PageShell>`. `Loader.tsx:101` inicia `useState(true)` → el árbol renderiza el `.loader` en el primer paint.
2. En `useEffect` (`Loader.tsx:103-172`):
   - `prefers-reduced-motion: reduce` → `setVisible(false)` inmediato (return).
   - `navigation.type === 'back_forward'` → `setVisible(false)` inmediato.
   - **F48 mobile gate** (`Loader.tsx:128-147`) — bajo `pointer:coarse`, `max-width:767px` o `reduce`:
     - `if (!isHomePathname()) { setVisible(false); return }` (**skip fuera de `/`**)
     - `if (hasUtmParams()) { setVisible(false); return }`
     - `sessionStorage['cruda-loader-seen'] === '1'` → `setVisible(false)` (una vez por sesión)
     - else: `sessionStorage.setItem('cruda-loader-seen', '1')` y sigue.
3. Bajo el gate mobile, timers cortos: `HOLD_MS_MOBILE=400` + `EXIT_MS_MOBILE=400` + `UNMOUNT_BUFFER_MS=50` = 850 ms total.

**Conclusión: en mobile el loader NO corre fuera de `/`. Sí se renderea el
markup del `.loader` en el HTML inicial (SSR, antes de que el `useEffect` se
ejecute), pero como React hidrata en decenas de ms, el nodo se desmonta antes
de que Chrome anote un LCP.** El comportamiento de karen/services/about
confirma esto: sus LCP no es el loader ni el logo del loader — es el hero (karen)
o el logo del nav (services/about) o texto (services una de cada tres corridas).

El loader **sí impacta a `/` en mobile** (~850 ms de fondo `--ink` cubriendo
el hero), pero eso está dentro del presupuesto original de la F22 (< 1.2 s en
mobile) — el problema no es el loader corriendo demás sino que después del
loader el gate `.page-root` sigue esperando la hidratación para levantar
opacity a 1 sobre el resto.

---

## Hipótesis A / B / C — ¿el breakdown las contradice?

| Hipótesis | Estado | Evidencia |
|---|---|---|
| **A** — Content del primer fold sale a `opacity:0` / `visibility:hidden` al load | **CONFIRMADA como causa dominante en /, /services, /about** | `.page-root:not(.ready) { opacity: 0 }` global (§6 fila 1). El nav está fuera del wrapper y por eso su logo se convierte en el LCP fabricado. |
| **B** — Loader corre fuera de `/` o dura demás | **FALSADA** | El código lo bloquea fuera de `/` (§7). En `/` mobile son 850 ms — dentro del margen. No es la primera causa. |
| **C** — El LCP image (hero de case study) no tiene `priority` ni formato moderno | **CONFIRMADA como causa dominante en karen** | 1.17 MB JPG, sin `next/image`, sin `fetchpriority`, sin `sizes`, servido a 324×182 css px (§2, §3, §5). Vive en `CaseStudyLayoutV2.tsx:157` → aplica a **todos** los cases F33 (Karen, Mike, José, Girish, Jack, Confidential). |

**No se contradicen las hipótesis. Se refinan:**

- El culpable de LCP en home/services/about **no** es un `opacity:0` puntual
  sobre el h1 — es el **gate global `.page-root:not(.ready)`** que apaga
  todo lo que está adentro del `<main>` hasta la hidratación de React.
  Removerlo (o al menos apagarlo en la primera pintura del server render)
  desbloquea el LCP real (h1 del hero) sin tocar el resto de los reveals
  (ya están neutralizados en mobile por las media queries F48).
- En karen el problema es puro peso de imagen. Migrar el `<img>` del hero
  a `next/image` con `priority` + `sizes` + AVIF/WebP debería bajar el LCP
  de ~10.8 s a rango 2-3 s por sí solo.
- Los 1 s + de CSS render-blocking (§4) empujan el `resourceLoadDelay` de
  ~600 ms de forma consistente en las 4 páginas. Es la segunda palanca, no
  la primera.

---

## Hallazgo adicional (durante §3.2) · nav CSS no llega en el server render

Al ejecutar §3.2 apareció una segunda causa de shift que estaba enmascarada
por el gate original: **el `<style jsx global>` de `Nav.tsx` (client
component) no se emite en el HTML server-rendered en Next.js 14 App
Router.**

Verificado con `curl -s http://localhost:3013/ | grep -oE 'position\s*:\s*fixed'`
→ 0 matches en el HTML servido. Sólo aparece un `.cruda-global-nav { view-transition-name: cruda-nav }` que viene de una CSS chunk regular. Todo el
resto de la CSS de la nav (position, flex, padding, colores, hover)
llega junto con el bundle JS.

Consecuencia con el gate `.page-root` off en mobile:
1. Primer paint (t≈2 s en Slow-4G): nav render sin `position: fixed`, ocupa
   169.5 px de alto en flow estático. `.page-root` empieza pintado en
   `y = 170`.
2. Hidratación (t≈3.7 s con CPU 4× throttling): styled-jsx inyecta el CSS
   completo, nav se vuelve `position: fixed`, `.page-root` sube a `y = 0`.
3. Chrome contabiliza esa subida como layout shift ≈ 0.206.

**Reporte técnico:** este es un problema estructural del cliente-side CSS
de `Nav.tsx`. La solución de fondo es sacar la CSS de la nav de
`<style jsx global>` y ponerla en un archivo `.css` real (o CSS module),
para que Next.js la incluya en las stylesheets emitidas en el HTML
servido junto con el resto. Fuera del scope de F49.

**Fix quirúrgico aplicado en §3.2:** las reglas mínimas que evitan el
shift (`position: fixed`, `top/left/right`, `z-index`, `display: flex` del
`.cruda-global-nav-in`, y `height: 40px` del logo) se replicaron en
`app/globals.css` — que sí se emite server-side. La cascada CSS deja
que la versión de styled-jsx (que llega en la hidratación) coexista sin
conflictos.

Segundo shift chico (footer wordmark 96 px) se resolvió agregando
`width={708}` + `height={284}` al `<img>` del footer + `loading="lazy"`
(sub-ítem del layout-shift audit de LH).

## Recomendación de secuencia para el Paso 2

1. **§3.2 primero** (quitar el gate `.page-root:not(.ready)` de la primera
   pintura y auditar que no haya FOUC en desktop): esto solo debería llevar
   home/services/about a < 2.5 s en mobile.
2. **§3.3** (LCP image en karen + next/image + priority + sizes + AVIF):
   Karen a < 2.5 s.
3. **§3.4** (render-blocking + JS): margen restante para pisar 2.0 s en
   home/services/about.
4. **§3.1** (loader) queda como refinamiento: el gate mobile ya cumple,
   pero simplificar los timers y descargar el path desktop puede subir el
   TBT en `/`.

**Todo esto queda en espera del OK de Fran antes de tocar código.**
