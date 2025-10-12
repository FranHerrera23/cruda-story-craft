import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [showFAQ, setShowFAQ] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received",
      description: "We'll be in touch soon to start the conversation.",
    });
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-30 px-6 md:px-30 bg-charcoal text-bone">
      <div className="max-w-3xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display text-section font-semibold mb-10 tracking-tight-2 text-center">
            Let's Build Trust
          </h2>
          
          <div className="space-y-6 text-lg text-center max-w-2xl mx-auto">
            <p className="text-bone/70">If you've read this far, you probably felt something.</p>
            
            <p className="font-display text-2xl font-medium pt-6">
              And if you're building something worth believing in — let's make sure people see it.
            </p>
            
            <p className="pt-6 text-bone/60 italic">
              We only take on a few founders at a time.
            </p>
            
            <p className="text-bone font-medium">
              Start with a conversation.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-bone/5 backdrop-blur-sm border border-bone/10 p-10 md:p-12">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 focus:border-signal-red focus:ring-signal-red rounded-sm h-14 text-lg"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 focus:border-signal-red focus:ring-signal-red rounded-sm h-14 text-lg"
            />
          </div>

          <div>
            <Input
              type="text"
              name="website"
              placeholder="LinkedIn or Website"
              value={formData.website}
              onChange={handleChange}
              className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 focus:border-signal-red focus:ring-signal-red rounded-sm h-14 text-lg"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="What are you building right now?"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 focus:border-signal-red focus:ring-signal-red resize-none rounded-sm text-lg"
            />
          </div>

          <div className="border-t border-bone/10 pt-6 mb-6">
            <button
              type="button"
              onClick={() => setShowFAQ(!showFAQ)}
              className="text-bone/60 hover:text-bone underline decoration-signal-red/50 hover:decoration-signal-red transition-all duration-300 text-sm tracking-wide"
            >
              Are you familiar with our pricing and process?
            </button>
            
            {showFAQ && (
              <div className="mt-6 p-6 bg-bone/5 border border-signal-red/20 slow-fade-in">
                <p className="text-sm text-bone/70 leading-relaxed">
                  We work in 4-month phases, starting at $6,000. We do deep narrative strategy, not content production.
                </p>
              </div>
            )}
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full bg-signal-red text-charcoal hover:bg-charcoal hover:text-signal-red hover:border hover:border-signal-red text-lg py-7 font-display font-semibold tracking-wide transition-all duration-500 rounded-sm"
          >
            Start the Conversation
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
