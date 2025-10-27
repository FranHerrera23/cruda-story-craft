import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/**
 * CRUDA - Smooth Navigation & Scroll Behavior
 * Prevents violent page jumps and ensures calm transitions
 */

// Smooth scroll for all anchor links
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎬 CRUDA Navigation: Initializing...');
  
  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href') || '';
      const target = document.querySelector(targetId);
      
      if (target) {
        console.log('📜 Smooth scrolling to:', targetId);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page jump
        history.pushState(null, '', targetId);
      }
    });
  });
  
  // Handle URL hash on page load
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        console.log('🎯 Scrolling to hash target:', window.location.hash);
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  }
  
  console.log('✅ CRUDA Navigation: Ready');
});

// Smooth page fade-in on load
window.addEventListener('pageshow', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 600ms ease-out';
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});

createRoot(document.getElementById("root")!).render(<App />);
