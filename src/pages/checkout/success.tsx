import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Success() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-playfair text-navy-700 mb-4">Merci pour votre commande !</h1>
        <p className="text-gray-600">Un email de confirmation vous a été envoyé.</p>
      </main>
      <Footer />
    </div>
  )
}


