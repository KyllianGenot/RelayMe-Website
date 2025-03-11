import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showButtonShine, setShowButtonShine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY === 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const triggerButtonShine = () => {
    setShowButtonShine(true);
    setTimeout(() => setShowButtonShine(false), 800);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } header-premium`}
      style={{ top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="gradient-text">R</span>
              <span className="text-white">elayMe</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Accueil', 'Fonctionnalités', 'Téléchargements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Bouton Télécharger en lien */}
          <a 
            href="#telechargements"
            className="header-download-button"
            onMouseEnter={triggerButtonShine}
          >
            <span className={`header-button-shine ${showButtonShine ? 'shine-active' : ''}`}></span>
            <Download size={18} className="mr-2" />
            <span>Télécharger</span>
          </a>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } mobile-nav-menu`}
      >
        <div className="py-3 px-4 space-y-1">
          {['Accueil', 'Fonctionnalités', 'Téléchargements', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}