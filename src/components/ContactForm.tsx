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
    <section className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tighter">
            Let's Build Trust
          </h2>
          
          <div className="space-y-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            <p>We don't have a newsletter.</p>
            <p>We don't offer discovery calls.</p>
            <p className="text-xl text-primary-foreground">We offer presence.</p>
            <p className="pt-4">
              If you've read this far, maybe you felt something.
              <br />
              If it's time to build your story with clarity and care — reach out.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 md:p-12">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
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
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
          </div>

          <div>
            <Input
              type="text"
              name="website"
              placeholder="LinkedIn or Website"
              value={formData.website}
              onChange={handleChange}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
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
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
            />
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full bg-aged-gold text-primary-foreground hover:bg-aged-gold/90 text-lg py-6 transition-all duration-500"
          >
            Let's Begin the First Chapter
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
