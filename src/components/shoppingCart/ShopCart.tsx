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

      <h3 className="text-lg md:text-2xl text-black">รายการสินค้า <span className="">(2)</span></h3>
      <div className="grid grid-flow-row lg:grid-cols-12 gap-2 lg:gap-8 mt-3 lg:mt-8 ">
        <div className="lg:col-span-9 bg-secondary1 rounded-md">
     
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