import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedHeader } from "@/components/case-study/AnimatedHeader";
import { AnimatedParagraph } from "@/components/case-study/AnimatedParagraph";
import { AnimatedDivider } from "@/components/case-study/AnimatedDivider";
import heroImage from "@/assets/mike-kaeding.webp";
import mikeCarousel1 from "@/assets/mike-carousel-1.png";
import mikeCarousel2 from "@/assets/mike-carousel-2.png";
import mikeCarousel3 from "@/assets/mike-carousel-3.png";
import mikeCarousel4 from "@/assets/mike-carousel-4.png";
import mikeCarousel5 from "@/assets/mike-carousel-5.png";
import mikeCarousel6 from "@/assets/mike-carousel-6.png";
import mikeCarousel7 from "@/assets/mike-carousel-7.png";
import mikeCarousel8 from "@/assets/mike-carousel-8.png";
import mikeWork1 from "@/assets/mike-work-1.png";
import mikeWork2 from "@/assets/mike-work-2.png";
import mikeWork3 from "@/assets/mike-work-3.png";
import mikeWork4 from "@/assets/mike-work-4.png";
import mikeWork5 from "@/assets/mike-work-5.png";
import mikeWork6 from "@/assets/mike-work-6.png";
import mikeWork7 from "@/assets/mike-work-7.png";
import mikeWork8 from "@/assets/mike-work-8.png";
import mikeWork9 from "@/assets/mike-work-9.png";

