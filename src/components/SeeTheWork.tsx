import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    slug: "norhart",
    clientName: "NORHART",
    projectHeadline: "From contractor to construction innovator",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop",
    metrics: [
      { label: "LinkedIn Reach", value: "250K+" },
      { label: "Partnership Inquiries", value: "50+" },
      { label: "Timeline", value: "30 days" }
    ],
    description: "Positioned Mike Kaeding's residential construction model as a blueprint for the future of American building.",
    challenge: "Norhart had revolutionary construction methods but struggled to communicate their innovation beyond technical circles.",
    solution: "We developed a narrative framework positioning their vertical integration model as the future of affordable housing in America.",
    results: "Generated 250K+ impressions across LinkedIn, resulting in 50+ strategic partnership inquiries and invitations to speak at industry conferences.",
    testimonial: "CRUDA helped us articulate what we've been building for years. The story they created opened doors we didn't know existed."
  },
  {
    id: 2,
    slug: "karen-mannheim",
    clientName: "KAREN MANNHEIM",
    projectHeadline: "Architectural lighting designer to brand authority",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    metrics: [
      { label: "Press Features", value: "3" },
      { label: "High-End Clients", value: "12+" },
      { label: "Revenue Growth", value: "40%" }
    ],
    description: "Elevated Karen's positioning from service provider to strategic design partner for luxury real estate.",
    challenge: "Despite working with Porsche, Maserati, and Four Seasons, Karen's brand didn't reflect the caliber of her client roster.",
    solution: "We repositioned her from 'lighting designer' to strategic collaborator for architects and developers building iconic spaces.",
    results: "Featured in Architectural Digest, secured 12 new high-end residential and retail projects, 40% revenue increase YoY.",
    testimonial: "The positioning CRUDA created helped me attract the projects I actually want to work on."
  },
  {
    id: 3,
    slug: "hospitality-gm",
    clientName: "LUXURY HOSPITALITY GM",
    projectHeadline: "From operations expert to thought leader",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=800&fit=crop",
    metrics: [
      { label: "Speaking Invitations", value: "8" },
      { label: "Board Positions", value: "2" },
      { label: "LinkedIn Growth", value: "300%" }
    ],
    description: "Transformed healthcare executive's story into thought leadership platform.",
    challenge: "Transitioning from Four Seasons to healthcare required repositioning decades of hospitality expertise.",
    solution: "We crafted a narrative showing how luxury service principles elevate patient care and operational excellence.",
    results: "Invited to speak at 8 industry conferences, joined 2 advisory boards, 300% increase in LinkedIn following.",
    testimonial: "CRUDA showed me how my hospitality background was actually my biggest differentiator in healthcare."
  }
];

const SeeTheWork = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] mb-2" style={{ color: '#3D3835' }}>
              See the Work
            </h2>
            {/* Yellow underline accent */}
            <div className="h-[2px] w-[80px] mx-auto" style={{ backgroundColor: '#F5B800' }} />
          </div>

          {/* Horizontal Carousel */}
          <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth">
            <div className="flex gap-8 md:gap-10 min-w-max md:min-w-0">
              {caseStudies.map((study) => (
                <Link 
                  key={study.id}
                  to={`/work/${study.slug}`}
                  className="group cursor-pointer w-[85vw] md:w-[420px] flex-shrink-0"
                >
                  <div 
                    className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      borderRadius: '12px',
                      boxShadow: '0 2px 16px rgba(61,56,53,0.08)'
                    }}
                  >
                    {/* Image - 60% of card */}
                    <div className="relative overflow-hidden" style={{ height: '320px' }}>
                      <img 
                        src={study.image} 
                        alt={study.projectHeadline}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content - 40% of card */}
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-wide mb-3" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
                        {study.clientName}
                      </p>
                      
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D3835' }}>
                        {study.projectHeadline}
                      </h3>

                      {/* Key Metrics with Yellow Accent */}
                      <div className="space-y-2 mb-4">
                        {study.metrics.slice(0, 2).map((metric, idx) => (
                          <p key={idx} className="text-sm">
                            <span style={{ color: '#F5B800', fontWeight: '600' }}>{metric.value}</span>
                            <span style={{ color: 'rgba(61, 56, 53, 0.7)' }}> {metric.label}</span>
                          </p>
                        ))}
                      </div>

                      <p className="text-[15px] leading-[1.6] mb-6 line-clamp-3" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                        {study.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300" style={{ color: '#3D3835' }}>
                        <span>View Case Study</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default SeeTheWork;
