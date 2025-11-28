import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

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
          CRUDA
        </Link>
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-menu-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <a 
            href="/#see-the-work" 
            className="nav-menu-item"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                const element = document.getElementById('see-the-work');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            Work
          </a>
          <Link 
            to="/pricing" 
            className={`nav-menu-item ${location.pathname === '/pricing' ? 'active' : ''}`}
          >
            Pricing
          </Link>
          <Link 
            to="/people" 
            className={`nav-menu-item ${location.pathname === '/people' ? 'active' : ''}`}
          >
            People
          </Link>
          <Link 
            to="/book-call" 
            className={`nav-menu-item ${location.pathname === '/book-call' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
