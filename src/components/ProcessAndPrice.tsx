import { useState } from "react";

const ProcessAndPrice = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-30 px-6 md:px-30 border-t" style={{ backgroundColor: 'hsl(48, 43%, 98%)', borderColor: 'hsl(21, 7%, 23%, 0.1)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-section font-semibold mb-8 tracking-tight-2 text-center" style={{ color: 'hsl(21, 7%, 23%)' }}>
            Our First Engagement
          </h2>
        </div>

        <div className="border border-signal-red/20 p-12 md:p-16 mb-12" style={{ backgroundColor: 'hsl(21, 7%, 23%, 0.03)' }}>
          <div className="space-y-10">
            <div className="text-center space-y-6">
              <p className="font-display text-5xl md:text-6xl font-bold">
                <span className="text-signal-red">4 months</span>
                <span className="mx-4" style={{ color: 'hsl(21, 7%, 23%, 0.3)' }}>|</span>
                <span className="text-signal-red">$6,000</span>
              </p>
            </div>

            <div className="border-t pt-10 space-y-6 text-center max-w-2xl mx-auto" style={{ borderColor: 'hsl(21, 7%, 23%, 0.1)' }}>
              <p className="text-xl md:text-2xl font-medium leading-[1.4]" style={{ color: 'hsl(21, 7%, 23%)' }}>
                We build your narrative foundation.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: 'hsl(21, 7%, 23%, 0.85)' }}>
                The positioning, story, and systems that everything else builds on.
              </p>

              <p className="text-lg leading-relaxed pt-4" style={{ color: 'hsl(21, 7%, 23%, 0.7)' }}>
                This is for founders who are ready to invest in clarity, not just visibility.
              </p>
            </div>

            <div className="text-center pt-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-foreground underline decoration-signal-red/50 hover:decoration-signal-red transition-all duration-300 tracking-wide"
              >
                {showDetails ? "Hide details" : "What's inside this first phase?"}
              </button>
            </div>

            {showDetails && (
              <div className="border-t border-charcoal/10 pt-8 space-y-4 max-w-md mx-auto slow-fade-in">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-signal-red font-bold text-lg mt-0.5">▪</span>
                    <span className="leading-relaxed">Deep founder interviews to uncover your core narrative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-signal-red font-bold text-lg mt-0.5">▪</span>
                    <span className="leading-relaxed">Narrative strategy and story architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-signal-red font-bold text-lg mt-0.5">▪</span>
                    <span className="leading-relaxed">Positioning framework that lasts beyond campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-signal-red font-bold text-lg mt-0.5">▪</span>
                    <span className="leading-relaxed">Visibility roadmap tailored to your voice</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center bg-signal-red font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-signal-red hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
            style={{ color: 'hsl(21, 7%, 23%)' }}
          >
            Let's talk about your story →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndPrice;
