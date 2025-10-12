import { useState } from "react";

const ProcessAndPrice = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-30 px-6 md:px-30 bg-background border-t border-charcoal/10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-section font-semibold mb-8 tracking-tight-2 text-center">
            Our First Phase
          </h2>

          <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto leading-relaxed">
            We don't offer packages.
            <br />
            We offer <span className="font-display font-semibold">presence</span>.
          </p>
        </div>

        <div className="bg-charcoal/5 border border-signal-red/20 p-12 md:p-16 mb-12">
          <div className="space-y-10">
            <p className="text-lg leading-relaxed text-center max-w-xl mx-auto">
              Our first engagement is 4 months.
              <br />
              We go deep. We ask hard questions. We build something true.
            </p>

            <div className="border-t border-charcoal/10 pt-10 space-y-6 text-center">
              <p className="font-display text-6xl md:text-7xl font-bold text-signal-red">
                $6,000
              </p>

              <p className="font-display text-2xl font-medium italic">
                Good work isn't cheap. Cheap work isn't good.
              </p>

              <p className="text-muted-foreground italic">
                This isn't content. It's your foundation.
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

        <div className="space-y-6 text-center max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            If that feels like too much, we're probably not aligned.
          </p>

          <p className="font-display text-2xl font-medium">
            If it feels like clarity — let's talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndPrice;
