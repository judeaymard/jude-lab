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
      <div className="container mx-auto px-6 py-20">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-bold mb-6 tracking-tighter uppercase">La Boutique</h1>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg italic">Découvrez notre curation exclusive des meilleures pièces de la saison.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-12 mb-20 border-b border-outline-variant pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all ${activeCategory === cat ? 'text-secondary-container' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-12 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <span>{filteredProducts.length} ARTICLES TROUVÉS</span>
          <div className="flex items-center space-x-4">
            <span>TRIER PAR :</span>
            <select className="bg-transparent border-none outline-none font-bold text-[10px] cursor-pointer">
              <option>PERTINENCE</option>
              <option>PRIX CROISSANT</option>
              <option>PRIX DÉCROISSANT</option>
              <option>NOUVEAUTÉS</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/produits/${product.id}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-surface-container-low transition-all group-hover:shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md">
                   <button className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-secondary-container transition-colors">
                     Aperçu Rapide
                   </button>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold tracking-tight">{product.name}</h3>
                  <span className="text-lg font-medium">{product.price.toFixed(2)}€</span>
                </div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{product.category}</p>
                <div className="flex space-x-1 pt-2">
                  <div className="w-3 h-3 rounded-full bg-primary border border-outline-variant"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary border border-outline-variant"></div>
                  <div className="w-3 h-3 rounded-full bg-surface-container-low border border-outline-variant"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Boutique;
