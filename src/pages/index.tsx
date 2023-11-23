
import Head from "next/head";
import RootLayout from "../components/layout";




export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Mee Need Repair</title>
      </Head>

      <div className=''>

        {/* <CardProduct /> */}


        {/* <CardNews /> */}
        <div className="container mx-auto my-auto py-6 px-5 lg:px-24">
          <p className="text-xl md:text-3xl font-bold text-white mb-5 text-center md:text-left">อัพเดทข่าวสาร</p>

        </div>
      </div>
    </RootLayout>
  )
}
