import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for staggered scroll-triggered animations
 * Items appear one by one with configurable delay
 */
export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  baseDelay: number = 100,
  options?: IntersectionObserverInit
) => {
  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      setVisibleItems(new Array(itemCount).fill(true));
      return;
    }

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -5% 0px',
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Stagger the items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * baseDelay);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [itemCount, baseDelay, options]);

  return { containerRef, isVisible, visibleItems };
};

/**
 * Hook for parallax scroll effects
 * Returns a transform value based on scroll position
 */
export const useParallaxScroll = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the viewport the element is
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      
      // Apply parallax offset
      setOffset(distance * speed * -0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

/**
 * Hook for scroll progress tracking
 * Returns a 0-1 value representing scroll progress through an element
 */
export const useScrollProgress = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 when element enters, 1 when it leaves)
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start tracking when element top hits bottom of viewport
      // End when element bottom hits top of viewport
      const start = windowHeight;
      const end = -elementHeight;
      const current = elementTop;
      
      const rawProgress = 1 - (current - end) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { elementRef, progress };
};
