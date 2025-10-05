import { Product, Region } from '@/types';

export const products: Product[] = [
  {
    id: 'fanion-marseille',
    name: 'Fanion Marseille',
    region: 'Marseille',
    price: 22,
    description: 'Inspiré de la cité phocéenne et de ses calanques légendaires. Ce fanion capture l\'essence authentique de Marseille avec ses couleurs méditerranéennes et son esprit maritime rebelle.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'],
    material: 'Tissu premium 100% coton',
    dimensions: '30cm x 20cm',
    category: 'city',
    featured: true,
    inStock: true,
  },
];

export const regions: Region[] = [
  {
    id: 'marseille',
    name: 'Marseille',
    description: 'Découvrez notre collection exclusive de fanions Marseille, inspirés de la cité phocéenne et de son patrimoine maritime.',
    image: '/images/region-marseille.jpg',
    products: products.filter(p => p.region === 'Marseille'),
  },
];
