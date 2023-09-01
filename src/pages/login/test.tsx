import React from 'react';
import RootLayout from '../../components/layout';
import ComponentsNavbar from '../../components/Thenavbar';
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const LoginComponent: React.FC = () => {
    return (


        <>
            <div className=' top-0 w-full'>
                <img src="/images/bgmee.png" alt="background" className=' w-full' />
                <div className="absolute top-0 transform w-full ">
                    <ComponentsNavbar />
                </div>

                <div className="absolute my-[200px] mx-auto  top-0 transform  ">
                    <img className="bg-center w-full h-[700px]" src="../images/bgmee.png" />


                </div>
            </div>

            <div className="flex flex-col justify-center items-center top-0 w-full h-screen relative">
                <img src="/images/bgmee.png" alt="background" className="w-full" />
                <div className="absolute top-0 transform w-full ">
                    <ComponentsNavbar />
                </div>
                <div className="absolute my-[200px] mx-auto top-0 transform">
                    <img className="bg-center w-full h-[700px] " src="../images/bgmee.png" />



                </div>
            </div>
        </>

    );
};

export default LoginComponent;
