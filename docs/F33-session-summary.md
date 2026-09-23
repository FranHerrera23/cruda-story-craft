# Estado de las ramas · sesión que termina

Fecha: 23-sep 2026 (cierre de sesión)

---

## A · Ramas en origin (listas para revisión)

### Grupo 1 · desde `main` · listas para mergear en cualquier orden

| Rama | Hash | Qué tiene | Qué falta |
|---|---|---|---|
| `f25-fixes` | `6a66d6e` | Logo srcset 1x/2x · route-mask fix (F26 §E.1) · planes overlap fix (Act2 stage opacity) · portrait hero layout (después reemplazado por F27 §4.3 y luego F33) · /about a paper · reveal en "How the work is done" · doc `docs/F25-inout-jose-visuals.md` | Nada. Se puede mergear. Capturas §7 mandadas al principio de la sesión. |
| `f28-proof` | `f46d94d` | ProofBlock reusable en `src/components/proof/` · HomeKarenProof migrado (usa Karen.metricGroups) · HomeWhatOthers h2 nueva + card de Mike (LinkedIn 2023-2025) · /services agrega MikeProofBlock antes del StartHere · CASE_START_HERE de Mike actualizado (fuera de "ABC, Fox News, CBS") | Nada. Se puede mergear. Notas: home Karen proof depende de que Karen.ts tenga metricGroups. En main sólo hay Karen legacy (metrics planos), así que si se mergea f28 antes que F26/F33, la home Karen proof va a mostrar 0 celdas. **Orden de merge sugerido: F26 (o F33) primero, después F28.** |
| `f31-services` | `4c03852` | Body de Translated agrega "a CRM set up to follow up on it" · sale WHO IT IS NOT FOR | El bloque MikeProofBlock lo agrega f28-proof, no esta rama. |
| `f31-home` | `6beb245` | Twitter card override de la home (title + description = HOME_TITLE y HOME_DESCRIPTION) · og:image explícito. Los otros items de §2.x (WHAT WE DO, founder, START HERE) ya venían aplicados desde F23-2 en main. | Nada. |
| `f31-contact` | `42e048b` | Reemplaza el filtro de 5 preguntas por: h1 "One conversation." + regla naranja única + lede + 2 cols (Calendly embed + form Name/Email/textarea) + pie con fees. Sin secciones oscuras. NEXT_PUBLIC_CALENDLY_URL para el embed (Fran carga en Vercel). | Fran tiene que agregar la variable de entorno en Vercel. Sin la variable, la columna izquierda muestra un link mailto (nunca embed vacío). |
| `f31-thinking` | `f6ca00c` | Hero pasa de split 2 cols a 1 col (rótulo THINKING · h1 · regla · lede). Meta description confirmada. | Nada. |

### Grupo 2 · train de casos · rebase de f26 → f33

| Rama | Hash | Qué tiene | Qué falta |
|---|---|---|---|
| `f26-case-karen` | `b98e9d7` | Molde F26 §A completo · Karen §B verbatim · §E fixes (route-mask, h2 unificados, cifras a ancho, imágenes rotas, next case usa title) · §F h2 cols 1-6 body cols 8-12 · §G Forbes links · §H antes/después de 2021 · F27 §4.3 hero split para retratos | Reemplazado por F33. No mergear f26 solo — mergear f33 en su lugar. |
| `f33-case-mold` | `e9c5073` | Molde Pentagram · Karen sector 'Lighting' · WorkLayout rewrite completo (pen-top, pen-hero 16:9, pen-about, pen-sec cols 3-10 h2 22px, pen-credits, pen-next sin imagen) | Reemplaza f26 en el merge. F30, F32 arrancan directo en este molde. |
| `f27-mike` | `2692046` | Mike en molde F33 (sólo data, no toca layout) | Retrato 620×330 muy chico para 16:9. |
| `f27-jose` | `8b6161c` | José en molde F33 | Retrato 800×800. |
| `f27-girish` | `832a2f4` | Girish en molde F33 | Retrato 800×800. |
| `f29-jack` | `9e02989` | Jack en molde F33 | Retrato 800×800 (público como `jack-yeager.jpeg`, no `.jpg`). |

---

## B · No implementadas · siguiente sesión

| Brief | Rama sugerida | Depende de |
|---|---|---|
| F30 · INOUT | `f30-inout` | Merge de F33. Molde F33 + 3 bloques propios (SYSTEM grilla 4, PHOTO BAND código fotográfico, INSIDERS slab azul). |
| F32 · Confidential + /about | `f32-confidential` + `f32-about` | Merge de F33. Confidential caso en molde F33. /about con KEY FACTS `<dl>`, FAQ, schema JSON-LD Organization + Person + FAQPage. |

F24 no se implementa (reemplazado por F32).

---

## C · Archivos que faltan en `public/`

Cada uno lo omite el layout (§E.6) hasta que exista. Reporte de lo que Fran tiene que subir.

### C.1 · F26 · Karen
- `public/forbes-peru-2026-cover.jpg` · Fran me pasó la imagen en la conversación pero no tengo forma de guardarla en disk desde acá. Fran la sube directamente al repo.
- `public/karen-post-1.png` a `public/karen-post-4.png` · grilla de 4 posts de Karen bajo la sección WHAT WE BUILT (F26 §B.5).

