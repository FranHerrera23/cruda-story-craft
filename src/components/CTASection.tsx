'use client';

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Instagram } from "lucide-react";
import crudaLogo from "@/assets/cruda-logo.png";

interface CTASectionProps {
  ctaText?: string;
  ctaHref?: string;
}

const CTASection = ({ ctaText = "Start a Conversation", ctaHref = "/contact" }: CTASectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className="cta-section"
      style={{
        backgroundColor: '#0A0A0A',
        padding: '160px 80px 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700 cta-headline"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '600',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          The work speaks for itself.<br />
          <span style={{ color: '#E8623A' }}>Let&apos;s make sure it travels.</span>
        </h2>

        {/* CTA Button */}
        <Link
          href={ctaHref}
          className="cta-button-dark"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#E8623A',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '500',
            letterSpacing: '0.01em',
            padding: '18px 28px',
            borderRadius: '0',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.25s ease',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0A0A0A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E8623A';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          {ctaText}
          <span
            className="cta-arrow"
            style={{ fontSize: '18px', transition: 'transform 0.25s ease' }}
          >
            →
          </span>
        </Link>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Link href="/" className="inline-block mb-8">
          <img
            src={crudaLogo.src}
            alt="CRUDA"
            className="h-24 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/company/thecrudaspace/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/thecruda/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            <Instagram size={20} />
          </a>
        </div>

        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.02em'
          }}
        >
          © {new Date().getFullYear()} CRUDA. All rights reserved.
        </p>
      </footer>

      {/* Styles */}
      <style>{`
        .cta-button-dark:hover .cta-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 80px 24px !important;
          }
          .cta-headline {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
