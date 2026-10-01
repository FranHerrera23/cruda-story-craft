import fs from 'node:fs'
import path from 'node:path'
import type { Essay, EssayBlock } from '@/components/EssayLayout'

/* F53 · molde de ensayo · parser de `.md` → `Essay`.
   28-sep-2026 · Fran.

   Formato de entrada (verbatim del brief F53 §1):

     ---
     slug_en: find-your-larry-holmes
     slug_es: busca-a-tu-larry-holmes
     date: 2026-09-28
     meta_en: <=160 chars.
     meta_es: <=160 chars.
     hero: <filename dentro de public/essays/<basename>/>
     hero_credit: <opcional; vacío = sin crédito>
     ---

     ## Español: <título ES>

     *<dek en itálica>*

     Cuerpo…

     ---

     Más cuerpo…

     *<newsletter line al final; opcional>*

     ## English: <título EN>

     *<dek en itálica>*

     Cuerpo…

   Reglas de lectura (fijas, no se interpretan):
   - `## Español: X` / `## English: X` → h1 de la página ES / EN.
   - Primera línea en `*itálica*` después del h2 → dek. No se repite.
   - `---` dentro del cuerpo → `{ type: 'separator' }`.
   - `*texto*` inline → `<em>texto</em>` en el html del párrafo.
   - `"texto"` → comillas curvas (tipográficas), sin itálica.
   - Última línea en itálica que menciona "newsletter"/"suscribi" →
     linkea a `/newsletter` (mantiene la itálica).
   - Line `Sep 28, 2026 · @Fran` y otras metadata sueltas → se ignoran.

   Tipografía uniforme (§F53 nuevo item 7):
   - Straight `'` → curly `’` en apóstrofes (no al principio de palabra).
   - Straight `"..."` → curly `“...”` en pares.
   - `essay:check` compara texto ignorando esta conversión; falla si
     cualquier otro carácter cambia.

   Reading time: palabras del cuerpo / 200 wpm, redondeado hacia arriba
   con floor a 1. */

export type EssayMoldOptions = {
  contentDir?: string
  publicDir?: string
}

const DEFAULT_CONTENT_DIR = path.resolve(process.cwd(), 'content/essays')
const DEFAULT_PUBLIC_DIR = path.resolve(process.cwd(), 'public/essays')

type Frontmatter = {
  slug_en?: string
  slug_es?: string
  date?: string
  /* F53 (Fran 29-sep) · dos campos separados:
     · capsule_* · bloque AEO largo, sin límite. Va on-page bajo
       --cream (cuando no hay hero) y al JSON-LD description.
     · meta_*   · ≤ 160 chars, obligatoria. Va al <meta description>
       y a og:description / twitter:description. */
  capsule_en?: string
  capsule_es?: string
  meta_en?: string
  meta_es?: string
  hero?: string
  hero_credit?: string
  /* F53 §7 · alt del hero por idioma. Si no viene, el parser deja
     el alt vacío y el reporte lo marca "pendiente de generación
     automática". */
  alt_en?: string
  alt_es?: string
}

/* ═════════ Tipografía ═════════ */

/* F53 §7 · normaliza comillas y apóstrofes rectos a tipográficos.
   Regla del apóstrofe: entre letras (didn't, Ali's, he'd) o al final
   de palabra (kids'). Comillas dobles: en pares abiertos/cerrados. */
function normalizeQuotes(input: string): string {
  let s = input
  // Apóstrofes: entre letras/dígitos o post-letra
  s = s.replace(/([A-Za-zÀ-ÿ0-9])'/g, '$1’')
  s = s.replace(/'([A-Za-zÀ-ÿ])/g, '’$1')
  // Comillas dobles pareadas: primero abrir, después cerrar
  let open = true
  s = s.replace(/"/g, () => {
    const c = open ? '“' : '”'
    open = !open
    return c
  })
  return s
}

/* ═════════ Frontmatter ═════════ */

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error('missing frontmatter (--- YAML ---) at top of .md')
  const yaml = m[1]
  const body = m[2]
  const data: Frontmatter = {}
  for (const line of yaml.split('\n')) {
    const kv = line.match(/^([a-z_]+)\s*:\s*(.*)$/)
    if (!kv) continue
    const key = kv[1] as keyof Frontmatter
    const value = kv[2].trim()
    data[key] = value.length ? value : ''
  }
  return { data, body }
}

