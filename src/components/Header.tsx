import React, { useState } from 'react';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="w-full h-[40px] text-right bg-[#1E293B] ">
            <div className=" justify-center absolute top-4 right-10 ">
                    <button onClick={toggleDropdown} className=" flex rounded-md ">
                        <p className=" flex text-white">ไทย</p>
                        <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {dropdownOpen && <div onClick={closeDropdown} className="fixed inset-0 h-full w-full z-10"></div>}

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                ไทย
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                อังกฤษ
                            </a>


                        </div>
                    )}

            </div>
        </div>
    )
}