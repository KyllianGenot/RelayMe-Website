import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FooterProps {
  id?: string;
}

export default function Footer({ }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const year = new Date().getFullYear();
      if (year !== currentYear) {
        setCurrentYear(year);
      }
    }, 1000 * 60 * 60); // Vérification chaque heure
    
    return () => clearInterval(intervalId);
  }, [currentYear]);

  return (
    <footer className="py-8 bg-[#000812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Bloc Logo et Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold mb-2">
              <span className="text-[#3F8DF3]">R</span>
              <span className="text-white">elayMe</span>
            </span>
            <span className="text-[#73777B] text-sm">
              © {currentYear} RelayMe - Tous droits réservés
            </span>
          </div>
          
          {/* Bloc Liens */}
          <div className="flex gap-8">
            {['Politique de confidentialité', 'Support'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#73777B] hover:text-[#3F8DF3] transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Bloc Icônes sociales */}
          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="social-icon"
                aria-label={`Suivez-nous sur ${Icon.name}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}