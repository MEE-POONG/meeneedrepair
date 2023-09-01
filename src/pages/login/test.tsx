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

                {/* <div className=''>
      <img className='absolute  top-1/2  w-[590px] ' src="/images/bgmee.png" alt="background" />
      </div> */}





                </div>
            </div>
        </>

    );
};

export default LoginComponent;
