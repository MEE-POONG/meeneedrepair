import Link from "next/link";
import RootLayout from "../components/layout";
import StepOneSelectAdress from "../container/PaymentStep/SelectAddress";
import SelectShippings from "../container/PaymentStep/SelectShippingCard";

export default function Payment() {
    return (
        <RootLayout>
            <div className="container mx-auto my-24 text-center md:text-left font-fontTH01">
                <div className="grid grid-flow-row md:grid-cols-7 gap-10 mt-10 mx-2">
                    <div className="md:col-span-5 p-5 bg-secondary2 rounded-md">
                        <StepOneSelectAdress />


                        {/*  ปุ่ม */}
                        {/* <div className="text-center mt-10">
                            <button type="submit"
                                className="bg-secondary1 text-white p-2 text-center mt-3 rounded-xl hover:bg-secondary1/90                                   text-xs md:text-sm"
                            >
                                <a href="./payment">ดำเนินการสั้งซื้อ</a>
                            </button>
                        </div> */}

                        <SelectShippings/>
                    </div>


                    <div className="md:col-span-2 bg-secondary1 rounded-md p-5 text-center">
                        <div className="text-left text-xs md:text-sm text-secondary2">
                            <p className="flex justify-between mb-2">ยอดรวม <strong>฿ 900.00</strong></p>
                            <p className="flex justify-between">ส่วนลด <strong className="text-natural03">฿ - 0.00</strong></p>
                            <p className="flex justify-between mt-2">ค่าจัดส่ง <strong>฿ 0.00</strong></p>

                            <div className="w-full h-0.5 bg-secondary1 mt-5 mb-2"></div>
                            <p className="flex justify-between"> <strong>ยอดรวมสุทธิ </strong><strong>฿ 900.00</strong></p>

                        </div>


                    </div>
                </div>
            </div>
        </RootLayout>
    )
}