import Link from "next/link";

export default function CardNews() {
    return (
        <>
            <div className="container mx-auto my-10">
                <h3 className="text-white text-3xl mb-6 text-center md:text-left">อัพเดทข่าวสาร</h3>
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6">

                    {/* Card1 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                        <img src="https://images.workpointtoday.com/workpointnews/2023/07/12092833/1689128909_97176_web-1.png" alt=""
                            className="w-full" />
                        <div className="px-4 py-4 bg-[#1E293B]">
                            <div className="mb-2">
                                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1]  bg-transparent text-clip"
                                >รู้จัก ‘lazy management’ ในบริษัทเทคโนโลยีใหญ่ จ้างคนมาเสริมอำนาจ แต่ไม่มอบหมายงาน
                                </h2>
                                <p className="text-white mt-3 truncate font-thin text-sm">
                                    ปัญหาคนทำงานมีให้พบเห็นทุกรูปแบบ ที่เจอบ่อยคืองานหนักเกินไป ต้องทำงานโดยที่เอาสุขภาพจิตไปแลก กลายเป็นเทรนด์ great resignation การลาออกครั้งใหญ่ และ quiet quitting คือการทำงานไปวันๆ ไม่ทุ่มเทให้องค์กรจนเปลืองพลังงานชีวิต
                                </p>
                                <div className="text-center mt-7">
                                    <Link href=''
                                        className="bg-sky-400 py-2 px-8 rounded-full">
                                        อ่าน
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                        <img src="https://images.workpointtoday.com/workpointnews/2023/07/12173348/1689158024_57792_Shutterstock_and_OpenAI.jpg" alt=""
                            className="w-full" />
                        <div className="px-4 py-4 bg-[#1E293B]">
                            <div className="mb-2">
                                <h2 className="text-xl font-bold 
                                                text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1]  
                                                bg-transparent text-clip"
                                >
                                    OpenAI จับมือ Shutterstock ใช้ข้อมูลเทรน AI ได้ ท่ามกลางความกังวลเรื่องลิขสิทธิ์
                                </h2>
                                <p className="text-white mt-3 truncate font-thin text-sm">
                                    OpenAI ผู้สร้าง ChatGPT และ Dall-E ก็เลยแก้ปัญหาด้วยขยายความร่วมมืออย่างเป็นทางการกับ Shutterstock  แพลตฟอร์มคลังรูปภาพ เพื่อนำข้อมูลมาเทรน AI โดยเป็นความร่วมมือระยะยาวถึง 6 ปี
                                </p>
                                <div className="text-center mt-7">
                                    <Link href=''
                                        className="bg-sky-400 py-2 px-8 rounded-full">
                                        อ่าน
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card3 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                        <img src="https://images.workpointtoday.com/workpointnews/2023/07/14124350/1689313426_36292_web-.png" alt=""
                            className="w-full" />
                        <div className="px-4 py-4 bg-[#1E293B]">
                            <div className="mb-2">
                                <h2 className="text-xl font-bold 
                                                text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1]  
                                                bg-transparent text-clip"
                                >
                                    Bard แชทบ็อทของ Google อัพเดท เพิ่มการคุยภาษาไทย และขยายไปยังประเทศใหม่ๆ
                                </h2>
                                <p className="text-white mt-3 truncate font-thin text-sm">
                                    Bard อัพเดทครั้งใหญ่ รองรับการใช้งานนอีกกว่า 40 ภาษา รวมถึงภาษาไทย อาหรับ จีน เยอรมัน ฮินดี และสเปน และขยายการให้บริการ Bard ไปยังประเทศใหม่ๆ เช่น บราซิลและในยุโรป
                                </p>
                                <div className="text-center mt-7">
                                    <Link href=''
                                        className="bg-sky-400 py-2 px-8 rounded-full">
                                        อ่าน
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card4 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                        <img src="https://images.workpointtoday.com/workpointnews/2023/07/31104523/1690775113_39733_1.png" alt=""
                            className="w-full" />
                        <div className="px-4 py-4 bg-[#1E293B]">
                            <div className="mb-2">
                                <h2 className="text-xl font-bold 
                                                text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1]  
                                                bg-transparent text-clip"
                                >
                                    พบกับ Lisa ผู้ประกาศข่าว AI ช่องข่าวอินเดีย
                                </h2>
                                <p className="text-white mt-3 truncate font-thin text-sm">
                                    ไอเดียเรื่องการใช้ผู้ประกาศข่าว AI ไม่ใช่เรื่องใหม่แล้ว แต่ทุกครั้งที่มีบริษัทหรือสำนักข่าวใดก็ตาม สร้างผู้ประกาศข่าว AI ออกมา ก็จะตามมาด้วยคำถามอย่างหลีกเลี่ยงไม่ได้ว่าถึงเวลาแล้วรึเปล่า ที่ผู้ประกาศข่าวจะถูกแทนที่ด้วย AI เต็มตัว
                                </p>
                                <div className="text-center mt-7">
                                    <Link href=''
                                        className="bg-sky-400 py-2 px-8 rounded-full">
                                        อ่าน
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                        <img src="https://images.workpointtoday.com/workpointnews/2023/08/07110220/1691380935_60132_web-.png" alt=""
                            className="w-full" />
                        <div className="px-4 py-4 bg-[#1E293B]">
                            <div className="mb-2">
                                <h2 className="text-xl font-bold 
                                                text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1]  
                                                bg-transparent text-clip"
                                >
                                    กล้องมิเรอร์เลส กลับมาขายดี ท่องเที่ยวฟื้น กล้องดีขึ้น เบาลง
                                </h2>
                                <p className="text-white mt-3 truncate font-thin text-sm">
                                    ตลาดกล้องมิเรอร์เลส ซบเซาจากสองปัจจัยใหญ่ๆ คือโควิด-19 คนไม่ได้ออกไปเที่ยวร่วมสองปี กับพัฒนาการของกล้องสมาร์ทโฟน
                                </p>
                                <div className="text-center mt-7">
                                    <Link href=''
                                        className="bg-sky-400 py-2 px-8 rounded-full">
                                        อ่าน
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}