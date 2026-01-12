import { useState, useEffect } from "react";
import franCallImage from "@/assets/fran-portrait-hero.png";
import { Link } from "react-router-dom";

const HeroManifesto = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '48px',
          alignItems: 'center',
          minHeight: '90vh'
        }}
        className="hero-grid"
      >
        {/* Left Column - Text Content */}
        <div>
          {/* Headline */}
          <h1 
            style={{ 
              fontSize: '64px',
              fontWeight: '600',
              lineHeight: '1.0',
              letterSpacing: '-0.03em',
              color: '#0A0A0A',
              marginBottom: '32px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s ease'
            }}
          >
            You've built something extraordinary.
            <br />
            <span style={{ color: '#FF2E63' }}>
              Explaining it shouldn't be this hard.
            </span>
          </h1>
          
          {/* Descriptor */}
          <p
            style={{
              fontSize: '18px',
              fontWeight: '400',
              fontStyle: 'italic',
              lineHeight: '1.7',
              color: 'rgba(10, 10, 10, 0.6)',
              marginBottom: '40px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
              transitionDelay: '100ms'
            }}
          >
            Narrative strategy for real estate, construction, and architecture leaders.
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
              padding: '20px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.2s ease',
              transitionDelay: '200ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E0264F';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Start a Conversation
          </Link>
        </div>
        
        {/* Right Column - Photo */}
        <div className="hero-photo">
          <img
            src={franCallImage}
            alt="Fran Herrera, Founder of CRUDA"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0'
            }}
          />
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-grid h1 {
            font-size: 40px !important;
          }
          .hero-photo {
            order: 2;
            height: 400px;
            margin-top: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
