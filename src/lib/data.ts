export const products = [
  {
    id: '1',
    name: 'Veste de Costume Slim-Fit',
    price: 189.00,
    category: 'Vêtements',
    image: 'https://images.unsplash.com/photo-1594932224010-74f43a183546?q=80&w=800&auto=format&fit=crop',
    description: 'Une veste de costume parfaitement coupée pour une silhouette moderne et élégante.',
    details: ['65% Laine, 35% Polyester', 'Coupe ajustée', 'Doublure intérieure satinée'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Bleu Marine', 'Gris'],
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Sac à Main Cuir Signature',
    price: 345.00,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1584917033904-493bb3ce3fe1?q=80&w=800&auto=format&fit=crop',
    description: 'Le compagnon idéal pour toutes vos sorties, fabriqué dans un cuir de haute qualité.',
    details: ['100% Cuir de veau', 'Finition dorée', 'Poches intérieures multiples'],
    sizes: ['Unique'],
    colors: ['Marron', 'Noir', 'Beige'],
    rating: 4.9,
    reviews: 86
  },
  {
    id: '3',
    name: 'Montre Chronographe Héritage',
    price: 520.00,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
    description: 'Un garde-temps d’exception alliant précision mécanique et design intemporel.',
    details: ['Mouvement automatique', 'Verre saphir inrayable', 'Étanche 50m'],
    sizes: ['Standard'],
    colors: ['Argent', 'Or Rose'],
    rating: 4.7,
    reviews: 42
  },
  {
    id: '4',
    name: 'Robe d’Été en Soie Fleurie',
    price: 155.00,
    category: 'Vêtements',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
    description: 'Légèreté et élégance pour vos soirées estivales.',
    details: ['100% Soie', 'Imprimé exclusif', 'Dos nu'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Rose', 'Bleu', 'Jaune'],
    rating: 4.6,
    reviews: 156
  },
  {
    id: '5',
    name: 'Escarpins Velours Noir',
    price: 210.00,
    category: 'Chaussures',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    description: 'Le summum du raffinement pour vos événements spéciaux.',
    details: ['Talon 8cm', 'Velours premium', 'Semelle cuir'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Noir', 'Rouge Vin'],
    rating: 4.5,
    reviews: 92
  },
  {
    id: '6',
    name: 'Lunettes de Soleil Oversize',
    price: 125.00,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1511499767390-90342f567517?q=80&w=800&auto=format&fit=crop',
    description: 'Un style affirmé et une protection UV optimale.',
    details: ['Protection UV400', 'Monture acétate', 'Étui inclus'],
    sizes: ['Unique'],
    colors: ['Écaille', 'Noir'],
    rating: 4.8,
    reviews: 74
  }
];

export const suppliers = [
  { id: 'S1', name: 'Elite Fashion Hub', location: 'Lyon, France', status: 'Actif', items: 154, rating: 4.9 },
  { id: 'S2', name: 'Global Luxe Logistics', location: 'Paris, France', status: 'Actif', items: 82, rating: 4.7 },
  { id: 'S3', name: 'Premium Garment Co.', location: 'Marseille, France', status: 'En attente', items: 0, rating: 0.0 },
  { id: 'S4', name: 'Silk Route Imports', location: 'Bordeaux, France', status: 'Actif', items: 45, rating: 4.5 }
];
