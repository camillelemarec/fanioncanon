import Head from 'next/head'
import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const catalogRef = useRef<HTMLDivElement>(null)
  const scrollToCatalog = () => catalogRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Fanion Canon — Boutique de fanions régionaux</title>
      </Head>
      <Header />

      {/* Hero plein écran */}
      <section className="relative h-[90vh] w-full">
        <Image src={products[0].image} alt="Ambiance Fanion Canon" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button onClick={scrollToCatalog} className="backdrop-blur-sm/0 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full border border-white/50 transition">
            Découvrir la collection
          </button>
        </div>
      </section>

      {/* Catalogue minimal */}
      <main ref={catalogRef} id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="font-playfair text-lg text-navy-700">{p.name}</h3>
                <span className="text-navy-700 font-semibold">{p.price}€</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}


