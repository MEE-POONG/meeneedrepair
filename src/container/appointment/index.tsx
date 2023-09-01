import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Appointment() {
    return (
        <>

            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-[1000px] h-[600px] p-6 rounded-lg shadow-lg">

                    <div className="flex justify-center top-[100px] ">

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
                    <div className="flex justify-center top-[100px] ">
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








                    <button className="bg-[#FFCD4B] w-[200px] h-[60px] rounded-xl mx-auto block">
                        จองคิว
                    </button>

                    <div className=" ">
                    <select
  data-te-select-init
  data-te-select-placeholder="Example placeholder"
  multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
</select>

                    </div>




                </div>
            </div>

            <div>


                {/* 
<div className="flex flex-col ">

    <div className="grid place-items-center mx-2 my-20 sm:my-auto">



        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-6/12 2xl:w-4/12  px-6 py-10 sm:px-10 sm:py-6  bg-white rounded-lg shadow-md lg:shadow-lg">


            <h2 className="text-lg font-semibold text-1xl lg:text-3xl text-gray-800">
                สมัครสมาชิก
            </h2>

            <form className="mt-10 " method="POST">

                <div className="flex top-[100px]">
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

                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput3"
                        placeholder="Email address" />
                    <label
                        htmlFor="exampleFormControlInput3"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                    >เบอร์โทร
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
                    >วัน/เดือน/ปีเกิด
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
                    >รหัสผ่าน
                    </label>
                    <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                </div>

             
                 <button className="bg-[#FFCD4B] w-[200px] h-[60px] rounded-xl mx-auto block">
                        ขอเปลี่ยนรหัสผ่าน
                    </button>

    





              
            </form>
        </div>
    </div>
</div> */}
            </div>


        </>


    )
}