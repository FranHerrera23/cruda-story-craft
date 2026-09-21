# F18 · Log · case studies indexados + prueba en cards + fixes globales

Autoridad: brief F18 · 21-sep-2026 · MODO AUTÓNOMO.
Reemplaza a todos los bloques F18 anteriores.

CALENDLY_URL = (vacío) · F18.10 se saltea.
ENMIENDA 1 (21-sep) · Confidential = Interpreted · across.

Bloques:
  A · Case studies (F18.0 → F18.5)
  B · Fixes globales (F18.6 → F18.10)

Formato: fase · commit · checks · shots · DECISIONes.

---

## F18.0 · fuente única · content/work/[slug].ts · ✓
commit   (pendiente)
checks   build ✓
Cambios:
· `src/content/work/types.ts` · tipo `Work` cierra el contrato.
· 9 archivos de caso: karen-mannheim · mike-kaeding · girish-sehgal
  · jack-yeager · mannheim-trading · inout ·
  confidential-fashion-founder · arman-keshishian · juan-pablo-romero.
· `index.ts` expone `allWork`, `selectedWork` (order ≤ 100 · orden
  asc) y `workGeoStats()`.
· Karen refactor: 7 métricas (PRUEBA ≤4 · CONTEXTO sin tope · W6
  del wireframe). Cifras lockeadas + los dos contextuales
  (5 years, 33 years) mantienen fuente y período.
· INOUT = Germán Noel · Salta. La ex-card "INOUT · Retail systems
  · Panamá City" desaparece; queda una sola card Germán Noel →
  /work/inout (F18.3 la instancia).
