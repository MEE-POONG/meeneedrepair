import React, { useState } from "react";
// import Serve from "./Dropdown/Serve";
import Link from "next/link";
import Serve from "./dropdown/serve";
import Language from "./dropdown/language";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const ComponentsNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" bg-[#1E293B] w-full text-right">
        {/* <Language/> */}
        <Language/>
      </div>
 
      <nav className=" bg-[#0F172A] sm/h-[130px] font-fontTH sm:px-6 lg:px-8  shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap  h-[] justify-between ">
          <img src="../images/LOGO.png" className=" w-[100px] " alt="" />
          {/*------------------------ mobile -----------------*/}
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-3"
            type="button"gap-5
            className="md:hidden text-white  focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex justify-between items-center "
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




          <div
            className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${
              isOpen ? "" : "hidden"
            }`}
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-lg  md:font-medium  ">
              <a
                href="./"
                className=" text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
              >
                หน้าแรก
              </a>
              <a
                href="about"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
              >
                เกี่ยวกับเรา
              </a>
              <Link
                href="products"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
              >
                สินค้า
              </Link>
              <div className=" hover:bg-[#18BCEB] hover: px-3 py-2 rounded-md text-20 font-medium">
                {/* <Serve/> */}
                <Serve/>
              </div>
              <Link
                href="contact"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
              >
                ติดต่อ
              </Link>
              <p className=" bg-cyan-500 w-[2px] h-10 sm:w-[0px] sm:h-[0px]"></p>
            </ul>
            <div className=" flex">
              {/* <Link
                href="/"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
              >
                สมัครสมาชิก
              </Link> */}
              <p className=" bg-white w-[2px] h-10"></p>
              <a
                href=""
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
              >
                เข้าสู่ระบบ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default ComponentsNavbar;
