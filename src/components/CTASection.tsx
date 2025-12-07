import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F7F7F7',
        padding: '160px 80px',
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

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
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