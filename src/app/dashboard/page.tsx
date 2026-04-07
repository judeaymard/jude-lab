"use client";

import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

const Dashboard = () => {
  const orders = [
    { id: '#AYM-2024-042', date: '12 MARS 2024', status: 'LIVRÉ', total: 489.00 },
    { id: '#AYM-2024-051', date: '05 AVRIL 2024', status: 'EN TRANSIT', total: 1290.00 },
  ];

  return (
    <MainLayout>
      <div className="pt-40 pb-40">
        <div className="container mx-auto px-6">
          <div className="mb-24">
             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-on-surface-variant mb-6 block italic">Espace Client Privé</span>
             <h1 className="display-lg uppercase leading-tight">MON COMPTE</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

            {/* Navigation Latérale Éditoriale */}
            <div className="lg:col-span-3 space-y-16">
              <div className="pb-16 border-b border-outline-variant/30">
                <h2 className="text-xl font-display font-bold uppercase tracking-widest mb-4">M. JEAN DUPONT</h2>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-tertiary-container">Membre Signature depuis 2024</span>
              </div>

              <nav className="flex flex-col space-y-10">
                <Link href="/dashboard" className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary border-l-2 border-primary pl-6">Aperçu</Link>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.3em] text-on-surface-variant hover:text-primary pl-6 transition-colors">Mes Commandes</Link>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.3em] text-on-surface-variant hover:text-primary pl-6 transition-colors">Ma Curation Favoris</Link>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.3em] text-on-surface-variant hover:text-primary pl-6 transition-colors">Adresses & Profil</Link>
                <Link href="/" className="text-[11px] font-bold uppercase tracking-[0.3em] text-tertiary pl-6 pt-10">Se Déconnecter</Link>
              </nav>
            </div>

            {/* Contenu Principal */}
            <div className="lg:col-span-9 space-y-24">

              {/* Stats / Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="bg-surface-container-low p-12 relative overflow-hidden group">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-8 block">Dépenses Annuelles</span>
                    <h3 className="text-3xl font-display font-bold italic">1 779.00€</h3>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-110 transition-transform"></div>
                 </div>
                 <div className="bg-surface-container-low p-12 relative overflow-hidden group">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-8 block">Statut Fidélité</span>
                    <h3 className="text-3xl font-display font-bold italic">Élite Paris</h3>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-110 transition-transform"></div>
                 </div>
              </div>

              {/* Historique - Design Épuré */}
              <div className="space-y-12">
                 <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.4em]">HISTORIQUE RÉCENT</h3>
                    <button className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant">Voir Tout</button>
                 </div>

                 <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-outline-variant/10 hover:bg-surface-container-low/30 transition-all px-4">
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 mb-6 md:mb-0">
                           <span className="text-[11px] font-bold tracking-widest">{order.id}</span>
                           <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">{order.date}</span>
                        </div>
                        <div className="flex items-center space-x-12">
                           <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${order.status === 'LIVRÉ' ? 'text-green-600' : 'text-tertiary-container'}`}>
                             {order.status}
                           </span>
                           <span className="text-sm font-light italic">{order.total.toFixed(2)}€</span>
                           <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Preference / Address - Editorial Card */}
              <div className="border border-outline-variant/30 p-12 md:p-16 relative">
                 <div className="absolute top-12 right-12">
                    <span className="w-12 h-[1px] bg-primary block"></span>
                 </div>
                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-10 block">Résidence de Livraison Principale</span>
                 <p className="text-lg font-display font-bold leading-relaxed max-w-sm uppercase tracking-wider mb-12">
                    JEAN DUPONT<br />
                    123 AVENUE DES CHAMPS-ÉLYSÉES<br />
                    75008 PARIS, FRANCE
                 </p>
                 <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-2 hover:text-tertiary-container transition-colors">
                    MODIFIER MES INFORMATIONS
                 </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
