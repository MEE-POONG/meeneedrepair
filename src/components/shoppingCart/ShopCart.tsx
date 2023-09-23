import Image from "next/image";
import RootLayout from "../layout";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import Product1 from "../../pages/producttest";



const ShoppingCart = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="container mx-auto my-24 font-fontTH02 px-3 lg:px-24">
      <title>ตะกร้าสินค้าของคุณ</title>

      <h3 className="text-lg md:text-2xl text-secondary2">รายการสินค้า <span className="">(2)</span></h3>
      <div className="grid grid-flow-row lg:grid-cols-12 gap-2 lg:gap-8 mt-3 lg:mt-8 ">
        <div className="lg:col-span-9 bg-secondary1 rounded-md">
        <Product1/>
          {/* <div className="p-2 md:p-9">
            <div className="flex justify-between items-center text-xs md:text-sm">
              <Image
                src="/images/joystick.png"
                width={100}
                height={100}
                alt="Picture of Product"
                className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]"
              />
              <div className="md:flex text-left">
                <p className="text-secondary2">GAMESIR T4W WIRED CONTROLLER</p>
                <p className="text-natural03 md:ml-48">฿ 490.00 </p>
              </div>
              <div className="flex items-center">
                <span onClick={decreaseQuantity} className="cursor-pointer text-secondary2"> - </span>
      <p className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2">{quantity}</p>
                <input className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2 " type="number" defaultValue="1" min="1" />
                <span onClick={increaseQuantity} className="cursor-pointer  text-secondary2"> + </span>
              </div>

              <button type="reset" className="text-secondary2 hover:text-red-500">
                <RiDeleteBin6Line size={15} />
              </button>
            </div>
            <hr />
          </div>
          <div className="p-2 md:p-9">
            <div className="flex justify-between items-center text-xs md:text-sm">
              <Image
                src="/images/joystick.png"
                width={90}
                height={90}
                alt="Picture of Product"
                className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]"
              />
              <div className="md:flex text-left">
                <p className="text-secondary2">GAMESIR T4W WIRED CONTROLLER</p>
                <p className="text-natural03 md:ml-48">฿ 490.00 </p>
              </div>
              <div className="flex items-center">
              <span onClick={decreaseQuantity} className="cursor-pointer text-secondary2"> - </span>
      <p className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2">{quantity}</p>
                <input className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2 " type="number" defaultValue="1" min="1" />
                <span onClick={increaseQuantity} className="cursor-pointer  text-secondary2"> + </span>
              </div>

              <button type="reset" className="text-secondary2 hover:text-red-500">
                <RiDeleteBin6Line size={15} />
              </button>
            </div>
            <hr />
          </div> */}
        </div>
        

        <div className="lg:col-span-3 md:h-48 bg-secondary2 rounded-md p-2 lg:p-5 text-center">
          <div className="text-left text-xs md:text-sm">
            <p className="flex justify-between mb-2">ยอดรวม <strong>฿ 900.00</strong></p>
            <p className="flex justify-between">ส่วนลด <strong className="text-natural03">฿ - 0.00</strong></p>
            <div className="w-full h-0.5 bg-secondary1 mt-5 mb-2"></div>
            <p className="flex justify-between"> <strong>ยอดรวมสุทธิ </strong><strong>฿900.00</strong></p>

          </div>
          <Link href="./payment" >
            <button type="submit"
              className="bg-natural01 py-2 md:py-3 w-full text-center mt-3 rounded-xl hover:bg-natural01/80 text-xs md:text-sm"
            >
              ดำเนินการสั้งซื้อ
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ShoppingCart;