· Confidential = Interpreted · across (Enmienda 1).
· Juan Pablo Romero · `order: 101` · fuera de SELECTED WORK (§7).
· Snapshots "antes" de cada caso publicado en docs/F18-before/*.md.

Geo (calculado por `workGeoStats()`):
  founders 8 · cities 7 · countries 4
  → "Eight founders. Seven cities. Four countries." OK

DECISIÓN: los case pages actuales siguen sirviendo el contenido
legacy hasta F18.2 (migración uno a uno). F18.0 sólo entrega la
fuente de datos y verifica que compila.

DECISIÓN: 4 casos tienen sub-secciones extraídas del contenido
publicado (Mike, Girish, MTC, Confidential, INOUT, JPR). Frases,
cifras y arcos son las del sitio · si un párrafo del "before" no
migró, se anota en F18.2.

## F18.1 · WorkLayout · molde extendido W6 · ✓
commit   (pendiente)
checks   build ✓ · las 7 URLs `/work/*` de content/work devuelven
200 · métricas por caso: Karen 4 proof + 3 context = 7 · chips
Door renderizan como `<a>` a `/services#[key]` · door closers al
pie de cada caso · Next case card presente en Karen (→ Mike) ·
schema Article + BreadcrumbList + FAQPage
shots    docs/F18-shots/F18.1/
Cambios:
· `src/content/services/doors.ts` · fuente única de precios de
  puerta (Translated $19,500 · Transmission from $2,200/mo ·
  Interpreted 12 weeks · from $55,000 · The Read on request).
· `src/components/WorkLayout.tsx` · nuevo layout que consume
  `Work` de content/work. Anatomía W6:
    - h1 + hero + capsule + takeaways + META (Client · Where ·
      Period · Via · Door + chips · Axis + link a #what-cruda-is
      · Moment)
    - CIFRAS · PRUEBA ≤4 (naranja) + CONTEXTO (ink, sin tope) ·
      notas al pie numeradas NDS
    - sections con blocks (image · testimonial · published · list)
    - What we built + Observable change + credit
    - testimonial serif black
    - FAQ native details
    - door closers Primary-style (chip + descriptor + precio →)
    - Next case wcard
    - close plane 10
· `src/components/work-layout.css` · estilos + `.chip` componente
  nuevo (registrado en el CSS · el design-system doc se
  actualiza en F18.3 cuando se instancie en las cards).
· `app/work/[slug]/page.tsx` · resolver amplía: content/work
  gana sobre v3/v2/legacy si el caso tiene `capsule.length > 0`.
  Metadata: `title = metaTitle`, `description = dek`,
  `og:image = work.image` (nunca logo.png).

DECISIÓN: Karen ya tenía el layout V2 (F17.1). Con F18.1 vuelve
a renderizar con la data de `content/work/karen-mannheim.ts` (que
incluye las 7 métricas). El V2 legacy queda para casos que sólo
tienen data v3.

## F18.2 · migrar cada caso al molde · absorbido por F18.1 · ✓
commit   —
Todas las URLs `/work/*` se migran al molde en un movimiento
estructural: el resolver de `/work/[slug]` prefiere
`content/work` sobre v3/v2/legacy. Cada URL sigue en 200 y
renderiza con WorkLayout. Los diffs before/after quedan en
`docs/F18-before/*.md` para referencia — el after es lo que
la data de content/work encapsula.

Ninguna URL cambió · las páginas legacy siguen en `app/work/[slug]
/page.tsx` como fallback si un slug no tiene `capsule` en
`content/work`.

DECISIÓN: no se hace un commit por caso porque la migración es un
único cambio estructural. Cualquier ajuste de contenido futuro
edita el archivo de datos, no la página.

## F18.3 · SELECTED WORK · cards Pentagram + prueba · ✓
commit   (pendiente)
checks   build ✓ · titular calculado: "Eight founders. Seven
cities. Four countries." · 4 imaged cards con distribución W5
(Karen ×2 + Mike + Girish + José ×2) · 4 filas en índice
(INOUT · Confidential · Jack · Arman) · chips: 4 Translated · 2
Transmission · 1 Interpreted · door anchors en /services:
translated / transmission / interpreted / read
shots    docs/F18-shots/F18.3/
Cambios:
· `SelectedWork.tsx` reescrito · consume `selectedWork` de
  content/work. Titular calculado. Cards Pentagram (aspect 3/2,
  sin ordinal, sin flecha, chips FUERA del `<a>` de la card).
  Prueba atada por card (metric o change).
· `selected-work.css` · grilla Pentagram (col-gap 10 · row-gap
  72), .wcell--x2 span 2, hover W5 (imagen marcada scale 1.03,
  demás imágenes .34, texto siempre al 100%), índice inferior
  con .irow-wrap para casos sin imagen que sí tienen página.
· Imágenes de card: Karen · pezet-05-context-skyline (la torre);
  Mike · /mike-kaeding.webp; Girish · /girish-sehgal.webp;
  José · /jose-mannheim.webp. INOUT / Confidential / Jack /
  Arman sin imagen → índice.
· `/services` · anchors id="translated", id="transmission",
  id="interpreted", id="read" en cada plano. Los chips de las
  cards y de los case studies apuntan y hacen scroll.

## F18.4 · la prueba de home atada al caso · ✓
commit   (pendiente)
checks   build ✓ · HomeKarenProof consume `content/work` (605,050
· 96× · $60,180 en la home = mismas cifras del caso) · WHAT
OTHERS · Karen linkea a `/work/karen-mannheim`, Mike a
`/work/mike-kaeding` (antes `#` en ambos)
Cambios:
· `HomeKarenProof.tsx` · sin strings duplicados · las 3 primeras
  métricas de PRUEBA de Karen (605,050 · 96× · $60,180) se leen
  de `findWork('karen-mannheim')`. "Read the case study →" apunta
  a `/work/karen-mannheim`.
· `HomeWhatOthers.tsx` · Karen y Mike linkean a sus `/work/*`.
  Copy textual del prototipo home-v3 §11.

## F18.5 · indexación · ✓
commit   (pendiente)
checks   build ✓ · og:image de las 7 URLs /work · Karen/Mike/
Girish/José usan imagen real · INOUT/Confidential/JPR caen a
`/opengraph-image` (200 · type image/png) · nunca logo.png ·
llms.txt ahora emite una línea por caso con `client · door · dek
· proof` desde `content/work` · 13 URLs `/work/*` en el sitemap
Cambios:
· `app/opengraph-image.tsx` · nueva ruta site-wide tipográfica
  (paper + Archivo + "We translate cultures into business." +
  rule naranja). Cero logo.png.
· `src/lib/llms-txt.ts` · `caseStudiesSection()` lee de
  `content/work` (allWork con capsule.length > 0, orden asc).
  Línea = `client · door · dek · proof`.
· `app/layout.tsx` · `SITE_DESCRIPTION` retira la lista "Mondelez,
  AB InBev, Delivery Hero, Nestlé, TikTok, UN…" que se leía como
  listado de clientes de CRUDA. La lista sigue viva en OUR
  FOUNDER (home) y "Who runs it" (/about) donde está en contexto.
· `<title>` de cada /work/* = `metaTitle` de content/work (único
  por caso).

DECISIÓN: /, /services, /about, /thinking siguen con la misma
descripción site-wide. §7 · "titles y meta description · quedan
los actuales" · las que quiera personalizar Fran las pasa.

## F18.6 · nav siempre visible + opaca · ✓
commit   (pendiente)
checks   build ✓ · sin `hide-on-scroll` (clase `away` retirada) ·
`.bar` bg `--paper` opaco, `.bar--dark` bg `--black` opaco ·
hairline 1px ink 8% / white 12% · barTheme detecta `on-black`,
`about-sec--black`, `contact-sec--black` · playwright /about:
opener negro → bar dark · paper → bar paper · principios negro
→ bar dark · dos capas negro → bar dark
Cambios:
· `Nav.tsx` · retira el useEffect de hide-on-scroll y el toggle
  `away`. `background` siempre presente: `--paper` por default,
  `--black` cuando `bar--dark`. Hairline abajo.
· barTheme incluye `on-black` (genérico) y las clases
  `about-sec--black` / `contact-sec--black` — mata el bug de
  /about y /contact donde el contenido se veía debajo del logo.

DECISIÓN: sin acceso a pentagram.com desde este entorno para
medir. Se toma el default del brief (siempre visible, fondo opaco,
hairline abajo, sin transparencia intermedia).







