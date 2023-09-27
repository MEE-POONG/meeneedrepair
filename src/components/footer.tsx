import Link from "next/link";
import { ImHome } from 'react-icons/im';
import { BiLogoGmail } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';



const Footer = () => {
    return (
        <div className="font-fontTH01 bg-[#F4F5F5]">
            <footer className="container mx-auto py-5">
                <div className="md:grid grid-flow-col gap-3 mx-5 md:mx-16">
                    <div className="">
                        <img
                            className="w-28 lg:w-36 hidden md:block"
                            src="../images/logo/logoMR7.png"
                            alt=""
                        />
                    </div>

                    <div className="hidden md:block">
                        <p className="text-base lg:text-3xl font-extrabold text-transparent 
                                      bg-gradient-to-r from-blue-600 to-sky-400
                                      bg-clip-text mb-1 "
                        >Mee Need Repair
                        </p>
                        <div className=" lg:flex items-start gap-2 hidden">
                            <ImHome />
                            <span className="text-[10px] md:text-base ">
                                46/3 ถ.ราชนิกุล ต.ในเมือง อ.เมือง, Nakhon Ratchasima,
                                Thailand, Nakhon Ratchasima
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiLogoGmail />
                            <span className="text-[10px] md:text-base"> me.prompt.tec@gmail.com </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiPhoneCall size={13} />
                            <p className="text-[10px] md:text-base"> 099-164-1044,
                                <span className="text-[10px] md:text-sm"> 065-821-4605</span>
                            </p>

                        </div>
                    </div>

                    <div className="">
                        <p className="text-sm md:text-base font-semibold mb-1">บริกรของเรา</p>
                        <p className="text-[10px] md:text-sm">รับซ่อมบำรุงอุปกรณ์ IT</p>
                        <p className="text-[10px] md:text-sm">ให้คำปรึกษาปัญหาเกี่ยวกับอุปกรณ์ IT</p>
                    </div>

                    <div>
                        <p className=" text-sm md:text-base font-semibold mb-1">สนับสนุน</p>
                        <Link href="./howto_register" className="text-[10px] md:text-sm"><p >วิธีการสมัครสมาชิก</p></Link>
                        <Link href="" className=" text-[10px] md:text-sm"><p >วิธีการสั่งซื้อ และชำระเงิน</p></Link>
                        <Link href="" className=" text-[10px] md:text-sm"><p >การติดตามสถานะ</p></Link>
                    </div>



                </div>
            </footer>

            <div className=" bg-[#0F172A] text-white text-center py-2">
                <div className="text-[10px] md:text-sm">©2023
                    <Link className="text-natural01 hover:text-natural04"
                        href=''> Me Prompt technology Co.
                    </Link>
                    &nbsp;,Ltd. All Rights Reserved.
                </div>
            </div>

        </div>
    )
}
export default Footer;