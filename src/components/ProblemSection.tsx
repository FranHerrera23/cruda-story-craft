import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="problem-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 80px'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Setup - small, gray, left-aligned */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '48px',
            maxWidth: '400px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p>
            You know exactly who you are.<br />
            But every time you explain it,<br />
            something gets lost.
          </p>
        </div>

        {/* Statement - large, left-aligned */}
        <div
          className="transition-all duration-700 problem-statement"
          style={{
            fontSize: '56px',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          <p style={{ color: '#0A0A0A', marginBottom: '0' }}>The gap isn't your work.</p>
          <p style={{ color: '#FF2E63', marginBottom: '0' }}>It's your words.</p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .problem-section {
            padding: 100px 24px !important;
          }
          .problem-statement {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
