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

    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="py-[100px] md:py-[140px] px-6 md:px-[60px] min-h-screen flex items-center"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-[60%_40%] gap-12 md:gap-[60px] items-center">
          {/* Left Side - Text Content */}
          <div>
            <h1 
              className="mb-6"
              style={{ 
                fontSize: 'clamp(40px, 5vw, 56px)',
                fontWeight: '700',
                lineHeight: '1.1',
                color: '#1A1A1A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              We turn how you think into content that opens doors.
            </h1>
            
            <p 
              className="mb-4"
              style={{ 
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgba(26, 26, 26, 0.7)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s'
              }}
            >
              LinkedIn. Pitch decks. Proposals. Conference talks. Your philosophy, documented and deployed.
            </p>

            <p 
              className="mb-10"
              style={{ 
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.5',
                color: 'rgba(26, 26, 26, 0.5)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.25s'
              }}
            >
              For founders and senior leaders in architecture, design, construction, and hospitality.
            </p>
            
            <Link 
              to="/book-call"
              className="inline-block font-semibold transition-all duration-300"
              style={{ 
                background: '#FF2E63',
                color: '#FFFFFF',
                fontSize: '18px',
                padding: '18px 48px',
                borderRadius: '8px',
                textDecoration: 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.35s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start a Conversation
            </Link>

            {/* Proof Line */}
            <p
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(26, 26, 26, 0.4)',
                marginTop: '40px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s'
              }}
            >
              Trusted by TRAZZO Lighting · Norhart · UNIK Parquet
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative order-first md:order-last">
            <img
              src={franCallImage}
              alt="Fran Herrera, Founder of CRUDA"
              className="w-full h-auto block"
              style={{
                borderRadius: '16px',
                boxShadow: '0 12px 48px rgba(26, 26, 26, 0.15)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
