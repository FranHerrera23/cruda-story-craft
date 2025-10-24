import { Link } from "react-router-dom";
import karenPhoto from "@/assets/karen-mannheim-new.jpg";
import mikePhoto from "@/assets/mike-kaeding.webp";
import juanPhoto from "@/assets/juan-pablo-romero.jpeg";
import hospitalityPhoto from "@/assets/hospitality-manager.jpg";
import retailPhoto from "@/assets/retail-ceo.jpg";
import marlyPhoto from "@/assets/marly-hurtado.jpeg";

const clients = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer",
    location: "High-End Residential & Retail | Peru & USA",
    photo: karenPhoto,
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
    photo: mikePhoto,
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
    slug: "juan-pablo-romero",
    name: "Juan Pablo Romero",
    title: "Luxury Hospitality GM",
    location: "UAE",
    photo: juanPhoto,
    fullTitle: "General Manager | Luxury Hospitality",
    bio: [
      "Two decades building world-class guest experiences at luxury properties across the Middle East. Now applying those principles to transform hospitality operations."
    ],
    whatBuilding: "Elevating luxury hospitality standards and guest experience design.",
    achievements: [
      "Led operations for 5-star properties in Dubai and Abu Dhabi",
      "Pioneered service excellence programs",
      "Speaking at conferences on hospitality innovation"
    ]
  },
  {
    slug: "luxury-hospitality-gm-2",
    name: "Luxury Hospitality General Manager",
    title: "General Manager",
    location: "Dubai",
    photo: hospitalityPhoto,
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
    slug: "retail-ceo-founder",
    name: "Retail CEO & Founder",
    title: "CEO & Founder",
    location: "Dubai",
    photo: retailPhoto,
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
  },
  {
    slug: "marly-hurtado",
    name: "Marly Hurtado",
    title: "Professional Athlete",
    location: "USA",
    photo: marlyPhoto,
    fullTitle: "Professional Athlete",
    bio: [
      "Professional athlete building a brand that extends beyond the field. Focused on creating lasting impact through sports and community engagement."
    ],
    whatBuilding: "Developing a personal brand and community programs that outlast athletic career.",
    achievements: [
      "Competed at professional level",
      "Building community engagement programs",
      "Developing athlete brand strategy"
    ]
  }
];

const ProofOfWork = () => {
  return (
    <>
      {/* Large Card Carousel */}
      <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] md:text-[44px] font-bold leading-[1.2] mb-2" style={{ color: '#3D3835' }}>
              Who trusts us with their story and reputation
            </h2>
            {/* Red underline accent */}
            <div className="h-[2px] w-[80px] mx-auto" style={{ backgroundColor: '#FF2E63' }} />
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
                    className="flex-shrink-0 overflow-hidden cursor-pointer snap-start group"
                    style={{
                      width: '380px',
                      minWidth: '380px',
                      aspectRatio: '3/4',
                      backgroundColor: '#FDFBF7',
                      borderRadius: '16px',
                      boxShadow: '0 4px 16px rgba(61,56,53,0.12)',
                      opacity: 0,
                      transform: 'translateX(40px)',
                      animation: `fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.15 * index}s forwards`,
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(245, 184, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(61,56,53,0.12)';
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
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF2E63'}
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
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF2E63'}
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
