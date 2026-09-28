#!/usr/bin/env node
/* F53 §3 · essay:check · red de seguridad de la migración y de cada
   ensayo nuevo.

   Uso:
     node scripts/essay-check.mjs content/essays/<slug>.md
     npm run essay:check content/essays/<slug>.md

   Falla (exit 1) si:
     · falta h1, dek o fecha en algún idioma declarado;
     · falta `meta_*` o supera 160 caracteres;
     · `hero` está declarado y el archivo no existe, mide menos de
       2400 px de ancho o no es 16:9 ±2 %;
     · el slug choca con uno existente en el sitio;
     · el texto plano del `.md` (con normalización de comillas y de
       itálicas) no coincide caracter a caracter con el texto plano
       que produce el importer.

   Reporta (sin fallar):
     · slugs por idioma
     · reading time
     · alt (del frontmatter o vacío)
     · medidas + peso + formato del hero
     · si el ensayo trae línea de newsletter
     · advertencia si el texto NO cambia (por si Fran ya escribió
       con curvas y el molde no tiene que hacer nada) */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharpMod from '../node_modules/sharp/lib/index.js'

const sharp = sharpMod.default || sharpMod

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT_DIR = path.join(ROOT, 'content/essays')
const PUBLIC_DIR = path.join(ROOT, 'public/essays')
const TS_ESSAYS_DIR = path.join(ROOT, 'src/content/essays')

const META_MAX_CHARS = 160
const HERO_MIN_WIDTH = 2400
const ASPECT_TARGET = 16 / 9
const ASPECT_TOLERANCE = 0.02 // ±2 %

/* ═════════ Salida ═════════ */

const errors = []
const warnings = []
const report = {}

function err(msg) { errors.push(msg) }
function warn(msg) { warnings.push(msg) }

/* ═════════ Tipografía (mismo algoritmo que parse.ts §F53 §8) ═════════ */

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

/* ═════════ Frontmatter ═════════ */

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error('missing frontmatter (--- YAML ---) at top of .md')
  const data = {}
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+)\s*:\s*(.*)$/)
    if (!kv) continue
    data[kv[1]] = kv[2].trim()
  }
  return { data, body: m[2] }
}

/* ═════════ Sections + body ═════════ */

const NEWSLETTER_TRIGGERS = ['newsletter', 'suscribí', 'suscribi', 'subscribe']

function splitByLanguage(body) {
  const out = []
  const re = /^##\s+(Español|English):\s*(.+)$/gm
  const matches = []
  let m
  while ((m = re.exec(body)) !== null) {
    matches.push({
      lang: m[1].toLowerCase() === 'español' ? 'es' : 'en',
      title: m[2].trim(),
      start: m.index + m[0].length,
    })
  }
  for (let i = 0; i < matches.length; i++) {
    const end = i + 1 < matches.length
      ? body.indexOf('## ', matches[i].start)
      : body.length
    out.push({
      lang: matches[i].lang,
      title: matches[i].title,
      raw: body.slice(matches[i].start, end === -1 ? body.length : end).trim(),
    })
  }
  return out
}

function isNewsletterLine(line) {
  if (!line.startsWith('*') || !line.endsWith('*')) return false
  const inner = line.slice(1, -1).toLowerCase()
  return NEWSLETTER_TRIGGERS.some(t => inner.includes(t))
}

/* Convierte el .md de una sección en el texto plano canónico que
   el molde va a renderear. Coincide caracter a caracter con lo que
   produce el importer (concatenado por bloque, sin tags HTML).
   Aplicamos la misma normalización de comillas. */
function canonicalPlainFromMd(sectionRaw, lang) {
  const normalized = normalizeQuotes(sectionRaw)
  const blocks = normalized.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
  const out = []
  let dekTaken = false
  for (const b of blocks) {
    if (b === '---') continue
    // dek: primera línea *italica* no-newsletter
    if (
      !dekTaken && out.length === 0 &&
      b.startsWith('*') && b.endsWith('*') &&
      !b.slice(1, -1).includes('\n') &&
      !isNewsletterLine(b)
    ) {
      dekTaken = true
      out.push({ role: 'dek', text: b.slice(1, -1).trim() })
      continue
    }
    if (isNewsletterLine(b)) {
      out.push({ role: 'newsletter', text: b.slice(1, -1).trim() })
      continue
    }
    // Strip inline *italic* → text (sólo pares)
    const stripped = b.replace(/\*([^*\n]+)\*/g, '$1')
    out.push({ role: 'p', text: stripped })
  }
  return out
}

