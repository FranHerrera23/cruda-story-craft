const pillars = [
  {
    number: "01",
    title: "Your Narrative",
    description: "A coherent story you can use everywhere —\nnot just to explain what you do,\nbut why it matters."
  },
  {
    number: "02",
    title: "Your Positioning",
    description: "The exact language that makes\ninvestors, clients, and your team\nget it in seconds."
  },
  {
    number: "03",
    title: "Your Voice",
    description: "Communication that sounds like you,\nnot like a PR team.\nScalable, but never generic."
  }
];

const WhatWeDo = () => {
  return (
    <section className="bg-bone text-charcoal py-[72px] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: 2-column grid, Mobile/Tablet: stacked */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Introduction */}
          <div className="space-y-[72px]">
            {/* Headline */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight-2 leading-[1.1] slow-fade-in mb-[72px]">
                We don't make content.
                <br />
                We build the system that makes people trust you.
              </h2>
              
              {/* Subhead */}
              <div className="slow-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl md:text-2xl font-medium leading-[1.7] mb-4">
                  Clarity across everything:
                </p>
                <p className="text-lg opacity-70 leading-[1.75]">
                  pitch decks, press interviews, client calls, hiring, LinkedIn, Instagram and beyond.
                  <br />
                  One clear thread.
                </p>
              </div>
            </div>

            {/* Closing Statement - Desktop only shows here */}
            <div className="hidden lg:block slow-reveal pt-[72px]" style={{ animationDelay: '0.9s' }}>
              <p className="text-xl leading-[1.75] font-medium mb-6">
                Behind every remarkable company is a story.
              </p>
              
              <p className="text-xl leading-[1.75] font-medium">
                Ours is helping you tell yours,<br />
                with clarity, authenticity, and resonance.
              </p>
            </div>
          </div>

          {/* Right Column: Three Pillars */}
          <div className="space-y-[48px] pt-0 lg:pt-[72px]">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="slow-reveal pb-[48px] border-b border-charcoal/10 last:border-b-0"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="mb-4">
                  <span className="text-signal-red text-sm font-semibold uppercase tracking-wide-5">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight-1 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-lg leading-[1.75] whitespace-pre-line opacity-80">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement - Mobile/Tablet version */}
        <div className="lg:hidden mt-[72px] slow-reveal" style={{ animationDelay: '0.9s' }}>
          <p className="text-xl leading-[1.75] font-medium mb-6">
            Behind every remarkable company is a story.
          </p>
          
          <p className="text-xl leading-[1.75] font-medium">
            Ours is helping you tell yours,<br />
            with clarity, authenticity, and resonance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
