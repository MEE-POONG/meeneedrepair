import Link from "next/link";



export default function Menuservice() {
  return (
    
    <div className="flex gap-1 md:flex justify-center py-10 md:gap-10">
      <div className="flex  ">
        <Link href='' className="flex items-center rounded-md hover:bg-blue-950   text-white hover:border-4 border-indigo-500/100 ">
          <img src="../images/icon/responsive.png" className="md:w-[80px] md:h-[80px] w-[40px] h-[40px] " alt="" />
          <span className="md:ml-5 ml-2  md:text-2xl text-xs font-semibold">Product</span>
        </Link>
        <p className="md:ml-5 w-1 h-24 md:bg-gradient-to-b from-[#CA0808]  to-[#0FC0E7]"></p>
      </div>

      <div className="flex">
        <Link href='' className="flex items-center rounded-md hover:bg-blue-950   text-white hover:border-4 border-indigo-500/100">
          <img src="../images/icon/customer-service.png" className=" md:w-[80px] md:h-[80px] w-[40px] h-[40px]" alt="" />
          <span className=" md:ml-5 ml-2 md:text-2xl text-xs font-semibold">IT Service</span>
        </Link>
        <p className="md:ml-5 w-1 h-24 md:bg-gradient-to-b from-[#CA0808]  to-[#0FC0E7]"></p>

      </div>

      <div className="flex" >
        <Link href='' className="flex items-center rounded-md hover:bg-blue-950   text-white hover:border-4 border-indigo-500/100">
          <img src="../images/icon/support.png" className=" md:w-[80px] md:h-[80px] w-[40px] h-[40px]" alt="" />
          <span className="md:ml-5 ml-2 md:text-2xl text-xs font-semibold">IT Support</span>
        </Link>
      </div>
    </div>
  );
}
