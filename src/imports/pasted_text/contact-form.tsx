import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend (e.g. EmailJS, Formspree, custom API)
    // For now, we simulate an email sending via mailto or simply show an alert
    alert("Votre demande de devis a été envoyée. Nous vous contacterons très prochainement.");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
            <a href="tel:0745160029" className="text-[#1E3A8A] hover:underline block font-medium">07 45 16 00 29</a>
            <a href="tel:0767132205" className="text-[#1E3A8A] hover:underline block font-medium">07 67 13 22 05</a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:Mhd.service94@gmail.com" className="text-[#1E3A8A] hover:underline font-medium">Mhd.service94@gmail.com</a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intervention</h3>
            <p className="text-gray-600 font-medium">Val-de-Marne<br />Île-de-France<br /><span className="text-sm italic font-normal">(sous réserve de devis)</span></p>
          </div>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 p-8 md:p-12 shadow-sm rounded-2xl">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 text-center md:text-left">
            Contactez-nous pour obtenir un devis en nettoyage :
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Ligne 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="nom" className="text-sm font-semibold text-gray-700 mb-1">Nom<span className="text-red-500">*</span></label>
                <input type="text" id="nom" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="prenom" className="text-sm font-semibold text-gray-700 mb-1">Prénom<span className="text-red-500">*</span></label>
                <input type="text" id="prenom" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
            </div>

            {/* Ligne 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1">E-mail<span className="text-red-500">*</span></label>
                <input type="email" id="email" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telephone" className="text-sm font-semibold text-gray-700 mb-1">Numéro de téléphone<span className="text-red-500">*</span></label>
                <input type="tel" id="telephone" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
            </div>

            {/* Ligne 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="entreprise" className="text-sm font-semibold text-gray-700 mb-1">Nom de l'entreprise<span className="text-red-500">*</span></label>
                <input type="text" id="entreprise" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="codepostal" className="text-sm font-semibold text-gray-700 mb-1">Code postal<span className="text-red-500">*</span></label>
                <input type="text" id="codepostal" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
            </div>

            {/* Ligne 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="besoin" className="text-sm font-semibold text-gray-700 mb-1">Type de besoin<span className="text-red-500">*</span></label>
                <select id="besoin" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors appearance-none cursor-pointer">
                  <option value="">Veuillez sélectionner</option>
                  <option value="bureaux">Bureaux et bâtiments</option>
                  <option value="fin_chantier">Nettoyage de fin de chantier</option>
                  <option value="entrepots">Entretien d'entrepôts et locaux commerciaux</option>
                  <option value="remise_en_etat">Remise en état des lieux</option>
                  <option value="parties_communes">Entretien des parties communes</option>
                  <option value="vitres">Lavage de vitres</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="secteur" className="text-sm font-semibold text-gray-700 mb-1">Précisez votre secteur d'activité<span className="text-red-500">*</span></label>
                <select id="secteur" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors appearance-none cursor-pointer">
                  <option value="">Veuillez sélectionner</option>
                  <option value="tertiaire">Tertiaire</option>
                  <option value="industrie">Industrie</option>
                  <option value="commerce">Commerce</option>
                  <option value="btp">BTP</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Ligne 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="superficie" className="text-sm font-semibold text-gray-700 mb-1">Superficie en m2<span className="text-red-500">*</span></label>
                <input type="number" id="superficie" required min="1" className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="echeance" className="text-sm font-semibold text-gray-700 mb-1">Échéance du projet<span className="text-red-500">*</span></label>
                <select id="echeance" required className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors appearance-none cursor-pointer">
                  <option value="">Veuillez sélectionner</option>
                  <option value="immediat">Immédiat</option>
                  <option value="1_mois">Dans 1 mois</option>
                  <option value="3_mois">Dans 3 mois</option>
                  <option value="plus_tard">Plus tard</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1">Message / Précisions<span className="text-red-500">*</span></label>
              <textarea id="message" required rows={4} className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-colors resize-y"></textarea>
            </div>

            {/* Consentement RGPD */}
            <div className="flex items-start gap-3 mt-6 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
              <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 border-gray-300 rounded text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" />
              <div className="flex flex-col">
                <label htmlFor="consent" className="text-sm text-gray-700 font-medium cursor-pointer">
                  J'accepte la politique de confidentialité
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  En soumettant ce formulaire, j'accepte que mes données soient recueillies et traitées par Mhd Service pour me contacter à des fins de devis et commerciales.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end mt-8">
              <button type="submit" className="bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold py-3 px-12 rounded-lg transition-colors w-full md:w-auto shadow-md">
                Envoyer ma demande
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
