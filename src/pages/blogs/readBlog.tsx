import Link from "next/link";
import RootLayout from "../../components/layout";

const ReadBlogsDetail =()=>{
    return (
        <RootLayout>

<div className="relative p-7 md:p-3">
        <div className="w-full md:w-3/5 mx-auto ">
          <div className="mx-5 my-3 text-sm">
            <Link href="/news" className=" font-bold tracking-widest underline text-white">
              กลับ
            </Link>
          </div>
          <div className="w-full text-2xl md:text-4xl px-5 font-bold leading-none py-2 text-white">
            หัวข้อ
          </div>
          <p className="text-end text-white">18-08-2023</p>
          <img className="" src="/images/blog3.jpg" alt=""/>
          <p className="text-lg md:text-2xl text-white py-2">rhtyhtyhtyhgngfhd</p>
          <p className=" text-white">
            hepyohkotyephpteypi
          </p>
        </div>
      </div>
            
        </RootLayout>
    )
}
export default ReadBlogsDetail;