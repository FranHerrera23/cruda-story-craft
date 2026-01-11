import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import franPhoto from "@/assets/fran-portrait-hero.png";

const HeroManifesto = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '140px 80px 100px 80px'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'flex', 
          gap: '60px', 
          alignItems: 'center' 
        }}
      >
        {/* Left Column - 55% */}
        <div style={{ flex: '0 0 55%', maxWidth: '55%' }}>
          <h1 
            className="transition-all duration-700"
            style={{ 
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: '800',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              marginBottom: '32px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            YOU'VE BUILT<br />
            SOMETHING WORTH<br />
            TALKING ABOUT.<br />
            <br />
            <span style={{ color: '#FF2E63' }}>
              WE MAKE SURE<br />
              PEOPLE DO.
            </span>
          </h1>
          
          {/* Descriptor */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '18px',
              fontStyle: 'italic',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.6)',
              marginBottom: '32px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            Narrative strategy for real estate, construction, and architecture leaders.
          </p>
          
          {/* CTA Button */}
          <Link 
            to="/book-call"
            className="inline-block transition-all duration-300"
            style={{ 
              background: '#FF2E63',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              padding: '18px 48px',
              borderRadius: '4px',
              textDecoration: 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
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
        </div>

        {/* Right Column - 45% - Fran's Photo */}
        <div 
          className="hidden md:block transition-all duration-700"
          style={{ 
            flex: '0 0 45%',
            maxWidth: '45%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            transitionDelay: '300ms'
          }}
        >
          <img 
            src={franPhoto} 
            alt="Fran - CRUDA Founder"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
            }}
          />
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 100px 24px 80px !important;
          }
          section > div {
            flex-direction: column !important;
          }
          section > div > div:first-child {
            flex: 1 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
