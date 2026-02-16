import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 'clamp(48px, 6vw, 72px)',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '24px',
            letterSpacing: '-0.03em'
          }}
        >
          Lost?
        </h1>

        <p
          style={{
            fontSize: '24px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.6)',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}
        >
          This page doesn't exist.
        </p>

        <p
          style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#0A0A0A',
            lineHeight: '1.6',
            marginBottom: '48px'
          }}
        >
          But we do.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#0A0A0A',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '500',
            padding: '18px 28px',
            borderRadius: '0',
            textDecoration: 'none',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#FF2E63'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0A0A'; }}
        >
          Back to Home
          <span style={{ fontSize: '18px' }}>→</span>
        </Link>
      </div>
    </main>
  );
}
