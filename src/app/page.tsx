"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { products } from "@/lib/data";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4 block">Collection Printemps 2024</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
              L'ART DE LA <br />MODE <span className="text-secondary-container">FRANÇAISE</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-xl leading-relaxed">
              Une sélection exclusive de pièces intemporelles et d'accessoires de luxe, conçue pour ceux qui ne font aucun compromis sur l'élégance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/boutique" className="bg-secondary-container text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all text-center">
                Découvrir la Boutique
              </Link>
              <Link href="/boutique" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all text-center">
                Nos Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">Pièces Phares</h2>
              <p className="text-on-surface-variant max-w-lg">Nos articles les plus convoités cette saison, sélectionnés pour leur qualité exceptionnelle.</p>
            </div>
            <Link href="/boutique" className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-secondary-container hover:border-secondary-container transition-all">
              Tout Voir
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.slice(0, 3).map((product) => (
              <Link key={product.id} href={`/produits/${product.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Nouveau</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-secondary-container transition-colors">{product.name}</h3>
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest">{product.category}</p>
                  </div>
                  <span className="text-lg font-bold">{product.price.toFixed(2)}€</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=2071&auto=format&fit=crop"
                  alt="Editorial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square bg-surface-container-low overflow-hidden border-[12px] border-white hidden lg:block">
                 <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
                  alt="Editorial Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pl-0 lg:pl-12">
              <span className="text-secondary-container text-sm font-bold uppercase tracking-widest mb-6 block italic">La Philosophie</span>
              <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">PLUS QU'UNE BOUTIQUE, <br />UNE CURATION D'EXCELLENCE</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
                Chez Mode Dropshipping France, nous croyons que le vêtement est le reflet de l'âme. Nous parcourons l'Europe pour dénicher des pièces uniques qui marient savoir-faire traditionnel et esthétique contemporaine. Chaque article de notre collection raconte une histoire de passion, de qualité et de style.
              </p>
              <Link href="/boutique" className="inline-block bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all">
                Notre Histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-16 text-center">Explorer par Catégorie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative h-[600px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Vêtements" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <h3 className="text-3xl font-bold text-white mb-4 uppercase">Vêtements</h3>
                <Link href="/boutique" className="text-white text-sm font-bold uppercase tracking-widest border-b border-white w-fit pb-1 group-hover:text-secondary-container group-hover:border-secondary-container transition-colors">Explorer</Link>
              </div>
            </div>
            <div className="group relative h-[600px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Chaussures" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <h3 className="text-3xl font-bold text-white mb-4 uppercase">Chaussures</h3>
                <Link href="/boutique" className="text-white text-sm font-bold uppercase tracking-widest border-b border-white w-fit pb-1 group-hover:text-secondary-container group-hover:border-secondary-container transition-colors">Explorer</Link>
              </div>
            </div>
            <div className="group relative h-[600px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Accessoires" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <h3 className="text-3xl font-bold text-white mb-4 uppercase">Accessoires</h3>
                <Link href="/boutique" className="text-white text-sm font-bold uppercase tracking-widest border-b border-white w-fit pb-1 group-hover:text-secondary-container group-hover:border-secondary-container transition-colors">Explorer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
