"use client";

import React, { useEffect, useRef } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();
  const hasCleared = useRef(false);

  useEffect(() => {
    if (!hasCleared.current) {
        clearCart();
        hasCleared.current = true;
    }
  }, [clearCart]);

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-24 md:py-40 text-center min-h-[70vh]">
        <div className="mb-8 md:mb-12 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-100 text-green-600">
           <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter uppercase leading-tight">Commande Confirmée !</h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 md:mb-16 italic">
          Merci pour votre confiance. Votre commande est en cours de préparation et sera expédiée prochainement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
           <Link href="/dashboard" className="bg-primary text-white px-10 md:px-12 py-4 md:py-5 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-secondary-container transition-all text-center">
             Suivre ma Commande
           </Link>
           <Link href="/boutique" className="bg-surface-container-low text-primary px-10 md:px-12 py-4 md:py-5 font-bold uppercase tracking-widest text-xs md:text-sm border border-outline-variant hover:bg-white transition-all text-center">
             Retourner à la Boutique
           </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutSuccess;
