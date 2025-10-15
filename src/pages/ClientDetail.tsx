import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

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
    quote: "CRUDA helped me stop explaining what I do and start showing why it matters. My work hasn't changed—but the clients I'm attracting have. I'm now in conversations with developers and architects who understand that lighting is strategic, not cosmetic.",
    caseStudySlug: "karen-mannheim"
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
    ],
    quote: "",
    caseStudySlug: "norhart"
  }
];

const ClientDetail = () => {
  const { clientSlug } = useParams();
  const navigate = useNavigate();
  const client = clients.find(c => c.slug === clientSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#3D3835' }}>Client Not Found</h1>
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

      {/* Hero Section */}
      <div className="grid md:grid-cols-[40%_60%] min-h-[70vh]">
        {/* Left - Sticky Image */}
        <div className="relative h-[400px] md:h-auto">
          <div className="md:sticky md:top-0 h-full" style={{ borderLeft: '4px solid #F5B800' }}>
            <img
              src={client.photo}
              alt={client.name}
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(20%)' }}
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="px-6 md:px-16 py-12 md:py-20">
          <h1 className="font-bold mb-3" style={{ 
            fontSize: '42px',
            color: '#3D3835',
            lineHeight: '1.1'
          }}>
            {client.name}
          </h1>
          <p className="mb-2" style={{ 
            fontSize: '20px',
            color: '#F5B800',
            fontWeight: '600'
          }}>
            {client.fullTitle}
          </p>
          <p className="mb-8" style={{ 
            fontSize: '16px',
            color: 'rgba(61, 56, 53, 0.7)'
          }}>
            {client.location}
          </p>

          {/* Divider */}
          <div className="h-[2px] w-full mb-10" style={{ backgroundColor: 'rgba(61, 56, 53, 0.15)' }} />

          {/* Full Bio */}
          <div className="space-y-5 mb-12">
            {client.bio.map((paragraph, index) => (
              <p key={index} style={{ 
                fontSize: '16px',
                lineHeight: '1.75',
                color: 'rgba(61, 56, 53, 0.85)'
              }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* What They're Building */}
          {client.whatBuilding && (
            <>
              <h2 className="font-semibold mb-4" style={{ 
                fontSize: '24px',
                color: '#3D3835'
              }}>
                What They're Building
              </h2>
              <p className="mb-10" style={{ 
                fontSize: '16px',
                lineHeight: '1.75',
                color: 'rgba(61, 56, 53, 0.85)'
              }}>
                {client.whatBuilding}
              </p>
            </>
          )}

          {/* Notable Achievements */}
          {client.achievements && client.achievements.length > 0 && (
            <>
              <h2 className="font-semibold mb-6" style={{ 
                fontSize: '24px',
                color: '#3D3835'
              }}>
                Notable Achievements
              </h2>
              <ul className="space-y-4 mb-10">
                {client.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span style={{ color: '#F5B800', fontSize: '20px', marginTop: '2px' }}>→</span>
                    <span style={{ 
                      fontSize: '16px',
                      lineHeight: '1.7',
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
          {client.quote && (
            <div className="p-8 mb-10" style={{ 
              backgroundColor: '#F5F1E8',
              borderLeft: '4px solid #F5B800'
            }}>
              <p style={{ 
                fontSize: '17px',
                lineHeight: '1.75',
                color: 'rgba(61, 56, 53, 0.9)',
                fontStyle: 'italic'
              }}>
                "{client.quote}"
              </p>
            </div>
          )}

          {/* CTA */}
          {client.caseStudySlug && (
            <Link 
              to={`/work/${client.caseStudySlug}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all duration-300 hover:opacity-90"
              style={{ 
                backgroundColor: '#FF2E63',
                color: '#FDFBF7',
                borderRadius: '8px'
              }}
            >
              See the Work
              <span>→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
