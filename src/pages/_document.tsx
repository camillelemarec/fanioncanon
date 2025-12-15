import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta property="og:site_name" content="Fanion Canon" />
          <link
            rel="icon"
            href="/images/Favicon512.png"
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="/images/Favicon512.png"
            type="image/png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="/images/Favicon512.png"
            sizes="180x180"
          />
          <link rel="shortcut icon" href="/images/Favicon512.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


