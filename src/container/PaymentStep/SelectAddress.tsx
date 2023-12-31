import Link from "next/link";
import { useState } from "react"

type PizzaSize = "ส่งตามที่อยู่" | "รับเองสินค้าเอง" | "Get it yourself"
const StepOneSelectAdress = () => {
    const [topping, setTopping] = useState<PizzaSize>("ส่งตามที่อยู่")

    const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopping(e.target.value as PizzaSize)
    }
    return (
        <>
            {/* First Select */}
            <div className="">
                <div className="flex items-center text-sm md:text-lg mb-3">
                    <p className="text-white px-3 py-0.5 bg-secondary1 rounded-full mr-2">
                        1
                    </p>
                    <span>ข้อมูลสำหรับจัดส่ง</span>
                </div>

                <fieldset className="md:ml-10 ">
                    <div>
                        <input id="draft" className="peer/draft mr-2 cursor-pointer" type="radio" name="status" />
                        <label htmlFor="draft" className="peer-checked/draft:text-sky-500">ส่งตามที่อยู่</label>
                    </div>
                    <div>
                        <input id="published" className="peer/published mr-2 cursor-pointer" type="radio" name="status" />
                        <label htmlFor="published" className="peer-checked/published:text-sky-500">รับสินค้าเองที่ร้าน</label>
                    </div>
                </fieldset>


                {/* <div className="md:ml-10 text-sm md:text-base text-left">
                    <input
                        className="cursor-pointer mr-2"
                        type="radio"
                        name="topping"
                        value="ส่งตามที่อยู่"
                        id="ส่งตามที่อยู่"
                        checked={topping === "ส่งตามที่อยู่"}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="ส่งตามที่อยู่">ส่งตามที่อยู่</label>
                </div>
                <div className="md:ml-10 text-sm md:text-base text-left">
                    <input
                        className="cursor-pointer mr-2"
                        type="radio"
                        name="topping"
                        value="รับเองสินค้าเอง"
                        id="รับเองสินค้าเอง"
                        checked={topping === "รับเองสินค้าเอง"}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="ส่งตามที่อยู่">รับสินค้าเอง</label>
                </div> */}
            </div>

            <div className="w-full h-[1px] bg-secondary1 my-5"></div>

            {/* Second Select */}
            <div className="md:mx-10">
                <div className="flex justify-between ">
                    <p className="text-sm md:text-lg">ที่อยู่จัดส่ง</p>
                    <span className="text-sm md:text-base">แก้ไข</span>
                </div>
                <div>
                    <input type="checkbox" name="" id="" className="mr-2 cursor-pointer" />
                    <label htmlFor="">ข้อมูลใบเสร็จใช้ที่อยู่เดียวกับที่อยู่จัดส่ง</label>
                </div>
            </div>

        </>
    )
}
export default StepOneSelectAdress;