import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhoThisIsForSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F5F1E8',
        padding: '120px 80px'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}
        className="who-grid"
      >
        {/* Left Card - Who this is for */}
        <div
          className="transition-all duration-700"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            padding: '32px',
            borderRadius: '8px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#FF2E63',
              marginBottom: '24px'
            }}
          >
            Who this is for
          </p>

          {/* Body */}
          <div
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.8)',
              lineHeight: '1.7'
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              Construction, real estate, and built environment companies doing $20M+ that are:
            </p>

            <p style={{ marginBottom: '16px' }}>
              <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
              Winning more work than your team can handle — but still invisible outside your network
            </p>

            <p style={{ marginBottom: '16px' }}>
              <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
              Entering new markets where reputation doesn't travel with you
            </p>

            <p style={{ marginBottom: '24px' }}>
              <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
              Raising capital, attracting partners, or recruiting senior talent — and need the story to land before you walk in
            </p>

            <p
              style={{
                fontStyle: 'italic',
                color: 'rgba(10, 10, 10, 0.6)',
                marginTop: '24px'
              }}
            >
              This includes M&A and PE firms acquiring in the space — where the founder's credibility affects deal flow and valuation.
            </p>
          </div>
        </div>

        {/* Right Card - Who this isn't for */}
        <div
          className="transition-all duration-700"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            padding: '32px',
            borderRadius: '8px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#FF2E63',
              marginBottom: '24px'
            }}
          >
            Who this isn't for
          </p>

          {/* Body */}
          <div
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: '1.8'
            }}
          >
            <p style={{ marginBottom: '16px' }}>
              <span style={{ color: 'rgba(10, 10, 10, 0.3)', marginRight: '12px' }}>✗</span>
              You need leads, not reputation
            </p>

            <p style={{ marginBottom: '16px' }}>
              <span style={{ color: 'rgba(10, 10, 10, 0.3)', marginRight: '12px' }}>✗</span>
              You want to go viral, not be understood
            </p>

            <p>
              <span style={{ color: 'rgba(10, 10, 10, 0.3)', marginRight: '12px' }}>✗</span>
              You're not ready to be the face of your work
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .who-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoThisIsForSection;
