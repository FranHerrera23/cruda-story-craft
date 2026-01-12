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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        paddingTop: '140px',
        minHeight: '90vh',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      <div 
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 480px',
          gap: '80px',
          alignItems: 'center',
          width: '100%'
        }}
      >
      {/* Left Column - Text Content */}
      <div>
        {/* Headline */}
        <h1 
          className="hero-headline"
          style={{ 
            fontSize: '68px',
            fontWeight: '600',
            lineHeight: '1.08',
            letterSpacing: '-0.025em',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease'
          }}
        >
          <span style={{ display: 'block' }}>You've built something</span>
          <span style={{ display: 'block' }}>extraordinary.</span>
          <span style={{ display: 'block', color: '#FF2E63' }}>Explaining it shouldn't</span>
          <span style={{ display: 'block', color: '#FF2E63' }}>be this hard.</span>
        </h1>
        
        {/* Descriptor */}
        <p
          className="hero-descriptor"
          style={{
            fontSize: '18px',
            fontWeight: '400',
            fontStyle: 'italic',
            lineHeight: '1.6',
            letterSpacing: '0.01em',
            color: 'rgba(10, 10, 10, 0.5)',
            maxWidth: '400px',
            marginTop: '24px',
            marginBottom: '32px',
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
          to="/contact"
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
            width: '480px',
            maxWidth: '100%',
            height: '600px',
            objectFit: 'cover',
            objectPosition: '50% 0%',
            borderRadius: '2px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.12)',
            filter: 'saturate(0.9) contrast(1.02)',
          }}
        />
      </div>
      </div>
      
      {/* Styles */}
      <style>{`
        .hero-section {
          width: 100%;
        }
        
        .cta-button-hero:hover .cta-arrow {
          transform: translateX(4px);
        }
        
        @media (max-width: 1200px) {
          .hero-headline {
            font-size: 56px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr 400px !important;
            gap: 60px !important;
          }
          .hero-photo img {
            width: 400px !important;
            height: 520px !important;
          }
        }
        
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-section {
            padding: 100px 40px 80px 40px !important;
            min-height: auto !important;
          }
          .hero-headline {
            font-size: 48px !important;
          }
          .hero-photo {
            order: 2;
            display: flex;
            justify-content: center;
          }
          .hero-photo img {
            width: 100% !important;
            max-width: 400px !important;
            height: 500px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 24px 60px 24px !important;
          }
          .hero-headline {
            font-size: 42px !important;
          }
          .hero-photo img {
            max-width: 320px !important;
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
