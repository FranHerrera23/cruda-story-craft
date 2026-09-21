# F11 · Log de ejecución autónoma

Bitácora de la corrida F11.0 → F17.1, iniciada 21-sep-2026.
Autoridad: `cruda-brief-autonomo-21sep.md`. Reemplaza el protocolo
de firma para esta corrida. Una entrada por fase.

Formato · commit corto (7c), checks, shots, DECISIÓN si aplica.

---

## F11.0 · apilado · motor + 6 planos · AnchorAdvance fuera · ✓
commit   (pendiente)
checks   build ✓ · markers 0 · AnchorAdvance en index.html 0 · nested a 0 · h1 0 (F11.1 mete el h1 del hero) · playwright 390 + 1440 ok, sin errores de consola, nojs 5826 chars legible
shots    docs/F11-shots/F11.0/
DECISIÓN: F11.6 (retiro de Drapers) se adelanta a F11.0 · el
marcador `[ Confidential ]` disparaba el grep `"[ "` de §4 y
la única salida limpia era eliminarlo. WHAT OTHERS queda ya en
la versión de dos items del prototipo (Karen · Forbes + Mike
triple network). F11.6 pasa a ser un commit de verificación.
DECISIÓN: la serif de #act2 sigue viva post-F11.0. El check
generico "serif sólo en testimonios" queda en amarillo hasta
que F11.a (siguiente commit) retire `font-family:var(--serif)`
de `.act2 .beat .dim,.act2 .beat .lit`. No hay riesgo funcional:
el uso está aislado a esas dos reglas.
DECISIÓN: sin retrato para KAREN · CITA (D4). La cita queda a
ancho completo (max-width 32ch, serif). No hay asset y §2
prohíbe placeholders — se renderiza sin retrato.
DECISIÓN: /public/fran-herrera.webp existe → el retrato de
OUR FOUNDER se conserva (Trampa 7 preventiva: object-fit:cover
con height:100% sobre grid stretch).

## F11.a · #act2 a Archivo 400 · ✓
commit   (pendiente)
checks   build ✓ · serif en home chunks = 1 (sólo `.home-karen-quote .quote`) · playwright 390 + 1440 ok, sin errores de consola, nojs 5826 chars legible
shots    docs/F11-shots/F11.a/
Cambio: `.act2 .beat .dim,.act2 .beat .lit` pasa de `font-family:
var(--serif)` a Archivo 400. Todo lo demás (weight, clamp, color)
se conserva. La serif queda reservada al testimonio de Karen.

DECISIÓN: translation-in-practice.css sigue usando `--serif` pero
el componente `TranslationInPractice` no se importa desde
`app/page.tsx` (dead code desde F8 §9.1). Su CSS no se incluye en
los chunks de la home. Se retirará cuando el componente muera
oficialmente en un cleanup posterior.

## F11.1 · hero · auto-fit mínimo común · kicker · h1 · ✓
commit   (pendiente)
checks   build ✓ · h1 en /index.html = 1 · fit medido con playwright: 1440 ambas frases 49.62px (container 777.63) · 390 ambas 22.32px (container 342) · kicker "A communications company" presente · playwright 390 + 1440 ok, sin errores de consola, nojs 5852 chars legible
shots    docs/F11-shots/F11.1/
Cambios:
· `fitPhrase` → `fitAllPhrases` · mide cada frase, toma el
  mínimo, aplica a todas.
· primer beat renderiza como `<h1>` (semántico); el resto queda
  en `<p>` para no romper el motor phrase.
· `<p class="hero__kicker">A communications company</p>` en el
  stage, posicionado en `top: calc(50% - clamp(90px,13vh,150px))`.

DECISIÓN: kicker en `left/right: 8vw` (mismo margen que las
frases del beat) en vez de `left:0 right:0` del prototipo. El
prototipo tiene `text-align:center`; en la home el kicker vive
alineado con el hero de layout izquierda. Mobile mantiene el
`text-align:center` del prototipo.

## F11.2 · nav global · fondo+color siguen a la superficie · ✓
commit   (pendiente)
checks   build ✓ · 5 items en orden Work · Services · About · Thinking · Contact · 15px 400 sentence case sin tracking · playwright: sobre hero classList = [bar, bar--dark, ready] color rgb(255,255,255) — la barra es negra sin franja papel · sobre plano paper classList = [bar, ready] color rgb(17,17,17) · curl /services /about /contact /thinking /essays → todos 200
shots    docs/F11-shots/F11.2/
Cambios:
· `Nav.tsx` reescrito. Ítems en orden firmado.
· Font: 15px · 400 · sentence case · sin tracking. Uppercase
  y `.14em` retirados del brand + links.
