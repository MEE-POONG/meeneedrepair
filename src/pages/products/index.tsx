import { useState } from "react";
import RootLayout from "../../components/layout";
import CategoryList from "../../container/Product/CategoryList";
import CardProductAll from "../../container/Product/CardProductAll";
import { FiSearch } from "react-icons/fi";



export default function ProductPage() {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            {/* <div className="flex flex-col ">    
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <ProductCategory />
           <h2 className=" text-white text-xl mt-4">test</h2>
            <div className="flex w-[1500px]  text-gray-800">
                <div className="sidebar w-[300px] -translate-x-full transform  bg-slate-700 p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
                    <div className="my-4 ">
                        <h1 className="text-[#FFCD4B] text-2xl">หมวดหมู่สินค้า</h1>
                        <h2 className=" text-white text-xl mt-4">สินค้าทั้งหมด</h2>
                        <h2 className=" text-white text-xl">คอมพิวเตอร์</h2>
                        <h2 className=" text-white text-xl">สินค้าทั้งหมด</h2>
                    </div>
                </div>
   
                <div className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
                    <div className="flex h-full ">
                        <div className=" mx-3">
                        <CardProductAll/>
                        </div>
                        <div className=" mx-3">
                        <CardProductAll/>
                        </div>
                        <div className=" mx-3">
                        <CardProductAll/>
                        </div>
                        <div className=" mx-3">
                        <CardProductAll/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> */}

            <div className="container mx-auto font-fontTH01">
                <img src="/images/bannercomputer.png" alt="" className=" mx-auto my-10 w-[1300px]" />

                {/* Card Product */}
                <div className="grid md:grid-cols-12 gap-3">

                    {/* Category */}
                    <div className="col-span-3 hidden md:block">
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

                        {/* Product */}

                        <div className="">
                            <CardProductAll searchText={searchText} setSearchText={setSearchText} />

                        </div>



                    </div>

                </div>

            </div>

        </>
    )
}

