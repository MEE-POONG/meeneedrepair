import React from 'react';
import RootLayout from '../../components/layout';
import ComponentsNavbar from '../../components/Thenavbar';
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const LoginComponent: React.FC = () => {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/bgmee.png')` }}>








                                <div className="flex">
                                    <button className="group relative h-12 w-[350px] overflow-hidden rounded-2xl bg-[#0F172A]  text-1xl font-bold text-white">
                                        เข้าสู่ระบบ
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
    </div>
                                <div className="flex justify-center items-center absolute w-[350px] text-white text-center text-1xl mx-[] my-[20px]">
                                    <span className="w-full border border-white"></span>
                                    <span className="px-4">หรือ</span>
                                    <span className="w-full border border-white"></span>
                                </div>
                                <button className="absolute flex w-[350px] text-white text-center text-1xl  my-[70px] justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-2xl font-medium bg-[#1879EB]">
                                    <span className="absolute left-4 text-[25px]">
                                        <FaFacebook />
                                    </span>
                                    <span >เข้าสู่ระบบด้วย Facebook</span>
                                </button>
                                <button className="absolute flex w-[350px] text-white text-center text-1xl my-[140px] justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-2xl font-medium bg-[#0F172A]">
                                    <span className="absolute left-4 text-[25px]">
                                        <FaGoogle />
                                    </span>
                                    <span>เข้าสู่ระบบด้วย Google</span>
                                </button>

                                <button className="absolute top-[260px] justify-center flex w-[350px] text-white text-center text-1xl my-[140px] md:px-4 md:py-3 font-medium ">
                                    <span className="absolute ">
                                    </span>
                                    <Link className="mx-3 " href="./login/forgetpassword">
                                        <span>ลืมรหัสผ่าน?</span>
                                    </Link>

                                </button>
                                <div className="">
                                    <p className=""></p>
                                    <button className="absolute top-[320px] justify-center w-[350px] text-white text-center text-1xl my-[140px] md:px-4 md:py-3 font-medium ">
                                        <span className="absolute ">
                                        </span>
                                        <p >ยังไม่มีบัญชีผู้ใช้?</p>
                                        <Link className="mx-3 " href="/register">
                                            <span className="text-[#18BCEB]">สมัครสมาชิดใหม่</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>




                
            </div>





// <div className="rounded-xl  bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
// <img className="bg-center w-full h-[700px]" src="../images/bgmee.png" />

export default LoginComponent;
