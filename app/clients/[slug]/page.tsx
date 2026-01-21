'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ClientPage({ params }: { params: { slug: string } }) {
  const clientNames: Record<string, string> = {
    'karen-mannheim': 'Karen Mannheim',
    'mike-kaeding': 'Mike Kaeding',
    'girish-sehgal': 'Girish Sehgal',
    'juan-pablo-romero': 'Juan Pablo Romero',
    'nitin-passi': 'Confidential Client',
  };

  const clientName = clientNames[params.slug] || 'Client';

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* Back Navigation */}
      <div className="px-6 md:px-20 py-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-70"
          style={{ color: '#0A0A0A' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Content */}
      <section className="px-6 md:px-20 py-32" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '52px',
            fontWeight: '600',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            marginBottom: '24px'
          }}
        >
          {clientName}
        </h1>

        <p
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.6)',
            marginBottom: '48px'
          }}
        >
          Full case study coming soon.
        </p>

        <Link
          href="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '500',
            letterSpacing: '0.01em',
            padding: '18px 28px',
            borderRadius: '0',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E62958';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF2E63';
          }}
        >
          Start a Conversation
          <span style={{ fontSize: '18px' }}>→</span>
        </Link>
      </section>
    </main>
  );
}
