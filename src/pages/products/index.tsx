import { useState } from "react";
import RootLayout from "../../components/layout";
import CategoryList from "../../container/Product/CategoryList";
import CardProductAll from "../../container/Product/CardProductAll";
import { FiSearch } from "react-icons/fi";
import Slide from "../../container/Home/Slide";
import Slideproduct from "../../container/Product/Slideproduct";
import Link from "next/link";
import NewsCard from "../../container/News/NewsCard";
import PromoteCard from "../../container/Product/Promote";
import ShowproductsCard from "../../container/Product/ShowProduct";



export default function ProductPage() {
    const [searchText, setSearchText] = useState("");

    return (
        <>
       
            <Slideproduct />
            <div className="container mt-5 mx-auto font-fontTH01">
                <div className="mx-auto text-center text-[50px]">
                    <p>Promotion</p>
                </div>
                <div className="container mx-auto my-auto py-6 px-5 lg:">
                    <div className="flex justify-between">
                        <p className="text-xl md:text-3xl font-bold text-black mb-5 text-center md:text-left">สินค้าแนะนำ</p>
                        <Link href='news' className="text-sx md:text-xl flex items-center hover:underline hover:decoration-sky-500 ">เพิ่มเติม</Link>
                    </div>
                    <PromoteCard />
                </div>
                {/* Card Product */}
                <div className="grid md:grid-cols-12 gap-3">

                    {/* Category */}
                    <div className="col-span-3 hidden md:block">
                        <p>สินค้าทั้งหมด</p>
                        <CategoryList />
                    </div>


                    <div className="md:col-span-9">
                        <div className="grid grid-rows-1 mb-3">
                            {/* Search */}
                            <div className="md:col-end-12 ">
                                <div className="flex items-center bg-secondary1 rounded-lg p-2">
                                    <p className="text-sm md:text-md text-secondary2 mr-2">ค้นหา:</p>
                                    <input type="search" name="" id=""
                                        className="px-2 bg-transparent border-b-2 w-full text-secondary2"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                    <span className="bg-natural01 rounded-lg p-2 ml-3"><FiSearch /></span>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto my-auto  px-5 lg:">
                            <div className="flex justify-between">
                                <ShowproductsCard />
                            </div>
                        </div>

                        <div className="container mt-5 mx-auto my-auto  px-5 lg:">
                            <div className="flex justify-between">
                                <ShowproductsCard />
                            </div>
                        </div>

                        {/* Product */}

                        <div className="">
                            {/* <CardProductAll searchText={searchText} setSearchText={setSearchText} /> */}

                        </div>



                    </div>

                </div>

            </div>

        </>
    )
}

