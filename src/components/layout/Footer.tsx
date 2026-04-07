import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-8">AymardStore</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              L'excellence de la mode française, curatée avec passion pour les esprits audacieux et élégants.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary-container transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-secondary-container transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-secondary-container transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-on-surface-variant hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/boutique" className="text-sm text-on-surface-variant hover:text-white transition-colors">Boutique</Link></li>
              <li><Link href="/dashboard" className="text-sm text-on-surface-variant hover:text-white transition-colors">Mon Compte</Link></li>
              <li><Link href="/admin-supplier" className="text-sm text-on-surface-variant hover:text-white transition-colors">Admin Fournisseurs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Aide & Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-on-surface-variant hover:text-white transition-colors">Livraison & Retours</Link></li>
              <li><Link href="#" className="text-sm text-on-surface-variant hover:text-white transition-colors">Conditions Générales</Link></li>
              <li><Link href="#" className="text-sm text-on-surface-variant hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="#" className="text-sm text-on-surface-variant hover:text-white transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-sm text-on-surface-variant mb-6">Restez à jour avec nos dernières collections et offres exclusives.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre e-mail"
                className="bg-primary-container text-sm px-4 py-3 w-full border-none focus:ring-1 focus:ring-secondary-container text-white outline-none"
              />
              <button className="bg-secondary-container px-6 py-3 transition-colors hover:bg-opacity-90">OK</button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-container pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
          <p>© 2024 AymardStore. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>PAIEMENT SÉCURISÉ</span>
            <span>VISA • MASTERCARD • PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
