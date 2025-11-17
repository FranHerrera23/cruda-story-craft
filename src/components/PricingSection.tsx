import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={elementRef} className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <h2 
          className="text-[44px] md:text-[44px] font-bold text-center mb-20 transition-all duration-700" 
          style={{ 
            color: '#3D3835',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          How We Work Together
        </h2>
        
        {/* Opening Statement - Hero Paragraph */}
        <p 
          className="text-[20px] md:text-[24px] text-center mb-24 max-w-[800px] mx-auto" 
          style={{ 
            color: '#3D3835',
            lineHeight: '1.8'
          }}
        >
          We work with <span style={{ color: '#FF2E63', fontWeight: 700 }}>one new client per month</span> because the work we do—finding the story beneath the expertise, shaping it into something people feel—can't be rushed.
        </p>

        {/* Philosophy Statement */}
        <p 
          className="text-[22px] md:text-[28px] text-center mb-32 max-w-[900px] mx-auto" 
          style={{ 
            color: '#3D3835',
            lineHeight: '1.6'
          }}
        >
          It requires <span style={{ color: '#FF2E63', fontWeight: 700 }}>presence, not productivity. Focus, not volume.</span>
        </p>

        {/* Pricing Card - White on Cream */}
        <div 
          className="max-w-[700px] mx-auto mb-24 p-10 md:p-20 transition-all duration-700"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(61, 56, 53, 0.12)',
            border: '1px solid rgba(61, 56, 53, 0.08)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transitionDelay: '200ms'
          }}
        >
          {/* Label */}
          <p 
            className="text-[12px] uppercase tracking-[2px] text-center mb-8"
            style={{ color: 'rgba(61, 56, 53, 0.5)' }}
          >
            FOUNDATIONAL PHASE
          </p>
          
          {/* Main Pricing */}
          <h3 
            className="text-[36px] md:text-[48px] font-bold text-center mb-4"
            style={{ color: '#3D3835' }}
          >
            $1,800 monthly
          </h3>
          
          {/* Total Amount */}
          <p 
            className="text-[18px] text-center mb-16"
            style={{ color: 'rgba(61, 56, 53, 0.7)' }}
          >
            $7,200 total (4-month minimum commitment)
          </p>
          
          {/* Visual Divider */}
          <div 
            className="my-16"
            style={{ 
              height: '1px', 
              backgroundColor: 'rgba(61, 56, 53, 0.1)' 
            }}
          />
          
          {/* What's Included */}
          <div className="text-left">
            <h4 
              className="text-[20px] font-semibold mb-8"
              style={{ color: '#3D3835' }}
            >
              What's Included:
            </h4>
            
            <ul className="space-y-6 mb-12">
              {[
                'Month 1: Discovery, research, and narrative building',
                'Months 2-4: 90 days of execution and activation',
                'LinkedIn & Instagram content takeover',
                'PR & communications strategy',
                'Written content review (decks, brochures, company materials)'
              ].map((item, index) => (
                <li 
                  key={index}
                  className="text-[17px] flex items-start" 
                  style={{ 
                    color: 'rgba(61, 56, 53, 0.85)',
                    lineHeight: '2.0'
                  }}
                >
                  <span style={{ color: '#FF2E63', marginRight: '12px', fontWeight: 700 }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Footer Note */}
            <p 
              className="text-[15px] text-center italic mt-10"
              style={{ 
                color: 'rgba(61, 56, 53, 0.6)',
                lineHeight: '1.7'
              }}
            >
              Detailed deliverables and scope discussed during our initial conversation. Most founders continue into ongoing positioning work after the foundation is built.
            </p>
          </div>
        </div>

        {/* Availability Badge & CTA */}
        <div className="text-center mt-24">
          {/* December Badge */}
          <div 
            className="inline-block px-8 py-3 rounded-full mb-8"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              fontSize: '12px',
              letterSpacing: '1.5px',
              fontWeight: 600
            }}
          >
            DECEMBER
          </div>
          
          {/* Heading */}
          <h3 
            className="text-[28px] md:text-[36px] font-bold mb-6"
            style={{ color: '#3D3835' }}
          >
            December Waitlist Open
          </h3>
          
          {/* Body Copy */}
          <p 
            className="text-[18px] mb-10 max-w-[700px] mx-auto"
            style={{ 
              color: 'rgba(61, 56, 53, 0.85)',
              lineHeight: '1.8'
            }}
          >
            December has one spot open. If you've read this far and it resonates, that's worth a conversation. Reach out. We'll talk, and if it feels right, we'll move forward together.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/book-call"
            className="inline-block px-12 py-5 rounded-lg font-semibold text-[18px] mb-6 transition-all duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF'
            }}
          >
            Start a Conversation
          </Link>
          
          {/* Fine Print */}
          <p 
            className="text-[15px]"
            style={{ color: 'rgba(61, 56, 53, 0.6)' }}
          >
            Can't start in December? We'll hold your spot for early 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;