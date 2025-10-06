import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCartShopify } from '@/context/CartContextShopify'

export default function CartPage() {
  const { cart, update, remove, checkout } = useCartShopify()
  return (
    <div className="min-h-screen bg-white">
      <Head><title>Panier — Fanion Canon</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-playfair text-navy-700 mb-6">Panier</h1>
        {!cart?.lines?.edges?.length ? (
          <p className="text-gray-600">Votre panier est vide.</p>
        ) : (
          <div className="space-y-6">
            {cart.lines.edges.map((e:any) => { const l=e.node; const m=l.merchandise; return (
              <div key={l.id} className="flex items-center gap-4">
                {m.image && <img src={m.image.url} alt={m.image.altText ?? m.product.title} className="w-20 h-16 rounded-lg object-cover" />}
                <div className="flex-1">
                  <div className="font-medium text-navy-700">{m.product.title}</div>
                  <div className="text-sm text-gray-600">{Number(m.price.amount).toFixed(2)}€</div>
                </div>
                <input type="number" min={1} className="w-16 border rounded px-2 py-1" value={l.quantity} onChange={(e)=>update(l.id, Math.max(1, Number(e.target.value)||1))} />
                <button className="text-red-600" onClick={()=>remove(l.id)}>Supprimer</button>
              </div>
            )})}
            <div className="flex justify-between pt-4 border-t">
              <span className="font-semibold text-navy-700">Sous-total</span>
              <span className="font-semibold text-navy-700">{cart?.cost?.subtotalAmount?.amount ? Number(cart.cost.subtotalAmount.amount).toFixed(2) : '0.00'}€</span>
            </div>
            <button onClick={checkout} className="bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg w-full">Procéder au paiement</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}


