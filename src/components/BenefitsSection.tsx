import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "A website that educates your customers",
  "Social profiles that build connection and trust",
  "Pitch decks that tell your story in one slide",
  "Project descriptions that get forwarded",
  "The same answer every time someone asks 'what do you do?'"
];

const BenefitsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-24 md:py-32 px-6 md:px-16" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[700px] mx-auto">
        {/* Section Header */}
        <h2
          className="text-[32px] md:text-[40px] font-bold mb-12 md:mb-16 transition-all duration-700"
          style={{
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          What you walk away with
        </h2>

        {/* Benefits List */}
        <div className="flex flex-col gap-8">
          {benefits.map((benefit, index) => (
            <p
              key={index}
              className="text-[18px] leading-[1.5] transition-all duration-700"
              style={{
                color: '#1A1A1A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: `${100 + index * 80}ms`
              }}
            >
              <span style={{ color: '#FF2E63', marginRight: '16px' }}>→</span>
              {benefit}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
