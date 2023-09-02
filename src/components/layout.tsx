import { Inter } from 'next/font/google'
import React from "react";
import ComponentsNavbar from './Thenavbar';
import FootPage from './MenuFootPaage';
import Header from './Header';
import BackToTopButton from './BactToTop';
import Footer from './footer';
import Navbar from './Navbar';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <header className="sticky top-0 z-30 w-full sm:p-0 md:py-4 md:px-2 ">
        <Navbar/>
        {/* <ComponentsNavbar /> */}
      </header>
      <main className={inter.className}>{children}
        <BackToTopButton />
      </main>
      <FootPage />
      <Footer />

    </>
  )
}
