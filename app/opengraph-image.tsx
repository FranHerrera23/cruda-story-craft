import { ImageResponse } from 'next/og'

/* F18.5 · 21-sep · autónomo · og:image tipográfico site-wide.
   Usado por: /work/* sin imagen real (Confidential, INOUT, JPR),
   home fallback, y cualquier ruta que no declare su propia
   og.image. Nunca logo.png. */

export const runtime = 'edge'
export const alt = 'CRUDA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F1EFEB',
          color: '#0D0D0D',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontWeight: 500,
            color: '#0D0D0D',
          }}
        >
          CRUDA
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            We translate cultures into business.
          </div>
          <div
            style={{
              width: 96,
              height: 4,
              background: '#FF5A00',
              marginTop: 40,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
