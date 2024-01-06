import Link from "next/link";
import RootLayout from "../../components/layout";
import SlideServices from '../../container/Services/SlideServices';
import SlideServices2 from '../../container/Services/SlideServices2';
import BookingModal from "../../container/Services/BookingModal";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { HiBars3BottomLeft, HiOutlineXMark, HiUser, HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi2";
import Menuservice from "../../container/Home/Menuservice";


export default function AdviserService() {
    const [loggedInUser, setLoggedInUser] = useState<any>(null);
    console.log("User ID:", loggedInUser?.id);


    useEffect(() => {
        const fetchData = async () => {
            const userDataFromCookies = Cookies.get('user');
            if (userDataFromCookies) {
                const parsedUser = JSON.parse(userDataFromCookies);
                setLoggedInUser(parsedUser);
            }
        };

        fetchData();
    }, []);
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <RootLayout loggedInUser={loggedInUser}>
                <SlideServices />
                {loggedInUser ? (
                    <div className=" lg:flex lg:justify-center lg:items-center lg:space-x-10  md:space-x-10 md:space-y-0 my-10 space-y-10 text-center   ">

                        <button className=" w-[266.65px] h-[78.98px] bg-slate-900 text-white rounded-2xl text-2xl">สอบถาม </button>
                        <Link href={`/appointment/${loggedInUser.id}`}>
                            <button className="w-[266.65px] h-[78.98px] bg-orange-500 rounded-2xl text-2xl">จองบริการ</button>
                        </Link>
                    </div>
                ) : (
                    <div className=" lg:flex lg:justify-center lg:items-center lg:space-x-10  md:space-x-10 md:space-y-0 my-10 space-y-10 text-center   ">
                        <button className=" w-[266.65px] h-[78.98px] bg-[#18BCEB] rounded-2xl text-2xl">ปรึกษา </button>

                    </div>
                )}


                <Menuservice />




                {/* <BookingModal /> แบบModal*/}


                <div className=" bg-white w-full">


                    <div className="">
                        <h1 className="text-black text-3xl md:text-5xl font-bold text-center py-10">
                            ตัวอย่างบริการของเรา
                        </h1>
                        {/* <div className=" flex justify-center my-5 ">    
                            <img src="../images/imgsevice/s1.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s2.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s3.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s5.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s6 .jpg" alt="" className="w-[250px] mx-5 " />
                        </div> */}
                        <div className="lg:p-20">
                            <SlideServices2 />
                        </div>


                    </div>

                </div>




            </RootLayout>
        </>
    )
}