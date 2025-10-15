import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const clients = [
  {
    name: "Mike Kaeding",
    title: "CEO of Norhart Inc. | Residential Construction | Minneapolis, USA",
    bio: "Founder of a $200M construction company redefining how America builds. Led the development of a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop"
  },
  {
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer | High-End Residential & Retail | Peru · USA · Spain",
    bio: "Designs for Porsche, Maserati, and Four Seasons penthouses. A trusted collaborator for top-tier architects, developers, and interior designers in Latin America, Miami, and Madrid.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop"
  },
  {
    name: "Luxury Hospitality GM",
    title: "GM, Luxury Hospitality & Healthcare | UAE",
    bio: "Former Four Seasons (Chicago, Toronto, Bahamas), JW Marriott, and Taj Hotels (India) executive. Achieved #1 ranking in Condé Nast Traveler. Now leading guest experience at one of the most prestigious hospitals in the Middle East. Known for merging operational excellence with a whole-self style of leadership.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
  },
  {
    name: "Fashion Holding CEO",
    title: "Retail & E-commerce Founder | Dubai",
    bio: "Building one of the fastest-scaling fashion holding groups in the world. $200M+ in annual sales, creating a new on-demand supply chain model shaping the future of fashion.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop"
  },
  {
    name: "Alex Dmitriev",
    title: "Finance Executive | M&A, Private Equity, Corporate Strategy | Global",
    bio: "Former McKinsey and BCG consultant. Advises Fortune 500s and high-growth companies on capital strategy, acquisitions, and scaling.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop"
  },
  {
    name: "Marly Hurtado",
    title: "Psychologist & Executive Coach | Leadership Development | USA · LATAM",
    bio: "Former Chevron executive coach, now coaching leaders across industries. Her work blends corporate experience with deep emotional intelligence.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
  },
  {
    name: "Mariano Aguilar",
    title: "Architect & Founder, Milvers | Architecture, BIM & Revit | Argentina · USA",
    bio: "Leads a cross-border architecture studio working on residential and commercial projects across Buenos Aires, Utah, and Arizona. Known for integrating BIM into scalable design systems.",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=800&fit=crop"
  }
];

const ProofOfWork = () => {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);
  const [activeClient, setActiveClient] = useState<number | null>(null);

  return (
    <>
      {/* Part 1: Background/Credibility Section */}
      <section className="py-20 md:py-30 px-6 md:px-30" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[42px] font-semibold leading-[1.2] tracking-[-0.01em] mb-8" style={{ color: '#3D3835' }}>
            Nearly a decade learning how builders think.
          </h2>
          
          <p className="text-[18px] md:text-[20px] leading-[1.65] max-w-[700px] mx-auto mb-6" style={{ color: '#3D3835' }}>
            Construction to hospitality to sports. Latin America to Middle East. We've helped founders position for expansion, secure larger projects, and articulate what makes their work exceptional.
          </p>
          
          <p className="text-[18px] md:text-[20px] font-semibold" style={{ color: '#3D3835' }}>
            CRUDA brings that into focus.
          </p>
        </div>
      </section>

      {/* Part 2: Large Card Carousel */}
      <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] mb-2" style={{ color: '#3D3835' }}>
              Who We're Building With
            </h2>
            {/* Yellow underline accent */}
            <div className="h-[2px] w-[80px] mx-auto" style={{ backgroundColor: '#F5B800' }} />
          </div>
          
          {/* Card Carousel */}
          <div className="relative">
            <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth">
              <div className="flex gap-6 md:gap-8 items-start min-w-max md:min-w-0">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer w-[280px] md:w-[300px] h-[380px] md:h-[400px] flex-shrink-0 overflow-hidden bg-charcoal/5"
                    style={{ scrollSnapAlign: 'center' }}
                    onMouseEnter={() => setHoveredClient(index)}
                    onMouseLeave={() => setHoveredClient(null)}
                    onClick={() => setActiveClient(activeClient === index ? null : index)}
                  >
                    {/* Photo */}
                    <div className="relative w-full h-[260px] md:h-[280px] overflow-hidden">
                      <img 
                        src={client.photo} 
                        alt={client.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          filter: 'grayscale(100%) contrast(1.1)',
                          objectPosition: 'center 20%'
                        }}
                      />
                    </div>
                    
                    {/* Info Section */}
                    <div className="p-5 md:p-6 bg-bone">
                      <h3 className="text-[18px] md:text-[20px] font-bold text-charcoal leading-[1.2] mb-2">
                        {client.name}
                      </h3>
                      <p className="text-[14px] text-charcoal/70 leading-[1.3] line-clamp-2">
                        {client.title}
                      </p>
                    </div>

                    {/* Hover/Active Bio Overlay */}
                    <div 
                      className={`
                        absolute inset-0 bg-charcoal/95 p-6 md:p-8 flex flex-col justify-between
                        transition-all duration-300 
                        ${(hoveredClient === index || activeClient === index)
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible'
                        }
                      `}
                    >
                      <div>
                        <h3 className="text-[20px] md:text-[22px] font-bold text-bone leading-[1.2] mb-3">
                          {client.name}
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-signal-red font-semibold leading-[1.3] mb-4">
                          {client.title}
                        </p>
                        <p className="text-[14px] md:text-[15px] text-bone/80 leading-[1.5] line-clamp-6">
                          {client.bio}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-signal-red text-[14px] font-semibold mt-4">
                        <span className="mr-2">View more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProofOfWork;
