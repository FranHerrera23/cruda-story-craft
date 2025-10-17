import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-16" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[36px] font-bold text-center mb-6" 
          style={{ 
            color: '#3D3835',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0s forwards'
          }}
        >
          How We Work Together
        </h2>
        
        {/* Opening Statement */}
        <p 
          className="text-[20px] md:text-[24px] text-center mb-12 md:mb-16 max-w-[900px] mx-auto" 
          style={{ 
            color: '#3D3835',
            opacity: 0,
            animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.3s forwards'
          }}
        >
          We work with <span style={{ color: '#F5B800', fontWeight: 600 }}>one new client per month</span> because the work we do—finding the story beneath the expertise, shaping it into something people feel—can't be rushed. It requires <span style={{ color: '#F5B800', fontWeight: 600 }}>presence, not productivity</span>. <span style={{ color: '#F5B800', fontWeight: 600 }}>Focus, not volume</span>.
        </p>

        {/* Investment & Payment */}
        <div 
          className="mb-12 md:mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.4s forwards'
          }}
        >
          <div className="text-center mb-8">
            <p className="text-[14px] uppercase tracking-wide mb-3" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
              FOUNDATIONAL PHASE
            </p>
            <h3 className="text-[36px] md:text-[48px] font-bold mb-2" style={{ color: '#3D3835' }}>
              $1,625/month
            </h3>
            <p className="text-[20px] mb-6" style={{ color: '#3D3835' }}>
              4-month commitment — $6,500 total
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-lg mb-8" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
            <h4 className="text-[22px] font-bold mb-4" style={{ color: '#3D3835' }}>
              What's Included:
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                'Month 1: Discovery, research, and narrative building',
                'Months 2-4: 90 days of execution and activation',
                'LinkedIn & Instagram content takeover',
                'PR & communications strategy',
                'Written content review (decks, brochures, company materials)'
              ].map((item, index) => (
                <li 
                  key={index}
                  className="text-[18px] flex items-start" 
                  style={{ 
                    color: 'rgba(61, 56, 53, 0.85)',
                    opacity: 0,
                    animation: `fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.6 + (0.2 * index)}s forwards`
                  }}
                >
                  <span style={{ color: '#F5B800', marginRight: '12px' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-[1.6]" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
              Detailed deliverables and scope discussed during our initial conversation. Most founders continue into ongoing positioning work after the foundation is built.
            </p>
          </div>
        </div>

        {/* Availability */}
        <div className="text-center">
          <div 
            className="inline-block px-6 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: '#F5B800',
              animation: 'gentlePulse 2s ease-in-out infinite'
            }}
          >
            <span className="text-[14px] font-bold uppercase tracking-wide" style={{ color: '#3D3835' }}>
              DECEMBER
            </span>
          </div>
          
          <h3 className="text-[28px] md:text-[32px] font-bold mb-4" style={{ color: '#3D3835' }}>
            December Waitlist Open
          </h3>
          
          <p className="text-[18px] mb-8 max-w-[600px] mx-auto" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            <strong>December has one spot open.</strong> If you've read this far and it resonates, that's worth a conversation. Reach out. We'll talk, and if it feels right, we'll move forward together.
          </p>
          
          <Link
            to="/book-call"
            className="inline-block px-10 py-4 rounded font-semibold text-[16px] transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#FF2E63', color: '#FDFBF7' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 184, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a Conversation
          </Link>
          
          <p className="text-[16px] mt-6" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
            Can't start in December? We'll hold your spot for early 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;