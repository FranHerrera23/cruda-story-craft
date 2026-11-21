import editor from './editor'
import { denied, headers } from './auth'
export const dynamic = 'force-dynamic'
export function GET(req: Request) {
  return denied(req) || new Response(editor,{headers:{...headers,'Content-Type':'text/html; charset=utf-8'}})
}
