import RootLayout from "../../components/layout";
import { newsTest } from '../../../data/News';
import Link from "next/link";
import SlideNews from "../../container/News/Slidenews";
import NewsCard from "../../container/News/NewsCard";
import NewsCardsm from "../../container/News/NewsCardsm";

interface NewsData {
    id: string;
    image: string;
    title: string;
    description: string;
    credit: string;
    date: string;
}

export default function NewsPage() {

    return (
        <RootLayout>
            <div className="mb-24">
                <SlideNews />
            </div>
            <div className="container mx-auto my-24">
                <div className="flex items-center justify-center">
                    <div className="h-0.5 w-full bg-white"></div>
                    <h2 className="w-full text-xl md:text-4xl text-center p-3 font-semibold bg-gradient-to-b from-[#081FF0] to-[#13D1D1] text-transparent bg-clip-text">
                        News Update
                    </h2>
                    <div className="h-0.5 w-full bg-white"></div>
                </div>

                <div className="container mx-auto md:my-12">
                    <div className=" flex items-center justify-center ">
                        <div className="" >
                            <NewsCard />
                        </div>

                      
                    </div>
                </div>

                {/* Card  */}
                {/* <div className="mt-10">
                    <div className="flex flex-wrap lg:justify-start justify-center gap-8">
                        <div className="bg-[#F4F5F5] rounded-[20px] max-w-[320px] h-[360px]">
                            <div className="p-3 ">
                                <img className="rounded-[20px] w-full h-[180px]"
                                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--99fg18pd--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/mtjqqj22x8g1nwubmb1c.png"
                                    alt=""
                                />
                            </div>
                            <div className="px-4 py-2">
                                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0]  to-[#13D1D1] ">หัวข้อข่าว</h4>
                                <div className="flex justify-between px-2 text-sm">
                                    <p>By ที่มาของข่าว</p>
                                    <p>2 ส.ค. 66</p>
                                </div>
                                <p className="mt-2 truncate">อธิบายรายละเอียด อธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียดอธิบายรายละเอียด</p>
                                <Link href='news/readNews'>
                                    <p className="bg-yellow-500 p-2 rounded-full text-center mt-3 ">
                                        อ่าน
                                    </p>
                                </Link>
                            </div>


                        </div>

                    </div>
                </div> */}
            </div>
        </RootLayout>
    )
}