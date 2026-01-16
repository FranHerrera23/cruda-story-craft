'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="philosophy-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '140px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700 philosophy-headline"
          style={{
            fontSize: '44px',
            fontWeight: '600',
            color: '#0A0A0A',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          The Bible. The Godfather. Marcus Aurelius.
        </h2>

        {/* Body */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.5',
            color: 'rgba(10, 10, 10, 0.6)',
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p style={{ marginBottom: '0' }}>
            Humans don't organize around facts.<br />
            We organize around stories.
          </p>
        </div>

        {/* Closer */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          Your company is no different.
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .philosophy-section {
            padding: 100px 24px !important;
          }
          .philosophy-headline {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;
