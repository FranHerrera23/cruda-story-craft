# Ensayos · flujo, contratos y verificación

Fran + CC · F53 · 30-sep-2026.

Este documento describe cómo viven los ensayos en el sitio,
qué contratos tiene cada archivo, y qué scripts se corren
antes de dar por terminada una migración o un ensayo nuevo.
Nada de tablas ni verificaciones a mano · siempre pasa por un
script del repo.

## 1 · Ubicación

```
content/essays/<slug>.md               ← source of truth (Fran)
public/essays/<slug>/<hero>.webp       ← foto del ensayo (Fran)
src/lib/essay-mold/parse.ts            ← importer .md → Essay
src/content/essays/index.ts            ← combina .md + .ts legacy
scripts/essay-check.mjs                ← check por archivo
scripts/essay-parity.mjs               ← paridad AST vs main
scripts/essay-og.mjs                   ← genera og.jpg 1200×630
scripts/essay-migrate.mjs              ← .ts → .md (uso puntual)
```

Un `.md` puede ser monolingüe (una sección `## English:` o
`## Español:`) o bilingüe (las dos, mismo archivo). El nombre
del archivo es el slug del EN si hay par, o el único slug.

## 2 · Contrato del .md

Frontmatter YAML acotado (parser en `src/lib/essay-mold/parse.ts`):

| key            | tipo    | obligatorio                     |
|----------------|---------|---------------------------------|
| `slug_en`      | string  | si hay sección `## English:`    |
| `slug_es`      | string  | si hay sección `## Español:`    |
| `date`         | ISO     | sí                              |
| `meta_en`      | ≤ 160   | si hay `## English:`            |
| `meta_es`      | ≤ 160   | si hay `## Español:`            |
| `capsule_en`   | string  | no (fallback: `meta_en`)        |
| `capsule_es`   | string  | no (fallback: `meta_es`)        |
| `hero`         | filename| no                              |
| `hero_credit`  | string  | no                              |
| `alt_en`       | string  | no (F53.1 lo autogenerará)      |
| `alt_es`       | string  | no                              |

`capsule_*` es el bloque AEO largo (sin límite). Va a on-page bajo
`--cream` cuando no hay hero + al JSON-LD `description`.
`meta_*` va a `<meta name="description">` y a `og:description` /
`twitter:description`. Los dos campos son distintos por diseño:
el AEO puede ser largo; la meta del `<head>` no.

## 3 · Sintaxis del cuerpo

Reglas fijas, no interpretadas por markdown estándar:

| markdown              | block type              |
|-----------------------|-------------------------|
| línea normal          | `{ type: 'p' }`         |
| `*texto*` inline      | `<em>texto</em>` en `html` |
| `**texto**` inline    | `<strong>texto</strong>`  |
| `"texto"`             | comillas curvas en render |
| `---` en línea sola   | `{ type: 'separator' }`   |
| `### X`               | `{ type: 'h2', text: X }` |
| `> X`                 | `{ type: 'pull', text: X }` |
| `> X\n> — Y`          | `{ type: 'quote', text: X, attribution: Y }` |
| `>> X`                | `{ type: 'quote', text: X }` (sin atribución) |
| `- X\n- Y`            | `{ type: 'checklist', items: [X, Y] }` |
| primera *itálica* de una línea | dek (fuera del body)   |
| última itálica que menciona "newsletter"/"subscribe"/"suscribí" | linkea a `/newsletter` |

Firma de colofón (`EVERYTHING IS A NARRATIVE.`, `TODO ES UNA
NARRATIVA.`, `thecruda.com`): eliminada por diseño en F53. No hay
sintaxis .md que la reproduzca.

Tipografía uniforme (§F53 §7): apóstrofes rectos entre letras se
normalizan a `’`, comillas dobles se abren/cierran como `“`/`”`.
`essay:check` compara texto plano ignorando esta conversión y
falla si cualquier otro carácter cambia.

## 4 · Hero

- Formato: WebP.
- Ancho mínimo: 1200 px (`HERO_MIN_WIDTH` en `essay-check.mjs`,
  Fran 1-oct · bajado de 2400). A 1440 viewport el hero mide 1360
  px de display (col 1/-1), así que 1200 cubre bien la mayoría de
  pantallas sin bloquear ensayos con fuentes bajo el ideal retina.
- Aspect ratio: 16:9 ±2%.
- Vive en `public/essays/<slug>/<filename>`.
- El `<slug>` acá es el basename del `.md`, no un slug por idioma.
- Alt: `alt_en` / `alt_es`. F53.1 va a autogenerar el alt vía LLM
  de visión; hasta entonces lo llena Fran, o el check lo marca
  pendiente.

### 4.1 · og:image

`public/essays/<slug>/og.jpg` (1200×630, quality 80, mozjpeg) se
genera con `scripts/essay-og.mjs` desde el hero WebP. Si existe,
el metadata de `/thinking/<slug>` lo usa como `og:image` y
`twitter:image`. Si no, cae a `heroImage` (WebP raw) y por último
a `/logo.png`.

