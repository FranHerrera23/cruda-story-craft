# Merge log · sesión 24-sep 2026

Origen: `main` en `cc1dd4a` (Merge f23-6-cases-editorial).
Todo mergeado con `--no-ff` (merge commit propio) para poder revertir cada rama por separado.

## Merges ejecutados en orden

| # | Rama | Merge commit | Verificado con `npm run build` |
|---|---|---|---|
| 1 | `f25-fixes` | `10db8b07dfb8d9d7c1c0843acf01045afb3c0c88` | ✅ |
| 2 | `f28-proof` | `451e8804ca9106cfea974317b78636db22481084` | ✅ |
| 3 | `f31-services` | `fd78fefc0b5b56aae0c28a6ce38471aeb01452a0` | ✅ |
| 4 | `f31-home` | `f166ce90f9e397d5775a645f8f6564e3c8c04293` | ✅ |
| 5 | `f31-contact` | `2d51c1358d982d4eec52a9ffdeba35ff87510d1c` | ✅ |
| 6 | `f31-thinking` | `0e2da09aa2c2ef02b8a953e9f5a881cc10b16fbd` | ✅ |
| 7 | `f33-case-mold` | `91f3f703c185caa03374619f34a478037862f1e6` | ✅ |
| 8 | `f27-mike` | `985f7d79beaf892b8e2b13c28b6de591c85fca2c` | ✅ |
| 9 | `f27-jose` | `82231e48482043b945a78c17702997ebadb642ae` | ✅ |
| 10 | `f27-girish` | `458d551577b381a21eeee8eb350ebf6e8c1fc658` | ✅ |
| 11 | `f29-jack` | `9bc735b2a8e3857652d27ec38d9ca2e53d3bf054` | ✅ |
| 12 | `f38-live-fixes` | `46a5b62` | ✅ |
| 13 | `f32-confidential` | `f7a9184` | ✅ |
| 14 | `f36-thinking` | `ef977db` | ✅ |
| 15 | `f37-entity` | `373d763` | ✅ |
| 16 | `f41-home-founder` | `4510bd9` | ✅ |
| 17 | `f40-about` | `04f965d` | ✅ |
| 18 | `f43-fixes` | `6503799` | ✅ |
| 19 | `f39-cases` | `ce1c278` | ✅ |
| 20 | `f42-jack` | `d936e29` | ✅ |
| 21 | `f44-services-transmission` | `a695516` | ✅ |
| 22 | `f45-transmission-unit` | `1ce0703` | ✅ |
| 23 | `f47-case-dates` | `b8fbbd5` | ✅ |
| 24 | `f46-thinking` | `955ef90` | ✅ |
| 25 | `f48-mobile` | `af57897` | ✅ |
| 26 | `f49-performance` | `f773a0f` | ✅ |
| 27 | `f50-thinking` | `29550a5` | ✅ |
| 28 | `f50-1-fixes` | `293b2c7` | ✅ |
| 29 | `f51-larry-holmes` | `209dd99` | ✅ |
| 30 | `f53-essay-mold` | `6f19f33` | ✅ |
| 31 | `f54a-newsletter-form` | `a607ffe` | ✅ |
| 32 | `f54-thinking-newsletter` | `bd756fa` | ✅ |
| 33 | `f54-1-featured-avif` | `90b45ed` | ✅ |

`origin/main` HEAD final: `90b45ed`.

**Novena tanda (28-sep · F51):** ensayo bilingüe nuevo Larry Holmes
+ slot de hero para todos los ensayos + cierre de gap byline-cuerpo.
Un commit encadenado (`57b0a00`):

  · Contenido · `/thinking/find-your-larry-holmes` (EN) y
    `/thinking/busca-a-tu-larry-holmes` (ES), textos verbatim del
    .md de Fran, reading time 6 min, newsletter line linkeada
    a `/newsletter` (existente). Alternates cruzadas.

  · Infra · `Essay` type gana `heroCredit?: string`. `EssayLayout`
    renderiza el hero (si `heroImage` + `heroAlt`) inmediatamente
    después del filete de la firma; `.e-capsule` se hace
    condicional (sólo si hay `answerCapsule` truthy Y no hay hero).
    `essay.css` reescribe `.e-hero` a cols 1/8, aspect 16/9,
    object-fit cover, 48/32 px de margen vertical, `next/image`
    con priority + sizes + q=90.

  · Cierre de gap (para todos los ensayos) · `.e-body` y
    `.e-capsule` bajan `margin-top` de var(--space-5)=64 px a
    48 px desktop / 32 px mobile.

  · Hero · `/public/larry-holmes-hero.webp` (1344×752 WebP · 143 KB
    · aspect 1.787 ~ 16:9 · imagen generada con Higgsfield · sin
    crédito). Advertencia: fuente < 2400 px de ancho, blanda en
    1920 DPR alto; nítida en 1440.

  · Cita "Your mind is making a date your body can't keep." /
    "Tu mente está haciendo una cita que tu cuerpo no puede
    cumplir." · comillas curvas, sin `<em>` (verificado por curl).

  · CTA final "Got a story worth telling? Let's talk." /
    "¿Tenés una historia que contar? Hablemos." · pre-F51,
    introducido en `f334fcb` (2026-09-18, B5 template rework).
    Queda en todos los ensayos por regla F53 §4.5.

