import React from 'react';
import RootLayout from '../../components/layout';
import ComponentsNavbar from '../../components/Thenavbar';
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const LoginComponent: React.FC = () => {
    return (
        <div className='login-page'>
            <RootLayout>
            <div className=" antialiased bg-gradient-to-br ">
                <div className="container px-6 mx-auto">
                    <div
                        className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
                    >
                    
                        <div className="flex flex-col w-full mx-auto mt-10 text-white ">
                            <h1 className=" text-2xl font-bold">Me Need repair</h1>
                            <div className=" text-center mx-auto my-[100px] font-bold">
                                <p className=" text-5xl mt-10 my-[10px]">Welcome!</p>
                                <p className=" text-5xl ">to Our Website</p>
                                <p className=" text-xl">รายละเอียดย่อย</p>

                                <div className=" flex items-center text-[40px] mt-5">
                                    <Link className="mx-auto " href="#">
                                        <FaFacebook />
                                    </Link>
                                    <Link className="mx-auto" href="#">
                                        <FaInstagram />
                                    </Link>
                                    <Link className="mx-auto" href="#">
                                        <FaYoutube />
                                    </Link>
                                </div>
                            </div>

                        </div>



                        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                            <div className=" bg-gray-800 bg-opacity-50  p-10 flex flex-col w-full h-[650px] shadow-xl rounded-xl">
                                <h2 className="text-2xl text-center  font-bold text-white  mb-5">
                                    เข้าสู่ระบบ
                                </h2>
                                <form action="" className="w-full">
                                    <div id="input" className="flex flex-col w-full my-5">
                                        <label htmlFor="username" className="text-white mb-2"
                                        >ชื่อ</label>
                                        <input
                                            type="text"
                                            id="username"
                                            placeholder="ชื่อ"
                                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg"
                                        />
                                    </div>





                                    <div id="input" className="flex flex-col w-full my-5">
                                        <label htmlFor="password" className="text-white mb-2"
                                        >รหัสผ่าน</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="รหัสผ่าน"
                                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg"
                                        />
                                    </div>
                                    <div id="button" className="flex flex-col w-full my-5">

                                        <div className="flex">
                                            <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#0F172A]  text-1xl font-bold text-white">
                                                เข้าสู่ระบบ
                                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                            </button>
                                        </div>



                                    </div>


                                    <div className="flex my-5">
                                        <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#1879EB]  text-1xl font-bold text-white">
                                            <span className="absolute left-4 text-[25px]">
                                                <FaFacebook />
                                            </span>
                                            <span >เข้าสู่ระบบด้วย Facebook</span>
                                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                        </button>
                                    </div>
                                    <div className="flex my-3">
                                        <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#0F172A]  text-1xl font-bold text-white">
                                            <span className="absolute left-4 text-[25px]">
                                                <FaGoogle />
                                            </span>
                                            <span >เข้าสู่ระบบด้วย Facebook</span>
                                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                        </button>
                                    </div>

                                    <p className=" text-white text-center my-6 ">
                                        <Link href="./login/forgetpassword">
                                            ลืมรหัสผ่าน?
                                        </Link></p>


                                    <div className=" text-white text-center my-6 ">
                                        <Link href="./../register">
                                            <p>ยังไม่มีบัญชีผู้ใช้?</p>
                                            <span className="text-[#18BCEB]">สมัครสมาชิกใหม่</span>
                                        </Link>
                                    </div>




                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RootLayout>
        </div>

    );
};

export default LoginComponent;
