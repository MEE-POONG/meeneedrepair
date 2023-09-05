
import Head from "next/head";
import RootLayout from "../components/layout";
import CardMeeNeed from "../container/Home/CardMeeNeed";
import CardProduct from "../container/Home/CardProduct";
import CardNews from "../container/Home/Cardnews";
import Cardsevice from "../container/Home/Cardservice";
import Menuservice from "../container/Home/Menuservice";
import TopItem from "../container/Home/Topitem";



export default function Home() {
  return (
    <>
      <Head>
        <title>Mee Need Repair</title>
      </Head>

      <RootLayout>
        <TopItem />
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
