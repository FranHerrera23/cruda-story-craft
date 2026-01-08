import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import mikeHero from "@/assets/mike-kaeding.webp";
import mikeWork1 from "@/assets/mike-work-1.png";
import mikeWork2 from "@/assets/mike-work-2.png";
import mikeWork3 from "@/assets/mike-work-3.png";
import mikeWork4 from "@/assets/mike-work-4.png";
import mikeWork5 from "@/assets/mike-work-5.png";
import mikeWork6 from "@/assets/mike-work-6.png";
import mikeCarousel1 from "@/assets/mike-carousel-1.png";
import mikeCarousel3 from "@/assets/mike-carousel-3.png";
import mikeCarousel5 from "@/assets/mike-carousel-5.png";
import mikeCbsNews from "@/assets/mike-cbs-news.png";
import mikePress1 from "@/assets/mike-press-1.png";
import mikePress2 from "@/assets/mike-press-2.png";
import mikePress3 from "@/assets/mike-press-3.png";
import mikePress4 from "@/assets/mike-press-4.png";
import mikePress5 from "@/assets/mike-press-5.png";

const linkedInPosts = [
  {
    preview: "I'm part of an organization with over 34,000 CEOs and multimillion-dollar business owners across 130 countries: I haven't met a single one in their 20s.",
    image: mikeWork1,
    engagement: "106 reactions • 12 comments • 2 reposts",
    url: "https://www.linkedin.com/posts/mikekaeding_im-part-of-an-organization-with-over-34000-activity-7254885302115188737-NmoZ"
  },
  {
    preview: 'Today, I started applying the "The 5 AM Club" formula to become as successful as those big-shot CEOs...',
    image: mikeWork2,
    engagement: "297 reactions • 52 comments • 6 reposts",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7140732854015041536"
  },
  {
    preview: '"Women are not meant for construction," I heard back then from a guy who used to help my dad and me on some projects.',
    image: mikeWork3,
    engagement: "50 reactions • 12 comments • 2 reposts",
    url: "https://www.linkedin.com/posts/mikekaeding_propertymanagement-breakingbarriers-womeninconstruction-activity-7135704576980094976-LyNU"
  },
  {
    preview: "He isn't your typical executive; He doesn't hide behind a glossy title or a corner office.",
    image: mikeWork4,
    engagement: "103 reactions • 30 comments • 2 reposts",
    url: "#"
  },
  {
    preview: "We are building a $100,000,000 project. We are transforming neighbourhoods into communities. We are building better communities for hundreds of residents.",
    image: mikeWork5,
    engagement: "",
    url: "https://www.linkedin.com/posts/mikekaeding_oakdale-realestate-residentialconstruction-activity-7107036479498973184-rYuu"
  },
  {
    preview: "Want to lower your rent? Here are a few tips I gave during my interview with ABC in Los Angeles.",
    image: mikeWork6,
    engagement: "25 reactions • 4 comments",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7122034472371318784"
  }
];

const pressItems = [
  {
    outlet: "CBS News",
    title: "Minneapolis CEO's mission to cut construction costs in half",
    image: mikeCbsNews,
    url: "https://www.cbsnews.com/minnesota/news/twin-cities-apartments-price-gap/"
  },
  {
    outlet: "CBS News",
    title: "Did you know you can negotiate a lower monthly rent?",
    image: mikePress1,
    url: "https://www.cbsnews.com/minnesota/news/with-rent-prices-surging-did-you-know-you-can-negotiate-a-lower-monthly-cost/"
  },
  {
    outlet: "CBS News",
    title: "Minneapolis rent vs home ownership cost gap",
    image: mikePress2,
    url: "https://www.cbsnews.com/minnesota/news/minneapolis-rent-home-ownership-cost-gap/"
  },
  {
    outlet: "Finance & Commerce",
    title: "Share of Lexington Lofts apartment complex sells for $44.6M",
    image: mikePress3,
    url: "https://finance-commerce.com/2024/07/share-of-lexington-lofts-apartment-complex-sells-for-44-6m/"
  },
  {
    outlet: "ABC7",
    title: "Renters: Hidden fees and saving money on your rental lease",
    image: mikePress4,
    url: "https://abc7.com/post/renters-hidden-fees-saving-money-rental-lease/13523041/"
  }
];

const MikeKaedingCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Back Navigation */}
      <div className="px-6 md:px-20 py-6" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-70"
          style={{ color: '#FFFFFF' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* =========================================
          SECTION 1: HERO
          100vh, full-bleed image + name ONLY
      ========================================= */}
      <section 
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mikeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <p 
          className="mb-8"
          style={{ 
            fontSize: '13px',
            color: '#FFFFFF',
            opacity: 0.8,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          CONSTRUCTION INNOVATION • MINNEAPOLIS
        </p>
        <h1 
          style={{ 
            fontSize: 'clamp(48px, 6vw, 72px)',
            color: '#FFFFFF',
            lineHeight: 1.0,
            fontWeight: 600,
            letterSpacing: '-0.03em',
            margin: 0
          }}
        >
          Mike Kaeding
        </h1>
        <div className="absolute bottom-10">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FFFFFF' }} />
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE SNAPSHOT
          Two columns — white background
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left Column — THE CLIENT */}
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
                The Client
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Mike Kaeding<br />
                  CEO, Norhart<br />
                  Minneapolis, Minnesota
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Software engineer by training. Builder by conviction.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Twenty years in construction. Largest residential project in Minneapolis history—a $100 million building, over 1,000 units delivered, $230M in assets.
                </p>
              </div>
            </div>
            
            {/* Right Column — THE CHALLENGE */}
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
                The Challenge
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Mission clear: cut construction costs in half to solve America's housing crisis.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Zero online presence to make that mission travel.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Technical posts. Intermittent. Impersonal. The work was loud. The story was quiet. Being the best-kept secret in an industry that desperately needs what he's building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: FULL-BLEED IMAGE DIVIDER #1
      ========================================= */}
      <section 
        className="w-full hidden md:block"
        style={{ 
          height: '60vh',
          backgroundImage: `url(${mikeCarousel1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />
      <section 
        className="w-full md:hidden"
        style={{ 
          height: '50vh',
          backgroundImage: `url(${mikeCarousel1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />

      {/* =========================================
          SECTION 4: THE CHALLENGE EXPANDED
          White, prose with pull quote
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[900px] mx-auto">
          <p 
            className="mb-8"
            style={{ 
              fontSize: '13px',
              color: '#FF2E63',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            The Challenge
          </p>

          {/* Pull Quote */}
          <blockquote 
            className="mb-12"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: '#0A0A0A',
              borderLeft: '4px solid #FF2E63',
              paddingLeft: '32px'
            }}
          >
            "I inherited a company I never asked to run. My father died. I became CEO overnight. But having a story to tell? That came later."
          </blockquote>

          {/* Body Paragraphs */}
          <div className="space-y-6">
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
              Mike Kaeding runs Norhart, a residential construction company in Minnesota. He didn't choose to lead it—his father's unexpected death put him there. What he did next matters more: he turned a family business into the kind of company that builds the largest residential project in Minneapolis history. A $100 million building. Over 1,000 units delivered. $230M in assets.
            </p>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
              But none of that showed up online. Mike is a software engineer by training, a builder by conviction. He had a mission—cut construction costs in half to solve America's housing crisis—but no system to make that mission travel. His posts were technical. Intermittent. Impersonal. The work was loud. The story was quiet.
            </p>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
              The risk wasn't failure. It was invisibility. Being the best-kept secret in an industry that desperately needs what he's building.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: FULL-BLEED IMAGE DIVIDER #2
      ========================================= */}
      <section 
        className="w-full hidden md:block"
        style={{ 
          height: '60vh',
          backgroundImage: `url(${mikeCarousel3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <section 
        className="w-full md:hidden"
        style={{ 
          height: '50vh',
          backgroundImage: `url(${mikeCarousel3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* =========================================
          SECTION 6: THE TRANSLATION
          Cream background, three pillar cards
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
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
            The Translation
          </p>

          <p 
            className="mb-12"
            style={{ 
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              lineHeight: 1.6,
              color: '#0A0A0A'
            }}
          >
            We built Mike's story around three things: the personal arc that got him here, the operational clarity that sets him apart, and the industry challenge he's solving.
          </p>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div 
              style={{ 
                backgroundColor: '#FFFFFF',
                padding: '40px',
                borderRadius: '4px'
              }}
            >
              <p style={{ fontSize: '13px', color: '#FF2E63', fontWeight: 600, marginBottom: '16px' }}>01</p>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0A0A0A', marginBottom: '12px' }}>
                From Son to CEO
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(10,10,10,0.7)' }}>
                Mike didn't choose leadership. It chose him. His father's death forced a decision: walk away or step up. We told that story—not as tragedy, but as transformation. From fear to vision.
              </p>
            </div>

            <div 
              style={{ 
                backgroundColor: '#FFFFFF',
                padding: '40px',
                borderRadius: '4px'
              }}
            >
              <p style={{ fontSize: '13px', color: '#FF2E63', fontWeight: 600, marginBottom: '16px' }}>02</p>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0A0A0A', marginBottom: '12px' }}>
                Builder with systems thinking
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(10,10,10,0.7)' }}>
                Most construction CEOs talk about growth. Mike talks about waste. Why residential construction is broken. How regulation inflates costs. Why reducing waste solves more than building faster. He's an engineer solving systems problems.
              </p>
            </div>

            <div 
              style={{ 
                backgroundColor: '#FFFFFF',
                padding: '40px',
                borderRadius: '4px'
              }}
            >
              <p style={{ fontSize: '13px', color: '#FF2E63', fontWeight: 600, marginBottom: '16px' }}>03</p>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0A0A0A', marginBottom: '12px' }}>
                The mission behind the work
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(10,10,10,0.7)' }}>
                Norhart isn't building apartments. They're building a case for why construction needs to cost less. We positioned Mike not as a developer, but as someone challenging an entire industry's assumptions about what's possible.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '20px', lineHeight: 1.7, color: 'rgba(10,10,10,0.7)', maxWidth: '700px' }}>
            This gave Mike something most CEOs don't have: a narrative system. Not just posts—but a repeatable way to turn leadership into content that builds trust and travels beyond LinkedIn.
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 7: FULL-BLEED IMAGE DIVIDER #3
      ========================================= */}
      <section 
        className="w-full hidden md:block"
        style={{ 
          height: '60vh',
          backgroundImage: `url(${mikeCarousel5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <section 
        className="w-full md:hidden"
        style={{ 
          height: '50vh',
          backgroundImage: `url(${mikeCarousel5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* =========================================
          SECTION 8: THE WORK THAT TRAVELS
          Cream, LinkedIn cards grid
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
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
            03
          </p>

          <h2 
            className="mb-6"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            The work that travels
          </h2>

          <p 
            className="mb-16"
            style={{ 
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.6)',
              maxWidth: '600px'
            }}
          >
            Each post turned twenty years of construction expertise into stories that opened conversations with policy makers, industry leaders, and media.
          </p>

          {/* LinkedIn Post Cards Grid */}
          <div 
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
          >
            {linkedInPosts.map((post, index) => (
              <a 
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 block"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  textDecoration: 'none',
                  pointerEvents: post.url === '#' ? 'none' : 'auto'
                }}
              >
                <img 
                  src={post.image} 
                  alt={`LinkedIn post ${index + 1}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <div style={{ padding: '24px' }}>
                  <p style={{ 
                    fontSize: '16px', 
                    lineHeight: 1.6, 
                    color: '#0A0A0A',
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.preview}
                  </p>
                  <p style={{ 
                    fontSize: '13px', 
                    color: 'rgba(10,10,10,0.5)'
                  }}>
                    {post.engagement}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 9: PRESS
          Cream, press cards grid
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
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
            04
          </p>

          <h2 
            className="mb-16"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            Press
          </h2>

          <div 
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
          >
            {pressItems.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 block"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  textDecoration: 'none'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.outlet}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <div style={{ padding: '24px' }}>
                  <p style={{ 
                    fontSize: '12px', 
                    color: '#FF2E63',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    {item.outlet}
                  </p>
                  <p style={{ 
                    fontSize: '18px', 
                    lineHeight: 1.5, 
                    color: '#0A0A0A',
                    fontWeight: 500
                  }}>
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 10: WHAT THIS LOOKS LIKE (METRICS)
          Dark #0A0A0A, two-column cards
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h2 
            className="mb-16"
            style={{ 
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.2
            }}
          >
            What this looks like.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Card - Blue */}
            <div 
              style={{ 
                backgroundColor: '#4A90E2',
                padding: '60px',
                borderRadius: '8px'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '32px' }}>
                Consistent voice, consistent presence
              </h3>
              <div className="space-y-4">
                <p style={{ fontSize: '18px', color: '#FFFFFF' }}>• 85+ posts published</p>
                <p style={{ fontSize: '18px', color: '#FFFFFF' }}>• 20+ months without missing a week</p>
                <p style={{ fontSize: '18px', color: '#FFFFFF' }}>• Average 300 words per post</p>
                <p style={{ fontSize: '18px', color: '#FFFFFF' }}>• Zero generic content</p>
              </div>
            </div>

            {/* Right Card - Cream */}
            <div 
              style={{ 
                backgroundColor: '#E0D5C7',
                padding: '60px',
                borderRadius: '8px'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#0A0A0A', marginBottom: '32px' }}>
                Material reused across channels
              </h3>
              <p style={{ fontSize: '18px', color: '#0A0A0A', marginBottom: '24px' }}>
                Content that started on LinkedIn ended up in:
              </p>
              <div className="space-y-3">
                <p style={{ fontSize: '18px', color: '#0A0A0A' }}>• Keynote presentations</p>
                <p style={{ fontSize: '18px', color: '#0A0A0A' }}>• Internal newsletters</p>
                <p style={{ fontSize: '18px', color: '#0A0A0A' }}>• Investor decks</p>
                <p style={{ fontSize: '18px', color: '#0A0A0A' }}>• Media interviews</p>
                <p style={{ fontSize: '18px', color: '#0A0A0A' }}>• Policy submissions</p>
              </div>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#0A0A0A', marginTop: '24px' }}>
                One system. Multiple outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 11: THE IMPACT (TESTIMONIAL)
          Lighter dark (#3A3A3A), quote + stats
      ========================================= */}
      <section 
        className="py-24 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#3A3A3A' }}
      >
        <div className="max-w-[1000px] mx-auto">
          {/* Testimonial Quote */}
          <blockquote 
            className="mb-8"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 36px)',
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: '#FFFFFF',
              borderLeft: '4px solid #FF2E63',
              paddingLeft: '32px'
            }}
          >
            "CRUDA gave me something I didn't know I was missing—a system to turn what I do every day into a story that actually travels. I don't sound like every other CEO anymore. I sound like me."
          </blockquote>

          <p 
            className="mb-20"
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              paddingLeft: '32px'
            }}
          >
            — Mike Kaeding<br />
            CEO, NORHART
          </p>

          {/* Three Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p style={{
                fontSize: 'clamp(48px, 5vw, 64px)',
                fontWeight: 700,
                color: '#FF2E63',
                lineHeight: 1.1,
                marginBottom: '12px'
              }}>
                85+
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                Posts published (20+ months)
              </p>
            </div>

            <div>
              <p style={{
                fontSize: 'clamp(48px, 5vw, 64px)',
                fontWeight: 700,
                color: '#FF2E63',
                lineHeight: 1.1,
                marginBottom: '12px'
              }}>
                20
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                Months of weekly publishing
              </p>
            </div>

            <div>
              <p style={{
                fontSize: 'clamp(48px, 5vw, 64px)',
                fontWeight: 700,
                color: '#FF2E63',
                lineHeight: 1.1,
                marginBottom: '12px'
              }}>
                1
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                Voice that cuts through
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 12: CTA
      ========================================= */}
      <section 
        className="py-20 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#3A3A3A' }}
      >
        <Link
          to="/book-call"
          className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
          style={{
            fontSize: '16px',
            fontWeight: 600,
            padding: '20px 56px',
            borderRadius: '4px',
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            textDecoration: 'none'
          }}
        >
          Start a Conversation
        </Link>
      </section>
    </div>
  );
};

export default MikeKaedingCaseStudy;
