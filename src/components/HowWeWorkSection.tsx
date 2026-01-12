import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const columns = [
  {
    label: "Month 1",
    title: "We listen.",
    body: [
      "Weekly conversations. Your projects, your milestones, your way of seeing the world.",
      "We're not writing yet. We're finding the pattern."
    ]
  },
  {
    label: "Months 2–6",
    title: "We build.",
    body: [
      "Your narrative — across LinkedIn, website, pitch decks, talking points.",
      "Not content for content's sake. A system that holds."
    ]
  },
  {
    label: "Month 7+",
    title: "Most clients stay.",
    body: [
      "Because the work evolves. New markets. New projects. New rooms to walk into."
    ]
  }
];

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Label */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </p>

        {/* Three Columns */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '48px' 
          }}
          className="how-grid"
        >
          {columns.map((col, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              {/* Time Label */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.4)',
                  marginBottom: '16px'
                }}
              >
                {col.label}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '16px'
                }}
              >
                {col.title}
              </p>

              {/* Body */}
              {col.body.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
