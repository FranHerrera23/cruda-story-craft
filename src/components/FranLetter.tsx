import franPortrait from "@/assets/fran-portrait.jpg";

const FranLetter = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={franPortrait} 
              alt="Fran Herrera, Founder of CRUDA"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight">
              A Letter from Fran
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Fran. I'm not a marketer — I'm a builder like you.
              </p>
              
              <p>
                I've worked across countries, stories, and time zones to help people like you cross the bridge between being good and being seen.
              </p>
              
              <p>
                CRUDA exists because most founders are solving real problems — but struggling to explain why it matters. Not because they lack the skill, but because they're too close to the work.
              </p>
              
              <p className="text-foreground font-serif text-xl italic pt-4">
                "We don't build brands. We build trust."
              </p>
              
              <p>
                If you've been quietly building something meaningful — and you're ready to share it with the world — maybe CRUDA is for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranLetter;
