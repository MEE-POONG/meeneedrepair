import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";


const CategoryList = () => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-secondary2 p-4 rounded-lg ">
            <h1 className="text-lg text-natural04">หมวดหมู่สินค้า</h1>

            <button className="mt-2">
                <Link href="" >สินค้าทั้งหมด</Link>
            </button>

            <div onClick={toggleDropdown}
                className="">
                <button className="mt-2 w-full flex justify-between items-center border-b-2 "
                    aria-expanded={open ? 'true' : 'false'}>
                    <Link href="" >คอมพิวเตอร์</Link>
                    <span
                        className="">
                        {
                            open ? <HiMinusSmall size={20} /> : <HiPlusSmall size={20} />
                        }
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CategoryList;
