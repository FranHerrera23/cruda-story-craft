const AlignmentCheck = () => {
  return (
    <section className="py-32 px-6 bg-clay/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-8 tracking-tighter font-serif">
          Before you reach out — a quick alignment check:
        </h2>

        <div className="bg-background border border-border p-8 md:p-12 mb-12">
          <div className="space-y-4 text-left max-w-xl mx-auto">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1 w-5 h-5 text-aged-gold border-border rounded focus:ring-aged-gold"
              />
              <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                I've been building for at least 2+ years
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1 w-5 h-5 text-aged-gold border-border rounded focus:ring-aged-gold"
              />
              <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                I know my work is strong, but I struggle to explain it
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1 w-5 h-5 text-aged-gold border-border rounded focus:ring-aged-gold"
              />
              <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                I'm ready to invest in clarity, not just visibility
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1 w-5 h-5 text-aged-gold border-border rounded focus:ring-aged-gold"
              />
              <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                I value depth over speed
              </span>
            </label>
          </div>
        </div>

        <p className="text-xl font-serif text-foreground">
          If you checked 3 or more — let's talk.
        </p>
      </div>
    </section>
  );
};

export default AlignmentCheck;
