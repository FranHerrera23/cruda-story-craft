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
      className="py-[120px] px-[60px] min-h-screen flex items-center"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-[100px] items-center">
          {/* Left Side - Text Content */}
          <div className="md:pr-[40px]">
            <h1 
              className="mb-[32px]"
              style={{ 
                fontSize: 'clamp(48px, 6vw, 80px)',
                fontWeight: '300',
                lineHeight: '1.1',
                color: '#3D3835'
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
                  fontWeight: "400",
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
            
            <p 
              className="mb-[48px]"
              style={{ 
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: '300',
                lineHeight: '1.6',
                color: '#3D3835',
                opacity: subtitleVisible ? 0.8 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s"
              }}
            >
              We help technical founders turn years of mastery into narratives that travel—across continents, industries, and into the rooms where opportunities live.
            </p>
            
            <Link 
              to="/book-call"
              className="inline-block font-medium transition-all duration-300"
              style={{ 
                background: '#FF2E63',
                color: '#FFFFFF',
                fontSize: '18px',
                padding: '18px 48px',
                borderRadius: '8px',
                textDecoration: 'none',
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E61E53';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
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
          
          {/* Right Side - Image */}
          <div className="relative order-first md:order-last">
            <img
              src={franCallImage}
              alt="Fran Herrera, Founder of CRUDA"
              className="w-full h-auto block"
              style={{
                borderRadius: '16px',
                boxShadow: '0 12px 48px rgba(61, 56, 53, 0.2)'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 1024px) {
          section {
            padding: 80px 40px !important;
          }
          
          h1 {
            font-size: 36px !important;
            text-align: center;
          }
          
          p {
            font-size: 18px !important;
            text-align: center;
          }
          
          .uppercase {
            text-align: center;
          }
          
          a {
            display: block !important;
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
