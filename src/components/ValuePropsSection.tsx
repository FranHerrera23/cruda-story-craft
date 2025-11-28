import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const questions = [
  "What if your story already exists?",
  "What if clarity isn't created, but found?",
  "What if trust could travel without you?"
];

const ValuePropsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-24 md:py-32 px-6 md:px-16" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          {questions.map((question, index) => (
            <p
              key={index}
              className="text-[24px] md:text-[32px] font-normal leading-[1.4] transition-all duration-700"
              style={{
                color: '#1A1A1A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
              {question}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
