import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import crudaLogo from '@/assets/cruda-logo.png';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    // Always show on non-homepage
    if (!isHomepage) {
      setIsVisible(true);
      return;
    }

    // On homepage, show after scrolling past hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset > 100;
      setIsVisible(scrolled);
      setIsScrolled(scrolled);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  return (
    <nav 
      className={`main-navigation ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src={crudaLogo} 
            alt="CRUDA" 
            className="h-16 md:h-24 w-auto" 
          />
        </Link>
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-menu-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/work" 
            className={`nav-menu-item ${location.pathname === '/work' ? 'active' : ''}`}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className={`nav-menu-item ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/pricing" 
            className={`nav-menu-item ${location.pathname === '/pricing' ? 'active' : ''}`}
          >
            Pricing
          </Link>
          <Link 
            to="/book-call" 
            className="nav-cta-button"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </nav>
  );
};
