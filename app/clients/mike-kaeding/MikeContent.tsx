'use client';

import Link from 'next/link';
import { ClientPageTemplate } from '@/components/ClientPageTemplate';
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
  return (
    <ClientPageTemplate
      heroImage={mikeHero.src}
      heroImagePosition="center 35%"
      heroKicker="CONSTRUCTION INNOVATION • MINNEAPOLIS"
      heroHeadline="Mike Kaeding"

      clientName="Mike Kaeding"
      clientTitle="CEO, Norhart"
      clientLocation="Minneapolis, Minnesota"
      clientDescription={[
        "Software engineer by training. Builder by conviction.",
        "Twenty years in construction. Largest residential project in Minneapolis history — a $100 million building, over 1,000 units delivered, $230M in assets."
      ]}
      challengeHeadline="Mission clear: cut construction costs in half to solve America's housing crisis."
      challengeDescription={[
        "Zero online presence to make that mission travel.",
        "Technical posts. Intermittent. Impersonal. The work was loud. The story was quiet. Being the best-kept secret in an industry that desperately needs what he's building."
      ]}

      storyQuote="I inherited a company I never asked to run. My father died. I became CEO overnight. But having a story to tell? That came later."
      storyContent={[
        "Mike Kaeding runs Norhart, a residential construction company in Minnesota. He didn't choose to lead it — his father's unexpected death put him there. What he did next matters more: he turned a family business into the kind of company that builds the largest residential project in Minneapolis history. A $100 million building. Over 1,000 units delivered. $230M in assets.",
        "But none of that showed up online. Mike is a software engineer by training, a builder by conviction. He had a mission — cut construction costs in half to solve America's housing crisis — but no system to make that mission travel. His posts were technical. Intermittent. Impersonal. The work was loud. The story was quiet.",
        "The risk wasn't failure. It was invisibility. Being the best-kept secret in an industry that desperately needs what he's building."
      ]}

      translationHeadline="From tragedy to mission"
      translationDescription="We built Mike's story around three things: the personal arc that got him here, the operational clarity that sets him apart, and the industry challenge he's solving."
      translationPillars={[
        {
          number: "01",
          title: "From Son to CEO",
          description: "Mike didn't choose leadership. It chose him. His father's death forced a decision: walk away or step up. We told that story — not as tragedy, but as transformation. From fear to vision."
        },
        {
          number: "02",
          title: "Builder with systems thinking",
          description: "Most construction CEOs talk about growth. Mike talks about waste. Why residential construction is broken. How regulation inflates costs. Why reducing waste solves more than building faster. He's an engineer solving systems problems."
        },
        {
          number: "03",
          title: "The mission behind the work",
          description: "Norhart isn't building apartments. They're building a case for why construction needs to cost less. We positioned Mike not as a developer, but as someone challenging an entire industry's assumptions about what's possible."
        }
      ]}

      workSectionTitle="The work that travels"
      workSectionDescription="Each post turned twenty years of construction expertise into stories that opened conversations with policy makers, industry leaders, and media."
      workContent={
        <>
          <div
            className="grid gap-6 mb-16"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
          >
            {linkedInPosts.map((post, index) => (
              <Link
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(10, 10, 10, 0.1)',
                  borderRadius: '0',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  textDecoration: 'none',
                  pointerEvents: post.url === '#' ? 'none' : 'auto',
                  cursor: post.url === '#' ? 'default' : 'pointer'
                }}
              >
                <img
                  src={post.image.src}
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
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <h3
              className="mb-8"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 600,
                color: '#0A0A0A',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              Press
            </h3>

            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
            >
              {pressItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 block"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.1)',
                    borderRadius: '0',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    textDecoration: 'none'
                  }}
                >
                  <img
                    src={item.image.src}
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
                </Link>
              ))}
            </div>
          </div>
        </>
      }

      metricsHeadline="What this looks like."
      metricsCards={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '48px',
              borderRadius: '0',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '32px' }}>
              Consistent voice, consistent presence
            </h3>
            <div className="space-y-4">
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• 85+ posts published</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• 20+ months without missing a week</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Average 300 words per post</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Zero generic content</p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '48px',
              borderRadius: '0',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '32px' }}>
              Material reused across channels
            </h3>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '24px' }}>
              Content that started on LinkedIn ended up in:
            </p>
            <div className="space-y-3">
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Keynote presentations</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Internal newsletters</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Investor decks</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Media interviews</p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>• Policy submissions</p>
            </div>
            <p style={{ fontSize: '18px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)', marginTop: '24px' }}>
              One system. Multiple outputs.
            </p>
          </div>
        </div>
      }

      testimonialQuote="CRUDA gave me something I didn't know I was missing — a system to turn what I do every day into a story that actually travels. I don't sound like every other CEO anymore. I sound like me."
      testimonialAuthor="Mike Kaeding"
      testimonialTitle="CEO, Norhart"

      ctaHeadline="Want to build trust like Mike?"
      ctaButtonText="Start a Conversation →"
      ctaButtonLink="/contact"

      dividerImages={[
        { src: mikeCarousel1.src, position: 'center 30%' },
        { src: mikeCarousel3.src, position: 'center' },
        { src: mikeCarousel5.src, position: 'center' }
      ]}
    />
  );
};

export default MikeKaedingCaseStudy;
