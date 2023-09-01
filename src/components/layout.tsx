import { Inter } from 'next/font/google'
import React from "react";
import ComponentsNavbar from './Thenavbar';
import Footer from './footer';
import FootPage from './MenuFootPaage';
import Header from './Header';
import BackToTopButton from './BactToTop';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <header className="sticky top-0 z-30 w-full px-2 py-4 sm:px-4 ">
        <ComponentsNavbar />
      </header>
      <main className={inter.className}>{children}
        <BackToTopButton />
      </main>
      <FootPage />
      <Footer />

    </>
  )
}
