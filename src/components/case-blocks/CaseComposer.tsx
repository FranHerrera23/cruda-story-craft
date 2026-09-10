import './case-blocks.css'
import {
  sourceSerif4,
  allClientFontVariables,
  resolveClientType,
} from './fonts'
import BlockHead from './BlockHead'
import BlockLead from './BlockLead'
import BlockBand from './BlockBand'
import BlockProse from './BlockProse'
import BlockPull from './BlockPull'
import BlockCredits from './BlockCredits'
import BlockNext from './BlockNext'
import BlockSlab from './BlockSlab'
import BlockSystem from './BlockSystem'
import BlockVoice from './BlockVoice'
import BlockFigures from './BlockFigures'
import BlockBuilt from './BlockBuilt'
import BlockPassages from './BlockPassages'
import BlockPair from './BlockPair'
import BlockBleed from './BlockBleed'
import CaseChrome from './CaseChrome'
import BlockClaim from './BlockClaim'
import BlockManifesto from './BlockManifesto'
import BlockSpx from './BlockSpx'
import BlockPillars from './BlockPillars'
import BlockPiece from './BlockPiece'
import BlockSeries from './BlockSeries'
import type { Block, CaseStudyV2 } from './types'

/* Task 11 · compositor.
   Mapea `type` → componente y renderiza en orden. Sin bloques
   hardcodeados por caso, sin condicionales por slug. Bloques con
   `type` desconocido (todavía no implementados) se omiten y logueán
   en dev — no rompen la página. Es el contrato del sistema (§4).

   Identidad: los tres valores (c1, c2, type) se inyectan como CSS
   custom properties en .cb-root vía inline style. Fallbacks viven
   en case-blocks.css. Si el caso no declara identidad, los tokens
   caen a --black, --ink y --g. */

const KNOWN_TYPES = new Set<Block['type']>([
  'head',
  'lead',
  'band',
  'prose',
  'pull',
  'credits',
  'next',
  'slab',
  'system',
  'voice',
  'figures',
  'built',
  'passages',
  'pair',
  'bleed',
  'claim',
  'manifesto',
  'spx',
  'pillars',
  'piece',
  'series',
])

function renderBlock(block: Block, index: number) {
  const key = `${block.type}-${index}`
  switch (block.type) {
    case 'head':
      return (
        <BlockHead
          key={key}
          title={block.title}
          oneLiner={block.oneLiner}
          tags={block.tags}
          facts={block.facts}
        />
      )
    case 'lead':
      return <BlockLead key={key} asset={block.asset} />
    case 'band':
      return (
        <BlockBand
          key={key}
          asset={block.asset}
          caption={block.caption}
          groups={block.groups}
        />
      )
    case 'prose':
      return (
        <BlockProse
          key={key}
          label={block.label}
          paragraphs={block.paragraphs}
        />
      )
    case 'pull':
      return <BlockPull key={key} quote={block.quote} />
    case 'credits':
      return (
        <BlockCredits
          key={key}
          facts={block.facts}
          attribution={block.attribution}
        />
      )
    case 'next':
      return (
        <BlockNext
          key={key}
          slug={block.slug}
          label={block.label}
          oneLiner={block.oneLiner}
        />
      )
    case 'slab':
      return (
        <BlockSlab
          key={key}
          tone={block.tone}
          items={block.children}
          renderBlock={renderBlock}
        />
      )
    case 'system':
      return (
        <BlockSystem key={key} label={block.label} cells={block.cells} />
      )
    case 'voice':
      return (
        <BlockVoice
          key={key}
          label={block.label}
          quote={block.quote}
          attribution={block.attribution}
        />
      )
    case 'figures':
      return <BlockFigures key={key} items={block.items} />

    case 'built':
      return (
        <BlockBuilt key={key} built={block.built} changes={block.changes} />
      )
    case 'passages':
      return (
        <BlockPassages
          key={key}
          label={block.label}
          featured={block.featured}
          archive={block.archive}
        />
      )
    case 'pair':
      return <BlockPair key={key} assets={block.assets} />
    case 'bleed':
      return <BlockBleed key={key} asset={block.asset} />
    case 'claim':
      return (
        <BlockClaim
          key={key}
          text={block.text}
          gloss={block.gloss}
          note={block.note}
        />
      )
    case 'manifesto':
      return (
        <BlockManifesto
          key={key}
          who={block.who}
          paragraphs={block.paragraphs}
          lines={block.lines}
        />
      )
    case 'spx':
      return (
        <BlockSpx
          key={key}
          label={block.label}
          items={block.items}
          src={block.src}
        />
      )
    case 'pillars':
      return (
        <BlockPillars
          key={key}
          label={block.label}
          items={block.items}
          note={block.note}
        />
      )
    case 'piece':
      return (
        <BlockPiece
          key={key}
          label={block.label}
          content={block.content}
          sidebar={block.sidebar}
          note={block.note}
        />
      )
    case 'series':
      return (
        <BlockSeries
          key={key}
          label={block.label}
          subtitle={block.subtitle}
          episodes={block.episodes}
          note={block.note}
        />
      )
    default:
      // §4 — type desconocido: omitir y loguear, no romper.
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          `[CaseComposer] Unknown block type "${(block as { type: string }).type}" at index ${index} — omitted.`
        )
      }
      return null
  }
}

