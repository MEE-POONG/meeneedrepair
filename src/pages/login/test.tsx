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
                <div className='container mx-auto '>
                    <div className=" top-0 transform my-24 flex items-center ">
                        {/* <div className='mb-12 md:mb-0 md:w-8/12 lg:w-full '>
                            <img className="bg-center w-full" src="../images/bgmee.png" />
                        </div> */}

                        <div className="absolute top-[50px] justify-items-center">

                            <div className="absolute text-white  left-[50px]">
                                <h1 className=" text-2xl font-bold">Me Need repair</h1>
                                <div className=" text-center my-[100px] font-bold">
                                    <p className=" text-5xl mt-10 my-[10px]">Welcome!</p>
                                    <p className=" text-5xl mx-[10px] my-[20px]">to Our Website</p>
                                    <p className=" text-xl">รายละเอียดย่อย</p>
                                </div>
                                <div className=" flex items-center text-[40px] mx-[200px]">
                                    <Link className="mx-3 " href="#">
                                        <FaFacebook />
                                    </Link>
                                    <Link className="mx-3" href="#">
                                        <FaInstagram />
                                    </Link>
                                    <Link className="mx-3" href="#">
                                        <FaYoutube />
                                    </Link>
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
