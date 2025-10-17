import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const clients = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    role: "Architectural Lighting Designer",
    subtitle: "High-End Residences & Retail",
    location: "Miami • Lima",
    photo: "/src/assets/karen-mannheim.jpg",
    hasVideo: true,
    
    // Section 2: Short Founder Bio
    founderBio: "Karen Mannheim is an architectural lighting designer who's worked with top architects across Latin America and the U.S. From luxury residences to flagship retail, her work enhances how people experience space. But for years, her story wasn't being told—until now.",
    
    // Section 3: Challenges
    challenges: {
      headline: "Karen's work spoke for itself—but her digital presence didn't exist.",
      body: "No website. No system. No story.\n\nShe was respected in the industry, but invisible to clients outside her inner circle. There was no clear voice, no content structure, and no way to turn her work into long-term visibility."
    },
    
    // Section 4: Business Objectives
    objectives: [
      "Build trust at scale through strategic content",
      "Create a brand system that could grow with her",
      "Position Karen for expansion into Madrid and the U.S. market"
    ],
    
    // Section 5: CRUDA's Strategy
    strategy: {
      pullQuote: "We didn't create a brand. We uncovered it.",
      body: "Through weekly founder interviews, we helped Karen take control of her story. We rebuilt her narrative from the ground up, clarified her positioning, and developed a system to turn her philosophy into an emotional connection with clients."
    },
    
    // Section 6: Content Pillars
    contentPillars: [
      {
        title: "Light as Language",
        description: "Her design philosophy and how she thinks"
      },
      {
        title: "Site Diaries",
        description: "Behind the scenes, from Four Seasons to Fisher Island"
      },
      {
        title: "Collaborations",
        description: "Architect interviews, material storytelling, co-creation"
      }
    ],
    
    // Video carousel (only for Karen & Mike)
    videos: [
      { title: "Pezet 3 Reveal", thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop" },
      { title: "On Site: Fisher Island", thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=600&fit=crop" },
      { title: "The Way Light Moves", thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=600&fit=crop" },
      { title: "Karen's Process in Madrid", thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=600&fit=crop" },
      { title: "Lighting as Emotion", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop" },
      { title: "From Moodboard to Site", thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=600&fit=crop" }
    ],
    
    // Section 7: What We Helped Them Generate
    results: [
      "1M+ organic impressions",
      "Featured in ArchDigest",
      "Fully repositioned brand in less than 90 days",
      "Consistent inbound from architects, developers, and media",
      "Hired as Lighting Designer for major developer in Madrid"
    ],
    
    // Section 8: Founder Quote
    quote: "I've worked in lighting for over 15 years. But CRUDA helped me say things I've never been able to articulate. They didn't just build content—they helped me own my voice.",
    
    caseStudySlug: "karen-mannheim"
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    role: "CEO of Norhart Inc.",
    subtitle: "Residential Construction",
    location: "Minneapolis",
    photo: "/src/assets/mike-kaeding.webp",
    hasVideo: true,
    
    founderBio: "Mike Kaeding is the CEO of Norhart Inc., a $200M construction company redefining how America builds. Leading the development of a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures.",
    
    challenges: {
      headline: "Mike had a revolutionary business model—but no one outside Minneapolis knew about it.",
      body: "Despite building a $200M company, Norhart's story was trapped in local press. There was no national positioning, no thought leadership framework, and no system to turn operational excellence into industry authority."
    },
    
    objectives: [
      "Position Norhart as a national construction innovator",
      "Build Mike's personal brand as a thought leader",
      "Create content infrastructure that scales with company growth"
    ],
    
    strategy: {
      pullQuote: "We didn't tell Mike's story. We helped him find his voice.",
      body: "Through structured founder interviews and strategic positioning, we transformed Mike from regional builder to construction industry disruptor. We developed a content system that turns operational insights into national conversation."
    },
    
    contentPillars: [
      {
        title: "Construction Innovation",
        description: "How Norhart is reimagining residential building"
      },
      {
        title: "Business Model Breakdown",
        description: "The economics of vertical integration"
      },
      {
        title: "Industry Leadership",
        description: "Challenging conventional construction wisdom"
      }
    ],
    
    videos: [
      { title: "Inside Norhart's Process", thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop" },
      { title: "Why We Build Differently", thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=600&fit=crop" },
      { title: "Forest Lake Development", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop" },
      { title: "Construction Economics", thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=600&fit=crop" },
      { title: "Mike on Innovation", thumbnail: "https://images.unsplash.com/photo-1541976590-713941681591?w=400&h=600&fit=crop" },
      { title: "The Norhart Model", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop" }
    ],
    
    results: [
      "National media coverage in construction industry publications",
      "Speaking engagements at major industry conferences",
      "Inbound from developers across multiple states",
      "LinkedIn following grew 300% in 6 months",
      "Featured in industry podcasts and documentaries"
    ],
    
    quote: "CRUDA helped us articulate what makes Norhart different. Now we're not just building apartments—we're leading a conversation about the future of construction.",
    
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

      {/* 1. Hero Section: Identity + Tagline */}
      <section className="py-16 md:py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left: Text */}
            <div 
              className="space-y-6"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out 0.2s forwards'
              }}
            >
              <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#3D3835', lineHeight: '1.1' }}>
                {client.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium" style={{ color: '#3D3835' }}>
                {client.role}
              </p>
              <p className="text-base uppercase tracking-wider" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
                {client.subtitle}
              </p>
              <p className="text-sm uppercase tracking-widest" style={{ color: 'rgba(61, 56, 53, 0.5)' }}>
                {client.location}
              </p>
            </div>

            {/* Right: Portrait */}
            <div 
              className="relative"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out 0.4s forwards'
              }}
            >
              <img
                src={client.photo}
                alt={`${client.name}, ${client.role}`}
                className="w-full max-w-md mx-auto object-cover"
                style={{ 
                  aspectRatio: '4/5',
                  filter: 'grayscale(20%) contrast(1.1)',
                  backgroundColor: '#E5E5E5'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short Founder Bio */}
      <section className="py-12 md:py-16 px-6 md:px-20" style={{ backgroundColor: '#FBFBFB' }}>
        <div className="max-w-3xl mx-auto">
          <div className="h-[1px] w-full mb-10" style={{ backgroundColor: 'rgba(61, 56, 53, 0.15)' }} />
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ 
              color: 'rgba(61, 56, 53, 0.85)',
              fontFamily: 'Georgia, serif',
              opacity: 0,
              animation: 'fadeIn 0.6s ease-out 0.3s forwards'
            }}
          >
            {client.founderBio}
          </p>
        </div>
      </section>

      {/* 3. Brand & Communication Challenges */}
      <section className="py-16 md:py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[60%_40%] gap-12">
            {/* Left: Challenge Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 mb-4" style={{ backgroundColor: 'rgba(245, 184, 0, 0.15)' }}>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F5B800' }}>
                  The Challenge
                </p>
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ 
                  color: '#3D3835',
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out 0.2s forwards'
                }}
              >
                {client.challenges.headline}
              </h2>
              <div 
                className="space-y-4 text-lg leading-relaxed"
                style={{ 
                  color: 'rgba(61, 56, 53, 0.85)',
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out 0.4s forwards'
                }}
              >
                {client.challenges.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right: Visual Element */}
            <div 
              className="hidden md:flex items-center justify-center"
              style={{ 
                backgroundColor: 'rgba(61, 56, 53, 0.03)',
                borderRadius: '12px'
              }}
            >
              <div className="text-8xl" style={{ color: 'rgba(245, 184, 0, 0.2)' }}>!</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business Objectives */}
      <section className="py-16 md:py-20 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 mb-8" style={{ backgroundColor: '#FDFBF7' }}>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#3D3835' }}>
              Strategic Goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {client.objectives.map((objective, index) => (
              <div 
                key={index}
                className="p-6 md:p-8"
                style={{ 
                  backgroundColor: '#FDFBF7',
                  borderLeft: '3px solid #F5B800',
                  borderRadius: '8px',
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${0.2 + index * 0.15}s forwards`
                }}
              >
                <div className="text-5xl font-bold mb-4" style={{ color: '#F5B800' }}>
                  {index + 1}
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRUDA's Strategy */}
      <section className="py-16 md:py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(245, 184, 0, 0.15)' }}>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F5B800' }}>
              Our Approach
            </p>
          </div>

          <div 
            className="text-center mb-10"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.6s ease-out 0.2s forwards'
            }}
          >
            <p 
              className="text-3xl md:text-4xl font-bold italic mb-2"
              style={{ color: '#3D3835', lineHeight: '1.3' }}
            >
              {client.strategy.pullQuote}
            </p>
          </div>

          <p 
            className="text-lg md:text-xl leading-relaxed text-center"
            style={{ 
              color: 'rgba(61, 56, 53, 0.85)',
              opacity: 0,
              animation: 'fadeIn 0.6s ease-out 0.4s forwards'
            }}
          >
            {client.strategy.body}
          </p>
        </div>
      </section>

      {/* 6. Content Pillars */}
      <section className="py-16 md:py-20 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#3D3835' }}>
            Content System
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
            {client.name.split(' ')[0]}'s content is built on three editorial pillars:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {client.contentPillars.map((pillar, index) => (
              <div 
                key={index}
                className="p-6"
                style={{
                  backgroundColor: '#FDFBF7',
                  borderRadius: '8px',
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${0.2 + index * 0.15}s forwards`
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#3D3835' }}>
                  {pillar.title}
                </h3>
                <p className="text-base" style={{ color: 'rgba(61, 56, 53, 0.75)' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Video/Image Carousel */}
          {client.hasVideo && client.videos ? (
            <>
              <p className="text-center mb-8 text-lg font-semibold" style={{ color: '#3D3835' }}>
                Watch how we translated their story into content
              </p>
              <div className="overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0">
                <div className="flex gap-6 min-w-max">
                  {client.videos.map((video, index) => (
                    <div 
                      key={index}
                      className="w-64 flex-shrink-0"
                      style={{
                        opacity: 0,
                        animation: `fadeIn 0.6s ease-out ${0.3 + index * 0.1}s forwards`
                      }}
                    >
                      <div className="relative mb-3 overflow-hidden" style={{ borderRadius: '8px' }}>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                      <p className="text-sm text-center font-medium" style={{ color: '#3D3835' }}>
                        {video.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* 7. What We Helped Them Generate */}
      <section className="py-16 md:py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl">🟡</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#3D3835' }}>
                What We Helped Them Generate
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {client.results.map((result, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5"
                style={{
                  backgroundColor: '#F5F1E8',
                  borderRadius: '8px',
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${0.2 + index * 0.1}s forwards`
                }}
              >
                <span style={{ color: '#F5B800', fontSize: '24px', marginTop: '2px' }}>✓</span>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Optional Founder Quote */}
      {client.quote && (
        <section className="py-16 md:py-20 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
          <div className="max-w-4xl mx-auto">
            <div 
              className="p-10 md:p-12"
              style={{ 
                backgroundColor: '#FDFBF7',
                borderLeft: '4px solid #F5B800',
                borderRadius: '8px'
              }}
            >
              <p 
                className="text-xl md:text-2xl leading-relaxed italic"
                style={{ 
                  color: 'rgba(61, 56, 53, 0.9)',
                  fontFamily: 'Georgia, serif'
                }}
              >
                "{client.quote}"
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider" style={{ color: '#3D3835' }}>
                — {client.name}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 9. Soft CTA / Footer */}
      <section className="py-20 md:py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#3D3835' }}>
            Want to build trust like {client.name.split(' ')[0]}?
          </h2>
          <Link 
            to="/book-call"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold transition-all duration-300"
            style={{ 
              backgroundColor: '#3D3835',
              color: '#FDFBF7',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5B800';
              e.currentTarget.style.color = '#3D3835';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3D3835';
              e.currentTarget.style.color = '#FDFBF7';
            }}
          >
            Start Your Story
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientDetail;
