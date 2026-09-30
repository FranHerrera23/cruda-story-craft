#!/usr/bin/env node
/* F53 §8 · genera og.jpg 1200×630 por ensayo desde el hero WebP.
   Usa sharp. Escribe en `public/essays/<basename>/og.jpg`.

   Uso:
     node scripts/essay-og.mjs              · procesa todos los .md
     node scripts/essay-og.mjs <basename>   · procesa uno solo

   Reglas:
   - Si el .md no declara hero, o el hero no existe en disco, se
     salta el ensayo (no imprime error · og.jpg simplemente no se
     genera y la página cae al fallback logo.png).
   - Formato JPG, quality 80, sin metadata (menor peso).
   - Fit: cover, position: center (mismo crop que object-fit del
     render web). Aspect target 1200/630 = 1.905:1.
   - Si el hero ya cumple 1200×630 exactos, se recomprime sin
     resize (evita blur).

   Es un paso build-time: se corre a mano cuando se agrega o cambia
   una foto. En F53.2 podemos gancharlo a `next build`.

   El reporte final imprime una tabla con slug + status + bytes. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharpMod from '../node_modules/sharp/lib/index.js'

const sharp = sharpMod.default || sharpMod

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT_DIR = path.join(ROOT, 'content/essays')
const PUBLIC_DIR = path.join(ROOT, 'public/essays')

const OG_W = 1200
const OG_H = 630
const QUALITY = 80

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error('missing frontmatter')
  const data = {}
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+)\s*:\s*(.*)$/)
    if (!kv) continue
    data[kv[1]] = kv[2].trim()
  }
  return data
}

async function processOne(basename) {
  const mdPath = path.join(CONTENT_DIR, `${basename}.md`)
  if (!fs.existsSync(mdPath)) return { basename, status: 'no md', bytes: 0 }
  const fm = parseFrontmatter(fs.readFileSync(mdPath, 'utf-8'))
  if (!fm.hero) return { basename, status: 'skip: no hero', bytes: 0 }
  const heroPath = path.join(PUBLIC_DIR, basename, fm.hero)
  if (!fs.existsSync(heroPath)) return { basename, status: 'skip: hero missing', bytes: 0 }
  const outPath = path.join(PUBLIC_DIR, basename, 'og.jpg')
  const img = sharp(heroPath)
  const meta = await img.metadata()
  const buffer = await img
    .resize({ width: OG_W, height: OG_H, fit: 'cover', position: 'center' })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer()
  fs.writeFileSync(outPath, buffer)
  return {
    basename,
    status: `ok · ${meta.width}×${meta.height} → ${OG_W}×${OG_H}`,
    bytes: buffer.length,
  }
}

async function main() {
  const arg = process.argv[2]
  let basenames = []
  if (arg) basenames = [arg]
  else {
    basenames = fs.readdirSync(CONTENT_DIR)
      .filter(f => f.endsWith('.md') && !f.startsWith('_'))
      .map(f => path.basename(f, '.md'))
  }
  console.log('essay:og · generación de og.jpg 1200×630\n')
  console.log('| ensayo | status | og.jpg kB |')
  console.log('|---|---|---|')
  for (const b of basenames) {
    try {
      const r = await processOne(b)
      const kb = r.bytes ? Math.round(r.bytes / 1024) : '—'
      console.log(`| ${b} | ${r.status} | ${kb} |`)
    } catch (e) {
      console.log(`| ${b} | ERROR: ${e.message} | — |`)
    }
  }
}

main().catch(e => { console.error(e); process.exit(1) })
