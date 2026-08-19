export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Mhd Service</h3>
          <p className="text-gray-400 font-medium mb-6">Expert en Nettoyage Professionnel - Val-de-Marne</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-300 mb-8">
            <a href="tel:0745160029" className="hover:text-white transition-colors">07 45 16 00 29</a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a href="tel:0767132205" className="hover:text-white transition-colors">07 67 13 22 05</a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a href="mailto:Mhd.service94@gmail.com" className="hover:text-white transition-colors">Mhd.service94@gmail.com</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Mhd Service. Tous droits réservés.</p>
            <p>Île-de-France, Val-de-Marne</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