/* ═════════ Body por idioma ═════════ */

type LangSection = { lang: 'en' | 'es'; title: string; raw: string }

function splitByLanguage(body: string): LangSection[] {
  const out: LangSection[] = []
  const re = /^##\s+(Español|English):\s*(.+)$/gm
  const matches: Array<{ lang: 'en' | 'es'; title: string; start: number; end: number }> = []
  let m: RegExpExecArray | null
  while ((m = re.exec(body)) !== null) {
    const isEs = m[1].toLowerCase() === 'español'
    matches.push({
      lang: isEs ? 'es' : 'en',
      title: m[2].trim(),
      start: m.index + m[0].length,
      end: -1,
    })
  }
  /* Sección termina en el siguiente `## Español:` / `## English:`.
     Buscamos con la misma regex (no con `indexOf('## ')` porque
     `### h3` empieza con `## ` y truncaría el body antes del primer
     subtítulo del ensayo · bug reportado en la migración de
     third-place). */
  const headerRe = /^##\s+(Español|English):/m
  for (let i = 0; i < matches.length; i++) {
    if (i + 1 < matches.length) {
      matches[i].end = matches[i + 1].start
      // El .end apunta después del `## Header:` del siguiente · le
      // restamos la longitud del header para cortar antes.
      const rest = body.slice(matches[i].start)
      const nextHeader = rest.match(headerRe)
      if (nextHeader && nextHeader.index !== undefined) {
        matches[i].end = matches[i].start + nextHeader.index
      }
    } else {
      matches[i].end = body.length
    }
    out.push({
      lang: matches[i].lang,
      title: matches[i].title,
      raw: body.slice(matches[i].start, matches[i].end).trim(),
    })
  }
  return out
}

/* ═════════ Parseo de cuerpo → blocks ═════════ */

const NEWSLETTER_TRIGGERS = ['newsletter', 'suscribí', 'suscribi', 'subscribe']

/* F53 §1 · convierte inline:
     `**bold**` → `<strong>bold</strong>`
     `*italic*` → `<em>italic</em>`
     `[text](url)` → `<a href="url">text</a>` · externos con
       `rel="noopener"` en la misma pestaña (Fran 30-sep §7 nuevo
       ensayo im-from-the-government).
   Orden: links primero (extraemos texto y url con placeholders),
   después bold, después em. Así los markdown adentro del texto
   del link se procesan sin que la regex de link los rompa. */
function isExternalHref(url: string): boolean {
  return /^https?:\/\//i.test(url) &&
    !/^https?:\/\/(www\.)?thecruda\.com(\/|$)/i.test(url)
}
function inlineMarkupHtml(text: string): string {
  /* Links · placeholders `<idx>` para preservar mientras
     corren bold/em. El PUA U+E000 no aparece en copy real. */
  const linkStore: string[] = []
  let s = text.replace(/\[([^\]\n]+)\]\((\S+?)\)/g, (_m, txt, url) => {
    const idx = linkStore.length
    const inner = inlineMarkupHtml(txt) // recursivo · bold/em dentro
    const rel = isExternalHref(url) ? ' rel="noopener"' : ''
    linkStore.push(`<a href="${url}"${rel}>${inner}</a>`)
    return `${idx}`
  })
  s = s.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
  s = s.replace(/(\d+)/g, (_m, idx) => linkStore[Number(idx)])
  return s
}

function isNewsletterLine(line: string): boolean {
  const inner = line.replace(/^\*|\*$/g, '').toLowerCase()
  return line.startsWith('*') && line.endsWith('*') &&
    NEWSLETTER_TRIGGERS.some(t => inner.includes(t))
}

