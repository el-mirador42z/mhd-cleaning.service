import { Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#1E3A8A]">Mhd Service</h1>
            <p className="text-sm text-gray-600 font-medium">Expert en Nettoyage Professionnel</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="tel:0745160029" className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium">
              <Phone className="w-5 h-5" />
              <span>07 45 16 00 29</span>
            </a>
            <a href="tel:0767132205" className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium">
              <Phone className="w-5 h-5" />
              <span>07 67 13 22 05</span>
            </a>
            <a href="mailto:Mhd.service94@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium">
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Mhd.service94@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