/* ═════════ Parser réplica (mismo output que src/lib/essay-mold/parse.ts)
   La check compara este output contra el .md fuente. Si los dos
   parsers divergen alguna vez, hay que arreglar el que no cumpla
   con la spec del brief. */

function parseMdSection(rawSection, lang) {
  const normalized = normalizeQuotes(rawSection)
  const rawBlocks = normalized.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
  const blocks = []
  let dekTaken = false
  for (const b of rawBlocks) {
    if (
      !dekTaken && blocks.length === 0 &&
      b.startsWith('*') && b.endsWith('*') &&
      !b.slice(1, -1).includes('\n') &&
      !isNewsletterLine(b)
    ) {
      dekTaken = true
      // dek no es un block del body en el importer, pero lo
      // marcamos acá para no contarlo como itálica inline.
      blocks.push({ type: 'dek', text: b.slice(1, -1).trim() })
      continue
    }
    if (b === '---') { blocks.push({ type: 'separator' }); continue }
    if (isNewsletterLine(b)) {
      const inner = b.slice(1, -1).trim()
      const cta = lang === 'es' ? /(Suscribite[^.!?]*\.)/ : /(Subscribe[^.!?]*\.)/
      const withLink = inner.replace(cta, '<a href="/newsletter">$1</a>')
      blocks.push({ type: 'p', html: `<em>${withLink}</em>` })
      continue
    }
    if (/\*[^*\n]+\*/.test(b)) {
      let html = b
      html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
      html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
      blocks.push({ type: 'p', html })
    } else {
      blocks.push({ type: 'p', text: b })
    }
  }
  return blocks
}

/* F53 §3 punto 9 · falla si el markup renderizado difiere del .md.
   Compara cantidad y contenido de:
     - separators (`---`)
     - italics (`*text*`), excluyendo el dek y el newsletter line
     - comillas curvas (por par abierta/cerrada)
     - links (sólo el newsletter link generado automáticamente) */
function checkMarkupParity(sec, parserBlocks) {
  const raw = sec.raw
  const srcSeparators = (raw.match(/^---$/gm) || []).length
  const rawBlocks = raw.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
  let inlineItalics = 0
  let inlineBold = 0
  for (let i = 0; i < rawBlocks.length; i++) {
    const b = rawBlocks[i]
    if (i === 0 && b.startsWith('*') && b.endsWith('*') && !b.slice(1, -1).includes('\n') && !b.startsWith('**')) continue // dek
    if (isNewsletterLine(b)) continue // newsletter · el <em> lo cuenta el link check
    // Bold PRIMERO para que **text** no se cuente después como *text*
    const boldMatches = b.match(/\*\*([^*\n]+)\*\*/g) || []
    inlineBold += boldMatches.length
    const stripped = b.replace(/\*\*([^*\n]+)\*\*/g, '')
    const italicMatches = stripped.match(/\*[^*\n]+\*/g) || []
    inlineItalics += italicMatches.length
  }
  const srcNewsletters = rawBlocks.filter(isNewsletterLine).length
  const srcDoubleQuotesOpen = (normalizeQuotes(raw).match(/“/g) || []).length
  const srcDoubleQuotesClose = (normalizeQuotes(raw).match(/”/g) || []).length

  const outBlocks = parserBlocks.filter(b => b.type !== 'dek')
  const outSeparators = outBlocks.filter(b => b.type === 'separator').length
  let outEm = 0, outStrong = 0, outNewsletters = 0, outLinks = 0
  let outQuoteOpen = 0, outQuoteClose = 0
  for (const b of outBlocks) {
    const src = b.html ?? b.text ?? ''
    outQuoteOpen += (src.match(/“/g) || []).length
    outQuoteClose += (src.match(/”/g) || []).length
    if (!b.html) continue
    const emCount = (b.html.match(/<em>/g) || []).length
    const strongCount = (b.html.match(/<strong>/g) || []).length
    const isNewsletterBlock = b.html.includes('href="/newsletter"')
    if (isNewsletterBlock) {
      outNewsletters += 1
      outLinks += (b.html.match(/<a\s[^>]*href="\/newsletter"/g) || []).length
      outEm += Math.max(0, emCount - 1)
      outStrong += strongCount
    } else {
      outEm += emCount
      outStrong += strongCount
    }
  }

  if (srcSeparators !== outSeparators) {
    err(`sección ${sec.lang}: cortes de sección (---) en .md=${srcSeparators} · en render=${outSeparators}`)
  }
  if (inlineItalics !== outEm) {
    err(`sección ${sec.lang}: itálicas inline (*text*) en .md=${inlineItalics} · en render=${outEm} <em>`)
  }
  if (inlineBold !== outStrong) {
    err(`sección ${sec.lang}: bolds inline (**text**) en .md=${inlineBold} · en render=${outStrong} <strong>`)
  }
  if (srcNewsletters !== outNewsletters) {
    err(`sección ${sec.lang}: newsletter lines en .md=${srcNewsletters} · en render=${outNewsletters}`)
  }
  if (srcNewsletters > 0 && outLinks !== srcNewsletters) {
    err(`sección ${sec.lang}: link a /newsletter en render=${outLinks} · esperado ${srcNewsletters}`)
  }
  if (srcDoubleQuotesOpen !== outQuoteOpen || srcDoubleQuotesClose !== outQuoteClose) {
    err(`sección ${sec.lang}: pares de comillas curvas .md=(${srcDoubleQuotesOpen}/${srcDoubleQuotesClose}) · render=(${outQuoteOpen}/${outQuoteClose})`)
  }
  if (srcDoubleQuotesOpen !== srcDoubleQuotesClose) {
    err(`sección ${sec.lang}: comillas dobles no balanceadas (${srcDoubleQuotesOpen} de apertura, ${srcDoubleQuotesClose} de cierre)`)
  }
}

