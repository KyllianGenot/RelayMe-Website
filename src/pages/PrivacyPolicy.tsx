import { useEffect } from 'react';
import Header from '../components/Header';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Politique de Confidentialité - RelayMe';
  }, []);

  return (
    <div>
      <Header />
      <main className="pt-20 pb-12"> {/* Ajustement pour le header fixe */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold gradient-text mb-6">Politique de Confidentialité</h1>
          <p className="text-[#73777B] mb-4">
            Chez RelayMe, nous accordons une grande importance à la protection de vos données personnelles. Cette politique explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Collecte des données</h2>
          <p className="text-[#73777B] mb-4">
            Nous collectons uniquement les données nécessaires au fonctionnement de l'application, telles que vos contacts professionnels partagés avec votre consentement.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Utilisation des données</h2>
          <p className="text-[#73777B] mb-4">
            Les données sont utilisées pour faciliter le partage de contacts et améliorer l'expérience utilisateur.
          </p>
          <a href="/" className="button-secondary mt-8 inline-block">Retour à l'accueil</a>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;