· `barTheme` mide `document.elementFromPoint` con
  `pointer-events:none` temporal sobre `.cruda-global-nav` para
  ver el plano bajo la barra. Aplica `bar--dark` si el ancestro
  es `.plane--black`, `.hero`, `.act1` o `.note`; paper por
  default.
· Cero `mix-blend-mode`. Cero contadores `NN/07` `NN/10`.
· "Essays" → "Thinking" (href `/thinking`). El redirect
  `/thinking → /essays` sigue vigente hasta F14b.1.

## F11.3 · SELECTED WORK · Server Component · 6 links + 3 div · ✓
commit   (pendiente)
checks   build ✓ · curl / | grep -c 'class="wcard"' → 9 (6 <a> + 3 <div>) · innerHTML en el bundle de la home = 0 · /work/karen-mannheim /work/mike-kaeding /work/girish-sehgal /work/mannheim-trading /work/confidential-fashion-founder /work/inout → todos 200 · /clients/karen-mannheim → 308 (301 permanent) · playwright 390 + 1440 sin errores, nojs 4683 chars legible
shots    docs/F11-shots/F11.3/
Cambios:
· `SelectedWork.tsx` reescrito como Server Component sin datos
  externos. 9 wcards inline en el mismo orden y con los slugs
  del prototipo home-v3 §selected-work.
· Dek locked: "Nine founders. Six cities. Four countries."
· `Wcard` interna: `<a>` cuando hay href, `<div>` cuando no.
· Assets · Karen · Mike · Girish · José tienen imagen. Jack,
  Saracco, Confidential, INOUT, Arman van sin `.wcard__m`
  (regla §2 · asset no existe → el bloque va sin imagen).
· `@/content/home/selected-work.ts` queda como dead code (el
  tipo `WorkCardData` sigue re-exportado desde `SelectedWork.tsx`
  para no romper `stats.ts` / `HomeTranslated.tsx` dead code).

DECISIÓN: "Confidential" en la card 07 · en el data anterior el
name era "An on-demand fashion founder" (más largo). El prototipo
firmado dice "Confidential" · se respeta el prototipo.
DECISIÓN: "Germán Saracco" (proto) vs "Germán Noël" (data
previa). Prototipo firmado gana.
DECISIÓN: "Jack Yeager" (proto) vs "Jack Yaeger" (data previa).
Prototipo firmado gana.

## F11.4 · orden · WHAT WE DO a posición 03 · ✓
commit   (pendiente)
checks   build ✓ · orden de secciones en `.stack` verificado por
curl · what-cruda-is → act2 → services → selected-work → karen-quote
→ karen-proof → what-others → our-founder → close · playwright
390 + 1440 sin errores de consola, nojs 4683 chars legible
shots    docs/F11-shots/F11.4/
Cambio único: `HomeServices` sube justo después de `Act2WhyNow`
y antes de `SelectedWork` en `app/page.tsx`.

## F11.5 · el gesto de hover en todas las superficies · ✓
commit   (pendiente)
checks   build ✓ · curl / | grep 'marks?' → 3 contenedores + 9
mark items · playwright 390 + 1440 sin errores, nojs 4683 chars
legible · las dos superficies con gesto propio (SELECTED WORK y
WHAT OTHERS) ya lo traían y siguen intactas
shots    docs/F11-shots/F11.5/
Cambios:
· `planes.css` recibe el sistema `.marks / .mark / .mark::before`
  del prototipo. Hover en el contenedor apaga los otros a .34;
  hovered vuelve a 1 y estrena una regla naranja de 2px (barrido
  550ms). Cero desplazamiento de layout.
· `HomeWhatCrudaIs` · `.data.marks` con 3 `.cell.mark`.
· `HomeServices` · `.index.marks` con 4 `.irow.mark`.
· `HomeLegacy` · `.data.marks` con 2 `.cell.mark`.
Cinco superficies con el gesto: WHAT CRUDA IS · WHAT WE DO ·
SELECTED WORK · WHAT OTHERS · OUR FOUNDER.

## F11.6 · WHAT OTHERS · verificación · ✓
commit   (pendiente · docs-only)
checks   curl / | grep 'class="pitem"' → 2 items · Drapers → 0
hits · `[ Confidential ]` → 0 hits · Karen · Forbes y Mike ·
triple network son los dos items servidos, en ese orden
shots    docs/F11-shots/F11.6/ · placeholder (F11.0 shots ya lo
cubren visualmente).
Estado: la retirada de Drapers y el paso a dos items ya se hizo
en F11.0 (marcador `[ Confidential ]` disparaba el grep del §4).
Esta fase queda como verificación · sin diff funcional.

