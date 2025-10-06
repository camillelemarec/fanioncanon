import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { shopifyFetch } from '@/lib/shopify'
import { useCartShopify } from '@/context/CartContextShopify'
import { BadgeCheck, Ruler, Sailboat } from 'lucide-react'

export async function getStaticPaths() {
  const q = `query { products(first:50){edges{node{handle}}} }`
  const d = await shopifyFetch<{ products: { edges: { node: { handle: string } }[] } }>(q)
  return { paths: d.products.edges.map((e) => ({ params: { handle: e.node.handle } })), fallback: 'blocking' }
}

export async function getStaticProps({ params }: { params: { handle: string } }) {
  const q = `query($handle:String!){ product(handle:$handle){ id title description images(first:6){edges{node{url altText}}} variants(first:1){edges{node{id price{amount}}}} } }`
  const d = await shopifyFetch<{ product: any }>(q, { handle: params.handle })
  if (!d.product) return { notFound: true }
  return { props: { product: d.product }, revalidate: 60 }
}

export default function ProductPage({ product }: { product: any }) {
  const router = useRouter()
  const img = product.images.edges[0]?.node
  const variantId = product.variants.edges[0].node.id
  const price = Number(product.variants.edges[0].node.price.amount).toFixed(2)
  const { add, setOpen } = useCartShopify()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Visuels produit */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-center h-96">
              {img && (
                <img src={img.url} alt={img.altText ?? product.title} className="max-h-full object-contain" />
              )}
            </div>
            {product.images.edges.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.edges.slice(1, 4).map((edge: any, i: number) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden h-28 flex items-center justify-center">
                    <img src={edge.node.url} alt={edge.node.altText ?? product.title} className="max-h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-heading text-blue-900">{product.title}</h1>
              <p className="text-2xl font-semibold text-navy-700 mt-2">{price} €</p>
            </div>

            {/* Description courte, ton "À propos" */}
            <p className="text-gray-700 leading-relaxed">
              Notre‑Dame veille sur ce fanion et sur le Vieux‑Port. Avec tous ces bateaux, on s’y perd…
              au moins avec lui, c’est sûr, ce sera toi le plus beau des bateaux.
            </p>

            {/* CTA */}
            <button onClick={async()=>{ await add(variantId,1); setOpen(true); }} className="px-5 py-3 rounded bg-blue-900 text-white hover:bg-blue-800 w-full sm:w-auto">
              Ajouter au panier
            </button>

            {/* Pins caractéristiques */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-navy-700" />
                <div>
                  <div className="font-medium text-navy-700">Fait en France</div>
                  <div className="text-sm text-gray-600">Fabrication soignée</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Ruler className="h-5 w-5 text-navy-700" />
                <div>
                  <div className="font-medium text-navy-700">28 × 30 cm</div>
                  <div className="text-sm text-gray-600">Format décoratif idéal</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Sailboat className="h-5 w-5 text-navy-700" />
                <div>
                  <div className="font-medium text-navy-700">Toile de voile</div>
                  <div className="text-sm text-gray-600">Parfait à bord et en intérieur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


