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
        <div>

          <div className="h-screen flex ">
            <div className="flex w-1/2 bg-gradient-to-tr  i justify-around items-center">
              <div>
                <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
              </div>
            </div>
            <div className="flex w-1/2 justify-center items-center ">
              <form className="">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

                {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
                </div> */}
                {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                  <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
                </div> */}

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Email address" />
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    อีเมลล์
                  </label>
                  <p className=" bg-white w-[350px] h-[2px]"></p>
                </div>
                <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Email address" />
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >รหัสผ่าน
                  </label>
                  <p className=" bg-white w-[350px] h-[2px]"></p>
                </div>


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



             
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
              </form>
            </div>
          </div>
        </div>


      </RootLayout>
    </div>

  );
};

export default LoginComponent;
