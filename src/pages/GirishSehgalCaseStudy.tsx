import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, Check } from "lucide-react";
import { AnimatedHeader } from "@/components/case-study/AnimatedHeader";
import { AnimatedParagraph } from "@/components/case-study/AnimatedParagraph";
import { AnimatedDivider } from "@/components/case-study/AnimatedDivider";
import heroImage from "@/assets/girish-sehgal.jpeg";
import girishLinkedin01 from "@/assets/girish-linkedin-01.png";
import girishLinkedin02 from "@/assets/girish-linkedin-02.png";
import girishLinkedin03 from "@/assets/girish-linkedin-03.png";
import girishLinkedin04 from "@/assets/girish-linkedin-04.png";
import girishLinkedin05 from "@/assets/girish-linkedin-05.png";
import girishLinkedin06 from "@/assets/girish-linkedin-06.png";

const GirishSehgalCaseStudy = () => {
  const navigate = useNavigate();

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
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="max-w-4xl px-6 md:px-20">
          <p 
            className="mb-6"
            style={{ 
              fontSize: '13px',
              color: '#FDFBF7',
              opacity: 0.7,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            HOSPITALITY LEADERSHIP • ABU DHABI
          </p>
          <h1 
            className="font-bold"
            style={{ 
              fontSize: 'clamp(40px, 5vw, 64px)',
              color: '#FDFBF7',
              lineHeight: 1.1,
              fontWeight: 700
            }}
          >
            When excellence doesn't travel
          </h1>
        </div>
        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FDFBF7' }} />
        </div>
      </section>

      {/* SECTION 2: THE SNAPSHOT */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Column - The Executive */}
            <div>
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                THE EXECUTIVE
              </p>
              <h2 
                className="mb-6"
                style={{ 
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  color: '#0A0A0A',
                  fontWeight: 600,
                  lineHeight: 1.2
                }}
              >
                Girish Sehgal
              </h2>
              <p 
                className="mb-4"
                style={{ 
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7
                }}
              >
                Chief Patient Experience Officer<br />
                SSMC, Abu Dhabi
              </p>
              <p 
                style={{ 
                  fontSize: '18px',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: 1.7
                }}
              >
                Four Seasons. Taj. JW Marriott. Grand Hyatt. Kempinski.<br />
                14 cities across 6 countries.
              </p>
            </div>
            
            {/* Right Column - The Challenge */}
            <div>
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                THE CHALLENGE
              </p>
              <AnimatedParagraph 
                className="mb-4"
                style={{ 
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7
                }}
              >
                Twenty-five years building cultures at Four Seasons, Taj, JW Marriott.
              </AnimatedParagraph>
              <AnimatedParagraph 
                className="mb-4"
                style={{ 
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7,
                  fontWeight: 600
                }}
              >
                Zero digital presence.
              </AnimatedParagraph>
              <AnimatedParagraph 
                style={{ 
                  fontSize: '18px',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: 1.7
                }}
              >
                The resume spoke for itself — to people who saw it. Most people never saw it.
              </AnimatedParagraph>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-BLEED IMAGE DIVIDER */}
      <AnimatedDivider bgColor="#FFFFFF" />

      {/* SECTION 4: THE STORY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[900px] mx-auto">
          <div 
            className="mb-12 pl-8"
            style={{ 
              borderLeft: '4px solid #FF2E63'
            }}
          >
            <p 
              className="italic"
              style={{ 
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                lineHeight: 1.4,
                color: '#0A0A0A',
                fontWeight: 500,
                fontStyle: 'italic'
              }}
            >
              "I've spent twenty-five years building cultures. The brands spoke for me. Now I need my own voice."
            </p>
          </div>

          <div className="space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              With over two decades across the world's most renowned hospitality brands, Girish Sehgal brings a rare blend of operational excellence, emotional intelligence, and people-first leadership to every role he takes on.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              Born in a small Himalayan town in India, Girish started his career with Kempinski at just 19. By 21, he was already on a fast-track leadership program. Since then, he has lived and worked in 14 cities across 6 countries, managing luxury properties for Four Seasons, Taj, JW Marriott, and more.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              But beyond the brands, what defines his legacy is his belief in whole-self performance. He has led iconic hotel turnarounds, designed award-winning customer experiences, and built internal cultures that prioritize mental wellbeing, empathy, and dignity — long before they became buzzwords.
            </AnimatedParagraph>

            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              Today, Girish leads Hospitality and Patient Experience at SSMC in Abu Dhabi, one of the largest medical cities in the region. His mission is clear: bring the mindset of world-class hospitality into healthcare — where kindness, calm, and presence aren't perks, but essential.
            </AnimatedParagraph>

            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              From luxury resorts to hospital corridors, Girish has always built places people want to stay in — and return to.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 5: FULL-BLEED IMAGE DIVIDER */}
      <section 
        className="w-full"
        style={{
          height: '60vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />

      {/* SECTION 6: THE TRANSLATION */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
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
              THE TRANSLATION
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#0A0A0A',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            From resume to reputation
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-20"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: 'rgba(10, 10, 10, 0.8)',
              maxWidth: '700px'
            }}
          >
            We built Girish's voice around five strategic pillars — each designed to translate twenty-five years of hospitality leadership into content that travels.
          </AnimatedParagraph>
          
          {/* 5-Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Pillar 1 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>01</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Build a founder-style voice
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Craft Girish's narrative as a values-led leader — one who bridges luxury hospitality with human-centered healthcare. Less 'titles and logos,' more 'beliefs and stories.'
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>02</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Shift perception
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Position him not just as someone who runs operations, but as someone who reshapes how people feel inside institutions — hotels or hospitals alike.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>03</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Anchor in emotion & philosophy
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Create emotionally resonant posts based on real stories, cultural nuance, and insights from his transition into healthcare.
              </p>
            </div>
            
            {/* Pillar 4 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>04</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Design a content system
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Use LinkedIn as the primary platform to consistently publish essays, attract leadership conversations, and build authority across hospitality and healthcare spaces.
              </p>
            </div>
            
            {/* Pillar 5 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>05</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Align voice with trust & humility
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Develop a narrative tone that feels calm, grounded, and wise — not promotional. This will earn respect from senior peers, not just digital followers.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 6.5: THE CONTENT THAT TRAVELS - LINKEDIN POSTS */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <AnimatedHeader
            className="mb-6"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#0A0A0A',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            The content that now travels
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-16"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 20px)',
              lineHeight: 1.8,
              color: 'rgba(10, 10, 10, 0.7)',
              maxWidth: '600px'
            }}
          >
            Each post shows how we turned twenty-five years of hospitality leadership into a voice that builds trust with healthcare executives, leadership platforms, and business media.
          </AnimatedParagraph>
          
          {/* LinkedIn Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: girishLinkedin01, title: "From Luxury Hotels to Healthcare", reactions: "263", comments: "32" },
              { image: girishLinkedin02, title: "Guest Experience Stories", reactions: "69", comments: "4" },
              { image: girishLinkedin03, title: "The Golden Rule Still Wins", reactions: "184", comments: "23" },
              { image: girishLinkedin04, title: "Not Every Star Player Needs to Sprint", reactions: "123", comments: "13" },
              { image: girishLinkedin05, title: "14 Cities, 6 Countries", reactions: "576", comments: "55" },
              { image: girishLinkedin06, title: "Split Rocks or Build Cathedrals", reactions: "209", comments: "17" }
            ].map((post, index) => (
              <div 
                key={index}
                className="transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(10, 10, 10, 0.06)'
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
                <div className="p-5">
                  <p 
                    style={{ 
                      fontSize: '14px',
                      color: 'rgba(10, 10, 10, 0.5)',
                      marginBottom: '4px'
                    }}
                  >
                    {post.reactions} reactions · {post.comments} comments
                  </p>
                  <a
                    href="https://www.linkedin.com/in/girishsehgal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-300 hover:underline"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#FF2E63'
                    }}
                  >
                    View on LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <AnimatedHeader
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 48px)',
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            What this looks like.
          </AnimatedHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Career Column */}
            <div 
              className="p-10"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <p 
                className="mb-8"
                style={{ 
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                CAREER
              </p>
              
              <div className="space-y-8">
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>#1 WORLDWIDE</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Condé Nast Traveller</p>
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>$24M YEAR 1</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>JW Marriott Pune</p>
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>14 CITIES</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>6 countries</p>
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>25+ YEARS</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Four Seasons, Taj, JW Marriott</p>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div 
              className="p-10"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <p 
                className="mb-8"
                style={{ 
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                CONTENT
              </p>
              
              <div className="space-y-8">
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>184 REACTIONS</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>First post</p>
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>23 COMMENTS</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Peer-level engagement</p>
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#FF2E63', fontWeight: 700 }}>EXECUTIVE VOICE</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FULL-BLEED IMAGE DIVIDER */}
      <section 
        className="w-full"
        style={{
          height: '50vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom'
        }}
      />

      {/* SECTION 9: WHAT TRAVELS NOW */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <AnimatedHeader
            className="mb-6"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#0A0A0A',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            What travels now
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-16"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: 'rgba(10, 10, 10, 0.7)',
              maxWidth: '600px'
            }}
          >
            A voice that builds trust with healthcare executives, leadership platforms, and business media.
          </AnimatedParagraph>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Executive voice established — calm, grounded, wise",
              "Visibility beyond hospitality circles into healthcare leadership",
              "Content system designed for strategic visibility",
              "Positioned as culture-builder, not just operator",
              "LinkedIn essays attracting peer-level engagement",
              "Foundation for speaking, advisory, board opportunities"
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 flex items-start gap-4"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px'
                }}
              >
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 46, 99, 0.1)' }}
                >
                  <Check className="w-4 h-4" style={{ color: '#FF2E63' }} />
                </div>
                <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#0A0A0A' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIAL */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[900px] mx-auto">
          <div 
            className="pl-8"
            style={{ 
              borderLeft: '4px solid #FF2E63'
            }}
          >
            <p 
              className="italic mb-8"
              style={{ 
                fontSize: 'clamp(24px, 3vw, 28px)',
                lineHeight: 1.5,
                color: '#0A0A0A',
                fontStyle: 'italic'
              }}
            >
              "CRUDA understood what I was trying to build — not just content, but a voice that reflects twenty-five years of creating cultures across the world's best hospitality brands. They helped me translate that into something that travels."
            </p>
            <p 
              style={{ 
                fontSize: '14px',
                color: 'rgba(10, 10, 10, 0.6)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              — GIRISH SEHGAL<br />
              <span style={{ fontWeight: 400 }}>Chief Patient Experience Officer, SSMC</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: CTA */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[800px] mx-auto">
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Want to build trust like Girish?
          </AnimatedHeader>
          
          <button
            onClick={() => navigate('/book-call')}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              borderRadius: '8px'
            }}
          >
            Start your story →
          </button>
        </div>
      </section>
    </div>
  );
};

export default GirishSehgalCaseStudy;
