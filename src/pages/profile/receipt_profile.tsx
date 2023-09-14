import Link from "next/link";

const ReceiptProfile = () => {
    return (
        <div className="">
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                    <path d="M15 13.125H30M15 20.625H30M15 28.125H22.5M37.5 39.375V9.375C37.5 8.38044 37.1049 7.42661 36.4016 6.72335C35.6984 6.02009 34.7446 5.625 33.75 5.625H11.25C10.2554 5.625 9.30161 6.02009 8.59835 6.72335C7.89509 7.42661 7.5 8.38044 7.5 9.375V39.375L12.1875 35.625L17.8125 39.375L22.5 35.625L27.1875 39.375L32.8125 35.625L37.5 39.375Z" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">ใบเสร็จ/ใบกำกับภาษี</h3>
            </div>

            <div className="bg-secondary2 mt-10 rounded-lg p-8 text-secondary1">
                <div>
                    <p className="text-red-500 text-center mb-5">**แสดงเมื่อกดปุ่ม เพิ่มที่อยู่ หรือ แก้ไข**</p>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">แก้ไขข้อมูลใบเสร็จ/ใบกำกับภาษี</p>

                    </div>
                    <div className="mt-5 leading-loose">
                        <p className="text-lg">ข้อมูลผู้ซื้อสินค้า</p>

                        <div className="grid grid-cols-12 gap-5 md:ml-10 my-5">

                            <div className="col-span-12 md:col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">ชื่อผู้รับ</p>
                                <input type="text" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />
                            </div>

                            <div className="col-span-12 md:col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">ชื่อผู้รับ</p>
                                <input type="text" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 " />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">เบอร์โทรศัพท์</p>
                                <input type="text" className=" w-full h-9 pl-2   border border-b-black focus:outline-none focus:border-b-blue-500 " />
                            </div>

                        </div>



                        <div className="flex justify-between mt-10">
                            <p className="text-lg">ข้อมูลที่อยู่</p>
                            {/* <p className="text-sm">dsadsa</p> */}
                        </div>

                        <div className="grid grid-cols-12 gap-5 md:ml-10 my-5 ">

                            <div className="col-span-12">
                                <p className="text-[#666363] my-2  ">ประเภทที่อยู่</p>
                                <select className=" w-full h-9 pl-2  border border-b-black focus:outline-none focus:border-b-blue-500 " >
                                    <option value="" disabled selected hidden >กรุณาเลือก</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>

                            <div className="col-span-12">
                                <p className="text-[#666363] my-2">ที่อยู่</p>
                                <input type="text" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 " />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">รหัสไปรษณีย์</p>
                                <input type="text" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 " />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">จังหวัด</p>
                                <select className=" w-full h-9 pl-2  border border-b-black focus:outline-none focus:border-b-blue-500 " >
                                    <option value="" disabled selected hidden className="text-gray-500">กรุณาเลือกจังหวัด</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">อำเภอ/เขต</p>
                                <select className=" w-full h-9 pl-2  border border-b-black focus:outline-none focus:border-b-blue-500 " >
                                    <option value="" disabled selected hidden className="text-gray-500">กรุณาเลือกอำเภอ/เขต</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">ตำบล/แขวง</p>
                                <select className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 " >
                                    <option value="" disabled selected hidden className="text-gray-500">กรุณาเลือกตำบล/แขวง</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>


                            <div className="col-span-12">
                                <p className="text-[#666363] my-2">จุดสังเกตุ (ถ้ามี)</p>
                                <input type="text" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 " />
                            </div>




                        </div>

                        <div className="flex flex-row gap-4 ml-10">
                            <input type="checkbox" className="self-center  w-5 h-5 pl-2 ring-2  ring-green-500" />
                            <p className="text-[#666363] my-2">ตั้งเป็นที่อยู่ปัจจุบัน</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <button className="bg-[#18BCEB] h-10 w-24 rounded-3xl text-secondary2">บันทึก</button>
            </div>
        </div>
    )
}
export default ReceiptProfile;