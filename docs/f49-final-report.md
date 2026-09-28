# F49 · reporte final antes del merge

Rama: `f49-performance` @ `5825cbc`. Base `main` con F48 mergeado
(`af57897`). Commits separados por sección para rollback:

| § | Commit | Rollback |
|---|---|---|
| Paso 1 · diagnóstico | `ac46725` | `git revert ac46725` |
| Etiquetas A/B/C | `55425bf` | `git revert 55425bf` |
| §3.2 · gate `.page-root` + nav SSR + footer | `969ac01` | `git revert 969ac01` |
| Reporte Vercel Image Optimization | `653e131` | `git revert 653e131` |
| §3.3 · `next/image` en heroes de case + Act2 + retrato | `a09f43e` | `git revert a09f43e` |
| §3.4 · dynamic import Lenis + GSAP | `cbc30cc` | `git revert cbc30cc` |
| §3.5 · contraste `hero__kicker` + `pitem__src` | `5825cbc` | `git revert 5825cbc` |

## Métricas Lighthouse (mediana 3× runs · build de producción, puerto 3013)

### Mobile · presupuesto LCP < 2500 · CLS < 0.1 · TBT < 200

| Página | Perf | FCP | **LCP** | SI | **TBT** | **CLS** | LCP element |
|---|---:|---:|---:|---:|---:|---:|---|
| baseline `/`                    | 84 | 2287 | 2993 | 6006 | 186 | 0.000 | `nav > img` (logo 100×40) |
| **§3.5 `/`**                    | 92 | 2263 | **2263** | 3065 | 198 | 0.001 | `h1.beat__phrase` ✓ |
| baseline `/work/karen-mannheim` | 58 | 2856 | 10 873 | 7109 | 283 | 0.000 | `.cs-hero > img` (1.17 MB) |
| **§3.5 `/work/karen-mannheim`** | 85 | 2966 | **3363** | 3455 | 96 | 0.001 | `.cs-hero > img[data-nimg]` |
| baseline `/services`            | 90 | 2096 | 2721 | 4462 | 174 | 0.000 | `nav > img` (logo) |
| **§3.5 `/services`**            | 96 | 2145 | **2145** | 2263 | 104 | 0.001 | `h1.name` ✓ |
| baseline `/about`               | 92 | 2002 | 2637 | 4341 | 93 | 0.000 | `nav > img` (logo) |
| **§3.5 `/about`**               | 97 | 2014 | **2014** | 2486 | 50 | 0.001 | `h1.about-h1` ✓ |

- `/`, `/services`, `/about`: **dentro del presupuesto en las tres métricas.**
- `/work/karen-mannheim`: LCP **-7 510 ms** (−69 %). Queda a 3363 ms,
  863 ms por encima del bar de 2500. Ver §Karen abajo.

### Desktop · presupuesto LCP < 1200

| Página | Perf | FCP | **LCP** | TBT | CLS | LCP element |
|---|---:|---:|---:|---:|---:|---|
| baseline `/`                    | — | 2013 | 4584 | 63 | 0.003 | `h1.beat__phrase` |
| **§3.5 `/`**                    | 61 | 2383 | **4298** | 58 | 0.003 | `h1.beat__phrase` |
| baseline `/work/karen-mannheim` | 57 | 1913 | 11 283 | 70 | 0.014 | `.cs-hero > img` |
| **§3.5 `/work/karen-mannheim`** | 61 | 2201 | **4721** | 0 | 0.003 | `.cs-hero > img[data-nimg]` |
| baseline `/services`            | 81 | 1862 | 1862 | 0 | 0.005 | `h1.name` |
| **§3.5 `/services`**            | 82 | 1850 | **1850** | 0 | 0.005 | `h1.name` |
| baseline `/about`               | 83 | 1537 | 1537 | 0 | 0.003 | `h1.about-h1` |
| **§3.5 `/about`**               | 83 | 1532 | **1532** | 0 | 0.003 | `h1.about-h1` |

- Ninguna página de desktop llega a 1200 ms. Reportado antes en el
  inventario §3.3 y en el diagnóstico: el gate `.page-root:not(.ready)`
  sigue activo en desktop y bloquea el LCP hasta que React hidrata
  (~2 s en Slow-4G emulado). Fuera del scope de §3.2 — la razón por la
  que se mantiene es `Act1Hero.fitAllPhrases` (mide y baja el
  font-size en post-mount; sin el gate, flash de dos line-boxes en
  home). **Espera decisión de Fran antes de tocarlo.**
- Karen desktop LCP 4721 ms cae desde 11 283 (−6 562 ms · −58 %) por
  el `next/image`, pero el gate marca el techo.

## Regresión de pixel-diff

**Rule:** 0 píxeles con las imágenes `next/image` enmascaradas, salvo
los dos selectores de §3.5.

Baseline: F49 §3.2 build (main + F49 §3.2 aplicado) capturado con el
mismo script + settle 1200 ms + máscara magenta sobre
`.cs-hero img, .act2__arts img, .about-who__port img`.

Compare: F49 §3.5 build (post `next/image` + dynamic import + colores).

