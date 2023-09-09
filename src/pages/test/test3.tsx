import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingCart, HiMiniCheck } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";
import Link from 'next/link';


interface products {
    id: number;
    productname: string;
    productbrand: string;
    productmodel: string;
    productdetail: string;
    producttype: string;
    productcost: string;
    productprice: string;
    productremaining: string;
    productimg: string;
    // Add other properties if there are more
}


const CardProductAll = () => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!open);
    };
    const initialVisibleItems = 4;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [productsData, setproductsData] = useState<products[]>([]); // Use the defined interface here
    //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 4);
    };

    useEffect(() => {
        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => {
                setproductsData(data.products);
                setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            });
    }, []);




    return (
        <>

<div className="flex flex-wrap -mx-2">
  {productsData.slice(0, visibleItems).map((product, index) => (
    <div className="w-[20%] px-2 mb-4" key={index}>
      <div className="relative rounded-[20px] bg-secondary1 w-[230px] h-[200px]">
        {/* แสดงข้อมูลสินค้าที่นี่ */}


        
      </div>
    </div>
  ))}
</div>


        </>
    );
};

export default CardProductAll;
