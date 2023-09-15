import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // เพิ่ม CSS effect-fade



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

interface news {
    id: number;
    title:string;
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
                        delay: 120000,
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
                        <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img ? news.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`} alt="img1" className="absolute inset-0 w-full h-full  object-cover blur-xl" />
                        <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img ? news.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`} alt="img1" className="absolute inset-0 w-full h-full  object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                       
                        <Link key={news.id} href={`/news/${news.id}`} passHref>
                            <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            {news.title} {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>            
                        
                   
                        
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                             อ่านต่อ  {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        </Link>
                    </SwiperSlide>
                    ))}
                
                </Swiper>
            </div>
        </>
    );
}
