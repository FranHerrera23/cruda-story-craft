'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navigation.css';
import crudaLogo from '@/assets/cruda-logo.png';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 80;
          setIsScrolled(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <img
              src={crudaLogo.src}
              alt="CRUDA"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu desktop-only">
            <Link
              href="/clients"
              className={`nav-link ${pathname === '/clients' ? 'active' : ''}`}
            >
              Clients
            </Link>
            <Link
              href="/about"
              className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-cta"
            >
              <span>Start a Conversation</span>
              <span className="arrow">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger mobile-only ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide Panel */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link
          href="/clients"
          className={`mobile-nav-link ${pathname === '/clients' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Clients
        </Link>
        <Link
          href="/about"
          className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="mobile-nav-link mobile-nav-cta"
          onClick={closeMobileMenu}
        >
          Start a Conversation
        </Link>
      </div>
    </>
  );
};
