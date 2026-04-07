"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'glass py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Navigation Gauche */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/boutique" className="text-[11px] font-bold hover:text-tertiary-container transition-colors uppercase tracking-[0.2em]">Collections</Link>
          <Link href="/admin-supplier" className="text-[11px] font-bold hover:text-tertiary-container transition-colors uppercase tracking-[0.2em]">Fournisseurs</Link>
        </nav>

        {/* Logo Central */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-display font-bold tracking-[0.3em] text-primary">
          AYMARDSTORE
        </Link>

        {/* Actions Droite */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <Link href="/dashboard" className="hidden sm:block p-1 hover:text-tertiary-container transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </Link>

          <Link href="/panier" className="relative p-1 hover:text-tertiary-container transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-tertiary-fixed text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-1 hover:text-tertiary-container transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Editorial */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-surface z-40 animate-in fade-in slide-in-from-top-4 duration-500">
          <nav className="flex flex-col items-center justify-center h-full space-y-12">
            <Link
              href="/"
              className="text-2xl font-display font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/boutique"
              className="text-2xl font-display font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/dashboard"
              className="text-2xl font-display font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mon Compte
            </Link>
            <Link
              href="/admin-supplier"
              className="text-2xl font-display font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fournisseurs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
