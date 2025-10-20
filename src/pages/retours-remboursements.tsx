import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RetoursRemboursements() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl font-heading text-navy-700 text-center mb-8">Retours & remboursements</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-heading text-navy-700">Conditions d’éligibilité</h2>
          <p>L’article doit être dans son état d’origine, non utilisé, avec étiquette, et retourné dans son emballage initial. Le reçu ou la preuve d’achat est obligatoire.</p>

          <h2 className="text-2xl font-heading text-navy-700">Procédure</h2>
          <p>Contactez‑nous à fanioncanon@gmail.com pour valider le retour. Renvoyez votre colis à : Fanion Canon – Coach&Vous, 20 Traverse du Croissant Doré, 13014 Marseille. Les frais de retour sont à la charge du client.</p>

          <h2 className="text-2xl font-heading text-navy-700">Remboursements</h2>
          <p>Après réception et vérification de l’article, le remboursement est effectué sur le moyen de paiement initial sous 10 jours ouvrés.</p>

          <h2 className="text-2xl font-heading text-navy-700">Articles non retournables</h2>
          <p>Articles personnalisés, articles en promotion, cartes‑cadeaux.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}



