import { Mitr } from 'next/font/google'
import React ,{ ReactNode } from "react";
import FootPage from './MenuFootPaage';
import Header from './Header';
import BackToTopButton from './BactToTop';
import Footer from './footer';

import { useRouter } from "next/router";
import ComponentsNavbar from './Thenavbar';
import Navbar from './Navbar';


interface RootLayoutProps {
  loggedInUser: any;
  children: ReactNode; // เพิ่มบรรทัดนี้
}

const fontMNR = Mitr({
  weight: "300",
  subsets: ['latin'],
  variable: '--font-mitr',
})


const RootLayout: React.FC<RootLayoutProps> = ({ loggedInUser, children }) => {

  return (
    <>
      <Header />
      <header className="sticky top-2 z-30 w-full sm:p-0  ">
      <Navbar />
      </header>
      <main className={fontMNR.className}>
        {children}
        <BackToTopButton />
      </main>
      <footer className='bottom-0 w-full mt-24'>

        <Footer />
      </footer>
    </>
  )
}
export default RootLayout;