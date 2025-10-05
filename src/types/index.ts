export interface Product {
  id: string;
  name: string;
  region: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  material: string;
  dimensions: string;
  category: 'region' | 'city' | 'special';
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  shipping: number;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
