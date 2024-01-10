
import Head from "next/head";
import RootLayout from "../components/layout";
import CardMeeNeed from "../container/Home/CardMeeNeed";
import CardNews from "../container/Home/Cardnews";
import Cardsevice from "../container/Home/Cardservice";
import Menuservice from "../container/Home/Menuservice";
import Slide from "../container/Home/Slide";
import NewsCard from "../container/News/NewsCard";
import CardProductAll from "../container/Product/CardProductAll";
import { useState } from "react";
import BlogCard from "../container/blog/blogcard";



export default function Home(props) {

  return (
    <div>
      <>
        <Head>
          <title>Mee Need Repair</title>
        </Head>
        <Slide />
        <div className=''>
          <Menuservice />
          {/* <CardProduct /> */}
          {/* <CardProductAll searchText={searchText} setSearchText={setSearchText} /> */}
          {/* <CardNews /> */}
          <div className="container mx-auto my-auto py-6 px-5 lg:">
            <p className="text-xl md:text-3xl font-bold text-black mb-5 text-center md:text-left">ข่าวสาร</p>
            <NewsCard />
          </div>
          <div className="container mx-auto my-auto py-6 px-5 lg:">
            <p className="text-xl md:text-3xl font-bold text-black mb-5 text-center md:text-left">อัพเดทบทความ</p>
            <BlogCard />
          </div>
          <Cardsevice />
        </div>
      </>
    </div>
  )
}
