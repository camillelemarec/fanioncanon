import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { shopifyFetch } from '@/lib/shopify'

type Product = {
  id: string
  handle: string
  title: string
  images: { edges: { node: { url: string; altText: string | null } }[] }
  priceRange: { minVariantPrice: { amount: string } }
}

export async function getStaticProps() {
  const q = `query { products(first: 24) { edges { node { id handle title images(first:2){edges{node{url altText}}} priceRange{ minVariantPrice{ amount } } } } } }`
  const data = await shopifyFetch<{ products: { edges: { node: Product }[] } }>(q)
  return { props: { products: data.products.edges.map((e) => e.node) }, revalidate: 60 }
}

export default function Shop({ products }: { products: Product[] }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-heading font-semibold text-center mb-10 text-blue-900">Nos fanions</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => {
            // Forcer l'image locale correspondant au titre du produit
            const title = p.title
            const localByTitle: Record<string, string> = {
              'Fanion Marseille': '/images/fanion1.png',
              'Fanion Montpellier': '/images/fanionmontpellier.png',
              'Fanion Arcachon': '/images/fanionarcachon.png',
              'Fanion Cassis': '/images/fanioncassis.png',
              'Fanion Touquet': '/images/faniontouquet.png',
            }
            const localSrc = localByTitle[title]
            const price = Number(p.priceRange.minVariantPrice.amount).toFixed(2)
            return (
              <Link key={p.id} href={`/product/${p.handle}`} className="block text-center group">
                <div className="relative">
                  <img src={localSrc ?? p.images.edges[0]?.node?.url} alt={p.title} className="rounded-lg shadow-md transition-transform group-hover:scale-[1.02] mx-auto" />
                  {(p.handle === 'fanion-montpellier' || p.title === 'Fanion Montpellier') && (
                    <span className="absolute top-2 left-2 z-10 bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded">
                      précommande
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-lg font-medium">{p.title}</h2>
                <p className="text-gray-600">{price} €</p>
              </Link>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}



