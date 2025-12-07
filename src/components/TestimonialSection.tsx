import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#0A0A0A',
        padding: '200px 80px',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '900px', textAlign: 'center' }}>
        {/* Quote */}
        <blockquote
          className="transition-all duration-700"
          style={{
            fontSize: '44px',
            fontWeight: '400',
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: '1.4',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          "Fran helped us articulate what made our work different in a way our clients finally understood. The clarity was immediate."
        </blockquote>

        {/* Attribution */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '17px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '48px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
        >
          — <span style={{ color: '#FF2E63' }}>Karen Mannheim</span>, TRAZZO Lighting
        </p>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
            min-height: auto !important;
          }
          section blockquote {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
