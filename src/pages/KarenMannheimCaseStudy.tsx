import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { AnimatedHeader } from "@/components/case-study/AnimatedHeader";
import { AnimatedParagraph } from "@/components/case-study/AnimatedParagraph";
import { AnimatedDivider } from "@/components/case-study/AnimatedDivider";
import heroImage from "@/assets/karen-hero-new.jpg";
import pezetPoster from "@/assets/pezet-hero.jpg";
import fourSeasonsHero from "@/assets/four-seasons-hero.jpg";
import saadiyatHeroNew from "@/assets/saadiyat-hero-new.jpg";
import porscheCover from "@/assets/porsche-cover-new.png";
import linkedinAnalytics from "@/assets/karen-linkedin-analytics.png";
import linkedinPosts from "@/assets/karen-linkedin-posts.png";
import instagramAnalytics from "@/assets/karen-instagram-analytics.png";
import instagramPosts from "@/assets/karen-instagram-posts.png";

const KarenMannheimCaseStudy = () => {
  const navigate = useNavigate();

  const projects = [
    {
      slug: "pezet",
      name: "PEZET",
      location: "Lima, Peru",
      teaser: "Three towers by Robert A.M. Stern Architects. Proof of what Karen could do at the highest level—became the story we told Miami developers.",
      poster: pezetPoster
    },
    {
      slug: "saadiyat-music-festival",
      name: "Saadiyat Music Festival",
      location: "Abu Dhabi, UAE",
      teaser: "Jennifer Lopez, Christina Aguilera. The UAE partnership that happened because of content, not cold outreach.",
      poster: saadiyatHeroNew
    },
    {
      slug: "four-seasons-penthouse",
      name: "Four Seasons Penthouse",
      location: "Miami, Florida",
      teaser: "Four Seasons Residences, floor 66. A $13.5M home where lighting meets the standard the brand built globally—spaces that feel right at every hour, not just opening day.",
      poster: fourSeasonsHero
    },
    {
      slug: "porsche-flagship",
      name: "PORSCHE FLAGSHIP",
      location: "Lima, Perú",
      teaser: "Porsche Flagship Peru. Design approved by Porsche Germany. A project at that level doesn't happen without proven capability.",
      poster: porscheCover
    }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* Back Navigation */}
      <div className="px-10 md:px-20 py-6" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-70"
          style={{ color: '#FDFBF7' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* SECTION 1: HERO */}
      <section 
        className="relative flex items-center justify-center text-center"
        style={{
          height: '70vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl px-6 md:px-20">
          <p 
            className="mb-6"
            style={{ 
              fontSize: '12px',
              color: '#FDFBF7',
              opacity: 0.7,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            HIGH-END ARCHITECTURAL LIGHTING | LIMA, MIAMI, MADRID
          </p>
          <h1 
            className="font-bold"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: '#FDFBF7',
              lineHeight: 1.2,
              fontWeight: 700
            }}
          >
            When mastery doesn't travel
          </h1>
        </div>
        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FDFBF7' }} />
        </div>
      </section>

      {/* SECTION 2: CONTEXT BAR */}
      <section 
        className="py-16 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <p style={{ 
          fontSize: '12px',
          color: '#3D3835',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 500
        }}>
          Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Madrid
        </p>
      </section>

      {/* SECTION 3: OPENING NARRATIVE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[750px] mx-auto space-y-10">
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Karen Mannheim spent thirty years building TRAZZO in Peru. Lima's most respected lighting firm. Porsche showrooms, Maserati dealerships, Four Seasons penthouses. Over a thousand projects across Peru.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Her work was exceptional. Walk through a space she lit and you felt it. A wine cellar that felt intimate. A lobby that felt commanding. Bedrooms that helped you sleep.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            But in 2021, Karen wanted to expand to the US. She was ready for Miami. Ready for international projects. The expertise was there. The portfolio was there.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            What wasn't there: anyone outside Peru who knew her name.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            A thousand Instagram followers. No LinkedIn. No way to create belief with developers in Miami who'd never walked through her spaces. When Karen wasn't in the room, no one understood what thirty years of expertise looked like.
          </AnimatedParagraph>
        </div>
      </section>

      {/* SECTION 4: VISUAL DIVIDER */}
      <AnimatedDivider bgColor="#F5F1E8" />

      {/* SECTION 5: THE CHALLENGE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[900px] mx-auto">
          <div 
            className="inline-block mb-10"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.1)',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            <p style={{ 
              fontSize: '12px',
              color: '#FF2E63',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              The Challenge
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.2,
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Thirty years of work in Peru. Zero presence in Miami.
          </AnimatedHeader>
          
          <div className="space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Karen was opening TRAZZO's Miami office. But Miami developers didn't know her. Middle Eastern hospitality groups hadn't heard of her. She had no speaking opportunities. No partnerships outside Peru.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Her reputation was local. Her ambition was international.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The work spoke for itself—if you could see it. But you can't walk Miami developers through a Lima penthouse. You can't explain three decades of lighting expertise in an email.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Karen needed to build belief remotely. Not with renderings or sales decks. With a story that showed what she understood about light, materials, and how spaces make people feel.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We started working together the month she committed to US expansion.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 6: STRATEGIC GOALS */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[850px] mx-auto text-center">
          <p 
            className="mb-16"
            style={{ 
              fontSize: '16px',
              color: '#3D3835',
              opacity: 0.6,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            What We Needed to Solve
          </p>
          
          <div className="space-y-10">
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              Build Karen's presence in Florida from zero. Not a rebrand. Not a website refresh. A way to show Miami developers and international partners what thirty years in Peru had taught her.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              We needed to translate her local credibility into a story that worked in markets where no one knew TRAZZO existed.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              The goal: partnerships, speaking opportunities, high-end residential projects in Miami. Eventually, international work—Dubai, Spain, beyond.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR APPROACH HEADER */}
      <section 
        className="py-20 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[900px] mx-auto">
          <div 
            className="inline-block mb-10"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.1)',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            <p style={{ 
              fontSize: '12px',
              color: '#FF2E63',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              Our Approach
            </p>
          </div>
          
          <h2 
            className="mb-10 text-center italic"
            style={{ 
              fontSize: 'clamp(36px, 4.5vw, 48px)',
              lineHeight: 1.3,
              color: '#3D3835',
              fontWeight: 700,
              fontStyle: 'italic'
            }}
          >
            We didn't tell Karen's story. We helped her find her voice.
          </h2>
          
          <p 
            className="text-center"
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}
          >
            Weekly interviews starting in 2021. Not about past projects. About how Karen thinks. How she approaches lighting. Why she visits sites at different times of day. What luxury lighting actually requires.
          </p>
          
          <p 
            className="text-center"
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}
          >
            Every piece of content went through her. She marked up what felt wrong. What felt right. That feedback taught us how she wanted TRAZZO understood in new markets.
          </p>
        </div>
      </section>

      {/* SECTION 8: THE TRANSLATION (DROGA5-INSPIRED 3-COLUMN DESIGN) */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[1200px] mx-auto">
          
          {/* Section Number */}
          <div 
            className="inline-block mb-10"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.1)',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            <p style={{ 
              fontSize: '12px',
              color: '#FF2E63',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              02
            </p>
          </div>
          
          <h2 
            className="mb-8"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#3D3835',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            The translation
          </h2>
          
          <p 
            className="mb-20"
            style={{ 
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              lineHeight: 1.6,
              color: 'rgba(61, 56, 53, 0.85)',
              maxWidth: '700px'
            }}
          >
            We built her story around three things:
          </p>
          
          {/* 3-Column Pillars Grid */}
          <div className="pillars-grid mb-20">
            
            {/* Pillar 1: Technical Depth */}
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <h3 className="pillar-heading">Technical depth</h3>
              <p className="pillar-description">
                How light behaves on different materials. Thermal dynamics. Layering. 
                Why lighting a restaurant is different from lighting a residence.
              </p>
            </div>
            
            {/* Pillar 2: Cross-Cultural Fluency */}
            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3 className="pillar-heading">Cross-cultural fluency</h3>
              <p className="pillar-description">
                A Peruvian woman with German roots building a business in Miami. 
                Understanding that light "speaks" differently across cultures.
              </p>
            </div>
            
            {/* Pillar 3: Challenging Assumptions */}
            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3 className="pillar-heading">Challenging assumptions</h3>
              <p className="pillar-description">
                Why architects treat lighting as an afterthought. Why that's wrong. 
                What changes when you design spaces with light as architecture.
              </p>
            </div>
            
          </div>
          
          {/* Closing Statement */}
          <div className="max-w-[700px] mx-auto text-center space-y-6">
            <p style={{ 
              fontSize: 'clamp(19px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              The content wasn't promotional. It was Karen thinking out loud about 
              thirty years of craft.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(19px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              This built her presence in Florida. Then opened doors in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: PROOF SECTION - What This Looks Like */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <AnimatedHeader
            className="mb-20"
            style={{ 
              fontSize: '48px',
              fontWeight: 600,
              color: '#3D3835',
              lineHeight: 1.2,
              textAlign: 'left'
            }}
          >
            What this looks like.
          </AnimatedHeader>
          
          {/* Dual Platform Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
            
            {/* LinkedIn Card */}
            <div 
              className="transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(61,56,53,0.12)]"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                padding: '48px',
                borderRadius: '16px',
                border: '1px solid rgba(61, 56, 53, 0.08)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Platform Header */}
              <div 
                className="flex items-center gap-4 mb-8 pb-6"
                style={{ borderBottom: '1px solid rgba(61, 56, 53, 0.1)' }}
              >
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#0A66C2',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#3D3835',
                  margin: 0
                }}>
                  LinkedIn
                </h3>
              </div>
              
              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#0A66C2',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    +300%
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Growth
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#0A66C2',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    +4K
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Followers
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#0A66C2',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    +335K
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Annual Impressions
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#0A66C2',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    +68K
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Organic Reach / Year
                  </div>
                </div>
              </div>
              
              {/* Screenshots */}
              <div className="space-y-4">
                <img
                  src={linkedinPosts}
                  alt="LinkedIn post content examples"
                  className="w-full h-auto transition-all duration-[400ms] hover:scale-[1.02]"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(61, 56, 53, 0.1)',
                    boxShadow: '0 8px 32px rgba(61, 56, 53, 0.08)',
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <img
                  src={linkedinAnalytics}
                  alt="LinkedIn analytics dashboard showing 335K impressions"
                  className="w-full h-auto transition-all duration-[400ms] hover:scale-[1.02]"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(61, 56, 53, 0.1)',
                    boxShadow: '0 8px 32px rgba(61, 56, 53, 0.08)',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Instagram Card */}
            <div 
              className="transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(61,56,53,0.12)]"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                padding: '48px',
                borderRadius: '16px',
                border: '1px solid rgba(61, 56, 53, 0.08)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '200ms'
              }}
            >
              {/* Platform Header */}
              <div 
                className="flex items-center gap-4 mb-8 pb-6"
                style={{ borderBottom: '1px solid rgba(61, 56, 53, 0.1)' }}
              >
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#3D3835',
                  margin: 0
                }}>
                  Instagram
                </h3>
              </div>
              
              {/* Metrics Row */}
              <div className="flex gap-8 mb-8 flex-wrap">
                <div className="flex-1 min-w-[140px]">
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}>
                    400%
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Engagement
                  </div>
                </div>
                <div className="flex-1 min-w-[140px]">
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}>
                    8K
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Reach
                  </div>
                </div>
                <div className="flex-1 min-w-[140px]">
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}>
                    4mo
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(61, 56, 53, 0.65)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Timeline
                  </div>
                </div>
              </div>
              
              {/* Screenshots */}
              <div className="space-y-4">
                <img
                  src={instagramPosts}
                  alt="Instagram post content examples"
                  className="w-full h-auto transition-all duration-[400ms] hover:scale-[1.02]"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(61, 56, 53, 0.1)',
                    boxShadow: '0 8px 32px rgba(61, 56, 53, 0.08)',
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <img
                  src={instagramAnalytics}
                  alt="Instagram analytics dashboard showing engagement metrics"
                  className="w-full h-auto transition-all duration-[400ms] hover:scale-[1.02]"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(61, 56, 53, 0.1)',
                    boxShadow: '0 8px 32px rgba(61, 56, 53, 0.08)',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 10: PROJECT STORYTELLING */}
      <section 
        id="projects"
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="mb-6 text-center"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            The work that now travels
          </h2>
          
          <p 
            className="mb-20 text-center mx-auto"
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835',
              opacity: 0.85,
              maxWidth: '800px'
            }}
          >
            Each project shows how we turned thirty years of Peru expertise into stories that opened doors in Miami, the UAE, and beyond.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/karen-mannheim/${project.slug}`}
                className="group flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(61, 56, 53, 0.08)',
                  cursor: 'pointer'
                }}
              >
                {/* Vertical video cover */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    height: '400px',
                    backgroundColor: '#E8DED1'
                  }}
                >
                  <img
                    src={project.poster}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '9/16' }}
                  />
                  
                  {/* Play button overlay (static) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                    >
                      <div 
                        style={{ 
                          width: 0, 
                          height: 0, 
                          borderLeft: '14px solid #3D3835',
                          borderTop: '9px solid transparent',
                          borderBottom: '9px solid transparent',
                          marginLeft: '4px'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* View Project overlay (hover) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(61, 56, 53, 0.85)' }}
                  >
                    <span style={{ fontSize: '18px', color: '#FDFBF7', fontWeight: 600 }}>
                      View Project →
                    </span>
                  </div>
                </div>
                
                {/* Project info */}
                <div style={{ padding: '24px' }}>
                  <h3 
                    style={{ 
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#3D3835',
                      marginBottom: '8px'
                    }}
                  >
                    {project.name}
                  </h3>
                  
                  <p 
                    style={{ 
                      fontSize: '14px',
                      color: '#3D3835',
                      opacity: 0.6,
                      marginBottom: '16px'
                    }}
                  >
                    {project.location}
                  </p>
                  
                  <p 
                    style={{ 
                      fontSize: '16px',
                      lineHeight: 1.7,
                      color: '#3D3835',
                      opacity: 0.85
                    }}
                  >
                    {project.teaser}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* MORE COMING SOON SECTION */}
          <div 
            className="text-center mx-auto py-20"
            style={{
              maxWidth: '800px',
              backgroundColor: '#F5F1E8'
            }}
          >
            <h3 style={{ 
              fontSize: '20px',
              color: '#3D3835',
              marginBottom: '16px',
              fontWeight: 600
            }}>
              More stories coming soon
            </h3>
            
            <p style={{ 
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              We're crafting case studies from over 200 projects built with Karen—each one showing how mastery translates across markets. More stories publish as they're ready.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: VISUAL DIVIDER */}
      <div id="metrics"></div>
      <section 
        className="py-16 flex justify-center items-center gap-3"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      </section>

      {/* SECTION 11: WHAT TRAVELS NOW */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h2 
            className="mb-10 text-center"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            What travels now
          </h2>
          
          <p 
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(20px, 2.4vw, 24px)',
              lineHeight: 1.6,
              color: '#3D3835'
            }}
          >
            Three years later: belief that travels when Karen isn't in the room.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>20,000 followers</strong> where there had been silence
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>Florida presence</strong> built from zero—ten high-end Miami bids won
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>UAE partnership</strong> that started with content—Saadiyat Music Festival, Jennifer Lopez, Christina Aguilera
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>International expansion</strong> across three continents—Indonesia, Spain, Hawaii
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>Press</strong> that validates beyond Peru—Architectural Digest, Semana Económica
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>Speaking invitations</strong> at architecture conferences—not just local, across the Americas
              </p>
            </div>
          </div>
          
          <p 
            className="text-center max-w-[700px] mx-auto"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: '#3D3835'
            }}
          >
            She walks into rooms now where people already know her work, and her story. Miami developers. UAE & European partners.
          </p>
          
          <p 
            className="text-center max-w-[700px] mx-auto mt-6"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: '#3D3835'
            }}
          >
            The thirty years of expertise finally has a story that travels.
          </p>
        </div>
      </section>

      {/* SECTION 12: TESTIMONIAL QUOTE */}
      <section 
        className="py-32 md:py-40 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div 
          className="max-w-[900px] mx-auto p-12 md:p-14"
          style={{ 
            backgroundColor: '#FDFBF7',
            borderLeft: '4px solid #FF2E63',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(61, 56, 53, 0.08)'
          }}
        >
          <p 
            className="mb-6 italic"
            style={{ 
              fontSize: 'clamp(22px, 2.6vw, 26px)',
              lineHeight: 1.7,
              color: '#3D3835',
              fontStyle: 'italic'
            }}
          >
            "CRUDA helped us translate three decades of expertise into a story that works everywhere—from Lima to Miami to Dubai. The work was always exceptional. Now people outside Peru can see it."
          </p>
          <p style={{ 
            fontSize: '14px',
            color: '#3D3835',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            — Karen Mannheim
          </p>
        </div>
      </section>

      {/* SECTION 13: CTA */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 
            className="mb-10"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 40px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Want to build trust like Karen?
          </h2>
          <Link 
            to="/book-call"
            className="inline-block px-10 py-5 text-lg font-semibold transition-all duration-300"
            style={{ 
              backgroundColor: '#3D3835',
              color: '#FDFBF7',
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(61, 56, 53, 0.2)',
              fontSize: '18px',
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2A2725';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3D3835';
            }}
          >
            Start Your Story →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KarenMannheimCaseStudy;
