"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { products } from "@/lib/data";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section - Editorial Concept */}
      <section className="relative h-screen flex items-center bg-surface overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-5 pt-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant mb-6 block">Nouvelle Collection / 2024</span>
            <h1 className="display-lg mb-8 leading-[1.1]">
              L'essence du <br />
              <span className="italic font-normal">Style Parisien.</span>
            </h1>
            <p className="body-md text-on-surface-variant mb-12 max-w-sm">
              Découvrez une curation méticuleuse de pièces conçues pour durer. L'alliance parfaite entre minimalisme et sophistication.
            </p>
            <div className="flex items-center space-x-12">
              <Link href="/boutique" className="text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-primary pb-2 hover:border-tertiary-container hover:text-tertiary-container transition-all">
                Explorer la Collection
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 relative h-[70vh] md:h-[85vh]">
             <div className="absolute top-0 right-0 w-4/5 h-full bg-surface-container-low overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                  alt="Hero Image"
                  className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
                />
             </div>
             <div className="absolute -bottom-8 left-0 w-2/5 aspect-[3/4] bg-white shadow-2xl overflow-hidden hidden md:block border-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop"
                  alt="Hero Detail"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Featured Products - The "Editorial Reveal" Style */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="headline-lg uppercase tracking-tight">La Sélection</h2>
            <Link href="/boutique" className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant hover:text-primary transition-colors">Tout Voir — 24 Articles</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
            {products.slice(0, 3).map((product) => (
              <Link key={product.id} href={`/produits/${product.id}`} className="group block">
                <div className="aspect-[4/5] bg-surface-container-low overflow-hidden mb-8 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">Voir le Produit</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">{product.category}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold tracking-tight uppercase">{product.name}</h3>
                    <span className="text-sm font-light italic">{product.price.toFixed(2)}€</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Asymmetric Layout */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=2071&auto=format&fit=crop"
                  alt="Philosophie"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-2/3 aspect-square bg-white p-12 hidden lg:block shadow-sm">
                 <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6">Engagement</h4>
                 <p className="text-[11px] leading-relaxed text-on-surface-variant italic">
                   "Le luxe n'est pas le superflu, mais l'absence de vulgarité." — Nous croyons en une mode qui respecte l'artisanat et l'humain.
                 </p>
              </div>
            </div>
            <div className="order-1 md:order-2 max-w-lg">
              <span className="text-tertiary-container text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block italic">L'ADN AymardStore</span>
              <h2 className="display-lg mb-10 leading-[1.1]">LA CURATION <br />COMME ART.</h2>
              <p className="body-md text-on-surface-variant leading-relaxed mb-12">
                Chez AymardStore, nous ne vendons pas simplement des vêtements. Nous sélectionnons des pièces qui racontent une histoire de savoir-faire. Chaque article est choisi pour sa matière, sa coupe et sa capacité à traverser les saisons sans perdre de sa superbe.
              </p>
              <Link href="/boutique" className="inline-block bg-primary text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-tertiary transition-all w-full sm:w-auto text-center">
                Notre Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Horizontal - The "Lookbook" Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[900px] md:h-[700px]">
             <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Vêtements" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <h3 className="headline-lg text-white mb-6 uppercase">Prêt-à-porter</h3>
                  <Link href="/boutique" className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white w-fit pb-1 group-hover:text-tertiary-container group-hover:border-tertiary-container transition-colors">Découvrir</Link>
                </div>
             </div>
             <div className="md:col-span-4 flex flex-col gap-8">
                <div className="flex-1 group relative overflow-hidden bg-surface-container-low">
                   <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Chaussures" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                   <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">Chaussures</h3>
                      <Link href="/boutique" className="text-white text-[9px] font-bold uppercase tracking-[0.3em] border-b border-white w-fit pb-1">Explorer</Link>
                   </div>
                </div>
                <div className="flex-1 group relative overflow-hidden bg-surface-container-low">
                   <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Accessoires" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                   <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">Accessoires</h3>
                      <Link href="/boutique" className="text-white text-[9px] font-bold uppercase tracking-[0.3em] border-b border-white w-fit pb-1">Explorer</Link>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimalist */}
      <section className="py-32 bg-surface text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-on-surface-variant mb-12 block">Le Journal AymardStore</span>
          <h2 className="headline-lg mb-12">REJOIGNEZ LE CERCLE PRIVÉ</h2>
          <p className="body-md text-on-surface-variant mb-16">
            Inscrivez-vous pour recevoir nos invitations exclusives, les lancements de collections et nos éditoriaux de style.
          </p>
          <form className="flex flex-col sm:flex-row gap-6">
            <input
              type="email"
              placeholder="VOTRE ADRESSE EMAIL"
              className="editorial-input flex-1 py-5 text-[10px] uppercase tracking-[0.2em]"
            />
            <button className="bg-primary text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-tertiary transition-all">S'inscrire</button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
