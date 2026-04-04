"use client";

import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { suppliers } from "@/lib/data";

const AdminSupplier = () => {
  const [activeTab, setActiveTab] = useState('fournisseurs');
  const [showModal, setShowModal] = useState(false);
  const [newSupplier, setNewSupplier] = useState({ name: '', location: '' });

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Simulation: Le fournisseur ${newSupplier.name} a été ajouté.`);
    setShowModal(false);
    setNewSupplier({ name: '', location: '' });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-20 min-h-[70vh]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h1 className="text-6xl font-bold mb-4 tracking-tighter uppercase">Gestion Fournisseurs</h1>
            <p className="text-on-surface-variant max-w-xl text-lg italic">Administration et intégration de la chaîne logistique.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-secondary-container text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all shadow-xl"
          >
             + Ajouter un Fournisseur
          </button>
        </div>

        {/* Modal Simulation */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
             <div className="bg-white w-full max-w-md p-12 border border-outline-variant shadow-2xl relative">
                <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 p-2 hover:bg-surface-container-low rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8">Nouveau Fournisseur</h2>
                <form onSubmit={handleAddSupplier} className="space-y-6">
                   <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Nom de l'entreprise</label>
                      <input
                        required
                        type="text"
                        value={newSupplier.name}
                        onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
                        className="w-full bg-surface-container-low border-none p-4 text-sm focus:ring-1 focus:ring-secondary-container outline-none"
                        placeholder="Ex: Mode France SARL"
                      />
                   </div>
                   <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Localisation</label>
                      <input
                        required
                        type="text"
                        value={newSupplier.location}
                        onChange={(e) => setNewSupplier({...newSupplier, location: e.target.value})}
                        className="w-full bg-surface-container-low border-none p-4 text-sm focus:ring-1 focus:ring-secondary-container outline-none"
                        placeholder="Ex: Paris, France"
                      />
                   </div>
                   <button type="submit" className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-secondary-container transition-all">
                     Enregistrer le Fournisseur
                   </button>
                </form>
             </div>
          </div>
        )}

        {/* Admin Tabs */}
        <div className="flex space-x-12 mb-20 border-b border-outline-variant pb-8">
           <button
             onClick={() => setActiveTab('fournisseurs')}
             className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'fournisseurs' ? 'text-secondary-container border-b-2 border-secondary-container pb-8 -mb-8.5' : 'text-on-surface-variant hover:text-primary'}`}
           >
             Fournisseurs Actifs
           </button>
           <button
             onClick={() => setActiveTab('stocks')}
             className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'stocks' ? 'text-secondary-container border-b-2 border-secondary-container pb-8 -mb-8.5' : 'text-on-surface-variant hover:text-primary'}`}
           >
             Gestion des Stocks
           </button>
           <button
             onClick={() => setActiveTab('analytics')}
             className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'analytics' ? 'text-secondary-container border-b-2 border-secondary-container pb-8 -mb-8.5' : 'text-on-surface-variant hover:text-primary'}`}
           >
             Statistiques & Performance
           </button>
        </div>

        {/* Content */}
        {activeTab === 'fournisseurs' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="bg-white border border-outline-variant p-10 shadow-lg card-lift">
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center font-black text-xl text-secondary-container">
                     {supplier.name.charAt(0)}
                   </div>
                   <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 ${supplier.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                     {supplier.status}
                   </span>
                 </div>
                 <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">{supplier.name}</h3>
                 <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-10">{supplier.location}</p>

                 <div className="space-y-6 pt-10 border-t border-outline-variant/30">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                       <span>Produits Actifs</span>
                       <span className="text-primary font-black">{supplier.items}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                       <span>Score Qualité</span>
                       <span className="text-secondary-container font-black">{supplier.rating} / 5.0</span>
                    </div>
                 </div>

                 <button className="mt-12 w-full text-center text-[10px] font-bold uppercase tracking-widest py-4 border border-outline-variant hover:bg-primary hover:text-white hover:border-primary transition-all">
                   Gérer l'intégration
                 </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center bg-surface-container-low border border-outline-variant border-dashed">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-on-surface-variant mb-4">Module en cours de développement</h2>
            <p className="text-sm italic">Les fonctionnalités de {activeTab} seront bientôt disponibles.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AdminSupplier;
