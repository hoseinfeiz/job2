import { Html, Head, Main, NextScript } from 'next/document'
import Reset from '@/containers/Reset/Reset'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Reset />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