function buildNewsletterBlock(line: string, lang: 'en' | 'es'): EssayBlock {
  const inner = line.slice(1, -1).trim()
  /* Fran 30-sep · en EN la caja beehiiv (SubscribeForm) va abajo,
     y esta línea funciona como TÍTULO de la caja · sin link. En ES
     no hay caja, así que preservamos el link a /newsletter como
     ubicación de continuidad.
     Marker `data-newsletter="1"` para que essay:check pueda contar
     el bloque sin depender del href (que hoy sólo aparece en ES). */
  if (lang === 'es') {
    const cta = /(Suscribite[^.!?]*\.)/
    const withLink = inner.replace(cta, '<a href="/newsletter">$1</a>')
    return { type: 'p', html: `<em data-newsletter="1">${withLink}</em>` }
  }
  return { type: 'p', html: `<em data-newsletter="1">${inner}</em>` }
}

function paragraphToBlock(text: string, lang: 'en' | 'es'): EssayBlock | null {
  const trimmed = text.trim()
  if (!trimmed) return null
  if (isNewsletterLine(trimmed)) return buildNewsletterBlock(trimmed, lang)
  const hasInline =
    /\*[^*\n]+\*/.test(trimmed) ||
    /\[[^\]\n]+\]\(\S+?\)/.test(trimmed)
  if (hasInline) {
    return { type: 'p', html: inlineMarkupHtml(trimmed) }
  }
  return { type: 'p', text: trimmed }
}

/* F53 §3 (Fran 29-sep) · sintaxis extendida para migrar los ensayos
   legacy sin perder copy:
     ### X        → { type: 'h2', text: X }  (subtítulo interno)
     > X          → { type: 'pull', text: X }
     > X\n> — Y   → { type: 'quote', text: X, attribution: Y }
     >> X         → { type: 'quote', text: X }  (sin atribución)
     - X\n- Y     → { type: 'checklist', items: [X, Y, ...] }

   Distinción `>` vs `>>` (Fran 30-sep): el original tiene 2 quotes
   sin atribución en founder-worth-70M · con `>` se reencuadraban
   como pull; con `>>` se preservan como quote (border-left vs
   pull). No hay reencuadre editorial: source of truth manda.

   La firma legacy (colofón tipo "EVERYTHING IS A NARRATIVE." o
   "thecruda.com") no tiene sintaxis en el .md · se elimina en la
   migración. Si en el futuro un ensayo necesita una línea de firma
   propia se agrega el bloque explícitamente al parser. */

function parseHeadingBlock(raw: string): EssayBlock | null {
  const m = raw.match(/^###\s+(.+)$/)
  if (!m) return null
  return { type: 'h2', text: m[1].trim() }
}

function parseBlockquoteBlock(raw: string): EssayBlock | null {
  const lines = raw.split('\n').map(l => l.trim())
  if (!lines.every(l => l.startsWith('>'))) return null
  // `>>` en TODAS las líneas → quote sin atribución.
  if (lines.every(l => l.startsWith('>>'))) {
    const stripped = lines.map(l => l.replace(/^>>\s?/, '').trim()).join(' ').trim()
    if (/\*[^*\n]+\*/.test(stripped)) {
      return { type: 'quote', text: stripRawInline(stripped), html: inlineMarkupHtml(stripped) }
    }
    return { type: 'quote', text: stripped }
  }
  const stripped = lines.map(l => l.replace(/^>\s?/, '').trim())
  const last = stripped[stripped.length - 1]
  const attrMatch = last.match(/^(?:—|--|-\s)\s*(.+)$/)
  if (attrMatch && stripped.length > 1) {
    const raw = stripped.slice(0, -1).join(' ').trim()
    return { type: 'quote', text: stripRawInline(raw), attribution: attrMatch[1].trim() }
  }
  // Pull quote · si tiene markup inline (bold/italic), sale como html.
  const raw2 = stripped.join(' ').trim()
  if (/\*[^*\n]+\*/.test(raw2)) {
    return { type: 'pull', html: inlineMarkupHtml(raw2), text: stripRawInline(raw2) }
  }
  return { type: 'pull', text: raw2 }
}

function stripRawInline(t: string): string {
  return t.replace(/\*\*([^*\n]+)\*\*/g, '$1').replace(/\*([^*\n]+)\*/g, '$1')
}

function parseChecklistBlock(raw: string): EssayBlock | null {
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean)
  if (!lines.every(l => /^-\s+/.test(l))) return null
  const items = lines.map(l => l.replace(/^-\s+/, '').trim())
  return { type: 'checklist', items }
}

