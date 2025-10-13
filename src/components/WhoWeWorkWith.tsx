import architectureImg from "@/assets/vertical-architecture.jpg";
import hospitalityImg from "@/assets/vertical-hospitality.jpg";
import athletesImg from "@/assets/vertical-athletes.jpg";

const verticals = [
  {
    title: "Construction, Architecture, Design & Materials",
    headline: "You build spaces that shape how people live.",
    description: "You've spent years perfecting your craft — understanding materials, timelines, and the details that turn vision into structure. Now you're ready to show the world who's behind the work.\n\nWhether you're positioning for international expansion, attracting larger projects, or inspiring the next generation of builders — your story needs to match the caliber of what you create.",
    closing: "We help you articulate it.",
    image: architectureImg,
    redAccent: "left"
  },
  {
    title: "Hospitality & Healthcare Leaders",
    headline: "You've mastered the art of crafting experiences that improve lives.",
    description: "Whether it's a guest who feels truly cared for or a patient who receives better outcomes — you know what excellence looks like in practice.\n\nNow it's time to turn that expertise into a story that builds brand equity, attracts the right partners, and makes people want to be part of what you're building.",
    closing: "We help you identify and articulate it.",
    image: hospitalityImg,
    redAccent: "bottom"
  },
  {
    title: "Professional Athletes & Sports Executives",
    headline: "You pursued your dream and made it real.",
    description: "That's why people admire you. You know what it takes to perform under pressure, build teams, and create legacy.\n\nBut athletic careers are finite. Building your personal brand now helps you diversify your portfolio, attract the right opportunities, and extend your influence long after you leave the field.",
    closing: "We help you build that foundation.",
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
                  <h3 className="font-display text-2xl font-bold tracking-tight-1 mb-4">
                    {vertical.title}
                  </h3>
                  <p className="text-xl font-semibold leading-relaxed mb-3">
                    {vertical.headline}
                  </p>
                  <p className="text-lg leading-[1.7] opacity-80 whitespace-pre-line mb-4">
                    {vertical.description}
                  </p>
                  <p className="text-lg font-semibold text-signal-red">
                    {vertical.closing}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="max-w-[650px] mx-auto text-center slow-reveal" style={{ animationDelay: '0.9s' }}>
            <div className="space-y-1 mb-6">
              <p className="text-xl font-medium">Different industries.</p>
              <p className="text-xl font-medium">Different expertise.</p>
              <p className="text-xl font-medium"><span className="text-signal-red">Same challenge:</span></p>
            </div>
            
            <p className="text-2xl font-semibold leading-relaxed mb-8">
              Making others understand what you've built — and why it matters.
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
