import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who do you work with?",
    answer: "We build with people who build things. Founders, operators, and leaders with skin in the game."
  },
  {
    question: "What if I'm not in construction, hospitality, or sports—can we still work together?",
    answer: "We've spent years learning how builders in these industries think—the language they use, the challenges they face, the gap between their expertise and how they're understood. That depth is where our value lives.\n\nBut patterns transcend industries. If you've built something that matters and can't explain why, that's the same challenge. We should talk."
  },
  {
    question: "What does the process look like?",
    answer: "It depends where you're at. Some come to us with a reputation to shape. Others with a story to reframe. Either way, we start by listening."
  },
  {
    question: "What's the investment?",
    answer: "$1,625/month for a 4-month commitment ($6,500 total). This is the foundational phase where we build your strategic narrative and execute across key channels. Most clients continue into ongoing positioning work after seeing the impact."
  },
  {
    question: "What are your credentials?",
    answer: "Fran leads CRUDA.\n\nEight years working with everyone from TikTok and Mondelez to construction CEOs, Saudi artists, athletes, and fintech founders. Buenos Aires, Dubai, Moscow. Different work, different cultures, same conversation: 'I know what I've built is strong. I just can't explain why it matters.'\n\nAfter enough of those conversations, the pattern becomes impossible to ignore. CRUDA exists because positioning doesn't come from templates or frameworks—it comes from understanding how builders actually think, what they struggle to articulate, and finding the story that's already there."
  },
  {
    question: "Why \"CRUDA\"?",
    answer: "Cruda means 'raw' in Spanish. It's what your story is before it's been shaped—unfiltered, unpolished, full of potential.\n\nMost founders come to us with raw material: years of expertise, hard-won insights, work that speaks for itself in person but disappears everywhere else. We don't create stories from nothing. We find the one that's already there and shape it into something people feel.\n\nThe name reminds us that the best narratives don't start polished. They start real."
  },
  {
    question: "When can we start?",
    answer: "December is open. January is committed. If you want December, reach out now."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 px-6 md:px-16" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[32px] md:text-[38px] font-display font-semibold text-center mb-12" style={{ color: '#3D3835' }}>
          Common questions, clear answers
        </h2>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b transition-all"
              style={{ borderColor: 'rgba(61, 56, 53, 0.15)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left transition-all hover:opacity-70"
              >
                <span className="text-lg md:text-xl font-semibold pr-8" style={{ color: '#3D3835' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#FF2E63' }}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-base md:text-lg leading-[1.65]" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <a
            href="/book-call"
            className="inline-flex items-center justify-center font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
            style={{ 
              backgroundColor: '#FF2E63',
              borderColor: '#FF2E63',
              color: '#FDFBF7'
            }}
          >
            I want to tell my story
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
