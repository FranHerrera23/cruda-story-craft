import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-[120px] md:py-[160px] px-6 md:px-16" 
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        {/* Quote */}
        <blockquote
          className="text-[28px] md:text-[36px] font-normal leading-[1.5] mb-8 transition-all duration-700"
          style={{
            color: '#FFFFFF',
            fontStyle: 'italic',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          "Fran helped us articulate what made our work different in a way our clients finally understood. The clarity was immediate."
        </blockquote>

        {/* Attribution */}
        <p
          className="text-[18px] transition-all duration-700"
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
        >
          — <span style={{ color: '#FF2E63', fontWeight: 500 }}>Karen Mannheim</span>, TRAZZO Lighting
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
