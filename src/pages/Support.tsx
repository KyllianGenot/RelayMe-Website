import { useEffect } from 'react';
import Header from '../components/Header';

const Support = () => {
  useEffect(() => {
    document.title = 'Support - RelayMe';
  }, []);

  return (
    <div>
      <Header />
      <main className="pt-20 pb-12"> {/* Ajustement pour le header fixe */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold gradient-text mb-6">Support</h1>
          <p className="text-[#73777B] mb-4">
            Besoin d'aide avec RelayMe ? Consultez notre FAQ ou contactez notre équipe de support.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">FAQ</h2>
          <ul className="text-[#73777B] list-disc pl-6 mb-4">
            <li>Comment ajouter un contact ?</li>
            <li>Que faire si je ne reçois pas d'autorisation ?</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contactez-nous</h2>
          <p className="text-[#73777B] mb-4">
            Envoyez-nous un email à <a href="mailto:support@relayme.com" className="text-[#3F8DF3]">support@relayme.com</a>.
          </p>
          <a href="/" className="button-secondary mt-8 inline-block">Retour à l'accueil</a>
        </div>
      </main>
    </div>
  );
};

export default Support;