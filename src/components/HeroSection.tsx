'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/lib/data';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      alt: 'Calanques de Marseille - Vue panoramique des falaises calcaires',
      title: 'Affichez vos couleurs',
      subtitle: 'Stylisez votre région'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      alt: 'Bateaux dans les calanques de Marseille',
      title: 'L\'élégance marseillaise',
      subtitle: 'À votre portée'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      alt: 'Plage des calanques avec falaises en arrière-plan',
      title: 'Design authentique',
      subtitle: 'Made in Marseille'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Contenu du Hero */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {heroImages[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/boutique" className="btn-primary text-lg px-8 py-4">
              Découvrir la Boutique
            </Link>
            <Link href="/boutique" className="btn-secondary text-lg px-8 py-4">
              Voir les Produits
            </Link>
          </div>
        </div>
      </div>

      {/* Contrôles du slider */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-playfair text-navy-700 mb-4">
            Collection Marseille
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de fanions Marseille, 
            capturant l'essence authentique de la cité phocéenne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-accent-yellow text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.price}€
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold font-playfair text-navy-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-accent-yellow fill-current" />
                    <span className="text-sm text-gray-500">4.8 (127 avis)</span>
                  </div>
                  
                  <Link href={`/product/${product.id}`} className="bg-navy-700 hover:bg-navy-800 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Voir</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/boutique" className="btn-primary text-lg px-8 py-4">
            Voir Toute la Collection Marseille
          </Link>
        </div>
      </div>
    </section>
  );
}
