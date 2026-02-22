'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Script from "next/script";

export default function ContactContent() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <section
        ref={elementRef}
        className="contact-page"
        style={{
          padding: '160px 80px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ maxWidth: '900px', width: '100%' }}>
          {/* Title */}
          <h1
            className="transition-all duration-700"
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '16px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Book a discovery call.
          </h1>

          {/* Subtitle */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.5)',
              lineHeight: '1.6',
              maxWidth: '520px',
              marginBottom: '48px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            We work with a small number of clients at any given time. Let&apos;s figure out if there&apos;s a fit.
          </p>

          {/* Calendly Inline Embed */}
          <div
            className="calendly-inline-widget transition-all duration-700"
            data-url="https://calendly.com/cruda-intro/narrative-sparring-live-1?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=ff2e63"
            style={{
              minWidth: '320px',
              height: '700px',
              width: '100%',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          />
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .contact-page {
            padding: 120px 24px 60px !important;
          }
        }
      `}</style>
    </main>
  );
}
