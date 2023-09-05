import React, { useState } from 'react';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="w-full h-[40px] text-right bg-[#1E293B] font-fontTH01">
      <div className="relative inline-block  justify-center  right-10  text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5  text-white px-3 py-2 text-sm font-semibold  "
            id="menu-button"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            ภาษา
            <svg
              className="-mr-1 h-5 w-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute right-0 z-50 mt-2 origin-top-right rounded-md bg-secondary2 shadow-lg " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1" role="none">
              <a href="#" className="text-secondary1 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabIndex={-1} id="menu-item-0">
                ไทย
              </a>
              <a href="#" className="text-secondary1 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabIndex={-1} id="menu-item-1">
                อังกฤษ
              </a>


            </div>
          </div>
        )}
      </div>






    </div>
  )
}