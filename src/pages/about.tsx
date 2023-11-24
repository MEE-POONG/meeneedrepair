import Image from "next/image";
import RootLayout from "../components/layout";
import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import ContactPage from "./contact";

export default function AboutPage() {
    return (

        <RootLayout>
            {/* โมเดิน เข้าใจง่าย ไม่ลกตา */}

            <div className="container mx-auto">
                <div className="text-center">

                    <div className="text-white text-2xl md:text-5xl font-bold">
                        รู้จัก&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0] to-[#13D1D1]">
                            &quot;Mee Need Repair&quot;
                        </span>
                    </div>
                </div>


                <div className="bg-[#1E293B] p-8 md:p-11 rounded-lg ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4 my-auto mx-auto">
                            {/* รูปโลโก้ */}
                            <Image
                                src="/images/logo/logoMR3.png" alt=""
                                width={300}
                                height={300}
                                className="w-[300px] " />

                        </div>
                        <div className="col-span-8">
                            {/* คำอธิบาย*/}
                            <div className="text-white text-2xl font-bold">
                                ทำความรู้จักกับ&nbsp;
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0] to-[#13D1D1]">
                                    &quot;Mee Need Repair&quot;
                                </span>
                            </div>

                            <p className="mt-10 indent-8 text-white text-md">
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                                ในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็วในปัจจุบัน ซึ่งธุรกิจต่าง ๆ ต้องพึ่งพาคอมพิวเตอร์ เครือข่าย และซอฟต์แวร์เป็นอย่างมาก บทบาทของการสนับสนุนด้านไอที จึงมีความสำคัญมากกว่าที่เคยเป็นมา
                            </p>
                        </div>
                    </div>
                </div>



                <h2 className="flex flex-row flex-nowrap items-center my-8">
                    <span className="flex-grow block border-t border-white" aria-hidden="true" role="presentation"></span>
                    <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase text-white">
                        Heading Text
                    </span>
                    <span className="flex-grow block border-t border-white" aria-hidden="true" role="presentation"></span>
                </h2>

                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h2 className="text-xl font-bold text-indigo-600">
                            Team
                        </h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Mee Need Repair
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-slate-700 rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36  shadow-xl" src="/images/team/p2-1.jpg" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">ชลชาติ อินทรสูตร</p>
                                <p className="text-base text-white font-normal">ตําแหน่ง ซ่อมบํารุง ซอฟต์แวร์-ฮาร์ดแวร์</p>
                                <Link href='https://www.facebook.com/profile.php?id=100011457973926&mibextid=D4KYlr'> <p className="text-base text-gray-400 font-normal hover:text-blue-700">Facebook</p></Link>
                            </div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36 shadow-xl" src="/images/team/team1.jpg" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2 ">วีรยุทธ เวสโมราดี้</p>
                                <p className="text-base text-white font-normal ">ตําแหน่ง ซ่อมบํารุง ซอฟต์แวร์-ฮาร์ดแวร์</p>
                                <Link href='https://www.facebook.com/weerayutves?mibextid=D4KYlr'> <p className="text-base text-gray-400 font-normal hover:text-blue-700">Facebook</p></Link>

                            </div>
                        </div>


                    </div>
                </section>

                <ContactPage />


            </div>
        </RootLayout>
    )
}