import { Mitr } from 'next/font/google'
import React from "react";
import FootPage from './MenuFootPaage';
import Header from './Header';
import BackToTopButton from './BactToTop';
import Footer from './footer';
import Navbar from './Navbar';
import { useRouter } from "next/router";
import ComponentsNavbar from './Thenavbar';

const fontMNR = Mitr({
  weight: "300",
  subsets: ['latin'],
  variable: '--font-mitr',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const { id } = router.query; // ดึงค่า id จาก query parameters

  return (
    <>
      <Header />
      <header className="sticky top-0 z-30 w-full sm:p-0 md:py-4 md:px-2">
        {id ? (<Navbar />) : (<ComponentsNavbar />)}
      </header>
      <main className={fontMNR.className}>
        {children}
        <BackToTopButton />
      </main>
      <footer className='bottom-0 w-full mt-24'>
        <FootPage />
        <Footer />
      </footer>
    </>
  )
}
