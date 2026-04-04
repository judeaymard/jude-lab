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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-primary">
          AYMARDSTORE
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-sm font-medium hover:text-secondary-container transition-colors uppercase tracking-widest">Accueil</Link>
          <Link href="/boutique" className="text-sm font-medium hover:text-secondary-container transition-colors uppercase tracking-widest">Boutique</Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-secondary-container transition-colors uppercase tracking-widest">Mon Compte</Link>
          <Link href="/admin-supplier" className="text-sm font-medium hover:text-secondary-container transition-colors uppercase tracking-widest">Fournisseurs</Link>
        </nav>

        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <Link href="/panier" className="relative p-2 hover:bg-surface-container-low rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-secondary-container text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-surface-container-low animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-6">
            <Link
              href="/"
              className="text-lg font-bold uppercase tracking-widest border-b border-surface-container-low pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/boutique"
              className="text-lg font-bold uppercase tracking-widest border-b border-surface-container-low pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Boutique
            </Link>
            <Link
              href="/dashboard"
              className="text-lg font-bold uppercase tracking-widest border-b border-surface-container-low pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mon Compte
            </Link>
            <Link
              href="/admin-supplier"
              className="text-lg font-bold uppercase tracking-widest border-b border-surface-container-low pb-2"
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
