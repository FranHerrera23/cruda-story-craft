import { createHash, timingSafeEqual } from 'node:crypto'
export const headers = { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow', 'Referrer-Policy': 'no-referrer' }
export function denied(req: Request) {
  const given = req.headers.get('authorization') || ''
  const digest = createHash('sha256').update(given).digest()
  if (timingSafeEqual(digest, Buffer.from('8b86c6e5d81f2d2616905f5d657ba8246f4dc933aa95b37447fb5ceb4a283c7e', 'hex'))) return null
  return new Response('Acceso privado de CRUDA', {status:401, headers:{...headers,'WWW-Authenticate':'Basic realm="CRUDA Studio"'}})
}