### C.2 · F27 · Mike
- `public/mike-work-1.png` a `public/mike-work-9.png` · 9 imágenes en grilla 3 cols debajo de "A founder voice with four weekly streams". Se referencian en Mike.sections[2].blocks.
- `public/mike-wcco.webp` · ROOMS · "WCCO · CBS Minnesota" (revisión Mike original). Nota: la revisión 2 de F27 saca ROOMS de Mike, así que sólo se necesita si se restaura ROOMS.

### C.3 · F29 · Jack
- `public/mistiva-journal-list.png` · captura del prototype HTML `docs/mistiva-journal-prototype.html` a 1440 desde el hero hasta la 3ra entrada de la lista.
- `public/mistiva-journal-article.png` · captura de la vista de artículo, hero hasta la grilla de cifras, con `.note` ocultas.
- El HTML del prototype no lo veo en el repo · Fran lo deja en `docs/mistiva-journal-prototype.html` y CC captura.

### C.4 · F30 · INOUT (para siguiente sesión)
- Del manual de marca:
  - `system-construction`, `system-morphology`, `system-colour`, `system-type`
  - `band-1`, `band-2`, `band-3` (código fotográfico)
  - `sign` (opcional)
  - `insiders-1` a `insiders-3` (stills de episodios · hoy no existen)

### C.5 · F33 · Heroes horizontales 16:9
Todos los retratos actuales están por debajo del mínimo 1200×1500. Para que el hero 16:9 se lea nítido, Fran sube `public/[slug]-hero.jpg` **horizontal, mínimo 2400×1350**:
- `public/mike-kaeding-hero.jpg`
- `public/jose-mannheim-hero.jpg`
- `public/girish-sehgal-hero.jpg`
- `public/jack-yeager-hero.jpg`
- `public/juan-pablo-romero-hero.jpg`

Mientras no existan, el molde F33 usa el retrato actual con `object-fit: cover` y `object-position: center 25%` (cropeado, la cara queda en el tercio superior).

---

## D · Tamaños reales de los retratos actuales

Medidos con PIL sobre `public/*.webp`:

| Archivo | Dimensiones | Peso |
|---|---|---|
| `mike-kaeding.webp` | 620 × 330 px | 36 KB |
| `jose-mannheim.webp` | 800 × 800 px | 62 KB |
| `girish-sehgal.webp` | 800 × 800 px | 83 KB |
| `juan-pablo-romero.webp` | 800 × 800 px | 29 KB |
| `jack-yeager.webp` | MISSING | — |
| `jack-yeager.jpeg` | (sí existe) | — |

Todos por debajo del mínimo F33 §4.3 (1200×1500) y del hero 16:9 sugerido (2400×1350). Mike es el peor caso porque además de chico está en ratio 1.88:1 (casi 16:8), así que el crop a 16:9 pierde muy poco pero la cara queda en el eje. José, Girish y JP son 1:1, cropean a 16:9 dejando la mitad superior.

---

## E · Orden de merge sugerido

Cuando llegue el "ok" por rama:

1. `f25-fixes` · independiente · primero.
2. `f31-services`, `f31-home`, `f31-contact`, `f31-thinking` · independientes · pueden ir en cualquier orden entre ellos. `f31-contact` requiere que Fran cargue `NEXT_PUBLIC_CALENDLY_URL` en Vercel antes del merge.
3. `f33-case-mold` · reemplaza a `f26-case-karen`. Ojo: la data de Karen está en f26; los commits de Karen data se cargaron sobre f26 y f33 hereda todo. `f33-case-mold` incluye todos los commits necesarios (f25 + f26 + §E/§F/§G/§H + f33). Después del merge, main tiene Karen en el molde F33.
4. Rebase de `f28-proof` encima del `main` post-F33 (para que la home Karen proof lea el `metricGroups` de Karen que ahora está en main). Merge de `f28-proof`.
5. Merges de `f27-mike`, `f27-jose`, `f27-girish`, `f29-jack` (cada uno agrega su data · el molde ya está en main desde F33).

---

## F · Lo que quedó a medio en esta sesión

- **Capturas de F27/F29 en el molde F33**: pusheé los rebases pero sólo capturé los 5 heroes (Karen, Mike, José, Girish, Jack) y Karen full. Faltan Mike/José/Girish/Jack full-page en el molde F33. Fran los ve en dev cuando cheque el orden de merge.
- **F27 revisión 4.1 (páginas sin estilos en capturas)**: no lo profundicé. Las capturas de F27/F33 que mandé no muestran páginas sin estilos, así que asumo que era problema del capture harness previo que ya arreglé (killLoader + eager images).
- **f29-jack ended up including f28-proof commit** durante el rebase. No pisó nada porque son cambios distintos (f28 es home/services, f29 es jack), pero el diff de f29-jack contra main incluye ambos. Cuando se mergee f29, no hace falta preocuparse — main ya tendrá F33 y F28 antes de esa etapa.
- **F30, F31 (contact Calendly URL en Vercel), F32** están en el brief. F30 y F32 arrancan en siguiente sesión sobre el molde F33.
