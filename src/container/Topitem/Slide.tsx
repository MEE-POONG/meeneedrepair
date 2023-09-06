import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // เพิ่ม CSS effect-fade



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
    const [img1, setImg1] = useState('./images/banner 1.png'); // รูปภาพเริ่มต้น
    const [img2, setImg2] = useState('./images/banner 2.png');
    const [img3, setImg3] = useState('./images/blog.jpg');
    const [img4, setImg4] = useState('./images/imgslider/banner2.jpg');
    const [img5, setImg5] = useState('./images/imgslider/banner3.jpg');
    const [img6, setImg6] = useState('./images/imgslider/banner4.jpg');
    return (
        <>
            <div className='slidestyles'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >



                    <SwiperSlide className="relative">
                        <img src={img1} alt="img1" className="absolute inset-0 w-full h-full object-cover blur-xl" />
                        <img src={img1} alt="img1" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                        <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 1 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 1 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img src={img2} alt="img2" className="absolute inset-0 w-full h-full object-cover blur-xl" />
                        <img src={img2} alt="img2" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                        <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 2 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 2 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img src={img3} alt="img3" className="absolute inset-0 w-full h-full object-cover blur-xl" />
                        <img src={img3} alt="img3" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                        <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 3 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 3 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img src={img4} alt="img4" className="absolute inset-0 w-full h-full object-cover blur-xl" />
                        <img src={img4} alt="img4" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                        <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 4 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 4 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img src={img5} alt="img5" className="absolute inset-0 w-full h-full object-cover blur-xl" />
                        <img src={img5} alt="img5" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                        <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 5 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 5 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img src={img6} alt="img6" className="absolute inset-0 w-full h-full object-cover blur-xl" />
                        <img src={img6} alt="img6" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]" />
                        <h1 className="absolute md:text-2xl bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 6 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute md:text-2xl bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 6 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </SwiperSlide>



                    {/* <SwiperSlide style={{ backgroundImage: `url(${img2})` }}>
                        <img src={img2} alt="img2" />
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${img3})` }}>
                        <img src={img3} alt="img3" />

                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${img4})` }}>
                        <img src={img4} alt="img4" />

                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${img5})` }}>
                        <img src={img5} alt="img5" />

                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${img6})` }}>
                        <img src={img6} alt="img6" />
                    </SwiperSlide> */}
                    {/* <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
        </>
    );
}
