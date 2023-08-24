import { Inter } from 'next/font/google'
import React from "react";
import ComponentsNavbar from './Thenavbar';
import Footer from './footer';
import FootPage from './MenuFootPaage';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ComponentsNavbar/>
      <main className={inter.className}>{children}
      </main>
      <FootPage/>
      <Footer/>
      
    </>
  )
}
