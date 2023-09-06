import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const [img1, setImg1] = useState('https://assets.beartai.com/uploads/2023/08/Apollo_17.jpg'); // รูปภาพเริ่มต้น
    const [img2, setImg2] = useState('https://assets.beartai.com/uploads/2023/08/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg');
    const [img3, setImg3] = useState('https://assets.beartai.com/uploads/2023/08/Apollo_15_Lunar_Rover_and_Irwin-1024x768.jpg');
    const [img4, setImg4] = useState('https://assets.beartai.com/uploads/2023/09/Redmi-12.jpg');
    const [img5, setImg5] = useState('https://assets.beartai.com/uploads/2023/08/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg');
    const [img6, setImg6] = useState('https://assets.beartai.com/uploads/2023/08/Apollo_15_Lunar_Rover_and_Irwin-1024x768.jpg');

    return (
        <>
            <div className='slidestyles2'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
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
                </Swiper>
            </div>
        </>
    );
}
