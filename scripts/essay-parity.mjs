#!/usr/bin/env node
/* F53 · essay:parity · auditoría AST de la migración .ts → .md.
   Fran 30-sep · regla nueva: toda tabla de verificación (paridad,
   metas, pixel-diff, Lighthouse) se genera con un script commiteado.
   Nada de tablas armadas a mano.

   Uso:
     node scripts/essay-parity.mjs
       - Comparación por default contra `main`.
     node scripts/essay-parity.mjs --base <ref>
       - Especifica otro ref de git (por ej. un tag pre-migración).

   Qué hace:
   1. Por cada .ts en `src/content/essays/` de `<ref>`, extrae el
      objeto Essay evaluando el object literal (mismo mecanismo que
      scripts/essay-migrate.mjs).
   2. Por cada .md en `content/essays/` del working tree, carga los
      Essay parseados vía `src/lib/essay-mold/parse.ts` (importer real,
      no reimplementado).
   3. Empareja por slug y compara:
      · block counts por tipo (p / h2 / h3 / pull / quote / checklist /
        separator / signature)
      · em / strong (por conteo de <em>/<strong> en `html` o de
        `*`/`**` en `text`)
      · texto plano (concat de blocks, ignora comillas rectas↔curvas,
        ignora el bloque `signature` en la base)
   4. Reporta signatures eliminadas verbatim, y meta_* + capsule_*
      con conteo de chars.
   5. Exit 1 si algún ensayo tiene:
      · block count divergente (salvo signature: 1→0, esperado)
      · em o strong divergente
      · plain-text diff > 0

   Salida en Markdown, apta para pegar en un reporte.
   El script es la fuente de verdad; el reporte es su output. */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/* ═════════ Args ═════════ */

const args = process.argv.slice(2)
let baseRef = 'main'
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--base' && args[i + 1]) { baseRef = args[i + 1]; i++ }
}

/* ═════════ Tipografía · misma regla que parse.ts ═════════ */

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

/* ═════════ Carga .ts desde <baseRef> ═════════ */

function listTsFromBase() {
  const out = execSync(
    `git -C ${ROOT} ls-tree -r --name-only ${baseRef} src/content/essays/`,
    { encoding: 'utf8' },
  )
  return out.split('\n')
    .filter(f => f.endsWith('.ts') && !f.endsWith('/index.ts'))
    .map(f => path.basename(f, '.ts'))
}

function loadTsBlocksFromBase(slug) {
  const src = execSync(
    `git -C ${ROOT} show ${baseRef}:src/content/essays/${slug}.ts`,
    { encoding: 'utf8' },
  )
  // Escanea la clave `body: [ ... ]` con brackets balanceados y
  // strings escapados. Mismo algoritmo que essay-migrate.mjs.
  const bodyIdx = src.indexOf('body: [')
  if (bodyIdx < 0) return null
  let i = src.indexOf('[', bodyIdx)
  const start = i
  let depth = 0
  let inStr = false
  let strChar = ''
  let esc = false
  for (; i < src.length; i++) {
    const c = src[i]
    if (esc) { esc = false; continue }
    if (c === '\\') { esc = true; continue }
    if (inStr) {
      if (c === strChar) inStr = false
      continue
    }
    if (c === '"' || c === "'" || c === '`') { inStr = true; strChar = c; continue }
    if (c === '[') depth++
    else if (c === ']') { depth--; if (depth === 0) { i++; break } }
  }
  const bodyLit = src.slice(start, i)
  const blocks = new Function(`return (${bodyLit})`)()
  // El slug lo devolvemos aparte; también el capsule para conteo
  const capMatch = src.match(/answerCapsule:\s*([\s\S]*?)(?=\n\s*[a-zA-Z_]+:)/)
  const capsule = capMatch ? evalStringLiteral(capMatch[1].trim().replace(/,\s*$/, '')) : ''
  const slugMatch = src.match(/slug:\s*['"]([^'"]+)['"]/)
  return { slug: slugMatch ? slugMatch[1] : slug, blocks, capsule }
}

function evalStringLiteral(src) {
  try { return new Function(`return (${src})`)() }
  catch { return '' }
}

/* ═════════ Carga .md parseado desde working tree ═════════ */

async function loadParsedMd() {
  const helperPath = path.join(ROOT, 'scripts', '.tmp-parity-load.mjs')
  fs.writeFileSync(helperPath, `
import { loadAllEssays } from '${ROOT}/src/lib/essay-mold/parse.ts'
const all = loadAllEssays()
process.stdout.write(JSON.stringify(all))
`)
  try {
    const out = execSync(
      `node --experimental-strip-types ${helperPath}`,
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
    )
    return JSON.parse(out)
  } finally {
    try { fs.unlinkSync(helperPath) } catch { /* ignore */ }
  }
}

/* ═════════ Conteos ═════════ */

const BLOCK_TYPES = ['p', 'h2', 'h3', 'pull', 'quote', 'checklist', 'separator', 'signature']

function countBlocks(blocks) {
  const c = Object.fromEntries(BLOCK_TYPES.map(t => [t, 0]))
  let em = 0, strong = 0
  const sigTexts = []
  for (const b of blocks) {
    if (b.type in c) c[b.type]++
    // Inline markup: mira `html` primero (branch), después `text` (main)
    const html = b.html || ''
    const text = b.text || ''
    em += (html.match(/<em[\s>]/g) || []).length
    em += (text.match(/(^|[^*])\*([^*\n]+)\*/g) || []).length
    strong += (html.match(/<strong[\s>]/g) || []).length
    strong += (text.match(/\*\*[^*]+\*\*/g) || []).length
    // items (checklist)
    if (Array.isArray(b.items)) {
      for (const it of b.items) {
        em += (it.match(/<em[\s>]/g) || []).length
        em += (it.match(/(^|[^*])\*([^*\n]+)\*/g) || []).length
        strong += (it.match(/<strong[\s>]/g) || []).length
        strong += (it.match(/\*\*[^*]+\*\*/g) || []).length
      }
    }
    if (b.type === 'signature') {
      sigTexts.push(b.text || b.html || JSON.stringify(b))
    }
  }
  return { c, em, strong, sigTexts }
}