/* §7 regla 1 — chequeo verbatim de pull quotes.
   Reúne toda la prosa (prose, band, passages) y verifica que cada
   pull aparezca palabra por palabra.

   Política por fase:
     - phase-production-build (SSG durante `next build`) → THROW.
       Rompe el build y bloquea el deploy. Es el gate que Fran
       pidió: "no debería poder shippear".
     - runtime prod / dev / cualquier otra fase → warn. La página
       se sirve, el error queda en logs. Si un data file entra por
       otra vía (CMS, hot-swap) una cita rota no debería tirar la
       página del visitante — el gate está en el deploy, no en el
       request.

   Detección de fase via NEXT_PHASE (Next.js expone la variable
   durante `next build` con el valor 'phase-production-build'). */
function flatten(blocks: Block[]): Block[] {
  const out: Block[] = []
  for (const b of blocks) {
    out.push(b)
    if (b.type === 'slab') out.push(...flatten(b.children))
  }
  return out
}

function verifyPullQuotes(blocks: Block[]) {
  const all = flatten(blocks)
  const prose: string[] = []
  for (const b of all) {
    if (b.type === 'prose') prose.push(...b.paragraphs)
    else if (b.type === 'band') {
      for (const g of b.groups) prose.push(...g.paragraphs)
    } else if (b.type === 'manifesto') {
      /* manifesto.paragraphs es prosa nuestra sobre la marca; entra.
         manifesto.lines es copy del cliente; NO entra. */
      prose.push(...b.paragraphs)
    } else if (b.type === 'pillars') {
      /* pillars.body es prosa nuestra; entra. Headings son display
         (no argumento); NO entran. */
      for (const item of b.items) prose.push(item.body)
    } else if (b.type === 'piece') {
      /* piece.content son las palabras del cliente/autor (pieza
         publicada, recreada); NO entra. piece.sidebar.why es
         prosa NUESTRA sobre por qué esa pieza importa; SÍ entra. */
      if (b.sidebar.why) prose.push(b.sidebar.why)
    }
    /* passages.excerpt, claim.text/gloss/note, manifesto.lines, y
       voice.quote NO entran al pool — son copy del caso o del
       autor, no argumento nuestro. Una pull que quiera venir de
       ahí se declara como prose block adyacente, explícita. */
  }
  const pool = prose.join(' ')
  const missing: string[] = []
  for (const b of all) {
    if (b.type !== 'pull') continue
    if (!pool.includes(b.quote)) missing.push(b.quote)
  }
  if (missing.length === 0) return
  const msg =
    `[CaseComposer] Pull quote(s) not verbatim in same-page prose ` +
    `(${missing.length}). Every pull must be lifted word-for-word ` +
    `from a paragraph on the same page (§7 regla 1). Offenders:\n` +
    missing.map((q) => `  - "${q}"`).join('\n')
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    throw new Error(msg)
  }
  // eslint-disable-next-line no-console
  console.warn(msg)
}

