const pillars = [
  {
    number: "01",
    title: "Your Narrative",
    description: "A story that works everywhere: pitch decks, press interviews, client calls, LinkedIn. One clear thread."
  },
  {
    number: "02",
    title: "Your Positioning",
    description: "The exact words that make investors, clients, and your team understand what makes you different."
  },
  {
    number: "03",
    title: "Your Voice",
    description: "Communication that sounds like you — not a marketing team. Scalable, but never generic."
  }
];

const WhatWeDo = () => {
  return (
    <section className="overflow-hidden">
      {/* Top Section - Charcoal Background */}
      <div className="bg-charcoal text-bone py-30 px-6 md:px-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-15 tracking-tight-2 leading-[1.1] slow-fade-in">
            We don't make content.
            <br />
            We build the system that makes people trust you.
          </h2>
          
          <p className="text-lg opacity-70 leading-relaxed slow-fade-in" style={{ animationDelay: '0.2s' }}>
            Most founders can execute brilliantly — but explaining <em>why</em> it matters? That's the hard part.
          </p>
        </div>
      </div>

      {/* Bottom Section - Bone Background */}
      <div className="bg-bone text-charcoal py-30 px-6 md:px-30">
        <div className="max-w-4xl mx-auto">
          {/* Three Pillars */}
          <div className="space-y-20 mb-30">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="slow-reveal"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="mb-4">
                  <span className="text-signal-red text-sm font-semibold uppercase tracking-wide-5">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 tracking-tight-1">
                  {pillar.title}
                </h3>
                <p className="text-lg leading-relaxed text-charcoal/90">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="max-w-3xl space-y-6 slow-reveal" style={{ animationDelay: '0.9s' }}>
            <p className="text-xl leading-relaxed font-medium">
              We work with founders who are exceptional at what they do — but haven't cracked how to talk about it.
            </p>
            
            <p className="text-xl leading-relaxed font-medium">
              We turn what you've built into words people <span className="hand-drawn-line">remember</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
