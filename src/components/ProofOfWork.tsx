import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const clients = [
  {
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer",
    location: "High-End Residential & Retail | Peru & USA",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
    fullTitle: "Architectural Lighting Designer | High-End Residential & Retail",
    bio: [
      "Karen Mannheim has spent 15 years mastering the intersection of light, space, and human experience. Based between Lima and Miami, she's become the go-to designer for architects and developers who understand that lighting isn't decoration—it's the difference between a space that works and one that transforms.",
      "Her projects span luxury residential developments in Peru, high-end retail spaces across Latin America, and boutique hospitality projects in the United States. But Karen's real expertise isn't just technical specification—it's understanding how light shapes emotion, behavior, and perceived value.",
      "She started her career working with international architecture firms, learning that most lighting design happens as an afterthought. Spaces were beautiful on paper but fell flat in reality because the lighting didn't support the architecture's intent. Karen built her practice around changing that—becoming a strategic partner from concept through completion.",
      "Her approach combines rigorous technical knowledge with an artist's eye. She can talk lumens and color temperature with engineers, then translate that into emotional impact for clients. That duality—technical precision meets sensory intuition—is why architects trust her with their most ambitious projects.",
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
  }
];

const ProofOfWork = () => {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

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
                    className="flex-shrink-0 overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                    style={{
                      width: '380px',
                      aspectRatio: '3/4',
                      backgroundColor: '#FDFBF7',
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(61,56,53,0.12)'
                    }}
                    onClick={() => setSelectedClient(client)}
                  >
                    {/* Image - 70% height */}
                    <div className="relative overflow-hidden" style={{ height: '70%' }}>
                      <img
                        src={client.photo}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        style={{ 
                          filter: 'grayscale(20%)',
                          objectPosition: 'center'
                        }}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Modal Subsection */}
      {selectedClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ 
            backgroundColor: 'rgba(61, 56, 53, 0.96)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setSelectedClient(null)}
        >
          <div
            className="relative w-full max-w-[1100px] max-h-[90vh] overflow-hidden"
            style={{ 
              backgroundColor: '#FDFBF7',
              borderRadius: '16px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:rotate-90"
              style={{ 
                backgroundColor: '#3D3835',
                color: '#FDFBF7'
              }}
            >
              <span className="text-xl">×</span>
            </button>

            <div className="grid md:grid-cols-[40%_60%] h-full max-h-[90vh]">
              {/* Left Side - Sticky Image */}
              <div className="relative h-[300px] md:h-auto overflow-hidden">
                <div className="sticky top-0 h-full" style={{ borderLeft: '2px solid #F5B800' }}>
                  <img
                    src={selectedClient.photo}
                    alt={selectedClient.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(20%)' }}
                  />
                </div>
              </div>

              {/* Right Side - Scrollable Content */}
              <div className="overflow-y-auto p-8 md:p-12" style={{ maxHeight: '90vh' }}>
                {/* Name & Title */}
                <h2 className="font-bold mb-2" style={{ 
                  fontSize: '36px',
                  color: '#3D3835',
                  lineHeight: '1.2'
                }}>
                  {selectedClient.name}
                </h2>
                <p className="mb-6" style={{ 
                  fontSize: '18px',
                  color: '#F5B800',
                  fontWeight: '500'
                }}>
                  {selectedClient.fullTitle}
                </p>

                {/* Divider */}
                <div className="h-[1px] w-full mb-8" style={{ backgroundColor: 'rgba(61, 56, 53, 0.15)' }} />

                {/* Full Bio */}
                <div className="space-y-4 mb-10">
                  {selectedClient.bio.map((paragraph, index) => (
                    <p key={index} style={{ 
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: 'rgba(61, 56, 53, 0.85)'
                    }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* What They're Building */}
                {selectedClient.whatBuilding && (
                  <>
                    <h3 className="font-semibold mb-4" style={{ 
                      fontSize: '20px',
                      color: '#3D3835'
                    }}>
                      What They're Building
                    </h3>
                    <p className="mb-8" style={{ 
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: 'rgba(61, 56, 53, 0.85)'
                    }}>
                      {selectedClient.whatBuilding}
                    </p>
                  </>
                )}

                {/* Notable Achievements */}
                {selectedClient.achievements && selectedClient.achievements.length > 0 && (
                  <>
                    <h3 className="font-semibold mb-4" style={{ 
                      fontSize: '20px',
                      color: '#3D3835'
                    }}>
                      Notable Achievements
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {selectedClient.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span style={{ color: '#F5B800', fontSize: '18px', marginTop: '2px' }}>→</span>
                          <span style={{ 
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: 'rgba(61, 56, 53, 0.85)'
                          }}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Pull Quote */}
                {selectedClient.quote && (
                  <div className="p-6" style={{ 
                    backgroundColor: '#F5F1E8',
                    borderLeft: '4px solid #F5B800',
                    fontStyle: 'italic'
                  }}>
                    <p style={{ 
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: 'rgba(61, 56, 53, 0.85)'
                    }}>
                      "{selectedClient.quote}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProofOfWork;
