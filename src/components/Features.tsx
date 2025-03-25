import { Plus, Check, Share2 } from 'lucide-react';

interface FeaturesProps {
  id?: string;
}

const features = [
  {
    icon: Plus,
    title: "Ajouter des contacts",
    description: "Ajoutez vos contacts professionnels avec leurs métiers et entreprises en toute simplicité.",
    image: "../assets/image/add-contact.png"
  },
  {
    icon: Check,
    title: "Demander une autorisation",
    description: "Protégez la confidentialité en obtenant l'accord avant tout partage de contact.",
    image: "../assets/image/request-permission.png"
  },
  {
    icon: Share2,
    title: "Partager facilement",
    description: "Partagez instantanément via SMS ou WhatsApp avec une interface intuitive.",
    image: "../assets/image/share-contact.png"
  }
];

export default function Features({ id }: FeaturesProps) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 gradient-text text-center">
          Comment utiliser RelayMe ?
        </h2>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(63,141,243,0.15)]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3F8DF3]/20 to-transparent" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#3F8DF3]/10">
                    <feature.icon className="w-6 h-6 text-[#3F8DF3]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#3F8DF3]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-[#73777B] leading-relaxed">
                  {feature.description}
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-[#3F8DF3] to-[#3F8DF3]/50 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}