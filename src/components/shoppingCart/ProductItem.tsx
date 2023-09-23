import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ProductItemProps {
  id: number;
  name: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, name }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product">
      {/* <h2>{name}</h2>
      <p>จำนวน: {quantity}</p>
      <button onClick={increaseQuantity}>เพิ่ม</button>
      <button onClick={decreaseQuantity}>ลด</button> */}

      <div className="lg:col-span-9 bg-secondary1 rounded-md">
          <div className="p-2 md:p-9">
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
                <span onClick={decreaseQuantity}  className="cursor-pointer text-secondary2"> - </span>
      <p className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2">{quantity}</p>
                {/* <input className="h-5 w-8 rounded-full border bg-white text-center outline-none mx-2 " type="number" defaultValue="1" min="1" /> */}
                <span onClick={increaseQuantity}  className="cursor-pointer  text-secondary2"> + </span>
              </div>

              <button type="reset" className="text-secondary2 hover:text-red-500">
                <RiDeleteBin6Line size={15} />
              </button>
            </div>
            <hr/>
          </div>

          
        </div>










    </div>

    




  );
};

export default ProductItem;