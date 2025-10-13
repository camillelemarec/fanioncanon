import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { shopifyFetch } from '@/lib/shopify'
import { useCartShopify } from '@/context/CartContextShopify'
import { BadgeCheck, Ruler, Sailboat, ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'

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
  const [current, setCurrent] = useState(0)

  // Liste d'images: Shopify + ajout local pour Marseille
  const gallery: { url: string; alt: string }[] = useMemo(() => {
    // Toujours privilégier les images locales, ne pas afficher les visuels Shopify
    const localMainByTitle: Record<string, string> = {
      'Fanion Marseille': '/images/fanion1.png',
      'Fanion Montpellier': '/images/fanionmontpellier.png',
      'Fanion Arcachon': '/images/fanionarcachon.png',
      'Fanion Cassis': '/images/fanioncassis.png',
    }
    const localMain = localMainByTitle[product.title]
    const items: { url: string; alt: string }[] = []
    if (localMain) items.push({ url: localMain, alt: product.title })
    // Marseille: ajouter une seconde image locale
    if (product.title === 'Fanion Marseille') {
      items.push({ url: '/images/fanion1-2.JPG', alt: `${product.title} (visuel 2)` })
    }
    return items
  }, [product])

  // Descriptions localisées par produit (ton Fanion Canon)
  const defaultDescription =
    'Notre‑Dame veille sur ce fanion et sur le Vieux‑Port. Avec tous ces bateaux, on s’y perd… au moins avec lui, c’est sûr, ce sera toi le plus beau des bateaux.'
  const descriptions: Record<string, string> = {
    'Fanion Cassis':
      'L’eau est fraîche à Cassis, mais avec un fanion comme celui‑là, ton bateau sera le plus chaud du port. Entre les calanques et les apéros en mer, impossible de passer inaperçu.',
    'Fanion Montpellier':
      'Ici, le soleil tape fort, les cigales chantent et même les bateaux ont du style. Avec ce fanion, ton embarcation aura l’accent du Sud et le charme de la Comédie.',
    'Fanion Arcachon':
      'Avec un fanion comme ça, ton bateau sera aussi beau que celui de Max Cantara. Entre la Dune du Pilat et les huîtres du bassin, il ne manquait plus que ton pavillon pour parfaire le décor.',
  }
  const productDescription: string = descriptions[product.title] ?? defaultDescription

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          {product.title === 'Fanion Cassis'
            ? 'Fanion Canon Cassis – Esprit méditerranéen et déco marine'
            : product.title === 'Fanion Montpellier'
            ? 'Fanion Canon Montpellier – Élégance du Sud sur ton bateau'
            : product.title === 'Fanion Arcachon'
            ? 'Fanion Canon Arcachon – Style du bassin et authenticité'
            : 'Fanion Canon Marseille – Fanion décoratif nautique français'}
        </title>
        <meta
          name="description"
          content={product.description ?? `${product.title} par Fanion Canon`}
        />
        <link rel="canonical" href={`https://fanioncanon.com/product/${product.handle}`} />
        <meta property="og:title" content={`${product.title} — Fanion Canon`} />
        <meta property="og:description" content={product.description ?? product.title} />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Visuels produit */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-center h-96 relative">
              {gallery.length > 0 && (
                <img src={gallery[current].url} alt={gallery[current].alt} className="max-h-full object-contain" />
              )}
              {gallery.length > 1 && (
                <>
                  <button aria-label="Image précédente" className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow" onClick={() => setCurrent((i) => (i - 1 + gallery.length) % gallery.length)}>
                    <ChevronLeft className="h-5 w-5 text-navy-700" />
                  </button>
                  <button aria-label="Image suivante" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow" onClick={() => setCurrent((i) => (i + 1) % gallery.length)}>
                    <ChevronRight className="h-5 w-5 text-navy-700" />
                  </button>
                </>
              )}
            </div>
            {gallery.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Aller à l'image ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                    onClick={() => setCurrent(i)}
                    className={`${i === current ? 'bg-navy-700' : 'bg-gray-300'} h-2.5 w-2.5 rounded-full`}
                  />
                ))}
              </div>
            )}
            {gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {gallery.slice(0, 3).map((g, i) => (
                  <button key={i} className="bg-white rounded-lg overflow-hidden h-28 flex items-center justify-center" onClick={() => setCurrent(i)} aria-label={`Voir l'image ${i+1}`}>
                    <img src={g.url} alt={g.alt} className="max-h-full object-contain" />
                  </button>
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

            {/* Description courte localisée */}
            <p className="text-gray-700 leading-relaxed">{productDescription}</p>

            {/* CTA */}
            <button
              onClick={async () => {
                try {
                  setOpen(true)
                  await add(variantId, 1)
                } catch (e) {
                  // en cas d'erreur silencieuse, on garde une UX visible
                  console.error('add to cart failed', e)
                }
              }}
              className="px-5 py-3 rounded bg-blue-900 text-white hover:bg-blue-800 w-full sm:w-auto"
              aria-label="Ajouter ce produit au panier"
            >
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
                  <div className="font-medium text-navy-700">Fait avec amour, beaucoup d'amour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Callout bas de page avec bannière */}
        <div className="mt-16 relative rounded-lg overflow-hidden">
          <img src="/images/banniere.png" alt="Fond marin Fanion Canon" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative p-8 text-center">
            <p className="text-lg font-heading text-white drop-shadow">Le vent du large, signé Fanion Canon</p>
            <Link href="/about" className="inline-block mt-4 px-5 py-3 rounded bg-white/90 text-navy-700 hover:bg-white">
              À propos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


