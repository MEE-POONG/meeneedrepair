import '../scss/globals.css'
import "../scss/slidestyles.css"
import "../scss/slidestyles2.css"
import "../scss/slideproduct.css"
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import RootLayout from '../components/layout'
import LoginComponent from './login'


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
   
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}