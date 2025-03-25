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
          <p className="text-gray-200 mb-4">
            <strong>Dernière mise à jour : 25/03/2025</strong><br /><br />
            La présente Politique de Confidentialité décrit la manière dont le site web RelayMe (ci-après « le Site ») traite les données de ses utilisateurs. Nous accordons une grande importance à la confidentialité et à la protection des données personnelles, en conformité avec le Règlement Général sur la Protection des Données (RGPD) et les directives de la Commission Nationale de l’Informatique et des Libertés (CNIL).
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Absence de collecte de données personnelles</h2>
          <p className="text-gray-200 mb-4">
            Le Site ne collecte aucune donnée personnelle des utilisateurs. Il s’agit d’une plateforme statique conçue pour fournir des informations, sans interaction nécessitant la création d’un compte ou la fourniture d’informations personnelles.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Sécurité des données</h2>
          <p className="text-gray-200 mb-4">
            Étant donné que le Site ne collecte aucune donnée personnelle, aucune information n’est stockée ou traitée par nos soins. La sécurité de vos données personnelles reste toutefois une priorité dans la conception et l’hébergement du Site.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Durée de conservation</h2>
          <p className="text-gray-200 mb-4">
            Le Site ne conserve aucune donnée personnelle des utilisateurs, car aucune information n’est collectée ou enregistrée lors de votre visite.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Transfert des données</h2>
          <p className="text-gray-200 mb-4">
            Aucun transfert de données en dehors de l’Union européenne n’est effectué, car le Site ne collecte ni ne stocke aucune information personnelle.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Notification en cas d’incident</h2>
          <p className="text-gray-200 mb-4">
            Dans l’éventualité improbable d’un incident lié à la sécurité du Site, les utilisateurs seraient notifiés par email, à condition qu’ils aient fourni une adresse email au préalable via un canal séparé (par exemple, en nous contactant).
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Droits des utilisateurs</h2>
          <p className="text-gray-200 mb-4">
            Conformément au RGPD, les utilisateurs disposent des droits suivants :<br />
            - Accès aux données personnelles enregistrées,<br />
            - Rectification des informations erronées,<br />
            - Effacement des données,<br />
            - Limitation du traitement des données,<br />
            - Portabilité des données,<br />
            - Opposition au traitement des données,<br />
            - Droit de ne pas faire l’objet d’une décision automatisée.<br /><br />
            Étant donné que le Site ne collecte aucune donnée, ces droits s’appliquent uniquement si des données sont fournies volontairement via d’autres moyens (par exemple, un contact direct). Les utilisateurs peuvent soumettre une demande via le formulaire suivant : <a href="https://tally.so/r/waz2O2" className="text-blue-500 underline">https://tally.so/r/waz2O2</a>.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Responsable du traitement</h2>
          <p className="text-gray-200 mb-4">
            Le responsable du traitement des données est :<br />
            <strong>Anas ASIRI</strong><br /><br />
            Toute question ou demande d’information relative à la protection des données personnelles peut être adressée via le formulaire susmentionné.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Modification de la Politique de Confidentialité</h2>
          <p className="text-gray-200 mb-4">
            Toute modification de la présente Politique de Confidentialité sera notifiée à l’utilisateur par email, à condition qu’il ait fourni son adresse email au préalable via un canal séparé.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Réclamation auprès de la CNIL</h2>
          <p className="text-gray-200 mb-4">
            Si vous estimez que vos droits ne sont pas respectés, vous avez la possibilité d’introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" className="text-blue-500 underline">https://www.cnil.fr</a>.
          </p>
          <p className="text-gray-200 mb-4">
            ---<br /><br />
            En utilisant le Site, vous acceptez les termes de la présente Politique de Confidentialité. Nous vous invitons à la consulter régulièrement afin de rester informé des éventuelles mises à jour.
          </p>
          <a href="/" className="button-secondary mt-8 inline-block">Retour à l'accueil</a>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;