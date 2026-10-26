import { viewerForKey } from '../../../portal/server/keys'
import { accountsFor } from '../../../portal/server/accounts'
import { HEADERS, messageHtml, portalHtml } from '../../../portal/server/page'

export const dynamic = 'force-dynamic'

// thecruda.com/portal/<key>: the personal link. No login, no cookie: the key is the door.
export async function GET(_req: Request, { params }: { params: { key: string } }) {
  const v = viewerForKey(params.key)
  if (!v) return new Response(messageHtml('This link doesn’t open a portal.', 'Write to <a class="lnk" href="mailto:fran@thecruda.com">fran@thecruda.com</a> and we’ll send you a new one.'), { status: 404, headers: HEADERS })
  const accounts = accountsFor(v)
  if (!Object.keys(accounts).length) return new Response(messageHtml('Your space is being set up.', 'Fran will send you the link when it’s ready.'), { status: 404, headers: HEADERS })
  const title = v.team ? 'CRUDA Studio' : `${(accounts as any)[v.account].name} · CRUDA`
  return new Response(portalHtml(title, { viewer: v.name, team: v.team, account: v.account, key: params.key, api: '/portal/api/events' }, accounts), { headers: HEADERS })
}
