import '../scss/globals.css'
import "../scss/slidestyles.css"
import "../scss/slidestyles2.css"
import "../scss/slideproduct.css"
import "../scss/productscard.css"
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import RootLayout from '../components/layout'
import LoginComponent from './login'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'


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
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
    console.log("User ID:", loggedInUser?.id);


    useEffect(() => {
        const fetchData = async () => {
            const userDataFromCookies = Cookies.get('user');
            if (userDataFromCookies) {
                const parsedUser = JSON.parse(userDataFromCookies);
                setLoggedInUser(parsedUser);
            }
        };

        fetchData();
    }, []);
  return (

    <SessionProvider session={session}>
      <RootLayout loggedInUser={loggedInUser}>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  )
}