/* F53 · Fran 30-sep · lista numerada `1.` `2.` ... → `<ol>`.
   Cada item soporta bold/em/links inline (misma pipeline que
   párrafos). El type `ol` en EssayLayout renderea `<ol><li>…`
   con contadores nativos del navegador. */
function parseOrderedListBlock(raw: string): EssayBlock | null {
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean)
  if (!lines.every(l => /^\d+\.\s+/.test(l))) return null
  const items = lines.map(l => inlineMarkupHtml(l.replace(/^\d+\.\s+/, '').trim()))
  return { type: 'ol', items }
}

function parseBody(raw: string, lang: 'en' | 'es'): {
  dek: string | undefined
  blocks: EssayBlock[]
} {
  const rawBlocks = raw.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
  let dek: string | undefined
  const blocks: EssayBlock[] = []
  for (let i = 0; i < rawBlocks.length; i++) {
    const b = rawBlocks[i]
    // dek · primer bloque en *itálica* de UNA sola línea.
    if (
      !dek && blocks.length === 0 &&
      b.startsWith('*') && b.endsWith('*') &&
      !b.startsWith('**') &&
      !b.slice(1, -1).includes('\n') &&
      !isNewsletterLine(b)
    ) {
      dek = b.slice(1, -1).trim()
      continue
    }
    if (b === '---') { blocks.push({ type: 'separator' }); continue }
    const h2 = parseHeadingBlock(b)
    if (h2) { blocks.push(h2); continue }
    const bq = parseBlockquoteBlock(b)
    if (bq) { blocks.push(bq); continue }
    const ol = parseOrderedListBlock(b)
    if (ol) { blocks.push(ol); continue }
    const cl = parseChecklistBlock(b)
    if (cl) { blocks.push(cl); continue }
    const p = paragraphToBlock(b, lang)
    if (p) blocks.push(p)
  }
  return { dek, blocks }
}

/* ═════════ Reading time ═════════ */

function wordCount(blocks: EssayBlock[]): number {
  let n = 0
  for (const b of blocks) {
    if (b.type === 'p') {
      const src = b.text ?? b.html ?? ''
      const stripped = src.replace(/<[^>]+>/g, ' ')
      n += stripped.trim().split(/\s+/).filter(Boolean).length
    }
    if (b.type === 'h2' || b.type === 'h3') {
      n += (b.text ?? '').trim().split(/\s+/).filter(Boolean).length
    }
  }
  return n
}

function readingMinutes(blocks: EssayBlock[]): number {
  const w = wordCount(blocks)
  return Math.max(1, Math.round(w / 200))
}

/* ═════════ Alt automático ═════════ */

/* Fran (mensaje 28-sep 17:00): "El alt no hace falta que me lo
   consultes: escribilo como descripción literal de lo que se ve,
   sin nombres, y dejalo en el reporte."
   Por ahora el molde deja el alt vacío si la .md no lo declara y
   el reporte lo marca como pendiente. Cuando llegue F53.1 con el
   alt-generator (probable via LLM de visión), este bloque cambia. */
function defaultHeroAlt(): string {
  return ''
}

/* ═════════ Public API ═════════ */

export type LoadedEssay = {
  slug: string
  language: 'en' | 'es'
  data: Essay
  sourceFile: string
  meta: {
    words: number
    hadNewsletter: boolean
  }
}

