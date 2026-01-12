import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="problem-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '140px 80px'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        {/* Opening lines (softest) */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.5',
            color: 'rgba(10, 10, 10, 0.5)',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p>
            You know exactly who you are.<br />
            But every time you explain it, something gets lost.
          </p>
        </div>

        {/* Middle examples (medium) */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.5)',
            maxWidth: '500px',
            margin: '0 auto 32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms'
          }}
        >
          <p>
            The pitch that landed perfectly in person<br />
            falls flat in the deck.
          </p>
        </div>

        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.5)',
            maxWidth: '500px',
            margin: '0 auto 32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          <p>
            The project that changed everything<br />
            becomes a bullet point.
          </p>
        </div>

        {/* "Twenty years" (building) */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '28px',
            fontWeight: '500',
            lineHeight: '1.4',
            marginBottom: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '450ms'
          }}
        >
          <p style={{ color: '#0A0A0A' }}>Twenty years of work.</p>
          <p style={{ color: 'rgba(10, 10, 10, 0.5)' }}>Reduced to a tagline.</p>
        </div>

        {/* Payoff (LOUD) */}
        <div
          className="transition-all duration-700 problem-payoff"
          style={{
            fontSize: '44px',
            fontWeight: '600',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          <p style={{ color: '#0A0A0A' }}>The gap isn't your work.</p>
          <p style={{ color: '#FF2E63' }}>It's your words.</p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .problem-section {
            padding: 100px 24px !important;
          }
          .problem-payoff {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
