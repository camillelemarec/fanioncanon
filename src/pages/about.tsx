import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head><title>À propos — Fanion Canon</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair text-navy-700 mb-6">À propos</h1>
        <p className="text-gray-700 leading-8">
          Fanion Canon est une marque de fanions régionaux modernes, inspirés de l'univers nautique et du style de vie méditerranéen. 
          Chaque fanion incarne l'appartenance, la fierté et l'élégance dans un objet simple et désirable.
        </p>
      </main>
      <Footer />
    </div>
  )
}


