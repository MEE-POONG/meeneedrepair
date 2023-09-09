import Link from "next/link";



export default function Menuservice() {
  return (

    <div className="flex gap-1 justify-center items-center py-10 md:gap-3 font-fontTH02">
      <div className="flex">
        <Link href='./products' className="md:flex items-center rounded-md text-white hover:bg-secondary1 p-2 text-center">
          <img src="../images/icon/responsive.png" className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] mx-auto" alt="" />
          <span className="md:ml-5 ml-2 text-xs md:text-2xl font-semibold">Product</span>
        </Link>
        <div className="md:ml-5 w-0.5 h-24 md:bg-gradient-to-b from-[#CA0808] to-[#0FC0E7] hidden md:block"></div>
      </div>

      <div className="flex">
        <Link href='./services' className="md:flex items-center rounded-md text-white hover:bg-secondary1 p-2 text-center">
          <img src="../images/icon/customer-service.png" className=" md:w-[55px] md:h-[55px] w-[40px] h-[40px] mx-auto" alt="" />
          <span className=" md:ml-5 ml-2 text-xs md:text-2xl font-semibold">IT Service</span>
        </Link>
        <div className="md:ml-5 w-0.5 h-24 md:bg-gradient-to-b from-[#CA0808] to-[#0FC0E7] hidden md:block"></div>

      </div>

      <div className="flex" >
        <Link href='' className="md:flex items-center rounded-md text-white hover:bg-secondary1 px-2 py-4 text-center">
          <img src="../images/icon/support.png" className=" md:w-[60px] md:h-[60px] w-[40px] h-[40px] mx-auto" alt="" />
          <span className="md:ml-5 ml-2 text-xs md:text-2xl font-semibold">IT Support</span>
          <div className="md:ml-5 w-0.5 h-24 md:bg-gradient-to-b from-[#CA0808] to-[#0FC0E7] hidden"></div>
        </Link>

      </div>
    </div>
  );
}