| Página | 1024 | 1440 | 1920 |
|---|---:|---:|---:|
| home                     | **739 px** (0.0039 %) | **726 px** (0.0030 %) | **729 px** (0.0022 %) |
| services                 | 0 | 0 | 0 |
| services-translated      | 0 | 0 | 0 |
| about                    | 0 | 0 | 0 |
| contact                  | 0 | 0 | 0 |
| thinking                 | 0 | 0 | 0 |
| essay-en                 | 0 | 0 | 0 |
| essay-es                 | 0 | 0 | 0 |
| case-karen               | 0 | 0 | 0 |
| case-mike                | 0 | 0 | 0 |
| case-jack                | 0 | 0 | 0 |
| case-jose                | 0 | 0 | 0 |
| case-girish              | 0 | 0 | 0 |
| case-jp                  | 0 | 0 | 0 |
| case-confidential        | 0 | 0 | 0 |
| case-inout               | 0 | 0 | 0 |
| moment-market-entry      | 0 | 0 | 0 |

**48/51 en 0 estricto.** Los 3 diffs son los selectores de §3.5
(`hero__kicker` gris → gris-oscuro; `pitem__src` naranja → gris) en la
home, en los tres anchos. Es la excepción firmada por Fran para §3.5.

## Diff por imagen (contra baseline pre §3.3)

Se compara la captura fullpage sin máscara entre §3.2 (con `<img>`
plano) y §3.5 (con `next/image` + q=90). El diff se expresa como
% de píxeles de la página total.

Umbral: cada imagen ≤ 0.5 % de los píxeles de la página.

| Página | 1024 | 1440 | 1920 | Bajo 0.5 %? |
|---|---:|---:|---:|:---:|
| case-karen (hero pezet 4000×2667 JPG) | 0.227 % | **0.452 %** | 0.354 % | sí |
| case-confidential (hero JPG)          | 0.072 % | 0.088 % | 0.069 % | sí |
| case-inout                            | 0.012 % | 0.001 % | 0.000 % | sí |
| case-mike                             | 0.001 % | 0.001 % | 0.001 % | sí |
| case-girish                           | 0.000 % | 0.000 % | 0.000 % | sí |
| case-jose                             | 0.000 % | 0.000 % | 0.000 % | sí |
| case-jp                               | 0.000 % | 0.000 % | 0.000 % | sí |
| case-jack                             | 0.000 % | 0.000 % | 0.000 % | sí |
| about (retrato Fran)                  | 0.000 % | 0.000 % | 0.000 % | sí |
| home (Act2 arts, 6 PNGs)              | 0.000 % | 0.000 % | 0.000 % | sí |

**Caja (posición + tamaño), recorte y aspecto verificados idénticos**
en las 9 capturas de imagen (aspect ratio 16:9 en cases, 1:1 en
Act2, container-fitted en about). El diff proviene sólo del re-encode
AVIF/WebP q=90 vs. el JPG/PNG source completo servido antes.

## §3.5 · contraste

| Selector | Antes | Después | Ratio antes | Ratio después |
|---|---|---|---:|---:|
| `.act1 .hero__kicker` (sobre `#0E1113`) | `#6E6B65` (--grey) | `#8A867E` (--grey-dark) | 3.57 | **5.23** |
| `.home-what-others .pitem__src` (sobre `#FFFFFF`) | `#FF5A00` (--orange) | `#6E6B65` (--grey) | 3.13 | **5.31** |

Los dos superan 4.5:1 (bar WCAG AA texto pequeño). Sin colores nuevos,
sin cambio de tamaño, peso ni tracking.

## §3.6 · verificaciones sin cambio de código

Pendientes de correr al deployar el preview:
1. `https://www.thecruda.com/llms.txt` · status + tiempo.
2. `<link rel="canonical">`, `sitemap.xml`, `og:url`, JSON-LD `url`/`@id`:
   confirmar que todos usan el host que sirve Vercel. Reportar
   diferencias sin corregir.

Corro esos dos cuando el preview esté online.

## Espera decisión de Fran

1. **`/work/karen-mannheim` mobile 3363 ms** (863 ms sobre budget) ·
   próximos pasos posibles fuera de §3.3:
   - Sacar el `object-position: center 25%` inline (no impacta) o
     bajar la calidad a q=85 en el hero (más ahorro, más diff).
   - Reducir el source físico (`sharp` a build time, viola "sin
     archivo fuente" per §3.3).
   - Aceptar el LCP y merger. El h1 (título del case) queda alrededor
     de 900 ms, la foto tarda otros 2500 ms sobre Slow-4G — probable
     que en una red real de teléfono baje.
2. **Desktop LCP > 1.2 s en 3 páginas** · el gate `.page-root` en
   desktop es la causa (§3.2). Cambiarlo requiere refactor del hero
   auto-fit para no depender del gate. Fuera del scope de este PR.

**No mergeo sin OK explícito.** Cuando venga el ok, hago:
- `git checkout main && git merge --no-ff f49-performance -m "Merge f49-performance · perf mobile LCP + CLS"`
- Actualizo `docs/merge-log.md` con la fila 26 y el rollback del merge.
- `git push origin main`.