LH mobile Larry Holmes EN: LCP 2472 · CLS 0.001 · TBT 62 · dentro
de todos los budgets.

Pixel-diff F51 vs baseline: 42/42 comparables en 0 pixels · 9
size-mismatch esperados (7 ensayos existentes -32 px + /thinking
+200 px por 2 filas nuevas).

Rollback: `git revert -m 1 209dd99`.

**Octava tanda (28-sep · F50.1):** parche post-F50 con 7 ajustes
reportados por Fran, en dos commits encadenados:
  · Lista (`ea72bfd`) · títulos con `max-width: 100 %` (era 22em),
    dek sin `line-clamp`, "Also in …" con `white-space: nowrap`,
    padding-top de la lista a 48 px desktop / 32 px mobile, y NBSP
    en el título de `founder-worth-70-million` ("$70 million").
  · Ensayo (`23247dc`) · `.e-role` en 15 px sans sentence case gris
    ("Founder, CRUDA" en el mismo tratamiento que la meta). La
    `.e-quote` ya había perdido padding + fondo en F50 §5;
    verificado que borde izquierdo y ancho máximo coinciden con
    los párrafos del cuerpo (x=385 w=670 en 1440).

Pixel-diff regresión F50 → F50.1: 42/42 comparables en 0 pixels.
Los 9 size-mismatch son /thinking + essay-en + essay-es en
1024/1440/1920, esperados por diseño.

Rollback: `git revert -m 1 293b2c7` (completo) · `git revert
23247dc` (sólo ensayo) · `git revert ea72bfd` (sólo lista).

**Séptima tanda (28-sep · F50):** rediseño de `/thinking` al patrón
tetragrammaton.com/articles. Tres commits encadenados:
  · Lista (`ff071e9`) · una sola columna, filetes 1 px negro, título
    32 px peso 500, meta 15 px sans sentence case gris, dek 18 px
    (line-clamp 2 desktop / 3 mobile), toda la fila clickeable via
    `::after`. Fuera: kicker "THINKING", contador "N pieces",
    columna izquierda de meta en mayúsculas, ThinkingFilters.tsx.
  · Idioma (`56234bf`) · `?lang=es` render SSR con toggle real
    (`<a href>`, sin JS). `/thinking` default EN, `/thinking?lang=es`
    filtra ES. Rótulos de UI localizados ("6 min de lectura",
    "25 de septiembre de 2026", "Podcast · Próximamente"). h1 y
    lede quedan en inglés en las dos vistas (brief §4). Canonical
    por vista.
  · Ensayo (`4f23827`) · meta 15 px sans sentence case gris en
    `.e-back`, `.e-date`, `.e-reading`, `.e-quote cite` (antes
    IBM Plex Mono uppercase). `.e-quote` sin fondo paper, alineada
    al borde del cuerpo. Backlink lang-aware: ES → `?lang=es`.

Verificación SSR (`curl -s http://localhost:3013/thinking`):
  · EN · 5 filas EN + toggle presente + ES ausente.
  · ES · 3 filas ES + toggle presente + EN ausente.

Sin cambios en las otras 15 páginas del sitio.

Rollback:
  · `git revert -m 1 29550a5` · vuelta completa del merge.
  · `git revert 4f23827` · sólo el essay.
  · `git revert 56234bf` · sólo el idioma.
  · `git revert ff071e9` · sólo la lista.

