import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CGV() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl font-heading text-navy-700 text-center mb-8">Conditions Générales de Vente</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 1 – OBJET</h2>
          <p>Les présentes conditions régissent les ventes de produits effectuées sur le site https://fanioncanon.fr, exploité par Fanion Canon (Coach&Vous, Marseille 13014).</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 2 – ACCEPTATION DES CONDITIONS</h2>
          <p>En validant une commande, le client déclare avoir pris connaissance des présentes CGV et les accepter sans réserve.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 3 – PRODUITS</h2>
          <p>Les fanions proposés sont décrits et présentés avec la plus grande exactitude possible. Les photographies sont non contractuelles ; des variations mineures peuvent exister.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 4 – PRIX</h2>
          <p>Les prix sont exprimés en euros, toutes taxes comprises. Fanion Canon se réserve le droit de les modifier à tout moment. Les frais de livraison sont précisés lors du passage de commande.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 5 – COMMANDE</h2>
          <p>Toute commande passée via le site vaut acceptation des prix et descriptions des produits. Fanion Canon se réserve le droit de refuser toute commande anormale ou abusive.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 6 – PAIEMENT</h2>
          <p>Le paiement est exigible immédiatement à la commande et s’effectue de manière sécurisée via les solutions proposées (Shopify Payments, Carte bancaire, PayPal, etc.). Aucune donnée bancaire n’est conservée par Fanion Canon.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 7 – LIVRAISON</h2>
          <p>Les livraisons sont assurées par Colissimo ou Mondial Relay. Les délais indicatifs sont de 3 à 7 jours ouvrés après expédition. Fanion Canon ne saurait être tenue responsable d’un retard imputable au transporteur.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 8 – DROIT DE RÉTRACTATION ET RETOURS</h2>
          <p>Conformément à la loi française, le client dispose de 30 jours pour exercer son droit de rétractation. Les produits doivent être retournés dans leur état d’origine, non utilisés, avec étiquettes et emballage. Les frais de retour sont à la charge du client.</p>
          <p>Adresse de retour : Fanion Canon – Coach&Vous, 20 Traverse du Croissant Doré, 13014 Marseille.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 9 – GARANTIES</h2>
          <p>Les produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 10 – PROPRIÉTÉ INTELLECTUELLE</h2>
          <p>Tous les éléments du site Fanion Canon restent la propriété exclusive de la société. Toute reproduction est interdite sans accord préalable.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 11 – DONNÉES PERSONNELLES</h2>
          <p>Les informations collectées sont utilisées uniquement pour la gestion des commandes, conformément à la politique de confidentialité.</p>

          <h2 className="text-2xl font-heading text-navy-700">ARTICLE 12 – LOI APPLICABLE</h2>
          <p>Les présentes conditions sont soumises au droit français. En cas de litige, les tribunaux de Marseille seront compétents.</p>

          <div className="pt-6 text-sm">
            <p>Contact : fanioncanon@gmail.com</p>
            <p>Fanion Canon — Coach&Vous, 20 traverse du Croissant Doré, 13014 Marseille</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


