#!/usr/bin/env node
/* F53 · essay:shots · capturas + hash + medidas del SubscribeForm.
   Fran 30-sep · para el reporte pre-merge.

   Uso:
     node scripts/essay-shots.mjs
   Requiere dev server en http://localhost:3000.

   Genera en scripts/.shots/ (gitignored):
     <slug>-<viewport>.png · full-page screenshot
     shots.json           · manifest con hashes, medidas y URL

   Reporta:
     - min-height reservado del <div class="e-subscribe">
     - alto real del formulario después de que carga beehiiv
     - CLS approximate: alto_real - min_height (positivo = layout
       shift · negativo = reserva sobra)
     - alto y ancho de la firma (.e-by) y del hero (.e-hero) para
       chequear la "hero al ancho de la línea de firma" ask */

import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'scripts/.shots')
fs.mkdirSync(OUT, { recursive: true })

const PAGES = [
  /* 10 ensayos */
  { url: 'http://localhost:3000/thinking/find-your-larry-holmes', slug: 'larry-en', lang: 'en', hero: true },
  { url: 'http://localhost:3000/thinking/busca-a-tu-larry-holmes', slug: 'larry-es', lang: 'es', hero: true },
  { url: 'http://localhost:3000/thinking/third-place', slug: 'third-place-en', lang: 'en', hero: false },
  { url: 'http://localhost:3000/thinking/tercer-lugar', slug: 'tercer-lugar-es', lang: 'es', hero: false },
  { url: 'http://localhost:3000/thinking/why-you-cant-write-your-own-website', slug: 'why-you-cant', lang: 'en', hero: false },
  { url: 'http://localhost:3000/thinking/el-ocho', slug: 'el-ocho', lang: 'en', hero: false },
  { url: 'http://localhost:3000/thinking/founder-worth-70-million', slug: 'founder-70m', lang: 'en', hero: false },
  { url: 'http://localhost:3000/thinking/narradores-peligrosos', slug: 'narradores', lang: 'es', hero: false },
  { url: 'http://localhost:3000/thinking/siglas-para-no-decir-gente', slug: 'siglas', lang: 'es', hero: false },
  { url: 'http://localhost:3000/thinking/steve-walls', slug: 'steve-walls', lang: 'en', hero: false },
  /* rutas de índice y captura */
  { url: 'http://localhost:3000/thinking', slug: 'thinking-index', lang: 'en', hero: false },
  { url: 'http://localhost:3000/newsletter', slug: 'newsletter', lang: 'en', hero: false },
  /* controles · deberían quedar pixel-idénticos vs main */
  { url: 'http://localhost:3000/', slug: 'home', lang: 'en', hero: false },
  { url: 'http://localhost:3000/about', slug: 'about', lang: 'en', hero: false },
  { url: 'http://localhost:3000/services', slug: 'services', lang: 'en', hero: false },
  { url: 'http://localhost:3000/services/translated', slug: 'services-translated', lang: 'en', hero: false },
  { url: 'http://localhost:3000/contact', slug: 'contact', lang: 'en', hero: false },
]
const VIEWPORTS = [
  { w: 390, h: 812, name: '390' },
  { w: 1440, h: 900, name: '1440' },
]

const manifest = []
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })

for (const p of PAGES) {
  for (const v of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h } })
    const page = await ctx.newPage()
    await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 })

    /* Medida inicial del min-height reservado (antes del IO). */
    const preIntersect = await page.evaluate(() => {
      const sub = document.querySelector('.e-subscribe')
      const by = document.querySelector('.e-by')
      const hero = document.querySelector('.e-hero')
      return {
        subMinHeightPx: sub ? getComputedStyle(sub).minHeight : null,
        subReservedRect: sub?.getBoundingClientRect() ?? null,
        byRect: by?.getBoundingClientRect() ?? null,
        heroRect: hero?.getBoundingClientRect() ?? null,
        pageHeight: document.documentElement.scrollHeight,
      }
    })

    /* Scroll al fondo para disparar el IO. Después esperamos 2s
       para que beehiiv v3 loader inyecte el iframe + renderice. */
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(3000)

    const postLoad = await page.evaluate(() => {
      const sub = document.querySelector('.e-subscribe')
      const iframe = sub?.querySelector('iframe')
      const scripts = sub?.querySelectorAll('script[data-beehiiv-form]')
      return {
        subRect: sub?.getBoundingClientRect() ?? null,
        iframeH: iframe?.getBoundingClientRect().height ?? 0,
        scriptsInSub: scripts ? scripts.length : 0,
      }
    })

    const shotPath = path.join(OUT, `${p.slug}-${v.name}.png`)
    await page.screenshot({ path: shotPath, fullPage: true })
    const buf = fs.readFileSync(shotPath)
    const sha = crypto.createHash('sha256').update(buf).digest('hex')

    manifest.push({
      slug: p.slug,
      lang: p.lang,
      viewport: v.name,
      url: p.url,
      shot: path.relative(ROOT, shotPath),
      sha256: sha,
      bytes: buf.length,
      preIntersect,
      postLoad,
    })
    await ctx.close()
  }
}
await browser.close()

fs.writeFileSync(
  path.join(OUT, 'shots.json'),
  JSON.stringify(manifest, null, 2),
)

/* Reporte compacto en Markdown para pegar en el turno. */
console.log('# essay:shots · report\n')
console.log('| slug | lang | viewport | shot | sha256 (12) | bytes |')
console.log('|---|---|---|---|---|---|')
for (const m of manifest) {
  console.log(`| ${m.slug} | ${m.lang} | ${m.viewport} | ${m.shot} | ${m.sha256.slice(0, 12)} | ${m.bytes} |`)
}
console.log('\n## Medidas · subscribe form + firma + hero\n')
console.log('| slug | vp | sub min-h | sub real (post-load) | iframe h | firma w×h | hero w×h |')
console.log('|---|---|---|---|---|---|---|')
for (const m of manifest) {
  const r = m.preIntersect
  const post = m.postLoad
  const by = r.byRect ? `${Math.round(r.byRect.width)}×${Math.round(r.byRect.height)}` : '—'
  const hero = r.heroRect ? `${Math.round(r.heroRect.width)}×${Math.round(r.heroRect.height)}` : '—'
  const subMinH = r.subMinHeightPx || '—'
  const subReal = post.subRect ? `${Math.round(post.subRect.height)}px` : '—'
  const iframeH = post.iframeH ? `${Math.round(post.iframeH)}px` : '(no iframe)'
  console.log(`| ${m.slug} | ${m.viewport} | ${subMinH} | ${subReal} | ${iframeH} | ${by} | ${hero} |`)
}
