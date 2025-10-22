import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import karenPhoto from "@/assets/karen-mannheim-casestudy.jpg";

const KarenMannheimCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const client = {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    role: "Founder of TRAZZO Lighting",
    subtitle: "High-End Architectural Lighting",
    location: "Lima, Miami, Madrid",
    photo: karenPhoto,
    hasVideo: true,
    isConfidential: false,
    
    founderBio: "Karen Mannheim is founder of TRAZZO Lighting, Peru's most respected architectural lighting design firm. Over three decades, she's perfected how light shapes emotion in luxury spaces—working with Porsche, Maserati, and developers across Latin America, the Middle East, and the United States.",
    
    challenges: {
      headline: "Karen's expertise stopped at Peru's border—but no one outside Lima knew about it.",
      body: "Three decades perfecting architectural lighting for luxury spaces. TRAZZO was Peru's most respected—Porsche, Maserati, residences where every room breathed differently.\n\nBut she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. A thousand followers. No LinkedIn presence. No way to create belief remotely.\n\nThe gap wasn't quality. It was translation."
    },
    
    objectives: [
      "Build Karen's digital presence from zero to establish TRAZZO beyond Peru",
      "Position her as architectural lighting designer, not product vendor",
      "Create content system that translates technical expertise into emotional storytelling"
    ],
    
    strategy: {
      pullQuote: "We didn't change what Karen built. We changed how it was understood.",
      body: "Through structured founder interviews and strategic positioning, we transformed TRAZZO from a regional supplier to an international design authority. We developed a content system that turns technical mastery into emotional storytelling that travels across borders and cultures."
    },
    
    contentPillars: [
      {
        title: "Technical Mastery",
        description: "How light behaves in luxury spaces—thermal dynamics, layering, material interaction"
      },
      {
        title: "Cultural Translation",
        description: "Building a Latin American company in Miami—heritage, identity, and cross-border business"
      },
      {
        title: "Industry Innovation",
        description: "Challenging the 'lighting as afterthought' mindset in architecture and design"
      }
    ],
    
    videos: [
      { title: "TRAZZO Lighting Portfolio", thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=600&fit=crop" },
      { title: "Architectural Lighting Design", thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop" },
      { title: "Luxury Residential Projects", thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop" },
      { title: "Karen on Lighting Philosophy", thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=600&fit=crop" },
      { title: "Four Seasons Penthouse", thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=600&fit=crop" },
      { title: "The TRAZZO Approach", thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=600&fit=crop" }
    ],
    
    results: [
      "16,000 Instagram followers (from 1,000)",
      "900,000 annual Instagram impressions (from 5,000)",
      "4,000+ LinkedIn followers (from 100)",
      "500,000 annual LinkedIn impressions (from 100)",
      "Featured in Architectural Digest and Semana Económica",
      "Saadiyat Music Festival—Jennifer Lopez, Christina Aguilera",
      "Partnerships in Indonesia, Spain, Hawaii",
      "10 high-end Miami bids won",
      "Speaking invitations at architectural conferences"
    ],
    
    quote: "CRUDA helped us translate three decades of expertise into a story that works everywhere—from Lima to Miami to Dubai. The work was always exceptional. Now people outside our immediate circle can see it."
  };

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
              <div className="inline-block px-4 py-2 mb-4" style={{ backgroundColor: 'rgba(255, 46, 99, 0.15)' }}>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#FF2E63' }}>
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
              <div className="text-8xl" style={{ color: 'rgba(255, 46, 99, 0.2)' }}>!</div>
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
                  borderLeft: '3px solid #FF2E63',
                  borderRadius: '8px',
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${0.2 + index * 0.15}s forwards`
                }}
              >
                <div className="text-5xl font-bold mb-4" style={{ color: '#FF2E63' }}>
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
          <div className="inline-block px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(255, 46, 99, 0.15)' }}>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#FF2E63' }}>
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

          {/* Video Carousel */}
          <p className="text-center mb-8 text-lg font-semibold" style={{ color: '#3D3835' }}>
            Watch how we translated their story into content
          </p>
          <div 
            className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0"
            style={{
              paddingTop: '32px',
              paddingBottom: '32px'
            }}
          >
            <div className="flex gap-6 min-w-max md:grid md:grid-cols-3 md:gap-6">
              {client.videos.map((video, index) => (
                <div 
                  key={index}
                  className="w-64 md:w-auto flex-shrink-0"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.6s ease-out ${0.3 + index * 0.1}s forwards`
                  }}
                >
                  <div 
                    className="relative mb-3 overflow-hidden group cursor-pointer" 
                    style={{ 
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      >
                        <div 
                          style={{ 
                            width: 0, 
                            height: 0, 
                            borderLeft: '12px solid #3D3835',
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                            marginLeft: '4px'
                          }}
                        />
                      </div>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                    >
                      <p className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
                        {video.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center mt-8">
            <p 
              className="text-lg md:text-xl leading-relaxed italic"
              style={{ 
                color: 'rgba(61, 56, 53, 0.85)',
                fontFamily: 'Georgia, serif'
              }}
            >
              "This project wasn't about vanity. It was about clarity."
            </p>
            <p 
              className="mt-4 text-base leading-relaxed"
              style={{ color: 'rgba(61, 56, 53, 0.75)' }}
            >
              We helped {client.name.split(' ')[0]} take control of their narrative by crafting the story behind what they've built. Whether it's lighting luxury homes or leading hospitality transformations, their story deserved more than just a logo—it needed trust.
            </p>
          </div>
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
                <span style={{ color: '#FF2E63', fontSize: '24px', marginTop: '2px' }}>✓</span>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Founder Quote */}
      <section className="py-16 md:py-20 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-10 md:p-12"
            style={{ 
              backgroundColor: '#FDFBF7',
              borderLeft: '4px solid #FF2E63',
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
              e.currentTarget.style.backgroundColor = '#FF2E63';
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

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default KarenMannheimCaseStudy;
