import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/contexts/CartContext'
import { loadStripe } from '@stripe/stripe-js'
import Image from 'next/image'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  return (
    <div className="min-h-screen bg-white">
      <Head><title>Panier — Fanion Canon</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-playfair text-navy-700 mb-6">Panier</h1>
        {cart.items.length === 0 ? (
          <p className="text-gray-600">Votre panier est vide.</p>
        ) : (
          <div className="space-y-6">
            {cart.items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-navy-700">{product.name}</div>
                  <div className="text-sm text-gray-600">{product.price}€</div>
                </div>
                <input type="number" min={1} className="w-16 border rounded px-2 py-1" value={quantity} onChange={(e)=>updateQuantity(product.id, Math.max(1, Number(e.target.value)||1))} />
                <button className="text-red-600" onClick={()=>removeFromCart(product.id)}>Supprimer</button>
              </div>
            ))}
            <div className="flex justify-between pt-4 border-t">
              <span className="font-semibold text-navy-700">Sous-total</span>
              <span className="font-semibold text-navy-700">{cart.total.toFixed(2)}€</span>
            </div>
            <button
              onClick={async () => {
                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
                const res = await fetch('/api/create-checkout-session', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    items: cart.items.map(i => ({ name: i.product.name, price: i.product.price, quantity: i.quantity })),
                  }),
                })
                const data = await res.json()
                if (data?.url) window.location.href = data.url
              }}
              className="bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg w-full"
            >
              Commander
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}


