// import Link from "next/link";

// export default function Appointment() {
//     return (
//         <>
//             <div className="flex justify-center items-center h-screen">
//                 <div className="bg-white w-[1000px] h-[600px] p-6 rounded-lg shadow-lg">
//                     <h2 className="text-lg font-semibold text-1xl lg:text-3xl text-gray-800">
//                         สมัครสมาชิก
//                     </h2>

//                     {/* ดรอปดาวแบบเลือกและแสดงข้อมู, */}
//                     <div className="max-w-2xl mx-auto">
//                         <label
//                             htmlFor="countries"
//                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//                         >
//                             อุปกรณ์ที่ต้องการซ่อม
//                         </label>
//                         <select
//                             id="countries"
//                             className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                             <option selected>เช็คอุปกรณ์ คอมพิวเตอร์,โน๊ตบุ๊ค</option>
//                             <option value="US">ซีพียู</option>
//                             <option value="CA">เมนบอร์ด</option>
//                             <option value="FR">ฮาร์ดดิส / ssd</option>
//                             <option value="DE">แรม</option>
//                             <option value="DE">อื่นๆ</option>

//                         </select>
//                     </div>


//                     {/* ฟรอมกรอกข้อมูล */}
//                     <div className="flex flex-wrap my-10 max-w-2xl mx-auto ">
//                         <div className="w-[700px] px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                                 อธิบายอาการของอุปกรณ์พอสังเขป
//                             </label>
//                             <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//             <div>
//             </div>







    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto p-6 rounded-lg shadow-lg">
                    <h2 className=" font-semibold text-xl lg:text-2xl text-gray-800 mb-4">
                        จองคิวซ่อม
                    </h2>


                    <form className="mt-10 " method="POST">

                        <div className="flex justify-center">
                            <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                            <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >ชื่อ
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >นามสกุล
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                        </div>



                        <div className="flex justify-center">
                            <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                            <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >อีเมล
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >เบอร์โทรติดต่อ
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                        </div>                  
                    </form>


                    {/* Dropdown for selecting and displaying equipment */}
                    <div className="max-w-md mx-auto mb-4">
                        <label
                            htmlFor="equipment"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            อุปกรณ์ที่ต้องการซ่อม
                        </label>
                        <select
                            id="equipment"
                            className="w-full p-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        >
                            <option value="computers">เช็คอุปกรณ์ คอมพิวเตอร์,โน๊ตบุ๊ค</option>
                            <option value="cpu">ซีพียู</option>
                            <option value="motherboard">เมนบอร์ด</option>
                            <option value="hdd">ฮาร์ดดิส / ssd</option>
                            <option value="ram">แรม</option>
                            <option value="others">อื่นๆ</option>
                        </select>
                    </div>

                    {/* Form for entering equipment description */}
                    <div className="max-w-md mx-auto">
                        <label className="block uppercase tracking-wide text-sm font-medium text-gray-900 mb-2" htmlFor="description">
                            อธิบายอาการของอุปกรณ์พอสังเขป
                        </label>
                        <textarea className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description"></textarea>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="w-[200px] py-3 bg-[#FFCD4B] rounded-lg font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            จองคิว
                        </button>
                    </div>
                </div>




            </div>
        </>
    );
}
