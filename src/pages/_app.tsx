import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { League_Spartan } from 'next/font/google'
import '@/styles/globals.css'
import { CartProviderShopify } from '@/context/CartContextShopify'
import dynamic from 'next/dynamic'
import { DEFAULT_DESCRIPTION, SITE_URL } from '@/lib/seo'
import { Analytics } from '@vercel/analytics/react'
const CartDrawer = dynamic(() => import('@/components/CartDrawer'), { ssr: false })

const league = League_Spartan({ subsets: ['latin'], variable: '--font-league', weight: ['400','500','700'] })

const META_PIXEL_ID = '1877793749546914'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'PageView')
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
        <link rel="canonical" href={SITE_URL} key="canonical" />
        <link rel="icon" href="/images/Favicon512.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/Favicon512.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/Favicon512.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Fanion Canon',
          url: SITE_URL,
          email: 'fanioncanon@gmail.com',
          logo: `${SITE_URL}/images/logo.png`
        })}} />
      </Head>

      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <CartProviderShopify>
        <Component {...pageProps} />
        <CartDrawer />
      </CartProviderShopify>
      <Analytics />
    </div>
  )
}


