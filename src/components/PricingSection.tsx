import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-16" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <h2 className="text-[32px] md:text-[36px] font-bold text-center mb-6" style={{ color: '#3D3835' }}>
          How We Work Together
        </h2>
        
        {/* Opening Statement */}
        <p className="text-[20px] md:text-[24px] text-center mb-12 md:mb-16 max-w-[900px] mx-auto" style={{ color: '#3D3835' }}>
          We only take one new client per month. This isn't artificial scarcity — it's how we deliver work that actually matters.
        </p>

        {/* Investment & Payment */}
        <div className="mb-12 md:mb-16">
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
              <li className="text-[18px] flex items-start" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                <span style={{ color: '#F5B800', marginRight: '12px' }}>→</span>
                Month 1: Discovery, research, and narrative building
              </li>
              <li className="text-[18px] flex items-start" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                <span style={{ color: '#F5B800', marginRight: '12px' }}>→</span>
                Months 2-4: 90 days of execution and activation
              </li>
              <li className="text-[18px] flex items-start" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                <span style={{ color: '#F5B800', marginRight: '12px' }}>→</span>
                LinkedIn & Instagram content takeover
              </li>
              <li className="text-[18px] flex items-start" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                <span style={{ color: '#F5B800', marginRight: '12px' }}>→</span>
                PR & communications strategy
              </li>
              <li className="text-[18px] flex items-start" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                <span style={{ color: '#F5B800', marginRight: '12px' }}>→</span>
                Written content review (decks, brochures, company materials)
              </li>
            </ul>
            <p className="text-[16px] leading-[1.6]" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
              Detailed deliverables and scope discussed during our initial conversation. Most founders continue into ongoing positioning work after the foundation is built.
            </p>
          </div>
        </div>

        {/* Four-Month Timeline */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[28px] md:text-[32px] font-bold text-center mb-10" style={{ color: '#3D3835' }}>
            Four-Month Foundational Phase
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
              <p className="text-[14px] uppercase tracking-wide mb-2" style={{ color: '#F5B800', fontWeight: '600' }}>
                Month 1
              </p>
              <h4 className="text-[20px] font-bold" style={{ color: '#3D3835' }}>
                Discovery + Foundation
              </h4>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
              <p className="text-[14px] uppercase tracking-wide mb-2" style={{ color: '#F5B800', fontWeight: '600' }}>
                Month 2
              </p>
              <h4 className="text-[20px] font-bold" style={{ color: '#3D3835' }}>
                Strategic Positioning
              </h4>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
              <p className="text-[14px] uppercase tracking-wide mb-2" style={{ color: '#F5B800', fontWeight: '600' }}>
                Month 3
              </p>
              <h4 className="text-[20px] font-bold" style={{ color: '#3D3835' }}>
                Narrative Build
              </h4>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
              <p className="text-[14px] uppercase tracking-wide mb-2" style={{ color: '#F5B800', fontWeight: '600' }}>
                Month 4
              </p>
              <h4 className="text-[20px] font-bold" style={{ color: '#3D3835' }}>
                Delivery + Activation
              </h4>
            </div>
          </div>
          
          <p className="text-[16px] text-center mt-8" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
            This foundational phase sets up everything. Many clients continue into ongoing work after seeing the impact.
          </p>
        </div>

        {/* Availability */}
        <div className="text-center">
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: '#F5B800' }}>
            <span className="text-[14px] font-bold uppercase tracking-wide" style={{ color: '#3D3835' }}>
              DECEMBER
            </span>
          </div>
          
          <h3 className="text-[28px] md:text-[32px] font-bold mb-4" style={{ color: '#3D3835' }}>
            December Waitlist Open
          </h3>
          
          <p className="text-[18px] mb-8 max-w-[600px] mx-auto" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            December has one spot available. If you want it, reach out now. We'll add you to the waitlist and confirm your place.
          </p>
          
          <Link
            to="/book-call"
            className="inline-block px-10 py-4 rounded font-semibold text-[16px] transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#FF2E63', color: '#FDFBF7' }}
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