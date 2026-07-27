'use client';

import Link from 'next/link';
import { ClientPageTemplate } from '@/components/ClientPageTemplate';
import heroImage from "@/assets/girish-sehgal.jpeg";
import girishLinkedin01 from "@/assets/girish-linkedin-01.png";
import girishLinkedin02 from "@/assets/girish-linkedin-02.png";
import girishLinkedin03 from "@/assets/girish-linkedin-03.png";
import girishLinkedin04 from "@/assets/girish-linkedin-04.png";
import girishLinkedin05 from "@/assets/girish-linkedin-05.png";
import girishLinkedin06 from "@/assets/girish-linkedin-06.png";

const GirishSehgalCaseStudy = () => {
  return (
    <ClientPageTemplate
      heroImage={heroImage.src}
      heroImagePosition="center 30%"
      heroKicker="HOSPITALITY LEADERSHIP • ABU DHABI"
      heroHeadline="Girish Sehgal"

      clientName="Girish Sehgal"
      clientTitle="Chief Patient Experience Officer, SSMC"
      clientLocation="Abu Dhabi, UAE"
      clientDescription={[
        "Four Seasons. Taj. JW Marriott. Grand Hyatt. Kempinski. 14 cities across 6 countries. Twenty-five years building cultures at the world's most renowned hospitality brands.",
        "Today, Girish leads Hospitality and Patient Experience at SSMC in Abu Dhabi — bringing the mindset of world-class hospitality into healthcare."
      ]}
      challengeHeadline="Two decades building excellence in hospitality."
      challengeDescription={[
        "Zero digital presence in healthcare.",
        "The resume spoke for itself — to people who saw it. Most people never saw it. Moving from hotels to hospitals meant bringing a philosophy, not just a skillset.",
        "The brands spoke for him. Now he needed his own voice."
      ]}

      storyQuote="I've spent twenty-five years building cultures. The brands spoke for me. Now I need my own voice."
      storyContent={[
        "With over two decades across the world's most renowned hospitality brands, Girish Sehgal brings a rare blend of operational excellence, emotional intelligence, and people-first leadership to every role he takes on.",
        "Born in a small Himalayan town in India, Girish started his career with Kempinski at just 19. By 21, he was already on a fast-track leadership program. Since then, he has lived and worked in 14 cities across 6 countries, managing luxury properties for Four Seasons, Taj, JW Marriott, and more.",
        "But beyond the brands, what defines his legacy is his belief in whole-self performance. He has led iconic hotel turnarounds, designed award-winning customer experiences, and built internal cultures that prioritize mental wellbeing, empathy, and dignity — long before they became buzzwords.",
        "Today, Girish leads Hospitality and Patient Experience at SSMC in Abu Dhabi, one of the largest medical cities in the region. His mission is clear: bring the mindset of world-class hospitality into healthcare — where kindness, calm, and presence aren't perks, but essential.",
        "From luxury resorts to hospital corridors, Girish has always built places people want to stay in — and return to."
      ]}

      translationHeadline="From resume to reputation"
      translationDescription="We built Girish's voice around five strategic pillars — each designed to translate twenty-five years of hospitality leadership into content that travels."
      translationPillars={[
        {
          number: "01",
          title: "Build a founder-style voice",
          description: "Craft Girish's narrative as a values-led leader — one who bridges luxury hospitality with human-centered healthcare. Less 'titles and logos,' more 'beliefs and stories.'"
        },
        {
          number: "02",
          title: "Shift perception",
          description: "Position him not just as someone who runs operations, but as someone who reshapes how people feel inside institutions — hotels or hospitals alike."
        },
        {
          number: "03",
          title: "Anchor in emotion & philosophy",
          description: "Create emotionally resonant posts based on real stories, cultural nuance, and insights from his transition into healthcare."
        },
        {
          number: "04",
          title: "Design a content system",
          description: "Use LinkedIn as the primary platform to consistently publish essays, attract leadership conversations, and build authority across hospitality and healthcare spaces."
        },
        {
          number: "05",
          title: "Align voice with trust & humility",
          description: "Develop a narrative tone that feels calm, grounded, and wise — not promotional. This will earn respect from senior peers, not just digital followers."
        }
      ]}

      workSectionTitle="The content that now travels"
      workSectionDescription="Each post shows how we turned twenty-five years of hospitality leadership into a voice that builds trust with healthcare executives, leadership platforms, and business media."
      workContent={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { image: girishLinkedin03, title: "The Golden Rule Still Wins", reactions: "184", comments: "23", url: "https://www.linkedin.com/posts/girishsehgal_hospitality-activity-7317432858741493760-6YlK" },
            { image: girishLinkedin01, title: "From Luxury Hotels to Healthcare", reactions: "263", comments: "32", url: "https://www.linkedin.com/in/girishsehgal/" },
            { image: girishLinkedin02, title: "Guest Experience Stories", reactions: "69", comments: "4", url: "https://www.linkedin.com/in/girishsehgal/" },
            { image: girishLinkedin04, title: "Not Every Star Player Needs to Sprint", reactions: "123", comments: "13", url: "https://www.linkedin.com/in/girishsehgal/" },
            { image: girishLinkedin05, title: "14 Cities, 6 Countries", reactions: "576", comments: "55", url: "https://www.linkedin.com/in/girishsehgal/" },
            { image: girishLinkedin06, title: "Split Rocks or Build Cathedrals", reactions: "209", comments: "17", url: "https://www.linkedin.com/in/girishsehgal/" }
          ].map((post, index) => (
            <Link
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 block"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.1)',
                borderRadius: '0',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(10, 10, 10, 0.06)',
                textDecoration: 'none'
              }}
            >
              <img
                src={post.image.src}
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
                <span
                  className="inline-block"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#E8623A'
                  }}
                >
                  View on LinkedIn →
                </span>
              </div>
            </Link>
          ))}
        </div>
      }

      metricsHeadline="What this looks like."
      metricsCards={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '40px'
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
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>#1 WORLDWIDE</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Condé Nast Traveller</p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>$24M YEAR 1</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>JW Marriott Pune</p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>14 CITIES</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>6 countries</p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>25+ YEARS</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Four Seasons, Taj, JW Marriott</p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '40px'
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
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>576 REACTIONS</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Top post</p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>55 COMMENTS</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Peer-level engagement</p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: '#E8623A', fontWeight: 700 }}>EXECUTIVE VOICE</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>Established</p>
              </div>
            </div>
          </div>
        </div>
      }

      outcomesHeadline="What travels now"
      outcomesDescription="A voice that builds trust with healthcare executives, leadership platforms, and business media."
      outcomes={[
        { highlight: "Executive voice established —", description: "calm, grounded, wise" },
        { highlight: "Visibility beyond hospitality circles", description: "into healthcare leadership" },
        { highlight: "Content system designed", description: "for strategic visibility" },
        { highlight: "Positioned as culture-builder,", description: "not just operator" },
        { highlight: "LinkedIn essays attracting", description: "peer-level engagement" },
        { highlight: "Foundation for speaking,", description: "advisory, board opportunities" }
      ]}

      testimonialQuote="CRUDA understood what I was trying to build — not just content, but a voice that reflects twenty-five years of creating cultures across the world's best hospitality brands. They helped me translate that into something that travels."
      testimonialAuthor="Girish Sehgal"
      testimonialTitle="Chief Patient Experience Officer, SSMC"

      ctaHeadline="Want to build trust like Girish?"
      ctaButtonText="Start your story →"
      ctaButtonLink="/contact"

      dividerImages={[
        { src: heroImage.src, position: 'center 15%' },
        { src: heroImage.src, position: 'center 25%' }
      ]}
    />
  );
};

export default GirishSehgalCaseStudy;
