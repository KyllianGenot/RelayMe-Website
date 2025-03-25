import { Linkedin, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  id?: string;
}

export default function Footer({}: FooterProps) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const year = new Date().getFullYear();
      if (year !== currentYear) {
        setCurrentYear(year);
      }
    }, 1000 * 60 * 60); // Vérification toutes les heures

    return () => clearInterval(intervalId);
  }, [currentYear]);

  return (
    <footer className="py-6 bg-[#000812] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
          {/* Logo et Copyright (à gauche) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-2">
              <Link to="/">
                <img 
                  src="/logo.webp"
                  alt="Logo RelayMe" 
                  className="h-8 w-auto" // Même taille que dans le header
                />
              </Link>
            </div>
            <span className="text-[#73777B] text-sm">
              © {currentYear} RelayMe - Tous droits réservés
            </span>
          </div>

          {/* Liens de navigation (au centre) */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {['Politique de confidentialité', 'Support'].map((item) => (
              <Link
                key={item}
                to={item === 'Politique de confidentialité' ? '/privacy-policy' : '/support'}
                className="text-[#73777B] hover:text-[#3F8DF3] transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Lien LinkedIn (à droite) */}
          <div className="flex justify-center md:justify-end items-center">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#73777B] hover:text-[#3F8DF3] transition-colors duration-200"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}