function plainText(blocks, opts = { includeSignature: false }) {
  const parts = []
  for (const b of blocks) {
    if (b.type === 'signature' && !opts.includeSignature) continue
    if (b.type === 'separator') continue
    const raw = b.text || (b.html ? b.html.replace(/<[^>]+>/g, '') : '')
    if (raw) parts.push(raw)
    if (Array.isArray(b.items)) parts.push(b.items.join(' '))
    if (b.attribution) parts.push(b.attribution)
  }
  const joined = parts.join('\n')
  // Normaliza comillas para ignorar la diferencia recta↔curva
  return normalizeQuotes(joined).replace(/\s+/g, ' ').trim()
}

/* ═════════ Tabla ═════════ */

function fmtCounts(x) {
  return `${x.c.p}/${x.c.h2}/${x.c.h3}/${x.c.pull}/${x.c.quote}/${x.c.checklist}/${x.c.separator}/${x.c.signature}`
}

/* ═════════ Main ═════════ */

const failures = []
const tsSlugs = listTsFromBase()
const parsedMd = await loadParsedMd()
const mdBySlug = Object.fromEntries(parsedMd.map(l => [l.slug, l]))

console.log(`# essay:parity report

Base ref: \`${baseRef}\`
Working tree .md: \`content/essays/\`

## 1 · Block counts + text diff (por slug)

Formato: \`p / h2 / h3 / pull / quote / checklist / separator / signature\`.
Δtexto se calcula con comillas normalizadas y sin bloques \`signature\`.

| slug | main | branch | Δtexto | em (main→branch) | strong (main→branch) |
|---|---|---|---|---|---|`)

for (const slug of tsSlugs) {
  const ts = loadTsBlocksFromBase(slug)
  if (!ts) continue
  const md = mdBySlug[ts.slug]
  const tsC = countBlocks(ts.blocks)
  const mdC = md ? countBlocks(md.data.body) : null
  const tsText = plainText(ts.blocks)
  const mdText = md ? plainText(md.data.body) : ''
  const dText = tsText === mdText ? 0 : Math.abs(tsText.length - mdText.length)

  const branchStr = mdC ? fmtCounts(mdC) : 'MISSING'
  const emStr = mdC ? `${tsC.em} → ${mdC.em}` : `${tsC.em} → -`
  const stStr = mdC ? `${tsC.strong} → ${mdC.strong}` : `${tsC.strong} → -`
  console.log(`| ${ts.slug} | ${fmtCounts(tsC)} | ${branchStr} | ${dText} | ${emStr} | ${stStr} |`)

  if (!mdC) {
    failures.push(`${ts.slug}: missing .md in working tree`)
    continue
  }
  // Verificación estricta: block counts iguales salvo signature (1→0)
  for (const t of BLOCK_TYPES) {
    if (t === 'signature') {
      if (mdC.c.signature !== 0) failures.push(`${ts.slug}: signature=${mdC.c.signature} en branch (esperado 0)`)
      continue
    }
    if (tsC.c[t] !== mdC.c[t]) failures.push(`${ts.slug}: ${t} count ${tsC.c[t]} → ${mdC.c[t]}`)
  }
  if (tsC.em !== mdC.em) failures.push(`${ts.slug}: em ${tsC.em} → ${mdC.em}`)
  if (tsC.strong !== mdC.strong) failures.push(`${ts.slug}: strong ${tsC.strong} → ${mdC.strong}`)
  if (dText !== 0) failures.push(`${ts.slug}: plain-text diff ${dText} chars`)
}

console.log('\n## 2 · Firmas eliminadas por la migración (texto exacto)\n')
let sigCount = 0
for (const slug of tsSlugs) {
  const ts = loadTsBlocksFromBase(slug)
  if (!ts) continue
  const { sigTexts } = countBlocks(ts.blocks)
  if (sigTexts.length === 0) continue
  sigCount++
  for (const s of sigTexts) {
    const preview = typeof s === 'string' ? s.replace(/\n/g, ' ').slice(0, 200) : JSON.stringify(s)
    console.log(`- **${ts.slug}**: \`${preview}\``)
  }
}
if (sigCount === 0) console.log('_(ninguno en este ref)_')

console.log('\n## 3 · Meta descriptions + cápsulas (verbatim, char count)\n')
console.log('| slug | lang | meta | chars | capsule chars |')
console.log('|---|---|---|---|---|')
for (const l of parsedMd) {
  const meta = l.data.metaDescription || ''
  const cap = l.data.answerCapsule || ''
  const preview = meta.length > 200 ? meta.slice(0, 197) + '…' : meta
  console.log(`| ${l.slug} | ${l.language} | ${preview} | ${meta.length} | ${cap.length} |`)
}

console.log('\n## 4 · Resultado\n')
if (failures.length === 0) {
  console.log('OK · paridad estricta contra `' + baseRef + '`.')
} else {
  console.log('FAIL · divergencias:')
  for (const f of failures) console.log(`- ${f}`)
  process.exit(1)
}
