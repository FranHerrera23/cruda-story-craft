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
      className="hero-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        display: 'grid',
        gridTemplateColumns: '1fr 380px',
        gap: '80px',
        alignItems: 'center',
        padding: '80px 80px 120px 80px',
        minHeight: 'calc(100vh - 80px)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      {/* Left Column - Text Content */}
      <div>
        {/* Headline */}
        <h1 
          style={{ 
            fontSize: '52px',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease'
          }}
        >
          <span style={{ display: 'block' }}>You've built something</span>
          <span style={{ display: 'block', marginBottom: '8px' }}>extraordinary.</span>
          <span style={{ display: 'block', color: '#FF2E63' }}>Explaining it shouldn't</span>
          <span style={{ display: 'block', color: '#FF2E63', marginBottom: '40px' }}>be this hard.</span>
        </h1>
        
        {/* Descriptor */}
        <p
          style={{
            fontSize: '18px',
            fontWeight: '400',
            fontStyle: 'italic',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.5)',
            maxWidth: '400px',
            marginBottom: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
            transitionDelay: '100ms'
          }}
        >
          Narrative strategy for real estate, construction, and architecture leaders.
        </p>
        
        {/* CTA Button - Square with Arrow */}
        <Link 
          to="/book-call"
          className="cta-button-hero"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#0A0A0A',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '500',
            letterSpacing: '0.01em',
            padding: '18px 28px',
            borderRadius: '0',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.25s ease',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FF2E63';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0A0A0A';
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
      
      {/* Right Column - Photo */}
      <div className="hero-photo">
        <img
          src={franCallImage}
          alt="Fran Herrera, Founder of CRUDA"
          style={{
            width: '380px',
            maxWidth: '100%',
            height: '520px',
            objectFit: 'cover',
            objectPosition: 'center top',
            borderRadius: '2px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>
      
      {/* Styles */}
      <style>{`
        .hero-section {
          width: 100%;
        }
        
        .cta-button-hero:hover .cta-arrow {
          transform: translateX(4px);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 24px 80px 24px !important;
            min-height: auto !important;
          }
          .hero-section h1 {
            font-size: 36px !important;
          }
          .hero-photo {
            order: 2;
          }
          .hero-photo img {
            width: 100% !important;
            max-width: 320px !important;
            height: 400px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
