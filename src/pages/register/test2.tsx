import React, { SetStateAction, useState, useEffect } from 'react';
import useAxios from "axios-hooks";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaLeaf } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { PiWarningCircleFill } from "react-icons/pi";
import RootLayout from "../../components/layout";


function RegisterFrom() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [tel, setTel] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false); // State สำหรับตรวจสอบข้อมูลซ้ำ

    const [errorText, setErrorText] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsDuplicate(false); // เมื่อข้อมูลเปลี่ยนแปลงให้รีเซ็ต isDuplicate เป็น false
    }, [tel, email]);

    const [{ error: errorpassword, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
        { url: '/api/user', method: 'POST' },
        { manual: true }
    );

    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
        // เมื่อรหัสผ่านเปลี่ยน ตรวจสอบว่ารหัสผ่านและรหัสผ่านยืนยันตรงกันหรือไม่
        setPasswordsMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setConfirmPassword(e.target.value);
        // เมื่อรหัสผ่านยืนยันเปลี่ยน ตรวจสอบว่ารหัสผ่านและรหัสผ่านยืนยันตรงกันหรือไม่
        setPasswordsMatch(e.target.value === password);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };



    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent the default form submission

        if (!tel || !email) {

            setErrorText(true); // Set the error message
            return;
        }

        // Send the data to the server using Axios
        try {
            const response = await executeIndexActivity({
                data: { tel, email }, // Send the 'fname' data to the server
            });
            if (response.data.isDuplicate) {
                setIsDuplicate(true); // ตั้งค่า isDuplicate เป็น true ถ้ามีข้อมูลซ้ำ
            } else {
                console.log('Response:', response);
                setShowModal(true);
            }

            // console.log('Response:', response);

            // setShowModal(true);
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
        <RootLayout>
            <form className="mt-10 " method="POST" onSubmit={handleSubmit}>
                {isDuplicate && <div className="error-message">ข้อมูลซ้ำกัน</div>}
                <div className="mb-6 my-5">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">เบอร์โทรศัพท์</label>
                    <input
                        type="number"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        title="กรุณากรอกเบอร์โทรเป็นตัวเลขเท่านั้น"
                        required
                    />
                </div>
                <div className="mb-6 my-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email address"
                        required
                    />
                </div>

                <button type="submit"
                    className="w-full py-3  bg-gray-800 rounded-lgfont-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    สมัครสมาชิก
                </button>
            </form>
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

        </RootLayout>
    );
}

export default RegisterFrom;

