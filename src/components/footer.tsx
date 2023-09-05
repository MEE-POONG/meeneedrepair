import Link from "next/link";
import { ImHome } from 'react-icons/im';
import { BiLogoGmail } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';



const Footer = () => {
    return (
        <div className="font-fontTH01">
            <footer className="bg-[#F4F5F5] py-3 px-2 ">
                <div className="md:grid grid-cols-3 lg:grid-cols-5 justify-center container mx-auto gap-4   ">
                    <img
                        className="w-44"
                        src="../images/LOGO.png"
                        alt=""
                    />

                    <div >
                        <p className="text-3xl font-extrabold text-transparent my-3
                                      bg-gradient-to-r from-blue-600 to-sky-400
                                      bg-clip-text
                            ">
                            Mee Need Repair
                        </p>
                        <Link href="./" className=" py-1"><p>หน้าแรก</p></Link>
                        <Link href="./about" className=" py-1">
                            <p>เกี่ยวกับเรา</p>
                        </Link>
                        <Link href="./news" className=" py-1">
                            <p>ข่าวสาร</p>
                        </Link>
                        <p className=" py-1">ติดต่อเรา</p>
                    </div>

                    <div>
                        <p className="text-2xl my-3">บริกรของเรา</p>
                        <p className=" py-1">รับซ่อมบำรุงอุปกรณ์ IT</p>
                        <p className=" py-1">ให้คำปรึกษาปัญหาเกี่ยวกับอุปกรณ์ IT</p>
                    </div>

                    <div>
                        <p className="text-2xl my-3">สนับสนุน</p>
                        <p className=" py-1">วิธีการสมัครสมาชิก</p>
                        <p className=" py-1">วิธีการสั่งซื้อ และชำระเงิน</p>
                        <p className=" py-1">การติดตามสถานะ</p>
                    </div>

                    <div>
                        <p className="text-2xl my-3">Mee Need Repair</p>
                        <div className="flex items-start gap-2">
                            <ImHome size={35} />
                            <span className="">  46/3 ถ.ราชนิกุล ต.ในเมือง อ.เมือง, Nakhon Ratchasima, Thailand, Nakhon Ratchasima</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiLogoGmail /> 
                            <span className=""> me.prompt.tec@gmail.com </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiPhoneCall />
                            <span className=""> 099-164-1044, 065-821-4605</span>
                        </div>
                       
                        


                    </div>

                </div>
            </footer>

            <div className="bg-[#0F172A] text-white text-center py-2">
                <div >©2023
                    <Link className="text-natural01 hover:text-natural01/75"
                        href=''> Me Prompt technology Co.
                    </Link>
                    &nbsp;,Ltd. All Rights Reserved.
                </div>
            </div>

        </div>
    )
}
export default Footer;