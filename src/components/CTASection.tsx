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
        backgroundColor: '#F7F7F7',
        padding: '160px 80px 80px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when you are.
        </h2>

        {/* CTA Button with hover-lift effect */}
        <Link
          to="/book-call"
          className="inline-block hover-lift"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: '600',
            padding: '24px 56px',
            borderRadius: '8px',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms ease, box-shadow 300ms ease',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E8284A';
            e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(255, 46, 99, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF2E63';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Start a Conversation
        </Link>
      </div>

      {/* Footer with Logo */}
      <footer 
        className="mt-24 pt-12"
        style={{ 
          borderTop: '1px solid rgba(10, 10, 10, 0.1)'
        }}
      >
        <Link to="/" className="inline-block mb-6">
          <img 
            src={crudaLogo} 
            alt="CRUDA" 
            className="h-8 md:h-10 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </Link>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <a 
            href="https://www.linkedin.com/company/cruda-agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:opacity-100"
            style={{ color: 'rgba(10, 10, 10, 0.4)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0A0A0A'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(10, 10, 10, 0.4)'}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/cruda.agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:opacity-100"
            style={{ color: 'rgba(10, 10, 10, 0.4)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0A0A0A'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(10, 10, 10, 0.4)'}
          >
            <Instagram size={20} />
          </a>
        </div>

        <p 
          style={{ 
            fontSize: '13px', 
            color: 'rgba(10, 10, 10, 0.4)',
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
            padding: 120px 24px 60px !important;
          }
          section h2 {
            font-size: 36px !important;
          }
          section a {
            width: 100% !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;