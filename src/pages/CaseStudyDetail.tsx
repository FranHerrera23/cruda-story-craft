import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const caseStudies = [
  {
    slug: "mike-kaeding",
    clientName: "MIKE KAEDING",
    projectHeadline: "Turning buildings into brands: a $200M CEO finds his voice.",
    subheadline: "How we helped Norhart's founder craft a public story as bold as the company he's building.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop",
    industry: "Construction / Real Estate Development",
    metrics: [
      { label: "Posts Created", value: "40+" },
      { label: "Narrative Impact", value: "High" },
      { label: "Brand Elevation", value: "Industry-Wide" }
    ],
    description: "Mike Kaeding is not your typical construction CEO. He's building Norhart to solve America's housing crisis — by cutting construction costs in half.\n\nBut his story wasn't landing. We didn't need to \"create content.\" We needed to translate scale into trust — and turn a quiet builder into a resonant founder.",
    whatWeDid: [
      "Led a 1:1 founder deep-dive to extract voice, vision, and story",
      "Crafted a bold, human Founder Bio & LinkedIn Narrative",
      "Built a content system that turned weekly calls into thought leadership",
      "Helped frame Norhart's work as industry disruption, not just execution",
      "Positioned Mike as a strategic voice in housing, not just an operator"
    ],
    impact: [
      "Built a high-frequency storytelling habit across 40+ posts",
      "Content used in investor decks, press interviews, and recruitment",
      "Strengthened company-wide alignment around purpose and leadership",
      "Elevated brand perception among industry peers and local government",
      "Built a narrative engine that scales with Norhart's growth"
    ]
  },
  {
    slug: "karen-mannheim",
    clientName: "KAREN MANNHEIM",
    projectHeadline: "Lighting up the invisible: building narrative clarity for a leading designer",
    subheadline: "How we helped Karen Mannheim own her story — and become a visible force across Lima, Miami, and Madrid.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    industry: "Architectural Lighting Design / Luxury Residential",
    metrics: [
      { label: "Organic Impressions", value: "1M+" },
      { label: "Press Features", value: "AD Peru" },
      { label: "New Markets", value: "Madrid" }
    ],
    description: "Karen Mannheim had already built an impressive portfolio: Porsche showrooms, Four Seasons penthouses, villas in Fisher Island, and collaborations with world-class architects. But her story? It was still living in the shadows.\n\nShe wasn't building a personal brand. She was building trust — and we needed to make that visible.",
    whatWeDid: [
      "Developed her foundational narrative and tone of voice",
      "Built a consistent content system across Instagram & LinkedIn",
      "Created case-study formats to educate architects and developers",
      "Positioned Karen as a creative peer, not a service provider",
      "Crafted a clear bridge between lighting, design, and emotion"
    ],
    impact: [
      "+1,000,000 organic impressions on Instagram in 12 months",
      "Featured in Architectural Digest Peru",
      "Became a go-to reference for top developers in Peru and Spain",
      "Opened the door to new international collaborations — including Madrid's top residential developer",
      "Took control of her own narrative, on her own terms"
    ]
  },
  {
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

const CaseStudyDetail = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find(c => c.slug === projectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#3D3835' }}>Case Study Not Found</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-lg" style={{ color: '#F5B800' }}>
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* Back Navigation */}
      <div className="px-6 md:px-20 py-6">
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-70"
          style={{ color: '#3D3835' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* Hero Section with Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={study.image}
          alt={study.projectHeadline}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to top, rgba(61,56,53,0.9) 0%, rgba(61,56,53,0.3) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-12 md:pb-16">
          <p className="text-sm uppercase tracking-wide mb-3" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>
            {study.clientName}
          </p>
          <h1 className="text-[36px] md:text-[52px] font-bold leading-[1.1] max-w-[800px] mb-4" style={{ color: '#FDFBF7' }}>
            {study.projectHeadline}
          </h1>
          {study.subheadline && (
            <p className="text-[20px] leading-[1.5] max-w-[700px]" style={{ color: 'rgba(253, 251, 247, 0.9)' }}>
              {study.subheadline}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[900px] mx-auto px-6 md:px-20 py-16 md:py-24">
        {/* Project Context */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-2" style={{ color: '#3D3835' }}>
            Project Context
          </h2>
          {study.industry && (
            <p className="text-[15px] mb-6" style={{ color: '#F5B800' }}>
              Industry: {study.industry}
            </p>
          )}
          {study.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-[18px] leading-[1.75] mb-4" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* What We Did */}
        {study.whatWeDid && (
          <div className="mb-16">
            <h2 className="text-[28px] font-bold mb-6" style={{ color: '#3D3835' }}>
              What We Did
            </h2>
            <ul className="space-y-3">
              {study.whatWeDid.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[20px] mt-1" style={{ color: '#F5B800' }}>•</span>
                  <span className="text-[18px] leading-[1.75]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact & Results */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-8" style={{ color: '#3D3835' }}>
            Impact
          </h2>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 p-10" style={{ 
            backgroundColor: '#F5F1E8',
            borderRadius: '12px'
          }}>
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-[42px] font-bold mb-2" style={{ color: '#F5B800' }}>
                  {metric.value}
                </p>
                <p className="text-[15px]" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {study.impact && (
            <ul className="space-y-3">
              {study.impact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[20px] mt-1" style={{ color: '#F5B800' }}>•</span>
                  <span className="text-[18px] leading-[1.75]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t-2" style={{ borderColor: 'rgba(61, 56, 53, 0.1)' }}>
          <h3 className="text-[32px] font-bold mb-4" style={{ color: '#3D3835' }}>
            Want your brand to show up the way your work deserves?
          </h3>
          <p className="text-[18px] mb-8" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
            Let's build your narrative.
          </p>
          <Link 
            to="/#contact"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FDFBF7',
              borderRadius: '8px'
            }}
          >
            Book a Call
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
