#!/usr/bin/env node
/* F53 · migrator .ts → .md
   Convierte un ensayo (o par bilingüe) desde `src/content/essays/*.ts`
   al formato .md de F53 §1. Preserva copy verbatim, aplica la
   normalización tipográfica de F53 §8, y desactiva la firma legacy
   (Fran 29-sep · el colofón sale porque redunda con el CTA).

   Uso:
     node scripts/essay-migrate.mjs <slug_en> [<slug_es>]
     node scripts/essay-migrate.mjs why-you-cant-write-your-own-website
     node scripts/essay-migrate.mjs third-place tercer-lugar

   Output:
     content/essays/<basename>.md  (basename = slug_en o el único slug)
     public/essays/<basename>/     (dir vacío, la foto la agrega Fran)

   Después del migrate, correr `npm run essay:check` para validar. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const TS_DIR = path.join(ROOT, 'src/content/essays')
const MD_DIR = path.join(ROOT, 'content/essays')

function normalizeQuotes(input) {
  let s = input
  s = s.replace(/([A-Za-zÀ-ÿ0-9])'/g, '$1’')
  s = s.replace(/'([A-Za-zÀ-ÿ])/g, '’$1')
  let open = true
  s = s.replace(/"/g, () => {
    const c = open ? '“' : '”'
    open = !open
    return c
  })
  return s
}

/* Extrae el objeto Essay del .ts usando `new Function` y eval en
   sandbox. Los .ts existentes son data files puros (sin lógica),
   así que evaluando el módulo con un mock del import obtenemos
   el objeto. */
