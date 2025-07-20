import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResumeOpen(!isResumeOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Check if we're on a project detail page (path contains '/project/')
    if (location.pathname.includes('/project/')) {
      // Navigate to home page first, then scroll to section
      navigate('/');
      // Use setTimeout to wait for navigation and page load
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResumeOpen(false);
      }
    };

    if (isResumeOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isResumeOpen]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'contact'];
      const windowHeight = window.innerHeight;
      const middleOfWindow = window.scrollY + windowHeight / 2;

      let closestSection = sections[0];
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionMiddle = offsetTop + offsetHeight / 2;
          const distance = Math.abs(middleOfWindow - sectionMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      setActiveSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span>Hugo Lundell</span>
        </Link>
        
        <nav className="nav">
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
          
          <div className="resume-dropdown" ref={dropdownRef}>
            {/* Desktop dropdown */}
            <button 
              className="nav-link resume-btn desktop-only"
              onClick={toggleDropdown}
              onTouchStart={toggleDropdown}
              type="button"
              aria-expanded={isResumeOpen}
              aria-haspopup="true"
            >
              Resume ▼
            </button>
            
            {/* Mobile direct link */}
            <a 
              href="/Lundell_Hugo_CV_ENG.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link mobile-only"
            >
              Resume
            </a>
            {isResumeOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <span className="dropdown-header">English</span>
                  <a 
                    href="/Lundell_Hugo_CV_ENG.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    View Resume
                  </a>
                  <a 
                    href="/Lundell_Hugo_CV_ENG.pdf" 
                    download="Lundell_Hugo_CV_ENG.pdf"
                    className="dropdown-item"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    Download Resume
                  </a>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-section">
                  <span className="dropdown-header">Svenska</span>
                  <a 
                    href="/SWE_Lundell_Hugo_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    Visa CV
                  </a>
                  <a 
                    href="/SWE_Lundell_Hugo_CV.pdf" 
                    download="SWE_Lundell_Hugo_CV.pdf"
                    className="dropdown-item"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    Ladda ner CV
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;