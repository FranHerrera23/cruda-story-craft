import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroManifesto = () => {
  const [wordsVisible, setWordsVisible] = useState<boolean[]>([false, false]);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setWordsVisible([true, true]);
      setSubtitleVisible(true);
      return;
    }

    const timers = [
      setTimeout(() => setWordsVisible([true, false]), 200),
      setTimeout(() => setWordsVisible([true, true]), 500),
      setTimeout(() => setSubtitleVisible(true), 900)
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '140px 80px 100px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Left-aligned text */}
        <div style={{ maxWidth: '700px' }}>
          <h1 
            style={{ 
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '600',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: '#0A0A0A',
              marginBottom: '32px'
            }}
          >
            <span 
              style={{ 
                display: "inline",
                opacity: wordsVisible[0] ? 1 : 0,
                filter: wordsVisible[0] ? "blur(0)" : "blur(8px)",
                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              Expertise,{' '}
            </span>
            <span 
              style={{ 
                color: "#FF2E63", 
                display: "inline",
                opacity: wordsVisible[1] ? 1 : 0,
                filter: wordsVisible[1] ? "blur(0)" : "blur(8px)",
                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              translated.
            </span>
          </h1>
          
          {/* Tagline paragraph */}
          <p
            style={{
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              fontWeight: '400',
              lineHeight: '1.7',
              color: 'rgba(10, 10, 10, 0.7)',
              marginBottom: '24px',
              maxWidth: '700px',
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            We help construction, architecture, and built environment leaders 
            become the voice their work deserves — on LinkedIn, in the press, 
            and in every room that matters.
          </p>

          {/* Italic closer */}
          <p
            style={{
              fontSize: '20px',
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'rgba(10, 10, 10, 0.7)',
              marginBottom: '48px',
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: '100ms'
            }}
          >
            Because mastery doesn't translate itself.
          </p>
          
          {/* CTA Button */}
          <Link 
            to="/book-call"
            className="inline-block"
            style={{ 
              background: '#FF2E63',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              padding: '18px 48px',
              borderRadius: '4px',
              textDecoration: 'none',
              marginBottom: '60px',
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.3s ease",
              transitionDelay: '200ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E02856';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,46,99,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a Conversation
          </Link>

          {/* Trusted By */}
          <div
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: '300ms'
            }}
          >
            <p
              style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.5)',
                marginBottom: '12px'
              }}
            >
              TRUSTED BY
            </p>

            <p
              style={{
                fontSize: '16px',
                color: 'rgba(10, 10, 10, 0.6)'
              }}
            >
              TRAZZO Lighting · Norhart · UNIK Parquet
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 100px 24px 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
