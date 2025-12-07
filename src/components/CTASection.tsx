import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FAFAFA',
        padding: '160px 60px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Price */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(56px, 6vw, 80px)',
            fontWeight: '700',
            color: '#0A0A0A',
            letterSpacing: '-0.03em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)'
          }}
        >
          $7,200
        </h2>

        {/* Subline */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '22px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.6)',
            marginTop: '20px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '100ms'
          }}
        >
          Four months. Founder-led. Everything included.
        </p>

        {/* Breakdown */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '16px',
            color: 'rgba(10, 10, 10, 0.4)',
            marginTop: '12px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '150ms'
          }}
        >
          $1,800/month if that's easier.
        </p>

        {/* CTA Button */}
        <Link
          to="/book-call"
          className="inline-block transition-all duration-300"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: '600',
            padding: '22px 48px',
            borderRadius: '8px',
            marginTop: '48px',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E61E53';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF2E63';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Start a Conversation
        </Link>

        {/* Scarcity */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '15px',
            color: 'rgba(10, 10, 10, 0.4)',
            marginTop: '24px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '300ms'
          }}
        >
          We take one client per month. January is open.
        </p>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
