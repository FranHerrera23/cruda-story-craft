import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NarrativeAlignmentSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '140px 80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left Column - Copy */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <p
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#0A0A0A',
              marginBottom: '8px',
            }}
          >
            What you do.
          </p>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#0A0A0A',
              marginBottom: '8px',
            }}
          >
            Why it matters.
          </p>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#0A0A0A',
              marginBottom: '40px',
            }}
          >
            Why they should care.
          </p>
          <p
            style={{
              fontSize: '20px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.5)',
              marginBottom: '32px',
            }}
          >
            Most companies only have the first.
          </p>
          <p
            style={{
              fontSize: '20px',
              fontWeight: 500,
              color: 'rgba(10, 10, 10, 0.7)',
              lineHeight: 1.5,
            }}
          >
            When all three align, the audience can change —
            <br />
            but the story stays the same.
          </p>
        </div>

        {/* Right Column - Venn Diagram */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
          }}
        >
          <svg
            viewBox="0 0 400 380"
            style={{
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
            }}
          >
            {/* Circle 1 - Top */}
            <circle
              cx="200"
              cy="120"
              r="100"
              fill="rgba(10, 10, 10, 0.02)"
              stroke="#0A0A0A"
              strokeWidth="1.5"
            />
            {/* Circle 2 - Bottom Left */}
            <circle
              cx="140"
              cy="240"
              r="100"
              fill="rgba(10, 10, 10, 0.02)"
              stroke="#0A0A0A"
              strokeWidth="1.5"
            />
            {/* Circle 3 - Bottom Right */}
            <circle
              cx="260"
              cy="240"
              r="100"
              fill="rgba(10, 10, 10, 0.02)"
              stroke="#0A0A0A"
              strokeWidth="1.5"
            />

            {/* Label 1 - Top */}
            <text
              x="200"
              y="70"
              textAnchor="middle"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                fill: 'rgba(10, 10, 10, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              WHAT YOU DO
            </text>

            {/* Label 2 - Bottom Left */}
            <text
              x="80"
              y="280"
              textAnchor="middle"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                fill: 'rgba(10, 10, 10, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              WHY IT MATTERS
            </text>

            {/* Label 3 - Bottom Right */}
            <text
              x="320"
              y="280"
              textAnchor="middle"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                fill: 'rgba(10, 10, 10, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              WHY THEY SHOULD CARE
            </text>

            {/* Center Label - Narrative */}
            <text
              x="200"
              y="195"
              textAnchor="middle"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                fill: '#FF2E63',
              }}
            >
              Narrative
            </text>
          </svg>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NarrativeAlignmentSection;
