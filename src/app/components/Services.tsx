import { Building2, HardHat, Warehouse, Home, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bureauxImage from '@/imports/image-2.png';
import finChantierImage from '@/imports/image-3.png';
import entrepotsImage from '@/imports/image-4.png';
import remiseEtatImage from '@/imports/image-5.png';
import partiesCommunesImage from '@/imports/image-6.png';
import lavageVitresImage from '@/imports/image-7.png';

const services = [
  {
    icon: Building2,
    title: 'Bureaux et Bâtiments',
    description: 'Nettoyage professionnel de bureaux et bâtiments professionnels',
    backgroundImage: bureauxImage
  },
  {
    icon: HardHat,
    title: 'Fin de Chantier',
    description: 'Nettoyage approfondi après travaux et chantiers',
    backgroundImage: finChantierImage
  },
  {
    icon: Warehouse,
    title: 'Entrepôts et Locaux Commerciaux',
    description: 'Entretien régulier d\'entrepôts et espaces commerciaux',
    backgroundImage: entrepotsImage
  },
  {
    icon: Home,
    title: 'Remise en État',
    description: 'Remise en état complète de tous types de locaux',
    backgroundImage: remiseEtatImage
  },
  {
    icon: Users,
    title: 'Parties Communes',
    description: 'Entretien des parties communes et espaces partagés',
    backgroundImage: partiesCommunesImage
  },
  {
    icon: Sparkles,
    title: 'Lavage de Vitres',
    description: 'Nettoyage professionnel de vitres et surfaces vitrées',
    backgroundImage: lavageVitresImage
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600">Nettoyage professionnel uniquement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const hasBg = !!service.backgroundImage;
            
            return (
              <div 
                key={index} 
                className={`group relative p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[220px] flex flex-col justify-end ${!hasBg ? 'bg-white' : ''}`}
              >
                {hasBg && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <ImageWithFallback 
                        src={service.backgroundImage} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Un calque assombri pour s'assurer que le texte reste lisible sur l'image */}
                    <div className="absolute inset-0 bg-gray-900/60 z-0 transition-opacity duration-300 group-hover:bg-gray-900/70"></div>
                  </>
                )}
                
                <div className={`relative z-10 mt-auto ${hasBg ? 'text-white' : 'text-gray-900'}`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${hasBg ? 'bg-white/20 backdrop-blur-sm' : 'bg-blue-100'}`}>
                    <Icon className={`w-6 h-6 ${hasBg ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className={hasBg ? 'text-gray-200' : 'text-gray-600'}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
