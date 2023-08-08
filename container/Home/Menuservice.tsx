import Link from "next/link";



export default function Menuservice() {
  return (
    
    <div className="md:flex justify-center py-10 gap-10">
      <div className="flex ">
        <Link href='' className="flex items-center">
          <img src="../images/icon/responsive.png" className="w-[80px] h-[80px]" alt="" />
          <span className="ml-5 text-white text-2xl font-semibold">Product</span>
        </Link>
        <p className="ml-5 w-1 h-24 bg-gradient-to-b from-[#CA0808]  to-[#0FC0E7]"></p>
      </div>

      <div className="flex">
        <Link href='' className="flex items-center">
          <img src="../images/icon/customer-service.png" className="w-[80px] h-[80px]" alt="" />
          <span className="ml-5 text-white text-2xl font-semibold">IT Service</span>
        </Link>
        <p className="ml-5 w-1 h-24 bg-gradient-to-b from-[#CA0808]  to-[#0FC0E7]"></p>

      </div>

      <div className="flex" >
        <Link href='' className="flex items-center">
          <img src="../images/icon/support.png" className="w-[80px] h-[80px]" alt="" />
          <span className="ml-5 text-white text-2xl font-semibold">IT Support</span>
        </Link>
      </div>
    </div>
  );
}