function filterDrafts(blocks: Block[]): Block[] {
  const out: Block[] = []
  for (const b of blocks) {
    if (b.draft) continue
    if (b.type === 'slab') {
      /* Slab con todos sus hijos draft = sin contenido = skip.
         Slab con algunos hijos draft = filtrar los hijos, mantener
         la envolvente pintada. */
      const kids = filterDrafts(b.children)
      if (kids.length === 0) continue
      out.push({ ...b, children: kids })
      continue
    }
    out.push(b)
  }
  return out
}

export default function CaseComposer({
  cs,
  preview = false,
}: {
  cs: CaseStudyV2
  /* preview: cuando true, los bloques con `draft: true` se
     renderizan. Cuando false (default = producción, /work/[slug]),
     los drafts se omiten. Permite publicar el layout de un caso
     con placeholders textuales sin riesgo de que salgan solos.
     Ver BlockBase.draft en types.ts. */
  preview?: boolean
}) {
  /* Filtro de drafts corre PRIMERO — verify + unknown-types operan
     sobre bloques que realmente van a renderizar. Un pull cuya prosa
     vive en un draft está roto en producción (donde el draft no
     está); el check refleja eso. */
  const blocks = preview ? cs.blocks : filterDrafts(cs.blocks)
  verifyPullQuotes(blocks)

  const identity = cs.identity
  /* Manifest resuelve identity.type → font-family stack + clase de
     next/font. Si la clave no existe, resolveClientType devuelve null
     y --c-type queda sin sobrescribir (fallback en CSS: --g). */
  const typeResolved = resolveClientType(identity?.type)
  if (
    process.env.NODE_ENV !== 'production' &&
    identity?.type &&
    !typeResolved
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      `[CaseComposer] identity.type key "${identity.type}" is not registered in the font manifest — --c-type falls back to --g.`
    )
  }

  /* Style inline con los tokens del caso. Los tokens del head
     (--c-h1-*) sólo se inyectan cuando identity.head existe; sino
     el CSS usa los defaults. */
  const rootStyle = identity
    ? ({
        ['--c-1' as string]: identity.c1,
        ['--c-2' as string]: identity.c2,
        ...(typeResolved
          ? { ['--c-type' as string]: typeResolved.family }
          : {}),
        ...(identity.head?.weight !== undefined
          ? { ['--c-h1-weight' as string]: String(identity.head.weight) }
          : {}),
        ...(identity.head?.tracking
          ? { ['--c-h1-tracking' as string]: identity.head.tracking }
          : {}),
        ...(identity.head?.size
          ? { ['--c-h1-size' as string]: identity.head.size }
          : {}),
        ...(identity.head?.boldWeight !== undefined
          ? { ['--c-h1-b-weight' as string]: String(identity.head.boldWeight) }
          : {}),
        ...(identity.head?.boldTracking
          ? { ['--c-h1-b-tracking' as string]: identity.head.boldTracking }
          : {}),
      } as React.CSSProperties)
    : undefined

  const allBlocks = flatten(blocks)
  const knownCount = allBlocks.filter((b) => KNOWN_TYPES.has(b.type)).length
  if (process.env.NODE_ENV !== 'production' && knownCount < allBlocks.length) {
    // eslint-disable-next-line no-console
    console.warn(
      `[CaseComposer] ${allBlocks.length - knownCount} of ${allBlocks.length} blocks are unknown types and were omitted.`
    )
  }

  /* Todas las fuentes de cliente del manifest se declaran en el
     contenedor. Las que el caso no usa quedan disponibles pero no
     se activan hasta que un font-family las pida — costo de carga
     de una fuente no usada = 0 (next/font solo emite el CSS de la
     face; el download del binario sucede on-demand). */
  const rootClass = [
    'cb-root',
    sourceSerif4.variable,
    allClientFontVariables(),
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClass} style={rootStyle}>
      <CaseChrome />
      {blocks.map((b, i) => renderBlock(b, i))}
    </div>
  )
}
