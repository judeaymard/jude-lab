export const products = [
  {
    id: '1',
    name: 'Blazer Structuré Laine Vierge',
    price: 489.00,
    category: 'Vêtements',
    image: 'https://images.unsplash.com/photo-1594932224010-74f43a183546?q=80&w=800&auto=format&fit=crop',
    description: 'Une pièce maîtresse de notre collection. Ce blazer en laine vierge présente une coupe architecturale qui souligne la silhouette avec une précision absolue.',
    details: ['100% Laine Vierge italienne', 'Doublure en soie naturelle', 'Boutons en corne véritable', 'Fabriqué à Paris'],
    sizes: ['46', '48', '50', '52', '54'],
    colors: ['Noir Anthracite', 'Bleu Nuit', 'Gris Graphite'],
    rating: 4.9,
    reviews: 18
  },
  {
    id: '2',
    name: 'Cabas "Signature" Cuir Grainé',
    price: 845.00,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1584917033904-493bb3ce3fe1?q=80&w=800&auto=format&fit=crop',
    description: 'L’équilibre parfait entre fonctionnalité et luxe. Le cabas Signature est façonné dans un cuir de veau grainé d’une souplesse exceptionnelle.',
    details: ['Cuir de veau pleine fleur', 'Finition palladium', 'Pochette intérieure amovible', 'Bandoulière ajustable'],
    sizes: ['Moyen'],
    colors: ['Cognac', 'Noir Onyx', 'Ivoire'],
    rating: 5.0,
    reviews: 12
  },
  {
    id: '3',
    name: 'Chronographe "Héritage" Or Rose',
    price: 2450.00,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
    description: 'Un garde-temps d’exception qui traverse les époques. Mouvement automatique de haute précision logé dans un boîtier en or rose 18 carats.',
    details: ['Mouvement automatique suisse', 'Boîtier Or Rose 18K', 'Verre saphir inrayable', 'Bracelet Alligator'],
    sizes: ['40mm'],
    colors: ['Cadran Noir', 'Cadran Argent'],
    rating: 4.8,
    reviews: 5
  },
  {
    id: '4',
    name: 'Robe Longue en Soie Sauvage',
    price: 655.00,
    category: 'Vêtements',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
    description: 'Une fluidité inégalée pour une allure majestueuse. Cette robe en soie sauvage capte la lumière pour un éclat subtil et raffiné.',
    details: ['100% Soie Sauvage', 'Fermeture éclair invisible', 'Entièrement doublée', 'Nettoyage à sec uniquement'],
    sizes: ['34', '36', '38', '40', '42'],
    colors: ['Champagne', 'Bordeaux Profond', 'Vert Émeraude'],
    rating: 4.9,
    reviews: 24
  },
  {
    id: '5',
    name: 'Stilettos "Pulsion" Velours',
    price: 395.00,
    category: 'Chaussures',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    description: 'Le summum de la sophistication. Ces escarpins en velours de soie arborent un talon vertigineux pour une silhouette élancée et audacieuse.',
    details: ['Velours de soie premium', 'Talon 10.5cm', 'Semelle en cuir rouge', 'Coussin de confort intégré'],
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Noir Profond', 'Rouge Rubis'],
    rating: 4.7,
    reviews: 31
  },
  {
    id: '6',
    name: 'Solaires "L\'Iconique" Acétate',
    price: 225.00,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1511499767390-90342f567517?q=80&w=800&auto=format&fit=crop',
    description: 'Un design intemporel revisité avec modernité. Monture en acétate poli à la main et verres haute définition pour une protection stylée.',
    details: ['Acétate de cellulose italien', 'Verres Zeiss catégorie 3', 'Charnières renforcées', 'Protection 100% UV'],
    sizes: ['Standard'],
    colors: ['Écaille Sombre', 'Noir Piano'],
    rating: 4.8,
    reviews: 45
  },
  {
    id: '7',
    name: 'Manteau Oversize en Cachemire',
    price: 1290.00,
    category: 'Vêtements',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    description: 'Le luxe absolu du cachemire dans une coupe enveloppante. Un manteau conçu pour braver le froid avec une élégance décontractée.',
    details: ['100% Cachemire double face', 'Cousu main', 'Poches plaquées', 'Ceinture amovible'],
    sizes: ['S', 'M', 'L'],
    colors: ['Beige Sable', 'Gris Perle', 'Marine'],
    rating: 5.0,
    reviews: 9
  },
  {
    id: '8',
    name: 'Mocassins en Daim Doux',
    price: 310.00,
    category: 'Chaussures',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop',
    description: 'Le confort d’un chausson allié à l’allure d’un classique. Fabriqués dans un daim italien traité pour résister aux éléments.',
    details: ['Daim italien véritable', 'Semelle gomme picots', 'Intérieur cuir souple', 'Construction Blake'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Tabac', 'Bleu Horizon', 'Forêt'],
    rating: 4.6,
    reviews: 22
  }
];

export const suppliers = [
  { id: 'S1', name: 'Ateliers de Paris', location: 'Paris, France', status: 'Actif', items: 120, rating: 5.0 },
  { id: 'S2', name: 'Manufacture Cuir Lyon', location: 'Lyon, France', status: 'Actif', items: 45, rating: 4.8 },
  { id: 'S3', name: 'Horlogerie de Genève', location: 'Genève, Suisse', status: 'Actif', items: 12, rating: 4.9 },
  { id: 'S4', name: 'Tissage de Soie', location: 'Côme, Italie', status: 'Actif', items: 34, rating: 4.7 }
];