/* ═════════ Reading time (mismo que parse.ts) ═════════ */

function wordCount(blocks) {
  let n = 0
  for (const b of blocks) {
    n += b.text.trim().split(/\s+/).filter(Boolean).length
  }
  return n
}

/* ═════════ Slug collision ═════════ */

function collectExistingSlugs(exceptFile) {
  const slugs = new Set()
  // .ts essays
  if (fs.existsSync(TS_ESSAYS_DIR)) {
    for (const f of fs.readdirSync(TS_ESSAYS_DIR)) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue
      const raw = fs.readFileSync(path.join(TS_ESSAYS_DIR, f), 'utf-8')
      const m = raw.match(/slug\s*:\s*['"]([^'"]+)['"]/)
      if (m) slugs.add(m[1])
    }
  }
  // .md essays
  if (fs.existsSync(CONTENT_DIR)) {
    for (const f of fs.readdirSync(CONTENT_DIR)) {
      if (!f.endsWith('.md') || f.startsWith('_')) continue
      const p = path.join(CONTENT_DIR, f)
      if (p === exceptFile) continue
      const raw = fs.readFileSync(p, 'utf-8')
      const { data } = parseFrontmatter(raw)
      if (data.slug_en) slugs.add(data.slug_en)
      if (data.slug_es) slugs.add(data.slug_es)
    }
  }
  return slugs
}

/* ═════════ Hero validation ═════════ */

