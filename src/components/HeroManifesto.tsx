import { useState, useEffect } from "react";
import franCallImage from "@/assets/fran-portrait-hero.png";
import { Link } from "react-router-dom";

const HeroManifesto = () => {
  const [wordsVisible, setWordsVisible] = useState<boolean[]>([false, false, false]);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setWordsVisible([true, true, true]);
      setSubtitleVisible(true);
      return;
    }

    const timers = [
      setTimeout(() => setWordsVisible([true, false, false]), 200),
      setTimeout(() => setWordsVisible([true, true, false]), 400),
      setTimeout(() => setWordsVisible([true, true, true]), 600),
      setTimeout(() => setSubtitleVisible(true), 1000)
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px 160px 80px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div style={{ maxWidth: '560px' }}>
            <h1 
              style={{ 
                fontSize: '80px',
                fontWeight: '700',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
                color: '#0A0A0A'
              }}
            >
              <span 
                style={{ 
                  display: "inline-block",
                  opacity: wordsVisible[0] ? 1 : 0,
                  transform: wordsVisible[0] ? "translateY(0)" : "translateY(30px)",
                  filter: wordsVisible[0] ? "blur(0)" : "blur(10px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                Your
              </span>{' '}
              <span 
                style={{ 
                  display: "inline-block",
                  opacity: wordsVisible[1] ? 1 : 0,
                  transform: wordsVisible[1] ? "translateY(0)" : "translateY(30px)",
                  filter: wordsVisible[1] ? "blur(0)" : "blur(10px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                expertise.
              </span>
              <br />
              <span 
                style={{ 
                  color: "#FF2E63", 
                  fontWeight: '700',
                  display: "inline-block",
                  opacity: wordsVisible[2] ? 1 : 0,
                  transform: wordsVisible[2] ? "translateY(0)" : "translateY(30px)",
                  filter: wordsVisible[2] ? "blur(0)" : "blur(10px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                Translated.
              </span>
            </h1>
            
            {/* Subline */}
            <p 
              style={{ 
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '1.5',
                color: 'rgba(10, 10, 10, 0.7)',
                marginTop: '48px',
                maxWidth: '440px',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              You're not bad at telling your story.<br />
              You've just been too busy building it.
            </p>
            
            {/* What We Do */}
            <p
              style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.7',
                color: 'rgba(10, 10, 10, 0.55)',
                marginTop: '28px',
                maxWidth: '420px',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s"
              }}
            >
              We help founders, CEOs, and senior leaders in construction, architecture, design, and hospitality craft narratives that build trust & reputation at scale.
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
                padding: '20px 44px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginTop: '48px',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E8284A';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF2E63';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start a Conversation
            </Link>

            {/* Proof Line */}
            <p
              style={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.4)',
                letterSpacing: '0.01em',
                marginTop: '48px',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s"
              }}
            >
              Trusted by TRAZZO Lighting · Norhart · UNIK Parquet
            </p>
          </div>
          
          {/* Right Column - Photo */}
          <div className="relative order-first lg:order-last">
            <img
              src={franCallImage}
              alt="Fran Herrera, Founder of CRUDA"
              className="w-full h-auto block"
              style={{
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 1024px) {
          section {
            padding: 80px 24px !important;
          }
          section h1 {
            font-size: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
