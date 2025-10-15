import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 text-center" style={{ backgroundColor: '#3D3835' }}>
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[1.2] mb-12" style={{ color: '#FDFBF7' }}>
          Ready to tell your story?
        </h2>
        
        <Link
          to="/book-call"
          className="inline-flex items-center justify-center font-display font-medium text-lg px-16 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.3)]"
          style={{ 
            backgroundColor: '#FF2E63',
            borderColor: '#FF2E63',
            color: '#FDFBF7'
          }}
        >
          I want to tell my story
        </Link>

        <p className="mt-8 text-base" style={{ color: 'rgba(253, 251, 247, 0.7)' }}>
          Or email us at <a href="mailto:hello@cruda.studio" className="underline hover:no-underline" style={{ color: '#F5B800' }}>hello@cruda.studio</a>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
