import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-24 md:py-32 px-6 md:px-16" 
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Quote */}
        <blockquote
          className="text-[24px] md:text-[32px] font-normal leading-[1.5] mb-8 transition-all duration-700"
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
          className="text-[16px] md:text-[18px] transition-all duration-700"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
        >
          — <span style={{ color: '#FF2E63', fontWeight: 500 }}>Karen Mannheim</span>, Architectural Lighting Designer
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
