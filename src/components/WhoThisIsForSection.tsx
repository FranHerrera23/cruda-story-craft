import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const forItems = [
  "Winning more work than your team can handle — but still not known outside your network",
  "Entering new markets where no one knows your name yet",
  "Ready to raise capital, attract partners, or recruit senior talent"
];

const notForItems = [
  "You need leads, not reputation",
  "You want to go viral, not be understood",
  "You're not ready to be the face of your work"
];

const WhoThisIsForSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F5F1E8',
        padding: '100px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Two-column grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '80px' }}
        >
          {/* Left Column - WHO THIS IS FOR */}
          <div
            className="transition-all duration-700"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              padding: '48px',
              borderRadius: '12px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p
              style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FF2E63',
                marginBottom: '32px'
              }}
            >
              WHO THIS IS FOR
            </p>

            <p
              style={{
                fontSize: '20px',
                color: '#0A0A0A',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}
            >
              Construction, architecture, and built environment companies that are:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {forItems.map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start'
                  }}
                >
                  <span style={{ color: '#FF2E63', fontSize: '20px', marginRight: '16px', lineHeight: '1.6' }}>→</span>
                  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#0A0A0A' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: '18px',
                color: 'rgba(10,10,10,0.7)',
                marginTop: '32px',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}
            >
              This includes M&A and PE firms acquiring in the space — where the leader's credibility affects deal flow and valuation.
            </p>
          </div>

          {/* Right Column - WHO THIS ISN'T FOR */}
          <div
            className="transition-all duration-700"
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              padding: '48px',
              borderRadius: '8px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            <p
              style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FF2E63',
                marginBottom: '32px'
              }}
            >
              WHO THIS ISN'T FOR
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '56px' }}>
              {notForItems.map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start'
                  }}
                >
                  <span style={{ color: '#666666', fontSize: '20px', marginRight: '16px', lineHeight: '1.6' }}>✗</span>
                  <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(10,10,10,0.6)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default WhoThisIsForSection;
