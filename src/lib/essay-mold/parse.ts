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
  meta_en?: string
  meta_es?: string
  hero?: string
  hero_credit?: string
  /* F53 §7 · alt del hero por idioma. Si no viene, el parser deja
     el alt vacío y el reporte lo marca "pendiente de generación
     automática". Cuando F53.1 sume el alt-generator (vía LLM de
     visión), este campo se ignora. */
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
  for (let i = 0; i < matches.length; i++) {
    matches[i].end = i + 1 < matches.length ? matches[i + 1].start - `## Español: `.length : body.length
    // The above end calc is off; just use next start or body end
    matches[i].end = i + 1 < matches.length ? body.indexOf('## ', matches[i].start) : body.length
    if (matches[i].end === -1) matches[i].end = body.length
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

/* F53 §1 · convierte `*text*` inline a `<em>text</em>`.
   Sólo pares balanceados; asteriscos sueltos (por ejemplo en un cuerpo
   con `*` como marcador) quedan literales. Para el link de newsletter
   preservamos la itálica alrededor del `<a>` completo. */
function inlineItalicsHtml(text: string): string {
  return text.replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
}

function isNewsletterLine(line: string): boolean {
  const inner = line.replace(/^\*|\*$/g, '').toLowerCase()
  return line.startsWith('*') && line.endsWith('*') &&
    NEWSLETTER_TRIGGERS.some(t => inner.includes(t))
}

function buildNewsletterBlock(line: string, lang: 'en' | 'es'): EssayBlock {
  // Inner (sin *)
  const inner = line.slice(1, -1).trim()
  // Reemplaza la ORACIÓN que activa el link (última oración con
  // Subscribe/Suscribite) por un <a> a /newsletter.
  const cta = lang === 'es' ? /(Suscribite[^.!?]*\.)/ : /(Subscribe[^.!?]*\.)/
  const withLink = inner.replace(cta, '<a href="/newsletter">$1</a>')
  return { type: 'p', html: `<em>${withLink}</em>` }
}

function paragraphToBlock(text: string, lang: 'en' | 'es'): EssayBlock | null {
  const trimmed = text.trim()
  if (!trimmed) return null
  if (isNewsletterLine(trimmed)) return buildNewsletterBlock(trimmed, lang)
  const hasItalic = /\*[^*\n]+\*/.test(trimmed)
  if (hasItalic) {
    return { type: 'p', html: inlineItalicsHtml(trimmed) }
  }
  return { type: 'p', text: trimmed }
}

function parseBody(raw: string, lang: 'en' | 'es'): {
  dek: string | undefined
  blocks: EssayBlock[]
} {
  // Separar por bloques (dobles saltos de línea).
  const rawBlocks = raw.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
  let dek: string | undefined
  const blocks: EssayBlock[] = []
  for (let i = 0; i < rawBlocks.length; i++) {
    const b = rawBlocks[i]
    // Primer bloque en itálica de UNA sola línea → dek.
    if (
      !dek && blocks.length === 0 &&
      b.startsWith('*') && b.endsWith('*') &&
      !b.slice(1, -1).includes('\n') &&
      !isNewsletterLine(b)
    ) {
      dek = b.slice(1, -1).trim()
      continue
    }
    // Separador de sección
    if (b === '---') {
      blocks.push({ type: 'separator' })
      continue
    }
    const block = paragraphToBlock(b, lang)
    if (block) blocks.push(block)
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

    const other = sec.lang === 'en' ? fm.slug_es : fm.slug_en
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
      answerCapsule: normalizeQuotes(meta),
      heroImage: heroExists ? heroPublicPath : undefined,
      heroAlt: heroExists
        ? ((sec.lang === 'en' ? fm.alt_en : fm.alt_es) || defaultHeroAlt())
        : undefined,
      heroCredit: fm.hero_credit || undefined,
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
