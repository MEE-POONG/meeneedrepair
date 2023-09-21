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
                <div className="flex items-center p-5 text-lg">
                    <p className="text-white px-3 py-0.5 bg-secondary1 rounded-full mr-2">
                        1
                    </p>
                    <span>ข้อมูลสำหรับจัดส่ง</span>
                </div>
                <div className="ml-14 ">
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
                <div className="ml-14">
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
                </div>
            </div>

        {/* Second Select */}
            <div></div>
        </>
    )
}
export default StepOneSelectAdress;