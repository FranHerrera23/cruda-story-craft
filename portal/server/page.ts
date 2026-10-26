import { PORTAL_CSS, PORTAL_JS } from '../assets.generated'

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)
// JSON inside <script>: neutralise "</script" and line separators.
const safeJson = (v: unknown) => JSON.stringify(v).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')

export const HEADERS = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'Referrer-Policy': 'no-referrer',
}

export function portalHtml(title: string, boot: unknown, accounts: unknown) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title><meta name="robots" content="noindex, nofollow"><link rel="icon" href="/icon.svg">
<style>${PORTAL_CSS}</style></head><body><div id="root"></div>
<script>window.PORTAL=${safeJson(boot)};window.PORTAL_ACCOUNTS=${safeJson(accounts)};</script>
<script>${PORTAL_JS}</script></body></html>`
}

export function messageHtml(title: string, body: string) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · CRUDA</title><meta name="robots" content="noindex, nofollow"><link rel="icon" href="/icon.svg">
<style>${PORTAL_CSS}</style></head><body><main class="signin"><b class="si-b">CRUDA</b><h1>${esc(title)}</h1><p>${body}</p></main></body></html>`
}
