import { useState } from "react";

const ProcessAndPrice = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-32 px-6 bg-clay/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8 tracking-tighter font-serif">
          A Story, Told in Chapters
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Good stories aren't rushed. They unfold in chapters.
        </p>

        <div className="bg-background border border-aged-gold/20 p-12 md:p-16 mb-12 liquid-glow">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We begin with the one that matters most: 
              <span className="block text-foreground font-serif text-2xl mt-4">
                Who you are. And why people should care.
              </span>
            </p>

            <div className="border-t border-border pt-8 space-y-4">
              <p className="text-lg text-muted-foreground">
                That's our first chapter together — a 4-month engagement focused on clarity, narrative, and positioning.
              </p>
              
              <p className="text-5xl md:text-6xl font-serif text-aged-gold">
                $6,500
              </p>

              <p className="text-muted-foreground italic">
                It's not content. It's your foundation.
              </p>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-foreground underline decoration-aged-gold/50 hover:decoration-aged-gold transition-all duration-300"
            >
              {showDetails ? "Hide details" : "What's inside this first phase?"}
            </button>

            {showDetails && (
              <div className="border-t border-border pt-6 space-y-3 text-left max-w-md mx-auto slow-fade-in">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-3">▪</span>
                    <span>Deep founder interviews to uncover your core narrative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-3">▪</span>
                    <span>Narrative strategy and story architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-3">▪</span>
                    <span>Positioning framework that lasts beyond campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-3">▪</span>
                    <span>Visibility roadmap tailored to your voice</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            If it resonates, we'll move forward. If not, you'll still walk away with a strategy that lasts.
          </p>

          <p className="text-muted-foreground italic">
            We're not a fit for everyone. Our first chapter takes 4 months. It requires honesty, time, and presence.
          </p>

          <p className="text-foreground">
            If you're ready for that kind of partnership, we'd love to talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndPrice;
