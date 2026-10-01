#!/usr/bin/env node
/* F54.1 · pixel-diff vs main · criterio F49.

   - Enmascara imágenes del DOM (opacity 0 + background: #808080)
     y mide diff pixel = 0.
   - Full-page diff · <= 0.5% por página normal, <= 1% en case
     studies con hero (brief F49 criteria).

   Modo de uso: PRE-REQ, ambos builds deben estar hechos.
     1. git checkout main && rm -rf .next && npm run build && npm run start → shots en ./scripts/.diff/before/
     2. git checkout f54-1-featured-avif && rm -rf .next && npm run build && npm run start → shots en ./scripts/.diff/after/
     3. node scripts/f54-1-pixel-diff.mjs → compara + reporta
*/

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'
import sharpMod from '../node_modules/sharp/lib/index.js'

const sharp = sharpMod.default || sharpMod
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const MODE = process.env.MODE // 'before' | 'after' | 'diff'
const OUT = path.join(ROOT, 'scripts/.diff')
fs.mkdirSync(path.join(OUT, 'before'), { recursive: true })
fs.mkdirSync(path.join(OUT, 'after'), { recursive: true })
fs.mkdirSync(path.join(OUT, 'diffs'), { recursive: true })

const URLS = [
  { slug: '/', name: 'home', isCase: false },
  { slug: '/about', name: 'about', isCase: false },
  { slug: '/services', name: 'services', isCase: false },
  { slug: '/services/translated', name: 'services-translated', isCase: false },
  { slug: '/contact', name: 'contact', isCase: false },
  { slug: '/thinking', name: 'thinking', isCase: false },
  { slug: '/thinking?lang=es', name: 'thinking-es', isCase: false },
  { slug: '/newsletter', name: 'newsletter', isCase: false },
  { slug: '/thinking/find-your-larry-holmes', name: 'essay-larry', isCase: true },
  { slug: '/thinking/im-from-the-government-and-im-here-to-help', name: 'essay-gov', isCase: true },
  { slug: '/work/karen-mannheim', name: 'work-karen', isCase: true },
  { slug: '/work/mike-kaeding', name: 'work-mike', isCase: true },
  { slug: '/work/jack-yeager', name: 'work-jack', isCase: true },
  { slug: '/work/juan-pablo-romero', name: 'work-jp', isCase: true },
]
const VIEWPORTS = [390, 1440]

async function shoot(mode) {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })
  for (const u of URLS) {
    for (const w of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
      const p = await ctx.newPage()
      /* F48 · el loader NO corre cuando la URL trae ?utm_source=...
         Fran 1-oct · usamos utm_source=qa para skipearlo acá. Si la
         URL ya tiene query, agregamos con & en vez de ?. */
      const sep = u.slug.includes('?') ? '&' : '?'
      await p.goto(BASE + u.slug + sep + 'utm_source=qa', {
        waitUntil: 'networkidle',
        timeout: 30000,
      })
      await p.waitForTimeout(500)
      /* Enmascara imágenes y fondos con images (incluye background-image
         en portadas tipográficas, selected work covers, etc.) */
      /* Enmascara contenedores enteros de media (no solo <img>),
         porque Next <Image> envuelve en <span> con inline styles
         propios que no coinciden con selectores de img. Lista:
         - .t-featured__media (destacada /thinking)
         - .e-card__media (grilla + newsletter recent)
         - .essay-cover (portadas tipográficas)
         - .sw-card__m, .sw-card__cover (home selected work)
         - .e-hero (hero de ensayos)
         - .work-hero figure, .cs-hero figure (case studies)
         - img, picture, video, canvas (fallback)
         - [class*="hero"] img, img que vive en secciones hero
      */
      await p.addStyleTag({ content: `
        .t-featured__media,
        .e-card__media,
        .essay-cover,
        .sw-card__m,
        .sw-card__cover,
        .e-hero,
        .cs-hero figure,
        .work-hero figure,
        img, picture, video, canvas,
        [style*="background-image"] {
          visibility: hidden !important;
          background: #808080 !important;
        }
      `})
      await p.waitForTimeout(400)
      const name = `${u.name}-${w}`
      await p.screenshot({ path: path.join(OUT, mode, `${name}.png`), fullPage: true })
      await ctx.close()
    }
  }
  await browser.close()
  console.log('shots done · mode=' + mode)
}

async function diffAll() {
  console.log('# F54.1 · pixel-diff · images masked\n')
  console.log('| page | viewport | isCase | diffPx | diffPct | threshold | pass? |')
  console.log('|---|---|---|---|---|---|---|')
  for (const u of URLS) {
    for (const w of VIEWPORTS) {
      const name = `${u.name}-${w}`
      const beforePath = path.join(OUT, 'before', `${name}.png`)
      const afterPath = path.join(OUT, 'after', `${name}.png`)
      if (!fs.existsSync(beforePath) || !fs.existsSync(afterPath)) {
        console.log(`| ${u.name} | ${w} | ${u.isCase} | MISSING | - | - | ❌ |`)
        continue
      }
      /* Normalizo tamaños · algunas páginas pueden tener altura
         ligeramente distinta por el reflow. */
      const bMeta = await sharp(beforePath).metadata()
      const aMeta = await sharp(afterPath).metadata()
      const H = Math.min(bMeta.height, aMeta.height)
      const W = Math.min(bMeta.width, aMeta.width)
      /* Forzar RGB sin alpha · algunos PNG salen RGBA (4 canales) y
         otros RGB (3) · si el loop asume 3 pero una imagen tiene 4,
         se desincroniza y da falsos positivos (bug Fran 1-oct). */
      const bBuf = await sharp(beforePath)
        .extract({ left: 0, top: 0, width: W, height: H })
        .removeAlpha()
        .raw()
        .toBuffer()
      const aBuf = await sharp(afterPath)
        .extract({ left: 0, top: 0, width: W, height: H })
        .removeAlpha()
        .raw()
        .toBuffer()
      let diff = 0
      const channels = 3
      for (let i = 0; i < bBuf.length; i += channels) {
        if (Math.abs(bBuf[i] - aBuf[i]) + Math.abs(bBuf[i+1] - aBuf[i+1]) + Math.abs(bBuf[i+2] - aBuf[i+2]) > 10) diff++
      }
      const total = W * H
      const pct = ((diff / total) * 100).toFixed(3)
      const threshold = u.isCase ? 1.0 : 0.5
      const pass = Number(pct) <= threshold ? '✅' : '❌'
      console.log(`| ${u.name} | ${w} | ${u.isCase ? 'yes' : 'no'} | ${diff} | ${pct}% | ≤ ${threshold}% | ${pass} |`)
    }
  }
}

if (MODE === 'before' || MODE === 'after') {
  await shoot(MODE)
} else if (MODE === 'diff') {
  await diffAll()
} else {
  console.log('MODE env missing · set MODE=before, after, or diff')
  process.exit(1)
}
