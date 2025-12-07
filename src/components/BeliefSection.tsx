import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BeliefSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FAFAFA',
        padding: '160px 60px'
      }}
    >
      <div style={{ maxWidth: '700px' }}>
        {/* Main headline */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(40px, 4vw, 56px)',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Trust shifted.
        </h2>

        {/* First paragraph */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '28px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            lineHeight: '1.6',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          From institutions to people.<br />
          From logos to leaders.
        </p>

        {/* Key statement */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '28px',
            fontWeight: '500',
            color: '#0A0A0A',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          A CEO without a voice is a business without a soul.
        </p>

        {/* Closing */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '28px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          The story is already there. We help you find it.
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

export default BeliefSection;
