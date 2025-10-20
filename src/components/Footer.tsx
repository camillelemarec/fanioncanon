import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';

const league = League_Spartan({ subsets: ['latin'], weight: ['700'] });

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <div className={`flex items-center gap-3 mb-4 ${league.className}`}>
              <Image src="/images/logo.png" alt="Logo Fanion Canon" width={48} height={48} className="object-contain" />
              <span className="text-2xl font-bold tracking-wide">Fanion Canon</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Affichez vos couleurs, stylisez votre région. Des fanions de bateau décoratifs haut de gamme
              pour exprimer votre attachement régional avec style et élégance. Le vent du large, signé Fanion canon
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fanioncanon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Fanion Canon" className="text-gray-300 hover:text-accent-yellow transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/mentions-legales" className="text-gray-300 hover:text-accent-yellow transition-colors">Mentions légales</a></li>
              <li><a href="/conditions-generales" className="text-gray-300 hover:text-accent-yellow transition-colors">CGV</a></li>
              <li><a href="/confidentialite" className="text-gray-300 hover:text-accent-yellow transition-colors">Confidentialité</a></li>
              <li><a href="/retours-remboursements" className="text-gray-300 hover:text-accent-yellow transition-colors">Retours & remboursements</a></li>
              <li><a href="/expedition" className="text-gray-300 hover:text-accent-yellow transition-colors">Expédition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-yellow" />
                <a href="mailto:fanioncanon@gmail.com" className="text-gray-300 hover:text-accent-yellow transition-colors">fanioncanon@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-yellow" />
                <span className="text-gray-300">01 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fanion Canon. Tous droits réservés. | 
            <a href="/mentions-legales" className="hover:text-accent-yellow transition-colors ml-2">Mentions légales</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
