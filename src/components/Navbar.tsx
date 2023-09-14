import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiBars3BottomLeft, HiOutlineXMark, HiUser, HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi2";


const Navbar = () => {

  const Links = [
    { name: 'หน้าแรก', link: '/' },
    {
      name: 'เกี่ยวกับเรา',
      link: 'about',
      children: [
        { name: 'ประวัติความเป็นมา', link: '/about' },
        { name: 'ข่าวสาร', link: '/news' },
        { name: 'บทความ', link: '/blog' },
      ],
    },
    { name: 'บริการของเรา', link: 'services' },
    { name: 'สินค้า', link: 'products' },
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
      <div className=" container px-5 mx-auto flex items-center justify-between md:rounded-[100px] md:px-5 md:py-2 drop-shadow-lg" style={{ backgroundColor: scroll > 50 ? "#F4F5F5" : "" }}>
        <div className="flex items-center">
          <div onClick={() => setIsOpen(!isOpen)}
            className="md:hidden duration-700 ease-in-out"
            style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
            {
              isOpen ? <HiOutlineXMark size={38} /> : <HiBars3BottomLeft size={38} />
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
        <ul className="md:flex gap-5 hidden font-medium text-base items-center">
          {Links.map((link) => (
            <li key={link.name} className="hover:border-b-2 hover:border-natural04"
              style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
              {link.children ? (
                <div
                  className="dropdown"
                  onClick={toggleDropdown}
                >
                  <button
                    className="btn btn-link flex items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                  >
                    {link.name}

                    <span
                      className="">
                      {
                        open ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />
                      }
                    </span>
                  </button>

                  <ul
                    className="dropdown-menu mt-2 absolute bg-secondary1 p-3 rounded-lg drop-shadow-lg"
                    aria-labelledby="dropdownMenuButton"
                    style={{ display: open ? 'block' : 'none' }}
                  >
                    {link.children.map((child) => (
                      <li key={child.name} className="my-4 pl-2 hover:border-l-2 hover:border-natural01"
                        style={{ color: scroll > 50 ? "#F4F5F5" : "" }}
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
        <ul className="flex gap-3 font-semibold items-center text-base">
          <li className="hover:border-b-2 hover:border-natural04" style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
            <button className="flex items-center">
              <HiUser size={20} />
              <a href="./login" className="hidden lg:block">เข้าสู่ระบบ</a>
            </button>

          </li>
          <div className="bg-natural04 w-[1px] h-10 "></div>

          <li className="mr-5 ">
            <a href="./shoppingCart">
            <svg xmlns="http://www.w3.org/500/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
              <path d="M8.5 18H6.5V26H8.5V18Z" fill="url(#paint0_linear_220_322)" />
              <path d="M13.5 18H11.5V26H13.5V18Z" fill="url(#paint1_linear_220_322)" />
              <path d="M18.5 18H16.5V26H18.5V18Z" fill="url(#paint2_linear_220_322)" />
              <path d="M23.5 18H21.5V26H23.5V18Z" fill="url(#paint3_linear_220_322)" />
              <path d="M28.6051 9.5L23.6289 0H21.3711L26.3473 9.5H3.65269L8.62887 0H6.37113L1.39494 9.5H0V16.4667L2.6785 30H27.3198L30 16.599V9.5H28.6051ZM28 16.401L25.6802 28H4.3215L2 16.2708V16H28V16.401ZM28 14H2V11.5H28V14Z" fill="url(#paint4_linear_220_322)" />
              <defs>
                <linearGradient id="paint0_linear_220_322" x1="6.5" y1="21.9835" x2="8.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CA0808" />
                  <stop offset="1" stopColor="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint1_linear_220_322" x1="11.5" y1="21.9835" x2="13.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CA0808" />
                  <stop offset="1" stopColor="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint2_linear_220_322" x1="16.5" y1="21.9835" x2="18.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CA0808" />
                  <stop offset="1" stopColor="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint3_linear_220_322" x1="21.5" y1="21.9835" x2="23.3642" y2="21.9835" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CA0808" />
                  <stop offset="1" stopColor="#0FC0E7" />
                </linearGradient>
                <linearGradient id="paint4_linear_220_322" x1="-2.48931e-07" y1="14.9383" x2="27.963" y2="14.9383" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CA0808" />
                  <stop offset="1" stopColor="#0FC0E7" />
                </linearGradient>
              </defs>
            </svg>
            </a>
          </li>
        </ul>
      </div>




      {/* nav link for mobile here */}

      <div className={`px-10 pt-5 absolute z-[-1] w-full h-screen bg-secondary2 transition-all animate-flip-down
           ${isOpen ? '' : 'hidden'}`}
      >
        {/* <ul className="font-semibold items-center duration-700 ease-in" >
          {Links.map((link) => (
            <li key={link.name} className="my-3"
              style={{ color: scroll > 50 ? "" : "#F4F5F5" }}
            >
              <a href={link.link} >{link.name}</a>
            </li>
            // 
          ))}
        </ul> */}
        <ul className="">
          {Links.map((link) => (
            <li key={link.name} className="my-2 px-2 hover:border-b-2 hover:border-natural04">
              {link.children ? (
                <div
                  className="dropdown " 
                  onClick={toggleDropdown}
                >
                  <button
                    className="btn flex items-center "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                  >
                    {link.name}
                    <span
                      className="">
                      {
                        open ? <HiChevronUp size={15} /> : <HiChevronDown size={15} />
                      }
                    </span>
                  </button>
                  <ul
                    className=" py-1 border-t-2"
                    aria-labelledby=""
                    style={{ display: open ? 'block' : 'none' }}
                  >
                    {link.children.map((child) => (
                      <li key={child.name} className="my-2 pl-3 hover:border-l-2 hover:border-natural01">
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
      </div>

    </nav>
  );
};

export default Navbar;