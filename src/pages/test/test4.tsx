import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiBars3BottomLeft, HiOutlineXMark, HiUser, HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi2";


const Navbartest = () => {

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




                {/* login && badket */}
                {/* <ul className="flex gap-3 font-semibold items-center text-base">
                    <li className="hover:border-b-2 hover:border-natural04" style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
                        {id ? (
                            <button className="flex items-center">
                                <HiUser size={20} />
                                <a href="./profile" className="hidden lg:block">โปรไฟล์</a>
                            </button>
                        ) : (
                            <button className="flex items-center">
                                <HiUser size={20} />
                                <a href="./login" className="hidden lg:block">เข้าสู่ระบบ</a>
                            </button>
                        )}
                    </li>
                    <div className="bg-natural04 w-[1px] h-10 "></div>


                </ul> */}
                <ul className="flex gap-3 font-semibold items-center text-base">
                    <li className="hover:border-b-2 hover:border-natural04" style={{ color: scroll > 50 ? "" : "#F4F5F5" }}>
                        {id ? (
                            <button className="flex items-center">
                                <HiUser size={20} />
                                <a href="./profile" className="hidden lg:block">โปรไฟล์</a>
                            </button>
                        ) : (
                            <button className="flex items-center">
                                <HiUser size={20} />
                                <a href="./login" className="hidden lg:block">เข้าสู่ระบบ</a>
                            </button>
                        )}
                    </li>
                    <div className="bg-natural04 w-[1px] h-10 "></div>
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

export default Navbartest;