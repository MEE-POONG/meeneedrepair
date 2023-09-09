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


            {/* 
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {productsData.slice(0, visibleItems).map((products) => (
                        <Link key={products.id} href={`/products/${products.id}`} passHref>

                            <div key={products.id} className="bg-secondary1 rounded-lg overflow-hidden w-60 m-10 ">
                                <img
                                    className=' w-full h-24 object-cover'
                                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${products.productimg ? products.productimg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                    alt='indexActivity image'
                                />

                                <div className="px-4 mt-5">
                                    <p className="text-xl line-clamp-2 font-semibold bg-gradient-to-r from-[#081FF0] to-[#13D1D1] bg-clip-text text-transparent">
                                        {products.productname}
                                    </p>
                                    <p className="text-secondary2 line-clamp-2 mb-5">{products.subtitle}
                                    </p>

                                    <div className="flex justify-between mb-3">

                                        <div className="flex text-[#18BCEB] text-sx">
                                            <p>By &nbsp;</p>
                                            <p>{products.author}</p>
                                        </div>

                                        <div className="flex text-[#FFCD4B] text-sx">
                                            <p>{products.date}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </Link>
                    ))}
                </div>
            </div> */}


            {productsData.slice(0, visibleItems).map((products) => (

                // <div className="relative rounded-[20px] shadow-3xl p-4  bg-secondary1 text-white flex w-[230px]  ">
                <div className="relative text-white bg-secondary1  h-[250px] w-[200px] rounded-[20px]">
                <div className="flex flex-wrap -mx-2">
                    {/* <button className="absolute top-3 right-3 flex items-center justify-center rounded-full text-brand-500 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl  ">
                            <FiHeart className='hover:fill-red-500' />
                        </div>
                    </button> */}


                    {/* <Link key={products.id} href={`/products/${products.id}`} passHref>
                        <div className="w-full ">
                            <img
                                className="mb-3 h-full w-[150px] rounded-xl mx-auto "
                                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${products.productimg ? products.productimg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                           />

                        </div>
                        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                            <div className="mb-2">
                                <p className="text-sm md:text-md text-navy-700">{products.productname}</p>
                                <p className="mt-1 text-xs md:text-sm md:mt-2 line-clamp-2">{products.productdetail}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                            <div className="flex">
                                <p className="text-sm md:text-md font-bold text-brand-500">{products.productprice}</p>
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
                    </Link> */}
                </div>
                </div>



            ))}



            <div className="relative text-white bg-secondary1 rounded-[20px]">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-[20%] px-2 mb-4">รายการ 1</div>
                    <div className="w-[20%] px-2 mb-4">รายการ 2</div>
                    <div className="w-[20%] px-2 mb-4">รายการ 3</div>
                    <div className="w-[20%] px-2 mb-4">รายการ 4</div>
                    <div className="w-[20%] px-2 mb-4">รายการ 5</div>
                    <div className="w-[20%] px-2 mb-4">รายการ 6</div>

                </div>
            </div>


        </>
    );
};

export default CardProductAll;
