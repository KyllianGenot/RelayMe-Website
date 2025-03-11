import { Plus, Check, Share2 } from 'lucide-react';

interface FeaturesProps {
  id?: string;
}

const features = [
  {
    icon: Plus,
    title: "Ajouter des contacts",
    description: "Ajoutez vos contacts professionnels avec leurs métiers et entreprises en toute simplicité."
  },
  {
    icon: Check,
    title: "Demander une autorisation",
    description: "Protégez la confidentialité en obtenant l'accord avant tout partage de contact."
  },
  {
    icon: Share2,
    title: "Partager facilement",
    description: "Partagez instantanément via SMS ou WhatsApp avec une interface intuitive."
  }
];

export default function Features({ id }: FeaturesProps) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Comment utiliser RelayMe ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card p-8">
              <feature.icon className="w-12 h-12 text-[#3F8DF3] mb-4" />
              <h3 className="text-[#3F8DF3] text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-[#73777B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}