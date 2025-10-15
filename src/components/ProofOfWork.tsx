import { Link } from "react-router-dom";

const clients = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer",
    location: "High-End Residential & Retail | Peru & USA",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
    fullTitle: "Architectural Lighting Designer | High-End Residential & Retail",
    bio: [
      "Karen Mannheim has spent 15 years mastering the intersection of light, space, and human experience. Based between Lima and Miami, she's become the go-to designer for architects and developers who understand that lighting isn't decoration—it's the difference between a space that works and one that transforms.",
      "Her projects span luxury residential developments in Peru, high-end retail spaces across Latin America, and boutique hospitality projects in the United States. But Karen's real expertise isn't just technical specification—it's understanding how light shapes emotion, behavior, and perceived value.",
      "She started her career working with international architecture firms, learning that most lighting design happens as an afterthought. Spaces were beautiful on paper but fell flat in reality because the lighting didn't support the architecture's intent. Karen built her practice around changing that—becoming a strategic partner from concept through completion.",
      "Her approach combines rigorous technical knowledge with an artist's eye. She can talk lumens and color temperature with engineers, then translate that into emotional impact for clients. That duality—technical precision meets sensory intuition—is why architects trust her with her most ambitious projects.",
      "But as her reputation grew, Karen faced the same challenge many technical experts encounter: her work spoke for itself in person, but translating that expertise into positioning was harder. Potential clients saw \"lighting designer\" and thought decorative consultant, not strategic partner. International projects required a narrative that conveyed authority beyond regional boundaries.",
      "CRUDA worked with Karen to build a positioning system that reflects the strategic value she brings. Not \"lighting designer,\" but \"architectural storyteller who uses light as the primary medium.\" Not project descriptions, but case studies showing how her work increased property values, enhanced brand perception, and created memorable experiences."
    ],
    whatBuilding: "Karen is expanding her practice into hospitality and healthcare—spaces where lighting directly impacts human wellbeing and business performance. She's also developing a framework to help architects integrate lighting strategy earlier in the design process, preventing costly retrofits.",
    achievements: [
      "Led lighting design for $50M+ residential development in Lima, Peru",
      "Created signature lighting experience for luxury retail brand across 12 locations",
      "Featured in Architectural Digest for innovative use of natural light integration",
      "Developed proprietary lighting assessment framework used by architecture firms",
      "Speaking at major design conferences on the business impact of strategic lighting"
    ],
    quote: "CRUDA helped me stop explaining what I do and start showing why it matters. My work hasn't changed—but the clients I'm attracting have. I'm now in conversations with developers and architects who understand that lighting is strategic, not cosmetic."
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO of Norhart Inc.",
    location: "Residential Construction | Minneapolis, USA",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
    fullTitle: "CEO of Norhart Inc. | Residential Construction",
    bio: [
      "Founder of a $200M construction company redefining how America builds. Led the development of a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures."
    ],
    whatBuilding: "Building scalable construction models that reduce costs and timelines.",
    achievements: [
      "Built $200M construction company",
      "Led $100M residential development"
    ]
  },
  {
    slug: "luxury-hospitality-gm",
    name: "Luxury Hospitality GM",
    title: "GM, Luxury Hospitality & Healthcare",
    location: "UAE",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    fullTitle: "General Manager | Luxury Hospitality & Healthcare",
    bio: [
      "Two decades building world-class guest experiences at Four Seasons properties across the Middle East. Now applying those principles to transform patient care in healthcare facilities."
    ],
    whatBuilding: "Bridging luxury hospitality standards with healthcare operations to elevate patient experience.",
    achievements: [
      "Led operations for 5-star properties in Dubai and Abu Dhabi",
      "Transitioned to healthcare leadership roles",
      "Speaking at conferences on service excellence"
    ]
  },
  {
    slug: "fashion-retail-ceo",
    name: "Fashion Retail CEO",
    title: "Retail & E-commerce Founder",
    location: "Dubai",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    fullTitle: "Founder & CEO | Fashion Retail & E-commerce",
    bio: [
      "Built a fashion retail empire spanning physical stores and e-commerce platforms across the Middle East. Pioneering the integration of traditional retail with digital commerce in emerging markets."
    ],
    whatBuilding: "Expanding omnichannel retail experiences that blend physical and digital commerce.",
    achievements: [
      "Launched 15+ retail locations across UAE",
      "Built e-commerce platform serving 3 countries",
      "Featured in retail innovation conferences"
    ]
  }
];

const ProofOfWork = () => {
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
            <div 
              id="client-carousel"
              className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              <div className="flex gap-6 md:gap-8 items-start">
                {clients.map((client, index) => (
                  <Link
                    key={index}
                    to={`/clients/${client.slug}`}
                    className="flex-shrink-0 overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer snap-start"
                    style={{
                      width: '380px',
                      minWidth: '380px',
                      aspectRatio: '3/4',
                      backgroundColor: '#FDFBF7',
                      borderRadius: '16px',
                      boxShadow: '0 4px 16px rgba(61,56,53,0.12)'
                    }}
                  >
                    {/* Image - 70% height */}
                    <div className="relative overflow-hidden" style={{ height: '70%' }}>
                      <img
                        src={client.photo}
                        alt={client.name}
                        className="w-full h-full object-cover transition-all duration-300"
                        style={{ 
                          filter: 'grayscale(15%)',
                          objectPosition: 'center'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                        onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(15%)'}
                      />
                    </div>

                    {/* Text Overlay - 30% height */}
                    <div className="flex flex-col justify-center px-6" style={{ 
                      height: '30%',
                      backgroundColor: '#FDFBF7'
                    }}>
                      <h3 className="font-semibold mb-1" style={{ 
                        fontSize: '22px',
                        color: '#3D3835',
                        lineHeight: '1.3'
                      }}>
                        {client.name}
                      </h3>
                      <p className="mb-1" style={{ 
                        fontSize: '15px',
                        color: 'rgba(61, 56, 53, 0.85)',
                        lineHeight: '1.4'
                      }}>
                        {client.title}
                      </p>
                      <p style={{ 
                        fontSize: '13px',
                        color: 'rgba(61, 56, 53, 0.6)',
                        lineHeight: '1.4'
                      }}>
                        {client.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const carousel = document.getElementById('client-carousel');
                if (carousel) carousel.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#3D3835', color: '#FDFBF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5B800'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D3835'}
            >
              ←
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('client-carousel');
                if (carousel) carousel.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#3D3835', color: '#FDFBF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5B800'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D3835'}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProofOfWork;
