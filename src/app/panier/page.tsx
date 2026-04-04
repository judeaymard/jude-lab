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
    // Simulation d'une redirection vers le succès
    router.push('/checkout-success');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-20 min-h-[70vh]">
        <h1 className="text-6xl font-bold mb-16 tracking-tighter uppercase">Mon Panier</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low border border-outline-variant">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-on-surface-variant">Votre panier est vide</h2>
            <Link href="/boutique" className="inline-block bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-secondary-container transition-all">
              Retourner à la Boutique
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* List */}
            <div className="lg:col-span-2 space-y-12">
              <div className="hidden md:grid grid-cols-6 gap-6 pb-6 border-b border-outline-variant text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <span className="col-span-3">Produit</span>
                <span className="text-center">Quantité</span>
                <span className="text-center">Prix</span>
                <span className="text-right">Total</span>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center pb-8 border-b border-outline-variant/30">
                  <div className="col-span-3 flex items-center space-x-8">
                    <div className="w-24 h-32 bg-surface-container-low overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase tracking-tight">{item.name}</h3>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                        {item.size && `Taille: ${item.size}`} {item.color && `• Couleur: ${item.color}`}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors underline underline-offset-4"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center border border-outline-variant px-4 py-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="font-bold hover:text-secondary-container transition-colors">-</button>
                      <span className="mx-6 font-bold text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="font-bold hover:text-secondary-container transition-colors">+</button>
                    </div>
                  </div>

                  <div className="text-center font-medium">
                    {item.price.toFixed(2)}€
                  </div>

                  <div className="text-right font-bold text-lg">
                    {(item.price * item.quantity).toFixed(2)}€
                  </div>
                </div>
              ))}

              <Link href="/boutique" className="inline-block text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-secondary-container hover:border-secondary-container transition-all">
                Continuer mes achats
              </Link>
            </div>

            {/* Summary */}
            <div className="bg-white p-12 border border-outline-variant sticky top-40 shadow-xl">
              <h2 className="text-2xl font-bold mb-10 uppercase tracking-widest">Récapitulatif</h2>
              <div className="space-y-6 mb-10 pb-10 border-b border-outline-variant/30">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant font-medium uppercase tracking-widest">Sous-total</span>
                  <span className="font-bold">{cartTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant font-medium uppercase tracking-widest">Livraison</span>
                  <span className="font-bold text-secondary-container uppercase tracking-widest text-[10px]">Offerte</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-on-surface-variant font-medium uppercase tracking-widest">TVA (20%)</span>
                   <span className="font-bold">{(cartTotal * 0.2).toFixed(2)}€</span>
                </div>
              </div>

              <div className="flex justify-between mb-12">
                <span className="text-xl font-bold uppercase tracking-widest">Total</span>
                <span className="text-2xl font-black">{cartTotal.toFixed(2)}€</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-primary text-white py-6 font-bold uppercase tracking-widest text-sm hover:bg-secondary-container transition-all mb-6"
              >
                Procéder au Paiement
              </button>

              <p className="text-[9px] text-on-surface-variant uppercase tracking-widest text-center">Paiement 100% sécurisé via SSL</p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Panier;
