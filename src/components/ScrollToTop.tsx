'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop Component
 * Ensures smooth scroll to top on route changes
 * Prevents page jumping behavior
 */
export const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant for route changes to feel immediate
    });
  }, [pathname]);

  return null;
};
