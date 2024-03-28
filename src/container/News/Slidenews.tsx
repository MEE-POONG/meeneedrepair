import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // เพิ่ม CSS effect-fade
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

interface news {
    id: number;
    title: string;
    img: string;
}

export default function SlideNews() {
    const initialVisibleItems = 4;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [newsData, setnewsData] = useState<news[]>([]); // Use the defined interface here
    //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 4);
    };

    useEffect(() => {
        fetch('/api/news')
            .then((response) => response.json())
            .then((data) => {
                setnewsData(data.news);
                setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            });
    }, []);
    return (
        <>
            <div className='slidestyles'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >


                    {newsData.slice(0, visibleItems).map((news) => (
                        <SwiperSlide className="relative">
                            <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img
                                ? news.img
                                : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                alt="img1"
                                className="object-cover w-full min-h-full"
                            />
                            {/* <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img ? news.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`} alt="img1" className="absolute inset-0 w-full h-full " /> */}

                            <Link key={news.id} href={`/news/${news.id}`} passHref>
                                <p className="absolute md:text-2xl lg:text-4xl font-medium left-0 text-white p-2
                                 w-3/4 backdrop-brightness-50 bg-white/5 pl-10 "
                                >
                                    {news.title}
                                </p>
                            </Link>
                            <Link key={news.id} href={`/news/${news.id}`} passHref>
                                <p className="absolute text-xs md:text-lg bottom-2 right-2 text-white p-2 rounded-xl 
                                 bg-blue-950 hover:bg-blue-900"
                                >
                                    อ่านต่อ
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
}
