import Link from "next/link";

const OrderProfile = () => {
    return (
        <div className="">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                    <path d="M9.375 31.875C9.375 32.8696 9.77009 33.8234 10.4733 34.5266C11.1766 35.2299 12.1304 35.625 13.125 35.625C14.1196 35.625 15.0734 35.2299 15.7766 34.5266C16.4799 33.8234 16.875 32.8696 16.875 31.875C16.875 30.8804 16.4799 29.9266 15.7766 29.2234C15.0734 28.5201 14.1196 28.125 13.125 28.125C12.1304 28.125 11.1766 28.5201 10.4733 29.2234C9.77009 29.9266 9.375 30.8804 9.375 31.875ZM28.125 31.875C28.125 32.8696 28.5201 33.8234 29.2234 34.5266C29.9266 35.2299 30.8804 35.625 31.875 35.625C32.8696 35.625 33.8234 35.2299 34.5266 34.5266C35.2299 33.8234 35.625 32.8696 35.625 31.875C35.625 30.8804 35.2299 29.9266 34.5266 29.2234C33.8234 28.5201 32.8696 28.125 31.875 28.125C30.8804 28.125 29.9266 28.5201 29.2234 29.2234C28.5201 29.9266 28.125 30.8804 28.125 31.875Z" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.375 31.875H5.625V24.375M3.75 9.375H24.375V31.875M16.875 31.875H28.125M35.625 31.875H39.375V20.625M39.375 20.625H24.375M39.375 20.625L33.75 11.25H24.375M5.625 16.875H13.125" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">รายการคำสั่งซื้อ</h3>
            </div>

            <div className="mt-10 rounded-lg md:p-8 text-secondary1 text-sm md:text-base w-[1000px]">

                <div className="bg-secondary2 rounded-2xl p-3 grid grid-cols-12 mb-5">
                    <img src="/images/joystick.png" alt="" className="col-span-2 md:col-span-2 h-24 w-24 object-contain" />
                    <p className="col-span-4 md:col-span-6 self-center truncate">ชื่อสินค้า</p>
                    <p className="col-span-2 md:col-span-1 self-center text-[#FF5C74] text-center">฿ 490</p>
                    <div className="col-span-3 md:col-span-2 self-center flex justify-center flex-wrap">สถานะ:
                        <p className="self-center md:ml-1 text-green-500 text-center">สำเร็จ</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                            <path d="M9 17h6"></path>
                            <path d="M9 13h6"></path>
                        </svg>
                    </div>

                </div>


                <div className="bg-secondary2 rounded-2xl p-3 grid grid-cols-12 mb-5">
                    <img src="/images/joystick.png" alt="" className="col-span-2 md:col-span-2 h-24 w-24 object-contain" />
                    <p className="col-span-4 md:col-span-6 self-center truncate">ชื่อสินค้า ถ้ายาวจะเป็นแบบนี้ อันนี้คือความยาวของตัวหนังสือ ถ้ายาว </p>
                    <p className="col-span-2 md:col-span-1 self-center text-[#FF5C74] text-center">฿ 490</p>
                    <div className="col-span-3 md:col-span-2  self-center flex justify-center flex-wrap">สถานะ:
                        <p className="self-center md:ml-1 text-orange-500 text-center">เตรียม</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                            <path d="M9 17h6"></path>
                            <path d="M9 13h6"></path>
                        </svg>
                    </div>

                </div>

                <div className="bg-secondary2 rounded-2xl p-3 grid grid-cols-12 mb-5">
                    <img src="/images/joystick.png" alt="" className="col-span-2 md:col-span-2 h-24 w-24 object-contain" />
                    <p className="col-span-4 md:col-span-6 self-center truncate">ชื่อสินค้า</p>
                    <p className="col-span-2 md:col-span-1 self-center text-[#FF5C74] text-center">฿ 490</p>
                    <div className="col-span-3 md:col-span-2  self-center flex justify-center flex-wrap">สถานะ:
                        <p className="self-center md:ml-1 text-orange-500 text-center">กำลังส่ง</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                            <path d="M9 17h6"></path>
                            <path d="M9 13h6"></path>
                        </svg>
                    </div>

                </div>


                <div className="bg-secondary2 rounded-2xl p-3 grid grid-cols-12 mb-5">
                    <img src="/images/joystick.png" alt="" className="col-span-2 md:col-span-2 h-24 w-24 object-contain" />
                    <p className="col-span-4 md:col-span-6 self-center truncate">ชื่อสินค้า</p>
                    <p className="col-span-2 md:col-span-1 self-center text-[#FF5C74] text-center">฿ 490</p>
                    <div className="col-span-3 md:col-span-2  self-center flex justify-center flex-wrap">สถานะ:
                        <p className="self-center md:ml-1 text-red-500 text-centertext-center">ยกเลิก</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                            <path d="M9 17h6"></path>
                            <path d="M9 13h6"></path>
                        </svg>
                    </div>

                </div>








            </div>

        </div>
    )
}
export default OrderProfile;