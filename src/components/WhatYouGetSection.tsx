import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const deliverables = [
  "Your story in one sentence",
  "A LinkedIn that sounds like you, not a résumé",
  "Pitch decks that don't start from scratch",
  "Talking points for every room you walk into",
  "Content for 12 months"
];

const WhatYouGetSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-[100px] md:py-[140px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header Label */}
        <p
          className="text-[14px] font-semibold uppercase mb-10 transition-all duration-700"
          style={{
            letterSpacing: '0.1em',
            color: 'rgba(26, 26, 26, 0.4)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          What you walk away with
        </p>

        {/* Deliverables List */}
        <div className="flex flex-col gap-6 mb-12">
          {deliverables.map((item, index) => (
            <p
              key={index}
              className="text-[24px] md:text-[28px] font-medium leading-[1.4] transition-all duration-700"
              style={{
                color: '#1A1A1A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <span style={{ color: '#FF2E63', marginRight: '16px' }}>→</span>
              {item}
            </p>
          ))}
        </div>

        {/* Bottom Text */}
        <p
          className="text-[18px] transition-all duration-700"
          style={{
            color: 'rgba(26, 26, 26, 0.5)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          Everything documented. Ready to use. Built to last.
        </p>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
