# F25 §5 · INOUT + José · visuales a restaurar

Fecha: 23-sep · rama `f25-fixes` · **este archivo va a Fran para firma antes de restaurar nada.** No se suben archivos ni se agregan bloques `image` a `content/work/*.ts` hasta que Fran diga cuáles van.

Fuentes revisadas:
- `docs/F18-before/inout.md` (HTML dump del molde previo · 21-sep)
- `docs/F18-before/mannheim-trading.md` (idem)
- `git show 2dc98c9:src/content/work/inout.ts` (base aprobada)
- `git show 2dc98c9:src/content/work/mannheim-trading.ts`
- `git show f18-after-backup:public/` (branch de backup)
- Estado actual de `public/`

Resultado del inventario en `public/` para estos dos casos:
- `inout-sliding-wall.jpg` · usado como hero de INOUT.
- `jose-mannheim.webp` · usado como hero de MTC.
- **Ningún otro asset** con nombre `inout*`, `insiders*`, `noel*`, `cristalizando*`, `mannheim-trading*`, `mtc*` o `jose*` existe hoy ni existió en `f18-after-backup` ni en `2dc98c9`.

Los "visuales que faltan" son piezas que la versión pre-F18 de la página **describía en texto** pero que no tienen archivo en el repo. Cada una necesita que Fran confirme si va, quién la pasa y en qué formato antes de restaurarla.

---

## A · INOUT · piezas descritas en `docs/F18-before/inout.md` sin archivo en repo

| # | Pieza | Cita textual del dump | Formato sugerido |
|---|---|---|---|
| A1 | Diagrama de construcción del logo · grilla modular | "Construcción 22X/3X · Morfología del logo sobre grilla modular — proporciones fijas por múltiplos de X." | SVG o PNG cuadrado con la grilla visible. |
| A2 | Diagrama de morfología de los dos ejes | "Morfología de los dos ejes · Contemplación y movimiento en una figura. La marca traza una apertura con un lente en el centro." | SVG. |
| A3 | Swatch de paleta · azul eléctrico | "Pantone 4736 C · #1600FF · Azul eléctrico" | Bloque de color con label chico. |
| A4 | Swatch de paleta · verde cemento | "Pantone 418 C · #3E4B41 · Verde cemento" | Idem. |
| A5 | Especificación tipográfica | "FRAMELESS SLIDING DOORS INOUT · Montserrat · tracking 14pt" | Composición tipográfica sobre paper. |
| A6 | INSIDERS #01 · Salvador Pepi | "#01 Salvador Pepi · Infinito al Cuadrado · agosto 2021" | Portada del episodio (video still o cover). |
| A7 | INSIDERS #02 · Sergio Cabrera | "#02 Sergio Cabrera" | Idem. |
| A8 | INSIDERS #03 · Horizontal Arquitectos | "#03 Horizontal Arquitectos" | Idem. |
| A9 | Interior con puerta INOUT · El Tipal, mayo 2022 (Male Figueroa · Neobox) | "Interiors · El Tipal, mayo 2022, con Neobox" | Foto arquitectónica, "toma desde adentro" según el principio del brief pre-F18. |

**Preguntas de firma:**
1. ¿Cuáles de A1–A9 van al caso restaurado? (marcar) — puede ser un subset.
2. ¿Los archivos los pasa Fran? ¿O CRUDA los rehace? En qué formato (SVG vs PNG, ratio 3:2 vs 4:5).
3. ¿En qué sección viven?
   - Sugerido: A1–A5 en "The identity system." · A6–A8 en "INSIDERS." · A9 opcional en "The identity system." como cierre.

---

## B · José · piezas descritas en `docs/F18-before/mannheim-trading.md` sin archivo en repo

El dump pre-F18 de MTC **no tiene bloques visuales explícitos** más allá del retrato (`jose-mannheim.webp`, ya en repo). Las secciones "What sixty years built" y "And what the market did about it" son listas de cifras/hitos en texto plano. Las "voces" ("The one that starts in 1965" · "The one that starts before 1965" · "The second voice") son transcripciones de posts de LinkedIn, no imágenes.

Posibles piezas que Fran podría querer sumar en el molde nuevo (F25 §4 hero retrato + meta al lado deja espacio para figuras alineadas al cuerpo del caso):

| # | Pieza | Justificación | Formato sugerido |
|---|---|---|---|
| B1 | Screenshot del post en LinkedIn de José · versión inglés ("The one that starts in 1965") | La cita del post es un hito · una captura respaldaría "publishing under his own name". | PNG del feed real, sin recorte del avatar ni de la fecha. |
| B2 | Screenshot del post en LinkedIn de José · versión español ("The one that starts before 1965") | Idem. | PNG. |
| B3 | Screenshot del post de Karen Mannheim mencionado como "the second voice" | Anclaría la mecánica de red narrativa. | PNG. |
| B4 | Cover / product shot de MTC · polycarbonato · poliuretano | Si MTC tiene cualquier pieza pública. | Foto de producto / cover en 4:5. |
| B5 | Retrato secundario de José en contexto (fábrica, oficina) | Alterna al retrato ya usado. | Foto 4:5. |

**Preguntas de firma:**
1. ¿Alguna de B1–B5 va? Todas dependen de que Fran las tenga o pueda sacarlas.
2. ¿Screenshots de posts propios de LinkedIn (José, Karen) están OK para publicar? ¿Con qué recorte?

---

## C · Lo que NO se restaura sin firma explícita

- Cualquier imagen que nombre o muestre a un cliente del socio industrial confidencial · queda fuera aunque Fran nos la pase.
- Screenshots de conversaciones privadas.
- Fotos que muestren caras que no sean José o Karen sin release.

---

## D · Estado del caso hoy · para contexto

**INOUT** (`/work/inout`):
- Hero: `/inout-sliding-wall.jpg` (paisaje).
- Body: 3 secciones sólo texto, sin `blocks: [{ kind: 'image', ... }]`.
- Si Fran firma A1–A9 (o subset), se agrega el array `blocks` a la sección correspondiente y se suben archivos a `public/inout/` (o donde diga).

**MTC / José** (`/work/mannheim-trading`):
- Hero: `/jose-mannheim.webp` (retrato · con F25 §4 ahora se lee en cols 1–5 + meta cols 7–12).
- Body: 3 secciones sólo texto, sin bloques.
- Si Fran firma B1–B5, mismo mecanismo.

## E · Próximo paso

- Fran marca en A y B qué va.
- CRUDA (o Fran) sube archivos.
- Rama nueva `f25-visuals-restore` o (más limpio) se suma al F26 §A cuando toque el molde: los `blocks` ya son parte del `sections[]` type.
