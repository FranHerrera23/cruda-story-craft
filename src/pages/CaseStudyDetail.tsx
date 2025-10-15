import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const caseStudies = [
  {
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
          <h1 className="text-[36px] md:text-[52px] font-bold leading-[1.1] max-w-[800px]" style={{ color: '#FDFBF7' }}>
            {study.projectHeadline}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[900px] mx-auto px-6 md:px-20 py-16 md:py-24">
        {/* Project Context */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-6" style={{ color: '#3D3835' }}>
            Project Context
          </h2>
          <p className="text-[18px] leading-[1.75] mb-4" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            {study.description}
          </p>
        </div>

        {/* Challenge */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-6" style={{ color: '#3D3835' }}>
            Challenge
          </h2>
          <p className="text-[18px] leading-[1.75]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            {study.challenge}
          </p>
        </div>

        {/* What We Did */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-6" style={{ color: '#3D3835' }}>
            What We Did
          </h2>
          <p className="text-[18px] leading-[1.75]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            {study.solution}
          </p>
        </div>

        {/* Impact & Results */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-8" style={{ color: '#3D3835' }}>
            Impact & Results
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

          <p className="text-[18px] leading-[1.75]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            {study.results}
          </p>
        </div>

        {/* Testimonial */}
        {study.testimonial && (
          <div className="p-10 mb-16" style={{ 
            backgroundColor: '#F5F1E8',
            borderLeft: '6px solid #F5B800',
            borderRadius: '8px'
          }}>
            <p className="text-[20px] leading-[1.75] italic" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
              "{study.testimonial}"
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center py-12 border-t-2" style={{ borderColor: 'rgba(61, 56, 53, 0.1)' }}>
          <h3 className="text-[32px] font-bold mb-6" style={{ color: '#3D3835' }}>
            Let's build your story next
          </h3>
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
            Start a Conversation
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
