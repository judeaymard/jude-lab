"use client";

import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { products } from "@/lib/data";

const Boutique = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const categories = ['Tous', 'Vêtements', 'Accessoires', 'Chaussures'];

  const filteredProducts = activeCategory === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <MainLayout>
      <div className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          {/* Header de la collection */}
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-tertiary-container mb-6 block">Collection 2024 / Boutique</span>
              <h1 className="display-lg leading-[1.1] mb-8 uppercase">LES COLLECTIONS</h1>
              <p className="body-md text-on-surface-variant max-w-lg">
                Une sélection rigoureuse de pièces intemporelles. Chaque article incarne notre vision de l'élégance moderne et du savoir-faire traditionnel.
              </p>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Filtrer par Catégorie</span>
               <div className="flex flex-wrap justify-end gap-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 pb-2 ${activeCategory === cat ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grille de produits éditoriale */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-24">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/produits/${product.id}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-surface-container-low transition-all">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  {/* Badge Discret */}
                  <div className="absolute top-6 right-6">
                    <span className="text-[8px] font-bold uppercase tracking-widest bg-white/80 backdrop-blur-md px-4 py-2">Exclusif</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">{product.category}</span>
                    <span className="text-xs font-light italic">{product.price.toFixed(2)}€</span>
                  </div>
                  <h3 className="text-[13px] font-bold tracking-widest uppercase group-hover:text-tertiary-container transition-colors">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-40 text-center">
              <p className="body-md text-on-surface-variant italic">Aucun article ne correspond à cette sélection.</p>
              <button
                onClick={() => setActiveCategory('Tous')}
                className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] border-b border-primary pb-2"
              >
                Retour à la collection complète
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Boutique;
