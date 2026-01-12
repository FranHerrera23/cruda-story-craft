import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Instagram } from "lucide-react";
import crudaLogo from "@/assets/cruda-logo.png";

const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#0A0A0A',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700 cta-headline"
          style={{
            fontSize: '52px',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when <span style={{ color: '#FF2E63' }}>you are.</span>
        </h2>

        {/* CTA Button */}
        <Link
          to="/book-call"
          className="inline-block transition-all duration-300"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: '600',
            padding: '20px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E0264F';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF2E63';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Start a Conversation
        </Link>
      </div>

      {/* Footer */}
      <footer 
        style={{ 
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Link to="/" className="inline-block mb-8">
          <img 
            src={crudaLogo} 
            alt="CRUDA" 
            className="h-24 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <a 
            href="https://www.linkedin.com/company/cruda-agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/cruda.agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            <Instagram size={20} />
          </a>
        </div>

        <p 
          style={{ 
            fontSize: '13px', 
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.02em'
          }}
        >
          © {new Date().getFullYear()} CRUDA. All rights reserved.
        </p>
      </footer>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .cta-headline {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
