import StoreButtons from './StoreButtons';

interface CTAProps {
  id?: string;
}

export default function CTA({ id }: CTAProps) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Rejoignez la communauté RelayMe dès aujourd'hui !
        </h2>
        
        <StoreButtons className="justify-center mb-6" />
        
        <p className="text-[#73777B] text-sm italic">
          Disponible sur iOS et Android
        </p>
      </div>
    </section>
  );
}