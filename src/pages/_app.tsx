import type { AppProps } from 'next/app'
import Head from 'next/head'
import { League_Spartan } from 'next/font/google'
import '@/styles/globals.css'
import { CartProvider } from '@/contexts/CartContext'

const league = League_Spartan({ subsets: ['latin'], variable: '--font-league', weight: ['400','500','700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${league.variable}`}>
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </div>
  )
}


