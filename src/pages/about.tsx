import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen relative bg-neutral-50">
      <Head><title>À propos — Fanion Canon</title></Head>
      {/* Mosaïque d'images en arrière-plan (lisible grâce au dégradé) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hidden md:grid grid-cols-3 gap-4 p-8 opacity-30">
          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image src="/images/histoire1.jpg" alt="Histoire Fanion Canon 1" fill className="object-cover" />
          </div>
          <div className="relative h-[420px] rounded-lg overflow-hidden mt-12">
            <Image src="/images/histoire2.jpg" alt="Histoire Fanion Canon 2" fill className="object-cover" />
          </div>
          <div className="relative h-[360px] rounded-lg overflow-hidden">
            <Image src="/images/histoire3.jpg" alt="Histoire Fanion Canon 3" fill className="object-cover" />
          </div>
        </div>
        {/* Version mobile simple */}
        <div className="md:hidden grid grid-cols-2 gap-3 p-4 opacity-30">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image src="/images/histoire1.jpg" alt="Histoire Fanion Canon 1" fill className="object-cover" />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image src="/images/histoire2.jpg" alt="Histoire Fanion Canon 2" fill className="object-cover" />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden col-span-2">
            <Image src="/images/histoire3.jpg" alt="Histoire Fanion Canon 3" fill className="object-cover" />
          </div>
        </div>
        {/* Dégradé pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/90 via-neutral-50/90 to-neutral-50"></div>
      </div>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl font-heading text-blue-900 text-center mb-10">
          À propos de Fanion Canon
        </motion.h1>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6, delay:0.1}} className="space-y-6 leading-relaxed text-justify">
          <p>Moi, c’est Marius. Un bateau marseillais pas tout à fait comme les autres.</p>
          <p>Je suis né au Vieux-Port, là où les bateaux s’alignent fièrement, drapés de bleu, blanc, rouge — tous pareils, tous sages, tous fiers. Et moi, au milieu d’eux, je me suis toujours dit : “Eh bé, on pourrait quand même se lâcher un peu, non ?”</p>
          <p>Parce que franchement, à force de ressembler à mes voisins bretons, basques ou corses, j’en avais marre d’avoir le même fanion, la même histoire, la même allure. Alors j’ai décidé de m’en créer un à moi. Un fanion canon, juste pour me démarquer.</p>
          <p>Et puis, comme souvent à Marseille, l’idée a pris le large.</p>
          <p>Les copains du port ont commencé à vouloir le leur. Un pour le Vieux-Port, un pour Cassis, un autre pour Ajaccio… Et moi, j’ai compris que j’avais mis les voiles sur quelque chose de plus grand : créer des fanions uniques, inspirés de nos régions, de nos ports et de nos histoires.</p>
          <p><strong>Fanion Canon</strong>, c’est né comme ça.</p>
          <p>Pas d’usine, pas de marketing à la grande échelle. Juste une envie simple : donner à chaque lieu son emblème cool, élégant, un peu décalé, à afficher fièrement chez soi ou sur son bateau. Chaque fanion raconte un coin de France, une ambiance, un accent. Et surtout, chacun est là pour rappeler que le style, c’est aussi une histoire de racines.</p>
          <p>Aujourd’hui, Fanion Canon vogue tranquille.</p>
          <p>Des fanions de Marseille, de Bretagne, de Corse, du Pays basque, de Normandie… Et d’autres à venir, parce qu’il y a mille ports et autant de façons d’être soi.</p>
          <p>Moi, Marius le bateau, je les vois flotter partout — sur les murs des appartements, dans les boutiques, sur les terrasses ou au fond des calanques. Et je me dis qu’au fond, être différent, c’est ça le vrai chic.</p>
          <p><strong>Fanion Canon — Pour ceux qui veulent hisser leurs couleurs avec style.</strong></p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}


