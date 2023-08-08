import { TbMessageChatbot } from "react-icons/tb";
const Cardsevice = () => {
    return (
        <div className="container mx-auto py-6">
            <h3 className="text-3xl font-bold text-white mb-5 text-center md:text-left">บริการของเรา</h3>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-6">
                <div className="text-white text-center bg-[#1E293B] p-6 md:p-16 rounded-xl">
                    <p>
                        <TbMessageChatbot size={90}
                            className="text-center stroke-red-700 mx-auto my-6" />
                    </p>
                    <h3 className="text-4xl font-bold">Service</h3>
                    <p className="text-md mt-8">
                        ให้คำแนะนำเกี่ยวกับการใช้อุปกรณ์ และให้คำปรึกษาเบื้องต้นเกี่ยวกับปัญหา
                        การใช้อุปกรณ์ต่าง ๆ ให้คำปรึกษาโดยผู้เชี่ยวชาญ
                    </p>
                </div>
                <div className="text-[#1E293B] text-center bg-[#F4F5F5] p-6 md:p-16 rounded-xl">
                    <p>
                        <TbMessageChatbot size={90}
                            className="text-center stroke-red-700 mx-auto my-6" />
                    </p>
                    <h3 className="text-4xl font-bold">Service</h3>
                    <p className="text-md mt-8">
                        ให้คำแนะนำเกี่ยวกับการใช้อุปกรณ์ และให้คำปรึกษาเบื้องต้นเกี่ยวกับปัญหา
                        การใช้อุปกรณ์ต่าง ๆ ให้คำปรึกษาโดยผู้เชี่ยวชาญ
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Cardsevice;