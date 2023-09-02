import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";


const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between md:rounded-[100px] md:px-5 md:py-2" style={{ backgroundColor: scroll > 300 ? "#F4F5F5" : "" }}>
        <div className="flex">
          <Image
            src="/images/LOGO.png"
            width={110}
            height={110}
            className=" " alt="" />

          

        </div>
        <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="md:hidden text-primary  focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex justify-between items-center "
            aria-controls="mobile-menu-3"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        <ul className="md:flex gap-5 hidden">
          <Link href="./"
            style={{ color: scroll > 300 ? "#333" : "" }}
            className=" text-white hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-full text-20 font-medium "
          >  หน้าแรก
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;