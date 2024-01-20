import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { LuNewspaper, LuUser2, LuMapPin, LuReceipt, LuHeart, LuUnlock, LuLogOut } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";
import { TbShoppingCartSearch } from "react-icons/tb";
import NewsCard from "../News/NewsCard";
import ShowproductsCard from "./ShowProduct";


const CategoryList = () => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!open);
    };
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="bg-secondary2 p-4 rounded-lg">
            <h1 className="text-lg text-natural04">หมวดหมู่สินค้า</h1>
            <div className="mt-2">
                <button
                    className="w-full flex justify-between items-center border-b-2"
                    onClick={toggleDropdown}
                    aria-expanded={open ? 'true' : 'false'}
                >
                    <Link href="">สินค้าทั้งหมด</Link>

                </button>
                <div className="container w-[250px] h-[100%]  tab-buttons hidden lg:flex flex-col grid-cols-5 md:gap-2 my-10 mx-10">
                    <h3 className="text-3xl text-black mb-8">หมวดหมู่สินค้า</h3>
                    <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}><div className="ml-5 flex gap-1 text-black hover:underline text-[18px] ">
                        <LuNewspaper className='w-[25px] h-[25px]' />
                        ซีพียู
                    </div>
                    </button>

                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuUser2 className='w-[25px] h-[25px]' />
                        เมนบอร์ด

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}> <div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuMapPin className='w-[25px] h-[25px]' />
                        การ์ดจอ
                    </div>
                    </button>
                    <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuReceipt className='w-[25px] h-[25px]' />
                        แรม
                    </div>
                    </button>
                    <button onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''}> <div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <AiOutlineTool className='w-[25px] h-[25px]' />
                        ฮาร์ดดิสก์

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(5)} className={activeTab === 5 ? 'active' : ''}> <div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <TbShoppingCartSearch className='w-[25px] h-[25px]' />
                        เอสเอสดี

                    </div></button>
                    <button onClick={() => handleTabClick(6)} className={activeTab === 6 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuHeart className='w-[25px] h-[25px]' />
                        พาวเวอร์ซัพพลาย

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(7)} className={activeTab === 7 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuUnlock className='w-[25px] h-[25px]' />
                        โน๊ตบุ๊ก

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(8)} className={activeTab === 0 ? 'active' : ''}><div className="ml-5 flex gap-1 text-black hover:underline text-[18px] ">
                        <LuNewspaper className='w-[25px] h-[25px]' />
                        เมาท์
                    </div>
                    </button>

                    <button onClick={() => handleTabClick(9)} className={activeTab === 1 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuUser2 className='w-[25px] h-[25px]' />
                        คีย์บอดร์ด

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(10)} className={activeTab === 2 ? 'active' : ''}> <div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuMapPin className='w-[25px] h-[25px]' />
                        หน้าจอ
                    </div>
                    </button>
                    <button onClick={() => handleTabClick(11)} className={activeTab === 3 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuReceipt className='w-[25px] h-[25px]' />
                        อุปกรณ์เสริม
                    </div>
                    </button>
                    <button onClick={() => handleTabClick(12)} className={activeTab === 4 ? 'active' : ''}> <div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <AiOutlineTool className='w-[25px] h-[25px]' />
                        ฮาร์ดดิสก์

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(13)} className={activeTab === 5 ? 'active' : ''}> <div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <TbShoppingCartSearch className='w-[25px] h-[25px]' />
                        เอสเอสดี

                    </div></button>
                    <button onClick={() => handleTabClick(14)} className={activeTab === 6 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuHeart className='w-[25px] h-[25px]' />
                        พาวเวอร์ซัพพลาย

                    </div>
                    </button>
                    <button onClick={() => handleTabClick(15)} className={activeTab === 7 ? 'active' : ''}><div className="ml-5 flex gap-1 items-center mt-2 text-black hover:underline text-[18px] ">
                        <LuUnlock className='w-[25px] h-[25px]' />
                        โน๊ตบุ๊ก

                    </div>
                    </button>
                


                </div>
                {activeTab === 0 && <ShowproductsCard />}
                {activeTab === 1 && <p><NewsCard /></p>}
                {activeTab === 2 && <p><NewsCard /></p>}
                {activeTab === 3 && <p><NewsCard /></p>}
                {activeTab === 4 && <p><NewsCard /></p>}
                {activeTab === 5 && <p><NewsCard /></p>}
                {activeTab === 6 && <p><NewsCard /></p>}
                {activeTab === 7 && <p><NewsCard /></p>}
                {activeTab === 8 && <ShowproductsCard />}
                {activeTab === 9 && <p><NewsCard /></p>}
                {activeTab === 10 && <p><NewsCard /></p>}
                {activeTab === 11 && <p><NewsCard /></p>}
                {activeTab === 12 && <p><NewsCard /></p>}
                {activeTab === 13 && <p><NewsCard /></p>}
                {activeTab === 14 && <p><NewsCard /></p>}
                {activeTab === 15 && <p><NewsCard /></p>}
                

            </div>
        </div>
    );
};

export default CategoryList;
