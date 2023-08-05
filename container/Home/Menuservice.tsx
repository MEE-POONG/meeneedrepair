import Link from "next/link";



export default function Menuservice() {
<<<<<<< HEAD
  return (
    // <div className=" w-full h-[130px] flex justify-evenly items-center container ">
    //   <a href="" className=" text-white flex justify-items-center ">
    //     <img src="../images/icon/notebook.png" className="w-[80px] h-[80px]" alt="" />
    //     <p className="mt-[10%] text-2xl">Product</p>
    //   </a>
    //   <p className=" bg-cyan-500 h-[60px] w-[2px]"></p>
    //   <a href="" className=" text-white flex">
    //   <img src="../images/icon/wifi-router.png" className="w-[80px] h-[80px]" alt="" />
    //    <p className="mt-[10%] text-2xl">IT Service</p>
    //   </a>
    //   <p className=" bg-cyan-500 h-[60px] w-[2px]"></p>
    //   <a href="" className=" text-white flex ">
    //   <img src="../images/icon/video.png" className="w-[80px] h-[80px]" alt="" />
    //   <p className="mt-[10%] text-2xl">IT Support</p>
    //   </a>
    // </div>
    <div className="md:flex justify-center py-10 gap-5">
      <div className="flex ">
        <Link href='' className="flex items-center">
          <img src="../images/icon/responsive.png" className="w-[80px] h-[80px]" alt="" />
          <span className="ml-5 text-white text-2xl font-semibold">Product</span>
        </Link>
        <p className="ml-5 w-1 h-24 bg-gradient-to-b from-[#CA0808]  to-[#0FC0E7]"></p>
=======
    return (
      <div className=" container sm:w-full lg:h-[130px] flex justify-evenly items-center  ">
        <a href="" className=" text-white flex justify-items-center ">
          <img src="../images/icon/notebook.png" className="sm:w-[80px] h-[80px]" alt="" />
          <p className="mt-[10%] text-2xl">Product</p>
        </a>
        <p className=" bg-cyan-500 h-[60px] w-[2px]"></p>
        <a href="" className=" text-white flex">
        <img src="../images/icon/wifi-router.png" className="w-[80px] h-[80px]" alt="" />
         <p className="mt-[10%] sm:text-xs text-2xl ">IT Service</p>
        </a>
        <p className=" bg-cyan-500 h-[60px] w-[2px]"></p>
        <a href="" className=" text-white flex ">
        <img src="../images/icon/video.png" className="w-[80px] h-[80px]" alt="" />
        <p className="mt-[10%] text-2xl">IT Support</p>
        </a>
>>>>>>> 9bcc2bc1ec8354419906cb937ddc230675cc1e43
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
