import React, { useState } from 'react';
import { HiOutlineShoppingCart, HiMiniCheck } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";

const CardProductAll = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };


  return (
    <div className="relative rounded-[20px] shadow-3xl p-4 w-full bg-secondary1 text-white ">
      <div className="w-full ">
        <img
          src="images/joystick.png"
          className="mb-3 h-full w-[150px] rounded-xl mx-auto "
          alt=""
        />
        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full text-brand-500 hover:cursor-pointer">
          <div className="flex h-full w-full items-center justify-center rounded-full text-xl  ">
            <FiHeart className='hover:fill-red-500'/>
          </div>
        </button>
      </div>

      <div className="mb-3 flex items-center justify-between px-1 md:items-start">
        <div className="mb-2">
          <p className="text-sm md:text-md text-navy-700">GAMESIR T4W WIRED CONTROLLER</p>
          <p className="mt-1 text-xs md:text-sm md:mt-2 line-clamp-2">มอเตอร์สั่นพร้อมความเร็ว 5 ระดับช่วยเพิ่มความดื่มด่ำ มอเตอร์สั่นพร้อมความเร็ว 5 ระดับช่วยเพิ่มความดื่มด่ำ </p>
        </div>

      </div>
      <div className="flex items-center justify-between md:items-center lg:justify-between ">
        <div className="flex">
          <p className="text-sm md:text-md font-bold text-brand-500">฿70,900.00 </p>
        </div>
        <button onClick={toggleDropdown} className="linear bg-brand-900 px-4 py-2 text-xs text-white ">
          <span
            className="">
            {
              open ? <HiMiniCheck size={20} /> : <HiOutlineShoppingCart size={20} className='hover:fill-black' />
            }
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardProductAll;
