import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TheChangeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 60px'
      }}
    >
      <div style={{ maxWidth: '750px' }}>
        {/* Main headline */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(36px, 4vw, 48px)',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Reputation is built online now.
        </h2>

        {/* Body paragraphs */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            lineHeight: '1.6',
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          Before you walk in the room, they've already Googled you.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            lineHeight: '1.6',
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          Your LinkedIn. Your website. Your content.<br />
          That's the first impression.
        </p>

        {/* Closing statement */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#0A0A0A',
            lineHeight: '1.6',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          The question isn't whether you need a narrative.<br />
          It's whether you're shaping it — or letting others assume it.
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

export default TheChangeSection;