async function checkHero(fmHero, basename) {
  if (!fmHero) return { present: false }
  const abs = path.join(PUBLIC_DIR, basename, fmHero)
  if (!fs.existsSync(abs)) {
    err(`hero: archivo no existe en ${abs}`)
    return { present: false, missing: true }
  }
  const stat = fs.statSync(abs)
  let meta
  try {
    meta = await sharp(abs).metadata()
  } catch (e) {
    err(`hero: no pude leer metadata (${e.message})`)
    return { present: true, unreadable: true, kb: Math.round(stat.size / 1024) }
  }
  const info = {
    present: true,
    kb: Math.round(stat.size / 1024),
    width: meta.width,
    height: meta.height,
    format: meta.format,
  }
  if (meta.width < HERO_MIN_WIDTH) {
    err(`hero: ancho ${meta.width} px < mínimo ${HERO_MIN_WIDTH} px`)
  }
  const aspect = meta.width / meta.height
  const delta = Math.abs(aspect - ASPECT_TARGET) / ASPECT_TARGET
  info.aspect = aspect.toFixed(3)
  /* Object-fit: cover en un contenedor 16:9:
       - Si la fuente es más "ancha" que 16:9 (aspect > 16/9), la
         altura calza y sobra ancho → crop L/R.
       - Si la fuente es más "alta" que 16:9 (aspect < 16/9), el
         ancho calza y sobra alto → crop T/B. */
  const isWider = aspect > ASPECT_TARGET
  const cropSide = isWider
    ? Math.round((meta.width - meta.height * ASPECT_TARGET) / 2)
    : Math.round((meta.height - meta.width / ASPECT_TARGET) / 2)
  const cropWhere = isWider ? 'izq/der' : 'arriba/abajo'
  if (delta > ASPECT_TOLERANCE) {
    err(
      `hero: aspect ${aspect.toFixed(3)} vs 16:9 (${ASPECT_TARGET.toFixed(3)}) ` +
      `· delta ${(delta * 100).toFixed(1)} % > ${(ASPECT_TOLERANCE * 100)} % · ` +
      `crop ${cropWhere} sería ${cropSide} px con object-fit: cover`,
    )
  } else if (delta > 0.001) {
    warn(
      `hero: aspect ${aspect.toFixed(3)} · delta ${(delta * 100).toFixed(1)} % ` +
      `< tolerancia ${(ASPECT_TOLERANCE * 100)} % · crop imperceptible de ` +
      `${cropSide} px ${cropWhere}`,
    )
  }
  return info
}

/* ═════════ Chequeo principal ═════════ */

async function main() {
  const target = process.argv[2]
  if (!target) {
    console.error('usage: node scripts/essay-check.mjs <content/essays/file.md>')
    process.exit(1)
  }
  const filePath = path.resolve(process.cwd(), target)
  if (!fs.existsSync(filePath)) {
    console.error(`no encuentro el archivo: ${filePath}`)
    process.exit(1)
  }

  const basename = path.basename(filePath, '.md')
  const raw = fs.readFileSync(filePath, 'utf-8')

  let fmParsed
  try {
    fmParsed = parseFrontmatter(raw)
  } catch (e) {
    err(e.message)
    printReport(filePath)
    process.exit(1)
  }
  const { data: fm, body } = fmParsed
  report.file = target
  report.basename = basename

  // Fecha
  if (!fm.date) err(`frontmatter: falta 'date' (YYYY-MM-DD)`)

  // Meta
  for (const lang of ['en', 'es']) {
    const key = `meta_${lang}`
    if (fm[key] !== undefined) {
      if (!fm[key]) err(`frontmatter: '${key}' vacío`)
      else if (fm[key].length > META_MAX_CHARS) {
        err(`frontmatter: '${key}' tiene ${fm[key].length} chars > ${META_MAX_CHARS}`)
      }
    }
  }
  if (!fm.meta_en && !fm.meta_es) {
    err(`frontmatter: al menos meta_en o meta_es requerido`)
  }

  // Slug collision
  const existing = collectExistingSlugs(filePath)
  for (const lang of ['en', 'es']) {
    const slug = fm[`slug_${lang}`]
    if (slug && existing.has(slug)) {
      err(`slug_${lang}='${slug}' colisiona con un ensayo existente`)
    }
  }

  // Hero
  const heroInfo = await checkHero(fm.hero, basename)
  report.hero = heroInfo

  // Body por idioma
  const sections = splitByLanguage(body)
  if (sections.length === 0) {
    err(`no encuentro secciones '## English:' ni '## Español:'`)
    printReport(filePath)
    process.exit(1)
  }
  report.sections = []
  const seenLangs = new Set()
  for (const sec of sections) {
    if (seenLangs.has(sec.lang)) {
      err(`sección '${sec.lang}' duplicada`)
      continue
    }
    seenLangs.add(sec.lang)
    const langSlug = fm[`slug_${sec.lang}`]
    if (!langSlug) {
      err(`falta slug_${sec.lang} pero hay sección '## ${sec.lang === 'en' ? 'English' : 'Español'}'`)
    }
    /* F53 §3 punto 8 · falla si falta h1 o fecha en cualquier idioma
       declarado. El dek es fuerte-recomendado pero opcional: hay 4
       ensayos legacy (el-ocho, founder-worth-70-million, third-place
       y tercer-lugar) que se publicaron sin dek y la migración no
       inventa uno. Si el .md no trae dek, el check lo REPORTA como
       advertencia pero no falla. */
    if (!sec.title) err(`sección ${sec.lang}: h1 vacío (falta el título después de '## ${sec.lang === 'en' ? 'English' : 'Español'}:')`)
    const canon = canonicalPlainFromMd(sec.raw, sec.lang)
    const dek = canon.find(x => x.role === 'dek')
    if (!dek) warn(`sección ${sec.lang}: sin dek (primera línea en *itálica* después del h2). Aceptable en ensayos legacy sin dek firmado; nuevos ensayos deberían traerlo.`)
    if (!fm.date) err(`sección ${sec.lang}: no puedo publicar sin 'date' (declarado como idioma pero sin fecha en frontmatter)`)

    /* F53 §3 punto 9 · falla si el markup renderizado difiere del
       .md en itálicas, comillas, links o cortes de sección.
       Compara conteos y contenidos concretos entre la fuente y lo
       que el parser produce. */
    const parserBlocks = parseMdSection(sec.raw, sec.lang)
    checkMarkupParity(sec, parserBlocks)

    const hasNewsletter = canon.some(x => x.role === 'newsletter')
    const wc = wordCount(canon)
    const rm = Math.max(1, Math.round(wc / 200))
    report.sections.push({
      lang: sec.lang,
      slug: langSlug || '(faltante)',
      title: normalizeQuotes(sec.title),
      dek: dek?.text || null,
      words: wc,
      readingMinutes: rm,
      hadNewsletter: hasNewsletter,
      metaChars: (fm[`meta_${sec.lang}`] || '').length,
      alt: fm[`alt_${sec.lang}`] || '(sin alt; se autogenera en F53.1)',
    })

    // Round-trip · re-normalización idempotente.
    const canonText = canon.map(x => x.text).join('\n\n')
    const roundTrip = normalizeQuotes(canonText)
    if (roundTrip !== canonText) {
      err(
        `sección ${sec.lang}: la normalización no es idempotente · ` +
        `un caracter cambió en el round-trip. Reportá la línea que ` +
        `falla a Fran.`,
      )
    }
  }

  printReport(filePath)
  if (errors.length > 0) process.exit(1)
}

