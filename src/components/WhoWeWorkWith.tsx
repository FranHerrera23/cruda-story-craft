const verticals = [
  {
    title: "Developers, Architects, Designers & Building Materials",
    description: "You shape cities. You see structures where others see empty lots. You understand materials, timelines, and impact — but when it's time to explain your vision to investors or the press, the words don't land the way the work does."
  },
  {
    title: "Hospitality & Healthcare Leaders",
    description: "You shape care. You've built systems that improve lives — whether it's a guest experience or patient outcomes. But translating operational excellence into a story people remember? That's a different skill."
  },
  {
    title: "Professional Athletes & Managers",
    description: "You shape belief. You know what it takes to perform under pressure, build teams, and create legacy. But when the camera's on or the investor's listening, finding the words that match your track record feels impossible."
  }
];

const WhoWeWorkWith = () => {
  return (
    <section className="overflow-hidden">
      {/* Top Section - Charcoal Background */}
      <div className="bg-charcoal text-bone py-30 px-6 md:px-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight-2 leading-[1.1] slow-fade-in mb-6">
            If you've spent years building something that matters — but struggle to put it into words — you're not alone.
          </h2>
          
          <div className="space-y-2 slow-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg opacity-70 leading-relaxed">
              We work with three types of founders who face the same paradox:
            </p>
            <p className="text-lg opacity-85 leading-relaxed italic">
              The better you are at your craft, the harder it is to explain why it matters.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Bone Background */}
      <div className="bg-bone text-charcoal py-30 px-6 md:px-30">
        <div className="max-w-4xl mx-auto">
          {/* Three Verticals */}
          <div className="space-y-15 mb-25">
            {verticals.map((vertical, index) => (
              <div 
                key={index}
                className="slow-reveal"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="h-px w-12 bg-signal-red mb-4"></div>
                <h3 className="font-display text-2xl font-semibold tracking-tight-1 mb-3">
                  {vertical.title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="max-w-3xl slow-reveal" style={{ animationDelay: '0.9s' }}>
            <div className="space-y-1 mb-6">
              <p className="text-xl font-medium">Different industries.</p>
              <p className="text-xl font-medium">Different expertise.</p>
              <p className="text-xl font-medium text-signal-red">Same problem:</p>
            </div>
            
            <p className="text-2xl font-semibold leading-relaxed mb-8">
              You've mastered your craft. But communicating it clearly — to investors, press, clients, your own team — feels like starting from scratch.
            </p>
            
            <p className="text-2xl font-semibold mb-6">
              <span className="hand-drawn-line">That's where we come in.</span>
            </p>
            
            <p className="text-lg leading-relaxed">
              We don't teach you how to talk. We help you find the words that already exist in the work you've done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
