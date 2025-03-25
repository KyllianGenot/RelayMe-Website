import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const location = useLocation(); // Récupère l'emplacement actuel (route)

  // Gestion du scroll au changement de route
  useEffect(() => {
    window.scrollTo(0, 0); // Remet le scroll tout en haut à chaque changement de page
  }, [location.pathname]); // Déclenché quand le chemin change

  // Gestion des clics sur les ancres
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const anchor = e.target as HTMLAnchorElement;
      if (anchor.tagName === 'A' && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        console.log('Anchor clicked:', href); // Log pour vérification
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            const headerHeight = 80; // Hauteur du header
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth',
            });

            // Mettre à jour l'URL après le défilement (uniquement si sur la page d'accueil)
            if (window.location.pathname === '/') {
              setTimeout(() => {
                window.history.pushState(null, '', href);
              }, 500); // Attendre la fin du défilement fluide
            }
          }
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return null;
};

export default ScrollHandler;