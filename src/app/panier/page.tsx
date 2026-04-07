"use client";

import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const Panier = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout-success');
  };

  return (
    <MainLayout>
      <div className="pt-40 pb-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-on-surface-variant mb-6 block">Votre Sélection</span>
             <h1 className="display-lg uppercase">VOTRE PANIER</h1>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-40 bg-surface-container-low border-y border-outline-variant/20">
              <p className="body-md text-on-surface-variant italic mb-12">Votre panier est actuellement vide.</p>
              <Link href="/boutique" className="inline-block bg-primary text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-tertiary transition-all">
                Explorer les Collections
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

              {/* List of items */}
              <div className="lg:col-span-8 space-y-12">
                <div className="hidden md:grid grid-cols-12 gap-8 pb-6 border-b border-outline-variant/30 text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                  <span className="col-span-7">Description du Produit</span>
                  <span className="col-span-2 text-center">Quantité</span>
                  <span className="col-span-3 text-right">Montant</span>
                </div>

                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col md:grid md:grid-cols-12 gap-8 items-center pb-12 border-b border-outline-variant/10">
                    <div className="w-full md:col-span-7 flex items-center space-x-10">
                      <div className="w-24 aspect-[3/4] bg-surface-container-low overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                      </div>
                      <div className="space-y-3">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Collection 2024</span>
                        <h3 className="text-sm font-bold uppercase tracking-widest">{item.name}</h3>
                        <p className="text-[10px] text-on-surface-variant italic">
                          {item.size && `Taille : ${item.size}`} {item.color && ` • ${item.color}`}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[9px] font-bold uppercase tracking-widest text-tertiary-container hover:text-primary transition-colors border-b border-tertiary-container/30"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>

                    <div className="w-full md:col-span-2 flex justify-center">
                      <div className="flex items-center space-x-8 text-xs font-light">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-tertiary transition-colors">—</button>
                        <span className="font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-tertiary transition-colors">+</button>
                      </div>
                    </div>

                    <div className="w-full md:col-span-3 text-right">
                      <span className="text-sm font-light italic">{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  </div>
                ))}

                <Link href="/boutique" className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary pb-2 hover:text-tertiary-container transition-all">
                  Continuer les Achats
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4 bg-surface-container-low p-10 md:p-12 lg:sticky lg:top-40">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] mb-12">RÉCAPITULATIF</h2>

                <div className="space-y-8 mb-12 pb-12 border-b border-outline-variant/30">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Sous-total</span>
                    <span className="text-sm font-light italic">{cartTotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Livraison Standard</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-container">OFFERTE</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline mb-16">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Total TTC</span>
                  <span className="text-2xl font-display font-bold italic">{cartTotal.toFixed(2)}€</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-white py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-tertiary transition-all"
                >
                  Finaliser la Commande
                </button>

                <div className="mt-12 space-y-4">
                   <div className="flex items-center space-x-4 opacity-40">
                      <div className="w-4 h-4 bg-primary"></div>
                      <span className="text-[8px] font-bold uppercase tracking-widest">Paiement Sécurisé SSL</span>
                   </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Panier;
