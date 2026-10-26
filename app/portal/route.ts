import { HEADERS, messageHtml } from '../../portal/server/page'

export const dynamic = 'force-static'

export function GET() {
  return new Response(messageHtml('Your work, in one place.', 'Open the personal link Fran sent you. Lost it? Write to <a class="lnk" href="mailto:fran@thecruda.com">fran@thecruda.com</a>.'), { headers: HEADERS })
}
