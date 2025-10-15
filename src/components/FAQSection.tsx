import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who do you work with?",
    answer: "Founders in construction, hospitality, and professional sports doing $5M+ annual revenue. You've proven your craft. We help you explain it."
  },
  {
    question: "What does the process look like?",
    answer: "Three months. Discovery + Strategy (Month 1). Creation + Refinement (Month 2). Delivery + Launch (Month 3). Most see results in 90 days."
  },
  {
    question: "How much does it cost?",
    answer: "Investment starts at $6,000. 70% at signing, 30% in month two. We take one client per month."
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
          Before You Reach Out
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
                  style={{ color: '#F5B800' }}
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
            href="#contact"
            className="inline-flex items-center justify-center font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
            style={{ 
              backgroundColor: '#FF2E63',
              borderColor: '#FF2E63',
              color: '#FDFBF7'
            }}
          >
            Start a Conversation
          </a>
          <p className="mt-6 text-sm" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
            Or email us at hello@cruda.co
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
