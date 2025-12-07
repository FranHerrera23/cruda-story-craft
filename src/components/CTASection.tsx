import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-28 md:py-36 px-6 md:px-16" 
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-[600px] mx-auto text-center">
        {/* Price */}
        <h2
          className="text-[56px] md:text-[72px] font-bold mb-4 transition-all duration-700"
          style={{
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)'
          }}
        >
          $7,200
        </h2>

        {/* Context */}
        <p
          className="text-[16px] md:text-[18px] mb-10 transition-all duration-700"
          style={{
            color: 'rgba(26, 26, 26, 0.6)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '100ms'
          }}
        >
          4 months · Founder-led · Everything included
        </p>

        {/* CTA Button */}
        <Link
          to="/book-call"
          className="inline-block px-12 py-5 rounded-lg font-semibold text-[18px] mb-6 transition-all duration-300"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Start a Conversation
        </Link>

        {/* Link to pricing */}
        <p
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: '300ms'
          }}
        >
          <Link
            to="/pricing"
            className="text-[15px] font-medium transition-colors duration-300"
            style={{ color: '#FF2E63' }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            See full details →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
