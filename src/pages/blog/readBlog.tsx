import Link from "next/link";
import RootLayout from "../../components/layout";
import SideNews from "../../container/news/sideNews";

const ReadBlogsDetail = () => {
  return (
    <RootLayout>
      <SideNews />
      <div className="relative p-7 md:p-3">
        <div className="w-full md:w-3/5 mx-auto ">
          {/* <div className="mx-5 my-3 text-sm">
            <Link href="/blogs" className=" font-bold tracking-widest underline text-black">
              กลับ
            </Link>
          </div>     */}
          <img className="" src="/images/Banner.png" alt="" /><p className="text-end text-black">24-11-2023 19.38.00 น.</p>
          <div className="w-full text-2xl md:text-4xl px-5 font-bold leading-none py-2 text-black">
            การ์ดจอคืออะไร อีกหนึ่ง Item ชิ้นสำคัญ ที่ชาวเกมเมอร์ทุกคนต้องมี
          </div>


          <p className="text-lg md:text-xl text-black py-2">ในปัจจุบันถ้าใครต้องการที่จะประกอบคอมพิวเตอร์ใช้เองขึ้นมาสักหนึ่งเครื่อง Item ชิ้นสำคัญที่หลายๆคนให้ความสนใจ และสำหรับบางคน นี่อาจเป็นอุปกรณ์ชิ้นแรกที่มองหาด้วยซ้ำ สิ่งที่เรากำลังพูดถึงกันอยู่ นั่นก็คือการ์ดจอนั่นเอง ด้วยปัจจัยหลายๆอย่าง ทำให้การ์ดจอขาดตลาด ไม่ว่าจะเป็นจากการที่ชิ้นส่วนหรือวัตถุดิบที่ใช้ในการผลิต อยู่ในภาวะขาดตลาดจากภาวะการระบาดของ Covid-19 หรือว่าจะเป็นการกว้านซื้อ เพื่อไปทำการขุดเหมือง Cryptocurrency เหตุผลเหล่านี้ ล้วนส่งเสริมให้ราคาการ์ดจอต่างก็เคยพุ่งทะยานไปมาก เพื่อนๆเคยสงสัยกันหรือไม่ ว่าทำไมการ์ดจอถึงได้เป็นที่ต้องการของทุกคนถึงขนาดนี้ ในวันนี้เราจะพาไปไขข้อสงสัยว่าการ์ดจอคืออะไร ทำไมไม่ใช่แค่เฉพาะชาวเกมเมอร์ ต้องการจะครอบครอง Item ชิ้นนี้</p>
        </div>
      </div>



    </RootLayout>
  )
}
export default ReadBlogsDetail;
