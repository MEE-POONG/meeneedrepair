import '../scss/globals.css'
import "../scss/slidestyles.css"
import "../scss/slidestyles2.css"
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
