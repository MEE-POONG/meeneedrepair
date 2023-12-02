import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiBars3BottomLeft, HiOutlineXMark, HiUser, HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi2";


const Navbar = () => {

  const router = useRouter();
  const { id } = router.query; // ดึงค่า id จาก query parameters

  const [userData, setUserData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/user/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data); // กำหนดข้อมูลบทความข่าวที่ดึงมา
          //console.log(data);
          setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

        });
    }
  }, [id]);

  const Links = [
    { name: 'หน้าแรก', link: '/' },
    {
      name: 'เกี่ยวกับเรา',
      link: 'about',
      children: [
        { name: 'เกี่ยวกับเรา', link: './../about' },
        { name: 'ข่าวสาร', link: './../news' },
        { name: 'บทความ', link: './../blog' },
      ],
    },
    { name: 'บริการของเรา', link: './../services' },
    { name: 'สินค้า', link: './../products' },
    { name: 'ประวัติการจอง', link: './../products' },
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
    <nav className="font-fontTH01">
      <div className=" container mx-auto flex items-center justify-between md:rounded-[100px] md:px-5 drop-shadow-lg " style={{ backgroundColor: scroll > 50 ? "#F4F5F5" : "" }}>
      {/* <div className=" container  " style={{ backgroundColor: scroll > 50 ? "#F4F5F5" : "" }}> */}
        <div className="flex items-center  py-2">
          <div onClick={() => setIsOpen(!isOpen)}
            className="md:hidden duration-700 ease-in-out"
            style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
            {
              isOpen ? <HiOutlineXMark size={38} /> : <HiBars3BottomLeft size={38} />
            }
          </div>
          <div className="flex">
            <Image
              src="/images/logo/logoMR7.png"
              width={100}
              height={100}
              className="w-[80px]" alt="" />
          </div>
        </div>

        {/* nav link here */}
        <ul className="md:flex gap-5 hidden font-medium text-sm md:text-lg items-center">
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
                    className="dropdown-menu absolute bg-secondary1 p-3 rounded-lg drop-shadow-lg"
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
            {id ? (
               <Link href={`./../profile/${id}`} className="flex items-center">
               <HiUser size={20} />
               <span className="hidden lg:block">โปรไฟล์</span>
             </Link>
            ) : (
              <button className="flex items-center">
                <HiUser size={20} />
                <a href="./login" className="hidden lg:block text-sm md:text-lg ">เข้าสู่ระบบ</a>

              </button>
            )}
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


// import React, { useState } from "react";
// // import Serve from "./Dropdown/Serve";
// import Link from "next/link";
// import Serve from "./dropdown/serve";


// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }
// const ComponentsNavbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
 


//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);


//   };

//   return (
//     <>
    
//     <div>
//       <nav className="  sm/h-[130px] font-fontTH sm:px-6 lg:px-8  shadow-xl">
//         {/* <nav className="bg-opacity-50  sm:h-[130px] font-fontTH sm:px-6 lg:px-8 shadow-xl"> */}
//         <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap  h-[] justify-between ">
//           <img src="../images/LOGO.png" className=" w-[100px] " alt="" />
//           {/*------------------------ mobile -----------------*/}
//           <button
//             onClick={toggleDropdown}
//             data-collapse-toggle="mobile-menu-3"
//             type="button" 
//             className="md:hidden text-white  focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex justify-between items-center "
//             aria-controls="mobile-menu-3"
//             aria-expanded={isOpen ? "true" : "false"}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               className="hidden w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>




//           <div
//             className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${
//               isOpen ? "" : "hidden"
//             }`}
//             id="mobile-menu-3"
//           >
//             <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-lg  md:font-medium  ">
            
//               <Link href="./"
//                 className=" text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
//               >  หน้าแรก
//               </Link>
//               <Link href="./about"
//                 className=" text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
//               >  เกี่ยวกับเรา
//               </Link>
              
//               <Link
//                 href="products"
//                 className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium "
//               >
//                 สินค้า
//               </Link>
//               <div className=" hover:bg-[#18BCEB] hover: px-3 py-2 rounded-md text-20 font-medium">
//                 {/* <Serve/> */}
//                 <Serve/>
//               </div>

//               <Link
//                 href="products"
//                 className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
//               >
//               ประวัติการจอง
//               </Link>
//               <p className=" bg-cyan-500 w-[2px] h-10 sm:w-[0px] sm:h-[0px]"></p>
//             </ul>
//             <div className=" flex">
//               {/* <Link
//                 href="/"
//                 className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
//               >
//                 สมัครสมาชิก
//               </Link> */}
//               <p className=" bg-white w-[2px] h-10"></p>
//               <a
//                 href="./login"
//                 className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md text-20 font-medium"
//               >
//                 เข้าสู่ระบบ
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>

//     </>
//   );
// };
// export default ComponentsNavbar;
