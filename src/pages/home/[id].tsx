import Link from "next/link";
import RootLayout from "../../components/layout";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Slide from "../../container/Home/Slide";
import Menuservice from "../../container/Home/Menuservice";
import NewsCard from "../../container/News/NewsCard";
// import LatestUser from "../../container/User/LatestUser";
import BlogCard from '../../container/Blog/blogcard';
import Cardsevice from "../../container/Home/Cardservice";


const ReadUserDetail = () => {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [userData, setUserData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`/api/user/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setUserData(data); // กำหนดข้อมูลบทความข่าวที่ดึงมา
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
            <Slide />
            <div className=''>
                <Menuservice />

                {/* <CardProduct /> */}
                {/* <CardProductAll searchText={searchText} setSearchText={setSearchText} /> */}

                {/* <CardNews /> */}
                <div className="container mx-auto my-auto py-6 px-5 lg:px-24">
                    <p className="text-xl md:text-3xl font-bold text-white mb-5 text-center md:text-left">อัพเดทข่าวสาร</p>
                    <NewsCard />
                </div>
                <div className="container mx-auto my-auto py-6 px-5 lg:px-24">
                    <p className="text-xl md:text-3xl font-bold text-white mb-5 text-center md:text-left">อัพเดทบทความ</p>
                    <BlogCard />
                </div>
                <Cardsevice />
            </div>




            {/* Right Content */}
            {/* <div className="col-span-2 bg-[#1E293B] mt-10 rounded-lg p-6">
                            <p className="text-white text-xl">ข่าวแนะนำ</p> */}


            {/* <div className="bg-[#F4F5F5] rounded-[20px] mx-auto">
                                <div className="p-3 ">
                                    <img className="rounded-[20px] w-full "
                                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--99fg18pd--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/mtjqqj22x8g1nwubmb1c.png"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1] ">หัวข้อข่าว</h4>
                                    <div className="flex justify-between px-2 text-sm">
                                        <p>By ที่มาของข่าว</p>
                                        <p>2 ส.ค. 66</p>
                                    </div>
                                    <p className="mt-2 truncate">อธิบายรายละเอียด อธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียด</p>
                                    <Link href='user/readUser'>
                                        <p className="bg-yellow-500 p-2 rounded-full text-center mt-3 ">
                                            อ่าน
                                        </p>
                                    </Link>
                                </div>


                            </div> */}

            {/* </div> */}















        </RootLayout >
    )
}
export default ReadUserDetail;