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

        {/* CTA Button */}
        <Link
          to="/book-call"
          className="inline-block"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: '600',
            padding: '24px 56px',
            borderRadius: '8px',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.2s ease',
            transitionDelay: '100ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E8284A';
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
