import { useState } from "react";

const ProcessAndPrice = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-30 px-6 md:px-30 border-t" style={{ backgroundColor: 'hsl(48, 43%, 98%)', borderColor: 'hsl(21, 7%, 23%, 0.1)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-section font-semibold mb-6 tracking-tight-2 text-center" style={{ color: 'hsl(21, 7%, 23%)' }}>
            How We Work Together
          </h2>
          <p className="text-xl text-center max-w-2xl mx-auto" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            We only take one new client per month. This isn't artificial scarcity—it's how we deliver work that actually matters.
          </p>
        </div>

        <div className="border p-12 md:p-16 mb-12" style={{ 
          backgroundColor: '#F5F1E8',
          borderColor: 'rgba(61, 56, 53, 0.15)'
        }}>
          <div className="space-y-10">
            <div className="text-center space-y-6">
              <p className="font-display text-5xl md:text-6xl font-bold">
                <span className="text-signal-red">4 months</span>
                <span className="mx-4" style={{ color: 'rgba(61, 56, 53, 0.3)' }}>|</span>
                <span className="text-signal-red">$6,000</span>
              </p>
              
              <div className="border-t pt-8 max-w-md mx-auto" style={{ borderColor: 'rgba(61, 56, 53, 0.15)' }}>
                <p className="text-xl font-semibold text-center mb-4" style={{ color: '#3D3835' }}>
                  70% at contract signing | 30% in month two
                </p>
                <p className="text-center" style={{ 
                  fontSize: '14px',
                  color: 'rgba(61, 56, 53, 0.7)'
                }}>
                  This structure lets us fully commit to your story without splitting focus.
                </p>
              </div>
            </div>

            <div className="border-t pt-10 space-y-6 max-w-2xl mx-auto" style={{ borderColor: 'rgba(61, 56, 53, 0.1)' }}>
              <h3 className="font-display text-2xl font-semibold text-center" style={{ color: '#3D3835' }}>
                Timeline
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-signal-red font-bold">▪</span>
                  <span style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                    <strong>Month 1:</strong> Discovery + Strategy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-signal-red font-bold">▪</span>
                  <span style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                    <strong>Month 2:</strong> Creation + Refinement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-signal-red font-bold">▪</span>
                  <span style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                    <strong>Month 3:</strong> Delivery + Launch Support
                  </span>
                </li>
              </ul>
              <p className="text-center italic pt-4" style={{ color: 'rgba(61, 56, 53, 0.8)' }}>
                "Most clients see results within 90 days. Some see them in 30."
              </p>
            </div>
          </div>
        </div>

        {/* Availability CTA */}
        <div className="text-center p-12 rounded-lg border-2" style={{ backgroundColor: '#F5F1E8', borderColor: '#F5B800' }}>
          <div className="inline-block px-5 py-2 rounded-full mb-4" style={{ backgroundColor: '#F5B800', color: '#3D3835' }}>
            <span className="font-bold text-sm uppercase tracking-wide">DECEMBER</span>
          </div>
          <h3 className="font-display text-3xl font-bold mb-4" style={{ color: '#3D3835' }}>
            December is Open
          </h3>
          <p className="text-lg mb-6" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            If you're looking to start in December, we should talk now. January is already committed.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center bg-signal-red font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-signal-red hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
            style={{ color: '#FDFBF7' }}
          >
            Start a Conversation
          </a>
          <p className="mt-6 text-sm" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
            Can't make December? Reach out anyway — we'll hold your spot for January.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndPrice;
