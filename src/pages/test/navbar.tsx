import Language from "@/components/Dropdown/Language";
import Serve from "@/components/Dropdown/Serve";
import React, { useState } from "react";



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
     <div className=" bg-black w-full text-right">
    <Language/>
      </div>

      <nav className=" bg-[#1E293B] sm/h-[130px] font-fontTH ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap  h-[100%] justify-between ">
          <img src="../images/LOGO.png" className=" w-[100px] " alt="" />

          {/*------------------------ mobile -----------------*/}
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-3"
            type="button"
            // className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            className="md:hidden text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex justify-between items-center "
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

              <a
                href="faculty"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
              >
                สินค้า
              </a>
              <a
                href="faculty"
                className=" hover:bg-[#18BCEB] hover: px-3 py-2 rounded-md text-20 font-medium"
              >
                <Serve/>
              </a>
              <a
                href="welfare"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
              >
                ติดต่อ
              </a>
              <p className=" bg-cyan-500 w-[2px] h-10"></p>
            
             
            </ul>
            <div className=" flex">
            <a
                href="welfare"
                className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
              >
                สมัครสมาชิก
              </a>
              <p className=" bg-white w-[2px] h-10"></p>
              <a
                href="welfare"
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