**Sexta tanda (28-sep · F49):** performance mobile LCP + CLS.
Cinco commits encadenados:
  · §3.2 (`969ac01`) · gate `.page-root:not(.ready)` acotado a desktop
    fine-pointer; reserva SSR de la barra nav; width/height explícitos
    en el wordmark del footer. Mobile LCP de `/`, `/services` y
    `/about` cae 606–721 ms; CLS baja de 0.206 (enmascarado por el
    gate) a 0.001.
  · §3.3 (`a09f43e`) · `next/image` con `priority` + `fill` + `sizes`
    en heroes de case study (`WorkLayout`, `CaseStudyLayoutV2`), Act2
    arts de la home y retrato /about. Karen mobile LCP cae de 10 873
    a 3363 ms (−7 510 ms).
  · §3.4 (`cbc30cc`) · Lenis + GSAP + ScrollTrigger a dynamic import
    dentro del `matchMedia` gate. Chunk 2434 (218 KB) sale del bundle
    inicial; queda en el chunk 9096 (18 KB) que sólo bajan clientes
    desktop post gate.
  · §3.5 (`5825cbc`) · contraste WCAG AA 4.5:1 en `.hero__kicker`
    (`#6E6B65` → `#8A867E`, ratio 3.57 → 5.23) y `.pitem__src`
    (`#FF5A00` → `#6E6B65`, ratio 3.13 → 5.31). Sin colores nuevos,
    sin cambio de tamaño/peso/tracking. Excepción firmada al
    pixel-diff 0.
  · Docs (`ac46725`, `55425bf`, `653e131`, `41b1b6d`) · diagnóstico
    Paso 1, reporte Vercel Image Optimization, inventario de
    imágenes y reporte final antes del merge.

Pixel-diff regresión: masked 48/51 en 0 estricto (los 3 diffs son
los selectores de §3.5 en home). Per-image diff `next/image`: máximo
Karen 1440 con 0.452 %, todos ≤ 0.5 % del total de la página.

Rollback por sección (revert sobre el merge base):
  §3.5 · `git revert 5825cbc`
  §3.4 · `git revert cbc30cc`
  §3.3 · `git revert a09f43e`
  §3.2 · `git revert 969ac01`

Rollback total del merge: `git revert -m 1 f773a0f`.

Pendiente F52 (fuera del scope de F49):
  · Karen mobile LCP 3363 ms (863 ms sobre budget).
  · Desktop LCP > 1200 ms en `/`, `/`, `/services`, `/about` por el
    gate `.page-root` que se mantiene en desktop (fitAllPhrases de
    Act1Hero).

**Cuarta tanda (27-sep · F48):** política motion mobile + tap
targets 44×44. Regla dura de Fran: cero cambios en desktop.
Regresión pixel-diff main vs f48-mobile en 17 páginas × 1024/
1440/1920 = 0 pixels distintos en las 51 comparaciones (baseline
main-vs-main = 0). Métricas mobile 390: home stky 9→0 + opacHid
34→0 + tinys 14→1; services stky 7→0 + tinys 27→10; thinking
stky 1→0 + tinys 20→1. Loader ahora sólo en `/`, una vez por
sesión, nunca con UTM, ≤1.2s mobile · desktop 2s intacto. Todos
los tap targets clasificados (a) inline-en-párrafo aceptables /
(b) controles sueltos a 44×44. "See it in:" case name links con
área táctil de 41px alto + 8px separación en mobile.

**Tercera tanda (25-sep):** F41 → F40 → F43 → F39 → F42 en el orden aprobado por Fran. Build limpio + push después de cada uno.

- `f37-entity` mergeado antes del tren, con un conflicto en `WorkLayout.tsx` (Article JSON-LD: main tenía datePublished real de F38, f37 tenía author/publisher por @id · resolución: se combinan los dos).
- `f41-home-founder`: home OUR FOUNDER · foto verificada · rótulo LEGACY → Before CRUDA · TikTok como último item del track record.
- `f40-about`: hero h1 propio 32–68px con text-wrap balance · sale WHAT WE TRANSLATE · jerarquía de h2 · WHO RUNS IT en 3 celdas (EXPERIENCE, Before CRUDA, WHAT HE READS).
- `f43-fixes`: aria-hidden en Marco Aurelio verificado · US English sweep (25 findings → 0) · Karen judgment · $10M-$200M · /our-founder resuelto.
- `f39-cases`: rótulos de fila naranja 13px · `<title>` = descriptor + · CRUDA · fechas reales de git en manifest + `<time datetime>` + JSON-LD dates · franja Key Takeaways en Karen y Mike.
- `f42-jack`: caso Jack completo · Platinum Equity nombrado (Jack ok 25-sep) · sección biográfica · WHAT MISTIVA NOW RUNS ON con 3 filas nuevas · cita pen-quote 40px · grupo BEFORE MISTIVA · FAQ nueva. Conflict en types.ts (F39 vs F42) resuelto uniendo los campos.

**Segunda tanda (misma sesión, después de captures + fixes):**

