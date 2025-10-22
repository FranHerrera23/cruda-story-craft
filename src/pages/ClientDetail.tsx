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
    photo: "/src/assets/karen-mannheim-new.jpg",
    hasVideo: true,
    isConfidential: false,
    
    founderBio: "Karen Mannheim is an architectural lighting designer who's worked with top architects across Latin America and the U.S. From luxury residences to flagship retail, her work enhances how people experience space. But for years, her story wasn't being told—until now.",
    
    challenges: {
      headline: "Karen's work spoke for itself—but her digital presence didn't exist.",
      body: "No website. No system. No story.\n\nShe was respected in the industry, but invisible to clients outside her inner circle. There was no clear voice, no content structure, and no way to turn her work into long-term visibility."
    },
    
    objectives: [
      "Build trust at scale through strategic content",
      "Create a brand system that could grow with her",
      "Position Karen for expansion into Madrid and the U.S. market"
    ],
    
    strategy: {
      pullQuote: "We didn't create a brand. We uncovered it.",
      body: "Through weekly founder interviews, we helped Karen take control of her story. We rebuilt her narrative from the ground up, clarified her positioning, and developed a system to turn her philosophy into an emotional connection with clients."
    },
    
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
    
    videos: [
      { title: "Designing with Emotion", thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop" },
      { title: "From Blueprint to Experience", thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=600&fit=crop" },
      { title: "Four Seasons Penthouse Walkthrough", thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=600&fit=crop" },
      { title: "Karen's Process in Madrid", thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=600&fit=crop" },
      { title: "Why Lighting Is Psychological", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop" },
      { title: "From Moodboard to Site", thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=600&fit=crop" }
    ],
    
    results: [
      "1M+ organic impressions",
      "Featured in ArchDigest",
      "Fully repositioned brand in less than 90 days",
      "Consistent inbound from architects, developers, and media",
      "Hired as Lighting Designer for major developer in Madrid"
    ],
    
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
    isConfidential: false,
    
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
      { title: "Mike on Cost Reduction", thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=600&fit=crop" },
      { title: "Inside Norhart's $100M Tower", thumbnail: "https://images.unsplash.com/photo-1541976590-713941681591?w=400&h=600&fit=crop" },
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
  },
  {
    slug: "marly-hurtado",
    name: "Marly Hurtado",
    role: "Hospitality Operations Leader",
    subtitle: "Luxury Hotels & Resorts",
    location: "Dubai • Miami",
    photo: "/src/assets/marly-hurtado.jpeg",
    hasVideo: false,
    isConfidential: false,
    
    founderBio: "Marly Hurtado has spent over a decade leading operations at some of the world's most prestigious luxury hotels. From Dubai to Miami, she's built systems that blend impeccable service with scalable efficiency. But her expertise was never captured in a narrative—until now.",
    
    challenges: {
      headline: "Marly's operational excellence was invisible outside her properties.",
      body: "Years of results. Zero online presence.\n\nShe had transformed hotel operations across continents, but no one outside her immediate network knew her story. There was no thought leadership, no platform, and no way for her expertise to reach the industry at large."
    },
    
    objectives: [
      "Build personal brand as a hospitality operations expert",
      "Create content that showcases her leadership philosophy",
      "Position for speaking engagements and advisory roles"
    ],
    
    strategy: {
      pullQuote: "We didn't build a portfolio. We built a voice.",
      body: "Through strategic founder interviews and content architecture, we helped Marly articulate what makes her approach different. We transformed operational insights into industry commentary and built a system for consistent, authoritative presence."
    },
    
    contentPillars: [
      {
        title: "Operational Excellence",
        description: "Systems thinking in luxury hospitality"
      },
      {
        title: "Leadership Stories",
        description: "Team building and cultural transformation"
      },
      {
        title: "Industry Insights",
        description: "Trends, challenges, and opportunities in hospitality"
      }
    ],
    
    images: [
      { title: "Hospitality Keynote, Dubai", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" },
      { title: "Before/After Brand Visual", thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop" },
      { title: "Instagram Post – 500k views", thumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop" },
      { title: "LinkedIn Thought Leadership", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" },
      { title: "Press Mention in Forbes", thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop" },
      { title: "Slide from Investor Deck", thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" }
    ],
    
    results: [
      "Featured in Hospitality Magazine",
      "Speaking engagement at Dubai Hotel Summit",
      "LinkedIn following grew 400% in 4 months",
      "Consistent inbound for advisory roles",
      "Established as thought leader in luxury hospitality operations"
    ],
    
    quote: "CRUDA helped me find my voice outside the hotel walls. They turned years of operational work into a narrative that actually resonates.",
    
    caseStudySlug: "marly-hurtado"
  },
  {
    slug: "juan-pablo-romero",
    name: "Juan Pablo Romero",
    role: "Real Estate Developer & Architect",
    subtitle: "Residential & Commercial Projects",
    location: "Lima • Miami",
    photo: "/src/assets/juan-pablo-romero.jpeg",
    hasVideo: false,
    isConfidential: false,
    
    founderBio: "Juan Pablo Romero is a real estate developer and architect who's built some of Lima's most recognized residential and commercial projects. His work blends architectural vision with development execution. But his story wasn't reaching the right audience—until now.",
    
    challenges: {
      headline: "Juan Pablo's projects spoke for themselves—but he didn't.",
      body: "Completed projects. No narrative.\n\nHe had built millions in real estate value, but his personal brand was invisible. There was no content strategy, no consistent voice, and no way to translate his work into long-term influence."
    },
    
    objectives: [
      "Build personal brand as developer-architect hybrid",
      "Create content that showcases his design philosophy",
      "Position for international partnerships and investment opportunities"
    ],
    
    strategy: {
      pullQuote: "We didn't document projects. We built a movement.",
      body: "Through weekly interviews and content architecture, we helped Juan Pablo articulate his unique perspective as both architect and developer. We created a system that turns construction progress into compelling storytelling."
    },
    
    contentPillars: [
      {
        title: "Design Philosophy",
        description: "How architecture meets development"
      },
      {
        title: "Project Stories",
        description: "Behind the scenes from concept to completion"
      },
      {
        title: "Market Insights",
        description: "Real estate trends and investment opportunities"
      }
    ],
    
    images: [
      { title: "Lima Project Reveal", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
      { title: "Architectural Digest Feature", thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop" },
      { title: "Instagram Construction Update", thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" },
      { title: "LinkedIn Market Analysis", thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" },
      { title: "Design Process Breakdown", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" },
      { title: "Developer Summit Keynote", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" }
    ],
    
    results: [
      "Featured in local and international architecture publications",
      "Consistent inbound from international investors",
      "LinkedIn following grew 350% in 5 months",
      "Established as thought leader in Latin American real estate",
      "Secured partnership opportunities with Miami-based developers"
    ],
    
    quote: "CRUDA helped me go from being known for my projects to being known for my thinking. That shift changed everything.",
    
    caseStudySlug: "juan-pablo-romero"
  },
  {
    slug: "nitin-passi",
    name: "Confidential Client",
    displayName: null,
    role: "Retail CEO & Founder",
    subtitle: "Global Fashion & E-Commerce",
    location: "Dubai",
    photo: "/src/assets/retail-ceo.jpg",
    hasVideo: false,
    isConfidential: true,
    
    founderBio: "A global retail CEO who built a multi-hundred-million-dollar fashion and e-commerce empire. From startup to international expansion, their journey redefined how modern retail brands scale. But their story was never told publicly—until now.",
    
    challenges: {
      headline: "A retail empire with no public narrative.",
      body: "Scale without story.\n\nThey had built a globally recognized brand, but their personal narrative was invisible. There was no founder story, no thought leadership platform, and no content infrastructure to support their next chapter of growth."
    },
    
    objectives: [
      "Build founder brand without compromising confidentiality",
      "Create strategic content for industry influence",
      "Position for board roles and investment opportunities"
    ],
    
    strategy: {
      pullQuote: "We built trust without the spotlight.",
      body: "Through confidential founder sessions and strategic content development, we created a narrative system that showcases expertise without revealing identity. We helped them build influence in retail and investment circles through thought leadership."
    },
    
    contentPillars: [
      {
        title: "Retail Innovation",
        description: "How modern brands scale globally"
      },
      {
        title: "E-Commerce Strategy",
        description: "From digital-first to omnichannel"
      },
      {
        title: "Founder Insights",
        description: "Leadership, culture, and growth mindset"
      }
    ],
    
    images: [
      { title: "GQ Feature Interview", thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" },
      { title: "Retail Summit Keynote", thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" },
      { title: "E-Commerce Strategy Breakdown", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
      { title: "LinkedIn Thought Leadership", thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" },
      { title: "Brand Evolution Visual", thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop" },
      { title: "Industry Report Feature", thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=400&fit=crop" }
    ],
    
    results: [
      "Secured board position with major retail group",
      "Featured in global business publications (anonymously)",
      "Built network of C-suite connections in retail and tech",
      "Positioned for investment opportunities in emerging brands",
      "Established thought leadership without public identity"
    ],
    
    quote: "CRUDA helped me build influence without sacrificing privacy. In my world, that's everything.",
    
    caseStudySlug: "confidential-retail-ceo"
  },
  {
    slug: "girish-sehgal",
    name: "Confidential Client",
    displayName: null,
    role: "Luxury Hospitality GM",
    subtitle: "5-Star Hotels & Resorts",
    location: "Dubai",
    photo: "/src/assets/hospitality-manager.jpg",
    hasVideo: false,
    isConfidential: true,
    
    founderBio: "A General Manager at one of Dubai's most prestigious luxury hotels. With decades of experience leading world-class teams and creating unforgettable guest experiences, their expertise in hospitality management is unmatched. But their personal brand never reflected their impact—until now.",
    
    challenges: {
      headline: "Leading luxury hospitality—but invisible to the industry.",
      body: "Excellence without presence.\n\nThey had transformed hotel operations and guest experiences at the highest level, but their thought leadership was nonexistent. There was no content, no platform, and no way for their insights to reach the broader hospitality community."
    },
    
    objectives: [
      "Build industry authority while maintaining confidentiality",
      "Create strategic content for hospitality leadership circles",
      "Position for consulting and advisory opportunities"
    ],
    
    strategy: {
      pullQuote: "We built authority without attribution.",
      body: "Through confidential interviews and strategic content architecture, we helped translate operational excellence into thought leadership. We created a system for sharing insights and building influence without compromising their position."
    },
    
    contentPillars: [
      {
        title: "Guest Experience Philosophy",
        description: "Creating memorable luxury hospitality"
      },
      {
        title: "Team Leadership",
        description: "Building world-class service culture"
      },
      {
        title: "Industry Evolution",
        description: "Trends shaping the future of luxury hotels"
      }
    ],
    
    images: [
      { title: "Hospitality Excellence Framework", thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop" },
      { title: "Leadership Philosophy Post", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" },
      { title: "Service Culture Insights", thumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop" },
      { title: "Industry Trend Analysis", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" },
      { title: "Team Building Strategies", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" },
      { title: "Luxury Hotel Evolution", thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" }
    ],
    
    results: [
      "Invited to speak at exclusive hospitality leadership events",
      "Built network of luxury hotel GMs and executives",
      "Positioned for consulting opportunities with hotel groups",
      "Established thought leadership in hospitality circles",
      "Created influence without public attribution"
    ],
    
    quote: "CRUDA gave me a way to share what I've learned without compromising my position. That balance is rare and invaluable.",
    
    caseStudySlug: "confidential-hospitality-gm"
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
          <Link to="/" className="inline-flex items-center gap-2 text-lg" style={{ color: '#FF2E63' }}>
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
                {client.isConfidential ? client.name : client.displayName || client.name}
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

          {/* Video/Image Carousel */}
          {client.hasVideo && client.videos ? (
            <>
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
                  We helped {client.isConfidential ? 'this founder' : client.name.split(' ')[0]} take control of their narrative by crafting the story behind what they've built. Whether it's lighting luxury homes or leading hospitality transformations, their story deserved more than just a logo—it needed trust.
                </p>
              </div>
            </>
          ) : client.images ? (
            <>
              <p className="text-center mb-8 text-lg font-semibold" style={{ color: '#3D3835' }}>
                See how we translated their story into content
              </p>
              <div 
                className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0"
                style={{
                  paddingTop: '32px',
                  paddingBottom: '32px'
                }}
              >
                <div className="flex gap-6 min-w-max md:grid md:grid-cols-3 md:gap-6">
                  {client.images.map((image, index) => (
                    <div 
                      key={index}
                      className="w-80 md:w-auto flex-shrink-0"
                      style={{
                        opacity: 0,
                        animation: `fadeIn 0.6s ease-out ${0.3 + index * 0.1}s forwards`
                      }}
                    >
                      <div 
                        className="relative mb-3 overflow-hidden group" 
                        style={{ 
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        <img
                          src={image.thumbnail}
                          alt={image.title}
                          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div 
                          className="absolute bottom-0 left-0 right-0 p-4"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                        >
                          <p className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
                            {image.title}
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
                  We helped {client.isConfidential ? 'this founder' : client.name.split(' ')[0]} take control of their narrative by crafting the story behind what they've built. Their story deserved more than just a logo—it needed trust.
                </p>
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
                <span style={{ color: '#FF2E63', fontSize: '24px', marginTop: '2px' }}>✓</span>
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
      )}

      {/* 9. Soft CTA / Footer */}
      <section className="py-20 md:py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#3D3835' }}>
            Want to build trust like {client.isConfidential ? 'this founder' : client.name.split(' ')[0]}?
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
    </div>
  );
};

export default ClientDetail;
