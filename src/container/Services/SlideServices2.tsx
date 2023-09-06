import React, { CSSProperties, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [img1, setImg1] = useState('./images/imgsevice/s1.jpg'); // รูปภาพเริ่มต้น
    const [img2, setImg2] = useState('./images/imgsevice/s2.jpg');
    const [img3, setImg3] = useState('./images/imgsevice/s3.jpg');
    const [img4, setImg4] = useState('./images/imgsevice/s4.jpg');
    const [img5, setImg5] = useState('./images/imgsevice/s5.jpg');
    const [img6, setImg6] = useState('./images/imgsevice/s6.jpg');
    return (
        <>
            <div className='slidestyles2'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    } as CSSProperties}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

                    modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide >
                        <img src={img1} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="img2" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="img1" className="" />
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="img1" className="" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="img2" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="img1" className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="img1" className="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
