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

        {/* Section 1: Payment Structure */}
        <div className="mb-10 md:mb-12">
          <div className="p-8 md:p-10 rounded-lg" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
            <h3 className="text-[24px] md:text-[28px] font-bold mb-4" style={{ color: '#3D3835' }}>
              70% at contract signing | 30% in month two
            </h3>
            <p className="text-[18px] leading-[1.6]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
              This structure lets us fully commit to your story without splitting focus.
            </p>
          </div>
        </div>

        {/* Section 2: Timeline */}
        <div className="mb-10 md:mb-12">
          <div className="p-8 md:p-10 rounded-lg" style={{ backgroundColor: '#FDFBF7', border: '2px solid #E8DED1' }}>
            <div className="space-y-4 mb-4">
              <p className="text-[18px] font-semibold" style={{ color: '#3D3835' }}>
                Month 1: Discovery + Strategy
              </p>
              <p className="text-[18px] font-semibold" style={{ color: '#3D3835' }}>
                Month 2: Creation + Refinement
              </p>
              <p className="text-[18px] font-semibold" style={{ color: '#3D3835' }}>
                Month 3: Delivery + Launch Support
              </p>
            </div>
            <p className="text-[18px] leading-[1.6] mt-6" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
              Most clients see results within 90 days. Some see them in 30.
            </p>
          </div>
        </div>

        {/* Section 3: Availability */}
        <div className="text-center">
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: '#F5B800' }}>
            <span className="text-[14px] font-bold uppercase tracking-wide" style={{ color: '#3D3835' }}>
              DECEMBER
            </span>
          </div>
          
          <h3 className="text-[28px] md:text-[32px] font-bold mb-4" style={{ color: '#3D3835' }}>
            December is Open
          </h3>
          
          <p className="text-[18px] mb-8 max-w-[600px] mx-auto" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            If you're looking to start in December, we should talk now. January is already committed.
          </p>
          
          <Link
            to="/book-call"
            className="inline-block px-10 py-4 rounded font-semibold text-[16px] transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#FF2E63', color: '#FDFBF7' }}
          >
            Start a Conversation
          </Link>
          
          <p className="text-[16px] mt-6" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
            Can't make December? Reach out anyway — we'll hold your spot for January.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;