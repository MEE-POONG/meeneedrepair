import Head from "next/head";
import RootLayout from "../components/layout";
import SlideHome from "../container/Home/SlideHome";
import MenuService from "../container/Home/MenuService";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogCard from "../container/blog/Blogcard";
import NewsCard from "../container/news/Newscard";
// import LatestUser from "../../container/User/LatestUser";


const ReadUserDetail = () => {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [user, setUser] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`/api/user/${id}`)
                .then((response) => response.json())
                .then((username) => {
                    setUser(username); // กำหนดข้อมูลบทความข่าวที่ดึงมา
                    //console.log(data);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });
        }
    }, [id]);

  return (
    <RootLayout>
      <Head>

        <title>Mee Need Repair</title>
      </Head>

      <div className=''>
        <SlideHome />
        <MenuService />
        <div className="text-[38px]  mx-52">
          ข่าว
        </div>
          <BlogCard/>
          <div className="text-[38px]  mx-52">
          ข่าว
        </div>
          <NewsCard/>
      </div>
    </RootLayout>
  )
}

export default ReadUserDetail;