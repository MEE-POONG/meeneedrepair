


export default function Menuservice() {
    return (
      <div className=" w-full h-[130px] flex justify-evenly items-center container ">
        <a href="" className=" text-white flex justify-items-center ">
        {/* <a href="" className=" text-white flex justify-items-center "> */}
          <img src="../images/icon/notebook.png" className="w-[80px] h-[80px]" alt="" />
          <p className="mt-[10%] text-2xl">Product</p>
        </a>
        <p className=" bg-cyan-500 h-[60px] w-[2px]"></p>
        <a href="" className=" text-white flex">
        <img src="../images/icon/wifi-router.png" className="w-[80px] h-[80px]" alt="" />
         <p className="mt-[10%] text-2xl">IT Service</p>
        </a>
        <p className=" bg-cyan-500 h-[60px] w-[2px]"></p>
        <a href="" className=" text-white flex ">
        <img src="../images/icon/video.png" className="w-[80px] h-[80px]" alt="" />
        <p className="mt-[10%] text-2xl">IT Support</p>
        </a>
      </div>
    );
  }
  