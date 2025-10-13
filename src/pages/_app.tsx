import type { AppProps } from 'next/app'
import Head from 'next/head'
import { League_Spartan } from 'next/font/google'
import '@/styles/globals.css'
import { CartProviderShopify } from '@/context/CartContextShopify'
import dynamic from 'next/dynamic'
import { DEFAULT_DESCRIPTION, SITE_URL } from '@/lib/seo'
const CartDrawer = dynamic(() => import('@/components/CartDrawer'), { ssr: false })

const league = League_Spartan({ subsets: ['latin'], variable: '--font-league', weight: ['400','500','700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${league.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fanion Canon — Fanions décoratifs marins" />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/logo.png`} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fanion Canon — Fanions décoratifs marins" />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/logo.png`} />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Fanion Canon',
          url: SITE_URL,
          email: 'fanioncanon@gmail.com',
          logo: `${SITE_URL}/images/logo.png`
        })}} />
      </Head>
      <CartProviderShopify>
        <Component {...pageProps} />
        <CartDrawer />
      </CartProviderShopify>
    </div>
  )
}


