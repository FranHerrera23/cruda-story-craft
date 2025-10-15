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
    <section id="contact" className="py-24 px-6 md:px-16" style={{ backgroundColor: 'hsl(21, 7%, 23%)', color: 'hsl(48, 43%, 98%)' }}>
      <div className="max-w-2xl mx-auto">

        <form onSubmit={handleSubmit} className="space-y-5 bg-bone/5 backdrop-blur-sm border border-bone/10 p-8 md:p-10">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 rounded-sm h-12 transition-all duration-300"
            style={{ 
              outlineColor: '#F5B800',
              borderColor: 'rgba(253, 251, 247, 0.2)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#F5B800';
              e.target.style.boxShadow = '0 0 0 1px #F5B800';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(253, 251, 247, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 rounded-sm h-12 transition-all duration-300"
            style={{ 
              outlineColor: '#F5B800',
              borderColor: 'rgba(253, 251, 247, 0.2)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#F5B800';
              e.target.style.boxShadow = '0 0 0 1px #F5B800';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(253, 251, 247, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />

          <Input
            type="text"
            name="website"
            placeholder="LinkedIn or Website"
            value={formData.website}
            onChange={handleChange}
            className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 rounded-sm h-12 transition-all duration-300"
            style={{ 
              outlineColor: '#F5B800',
              borderColor: 'rgba(253, 251, 247, 0.2)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#F5B800';
              e.target.style.boxShadow = '0 0 0 1px #F5B800';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(253, 251, 247, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />

          <Textarea
            name="message"
            placeholder="What are you building?"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 resize-none rounded-sm transition-all duration-300"
            style={{ 
              outlineColor: '#F5B800',
              borderColor: 'rgba(253, 251, 247, 0.2)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#F5B800';
              e.target.style.boxShadow = '0 0 0 1px #F5B800';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(253, 251, 247, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />

          <Button 
            type="submit"
            size="lg"
            className="w-full text-lg py-6 font-display font-semibold tracking-wide transition-all duration-300 rounded-sm"
            style={{
              backgroundColor: '#FF2E63',
              color: '#FDFBF7'
            }}
          >
            Start a Conversation
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
