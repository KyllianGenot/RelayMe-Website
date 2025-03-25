import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function EnTete() {
  const [estVisible, setEstVisible] = useState(true);
  const [dernierScrollY, setDernierScrollY] = useState(0);
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);
  const [afficherBrillanceBouton, setAfficherBrillanceBouton] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const gererDefilement = () => {
      const scrollActuelY = window.scrollY;

      if (scrollActuelY < dernierScrollY) {
        setEstVisible(true);
      } else if (scrollActuelY > dernierScrollY && scrollActuelY > 100) {
        setEstVisible(false);
      } else if (scrollActuelY === 0) {
        setEstVisible(true);
      }

      setDernierScrollY(scrollActuelY);
    };

    window.addEventListener('scroll', gererDefilement, { passive: true });
    return () => window.removeEventListener('scroll', gererDefilement);
  }, [dernierScrollY]);

  const declencherBrillanceBouton = () => {
    setAfficherBrillanceBouton(true);
    setTimeout(() => setAfficherBrillanceBouton(false), 800);
  };

  const elementsNavigation = [
    { etiquette: 'Accueil', id: 'accueil' },
    { etiquette: 'Fonctionnalités', id: 'fonctionnalites' },
    { etiquette: 'Téléchargements', id: 'telechargements' },
  ];

  const handleNavigation = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/', { replace: true }); // Navigate to home page
      setTimeout(() => {
        const target = document.querySelector(`#${id}`);
        if (target) {
          const headerHeight = 80;
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 0); // Slight delay to allow route change
    } else {
      const target = document.querySelector(`#${id}`);
      if (target) {
        const headerHeight = 80;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        estVisible ? 'translate-y-0' : '-translate-y-full'
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

          {/* Navigation pour ordinateur */}
          <nav className="hidden md:flex space-x-8">
            {elementsNavigation.map((element) => (
              <Link
                key={element.id}
                to="/"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default Link behavior
                  handleNavigation(element.id);
                }}
              >
                {element.etiquette}
              </Link>
            ))}
          </nav>

          {/* Bouton Télécharger - visible uniquement sur ordinateur */}
          <div className="hidden md:block">
            <a
              href="#telechargements"
              className="header-download-button"
              onMouseEnter={declencherBrillanceBouton}
            >
              <span className={`header-button-shine ${afficherBrillanceBouton ? 'shine-active' : ''}`}></span>
              <Download size={18} className="mr-2" />
              <span>Télécharger</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
              className="mobile-menu-button"
            >
              {menuMobileOuvert ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation pour mobile */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuMobileOuvert ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } mobile-nav-menu`}
        >
          <div className="py-3 px-4 space-y-1">
            {elementsNavigation.map((element) => (
              <Link
                key={element.id}
                to="/"
                className="mobile-nav-link block"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default Link behavior
                  handleNavigation(element.id);
                  setMenuMobileOuvert(false);
                }}
              >
                {element.etiquette}
              </Link>
            ))}
            {/* Bouton Télécharger avec le même style que sur ordinateur */}
            <a
              href="#telechargements"
              className="header-download-button my-2 w-full justify-center"
              onClick={() => setMenuMobileOuvert(false)}
              onMouseEnter={declencherBrillanceBouton}
            >
              <span className={`header-button-shine ${afficherBrillanceBouton ? 'shine-active' : ''}`}></span>
              <Download size={18} className="mr-2" />
              <span>Télécharger</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}