- `f38-live-fixes` trae F34 (crédito Fran + fechas), F35 (etiquetas de servicio en las 9 cards, BAUHOME incluido), F37 parcial (byline essays) + dos globales del footer: X link fuera, min-height 640px removida (dejaba ~300px vacíos abajo del copyright con CAPTURE_ENABLED off).
- `f32-confidential` migra `/work/confidential-fashion-founder` al molde F33 con copy F32 §1 verbatim + tres correcciones: START HERE reescrita según F32 §1, CREDITS Client con separador ` · ` cuando `w.confidential`, WHAT CHANGED h2 unificado a 22px cols 3–10 (arregla los 7 casos F33 de una vez).
- `f36-thinking` reemplaza F31 §4.2: `/thinking` pasa a formato biblioteca, una sola lista, sin sección CASE STUDIES, sin opción "Case studies" en el filtro, LANGUAGE antes que TYPE. El link "Case studies live in Work →" queda al final. F31 §4.1 (h1 token, regla naranja) sigue vigente.

Merges limpios sin conflictos entre las tres.

---

## Conflictos y resolución

### Merge 3 · `f31-services` · 1 conflicto

**`app/services/page.tsx`** · sección de cierre.

- **HEAD (main con f28-proof mergeada previamente):**
  ```
  {/* 07 · F28 §2 · MIKE PROOF · mismo componente que la prueba de Karen en la home. */}
  <MikeProofBlock />
  {/* 08 · START HERE · F23-5 · con "Book the call →". */}
  ```
- **f31-services** (rama pre-F28):
  ```
  {/* 06 · START HERE · F23-5 */}
  ```

**Regla aplicada:** "no cambies nada que su brief no mencione". F31-services solo cambia el body de Translated y saca WHO IT IS NOT FOR; nunca menciona MikeProofBlock (es de F28).

**Resolución:** conservé el bloque MikeProofBlock (que vino de f28-proof) y mantuve la numeración 07/08. El bloque 06 en la rama entrante fue redundante (la seccion StartHere quedó como 08).

### Merge 11 · `f29-jack` · 2 conflictos

**`app/services/page.tsx`** y **`src/components/home/HomeKarenProof.tsx`**.

Origen del conflicto: `f29-jack` fue rebasado a lo largo de la sesión sobre f27-girish → f28-proof → f33-case-mold. En ese trayecto quedó cargando versiones anteriores de esos dos archivos (con `w.metricGroups?.reach?.[0]` que fallaba en Vercel), previas al fix `9b8e355` de f28-proof que introduce `KAREN_PROOF_CELLS` en `src/data/proof-karen.ts`.

- **HEAD:** ambos archivos con el fix (`KAREN_PROOF_CELLS` en HomeKarenProof, `MIKE_PROOF_CELLS` en MikeProofBlock).
- **f29-jack:** versión vieja con `w.metricGroups?.reach?.[0]` (que en main no existía en el tipo cuando esa rama se cortó de f28-proof).

**Regla aplicada:** el brief de F29 solo menciona la nueva página `/work/jack-yeager` y la card de Jack en la home. No menciona HomeKarenProof ni /services.

**Resolución:** `git checkout --ours` en los dos archivos (mantengo main). Del lado de f29-jack solo tomé `src/content/work/jack-yeager.ts` que es lo único que su brief cubre.

---

## Ramas que no se mergearon (y por qué)

- **`f26-case-karen`** · `b98e9d7` · **NO mergeada por separado**. Su contenido está totalmente incluido en el merge de `f33-case-mold` (que se creó encima de f26 y le agregó el overhaul Pentagram). Mergear f26 después de f33 sería redundante y podría revertir cambios de F33.

- **F30 (INOUT)** · no construida todavía.
- **f32-about** y **f37-entity** · en origen, esperando OK final. `f32-about` reescribe `/about` con KEY FACTS + FAQ 8Q; `f37-entity` añade el JSON-LD @graph enlazado (Person + Organization) y wireado de bylines a `/about#fran-herrera`. Van al mergearse después de la validación Rich Results Test + validator.schema.org.
- **F32 §1 (Confidential)** ya está en main via `f7a9184`.

---

## Rollback · comandos exactos

Para revertir cualquier merge individual (sin afectar los otros), corré uno de estos en `main` con working tree limpio:

