import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-low text-primary pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-display font-bold tracking-widest mb-10 uppercase">AYMARDSTORE</h3>
            <p className="text-on-surface-variant text-xs leading-[1.8] mb-10 max-w-xs">
              L'excellence de la mode française, curatée avec passion pour les esprits audacieux et élégants. Une curation exclusive de pièces intemporelles.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-primary hover:text-tertiary-container transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-primary hover:text-tertiary-container transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-on-surface-variant">Services</h4>
            <ul className="space-y-5">
              <li><Link href="/boutique" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Collections</Link></li>
              <li><Link href="/panier" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Panier</Link></li>
              <li><Link href="/dashboard" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Mon Compte</Link></li>
              <li><Link href="/admin-supplier" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Fournisseurs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-on-surface-variant">Support</h4>
            <ul className="space-y-5">
              <li><Link href="#" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Livraison</Link></li>
              <li><Link href="#" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Retours</Link></li>
              <li><Link href="#" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Confidentialité</Link></li>
              <li><Link href="#" className="text-xs hover:text-tertiary-container transition-colors uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-on-surface-variant">Newsletter</h4>
            <p className="text-xs text-on-surface-variant mb-8 leading-relaxed">Inscrivez-vous pour recevoir nos sélections exclusives et avant-premières.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="VOTRE EMAIL"
                className="editorial-input text-[10px] py-4 w-full uppercase tracking-widest"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest hover:text-tertiary-container transition-colors">S'inscrire</button>
            </form>
          </div>
        </div>

        <div className="border-t border-outline-variant/20 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] text-on-surface-variant uppercase tracking-[0.3em] font-bold">
          <p>© 2024 AYMARDSTORE. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <span className="opacity-50">Visa</span>
            <span className="opacity-50">Mastercard</span>
            <span className="opacity-50">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
