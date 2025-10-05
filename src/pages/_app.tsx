import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${playfair.variable}`}>
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </div>
  )
}


