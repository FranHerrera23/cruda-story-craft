import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        {/* Problem Statement */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.7)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p style={{ marginBottom: '32px' }}>
            You know exactly who you are.<br />
            But every time you explain it, something gets lost.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The pitch that landed perfectly in person<br />
            falls flat in the deck.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The project that changed everything for the client<br />
            becomes a bullet point on a capabilities page.
          </p>

          <p>
            Twenty years of work.<br />
            Reduced to a tagline that could belong to anyone.
          </p>
        </div>

        {/* Payoff */}
        <div
          className="transition-all duration-700"
          style={{
            marginTop: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          <p
            style={{
              fontSize: '52px',
              fontWeight: '600',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: '#0A0A0A'
            }}
          >
            The gap isn't your work.
            <br />
            <span style={{ color: '#FF2E63' }}>It's your words.</span>
          </p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          section > div > div:first-child {
            font-size: 20px !important;
          }
          section > div > div:last-child p {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
