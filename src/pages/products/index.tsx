import { useState } from "react";
import RootLayout from "../../components/layout";
import CategoryList from "../../container/Product/CategoryList";
import CardProductAll from "../../container/Product/CardProductAll";


export default function ProductPage() {
    return (
        <RootLayout>
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

            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div><CategoryList/></div>
                    <div className="lg:col-span-8">
                        <div className="flex flex-wrap h-full ">
                            <div className=" mx-3">
                                <CardProductAll />
                            </div>
                            <div className=" mx-3">
                                <CardProductAll />
                            </div>
                            <div className=" mx-3">
                                <CardProductAll />
                            </div>
                            <div className=" mx-3">
                                <CardProductAll />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </RootLayout>
    )
}

