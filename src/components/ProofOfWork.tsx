const clients = [
  {
    emoji: "👷",
    name: "Mike Kaeding",
    title: "CEO of Norhart Inc. | Residential Construction | Minneapolis, USA",
    bio: "Founder of a $200M construction company redefining how America builds. Led the development of a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures."
  },
  {
    emoji: "💡",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer | High-End Residential & Retail | Peru · USA · Spain",
    bio: "Designs for Porsche, Maserati, and Four Seasons penthouses. A trusted collaborator for top-tier architects, developers, and interior designers in Latin America, Miami, and Madrid."
  },
  {
    emoji: "🏨",
    name: "Luxury Hospitality GM (Confidential)",
    title: "GM, Luxury Hospitality & Healthcare | UAE",
    bio: "Former Four Seasons (Chicago, Toronto, Bahamas), JW Marriott, and Taj Hotels (India) executive. Achieved #1 ranking in Condé Nast Traveler. Now leading guest experience at one of the most prestigious hospitals in the Middle East. Known for merging operational excellence with a whole-self style of leadership."
  },
  {
    emoji: "👔",
    name: "Fashion Holding CEO (Confidential)",
    title: "Retail & E-commerce Founder | Dubai",
    bio: "Building one of the fastest-scaling fashion holding groups in the world. $200M+ in annual sales, creating a new on-demand supply chain model shaping the future of fashion."
  },
  {
    emoji: "📊",
    name: "Alex Dmitriev",
    title: "Finance Executive | M&A, Private Equity, Corporate Strategy | Global",
    bio: "Former McKinsey and BCG consultant. Advises Fortune 500s and high-growth companies on capital strategy, acquisitions, and scaling."
  },
  {
    emoji: "🧠",
    name: "Marly Hurtado",
    title: "Psychologist & Executive Coach | Leadership Development | USA · LATAM",
    bio: "Former Chevron executive coach, now coaching leaders across industries. Her work blends corporate experience with deep emotional intelligence."
  },
  {
    emoji: "🏗",
    name: "Mariano Aguilar",
    title: "Architect & Founder, Milvers | Architecture, BIM & Revit | Argentina · USA",
    bio: "Leads a cross-border architecture studio working on residential and commercial projects across Buenos Aires, Utah, and Arizona. Known for integrating BIM into scalable design systems."
  }
];

const ProofOfWork = () => {
  return (
    <>
      {/* Part 1: Foundation */}
      <section className="py-20 md:py-30 px-6 md:px-30 bg-charcoal text-bone">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] mb-7 md:mb-8">
            We've spent 8 years learning how builders think, build, and communicate.
          </h2>
          
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-bone/75 max-w-[700px] mx-auto mb-5 md:mb-6">
            Across construction, architecture, design, and manufacturing — from Latin America to the Middle East — we've helped leaders position for international expansion, secure larger projects, and articulate what makes their work exceptional.
          </p>
          
          <p className="text-[18px] md:text-[20px] font-semibold text-signal-red">
            CRUDA brings that expertise into focus.
          </p>
        </div>
      </section>

      {/* Part 2: Client Roster */}
      <section className="py-20 md:py-30 px-6 md:px-30 bg-bone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-center text-charcoal leading-[1.2] mb-12 md:mb-[60px]">
            Who we're building with
          </h2>
          
          <div className="space-y-10 md:space-y-12">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group border-l-4 border-transparent hover:border-signal-red pl-6 transition-all duration-300"
              >
                <div className="text-[28px] md:text-[32px] mb-3 md:mb-4">
                  {client.emoji}
                </div>
                
                <h3 className="text-[24px] md:text-[28px] font-bold text-charcoal leading-[1.2] mb-2.5 md:mb-3">
                  {client.name}
                </h3>
                
                <p className="text-[16px] md:text-[18px] text-charcoal leading-[1.4] mb-3">
                  {client.title}
                </p>
                
                <p className="text-[16px] md:text-[18px] text-charcoal/80 leading-[1.6]">
                  {client.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProofOfWork;
