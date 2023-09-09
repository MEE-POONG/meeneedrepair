
import Head from "next/head";
import RootLayout from "../components/layout";
import CardMeeNeed from "../container/Home/CardMeeNeed";
import CardNews from "../container/Home/Cardnews";
import Cardsevice from "../container/Home/Cardservice";
import Menuservice from "../container/Home/Menuservice";
import Slide from "../container/Home/Slide";



export default function Home() {
  return (
    <>
      <Head>
        <title>Mee Need Repair</title>
      </Head>

      <RootLayout>
        <Slide />
        <div className=''>
          <Menuservice />
          <CardMeeNeed />
          {/* <CardProduct /> */}
          <Cardsevice />
          <CardNews />
        </div>


      </RootLayout>
    </>
  )
}
