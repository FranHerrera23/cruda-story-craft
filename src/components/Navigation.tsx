'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navigation.css';
import crudaLogo from '@/assets/cruda-logo.png';
import Image from 'next/image';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    // Always show navigation
    setIsVisible(true);

    // Track scroll for styling
    const handleScroll = () => {
      const scrolled = window.pageYOffset > 100;
      setIsScrolled(scrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`main-navigation ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <img
            src={crudaLogo.src}
            alt="CRUDA"
            className="h-16 md:h-24 w-auto"
          />
        </Link>
        <div className="nav-menu">
          <Link
            href="/"
            className={`nav-menu-item ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`nav-menu-item ${pathname === '/work' ? 'active' : ''}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`nav-menu-item ${pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`nav-menu-item ${pathname === '/pricing' ? 'active' : ''}`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="nav-cta-button"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </nav>
  );
};
