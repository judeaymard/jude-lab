"use client";

import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-6 py-40 text-center">
          <h1 className="headline-lg uppercase mb-8">Article Introuvable</h1>
          <Link href="/boutique" className="text-[11px] font-bold uppercase tracking-widest border-b border-primary pb-2">Retour aux collections</Link>
        </div>
      </MainLayout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1 && product.sizes[0] !== 'Unique' && product.sizes[0] !== 'Standard' && product.sizes[0] !== 'Moyen' && product.sizes[0] !== '40mm') {
      alert('Veuillez sélectionner une taille');
      return;
    }
    addToCart({
      id: product.id + (selectedSize || ''),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
      color: product.colors[0]
    });
    alert('Ajouté à votre sélection.');
  };

  return (
    <MainLayout>
      <div className="pt-32 pb-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Gallery Section - Editorial Layout */}
            <div className="lg:col-span-7 space-y-12">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" />
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1594932224010-74f43a183546?q=80&w=800" className="w-full h-full object-cover grayscale" alt="Detail" />
                </div>
                <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1584917033904-493bb3ce3fe1?q=80&w=800" className="w-full h-full object-cover grayscale" alt="Detail" />
                </div>
              </div>
            </div>

            {/* Info Section - Sticky & Minimalist */}
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <div className="max-w-md">
                <div className="flex justify-between items-baseline mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-tertiary-container">{product.category}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant italic">Art. {product.id}0024</span>
                </div>

                <h1 className="headline-lg uppercase mb-4 leading-tight">{product.name}</h1>
                <p className="text-xl font-light italic mb-12">{product.price.toFixed(2)}€</p>

                <div className="space-y-12">
                  <p className="body-md text-on-surface-variant leading-relaxed">
                    {product.description}
                  </p>

                  {/* Size Selection */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Taille</span>
                      <button className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant">Guide des tailles</button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[50px] h-[50px] flex items-center justify-center text-[10px] font-bold uppercase transition-all duration-300 ${selectedSize === size ? 'bg-primary text-white' : 'bg-transparent border border-outline-variant hover:border-primary'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-6 pt-6">
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-primary text-white py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-tertiary-fixed transition-all"
                    >
                      Ajouter au Panier
                    </button>
                    <div className="flex items-center justify-center space-x-8 text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">
                       <span>Expédition en 24h</span>
                       <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                       <span>Retours offerts</span>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="border-t border-outline-variant pt-12">
                     <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6">Composition & Entretien</h3>
                     <ul className="space-y-4">
                        {product.details.map((detail, idx) => (
                          <li key={idx} className="text-[11px] text-on-surface-variant flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary mr-4"></span>
                            {detail}
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
