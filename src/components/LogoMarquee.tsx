import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  "TikTok",
  "Mondelez",
  "Nestlé",
  "United Nations",
  "DeliveryHero",
  "Natura",
  "Ab InBev"
];

const LogoMarquee = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef}
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        overflow: 'hidden'
      }}
    >
      {/* Marquee Container */}
      <div 
        className="relative w-full transition-opacity duration-700"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transitionDelay: '200ms'
        }}
      >
        {/* Marquee Track */}
        <div 
          className="flex animate-marquee"
          style={{ 
            width: 'fit-content',
            gap: '80px'
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <span
              key={`logo-1-${index}`}
              style={{
                fontSize: '24px',
                fontWeight: '500',
                color: 'rgba(10, 10, 10, 0.3)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {logo}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <span
              key={`logo-2-${index}`}
              style={{
                fontSize: '24px',
                fontWeight: '500',
                color: 'rgba(10, 10, 10, 0.3)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div 
        className="transition-opacity duration-700"
        style={{ 
          marginTop: '40px',
          maxWidth: '1200px',
          margin: '40px auto 0',
          padding: '0 60px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          opacity: isVisible ? 1 : 0,
          transitionDelay: '400ms'
        }}
      >
        {/* Left Label */}
        <span style={{ fontSize: '14px', color: 'rgba(10, 10, 10, 0.4)' }}>
          2017
        </span>

        {/* Left Dot */}
        <div 
          style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(10, 10, 10, 0.15)',
            flexShrink: 0
          }}
        />

        {/* Line */}
        <div 
          style={{ 
            flex: 1, 
            height: '1px', 
            backgroundColor: 'rgba(10, 10, 10, 0.15)' 
          }}
        />

        {/* Right Dot */}
        <div 
          style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(10, 10, 10, 0.15)',
            flexShrink: 0
          }}
        />

        {/* Right Label */}
        <span style={{ fontSize: '14px', color: 'rgba(10, 10, 10, 0.4)' }}>
          2025
        </span>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @media (max-width: 768px) {
          section > div:last-child {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