const MikeKaedingCaseStudy = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    { image: mikeCarousel1, caption: "The inheritance — Mike took over Norhart after his father's unexpected passing. Leadership wasn't a choice—it was a calling." },
    { image: mikeCarousel2, caption: "Building at scale — 1,000+ units delivered. $230M in assets. The largest residential project in Minneapolis history." },
    { image: mikeCarousel3, caption: "Systems thinking — Why construction costs too much. How modular building changes the equation." },
    { image: mikeCarousel4, caption: "Weekly discipline — 85+ posts. 20 months. No gaps. Every piece built to connect, not impress." },
    { image: mikeCarousel5, caption: "The human side — Conversations with his daughters. Lessons from his wife. Leadership learned at home." },
    { image: mikeCarousel6, caption: "Industry voice — Speaking on housing policy, construction efficiency, and what builders should be doing differently." },
    { image: mikeCarousel7, caption: "Behind the scenes — Workforce training. Onshoring. The operational systems that back up the mission." },
    { image: mikeCarousel8, caption: "One voice, many channels — Content that travels from LinkedIn to keynotes, investor decks, and policy submissions." }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const projects: any[] = [];

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
            CEO, NORHART • MINNEAPOLIS • 20+ YEARS IN CONSTRUCTION
          </p>
          <h1 
            className="font-bold"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 72px)',
              color: '#FDFBF7',
              lineHeight: 1.1,
              fontWeight: 700
            }}
          >
            Mike Kaeding
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
          fontSize: '18px',
          color: '#3D3835',
          lineHeight: 1.8,
          fontWeight: 400
        }}>
          CEO, Norhart • Minneapolis • 20+ years in construction
        </p>
      </section>

      {/* SECTION 3: OPENING NARRATIVE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
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
                fontSize: 'clamp(32px, 4vw, 40px)',
                lineHeight: 1.4,
                color: '#3D3835',
                fontWeight: 500,
                fontStyle: 'italic'
              }}
            >
              "I inherited a company I never asked to run. My father died. I became CEO overnight. But having a story to tell? That came later."
            </p>
          </div>

          <div className="space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              Mike Kaeding runs Norhart, a residential construction company in Minnesota. He didn't choose to lead it—his father's unexpected death put him there. What he did next matters more: he turned a family business into the kind of company that builds the largest residential project in Minneapolis history. A $100 million building. Over 1,000 units delivered. $230M in assets.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              But none of that showed up online. Mike is a software engineer by training, a builder by conviction. He had a mission—cut construction costs in half to solve America's housing crisis—but no system to make that mission travel. His posts were technical. Intermittent. Impersonal. The work was loud. The story was quiet.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              The risk wasn't failure. It was invisibility. Being the best-kept secret in an industry that desperately needs what he's building.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 4: VISUAL DIVIDER */}
      <AnimatedDivider bgColor="#F5F1E8" />


      {/* SECTION 8: THE TRANSLATION */}
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
          
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#3D3835',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            The translation
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-20"
            style={{ 
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              lineHeight: 1.8,
              color: 'rgba(61, 56, 53, 0.85)',
              maxWidth: '700px'
            }}
          >
            We built Mike's story around three things: the personal arc that got him here, the operational clarity that sets him apart, and the industry challenge he's solving.
          </AnimatedParagraph>
          
          {/* 3-Column Pillars Grid */}
          <div className="pillars-grid mb-20">
            
            {/* Pillar 1: From Son to CEO */}
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <h3 className="pillar-heading">From Son to CEO</h3>
              <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: '#3D3835' }}>The inheritance</h4>
              <p className="pillar-description">
                Mike didn't choose leadership. It chose him. His father's death forced a decision: walk away or step up. We told that story—not as tragedy, but as transformation. From fear to vision. From obligation to legacy.
              </p>
            </div>
            
            {/* Pillar 2: Builder with systems thinking */}
            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3 className="pillar-heading">Builder with systems thinking</h3>
              <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: '#3D3835' }}>Efficiency as philosophy</h4>
              <p className="pillar-description">
                Most construction CEOs talk about growth. Mike talks about waste. Why residential construction is broken. How regulation inflates costs. Why modular matters. He's an engineer who thinks like an operator—and we made sure every piece of content reflected that clarity.
              </p>
            </div>
            
            {/* Pillar 3: The mission behind the work */}
            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3 className="pillar-heading">The mission behind the work</h3>
              <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: '#3D3835' }}>Housing crisis, real solutions</h4>
              <p className="pillar-description">
                Norhart isn't building apartments. They're building a case for why construction needs to cost less. We positioned Mike not as a developer, but as someone challenging an entire industry to do better. Onshoring. Automation. Policy. The stuff that actually moves the needle.
              </p>
            </div>
            
          </div>
          
          {/* Closing Statement */}
          <div className="max-w-[700px] mx-auto text-center space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(19px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              This gave Mike something most CEOs don't have: a narrative system. Not just posts—but a repeatable way to turn leadership into content that builds trust and travels beyond LinkedIn.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 9: VISUAL STORY - IMAGE CAROUSEL */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[1200px] mx-auto">
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
              02.5
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-16"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#3D3835',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Visual story
          </AnimatedHeader>

          {/* Carousel */}
          <div className="relative">
            <div 
              className="w-full rounded-lg overflow-hidden"
              style={{
                aspectRatio: '16/9',
                backgroundColor: 'rgba(61, 56, 53, 0.1)'
              }}
            >
              <img 
                src={carouselSlides[currentSlide].image}
                alt={carouselSlides[currentSlide].caption}
                className="w-full h-full object-cover"
              />
              
              {/* Caption overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(61, 56, 53, 0.9), transparent)'
                }}
              >
                <p style={{ 
                  fontSize: '16px', 
                  color: '#FDFBF7', 
                  lineHeight: 1.6 
                }}>
                  {carouselSlides[currentSlide].caption}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all"
              style={{
                backgroundColor: 'rgba(253, 251, 247, 0.9)',
                color: '#3D3835'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FDFBF7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(253, 251, 247, 0.9)';
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all"
              style={{
                backgroundColor: 'rgba(253, 251, 247, 0.9)',
                color: '#3D3835'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FDFBF7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(253, 251, 247, 0.9)';
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="rounded-full transition-all"
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: currentSlide === index ? '#3D3835' : 'rgba(61, 56, 53, 0.3)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: VISUAL DIVIDER */}
      <AnimatedDivider bgColor="#E8DED1" />

      {/* SECTION 11: THE WORK THAT TRAVELS */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
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
              03
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-16"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#3D3835',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            The work that travels
          </AnimatedHeader>
          
          {/* LinkedIn Posts Grid - 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {/* Post 1 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork1} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/posts/mikekaeding_im-part-of-an-organization-with-over-34000-activity-7254885302115188737-NmoZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABtt_60BmHm9_OshYxw31f7U3MAGs5ZcXPc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 2 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork2} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7140732854015041536?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7140732854015041536%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork3} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/posts/mikekaeding_propertymanagement-breakingbarriers-womeninconstruction-activity-7135704576980094976-LyNU?utm_source=share&utm_medium=member_desktop&rcm=ACoAABtt_60BmHm9_OshYxw31f7U3MAGs5ZcXPc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 4 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork4} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 5 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork5} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/posts/mikekaeding_oakdale-realestate-residentialconstruction-activity-7107036479498973184-rYuu?utm_source=share&utm_medium=member_desktop&rcm=ACoAABtt_60BmHm9_OshYxw31f7U3MAGs5ZcXPc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 6 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork6} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7122034472371318784?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7122034472371318784%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 7 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork7} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7128031329488670721?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7128031329488670721%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 8 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork8} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7095028555071311872?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7095028555071311872%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>

            {/* Post 9 */}
            <div className="flex flex-col items-center">
              <div 
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(61, 56, 53, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 56, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(61, 56, 53, 0.1)';
                }}
              >
                <img src={mikeWork9} alt="LinkedIn Post" className="w-full h-auto" />
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7092961366071787521?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7092961366071787521%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF2E63',
                  backgroundColor: 'transparent',
                  border: '1px solid #FF2E63',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FF2E63';
                }}
              >
                Read on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: WHAT THIS LOOKS LIKE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
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
              04
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-16"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#3D3835',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            What this looks like
          </AnimatedHeader>

          {/* Two Metric Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LinkedIn Metrics Card */}
            <div 
              className="p-12"
              style={{
                backgroundColor: '#4A90E2',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(61, 56, 53, 0.08)'
              }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: '#FFFFFF', lineHeight: 1.3 }}>
                Consistent voice, consistent presence
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#FFFFFF' }}>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• 85+ posts published</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• 20+ months without missing a week</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• Average 300 words per post</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• Zero generic content</li>
              </ul>
            </div>

            {/* Content Impact Card */}
            <div 
              className="p-12"
              style={{
                backgroundColor: '#E8DED1',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(61, 56, 53, 0.08)'
              }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: '#3D3835', lineHeight: 1.3 }}>
                Material reused across channels
              </h3>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(61, 56, 53, 0.85)', marginBottom: '16px' }}>
                Content that started on LinkedIn ended up in:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(61, 56, 53, 0.85)' }}>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Keynote presentations</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Internal newsletters</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Investor decks</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Media interviews</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Policy submissions</li>
              </ul>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(61, 56, 53, 0.85)', marginTop: '16px', fontWeight: 600 }}>
                One system. Multiple outputs.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 13: THE IMPACT */}
      <section 
        className="py-32 md:py-40 px-10 md:px-20"
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div 
            className="inline-block mb-10"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.2)',
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
              05
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-16"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#FDFBF7',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            The impact
          </AnimatedHeader>

          {/* Testimonial Quote */}
          <div 
            className="mb-20 p-12 md:p-14"
            style={{ 
              backgroundColor: 'rgba(253, 251, 247, 0.05)',
              borderLeft: '4px solid #FF2E63',
              borderRadius: '8px'
            }}
          >
            <p 
              className="mb-4"
              style={{ 
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                lineHeight: 1.4,
                color: '#FDFBF7',
                fontWeight: 500
              }}
            >
              "CRUDA gave me something I didn't know I was missing—a system to turn what I do every day into a story that actually travels. I don't sound like every other CEO anymore. I sound like me."
            </p>
            <p style={{ 
              fontSize: '18px',
              color: 'rgba(253, 251, 247, 0.7)',
              fontWeight: 400
            }}>
              — Mike Kaeding
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p style={{ fontSize: 'clamp(48px, 6vw, 56px)', fontWeight: 700, color: '#FDFBF7', lineHeight: 1.1, marginBottom: '8px' }}>
                85+
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(253, 251, 247, 0.7)' }}>
                Posts published (20+ months)
              </p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(48px, 6vw, 56px)', fontWeight: 700, color: '#FDFBF7', lineHeight: 1.1, marginBottom: '8px' }}>
                20
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(253, 251, 247, 0.7)' }}>
                Months of weekly publishing
              </p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(48px, 6vw, 56px)', fontWeight: 700, color: '#FDFBF7', lineHeight: 1.1, marginBottom: '8px' }}>
                1
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(253, 251, 247, 0.7)' }}>
                Voice that cuts through
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: CTA */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
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
            Ready to tell your story?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Work with us
            </Link>
            <Link 
              to="/clients/karen-mannheim"
              className="inline-block px-10 py-5 text-lg font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: 'transparent',
                color: '#3D3835',
                borderRadius: '8px',
                border: '2px solid #3D3835',
                fontSize: '18px',
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3D3835';
                e.currentTarget.style.color = '#FDFBF7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#3D3835';
              }}
            >
              Next case study → Karen Mannheim
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MikeKaedingCaseStudy;