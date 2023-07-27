
import Serve from "@/components/dropdown/serve";
import React, { useState } from "react";
import Language from "./dropdown/language";


const ComponentsNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-full mx-auto">
      <div className=" bg-black w-full h-10 ">
        <span className="font-serif sm:text-sm">
          <p className="mr-5" style={{ float: "right" }}>
          <Language/>
          </p>
        </span>
      </div>


      <nav className="bg-[#1E293B] h-[130px] font-fontTH ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="container flex flex-wrap items-center justify-between h-16">
            <div className="flex flex-wrap items-center mt-[2%]">
           
              
              <div className="flex md:order-2 ml-5">
              <img className=" w-[100px]" 
              src="../images/LOGO.png" 
              alt="" />
                <button
                  onClick={toggleDropdown}
                  data-collapse-toggle="mobile-menu-3"
                  type="button"
                  className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
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
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* คำสั่ง เมนู */}
            <div className="hidden md:block"></div>
            <div
              className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${
                isOpen ? "" : "hidden"
              }`}
              id="mobile-menu-3"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium bg-[#1E293B] ">
                <a
                  href="about"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
                >
                  หน้าแรก
                </a>

                <a
                  href="about"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                  เกี่ยวกับเรา
                </a>

                <a
                  href="faculty"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                  สินค้า
                </a>
                  <Serve/>
                <a
                  href="welfare"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                 ติดต่อ
                </a>
                <p className=" bg-cyan-500 w-[2px] h-10"></p>
                <a
                  href="welfare"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                 เข้าสู่ระบบ
                </a>
             

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ComponentsNavbar;