async function loadEssayTs(slug) {
  const file = path.join(TS_DIR, slug + '.ts')
  if (!fs.existsSync(file)) throw new Error('no encuentro ' + file)
  const raw = fs.readFileSync(file, 'utf-8')
  // Extraer entre `= {` y el `}` final de nivel top
  const startMatch = raw.match(/export\s+const\s+\w+\s*:\s*\w+\s*=\s*(\{)/)
  if (!startMatch) throw new Error('no encuentro export const en ' + file)
  const start = startMatch.index + startMatch[0].length - 1
  let depth = 0
  let end = -1
  let inString = false
  let stringChar = ''
  let escape = false
  for (let i = start; i < raw.length; i++) {
    const c = raw[i]
    if (escape) { escape = false; continue }
    if (c === '\\') { escape = true; continue }
    if (inString) {
      if (c === stringChar) inString = false
      continue
    }
    if (c === '"' || c === "'" || c === '`') { inString = true; stringChar = c; continue }
    if (c === '{') depth++
    else if (c === '}') { depth--; if (depth === 0) { end = i + 1; break } }
  }
  if (end === -1) throw new Error('no cierra el objeto en ' + file)
  const objSrc = raw.slice(start, end)
  // Evaluar como JS · el objeto usa sintaxis JS válida (TypeScript
  // permite object literals que son legales en JS). No hay tipos
  // que romperían un `Function` eval en el objeto.
  const fn = new Function('return ' + objSrc)
  return fn()
}

/* Convierte un array de EssayBlock legacy a texto .md.
   Reglas Fran 29-sep:
     p       · texto (con html → markdown inline)
     h2      · ### text
     pull    · > text
     quote   · > text\n> — attribution
     checklist · - item por línea
     separator · ---
     signature · SE ELIMINA (Fran 29-sep · colofón redundante)
     h3      · ### text (mismo tratamiento que h2 · raro en el corpus) */
function htmlInlineToMd(html) {
  if (!html) return ''
  let s = html
  s = s.replace(/<strong>([^<]+)<\/strong>/g, '**$1**')
  s = s.replace(/<em>([^<]+)<\/em>/g, '*$1*')
  return s
}

function blocksToMd(blocks, lang) {
  const out = []
  const droppedSignatures = []
  for (const b of blocks) {
    if (b.type === 'p') {
      if (b.html) out.push(htmlInlineToMd(b.html))
      else out.push(b.text || '')
    } else if (b.type === 'h2' || b.type === 'h3') {
      out.push('### ' + (b.text || ''))
    } else if (b.type === 'pull') {
      const text = b.html ? htmlInlineToMd(b.html) : (b.text || '')
      out.push('> ' + text)
    } else if (b.type === 'quote') {
      const text = b.text || ''
      if (b.attribution) {
        out.push('> ' + text + '\n> — ' + b.attribution)
      } else {
        out.push('> ' + text)
      }
    } else if (b.type === 'checklist') {
      const items = b.items || []
      out.push(items.map(x => '- ' + x).join('\n'))
    } else if (b.type === 'separator') {
      out.push('---')
    } else if (b.type === 'signature') {
      droppedSignatures.push(b.text || '')
      // no push
    } else {
      out.push('/* UNKNOWN BLOCK TYPE: ' + b.type + ' */')
    }
  }
  return { md: out.join('\n\n'), droppedSignatures }
}

function essaysToMd(en, es) {
  const one = en || es
  const fm = ['---']
  if (en) fm.push('slug_en: ' + en.slug)
  if (es) fm.push('slug_es: ' + es.slug)
  fm.push('date: ' + one.publishedAt)
  if (en) fm.push('meta_en: ' + en.answerCapsule.trim().replace(/\n\s+/g, ' '))
  if (es) fm.push('meta_es: ' + es.answerCapsule.trim().replace(/\n\s+/g, ' '))
  fm.push('hero:')
  fm.push('hero_credit:')
  fm.push('---')

  const dropped = { en: [], es: [] }
  const sections = []
  if (es) {
    const { md, droppedSignatures } = blocksToMd(es.body, 'es')
    dropped.es = droppedSignatures
    const dek = es.deck ? '*' + es.deck + '*\n\n' : ''
    sections.push('## Español: ' + es.title + '\n\n' + dek + md)
  }
  if (en) {
    const { md, droppedSignatures } = blocksToMd(en.body, 'en')
    dropped.en = droppedSignatures
    const dek = en.deck ? '*' + en.deck + '*\n\n' : ''
    sections.push('## English: ' + en.title + '\n\n' + dek + md)
  }

  const doc = fm.join('\n') + '\n\n' + sections.join('\n\n')
  return { md: normalizeQuotes(doc), dropped }
}

async function main() {
  const slugs = process.argv.slice(2).filter(Boolean)
  if (slugs.length === 0) {
    console.error('usage: node scripts/essay-migrate.mjs <slug_en> [<slug_es>]')
    process.exit(1)
  }
  const [slugEn, slugEs] = slugs.length === 2 ? slugs : [slugs[0], null]

  const enEssay = await loadEssayTs(slugEn).catch(e => {
    console.error('EN load falló:', e.message); process.exit(1)
  })
  let esEssay = null
  if (slugEs) {
    esEssay = await loadEssayTs(slugEs).catch(e => {
      console.error('ES load falló:', e.message); process.exit(1)
    })
  }

  // Detección del par bilingüe · si el .ts EN declara alternates.es,
  // y el usuario no pasó slug_es, cargamos también el ES.
  if (!esEssay && enEssay.alternates?.es && enEssay.alternates.es !== enEssay.slug) {
    try {
      esEssay = await loadEssayTs(enEssay.alternates.es)
      console.log('detected ES pair via alternates: ' + enEssay.alternates.es)
    } catch { /* opcional */ }
  }

  // El basename del .md preserva el pair · usamos el slug_en.
  const basename = enEssay.language === 'en' ? enEssay.slug : (esEssay?.slug || enEssay.slug)
  const outPath = path.join(MD_DIR, basename + '.md')

  // Orden: si tenemos par, ES primero, EN después (siguiendo el
  // orden del larry-holmes.md source).
  const enForOut = enEssay.language === 'en' ? enEssay : (esEssay?.language === 'en' ? esEssay : null)
  const esForOut = enEssay.language === 'es' ? enEssay : (esEssay?.language === 'es' ? esEssay : null)

  const { md, dropped } = essaysToMd(enForOut, esForOut)

  fs.mkdirSync(MD_DIR, { recursive: true })
  fs.writeFileSync(outPath, md)
  // Directorio para la foto
  const heroDir = path.join(ROOT, 'public/essays', basename)
  fs.mkdirSync(heroDir, { recursive: true })

  console.log('wrote ' + path.relative(process.cwd(), outPath))
  if (dropped.en.length + dropped.es.length > 0) {
    console.log('DROPPED signatures (colofón F53 §1 · Fran 29-sep):')
    for (const s of dropped.en) console.log('  [EN] ' + s)
    for (const s of dropped.es) console.log('  [ES] ' + s)
  }
}

main().catch(e => {
  console.error('essay:migrate falló: ' + (e.stack || e.message))
  process.exit(2)
})
