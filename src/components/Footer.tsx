import { Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  id?: string;
}

export default function Footer({ }: FooterProps) {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-[#3F8DF3]">R</span>
              <span className="text-white">elayMe</span>
            </span>
            <span className="text-[#73777B] text-sm ml-4">
              © 2025 RelayMe - Tous droits réservés
            </span>
          </div>
          
          <div className="flex gap-6">
            {['Politique de confidentialité', 'Conditions d\'utilisation', 'Support'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#73777B] hover:text-[#3F8DF3] transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="social-icon"
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