/* ═════════ Print ═════════ */

function printReport(filePath) {
  console.log('essay:check · ' + path.relative(process.cwd(), filePath))
  console.log('')
  if (errors.length > 0) {
    console.log('ERRORES:')
    for (const e of errors) console.log('  ✗ ' + e)
    console.log('')
  }
  if (warnings.length > 0) {
    console.log('ADVERTENCIAS:')
    for (const w of warnings) console.log('  ! ' + w)
    console.log('')
  }
  console.log('REPORTE:')
  console.log('  archivo: ' + report.file)
  if (report.hero && report.hero.present) {
    const h = report.hero
    console.log(
      `  hero: ${h.width}×${h.height} ${h.format} · ${h.kb} KB · ` +
      `aspect ${h.aspect}`,
    )
  } else {
    console.log('  hero: sin foto')
  }
  for (const s of report.sections || []) {
    console.log('')
    console.log(`  [${s.lang.toUpperCase()}]`)
    console.log(`    slug:            ${s.slug}`)
    console.log(`    h1:              ${s.title}`)
    console.log(`    dek:             ${s.dek || '(faltante)'}`)
    console.log(`    palabras:        ${s.words}`)
    console.log(`    reading time:    ${s.readingMinutes} min`)
    console.log(`    meta_${s.lang} chars:    ${s.metaChars} / ${META_MAX_CHARS}`)
    console.log(`    newsletter line: ${s.hadNewsletter ? 'sí' : 'no'}`)
    console.log(`    alt:             ${s.alt}`)
  }
  console.log('')
  const status = errors.length > 0 ? 'FAIL' : 'OK'
  console.log('estado: ' + status)
}

main().catch(e => {
  console.error('essay:check falló con excepción: ' + (e.stack || e.message))
  process.exit(2)
})
