import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomLeft, HiOutlineXMark, HiUser } from "react-icons/hi2";


const Navbar = () => {

  const Links = [
    { name: 'หน้าแรก', link: '/' },
    {
      name: 'เกี่ยวกับเรา',
      link: 'about',
      children: [
        { name: 'ประวัติความเป็นมา', link: '/about' },
        { name: 'วิสัยทัศน์และพันธกิจ', link: '/about' },
        { name: 'ทีมของเรา', link: '/about/our-team' },
      ],
    },
    { name: 'บริการของเรา', link: 'services' },
    { name: 'สินค้า', link: 'product' },
    { name: 'ติดต่อ', link: 'contact' },
  ];

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <nav className="font-fontTH02">
      <div className="container mx-auto flex items-center justify-between md:rounded-[100px] md:px-5 md:py-2 " style={{ backgroundColor: scroll > 200 ? "#F4F5F5" : "" }}>
        <div className="flex items-center">
          <div onClick={() => setIsOpen(!isOpen)}
            className="md:hidden duration-700 ease-in-out"
            style={{ color: scroll > 200 ? "" : "#F4F5F5" }}>
            {
              isOpen ? <HiOutlineXMark size={35} /> : <HiBars3BottomLeft size={35} />
            }

          </div>
          <div className="flex">
            <Image
              src="/images/LOGO.png"
              width={100}
              height={100}
              className="w-[90px] md:w-[120px]" alt="" />
          </div>
        </div>

        {/* nav link here */}
        {/* <ul className="md:flex gap-5 hidden font-semibold lg:text-xl items-center" >
          {Links.map((link) => (
            <li key={link.name} style={{ color: scroll > 200 ? "" : "#F4F5F5" }}>
              <a href={link.link} >{link.name}</a>
            </li>
          ))}

        </ul> */}

        <ul className="md:flex gap-5 hidden font-medium lg:text-xl items-center">
          {Links.map((link) => (
            <li key={link.name} style={{ color: scroll > 200 ? "" : "#F4F5F5" }}>
              {link.children ? (
                <div
                  className="dropdown"
                  onClick={toggleDropdown}
                >
                  <button
                    className="btn btn-link"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                  >
                    {link.name}
                  </button>
                  <ul
                    className="dropdown-menu absolute bg-secondary1 p-5 rounded-lg drop-shadow-lg"
                    aria-labelledby="dropdownMenuButton"
                    style={{ display: open ? 'block' : 'none' }}
                  >
                    {link.children.map((child) => (
                      <li key={child.name} className="my-2"
                        style={{ color: scroll > 200 ? "#F4F5F5" : "" }}
                      >
                        <a href={child.link}>{child.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a href={link.link}>{link.name}</a>
              )}
            </li>
          ))}
        </ul>




        {/* login && badket */}
        <ul className="flex gap-3 font-semibold items-center lg:text-xl">
          <li className="flex items-center" style={{ color: scroll > 200 ? "" : "#F4F5F5" }}>
            <HiUser size={20} />
            <span className="hidden lg:block">เข้าสู่ระบบ</span>
          </li>
          <div className="bg-natural04 w-[1px] h-10 "></div>

          <li className="mr-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
              <path d="M8.5 18H6.5V26H8.5V18Z" fill="url(#paint0_linear_220_322)" />
              <path d="M13.5 18H11.5V26H13.5V18Z" fill="url(#paint1_linear_220_322)" />
              <path d="M18.5 18H16.5V26H18.5V18Z" fill="url(#paint2_linear_220_322)" />
              <path d="M23.5 18H21.5V26H23.5V18Z" fill="url(#paint3_linear_220_322)" />
              <path d="M28.6051 9.5L23.6289 0H21.3711L26.3473 9.5H3.65269L8.62887 0H6.37113L1.39494 9.5H0V16.4667L2.6785 30H27.3198L30 16.599V9.5H28.6051ZM28 16.401L25.6802 28H4.3215L2 16.2708V16H28V16.401ZM28 14H2V11.5H28V14Z" fill="url(#paint4_linear_220_322)" />
              <defs>
                <linearGradient id="paint0_linear_220_322" x1="6.5" y1="21.9835" x2="8.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CA0808" />
                  <stop offset="1" stop-color="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint1_linear_220_322" x1="11.5" y1="21.9835" x2="13.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CA0808" />
                  <stop offset="1" stop-color="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint2_linear_220_322" x1="16.5" y1="21.9835" x2="18.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CA0808" />
                  <stop offset="1" stop-color="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint3_linear_220_322" x1="21.5" y1="21.9835" x2="23.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CA0808" />
                  <stop offset="1" stop-color="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint4_linear_220_322" x1="-2.48931e-07" y1="14.9383" x2="27.963" y2="14.9383" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CA0808" />
                  <stop offset="1" stop-color="#0FC0E7" />
                </linearGradient>
              </defs>
            </svg>
          </li>
        </ul>


      </div>




      {/* nav link for mobile here */}
      <div className={`p-10 absolute z-[-1] w-full h-screen backdrop-blur-xl bg-white/10 transition-all duration-0 ease-in 
           ${isOpen ? '' : 'hidden'}`}
        style={{ backgroundColor: scroll > 200 ? "#F4F5F5" : "" }}>
        <ul className="font-semibold items-center" >
          {Links.map((link) => (
            <li key={link.name} className="my-2"
              style={{ color: scroll > 200 ? "" : "#F4F5F5" }}
            >
              <a href={link.link} >{link.name}</a>
            </li>
            // 
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;