Se corre cada vez que se agrega o cambia una foto:

```bash
# todos los ensayos con hero:
node scripts/essay-og.mjs

# uno solo:
node scripts/essay-og.mjs <basename>
```

Los ensayos sin hero se skipean silenciosamente · no hay error.

## 5 · Scripts obligatorios

### 5.1 · Antes de mergear una migración (o un ensayo nuevo)

Cualquier ensayo nuevo o migración debe pasar los dos checks
sin errores. Los outputs se pegan en el reporte tal cual salen
del script; nada de tablas a mano.

```bash
# 1 · Paridad AST vs main (por defecto). Falla si algún ensayo
#     migrado difiere del original en block counts, em/strong,
#     o texto plano.
node scripts/essay-parity.mjs

# 2 · Check por archivo · valida frontmatter, hero, markup parity,
#     y consistencia round-trip de la normalización tipográfica.
for f in content/essays/*.md; do
  node scripts/essay-check.mjs "$f"
done
```

`essay-parity.mjs --base <ref>` compara contra otro ref si hace
falta (por ejemplo un tag previo a la migración de otro corpus).

### 5.2 · Migración de un ensayo legacy

```bash
# Bilingüe (par EN + ES en el mismo .md):
node scripts/essay-migrate.mjs <slug_en> <slug_es>

# Monolingüe (un solo idioma):
node scripts/essay-migrate.mjs <slug>
```

El migrator:
- Extrae el objeto `Essay` del `.ts` original vía `new Function`.
- Convierte `p` / `h2` / `h3` / `pull` / `quote` (con y sin
  atribución) / `checklist` / `separator` al Markdown de §3.
- Elimina bloques `signature` y los reporta en stdout.
- Deriva `meta_*` = primera oración de la cápsula si ≤ 160; si no,
  imprime `NEEDS REVIEW` y Fran escribe la meta a mano.
- Escribe `content/essays/<basename>.md` y crea el directorio de
  hero vacío en `public/essays/<basename>/`.

Después de correr el migrator, siempre pasar `essay-parity.mjs`
antes de commitear.

## 6 · Newsletter (beehiiv, embed hosted · EN only)

F53 §7 (Fran 30-sep) · captura de email vía embed hosted de
beehiiv, no API. El componente `SubscribeForm` (client) vive en
`/newsletter` y al final de cada ensayo EN (`/thinking/<slug-en>`).

Foco 100% inglés (Fran 30-sep · ajuste posterior):
- En ensayos ES no se renderiza el SubscribeForm. La línea de
  newsletter del `.md` se mantiene como antes: párrafo en
  itálica con link a `/newsletter`, generado por el parser
  (`buildNewsletterBlock`).
- No hay formulario ES ni prop `lang`. Si se necesita en el
  futuro, se agrega un componente propio.

Contrato:
- Carga on-demand · IntersectionObserver con `rootMargin: 300px 0px`.
  El `loader.js` de beehiiv NO va en `<head>` ni al cargar la página:
  se inyecta cuando la caja se acerca a la pantalla.
- One-shot por page-view · aunque haya varias cajas, el script se
  inyecta una sola vez (guard `loaderInjected` a nivel de módulo).
  Instancias siguientes sólo añaden el `<div data-beehiiv-form>`
  marker; el MutationObserver interno del loader v3 las levanta.
- Reserva CLS · `min-height: 360` en el contenedor. La caja
  beehiiv v3 mide ~340 px en 390 y ~280 px en 1440.

Form ID (público, no secret): `c7cb08c8-b381-4b1e-a20f-76c86ce39552`.

No hay endpoint server-side de captura. Si en el futuro se
necesita uno (procesamiento previo, atribución custom, antifraud),
se crea un `app/api/<name>/route.ts` nuevo con su proveedor del
momento. Hoy toda la alta pasa por el embed hosted de beehiiv.

## 7 · Guard-rails de push (Fran 30-sep)

"Build limpio" = preview Vercel verde. Nada mergea sin eso.

Scripts:

```bash
npm run typecheck    # tsc --noEmit
npm run essay:check  # tsc + itera todos los .md (exit 1 si falla alguno)
npm run essay:parity # paridad AST vs main
npm run essay:og     # regenera og.jpg 1200×630 (si cambió un hero)
npm run prepush      # typecheck + parity + essay:check + next build
```

Git hook (una vez por dev):

```bash
git config core.hooksPath .githooks
```

Después de eso, cada `git push` corre `npm run prepush` primero.
Exit != 0 cancela el push. Bypass (evitar): `git push --no-verify`.

## 8 · Reporting

Toda tabla de verificación (paridad, metas, pixel-diff, Lighthouse)
se genera con un script commiteado en `scripts/`. El reporte trae
el comando y su salida sin editar. Nada de datos armados a mano ·
un reporte que inventa un valor no verifica nada.

Fran 30-sep · regla del molde para el resto de F53 y para adelante.
