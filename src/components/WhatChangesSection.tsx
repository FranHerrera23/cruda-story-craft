import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const changes = [
  "You walk into a room and they already know who you are",
  "Your socials sound like you, not a press release",
  "Your team explains what makes you different — without fumbling",
  "Clients, partners — they get it before you say a word",
  "You stop competing on price and start competing on trust"
];

const WhatChangesSection = () => {
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
        {/* Section header */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          What changes
        </p>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {changes.map((change, index) => (
            <p
              key={index}
              className="transition-all duration-700"
              style={{
                fontSize: 'clamp(22px, 2.5vw, 28px)',
                fontWeight: '400',
                color: '#0A0A0A',
                lineHeight: '1.5',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <span style={{ color: '#FF2E63', marginRight: '16px' }}>→</span>
              {change}
            </p>
          ))}
        </div>
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

export default WhatChangesSection;
