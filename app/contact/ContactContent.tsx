'use client';

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

export default function ContactContent() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    companyWebsite: '',
    whatDoes: '',
    goals: '',
    howFound: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await supabase.from('contact_submissions').insert({
        name: formData.name,
        company_name: formData.companyWebsite,
        gap: formData.whatDoes,
        prompt: formData.goals,
        email: formData.howFound
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error saving submission:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <section style={{
          padding: '160px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '560px', width: '100%' }}>
            <h1 style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '16px'
            }}>
              Got it.
            </h1>
            <p style={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '1.6',
              color: 'rgba(10, 10, 10, 0.5)',
              marginBottom: '24px'
            }}>
              We respond within 48 hours.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <section
        ref={elementRef}
        className="contact-page"
        style={{
          padding: '160px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ maxWidth: '560px', width: '100%' }}>
          {/* Title */}
          <h1
            className="transition-all duration-700"
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '16px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Tell us about your work.
          </h1>

          {/* Subtitle */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.5)',
              lineHeight: '1.6',
              maxWidth: '480px',
              marginBottom: '48px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            We work with a small number of clients at any given time. A few questions help us both figure out if there&apos;s a fit.
          </p>

          {/* Divider */}
          <div
            className="transition-all duration-500"
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(10, 10, 10, 0.08)',
              marginBottom: '40px',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            {/* Your name */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Your name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Company + website */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Company + website</label>
              <input
                type="text"
                required
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* What does your company do? */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>What does your company do?</label>
              <textarea
                required
                value={formData.whatDoes}
                onChange={(e) => handleInputChange('whatDoes', e.target.value)}
                style={{
                  ...inputStyle,
                  minHeight: '60px',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* What are you trying to accomplish */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>What are you trying to accomplish in the next 12 months?</label>
              <textarea
                required
                value={formData.goals}
                onChange={(e) => handleInputChange('goals', e.target.value)}
                style={{
                  ...inputStyle,
                  minHeight: '90px',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* How did you find us? */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>How did you find us?</label>
              <input
                type="text"
                value={formData.howFound}
                onChange={(e) => handleInputChange('howFound', e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Divider */}
            <div style={{
              width: '100%',
              height: '1px',
              background: 'rgba(10, 10, 10, 0.08)',
              marginBottom: '32px'
            }} />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: isSubmitting ? 'rgba(10, 10, 10, 0.2)' : '#0A0A0A',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '500',
                padding: '18px 28px',
                border: 'none',
                borderRadius: '0',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) e.currentTarget.style.backgroundColor = '#FF2E63';
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) e.currentTarget.style.backgroundColor = '#0A0A0A';
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
              {!isSubmitting && <span style={{ fontSize: '18px' }}>→</span>}
            </button>

            {/* Note */}
            <p style={{
              fontSize: '14px',
              color: 'rgba(10, 10, 10, 0.35)',
              marginTop: '24px'
            }}>
              We respond within 48 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        .contact-page input:focus,
        .contact-page textarea:focus {
          border-color: #FF2E63 !important;
        }
        @media (max-width: 768px) {
          .contact-page {
            padding: 120px 24px !important;
          }
        }
      `}</style>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  color: 'rgba(10, 10, 10, 0.6)',
  marginBottom: '8px'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid rgba(10, 10, 10, 0.15)',
  padding: '12px 0',
  fontSize: '17px',
  color: '#0A0A0A',
  background: 'transparent',
  outline: 'none',
  transition: 'border-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
};
