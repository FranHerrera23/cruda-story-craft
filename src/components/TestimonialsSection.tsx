import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "We finally sound like who we actually are.",
    attribution: "— Karen Mannheim, Co-founder, TRAZZO Lighting"
  },
  {
    quote: "I used to dread the 'so what do you do?' question. Now I look forward to it.",
    attribution: "— Mike Kaeding, CEO, Norhart"
  }
];

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#0A0A0A',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '80px'
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Quote */}
            <p
              style={{
                fontSize: '32px',
                fontWeight: '400',
                fontStyle: 'italic',
                color: '#FFFFFF',
                lineHeight: '1.4'
              }}
              className="quote-text"
            >
              "{testimonial.quote}"
            </p>

            {/* Attribution */}
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                color: '#FF2E63',
                marginTop: '24px'
              }}
            >
              {testimonial.attribution}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .quote-text {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
