import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta property="og:site_name" content="Fanion Canon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