## F12 · /services · services-v4 · 7 planos · ✓
commit   (pendiente)
checks   build ✓ · h1 en /services.html = 1 · markers (PENDIENTE
· PROPUESTO · RETRATO · slot) = 0 · grep viejos precios "1,750"
"45,000" "Three months" = 0 · precios firmados presentes ·
$19,500 $2,200 $55,000 "On request" · playwright 390 + 1440
sin errores, nojs 2228 chars legible · curl /services = 200
shots    docs/F11-shots/F12/
Cambios:
· `app/services/page.tsx` reescrito con los 7 planos del prototipo
  services-v4: apertura + 4 puertas + corte + cierre.
· `PlanesStack` motor global monta acá también (los planos son
  siempre children de `<main class="stack" id="stack">`).
· Precios §2 hard-coded en la apertura (índice negro) y en la
  celda `.cell__fee` de cada puerta.
· CTAs · sólo Translated apunta a otra página (`/process`). Los
  otros tres van a `/contact` (§2 · brief F11 §12 lo dice).
· mix-blend-mode del prototipo NO se replica (§2). Contador
  NN/07 tampoco.

## F13 · /about · about-v1 · seis secciones (no apilado) · ✓
commit   (pendiente)
checks   build ✓ · h1 en /about.html = 1 · markers 0 · playwright
390 + 1440 sin errores, nojs 2831 chars legible · curl /about = 200
shots    docs/F11-shots/F13/
Cambios:
· `app/about/page.tsx` reescrito contra el prototipo about-v1.
· Seis secciones sin planos apilados: opener split · cronología
  · principios · dos capas · quién lo corre · cierre.
· `about.css` reescrito con prefix `about-` para no colisionar
  con los tokens compartidos de `planes.css`.
· Trampa 7 resuelta: `.about-who__port` con altura `clamp(340px,
  62vh, 620px)` y `<img>` con `object-fit:cover; height:100%`.
· `.on-black` marca las secciones oscuras · el Nav global las
  detecta con su regla F11.2 y aplica `bar--dark`.

## F14a · /contact · contact-v1 · filtro ICP · ✓
commit   (pendiente)
checks   build ✓ · h1 en /contact.html = 1 · markers 0 · "We do
not ask about revenue" = 0 hits (retirada, contradecía Q04) ·
playwright 390 + 1440 sin errores, nojs 1246 chars legible ·
curl /contact = 200
shots    docs/F11-shots/F14a/
Cambios:
· `app/contact/page.tsx` metadata + `ContactContent` cliente.
· Tres secciones (apertura negro, filtro paper, corte negro).
· Filtro de 5 preguntas · Q01 multi-select, Q02-Q04 single, Q05
  dos inputs. Botón habilitado sólo con las 5 respondidas y
  email válido. Cero backend · `mailto:` con las respuestas.
· Copy textual del prototipo. Línea vieja "We do not ask about
  revenue, industry or geography" fuera (contradecía Q04).

## F14b.1 · /thinking · rutas + página · redirects invertidos · ✓
commit   (pendiente)
checks   build ✓ · /thinking → 200 · /essays → 308 (UN salto → /thinking 200, sin loop) · /resources/essays → 308 UN salto · /essays/third-place → 308 UN salto · /thinking/third-place → 200 · playwright 390 + 1440 sin errores, nojs 1057 chars legible
shots    docs/F11-shots/F14b.1/
Cambios:
· `app/essays` renombrado a `app/thinking` (move de ambos
  `page.tsx` y `[slug]/page.tsx`).
· `app/thinking/page.tsx` reescrito contra thinking-v1 (opener
  split + filtros type/language + Articles + Case studies). Sin
  sección Podcasts (F14b.2 la agrega junto al episodio).
· `app/thinking/[slug]/page.tsx` conserva la lógica de essays
  pero con canonical y schema apuntando a `/thinking/`.
· `next.config.mjs` invierte los redirects: `/essays` →
  `/thinking`, `/essays/:slug` → `/thinking/:slug`, `/resources/
  essays` → `/thinking`. Cero cadenas (ex 301 /thinking → /essays
  y /resources/essays → /essays fueron retirados).
· Sitemap · `/essays` → `/thinking`, essay URLs a `/thinking/{slug}`.
· `EssayLayout.tsx` schema y back-link a `/thinking`.
· `resources/index.ts` `href` a `/thinking/{slug}`.
· `SiteFooter.tsx` "Essays" → "Thinking".
· `llms-txt.ts` URLs a /thinking/.

## F14b.2 · podcast · /thinking/steve-walls · upcoming · ✓
commit   (pendiente)
checks   build ✓ · /thinking/steve-walls → 200 · meta robots =
"noindex, follow" · sitemap sin URL steve-walls (0 hits) ·
sección Podcasts renderiza en /thinking · playwright 390 + 1440
sin errores, nojs 487 chars legible en el episodio
shots    docs/F11-shots/F14b.2/
Cambios:
· `app/thinking/steve-walls/page.tsx` · ruta estática (toma
  precedencia sobre `/thinking/[slug]`).
