import React, { useEffect, useState } from 'react';
import RootLayout from '../../components/layout';
import ComponentsNavbar from '../../components/Thenavbar';
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
                setLoginSuccess(true);
            
                router.push(`/home/${match.id}`);
            } else {
                setLoginSuccess(false);
                setLoginMessage("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        fetch("/api/user")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <div className='login-page '>
            <RootLayout>
                <div className="flex  justify-center pages-bg-login h-[700px] text-login"  >
                    <div className="bg-gradient-to-br w-full xl:w-[35%] h-[500px]">
                  
                        <div className="  p-10 flex flex-col shadow-xl rounded-xl h-[700px]">
                            <h2 className="text-4xl text-center  font-bold text-white  mb-5 ">
                                เข้าสู่ระบบ
                            </h2>
                            <form action="" className="w-full">
                                <div id="input" className="flex flex-col w-full my-5 ">
                                    <label htmlFor="email" className="text-white mb-2"
                                    >อีเมล</label>
                                    <input
                                        type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        placeholder="อีเมล"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg text-black "
                                    />
                                </div>
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="password" className="text-white mb-2"
                                    >รหัสผ่าน</label>
                                    <input
                                        type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        placeholder="รหัสผ่าน"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg text-black"
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
                                        <span >เข้าสู่ระบบด้วย Google</span>
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


            </RootLayout>
        </div>


    );
};

export default LoginComponent;
