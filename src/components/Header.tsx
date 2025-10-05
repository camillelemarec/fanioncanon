'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { LogoSimple } from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Boutique', href: '/#catalog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoSimple size="md" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-navy-700 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Panier et Menu Mobile */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-navy-700 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Menu Mobile */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-navy-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-navy-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
