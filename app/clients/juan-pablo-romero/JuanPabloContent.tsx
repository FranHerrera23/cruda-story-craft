'use client';

import { ClientPageTemplate } from '@/components/ClientPageTemplate';
import heroImage from "@/assets/juan-pablo-romero.jpeg";

const JuanPabloRomeroCaseStudy = () => {
  return (
    <ClientPageTemplate
      heroImage={heroImage.src}
      heroImagePosition="center 25%"
      heroKicker="LUXURY FLOORING • MIAMI, US MARKETS"
      heroHeadline="Juan Pablo Romero"
      clientName="Juan Pablo Romero"
      clientTitle="Founder, JURA Plank & Connecting the Dots"
      clientLocation="Miami, Florida"
      clientDescription={[
        "Guatemalan immigrant. Learned the trade at 17, working alongside his father. Twenty years mastering European hardwood flooring. Three generations of craft knowledge.",
        "Built JURA Plank to bring Canadian luxury hardwood to US architects. Founded Connecting the Dots — a US market consulting practice helping international construction companies enter American markets."
      ]}
      challengeHeadline="Canadian hardwood. Luxury spec. Three generations."
      challengeDescription={[
        "Zero presence in competitive US markets.",
        "American architects had never heard of them. The work existed — Black Forest oak, natural oil finishes, precision engineering. The story didn't.",
        "Juan Pablo needed to build belief remotely. Not just for JURA Plank, but for every international company trying to break into US construction markets."
      ]}
      storyQuote="I learned this trade from my father. Every project is personal. But when you're expanding into new markets, relationships aren't enough. People need to understand what makes our approach different."
      storyContent={[
        "Juan Pablo Romero came to the United States from Guatemala at 17. He started learning flooring alongside his father, working job sites, understanding wood from the ground up. That was two decades ago.",
        "Today, Juan Pablo runs JURA Plank, a luxury hardwood company specializing in European engineered flooring — Black Forest oak, natural oil finishes, click-lock engineering. He also founded Connecting the Dots, a consulting practice that helps international construction companies navigate US markets.",
        "But none of that translated into market visibility. JURA had a product. Juan Pablo had the expertise. What they didn't have was a way to communicate why their approach to wood flooring — material sourcing, engineering, installation — was different from commodity competitors.",
        "The challenge wasn't credibility. It was translation. Taking twenty years of craft knowledge and putting it into words that architects, designers, and developers could understand before the first meeting."
      ]}
      translationHeadline="Craft knowledge, translated"
      translationDescription="We built Juan Pablo's story around three things:"
      translationPillars={[
        {
          number: "01",
          title: "Generational craft",
          subtitle: "Family roots, professional rigor",
          description: "Juan Pablo didn't learn wood flooring in a classroom. He learned it at 17, working job sites with his father. Two decades later, that foundation still shapes how he talks about material selection, installation precision, and long-term performance."
        },
        {
          number: "02",
          title: "Material expertise",
          subtitle: "European engineering, explained clearly",
          description: "Black Forest oak. Natural oil finishes. Click-lock engineering. These aren't buzzwords — they're decisions that affect how a floor performs over 20 years. We helped translate technical knowledge into language that makes architects pay attention."
        },
        {
          number: "03",
          title: "Market builder, not just sales",
          subtitle: "Helping international companies enter US markets",
          description: "Juan Pablo built JURA's US presence from zero — not with big budgets, but with relationships and reliability. Through Connecting the Dots, he now helps other international construction companies do the same."
        }
      ]}
      workSectionTitle="What this looks like."
      workSectionDescription="Clear positioning that helps architects, designers, and developers understand why JURA Plank and Connecting the Dots exist."
      workContent={
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10, 10, 10, 0.1)', padding: '40px', borderRadius: '0' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px', color: '#0A0A0A', lineHeight: 1.3 }}>
              JURA Plank — Clear positioning
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#0A0A0A' }}>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px', color: 'rgba(10, 10, 10, 0.8)' }}>• Engineered hardwood specialist</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px', color: 'rgba(10, 10, 10, 0.8)' }}>• European sourcing + Canadian manufacturing</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px', color: 'rgba(10, 10, 10, 0.8)' }}>• Black Forest oak, natural oil finishes</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.8)' }}>• Technical expertise, approachable communication</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10, 10, 10, 0.1)', padding: '40px', borderRadius: '0' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: '#0A0A0A', lineHeight: 1.3 }}>
              Connecting the Dots — Market entry support
            </h3>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.8)', marginBottom: '16px' }}>
              Narrative foundation for:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px', color: 'rgba(10, 10, 10, 0.8)' }}>• International companies entering US markets</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px', color: 'rgba(10, 10, 10, 0.8)' }}>• Architect conversations</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px', color: 'rgba(10, 10, 10, 0.8)' }}>• Designer presentations</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px', color: 'rgba(10, 10, 10, 0.8)' }}>• Developer meetings</li>
              <li style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.8)' }}>• Trade show positioning</li>
            </ul>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.8)', marginTop: '16px', fontWeight: 600 }}>
              The story exists now. The content follows.
            </p>
          </div>
        </div>
      }
      metricsHeadline="What this looks like."
      metricsCards={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#E8623A', lineHeight: 1.1, marginBottom: '8px' }}>NARRATIVE</p>
            <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>Foundation built</p>
          </div>
          <div>
            <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#E8623A', lineHeight: 1.1, marginBottom: '8px' }}>POSITIONING</p>
            <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>Clarified</p>
          </div>
          <div>
            <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#E8623A', lineHeight: 1.1, marginBottom: '8px' }}>EXPERTISE</p>
            <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>Translated</p>
          </div>
        </div>
      }
      testimonialQuote="CRUDA helped me see what I couldn't articulate. I know wood flooring inside and out. But explaining why European engineering matters, why oil finishes outperform polyurethane, why JURA's approach is different — that's what we built together. Now I can walk into any meeting and the story is clear."
      testimonialAuthor="Juan Pablo Romero"
      testimonialTitle="Founder, JURA Plank & Connecting the Dots"
      ctaHeadline="Ready to build your story?"
      ctaButtonText="Start a conversation →"
      ctaButtonLink="/contact"
      dividerImages={[
        { src: heroImage.src, position: 'center 30%' },
        { src: heroImage.src, position: 'center 25%' }
      ]}
    />
  );
};

export default JuanPabloRomeroCaseStudy;
