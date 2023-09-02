import Link from "next/link";

const Footer = () => {
    return (
        <div className="">
        <footer className="bg-[#F4F5F5] py-10 px-2 ">
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
                    <p className=" py-1">หน้าแรก</p>
                    <p className=" py-1">เกี่ยวกับเรา</p>
                    <p className=" py-1">ข่าวสาร</p>
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
                    <p  className="text-2xl my-3">Mee Need Repair</p>
                    <p className=" py-1">46/3 ถ.ราชนิกุล ต.ในเมือง อ.เมือง, Nakhon Ratchasima, Thailand, Nakhon Ratchasima</p>
                    <p className=" py-1">me.prompt.tec@gmail.com</p>
                    <p className=" py-1">0991641044</p>
                    <p className=" py-1">0658214605</p>
                </div>
            </div>
        </footer>

        <div className="bg-[#0F172A] text-white text-center py-5"> 
                <div >©2023 <Link href=''>Me Prompt technology Co.</Link>,Ltd. All Rights Reserved.</div>
            </div>
        
        </div>
    )
}
export default Footer;