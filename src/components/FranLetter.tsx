import franPortrait from "@/assets/fran-portrait.jpg";

const FranLetter = () => {
  return (
    <section className="py-30 px-6 md:px-30" style={{ backgroundColor: 'hsl(42, 29%, 93%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={franPortrait} 
              alt="Fran Herrera, Founder of CRUDA"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-charcoal/10"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-display text-subsection font-semibold tracking-tight">
              A Letter from Fran
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm Fran. I'm not a marketer — I'm a builder like you.
              </p>
              
              <p>
                I've worked across countries, stories, and time zones to help people like you cross the bridge between{" "}
                <span className="font-display font-medium">being good</span> and{" "}
                <span className="font-display font-medium">being seen</span>.
              </p>
              
              <p>
                CRUDA isn't here to perform.
                <br />
                It's here to reveal.
              </p>
              
              <div className="pt-8 pb-6 border-t border-charcoal/10">
                <p className="font-display text-2xl font-medium leading-tight">
                  So let me ask you:
                  <br />
                  <span className="text-signal-red">What would change if the world finally understood what you're building?</span>
                </p>
              </div>
              
              <p className="text-lg" style={{ color: 'hsl(21, 7%, 23%, 0.85)' }}>
                If you've been quietly building something meaningful — and you're ready to articulate it with the same precision you execute — let's talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranLetter;
