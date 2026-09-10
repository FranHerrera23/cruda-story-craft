import './case-blocks.css'
import { sourceSerif4 } from './fonts'
import BlockHead from './BlockHead'
import BlockLead from './BlockLead'
import BlockBand from './BlockBand'
import BlockProse from './BlockProse'
import BlockPull from './BlockPull'
import BlockCredits from './BlockCredits'
import BlockNext from './BlockNext'
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
   Reúne toda la prosa (prose, band) y verifica que cada pull aparezca
   palabra por palabra. Si falta, es un bug del data file. Dev-only —
   no pisa el render en prod. */
function verifyPullQuotes(blocks: Block[]) {
  if (process.env.NODE_ENV === 'production') return
  const prose: string[] = []
  for (const b of blocks) {
    if (b.type === 'prose') prose.push(...b.paragraphs)
    else if (b.type === 'band') {
      for (const g of b.groups) prose.push(...g.paragraphs)
    } else if (b.type === 'passages') {
      prose.push(...b.paragraphs)
    }
  }
  const pool = prose.join(' ')
  for (const b of blocks) {
    if (b.type !== 'pull') continue
    if (!pool.includes(b.quote)) {
      // eslint-disable-next-line no-console
      console.warn(
        `[CaseComposer] Pull quote not found verbatim in page prose:\n  "${b.quote}"`
      )
    }
  }
}

export default function CaseComposer({ cs }: { cs: CaseStudyV2 }) {
  verifyPullQuotes(cs.blocks)

  const identity = cs.identity
  const rootStyle = identity
    ? ({
        ['--c-1' as string]: identity.c1,
        ['--c-2' as string]: identity.c2,
        ['--c-type' as string]: identity.type,
      } as React.CSSProperties)
    : undefined

  const knownCount = cs.blocks.filter((b) => KNOWN_TYPES.has(b.type)).length
  if (process.env.NODE_ENV !== 'production' && knownCount < cs.blocks.length) {
    // eslint-disable-next-line no-console
    console.warn(
      `[CaseComposer] ${cs.blocks.length - knownCount} of ${cs.blocks.length} blocks are unknown types and were omitted.`
    )
  }

  return (
    <div className={`cb-root ${sourceSerif4.variable}`} style={rootStyle}>
      {cs.blocks.map((b, i) => renderBlock(b, i))}
    </div>
  )
}
