/* Who a portal link belongs to. thecruda.com/portal/<slug>.
   Client links are readable on purpose (client-ryanaltman): easy to send, easy to remember,
   never indexed. Studio, which sees and acts on every client, only opens with PORTAL_TEAM_KEY. */

export type Viewer = { name: string; account: string; team: boolean }

const CLIENT_LINKS: Record<string, Viewer> = {
  'client-ryanaltman': { name: 'Ryan', account: 'm2d', team: false },
  'client-martylowe': { name: 'Marty', account: 'marty', team: false },
}

export function viewerForKey(key: string | null | undefined): Viewer | null {
  if (!key) return null
  if (CLIENT_LINKS[key]) return CLIENT_LINKS[key]
  const team = process.env.PORTAL_TEAM_KEY
  if (team && team.length >= 12 && key === team) return { name: 'Fran', account: '*', team: true }
  return null
}
