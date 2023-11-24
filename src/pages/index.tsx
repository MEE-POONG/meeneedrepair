import SlideHome from "../container/Home/SlideHome";
import Head from "next/head";
import RootLayout from "../components/layout";




export default function Home() {
  return (
    <RootLayout>
      <Head>
      
        <title>Mee Need Repair</title>
      </Head>

      <div className=''>
      <SlideHome/>

      </div>
    </RootLayout>
  )
}
