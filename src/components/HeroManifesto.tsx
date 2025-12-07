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
      className="min-h-[90vh] flex items-center"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 60px 160px 60px'
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h1 
              style={{ 
                fontSize: 'clamp(48px, 5vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.0',
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
                fontSize: 'clamp(20px, 2vw, 24px)',
                fontWeight: '400',
                lineHeight: '1.5',
                color: 'rgba(10, 10, 10, 0.7)',
                marginTop: '40px',
                maxWidth: '500px',
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
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgba(10, 10, 10, 0.6)',
                marginTop: '32px',
                maxWidth: '480px',
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
              className="inline-block transition-all duration-300"
              style={{ 
                background: '#FF2E63',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '600',
                padding: '20px 40px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginTop: '48px',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E61E53';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF2E63';
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
                color: 'rgba(10, 10, 10, 0.4)',
                marginTop: '48px',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s"
              }}
            >
              Trusted by TRAZZO Lighting · Norhart · UNIK Parquet
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative order-first lg:order-last">
            <img
              src={franCallImage}
              alt="Fran Herrera, Founder of CRUDA"
              className="w-full h-auto block"
              style={{
                objectFit: 'cover'
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
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
