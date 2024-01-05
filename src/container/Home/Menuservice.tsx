import Link from "next/link";
import { LuTimerReset } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaHeadset } from "react-icons/fa6";
export default function Menuservice() {
return (
<>
  <div className="flex mx-auto mt-12 font-fontTH02  w-[262px] h-[55px] gap-3">
    <span className="text-black text-5xl  font-bold capitalize">Menu </span>
    <span className="text-orange-500 text-5xl  font-bold capitalize">Service</span>
  </div>
  <div className="container mx-auto ">
    <div className="flex md:flex-2 lg:flex 3 justify-center  items-center py-10 md:gap-16 font-fontTH02">

    <div className=" w-[200px] h-[200px] bg-white rounded-[10px]  hover:bg-slate-900 hover:text-white ">
      <Link href='/products' className="rounded-lg mt-24  text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px]">
      <div  className=" text-[125px] mt-5  mx-9 " ><MdComputer /></div>
        <div className="my-5"/>
        <span className="mx-6 text-[16px] ">บริการติดตั้งโปรแกรม</span>
      </Link>
    </div>
    <div className=" w-[200px] h-[200px] bg-white rounded-[10px]  hover:bg-slate-900 hover:text-white ">
      <Link href='./services' className="rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
      <div  className=" text-[100px] mt-9  mx-12 " ><FaHeadset /></div>
        <div className="my-7"/>
        <span className="mx-9">บริการให้คำปรึกษา</span>
      </Link>
    </div>
    <div className=" w-[200px] h-[200px] bg-white rounded-[10px]  hover:bg-slate-900 hover:text-white ">
      <Link href='/contact' className="rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
      <div  className=" text-[100px] mt-9  mx-12" ><HiMiniWrenchScrewdriver  /></div>
        <div className="my-7"/>
        <span className="mx-11">บริการซ่อมบำรุง</span>
      </Link>
    </div>
    <div className=" w-[200px] h-[200px] bg-white rounded-[10px]  hover:bg-slate-900 hover:text-white ">
      <Link href='/contact' className="rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
      <div  className=" text-[125px] mt-5  mx-9 " ><LuTimerReset /></div>
        <div className="my-5"/>
        <span className="mx-12">บริการจองซ่อม</span>
      </Link>
    </div>
    </div>
  </div>

</>
  );
}
// export default function MenuService() {
//     return (
//         <div className="containar ">
//             <div className="flex justify-center gap-28 ">
//                 <div className="  rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
//                     <img src="images/home/ms1.png" alt="" />
//                     <p className=" mt-5 text-[18px]">บริการติดตั้งโปรแกรม</p>
//                 </div>
//                 <div className="  rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
//                     <img src="images/home/ms3.png" alt="" />
//                     <p className=" mt-5 text-[18px]">บริการให้คำปรึกษา</p>
//                 </div>
//                 <div className="  rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
//                     <img src="images/home/ms2.png" alt="" />
//                     <p className=" mt-5 text-[18px]">บริการซ่อมบำรุง</p>
//                 </div>
//                 <div className="  rounded-lg mt-20 text-center w-[100px] h-[135px] hover:w-[110px] hover:h-[145px] ">
//                     <img src="images/home/clockicon.png" alt="" />
//                     <p className=" mt-5 text-[18px]">บริการจองซ่อม</p>
//                 </div>
                
//             </div>
//         </div>
//     )
// }
