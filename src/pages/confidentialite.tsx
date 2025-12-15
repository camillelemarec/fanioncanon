import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { absoluteUrl } from '@/lib/seo'

export default function Confidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité — Fanion Canon</title>
        <meta
          name="description"
          content="Découvrez comment Fanion Canon collecte et protège vos données personnelles lors de vos achats en ligne."
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={absoluteUrl('/confidentialite')} key="canonical" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700">
          <h1 className="text-3xl font-heading text-navy-700 text-center mb-8">Politique de confidentialité</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-heading text-navy-700">1. Responsable du traitement</h2>
          <p>Fanion Canon – Coach&Vous, 20 Traverse du Croissant Doré, 13014 Marseille</p>
          <p>📩 fanioncanon@gmail.com</p>

          <h2 className="text-2xl font-heading text-navy-700">2. Informations recueillies</h2>
          <p>Lors de la navigation ou d’un achat sur <a href="https://fanioncanon.fr" className="underline">https://fanioncanon.fr</a>, nous collectons des informations de navigation (adresse IP, type de navigateur, cookies) et des informations de commande (nom, adresse, moyen de paiement, e-mail).</p>

          <h2 className="text-2xl font-heading text-navy-700">3. Utilisation des données</h2>
          <p>Les données sont utilisées pour traiter les commandes, assurer le service après‑vente, prévenir les fraudes et améliorer la navigation et le marketing.</p>

          <h2 className="text-2xl font-heading text-navy-700">4. Partage des données</h2>
          <p>Les données peuvent être partagées avec Shopify (hébergement e‑commerce), nos prestataires logistiques et de paiement, ainsi que les autorités légales en cas d’obligation.</p>

          <h2 className="text-2xl font-heading text-navy-700">5. Cookies</h2>
          <p>Nous utilisons des cookies de session, de mesure d’audience et de suivi des paniers. Vous pouvez les refuser dans les paramètres de votre navigateur.</p>

          <h2 className="text-2xl font-heading text-navy-700">6. Vos droits</h2>
          <p>Vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour exercer ces droits : fanioncanon@gmail.com.</p>

          <h2 className="text-2xl font-heading text-navy-700">7. Conservation</h2>
          <p>Les données de commande sont conservées 10 ans conformément à la législation française.</p>

          <h2 className="text-2xl font-heading text-navy-700">8. Hébergement</h2>
          <p>Les données sont stockées de manière sécurisée sur les serveurs de Shopify et Vercel.</p>
        </section>
        </main>
        <Footer />
      </div>
    </>
  )
}



