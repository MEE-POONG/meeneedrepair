import Image from "next/image";
import RootLayout from "../components/layout";

export default function AboutPage() {
    return (
        <RootLayout>
            <div className='mb-10 relative bg-fixed'>
                <img src="../images/imgslider/banner4.jpg" className='w-full md:h-[640px] ' alt="" />
                <div className="absolute text-white text-center md:top-2/4 md:left-32 p-12 rounded-lg ">
                    <h2 className="hidden md:block text-7xl font-semibold text-white">เกี่ยวกับเรา</h2>
                    {/* <h2 className="hidden md:block text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]  bg-transparent text-clip">เกี่ยวกับเรา</h2> */}
                    {/* <h2 className="md:hidden text-3xl inset-0 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]  bg-transparent text-clip">เกี่ยวกับเรา</h2> */}
                </div>
            </div>
            <div className="container mx-auto my-24">
                <div className="text-center">
                    <div className="w-64 h-1 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mb-10"></div>
                    <div className="text-white text-5xl font-bold">
                        รู้จัก&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0] to-[#13D1D1]">
                            &quot;Mee Need Repaur&quot;
                        </span>
                    </div>
                    <Image
                        src="/images/LOGO.png" alt=""
                        width={300}
                        height={300}
                        className="w-[300px] mx-auto my-10 " />
                </div>

                <div className="bg-[#1E293B] p-8 md:p-11 rounded-lg ">
                    <div className="text-white text-2xl font-bold">
                        ทำความรู้จักกับ&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0] to-[#13D1D1]">
                            &quot;Mee Need Repaur&quot;
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
        </RootLayout>
    )
}