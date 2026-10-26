
/* Decisions and notes, append-only, one Redis list per client: portal:events:<account>.
   Upstash Redis over REST. In Vercel: Storage → Upstash for Redis → connect to this project;
   it sets KV_REST_API_URL and KV_REST_API_TOKEN (UPSTASH_REDIS_REST_* also accepted). */

export type PortalEvent = { id: string; acct: string; itemId: string; who: string; kind: string; text?: string; ref?: string; at: string }

const url = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const token = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
export const storeReady = () => Boolean(url() && token())
const key = (acct: string) => `portal:events:${acct}`

async function redis(cmd: (string | number)[]) {
  const res = await fetch(url()!, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`store ${res.status}`)
  return (await res.json()) as { result: unknown }
}

export async function listEvents(acct: string): Promise<PortalEvent[]> {
  const { result } = await redis(['LRANGE', key(acct), 0, -1])
  return ((result as string[]) ?? []).map((s) => JSON.parse(s) as PortalEvent)
}

export async function addEvent(e: PortalEvent) {
  await redis(['RPUSH', key(e.acct), JSON.stringify(e)])
}
