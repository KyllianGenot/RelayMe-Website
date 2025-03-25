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
          <p className="text-gray-200 mb-4">
            Besoin d’aide avec RelayMe ? Vous pouvez nous contacter directement via notre formulaire de support ou consulter les ressources disponibles.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contactez-nous</h2>
          <p className="text-gray-200 mb-4">
            Pour toute question ou assistance, veuillez utiliser notre formulaire de support :{' '}
            <a href="https://tally.so/r/waz2O2" className="text-blue-500 underline">
              https://tally.so/r/waz2O2
            </a>.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Ressources supplémentaires</h2>
          <p className="text-gray-200 mb-4">
            Si vous avez des préoccupations concernant vos données, vous pouvez consulter le site de la CNIL :{' '}
            <a href="https://www.cnil.fr" className="text-blue-500 underline">
              https://www.cnil.fr
            </a>.
          </p>
          <a href="/" className="button-secondary mt-8 inline-block">Retour à l’accueil</a>
        </div>
      </main>
    </div>
  );
};

export default Support;