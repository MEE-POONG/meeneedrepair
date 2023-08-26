import Image from "next/image";
import RootLayout from "../layout";
import { RiDeleteBin6Line } from "react-icons/ri";
const ShoppingCart = () => {
  return (
    <div className="container mx-auto my-24 text-center md:text-left">
      <h3 className="text-4xl text-secondary2">รายการสินค้า <span className="">(2)</span></h3>
      <div className="grid grid-flow-row md:grid-cols-7 gap-10 mt-10 mx-2">
        <div className="md:col-span-5 bg-secondary1 rounded-md">
          <div className="p-2 md:p-9">
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-xl">
              <Image
                src="/images/joystick.png"
                width={75}
                height={75}
                alt="Picture of Product"
              />
              <div className="md:flex text-left">
              <p className="text-secondary2 ">GAMESIR T4W WIRED CONTROLLER</p>
              <p className="text-natural03 md:ml-48">฿ 490.00 </p>
              </div>
              <div className="flex items-center">
                <span className="cursor-pointer text-secondary2"> - </span>
                <input className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2 text-sm" type="number" value="1" min="1" />
                <span className="cursor-pointer  text-secondary2"> + </span>
              </div>

              <button type="reset" className="text-secondary2 hover:text-red-500">
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
            <hr />
          </div>
        </div>

        <div className="md:col-span-2 bg-secondary2 rounded-md p-5 text-center">
          <div className="text-left text-sm md:text-lg">
            <p className="flex justify-between mb-2">ยอดรวม <strong>฿ 900.00</strong></p>
            <p className="flex justify-between">ส่วนลด <strong className="text-natural03">฿ - 0.00</strong></p>
            <div className="w-full h-0.5 bg-secondary1 mt-5 mb-2"></div>
            <p className="flex justify-between"> <strong>ยอดรวมสุทธิ </strong><strong>฿900.00</strong></p>

          </div>
          <button type="submit"
            className="bg-natural01 py-2 md:py-3 w-full text-center mt-3 rounded-xl hover:bg-natural01/80 text-sm md:text-lg"
          >
            ดำเนินการสั้งซื้อ
          </button>
        </div>
      </div>
    </div>
  )
}
export default ShoppingCart;