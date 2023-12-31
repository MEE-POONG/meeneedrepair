import React, { useEffect, useState } from 'react';


import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

import { useRouter } from 'next/router';




const LoginComponent: React.FC = () => {
    const [data, setData] = useState<{ user: { email: string, password: string } } | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/user");
            const data = await response.json();
            const match = data?.user?.find((user: { email: string, password: string, id: string }) => {
                return user.email === email && user.password === password;
            });

            if (match) {
                // Set login success and save to localStorage
                setLoginSuccess(true);
                localStorage.setItem("isLoggedIn", "true"); // Set the logged-in state
                router.push(`home/${match.id}`); // Navigate to /home/:id
            } else {
                // Credentials do not match, show an error message
                setLoginSuccess(false);
                setLoginMessage("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        // Fetch data from the API
        fetch("/api/user")
            .then((response) => response.json())
            .then((data) => {
                // Set the fetched data to the state
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);





    return (
        <div className='login-page'>
          
                <div className=" antialiased bg-gradient-to-br ">
                    <div className="container ">
                        <div className=" text-center md:text-left md:flex-row h-screen justify-evenly md:items-center w-[700px]">
                    

                            <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                                <div className=" bg-gray-800 bg-opacity-50  p-10 flex flex-col w-full h-[700px] shadow-xl rounded-xl">
                                    <h2 className="text-2xl text-center  font-bold text-white  mb-5">
                                        เข้าสู่ระบบ
                                    </h2>
                                    <form action="" className="w-full">
                                        <div id="input" className="flex flex-col w-full my-5">
                                            <label htmlFor="email" className="text-white mb-2"
                                            >อีเมล</label>
                                            <input
                                                type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                                id="email"
                                                placeholder="อีเมล"
                                                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg"
                                            />
                                        </div>
                                        <div id="input" className="flex flex-col w-full my-5">
                                            <label htmlFor="password" className="text-white mb-2"
                                            >รหัสผ่าน</label>
                                            <input
                                                type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                                id="password"
                                                placeholder="รหัสผ่าน"
                                                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg"
                                            />
                                        </div>
                                        <div id="button" className="flex flex-col w-full my-5">

                                            <div className="flex">
                                                <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#0F172A]  text-1xl font-bold text-white" type="submit" onClick={handleLogin}>
                                                    เข้าสู่ระบบ
                                                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                                </button>
                                            </div>

                                            {loginMessage && <p className={`text-${loginSuccess ? "success" : "danger"}`}>{loginMessage} </p>}
                                            {/* {loginMessage && <p className={`text-${loginSuccess ? "success" : "danger"}`}>{loginMessage} </p>} */}

                                        </div>



                                        <div className="flex items-center text-center text-white " >
                                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                                            <label className="block font-medium text-1xl mx-5">หรือ</label>
                                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                                        </div>




                                        <div className="flex my-5">
                                            <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#1879EB]  text-1xl font-bold text-white">
                                                <span className="absolute left-4 text-[25px]">
                                                    <FaFacebook />
                                                </span>
                                                <span >เข้าสู่ระบบด้วย Facebook</span>
                                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                            </button>
                                        </div>
                                        <div className="flex my-3">
                                            <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#0F172A]  text-1xl font-bold text-white">
                                                <span className="absolute left-4 text-[25px]">
                                                    <FaGoogle />
                                                </span>
                                                <span >เข้าสู่ระบบด้วย Facebook</span>
                                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                            </button>
                                        </div>

                                        <p className=" text-white text-center my-6 ">
                                            <Link href="./login/forgetpassword">
                                                ลืมรหัสผ่าน?
                                            </Link></p>


                                        <div className=" text-white text-center my-6 ">
                                            <Link href="./../register">
                                                <p>ยังไม่มีบัญชีผู้ใช้?</p>
                                                <span className="text-[#18BCEB]">สมัครสมาชิกใหม่</span>
                                            </Link>
                                        </div>
                                    </form>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
           
        </div>

    );
};

export default LoginComponent;
