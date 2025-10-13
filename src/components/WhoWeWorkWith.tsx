import architectureImg from "@/assets/vertical-architecture.jpg";
import hospitalityImg from "@/assets/vertical-hospitality.jpg";
import athletesImg from "@/assets/vertical-athletes.jpg";

const verticals = [
  {
    title: "Developers, Architects, Designers & Building Materials",
    description: "You shape cities. You see structures where others see empty lots. You understand materials, timelines, and impact — but when it's time to explain your vision to investors or the press, the words don't land the way the work does.",
    image: architectureImg,
    redAccent: "left"
  },
  {
    title: "Hospitality & Healthcare Leaders",
    description: "You shape care. You've built systems that improve lives — whether it's a guest experience or patient outcomes. But translating operational excellence into a story people remember? That's a different skill.",
    image: hospitalityImg,
    redAccent: "bottom"
  },
  {
    title: "Professional Athletes & Managers",
    description: "You shape belief. You know what it takes to perform under pressure, build teams, and create legacy. But when the camera's on or the investor's listening, finding the words that match your track record feels impossible.",
    image: athletesImg,
    redAccent: "middle"
  }
];

const WhoWeWorkWith = () => {
  return (
    <section className="overflow-hidden">
      {/* Top Section - Charcoal Background */}
      <div className="bg-charcoal text-bone pt-[100px] pb-20 px-6 md:px-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[48px] font-semibold tracking-tight leading-[1.2] slow-fade-in mb-8 max-w-[750px]">
            If explaining your work feels harder than doing it — you're not alone.
          </h2>
          
          <p className="text-[20px] opacity-70 leading-[1.6] slow-fade-in max-w-[650px]" style={{ animationDelay: '0.2s' }}>
            We work with builders who've mastered their craft but need help translating it into words that land.
          </p>
        </div>
      </div>

      {/* Bottom Section - Bone Background */}
      <div className="bg-bone text-charcoal pt-20 pb-30 px-6 md:px-30">
        <div className="max-w-4xl mx-auto">
          {/* Three Verticals */}
          <div className="space-y-[100px]">
            {verticals.map((vertical, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-[40%_60%] gap-20 items-center slow-reveal"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={vertical.image} 
                    alt={vertical.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ 
                      filter: 'grayscale(100%) contrast(1.2)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  {/* Red accent borders */}
                  {vertical.redAccent === "left" && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-signal-red"></div>
                  )}
                  {vertical.redAccent === "bottom" && (
                    <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-signal-red"></div>
                  )}
                  {vertical.redAccent === "middle" && (
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-signal-red"></div>
                  )}
                </div>

                {/* Text */}
                <div>
                  <div className="h-px w-12 bg-signal-red mb-4"></div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight-1 mb-3">
                    {vertical.title}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {vertical.description}
                  </p>
                </div>
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
