import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '@/imports/image-10.png';

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Bureau professionnel moderne et propre"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)' }}></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 drop-shadow-md">
            Nettoyage Professionnel<br />Val-de-Marne
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 drop-shadow">
            Experts en nettoyage de bureaux, bâtiments et locaux commerciaux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0745160029" className="bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
              Appelez-nous
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-[#1E3A8A] font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
