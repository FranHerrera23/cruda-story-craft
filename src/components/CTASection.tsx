'use client';

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Instagram } from "lucide-react";
import crudaLogo from "@/assets/cruda-logo.png";

const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="cta-section"
      style={{ 
        backgroundColor: '#0A0A0A',
        padding: '120px 80px',
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
            fontSize: '52px',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when <span style={{ color: '#FF2E63' }}>you are.</span>
        </h2>

        {/* CTA Button - Square with Arrow (On Dark Variant) */}
        <Link
          href="/contact"
          className="cta-button-dark"
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
            e.currentTarget.style.backgroundColor = '#FF2E63';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Start a Conversation
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
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
