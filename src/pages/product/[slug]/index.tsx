import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products } from '@/lib/data'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import { Minus, Plus, ShoppingCart, BadgeCheck, Ruler, Sailboat } from 'lucide-react'
import { useState } from 'react'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const product = products.find(p => p.id === slug)
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) return null

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{product.name} — Fanion Canon</title>
      </Head>
      <Header />

      {/* Banderole */}
      <div className="bg-accent-yellow text-navy-900 text-center font-semibold py-2 cursor-pointer" onClick={() => addToCart(product, qty)}>
        {product.name} — cliquez ici pour commander
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galerie simple */}
          <div className="grid grid-rows-2 gap-4">
            <div className="relative h-80 rounded-lg overflow-hidden bg-white">
              <Image src={product.images[0]} alt={product.name} fill className="object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1,3).map((img, i) => (
                <div key={i} className="relative h-40 rounded-lg overflow-hidden bg-white">
                  <Image src={img} alt={`${product.name} ${i+2}`} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Infos produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-heading text-navy-700">{product.name}</h1>
              <p className="text-2xl font-semibold text-navy-700 mt-2">{product.price}€</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Notre‑Dame veille sur ce fanion et sur le Vieux‑Port. Avec tous ces bateaux, on s’y perd…
              au moins avec lui, c’est sûr, ce sera toi le plus beau des bateaux.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="p-2" onClick={() => setQty(Math.max(1, qty-1))}><Minus className="h-4 w-4" /></button>
                <span className="px-4">{qty}</span>
                <button className="p-2" onClick={() => setQty(qty+1)}><Plus className="h-4 w-4" /></button>
              </div>
              <button onClick={() => addToCart(product, qty)} className="bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" /> Ajouter au panier
              </button>
            </div>

            <div className="bg-cream-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-navy-700" /> Fait en France</div>
              <div className="flex items-center gap-2"><Ruler className="h-4 w-4 text-navy-700" /> Dimensions: 28 × 30 cm</div>
              <div className="flex items-center gap-2"><Sailboat className="h-4 w-4 text-navy-700" /> Toile de voile robuste, adaptée à tous les bateaux</div>
            </div>

            {/* Détails supplémentaires supprimés pour éviter la redite */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


