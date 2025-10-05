import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Expedition() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl font-heading text-navy-700 text-center mb-8">Expédition & Livraison</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-heading text-navy-700">Délais de traitement</h2>
          <p>Les commandes sont préparées sous 2 à 4 jours ouvrés.</p>

          <h2 className="text-2xl font-heading text-navy-700">Méthodes d’expédition</h2>
          <p>Colissimo ou Mondial Relay pour la France métropolitaine. Livraison internationale sur demande (contactez‑nous par e‑mail).</p>

          <h2 className="text-2xl font-heading text-navy-700">Frais de livraison</h2>
          <p>Calculés automatiquement à la commande selon le transporteur sélectionné.</p>

          <h2 className="text-2xl font-heading text-navy-700">Délais moyens</h2>
          <p>3 à 7 jours ouvrés après expédition. Les délais peuvent varier en période de forte affluence.</p>

          <h2 className="text-2xl font-heading text-navy-700">Suivi de commande</h2>
          <p>Un e‑mail de confirmation d’expédition contenant le numéro de suivi est envoyé dès la remise au transporteur.</p>

          <h2 className="text-2xl font-heading text-navy-700">Retard ou perte</h2>
          <p>En cas de retard ou de perte, contactez fanioncanon@gmail.com. Une enquête sera ouverte auprès du transporteur.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}


