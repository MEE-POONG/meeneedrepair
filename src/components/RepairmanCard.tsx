import Link from "next/link";
import { FaFacebookSquare, FaLine } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const RepairmanCard: React.FC = () => {
    return (
        <div className=''>

            <div className="bg-white shadow-md rounded-md overflow-hidden w-1/6">
                <img src="/images/team/p2-1.jpg" alt="" />
                <div className="p-5 text-center">
                    <p className="text-xl font-semibold">ดรุณนัย กาพย์ไกรแก้ว</p>
                    <span>ตำแหน่ง</span>
                    <p>ซ่อมบำรุง ฮาร์ดแวร์</p>

                    <div className="flex justify-center gap-3 mt-5">
                        <Link href=''>
                            <FaFacebookSquare />
                        </Link>
                        <Link href=''>
                            <FaLine />
                        </Link>
                        <Link href=''>
                            <BsFillTelephoneFill />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="bg-white shadow-md rounded-md overflow-hidden w-1/6">
                <img src="/images/team/p2-1.jpg" alt="" />
                <div className="p-5 text-center">
                    <p className="text-xl font-semibold">ดรุณนัย กาพย์ไกรแก้ว</p>
                    <span>ตำแหน่ง</span>
                    <p>ซ่อมบำรุง ฮาร์ดแวร์</p>

                    <div className="flex justify-center gap-3 mt-5">
                        <Link href=''>
                            <FaFacebookSquare />
                        </Link>
                        <Link href=''>
                            <FaLine />
                        </Link>
                        <Link href=''>
                            <BsFillTelephoneFill />
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default RepairmanCard;