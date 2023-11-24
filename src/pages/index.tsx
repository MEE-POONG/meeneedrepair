import Head from "next/head";
import RootLayout from "../components/layout";
import SlideHome from "../container/Home/SlideHome";
import MenuService from "../container/Home/MenuService";



export default function Home() {
  return (
    <RootLayout>
      <Head>

        <title>Mee Need Repair</title>
      </Head>

      <div className=''>
        <SlideHome />
        <MenuService />

      </div>
    </RootLayout>
  )
}
