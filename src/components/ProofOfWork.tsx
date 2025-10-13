import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  {
    name: "Mike Kaeding",
    title: "CEO of Norhart Inc. | Residential Construction | Minneapolis, USA",
    bio: "Founder of a $200M construction company redefining how America builds. Led the development of a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop"
  },
  {
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer | High-End Residential & Retail | Peru · USA · Spain",
    bio: "Designs for Porsche, Maserati, and Four Seasons penthouses. A trusted collaborator for top-tier architects, developers, and interior designers in Latin America, Miami, and Madrid.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop"
  },
  {
    name: "Luxury Hospitality GM",
    title: "GM, Luxury Hospitality & Healthcare | UAE",
    bio: "Former Four Seasons (Chicago, Toronto, Bahamas), JW Marriott, and Taj Hotels (India) executive. Achieved #1 ranking in Condé Nast Traveler. Now leading guest experience at one of the most prestigious hospitals in the Middle East. Known for merging operational excellence with a whole-self style of leadership.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
  },
  {
    name: "Fashion Holding CEO",
    title: "Retail & E-commerce Founder | Dubai",
    bio: "Building one of the fastest-scaling fashion holding groups in the world. $200M+ in annual sales, creating a new on-demand supply chain model shaping the future of fashion.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop"
  },
  {
    name: "Alex Dmitriev",
    title: "Finance Executive | M&A, Private Equity, Corporate Strategy | Global",
    bio: "Former McKinsey and BCG consultant. Advises Fortune 500s and high-growth companies on capital strategy, acquisitions, and scaling.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop"
  },
  {
    name: "Marly Hurtado",
    title: "Psychologist & Executive Coach | Leadership Development | USA · LATAM",
    bio: "Former Chevron executive coach, now coaching leaders across industries. Her work blends corporate experience with deep emotional intelligence.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop"
  },
  {
    name: "Mariano Aguilar",
    title: "Architect & Founder, Milvers | Architecture, BIM & Revit | Argentina · USA",
    bio: "Leads a cross-border architecture studio working on residential and commercial projects across Buenos Aires, Utah, and Arizona. Known for integrating BIM into scalable design systems.",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&h=120&fit=crop"
  }
];

const ProofOfWork = () => {
  const [activeClient, setActiveClient] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClientClick = (index: number) => {
    if (index === activeClient || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveClient(index);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 300);
  };

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

      {/* Part 2: Interactive Client Carousel */}
      <section className="py-20 md:py-30 px-6 md:px-20 bg-bone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-center text-charcoal leading-[1.2] mb-12 md:mb-16">
            Who we're building with
          </h2>
          
          {/* Photo Carousel */}
          <div className="relative">
            <div className="overflow-x-auto pb-5 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
              <div className="flex gap-6 md:gap-8 justify-start md:justify-center items-start min-w-max md:min-w-0 mx-auto">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    onClick={() => handleClientClick(index)}
                    className="flex flex-col items-center cursor-pointer transition-all duration-300"
                  >
                    <div
                      className={`
                        w-[100px] h-[100px] md:w-[120px] md:h-[120px] 
                        rounded-full overflow-hidden 
                        border-[3px] transition-all duration-300
                        ${activeClient === index 
                          ? 'border-signal-red opacity-100 scale-105 shadow-[0_4px_12px_rgba(255,46,99,0.2)]' 
                          : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                        }
                      `}
                      style={{
                        filter: 'grayscale(100%)'
                      }}
                    >
                      <img 
                        src={client.photo} 
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p 
                      className={`
                        mt-3 text-[13px] md:text-[14px] text-center 
                        max-w-[100px] md:max-w-[120px] leading-[1.3]
                        transition-all duration-300
                        ${activeClient === index 
                          ? 'text-signal-red font-bold' 
                          : 'text-charcoal/70 font-medium'
                        }
                      `}
                    >
                      {client.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <button
              onClick={() => handleClientClick(Math.max(0, activeClient - 1))}
              disabled={activeClient === 0}
              className="hidden md:flex absolute left-5 top-[50px] -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-charcoal/80 hover:bg-charcoal hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10"
              aria-label="Previous client"
            >
              <ChevronLeft className="w-6 h-6 text-signal-red" />
            </button>
            
            <button
              onClick={() => handleClientClick(Math.min(clients.length - 1, activeClient + 1))}
              disabled={activeClient === clients.length - 1}
              className="hidden md:flex absolute right-5 top-[50px] -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-charcoal/80 hover:bg-charcoal hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10"
              aria-label="Next client"
            >
              <ChevronRight className="w-6 h-6 text-signal-red" />
            </button>
          </div>

          {/* Bio Section */}
          <div className="max-w-[800px] mx-auto mt-10 md:mt-12 min-h-[250px] md:min-h-[300px] px-6 md:px-20">
            <div 
              className={`
                transition-all duration-300 ease-out
                ${isTransitioning 
                  ? 'opacity-0 -translate-y-2' 
                  : 'opacity-100 translate-y-0'
                }
              `}
            >
              <h3 className="text-[24px] md:text-[28px] font-bold text-charcoal leading-[1.2] mb-3">
                {clients[activeClient].name}
              </h3>
              
              <p className="text-[17px] md:text-[18px] text-charcoal leading-[1.4] mb-4">
                {clients[activeClient].title}
              </p>
              
              <p className="text-[16px] md:text-[18px] text-charcoal/80 leading-[1.6]">
                {clients[activeClient].bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProofOfWork;
