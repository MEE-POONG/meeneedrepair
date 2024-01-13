import { useState } from 'react';
import useAxios from "axios-hooks";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaLeaf } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { PiWarningCircleFill } from "react-icons/pi";
import RootLayout from "../../components/layout";


function YourComponent() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [tel, setTel] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorText, setErrorText] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [{ error: errorpassword, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
        { url: '/api/user', method: 'POST' },
        { manual: true }
    );

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent the default form submission

        if (!fname || !lname || !tel || !birthday || !email || !password ) {
            
            setErrorText(true); // Set the error message
            return;
        }

        // Send the data to the server using Axios
        try {
            const response = await executeIndexActivity({
                data: { fname, lname , tel , birthday , email , password }, // Send the 'fname' data to the server
            });

            // Handle the response (e.g., show success message or handle errors)
            console.log('Response:', response);

            // If the registration was successful, show the modal
            setShowModal(true);
        } catch (error) {
            // Handle Axios error (e.g., show error message)
            console.error('Error:', error);
        }
    };
    const handleConfirm = () => {

        window.location.reload();
        // ทำสิ่งที่คุณต้องการเมื่อยืนยัน
        // ตัวอย่าง: ปิด Modal
        setIsModalOpen(false);

    };

    return (
        <>
            <div className="font-fontTH01">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-6/12 2xl:w-4/12  px-6 py-10 sm:px-10 sm:py-6  bg-white rounded-lg shadow-md lg:shadow-lg">
                        <h2 className="text-lg font-semibold text-1xl lg:text-3xl text-gray-800">
                            สมัครสมาชิก
                        </h2>

                        <form className="mt-10 " method="POST" onSubmit={handleSubmit}>
                            <div className="flex top-[100px]">

                                <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                        className="  peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput3"
                                        placeholder=""
                                        pattern="^[A-Za-zก-๙\s]*$" // Only allows text characters and spaces
                                        title="กรุณากรอกข้อมูลให้ถูกต้อง" // Error message if pattern doesn't match
                                    />
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
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                        className="  peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput3"
                                        placeholder=""
                                        pattern="^[A-Za-zก-๙\s]*$" // Only allows text characters and spaces
                                        title="กรุณากรอกข้อมูลให้ถูกต้อง" // Error message if pattern doesn't match
                                    />
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
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="เบอร์โทร"
                                    pattern="^[0-9]+$" // Only allows numeric characters
                                    title="กรุณากรอกเบอร์โทรเป็นตัวเลขเท่านั้น"
                                />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >เบอร์โทร
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="date"
                                    value={birthday}
                                    onChange={(e) => setBirthday(e.target.value)}
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="password" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >รหัสผ่าน
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>

                            <button type="submit"
                                className="w-full py-3  bg-gray-800 rounded-lgfont-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                สมัครสมาชิก
                            </button>

                            <div className="flex justify-center mt-10 items-center w-full text-center text-1xl my-[20px]">
                                <span className="w-full border border-black"></span>
                                <span className="px-4">หรือ</span>
                                <span className="w-full border border-black"></span>
                            </div>

                            <button className="flex w-full text-white text-1xl px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium bg-[#1879EB]">
                                <span className="text-md md:text-[25px]">
                                    <FaFacebook />
                                </span>
                                <span className="ml-2 md:mx-10 text-xs md:text-lg">เข้าสู่ระบบด้วย Facebook</span>
                            </button>
                            <button className=" flex w-full my-3 text-white text-1xl px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium bg-[#0F172A]">
                                <span className="text-md md:text-[25px]">
                                    <FaGoogle />
                                </span>
                                <span className="ml-2 md:mx-10 text-xs md:text-lg">เข้าสู่ระบบด้วย Google</span>
                            </button>





                            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center justify-center ">
                                <p>มีบัญชีผู้ใช้แล้ว?</p>
                                <Link className="mx-3 " href="./login">
                                    <p className="flex-2 underline mx-2 text-[#18BCEB]">
                                        เข้าสู่ระบบ
                                    </p>
                                </Link>

                            </div>
                        </form>
                        {/* Modal */}
                        {showModal && (
                            <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 ">
                                <div className="bg-white p-6 rounded-lg w-[500px] h-[300px] flex flex-col items-center justify-center">
                                    <div className='text-8xl mx-auto my-5 text-green-500'><BsFillCheckCircleFill /></div>
                                    <h2 className="text-4xl font-semibold mb-4">สมัครเสร็จสิ้น</h2>
                                    <p>คุณได้ทำการสมัรเสร็จสิ้น</p>
                                    <div className="mt-4">
                                        <button
                                            onClick={handleConfirm}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                                        >
                                            ยืนยัน
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {errorText && (
                            <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 ">
                                <div className="bg-white p-6 rounded-lg w-[500px] h-[300px] flex flex-col items-center justify-center">
                                    <div className='text-8xl mx-auto my-5 text-red-500'><PiWarningCircleFill /></div>
                                    <h2 className="text-4xl font-semibold mb-4">กรุณากรอกข้อมูลให้ถูกต้อง</h2>
                                    <p>ทำการกรอกข้อมูลให้ถูกต้อง</p>
                                    <div className="mt-4">
                                        <button
                                            onClick={handleConfirm}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                                        >
                                            กลับ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourComponent;











