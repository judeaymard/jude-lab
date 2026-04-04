"use client";

import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-6 py-40 text-center">
          <h1 className="text-4xl font-bold mb-8">Produit non trouvé</h1>
        </div>
      </MainLayout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1 && product.sizes[0] !== 'Unique' && product.sizes[0] !== 'Standard') {
      alert('Veuillez sélectionner une taille');
      return;
    }
    addToCart({
      id: product.id + (selectedSize || '') + (selectedColor || ''),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor
    });
    alert('Produit ajouté au panier !');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Gallery */}
          <div className="space-y-6 md:space-y-8">
            <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594932224010-74f43a183546?q=80\u0026w=800\u0026auto=format\u0026fit=crop" className="w-full h-full object-cover opacity-60" alt="Detail 1" />
              </div>
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                <img src="https://images.unsplash.com/photo-1584917033904-493bb3ce3fe1?q=80\u0026w=800\u0026auto=format\u0026fit=crop" className="w-full h-full object-cover opacity-60" alt="Detail 2" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-40 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <span>{product.category}</span>
                <span className="flex items-center">
                   <svg className="w-3 h-3 text-secondary-container mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   {product.rating} ({product.reviews} avis)
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-tight">{product.name}</h1>
              <p className="text-2xl md:text-3xl font-medium">{product.price.toFixed(2)}€</p>
            </div>

            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-8 md:space-y-10">
              {/* Color Selection */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Couleur : {selectedColor || 'Choisir'}</h4>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 md:w-10 h-8 md:h-10 rounded-full border-2 transition-all ${selectedColor === color ? 'border-secondary-container scale-110 shadow-lg' : 'border-outline-variant hover:border-primary'}`}
                      style={{ backgroundColor: color === 'Noir' ? '#000' : color === 'Bleu Marine' ? '#1B2A4E' : color === 'Gris' ? '#888' : '#FFF' }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Taille : {selectedSize || 'Choisir'}</h4>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 md:px-6 py-2 md:py-3 border text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-transparent border-outline-variant hover:border-primary'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity \u0026 Add */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center justify-between border border-outline-variant px-6 py-3 md:py-4 sm:w-auto">
                   <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-lg font-bold hover:text-secondary-container transition-colors">-</button>
                   <span className="mx-8 font-bold text-lg">{quantity}</span>
                   <button onClick={() => setQuantity(q => q + 1)} className="text-lg font-bold hover:text-secondary-container transition-colors">+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-grow bg-secondary-container text-white font-bold uppercase tracking-widest py-4 px-8 text-xs md:text-sm hover:bg-opacity-90 transition-all shadow-xl"
                >
                  Ajouter au Panier
                </button>
              </div>
            </div>

            {/* Product Details accordion style */}
            <div className="border-t border-outline-variant pt-8 md:pt-10">
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6">Détails de Fabrication</h4>
              <ul className="space-y-3 list-disc pl-4 text-xs md:text-sm text-on-surface-variant">
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