· Metadata `robots: { index: false, follow: true }`.
· Estado upcoming · bloque negro diseñado "Coming soon", back a
  /thinking, cierre con mail. Sin capsule, sin transcript, sin
  VideoObject schema · esos entran cuando el episodio se publique
  (§7 espera a Fran para título, ID de YouTube y fecha).
· `/thinking/page.tsx` · agrega sección Podcasts con la card del
  episodio en upcoming (única excepción firmada §2 al marker
  policy).
· Sitemap sin cambio · steve-walls no entra hasta pasar a
  "published".

DECISIÓN: sub y capsule del episodio quedan textuales del
prototipo. Los slots faltantes de "título", "capsule",
"takeaways", "capítulos", "artículo" y "transcript" NO se
renderizan en estado upcoming (regla §2 · sin slots sin dato
real).

## F16.2 · schema + metadata · sameAs VACÍO · ✓
commit   (pendiente)
checks   build ✓ · sameAs = [] en Organization schema · JSON-LD
válido en /, /services, /work/karen-mannheim (parseado con node
JSON.parse sin errores) · playwright 390 + 1440 sin errores en
las tres rutas · titles y meta descriptions quedan como estaban
(§7 esperando a Fran)
shots    docs/F11-shots/F16.2/
Cambio único: `sameAs: []` en `app/layout.tsx` (antes tenía la
URL de LinkedIn). Brief §7 "sameAs del schema · URLs de LinkedIn"
= item que espera a Fran. La forma del objeto se conserva para
que agregar handles no rompa entity resolvers.

## F17.0 · CaseStudyLayoutV2 · molde firmado · ✓
commit   (pendiente)
checks   build ✓
Cambios:
· `src/components/CaseStudyLayoutV2.tsx` · componente nuevo que
  renderiza el molde case-molde-v1 desde `CaseStudyData`:
  h1 · hero · capsule + takeaways + meta · stats 4-col · sections
  con h2 y evidencia · testimonio en serif · FAQ nativo · sub-cases
  · cierre. Cero componentes nuevos aparte del layout.
· `case-study-layout-v2.css` · prefix `cs-` · tokens del design
  system + fallbacks locales.
· El legacy `CaseStudyLayout` (usado en `app/work/[slug]/page.tsx`
  para los case studies actuales) se conserva sin tocar. F17.1
  cablea Karen al nuevo layout.

DECISIÓN: nombre `CaseStudyLayoutV2` en lugar de `CaseStudyLayout`
por convivencia con el legacy · el mismo `/work/[slug]/page.tsx`
resuelve v1 (CaseComposer), v2 (CaseStudyLayout legacy) y el
nuevo v3 (CaseStudyLayoutV2) según qué data source hace match.
Renombre a `CaseStudyLayout` puede ocurrir en un cleanup
posterior una vez migrados todos los casos.

## F17.1 · /work/karen-mannheim en el molde nuevo · ✓
commit   (pendiente)
checks   build ✓ · /work/karen-mannheim → 200 ·
/clients/karen-mannheim → 308 (301 permanent) · extractable
blocks presentes (título · capsule · takeaway · cifras +300%
500K 5 years 33 years con fuente · h2 · FAQ · byline · fecha ·
testimonial · serif del testimonial · schema Article · schema
FAQPage) · playwright 390 + 1440 sin errores, nojs 4098 chars
legible
shots    docs/F11-shots/F17.1/
Cambios:
· `src/content/clients-v3/karen-mannheim.ts` · data del caso en
  formato `CaseStudyData` (C1 cifras lockeadas, C2 capsule
  reordenado firmado).
· `src/content/clients-v3/index.ts` · index + `findClientV3`.
· `app/work/[slug]/page.tsx` · resolver ampliado: v3 → v2 →
  legacy → 404. Metadata equivalente.

DECISIÓN: `LinkedIn Analytics` como fuente del +300% sin período
específico. El slot "período · C1" del prototipo no tiene dato
firmado; §5.4 prohíbe inventar. Cuando Fran entregue el período,
se actualiza la fuente.
DECISIÓN: `moreFrom: []` · PEZET y Saadiyat esperan capturas
retomadas (§7). Cuando lleguen se agregan al array; la sección
"More from this engagement" no renderiza sin items.
DECISIÓN: `evidence: []` en cada una de las 4 secciones · los
assets reales de PEZET / Porsche / Saadiyat / SPOTLIGHT / Deck /
Forbes esperan (§7). Regla §2: sin asset, sin bloque.
















