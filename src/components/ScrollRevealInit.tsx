'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

      // Observe all elements with data-reveal attribute
      document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }

    // Initialize on mount
    const cleanup = initScrollReveal();

    // Cleanup on unmount
    return cleanup;
  }, []);

  return null;
}