export function loadEssay(mdPath: string): LoadedEssay[] {
  const raw = fs.readFileSync(mdPath, 'utf-8')
  const { data: fm, body } = parseFrontmatter(raw)
  if (!fm.date) throw new Error(`${mdPath}: missing 'date' in frontmatter`)
  if (!fm.meta_en && !fm.meta_es) {
    throw new Error(`${mdPath}: at least one of meta_en / meta_es required`)
  }

  const basename = path.basename(mdPath, '.md')
  const sections = splitByLanguage(body)
  if (sections.length === 0) {
    throw new Error(`${mdPath}: no '## English:' or '## Español:' section`)
  }

  const heroFile = fm.hero || ''
  const heroPathAbs = heroFile
    ? path.resolve(DEFAULT_PUBLIC_DIR, basename, heroFile)
    : ''
  const heroExists = heroFile ? fs.existsSync(heroPathAbs) : false
  const heroPublicPath = heroFile ? `/essays/${basename}/${heroFile}` : undefined
  /* F53 §8 · og.jpg 1200×630 pre-generada por scripts/essay-og.mjs.
     Se expone en `Essay.ogImage` sólo si existe en disco al cargar. */
  const ogPathAbs = path.resolve(DEFAULT_PUBLIC_DIR, basename, 'og.jpg')
  const ogExists = fs.existsSync(ogPathAbs)
  const ogPublicPath = ogExists ? `/essays/${basename}/og.jpg` : undefined

  const out: LoadedEssay[] = []
  for (const sec of sections) {
    const normalizedBody = normalizeQuotes(sec.raw)
    const { dek, blocks } = parseBody(normalizedBody, sec.lang)

    const slug = sec.lang === 'en' ? fm.slug_en : fm.slug_es
    if (!slug) {
      throw new Error(`${mdPath}: missing slug_${sec.lang} for the ${sec.lang} section`)
    }

    const meta = sec.lang === 'en' ? fm.meta_en : fm.meta_es
    if (!meta) {
      throw new Error(`${mdPath}: missing meta_${sec.lang}`)
    }
    /* Capsule opcional · si no viene, se usa la meta como fallback
       para preservar el bloque on-page (que hoy renderiza cuando
       no hay hero). Esencial para los ensayos nuevos que no
       requieren cápsula AEO larga. */
    const capsule = (sec.lang === 'en' ? fm.capsule_en : fm.capsule_es) || meta

    const alternates = { en: fm.slug_en, es: fm.slug_es } as {
      en?: string; es?: string
    }

    const hadNewsletter = blocks.some(b =>
      b.type === 'p' && b.html?.includes('href="/newsletter"'),
    )

    const essay: Essay = {
      slug,
      language: sec.lang,
      category: sec.lang === 'es' ? 'Ensayo' : 'Essay',
      contentType: 'Essay',
      readingMinutes: readingMinutes(blocks),
      publishedAt: fm.date,
      updatedAt: fm.date,
      title: normalizeQuotes(sec.title),
      deck: dek ? normalizeQuotes(dek) : undefined,
      answerCapsule: normalizeQuotes(capsule),
      metaDescription: normalizeQuotes(meta),
      heroImage: heroExists ? heroPublicPath : undefined,
      heroAlt: heroExists
        ? ((sec.lang === 'en' ? fm.alt_en : fm.alt_es) || defaultHeroAlt())
        : undefined,
      heroCredit: fm.hero_credit || undefined,
      ogImage: ogPublicPath,
      alternates,
      body: blocks,
    }

    out.push({
      slug,
      language: sec.lang,
      data: essay,
      sourceFile: mdPath,
      meta: {
        words: wordCount(blocks),
        hadNewsletter,
      },
    })
  }
  return out
}

export function loadAllEssays(opts?: EssayMoldOptions): LoadedEssay[] {
  const contentDir = opts?.contentDir ?? DEFAULT_CONTENT_DIR
  if (!fs.existsSync(contentDir)) return []
  const files = fs
    .readdirSync(contentDir)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'))
    .map(f => path.join(contentDir, f))
  const all: LoadedEssay[] = []
  for (const f of files) {
    try {
      const parsed = loadEssay(f)
      all.push(...parsed)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      throw new Error(`essay-mold: ${msg}`)
    }
  }
  return all
}
