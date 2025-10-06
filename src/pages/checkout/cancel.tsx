import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
const NoSSR = (c:any)=>dynamic(()=>Promise.resolve(c),{ssr:false})
import Link from 'next/link'

function CancelInner() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-playfair text-navy-700 mb-4">Paiement annulé</h1>
        <p className="text-gray-600 mb-6">Aucun montant n'a été débité. Vous pouvez réessayer.</p>
        <a href="/cart" className="btn-primary">Revenir au panier</a>
      </main>
      <Footer />
    </div>
  )
}

export default NoSSR(CancelInner)


