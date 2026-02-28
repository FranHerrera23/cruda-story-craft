'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkContent() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: karenRef, isVisible: karenVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: mikeRef, isVisible: mikeVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: compactRef, isVisible: compactVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* SECTION 1: HERO */}
      <section
        ref={heroRef}
        style={{
          padding: '160px 80px 80px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h1
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            The work speaks.
          </h1>
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: 'rgba(10, 10, 10, 0.45)',
              maxWidth: '500px',
              lineHeight: '1.6',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '100ms'
            }}
          >
            Narrative systems for construction, architecture, and design firms doing $20M–$500M.
          </p>
        </div>
      </section>

      {/* SECTION 2: FEATURED CASE STUDY — KAREN MANNHEIM */}
      <section
        ref={karenRef}
        style={{
          padding: '120px 80px'
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          {/* Label + Number */}
          <div
            className="transition-all duration-700"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              opacity: karenVisible ? 1 : 0,
              transform: karenVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)'
            }}>
              TRAZZO LIGHTING
            </p>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(10, 10, 10, 0.2)'
            }}>
              01
            </p>
          </div>

          {/* Red line */}
          <div
            className="transition-all duration-500"
            style={{
              width: karenVisible ? '48px' : '0px',
              height: '3px',
              backgroundColor: '#FF2E63',
              marginBottom: '40px',
              transitionDelay: '100ms'
            }}
          />

          {/* Headline */}
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: 600,
              color: '#0A0A0A',
              marginBottom: '32px',
              lineHeight: '1.3',
              opacity: karenVisible ? 1 : 0,
              transform: karenVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms'
            }}
          >
            30 years of expertise.<br />Zero presence outside Peru.
          </h2>

          {/* Body */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: '1.65',
              maxWidth: '700px',
              marginBottom: '64px',
              opacity: karenVisible ? 1 : 0,
              transform: karenVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms'
            }}
          >
            Karen Mannheim built Lima's most respected architectural lighting firm. Porsche. Four Seasons. Robert A.M. Stern Architects. But Miami didn't know she existed. We built the narrative system that changed that.
          </p>

          {/* Metrics */}
          <div
            className="karen-metrics-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '48px',
              marginBottom: '64px'
            }}
          >
            {[
              { value: '+4 years', label: 'Client since 2022' },
              { value: '+300%', label: 'LinkedIn growth' },
              { value: '500K', label: 'IG views / 90 days' },
              { value: 'RAMSA · Four Seasons · Porsche', label: 'Key partnerships' }
            ].map((metric, index) => (
              <div
                key={index}
                className="transition-all duration-700"
                style={{
                  borderTop: '1px solid rgba(10, 10, 10, 0.06)',
                  paddingTop: '20px',
                  opacity: karenVisible ? 1 : 0,
                  transform: karenVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                <p style={{
                  fontSize: index === 3 ? '16px' : '32px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px'
                }}>
                  {metric.value}
                </p>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(10, 10, 10, 0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            className="transition-all duration-700"
            style={{
              marginBottom: '40px',
              opacity: karenVisible ? 1 : 0,
              transform: karenVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '900ms'
            }}
          >
            <p style={{
              fontSize: '22px',
              fontStyle: 'italic',
              color: '#0A0A0A',
              maxWidth: '500px',
              marginBottom: '12px',
              lineHeight: '1.5'
            }}>
              "We finally sound like who we actually are."
            </p>
            <p style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF2E63'
            }}>
              — Karen Mannheim, Co-founder, TRAZZO Lighting
            </p>
          </div>

          {/* Link */}
          <Link
            href="/clients/karen-mannheim"
            className="link-cta transition-all duration-300"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#0A0A0A',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(10, 10, 10, 0.15)',
              paddingBottom: '4px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = '#FF2E63';
              e.currentTarget.style.color = '#FF2E63';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = 'rgba(10, 10, 10, 0.15)';
              e.currentTarget.style.color = '#0A0A0A';
            }}
          >
            See Karen's Work
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </section>

      {/* SECTION 3: FEATURED CASE STUDY — MIKE KAEDING */}
      <section
        ref={mikeRef}
        style={{
          padding: '120px 80px',
          borderTop: '1px solid rgba(10, 10, 10, 0.08)'
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          {/* Label + Number */}
          <div
            className="transition-all duration-700"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              opacity: mikeVisible ? 1 : 0,
              transform: mikeVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)'
            }}>
              NORHART
            </p>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(10, 10, 10, 0.2)'
            }}>
              02
            </p>
          </div>

          {/* Red line */}
          <div
            className="transition-all duration-500"
            style={{
              width: mikeVisible ? '48px' : '0px',
              height: '3px',
              backgroundColor: '#FF2E63',
              marginBottom: '40px',
              transitionDelay: '100ms'
            }}
          />

          {/* Headline */}
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: 600,
              color: '#0A0A0A',
              marginBottom: '32px',
              lineHeight: '1.3',
              opacity: mikeVisible ? 1 : 0,
              transform: mikeVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms'
            }}
          >
            $200M in assets.<br />No one outside Minneapolis had heard of him.
          </h2>

          {/* Body */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: '1.65',
              maxWidth: '700px',
              marginBottom: '64px',
              opacity: mikeVisible ? 1 : 0,
              transform: mikeVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms'
            }}
          >
            Mike Kaeding is building apartments 50% faster at 30% lower cost. Vertically integrated. Manufacturing-minded. But the construction industry thought he was just another local builder. We built the narrative that positioned him as the voice challenging a broken housing industry.
          </p>

          {/* Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px',
              marginBottom: '64px'
            }}
          >
            {[
              { value: '+2 years', label: 'Engagement duration' },
              { value: '$200M', label: 'In assets' },
              { value: 'Industry thought leadership', label: 'Positioning achieved' }
            ].map((metric, index) => (
              <div
                key={index}
                className="transition-all duration-700"
                style={{
                  borderTop: '1px solid rgba(10, 10, 10, 0.06)',
                  paddingTop: '20px',
                  opacity: mikeVisible ? 1 : 0,
                  transform: mikeVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                <p style={{
                  fontSize: index === 2 ? '16px' : '32px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px'
                }}>
                  {metric.value}
                </p>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(10, 10, 10, 0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            className="transition-all duration-700"
            style={{
              marginBottom: '40px',
              opacity: mikeVisible ? 1 : 0,
              transform: mikeVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '900ms'
            }}
          >
            <p style={{
              fontSize: '22px',
              fontStyle: 'italic',
              color: '#0A0A0A',
              maxWidth: '500px',
              marginBottom: '12px',
              lineHeight: '1.5'
            }}>
              "I used to dread the 'so what do you do?' question. Now I look forward to it."
            </p>
            <p style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF2E63'
            }}>
              — Mike Kaeding, CEO, Norhart
            </p>
          </div>

          {/* Link */}
          <Link
            href="/clients/mike-kaeding"
            className="link-cta transition-all duration-300"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#0A0A0A',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(10, 10, 10, 0.15)',
              paddingBottom: '4px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = '#FF2E63';
              e.currentTarget.style.color = '#FF2E63';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = 'rgba(10, 10, 10, 0.15)';
              e.currentTarget.style.color = '#0A0A0A';
            }}
          >
            See Mike's Work
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </section>

      {/* SECTION 4: COMPACT CLIENT GRID */}
      <section
        ref={compactRef}
        style={{
          padding: '80px',
          borderTop: '1px solid rgba(10, 10, 10, 0.08)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}
        >
          {[
            {
              label: "SSMC — HEALTHCARE",
              headline: "Hospitality is a mindset, not an industry.",
              description: "25 years across Four Seasons, Taj, and Grand Hyatt. Now translating world-class hospitality into healthcare. 7,000+ senior leaders reached.",
              link: "/clients/girish-sehgal",
              linkText: "See Girish's Work"
            },
            {
              label: "JURA PLANK — LUXURY FLOORING",
              headline: "From family craft to architect specification.",
              description: "Luxury Canadian hardwood manufacturer entering the US market. We built the narrative, brand, and website for JURA Plank and Connecting the Dots — his US market consulting practice.",
              link: "/clients/juan-pablo-romero",
              linkText: "See Juan Pablo's Work"
            },
            {
              label: "RETAIL — DUBAI",
              headline: "Strategic positioning under NDA.",
              description: "Second-time founder. $500M+ revenue. Narrative strategy for a retail holding company across the Middle East.",
              link: "/clients/nitin-passi",
              linkText: "View Case Study"
            }
          ].map((client, index) => (
            <div
              key={index}
              className="client-compact transition-all duration-700"
              style={{
                padding: '40px',
                border: '1px solid rgba(10, 10, 10, 0.06)',
                opacity: compactVisible ? 1 : 0,
                transform: compactVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150}ms`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 10, 10, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 10, 10, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <p style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.4)',
                marginBottom: '16px'
              }}>
                {client.label}
              </p>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#0A0A0A',
                marginBottom: '16px',
                lineHeight: '1.4'
              }}>
                {client.headline}
              </h3>
              <p style={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(10, 10, 10, 0.5)',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                {client.description}
              </p>
              <Link
                href={client.link}
                className="transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#0A0A0A',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderBottom: '1px solid rgba(10, 10, 10, 0.15)',
                  paddingBottom: '2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#FF2E63';
                  e.currentTarget.style.color = '#FF2E63';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'rgba(10, 10, 10, 0.15)';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                {client.linkText}
                <span style={{ fontSize: '16px' }}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section
        ref={ctaRef}
        style={{
          padding: '120px 80px',
          backgroundColor: '#0A0A0A',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(36px, 4vw, 48px)',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Ready when you are.
          </h2>
          <Link
            href="/contact"
            className="inline-block transition-all duration-300"
            style={{
              padding: '18px 28px',
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0A0A0A';
            }}
          >
            Book a Discovery Call →
          </Link>
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section:first-of-type {
            padding: 120px 24px 60px !important;
          }
          section:not(:first-of-type) {
            padding: 80px 24px !important;
          }
          h1 {
            font-size: 48px !important;
          }
          .karen-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .client-compact:nth-child(1),
          .client-compact:nth-child(2),
          .client-compact:nth-child(3) {
            grid-column: 1 / -1;
          }
          section:nth-of-type(4) > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
