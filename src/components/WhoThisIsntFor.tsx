const WhoThisIsntFor = () => {
  return (
    <section className="py-32 px-6 bg-background border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-foreground editorial-underline pb-2">
              This isn't for you if:
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-aged-gold mr-3">✕</span>
                <span>You're chasing vanity metrics or viral moments</span>
              </li>
              <li className="flex items-start">
                <span className="text-aged-gold mr-3">✕</span>
                <span>You want content for content's sake</span>
              </li>
              <li className="flex items-start">
                <span className="text-aged-gold mr-3">✕</span>
                <span>You're not ready to do the hard work of clarity</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-foreground editorial-underline pb-2">
              This is for you if:
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-aged-gold mr-3">✓</span>
                <span>You've been building in silence and you're ready to speak</span>
              </li>
              <li className="flex items-start">
                <span className="text-aged-gold mr-3">✓</span>
                <span>You value precision over performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-aged-gold mr-3">✓</span>
                <span>You're looking for a partner, not a vendor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsntFor;
