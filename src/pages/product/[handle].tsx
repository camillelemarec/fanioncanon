import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { shopifyFetch } from '@/lib/shopify'

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

  async function buyNow() {
    const r = await fetch('/api/cart/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variantId, quantity: 1 }),
    })
    const { checkoutUrl } = await r.json()
    router.push(checkoutUrl)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {img && <img src={img.url} alt={img.altText ?? product.title} className="rounded-lg shadow mx-auto" />}
          <div>
            <h1 className="text-3xl font-heading text-blue-900">{product.title}</h1>
            <p className="text-xl mt-2">{price} €</p>
            <button onClick={buyNow} className="mt-4 px-5 py-3 rounded bg-blue-900 text-white hover:bg-blue-800">
              Ajouter au panier / Acheter
            </button>
            <p className="mt-6 text-gray-700">{product.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


