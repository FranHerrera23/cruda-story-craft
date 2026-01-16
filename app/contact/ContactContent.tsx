'use client';

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

export default function ContactContent() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    gap: '',
    prompt: '',
    readyToInvest: null as boolean | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const promptOptions = [
    "Expanding into a new market",
    "Raising capital",
    "Hiring key talent",
    "Increasing visibility",
    "Launching something new",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save form data to database
      await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        company_name: formData.companyName,
        company_website: formData.companyWebsite,
        gap: formData.gap,
        prompt: formData.prompt,
        investment_ready: formData.readyToInvest ? 'yes' : 'no'
      });
      
      setIsSubmitted(true);
      // After 2 seconds, redirect to Calendly
      setTimeout(() => {
        window.open('https://calendly.com/cruda-intro/narrative-sparring-live-1', '_blank');
      }, 2000);
    } catch (error) {
      console.error('Error saving submission:', error);
      // Still redirect even if save fails
      setIsSubmitted(true);
      setTimeout(() => {
        window.open('https://calendly.com/cruda-intro/narrative-sparring-live-1', '_blank');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <section style={{ padding: '160px 80px', maxWidth: '600px' }}>
          <div 
            className="transition-all duration-700"
            style={{ opacity: 1 }}
          >
            <h1 style={{
              fontSize: '44px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Got it.
            </h1>
            <p style={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1.6',
              color: 'rgba(10, 10, 10, 0.6)',
              marginBottom: '24px'
            }}>
              We're opening your calendar now. Pick a time that works.
            </p>
            <p style={{
              fontSize: '16px',
              fontStyle: 'italic',
              color: 'rgba(10, 10, 10, 0.4)'
            }}>
              If the calendar doesn't open automatically,{' '}
              <a 
                href="https://calendly.com/cruda-intro/narrative-sparring-live-1" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FF2E63', textDecoration: 'underline' }}
              >
                click here
              </a>.
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
        className="contact-section"
        style={{ 
          padding: '120px 80px',
          maxWidth: '700px'
        }}
      >
        {/* Header */}
        <div 
          className="transition-all duration-700"
          style={{
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1 style={{
            fontSize: '44px',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Start a conversation
          </h1>
          <p style={{
            fontSize: '20px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.5)'
          }}>
            45 minutes. No pitch. No pressure.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div 
            className="transition-all duration-700"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '32px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            {/* Name */}
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={inputStyle}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={inputStyle}
                placeholder="you@company.com"
              />
            </div>

            {/* Company Name */}
            <div>
              <label style={labelStyle}>Company Name</label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                style={inputStyle}
                placeholder="Your company"
              />
            </div>

            {/* Company Website */}
            <div>
              <label style={labelStyle}>Company Website / LinkedIn</label>
              <input
                type="url"
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                style={inputStyle}
                placeholder="https://"
              />
            </div>

            {/* Gap Question */}
            <div>
              <label style={labelStyle}>
                What's the biggest gap between how you see your company and how others see it?
              </label>
              <textarea
                required
                value={formData.gap}
                onChange={(e) => handleInputChange('gap', e.target.value)}
                style={{
                  ...inputStyle,
                  minHeight: '120px',
                  resize: 'vertical'
                }}
                placeholder="2-3 sentences..."
              />
            </div>

            {/* Prompt Dropdown */}
            <div>
              <label style={labelStyle}>What's prompting this conversation now?</label>
              <select
                required
                value={formData.prompt}
                onChange={(e) => handleInputChange('prompt', e.target.value)}
                style={{
                  ...inputStyle,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  backgroundSize: '20px'
                }}
              >
                <option value="">Select an option...</option>
                {promptOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Investment Question */}
            <div>
              <label style={labelStyle}>
                Are you prepared to invest $2,600/month for 6+ months?
              </label>
              <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => handleInputChange('readyToInvest', true)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    fontSize: '15px',
                    fontWeight: '500',
                    border: '1px solid',
                    borderColor: formData.readyToInvest === true ? '#0A0A0A' : 'rgba(10, 10, 10, 0.15)',
                    backgroundColor: formData.readyToInvest === true ? '#0A0A0A' : '#FFFFFF',
                    color: formData.readyToInvest === true ? '#FFFFFF' : '#0A0A0A',
                    borderRadius: '0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('readyToInvest', false)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    fontSize: '15px',
                    fontWeight: '500',
                    border: '1px solid',
                    borderColor: formData.readyToInvest === false ? '#0A0A0A' : 'rgba(10, 10, 10, 0.15)',
                    backgroundColor: formData.readyToInvest === false ? '#0A0A0A' : '#FFFFFF',
                    color: formData.readyToInvest === false ? '#FFFFFF' : '#0A0A0A',
                    borderRadius: '0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formData.readyToInvest === null || isSubmitting}
              style={{
                width: '100%',
                padding: '20px 28px',
                fontSize: '16px',
                fontWeight: '500',
                backgroundColor: formData.readyToInvest !== null && !isSubmitting ? '#0A0A0A' : 'rgba(10, 10, 10, 0.2)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '0',
                cursor: formData.readyToInvest !== null && !isSubmitting ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '16px'
              }}
              onMouseEnter={(e) => {
                if (formData.readyToInvest !== null && !isSubmitting) {
                  e.currentTarget.style.backgroundColor = '#FF2E63';
                }
              }}
              onMouseLeave={(e) => {
                if (formData.readyToInvest !== null && !isSubmitting) {
                  e.currentTarget.style.backgroundColor = '#0A0A0A';
                }
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Book my call'}
              {!isSubmitting && <span style={{ fontSize: '18px' }}>→</span>}
            </button>
          </div>
        </form>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .contact-section {
            padding: 100px 24px !important;
          }
        }
      `}</style>
    </main>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  color: '#0A0A0A',
  marginBottom: '8px'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px',
  fontSize: '16px',
  fontWeight: '400',
  color: '#0A0A0A',
  backgroundColor: '#FFFFFF',
  border: '1px solid rgba(10, 10, 10, 0.15)',
  borderRadius: '0',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};

