import { Product, Region } from '@/types';

export const products: Product[] = [
  {
    id: 'fanion-marseille',
    name: 'Fanion Marseille',
    region: 'Marseille',
    price: 22,
    description: 'Inspiré de la cité phocéenne et de ses calanques légendaires. Ce fanion capture l\'essence authentique de Marseille avec ses couleurs méditerranéennes et son esprit maritime rebelle.',
    image: '/images/fanion1.png',
    images: ['/images/fanion1.png'],
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
