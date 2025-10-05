import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl font-heading text-navy-700 text-center mb-8">Mentions légales</h1>

        <p className="mb-4 font-semibold">Fanion Canon</p>
        <p className="mb-2">Coach&Vous, 20 traverse du Croissant Doré, 13014 Marseille</p>
        <p className="mb-2">SIRET : 533 915 682 00027 – R.C.S. Marseille</p>
        <p className="mb-6">📩 fanioncanon@gmail.com</p>

        <p className="mb-2">Directeur de la publication : Camille Le Marec</p>
        <p className="mb-6">Hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut CA 91789 (USA)</p>

        <p className="mb-4">Ce site et l’ensemble de son contenu (textes, visuels, logos, graphismes) sont protégés par le droit d’auteur.</p>
        <p className="mb-4">Toute reproduction totale ou partielle est interdite sans autorisation écrite préalable de Fanion Canon.</p>
        <p className="mb-4">Les litiges seront soumis au droit français.</p>
      </main>
      <Footer />
    </div>
  )
}


