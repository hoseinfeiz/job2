import { Html, Head, Main, NextScript } from 'next/document'
import Reset from '@/containers/Reset/Reset'
import Footer from '@/containers/Footer/Footer'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Reset />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
