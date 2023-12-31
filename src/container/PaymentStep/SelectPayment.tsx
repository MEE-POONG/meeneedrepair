import Link from "next/link";

const StepTwoSelectPayment = () => {
    return (
        <div className="container mx-auto my-24 text-center md:text-left">
            <div className="grid grid-flow-row md:grid-cols-7 gap-10 mt-10 mx-2">
                <div className="md:col-span-5 bg-secondary1 rounded-md">

                </div>

                <div className="md:col-span-2 bg-secondary2 rounded-md p-5 text-center">
                    <div className="text-left text-sm md:text-lg">
                        <p className="flex justify-between mb-2">ยอดรวม <strong>฿ 900.00</strong></p>
                        <p className="flex justify-between">ส่วนลด <strong className="text-natural03">฿ - 0.00</strong></p>
                        <p className="flex justify-between mt-2">ค่าจัดส่ง <strong>฿ 0.00</strong></p>

                        <div className="w-full h-0.5 bg-secondary1 mt-5 mb-2"></div>
                        <p className="flex justify-between"> <strong>ยอดรวมสุทธิ </strong><strong>฿ 900.00</strong></p>

                    </div>

                </div>
            </div> 
        </div>
    )
}
export default StepTwoSelectPayment;