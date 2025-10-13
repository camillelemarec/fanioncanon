import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head><title>Contact — Fanion Canon</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading text-navy-700 mb-6">Contact</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          Envie de papoter, une question, ou un souci avec ta commande ?
          N’hésite pas à nous écrire à
          {' '}
          <a className="text-navy-700 underline hover:no-underline" href="mailto:fanioncanon@gmail.com">fanioncanon@gmail.com</a>.
        </p>
      </main>
      <Footer />
    </div>
  )
}


