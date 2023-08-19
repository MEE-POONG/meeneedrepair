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
                    <p className="text-4xl font-extrabold text-transparent 
                                      bg-gradient-to-r from-blue-600 to-sky-400
                                      bg-clip-text
                            ">
                        Mee Need Repair
                    </p>
                    <p>หน้าแรก</p>
                    <p>เกี่ยวกับเรา</p>
                    <p>ข่าวสาร</p>
                    <p>ติดต่อเรา</p>
                </div>

                <div>
                    <p className="text-2xl my-3">บริกรของเรา</p>
                    <p>รับซ่อมบำรุงอุปกรณ์ IT</p>
                    <p>ให้คำปรึกษาปัญหาเกี่ยวกับอุปกรณ์ IT</p>
                </div>

                <div>
                    <p className="text-2xl my-3">สนับสนุน</p>
                    <p>วิธีการสมัครสมาชิก</p>
                    <p>วิธีการสั่งซื้อ และชำระเงิน</p>
                    <p>การติดตามสถานะ</p>
                </div>

                <div>
                    <p  className="text-2xl my-3">Mee Need Repair</p>
                    <p>หน้าแรก</p>
                    <p>เกี่ยวกับเรา</p>
                    <p>ข่าวสาร</p>
                    <p>ติดต่อเรา</p>
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