import { useEffect, useRef } from 'react';
import StoreButtons from './StoreButtons';
import lottie from 'lottie-web';
import animationData from '../assets/Animation.json';

interface HeroProps {
  id?: string;
}

export default function Hero({ id }: HeroProps) {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <section id={id} className="min-h-[110vh] flex items-center py-20 max-md:pt-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
              Un contact. Un clic.
            </h1>
            
            <div className="border-l-4 border-[#3F8DF3] pl-4 my-6">
              <p className="text-xl text-white font-medium">Partager son réseau n'a jamais été aussi simple !</p>
            </div>
            
            <p className="text-[#73777B] text-lg max-w-lg">
              RelayMe révolutionne le partage de contacts professionnels avec confidentialité et simplicité.
            </p>
            
            <div className="pt-2">
              <StoreButtons />
            </div>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="relative z-10 floating">
              <div
                ref={animationContainer}
                style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
                className="mx-auto"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3F8DF3]/10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}