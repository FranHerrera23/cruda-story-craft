import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TheProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Problem Statement */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            marginBottom: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          YOUR LINKEDIN SAYS ONE THING.<br />
          YOUR PITCH DECK SAYS ANOTHER.<br />
          YOUR PROPOSALS SOUND LIKE<br />
          SOMEONE ELSE WROTE THEM.
        </h2>

        {/* Payoff */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: '800',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms'
          }}
        >
          REVENUE FOLLOWS<br />
          <span style={{ color: '#FF2E63' }}>COHERENCE.</span>
        </p>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TheProblemSection;
