import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  return (
    <nav 
      className={`main-navigation ${isVisible ? 'visible' : 'hidden'}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CRUDA
        </Link>
        <Link to="/book-call" className="nav-cta">
          Start a conversation
        </Link>
      </div>
    </nav>
  );
};
