
import Link from "next/link";
import { useState } from "react";
import useAxios from "axios-hooks";


export default function Appointment() {

    const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
        { url: '/api/appointment', method: 'POST' },
        { manual: true }
      );
    
      const [loading, setLoading] = useState(false);
      const [fname, setFname] = useState<string>("");
      const [lname, setLname] = useState<string>("");
      const [tel, setTel] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [request, setRequest] = useState<string>("");
      const [message, setMessage] = useState<string>("");
      const [showModal, setShowModal] = useState<boolean>(false);
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // แสดง modal ยืนยันการส่งข้อมูล
        setShowModal(true);
      };
    
      const handleConfirm = async () => {
        // ทำการตั้งค่า loading เป็น true เพื่อปิด modal
        setLoading(true);
        setShowModal(false);
    
        try {
          // ส่งข้อมูลไปยัง API โดยใช้ axios หรือ useAxios
          const response = await executeIndexActivity({
            data: {
              fname,
              lname,
              tel,
              email,
              request,
              message
            },
          });
    
          // จัดการกับการตอบสนองจาก API ตรงนี้
          // เช่น การตรวจสอบค่า response.data หรือ errorMessage
    
          // เมื่อเสร็จสิ้นการส่งข้อมูลเราสามารถตั้งค่า loading กลับเป็น false
          setLoading(false);
        } catch (error) {
          // จัดการกับข้อผิดพลาดที่เกิดขึ้นในกรณีที่ API ล้มเหลว
          // เช่น การตั้งค่า errorMessage
          setLoading(false);
          console.error('Error:', error);
        }
      };
    
      const handleCancel = () => {
        // ปิด modal โดยไม่ทำการส่งข้อมูล
        setShowModal(false);
      };

    

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
                                    value={fname} onChange={(e) => setFname(e.target.value)}
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
                                    value={lname} onChange={(e) => setLname(e.target.value)}
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
                                    value={email} onChange={(e) => setEmail(e.target.value)}
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
                                    value={tel} onChange={(e) => setTel(e.target.value)}
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
                            value={request} onChange={(e) => setRequest(e.target.value)}
                            className="w-full p-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        >
                            <option value="computers" id="computers">เช็คอุปกรณ์ คอมพิวเตอร์,โน๊ตบุ๊ค</option>
                            <option value="cpu" id="cpu">ซีพียู</option>
                            <option value="motherboard" id="motherboard">เมนบอร์ด</option>
                            <option value="hdd" id="hdd">ฮาร์ดดิส / ssd</option>
                            <option value="ram" id="ram">แรม</option>
                            <option value="others" id="others">อื่นๆ</option>
                        </select>
                    </div>

                    {/* Form for entering equipment description */}
                    <div className="max-w-md mx-auto">
                        <label className="block uppercase tracking-wide text-sm font-medium text-gray-900 mb-2" htmlFor="description">
                            อธิบายอาการของอุปกรณ์พอสังเขป
                        </label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description"></textarea>
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


