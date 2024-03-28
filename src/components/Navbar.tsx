import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiBars3BottomLeft, HiOutlineXMark, HiUser, HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi2";
import Cookies from 'js-cookie';
import { CiShoppingBasket } from "react-icons/ci";

interface NavbarProps {
  user: { email: string, id: string } | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {

  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const userDataFromCookies = Cookies.get('user');
      if (userDataFromCookies) {
        const parsedUser = JSON.parse(userDataFromCookies);
        setLoggedInUser(parsedUser);
      }
    };

    fetchData();
  }, []);

  const Links = [
    { name: 'หน้าแรก', link: `/` },
    {
      name: 'เกี่ยวกับเรา',
      link: 'about',
      children: [
        { name: 'เกี่ยวกับเรา', link: `./../about` },
        { name: 'ข่าวสาร', link: `./../news` },
        { name: 'บทความ', link: `./../blog` },
      ],
    },
    { name: 'บริการของเรา', link: `./../services` },
    { name: 'สินค้า', link: `./../products` },
    { name: 'ประวัติ', link: `./../products` },
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
      <div className="" style={{ backgroundColor: scroll > 50 ? "" : "#0f172a" }}>
        <div className=" container mx-auto flex items-center justify-between gap-12 md:rounded-[100px] drop-shadow-2xl" style={{ backgroundColor: scroll > 50 ? "#F4F5F5" : "" }}>
          {/* <div className=" container  " style={{ backgroundColor: scroll > 50 ? "#F4F5F5" : "" }}> */}
          <div className="flex items-center  py-5 ">
            <div onClick={() => setIsOpen(!isOpen)}
              className="md:hidden duration-700 ease-in-out "
              style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
              {
                isOpen ? <HiOutlineXMark size={38} /> : <HiBars3BottomLeft size={38} />
              }
            </div>
            <div className="" >
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                className="w-[50px] ml-10" alt="" />
            </div>
          </div>

          {/* nav link here */}
          <ul className="md:flex justify-between gap-5 hidden font-medium text-sm md:text-base items-center">
            {Links.map((link) => (
              <li key={link.name} className="hover:border-b-2  hover:border-natural04"
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
              {loggedInUser ? (
                <Link href={`./../profile/${loggedInUser.id}`} className="flex items-center">
                  <HiUser size={20} />
                  <span className="hidden lg:block">{loggedInUser.email}</span>
                </Link>
              ) : (
                <button className="flex items-center">
                  <HiUser size={20} />
                  <a href="./login" className="hidden lg:block text-sm md:text-base  ">เข้าสู่ระบบ</a>
                </button>
              )}
            </li>
            <div className="bg-natural04 w-[1px] h-10 "></div>

            <li className="mr-5 ">
              <Link href="./shoppingCart">
                <CiShoppingBasket size={20} style={{ color: scroll > 50 ? "" : "#F4F5F5" }} />
              </Link>
            </li>
          </ul>
        </div>
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
                      <li key={child.name} className="my-2 pl-3 hover:border-l-2 hover:border-natural01 ">
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