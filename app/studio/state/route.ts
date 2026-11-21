import { createHash, createDecipheriv } from 'node:crypto'
import { redis } from '../../../portal/server/store'
import { headers, denied } from '../auth'
import seed from '../seed.json'
export const dynamic = 'force-dynamic'
const key='cruda:studio:maps:v1'
export async function GET(req:Request) {
  const unauthorized=denied(req)
  if(unauthorized) return unauthorized
  const stored=await redis(['GET',key])
  if(stored.result) return new Response(String(stored.result),{headers})
  const pass=Buffer.from(req.headers.get('authorization')!.slice(6),'base64').toString().slice(5)
  const [iv,tag,bytes]=seed.map(x=>Buffer.from(x,'base64'))
  const decipher=createDecipheriv('aes-256-gcm',createHash('sha256').update(pass).digest(),iv)
  decipher.setAuthTag(tag)
  return new Response(Buffer.concat([decipher.update(bytes),decipher.final()]).toString(),{headers})
}
export async function POST(req:Request) {
  const unauthorized=denied(req)
  if(unauthorized) return unauthorized
  if(req.headers.get('origin')!==new URL(req.url).origin) return new Response(null,{status:403})
  const raw=await req.text()
  if(raw.length>3000000) return new Response(null,{status:413})
  const state=JSON.parse(raw)
  if(!Number.isSafeInteger(state.revision)||!Array.isArray(state.maps)||!state.maps.length) return new Response(null,{status:400})
  const revision=state.revision++
  const script="local v=redis.call('GET',KEYS[1]); local n=0; if v then n=cjson.decode(v).revision end; if n~=tonumber(ARGV[1]) then return 0 end; redis.call('SET',KEYS[1],ARGV[2]); return 1"
  const saved=await redis(['EVAL',script,1,key,revision,JSON.stringify(state)])
  return Response.json(state.revision,{status:saved.result===1?200:409,headers})
}
