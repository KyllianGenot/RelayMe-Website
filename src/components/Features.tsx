import { Plus, Check, Share2 } from 'lucide-react';

interface FeaturesProps {
  id?: string;
}

const features = [
  {
    icon: Plus,
    title: "Ajout de contacts professionnels",
    description: "Enregistrez vos contacts professionnels en spécifiant leur métier et en les classant dans des catégories personnalisées, en plus des informations habituelles.",
    image: "/ajout.webp"
  },
  {
    icon: Check,
    title: "Tri par catégorie",
    description: "Accédez facilement à vos contacts professionnels grâce à un tri par catégories personnalisées, pour une organisation optimale de votre réseau.",
    video: "/tri.mp4",
    frame: "/cadre.webp" // Ajout du cadre pour la vidéo
  },
  {
    icon: Share2,
    title: "Partage simplifié de contacts",
    description: "Partagez vos contacts en un clic grâce à un message pré-enregistré personnalisé, sans perte de temps en rédaction.",
    image: "/autorisation.webp"
  }
];

export default function Features({ id }: FeaturesProps) {
  // Épaisseur estimée de la bordure (à ajuster si nécessaire)
  const borderThickness = 10; // en pixels

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
                <div className="relative w-full max-w-[250px] mx-auto" style={{ aspectRatio: '443 / 898' }}>
                  {feature.video ? (
                    <div className="relative w-full h-full">
                      {/* Gradient overlay placé en dessous */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#3F8DF3]/20 to-transparent rounded-[60px]" />
                      {/* Vidéo ajustée avec marges pour éviter la bordure */}
                      <video
                        src={feature.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-[8px] left-[8px] w-[calc(100%-16px)] h-[calc(100%-16px)] object-fill rounded-[40px] shadow-[0_0_60px_rgba(63,141,243,0.15)]"
                      />
                      {/* Cadre superposé */}
                      <img
                        src={feature.frame}
                        alt="Cadre de téléphone"
                        className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      {/* Gradient overlay placé en dessous */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#3F8DF3]/20 to-transparent rounded-[60px]" />
                      {/* Affichage direct de l'image avec cadre inclus */}
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-[40px] shadow-[0_0_60px_rgba(63,141,243,0.15)]"
                      />
                    </div>
                  )}
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