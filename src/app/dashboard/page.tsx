"use client";

import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

const Dashboard = () => {
  const orders = [
    { id: '#MDF-2024-001', date: '12 Jan 2024', status: 'Livré', total: 189.00 },
    { id: '#MDF-2024-002', date: '15 Fév 2024', status: 'En préparation', total: 345.00 },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12 md:py-20 min-h-[70vh]">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 tracking-tighter uppercase">Mon Compte</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-20 items-start">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8 md:space-y-12">
            <div className="pb-8 md:pb-12 border-b border-outline-variant">
              <h2 className="text-xl md:text-2xl font-bold uppercase mb-2 md:mb-4 tracking-tighter">Jean Dupont</h2>
              <p className="text-xs md:text-sm text-on-surface-variant font-medium uppercase tracking-widest italic">Client Privilégié</p>
            </div>

            <nav className="flex flex-row lg:flex-col flex-wrap gap-6 md:gap-8 lg:space-y-8">
              <Link href="/dashboard" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary-container">Tableau de Bord</Link>
              <Link href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary">Mes Commandes</Link>
              <Link href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary">Mes Favoris</Link>
              <Link href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary">Paramètres</Link>
              <Link href="/" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary mt-0 lg:mt-12 hover:text-primary">Déconnexion</Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16 md:space-y-24">
            {/* Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12">
               <div className="bg-white p-8 md:p-12 border border-outline-variant shadow-lg card-lift">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 md:mb-6">Total Dépensé</h3>
                 <span className="text-2xl md:text-3xl font-black">534.00€</span>
               </div>
               <div className="bg-white p-8 md:p-12 border border-outline-variant shadow-lg card-lift">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 md:mb-6">Commandes</h3>
                 <span className="text-2xl md:text-3xl font-black">02</span>
               </div>
               <div className="bg-white p-8 md:p-12 border border-outline-variant shadow-lg card-lift">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 md:mb-6">Articles Favoris</h3>
                 <span className="text-2xl md:text-3xl font-black">05</span>
               </div>
            </div>

            {/* Orders Table */}
            <div className="space-y-8 md:space-y-12">
               <h3 className="text-2xl font-bold uppercase tracking-tighter">Historique des Commandes</h3>
               <div className="bg-white border border-outline-variant shadow-xl overflow-x-auto">
                 <table className="w-full text-left min-w-[600px]">
                   <thead className="bg-surface-container-low border-b border-outline-variant">
                     <tr>
                       <th className="px-6 md:px-10 py-4 md:py-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">ID Commande</th>
                       <th className="px-6 md:px-10 py-4 md:py-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
                       <th className="px-6 md:px-10 py-4 md:py-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                       <th className="px-6 md:px-10 py-4 md:py-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Total</th>
                     </tr>
                   </thead>
                   <tbody>
                     {orders.map((order) => (
                       <tr key={order.id} className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
                         <td className="px-6 md:px-10 py-6 md:py-8 text-sm font-bold tracking-tight">{order.id}</td>
                         <td className="px-6 md:px-10 py-6 md:py-8 text-sm font-medium uppercase tracking-widest">{order.date}</td>
                         <td className="px-6 md:px-10 py-6 md:py-8">
                           <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 ${order.status === 'Livré' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                             {order.status}
                           </span>
                         </td>
                         <td className="px-6 md:px-10 py-6 md:py-8 text-sm font-black text-right">{order.total.toFixed(2)}€</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>

            {/* Preferred Address */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-outline-variant border-dashed">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-6 md:mb-8">Adresse de Livraison Par Défaut</h3>
              <p className="text-base md:text-lg font-bold leading-relaxed max-w-sm uppercase tracking-tight">
                Jean Dupont<br />
                123 Avenue des Champs-Élysées<br />
                75008 Paris, France
              </p>
              <button className="mt-6 md:mt-8 text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-secondary-container hover:border-secondary-container transition-all">
                Modifier l'adresse
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
