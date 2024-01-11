import Link from "next/link";
import { FaFacebookSquare, FaLine } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Repairman } from "@prisma/client";

const RepairmanCard: React.FC = () => {
    const [{ data: repairmanData }, getAbout] = useAxios({
        url: "/api/repairman",
        method: "GET",
    });

    const [fillrepairmanData, setFillRepairmanData] = useState<Repairman[]>([]);

    useEffect(() => {
        setFillRepairmanData(repairmanData?.repairman ?? []);
    }, [repairmanData]);


    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2'>
            {fillrepairmanData.map((repairman) => (
                <div key={repairman.id} className="bg-white shadow-md rounded-md overflow-hidden">
                    <img src="/images/team/p2-1.jpg" alt="" className="w-full h-32 md:h-48 object-cover" />
                    <div className="p-1.5 lg:p-2.5 text-center">
                        <p className="text-sm lg:text-lg font-semibold">{repairman.fname} {repairman.lname}</p>
                        <span className="text-xs text-gray-800">- ตำแหน่ง -</span>
                        <p className="text-sm lg:text-base">ซ่อมบำรุง ฮาร์ดแวร์</p>

                        <div className="flex justify-center gap-3 mt-3">
                            <Link href='' className="text-blue-700 hover:text-blue-400 text-xl">
                                <FaFacebookSquare />
                            </Link>
                            <Link href='' className="text-green-600 hover:text-green-400 text-xl">
                                <FaLine />
                            </Link>
                        </div>
                        <p className="text-amber-400 hover:text-amber-600 text-xs lg:text-sm flex items-center justify-center gap-2 mt-2">
                            <BsFillTelephoneFill /> {repairman.tel}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RepairmanCard;