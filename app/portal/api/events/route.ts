import { NextResponse } from 'next/server'
import { viewerForKey } from '../../../../portal/server/keys'
import { accountsFor } from '../../../../portal/server/accounts'
import { addEvent, listEvents, storeReady, type PortalEvent } from '../../../../portal/server/store'

export const dynamic = 'force-dynamic'
const NO_STORE = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' }
const KINDS = new Set(['approve', 'changes', 'sent', 'note', 'undo'])
const ID = /^[A-Za-z0-9-]{8,64}$/
const fail = (status: number, error: string) => NextResponse.json({ error }, { status, headers: NO_STORE })

function viewer(req: Request) {
  return viewerForKey(new URL(req.url).searchParams.get('k'))
}

export async function GET(req: Request) {
  const v = viewer(req)
  if (!v) return fail(401, 'Your link has expired.')
  if (!storeReady()) return fail(503, 'Storage is not connected yet.')
  const accts = Object.keys(accountsFor(v))
  const events = (await Promise.all(accts.map(listEvents))).flat()
  return NextResponse.json({ events }, { headers: NO_STORE })
}

export async function POST(req: Request) {
  const v = viewer(req)
  if (!v) return fail(401, 'Your link has expired.')
  if (!storeReady()) return fail(503, 'Storage is not connected yet.')
  let b: any
  try { b = await req.json() } catch { return fail(400, 'Bad request.') }
  const accounts = accountsFor(v) as Record<string, any>
  const acct = String(b?.acct ?? '')
  if (!accounts[acct]) return fail(403, 'Not your space.')
  if (!KINDS.has(b?.kind)) return fail(400, 'Unknown action.')
  if (!ID.test(String(b?.id ?? ''))) return fail(400, 'Bad id.')
  if (!accounts[acct].items.some((i: any) => i.id === b.itemId)) return fail(404, 'This piece no longer exists.')
  const text = typeof b.text === 'string' ? b.text.trim().slice(0, 4000) : undefined
  if ((b.kind === 'note' || b.kind === 'changes') && !text) return fail(400, 'Write something first.')
  if (b.kind === 'undo' && !ID.test(String(b.ref ?? ''))) return fail(400, 'Nothing to take back.')
  const e: PortalEvent = { id: b.id, acct, itemId: b.itemId, who: v.name, kind: b.kind, text, ref: b.kind === 'undo' ? b.ref : undefined, at: new Date().toISOString() }
  await addEvent(e)
  return NextResponse.json({ ok: true, event: e }, { headers: NO_STORE })
}