```bash
# Rollback f25-fixes
git revert -m 1 10db8b0

# Rollback f28-proof
git revert -m 1 451e880

# Rollback f31-services
git revert -m 1 fd78fef

# Rollback f31-home
git revert -m 1 f166ce9

# Rollback f31-contact
git revert -m 1 2d51c13

# Rollback f31-thinking
git revert -m 1 0e2da09

# Rollback f33-case-mold (incluye f26)
git revert -m 1 91f3f70

# Rollback f27-mike
git revert -m 1 985f7d7

# Rollback f27-jose
git revert -m 1 82231e4

# Rollback f27-girish
git revert -m 1 458d551

# Rollback f29-jack
git revert -m 1 9bc735b

# Rollback f38-live-fixes (segunda tanda)
git revert -m 1 46a5b62

# Rollback f32-confidential
git revert -m 1 f7a9184

# Rollback f36-thinking
git revert -m 1 ef977db

# Rollback f37-entity (tercera tanda · antes del tren)
git revert -m 1 373d763

# Rollback f41-home-founder (tren, orden 1)
git revert -m 1 4510bd9

# Rollback f40-about (tren, orden 2)
git revert -m 1 04f965d

# Rollback f43-fixes (tren, orden 3)
git revert -m 1 6503799

# Rollback f39-cases (tren, orden 4)
git revert -m 1 ce1c278

# Rollback f42-jack (tren, orden 5)
git revert -m 1 d936e29

# Rollback f44-services-transmission (sweep de Transmission $2,200 → $2,500)
git revert -m 1 a695516

# Rollback f45-transmission-unit (línea "Each month is built on long-form pieces…")
git revert -m 1 1ce0703

# Rollback f47-case-dates (resync updatedAt del manifest post-F39)
git revert -m 1 b8fbbd5

# Rollback f46-thinking (ensayo Why you can't write your own website + layout)
git revert -m 1 955ef90

# Rollback f48-mobile (política motion mobile + tap targets 44×44)
git revert -m 1 af57897

# Rollback f53-essay-mold (molde .md + SubscribeForm + Substack out)
#   Impacto: vuelve a los ensayos .ts legacy, vuelve CaptureForm +
#   /api/subscribe, apaga el embed beehiiv. CAPTURE_ENABLED queda
#   false, así que la captura vuelve a estar efectivamente apagada.
#   El revert NO borra los .md ni los heroes · habrá que limpiarlos
#   a mano si querés quitar el corpus también.
git revert -m 1 6f19f33

# Rollback f54a-newsletter-form (SubscribeForm max-width 560 izq)
#   Impacto: la caja de beehiiv vuelve a estirarse al ancho del
#   contenedor en /newsletter y al final de los ensayos. Sin otros
#   efectos.
git revert -m 1 a607ffe

# Rollback f54-thinking-newsletter (/thinking + /newsletter rediseño)
#   Impacto: /thinking vuelve a la lista única columna de F50
#   (sin imágenes + sin aside de suscripción); /newsletter vuelve
#   al layout minimalista (eyebrow + h1 + body + form). Los
#   componentes EssayCard + EssayCover se vuelven dead code pero
#   no se borran (safe).
git revert -m 1 bd756fa

# Rollback f54-1-featured-avif (AVIF global + featured de /thinking a next/image)
#   Impacto: next/image vuelve a servir WebP (sin AVIF) para todo
#   el sitio; la featured de /thinking vuelve a <img> crudo. Sin
#   cambios visuales. El pixel-diff tool queda en scripts/ · es
#   dev-only, no afecta build. Revert sin dependencias.
git revert -m 1 90b45ed
```

Después de cualquier revert:
```bash
npm run build
git push origin main
```

Notas sobre rollbacks encadenados:
- Rollback de F33 mientras F27 y F29 están en main puede dejar los data files de Mike/José/Girish/Jack apuntando a un molde que ya no existe. Si necesitás rollback de F33, hace sentido revertir también F27-mike/jose/girish y F29-jack en orden inverso, o rollback simultáneo.
- Rollback de f28-proof mientras f31-services está mergeada no rompe nada — MikeProofBlock desaparece de /services pero el resto de la página sigue funcionando.
- Rollback de f31-contact mientras la variable de entorno `NEXT_PUBLIC_CALENDLY_URL` está en Vercel es inocuo — vuelve a la versión con filtro de 5 preguntas.

---

## Notas operativas post-merge

1. **Vercel** debería redeployar automáticamente `main` después de cada push. Confirmar que thecruda.com refleja los cambios.
2. **`NEXT_PUBLIC_CALENDLY_URL`** hay que cargarla en Vercel (Production + Preview) para que /contact muestre el embed en vez del link mailto de fallback. La rama f31-contact ya está mergeada, no rompe si la variable no está.
3. **Assets faltantes** (documentados en `docs/F33-session-summary.md` §C) siguen faltando — cuando existan, aparecen automáticamente en las páginas correspondientes gracias al filtro `publicFileExists` de F26 §E.6.
