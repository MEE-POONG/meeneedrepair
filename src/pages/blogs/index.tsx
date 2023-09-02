import RootLayout from "../../components/layout";
import { newsTest } from '../../../data/News';
import Link from "next/link";

interface NewsData {
    id: string;
    image: string;
    title: string;
    description: string;
    credit: string;
    date: string;
}

const BlogsPage = () => {

    return (
        <RootLayout>
             <div className='relative flex items-center justify-center bg-black'>
                    <img src="/images/blog3.jpg" alt="" />
                    <div className='absolute inset-x-0 top-[35%]  md:h-40 text-center'>
                        <button className=" bg-black  rounded-lg bg-opacity-50 w-28 md:w-80 md:h-40">
                            <div className=" text-xl md:text-5xl text-white">สาระน่ารู้</div>
                        </button>
                    </div>
                </div>
            <div className="container mx-auto">
               
                <div className="flex items-center justify-center">
                    <div className="h-0.5 w-full bg-white"></div>
                    <h2 className="w-full text-2xl md:text-4xl text-center p-3 font-semibold text-white text-transparent bg-clip-text">
                        Blog
                    </h2>
                    <div className="h-0.5 w-full bg-white"></div>
                </div>

                {/* Card  */}
                <div className="mt-10 p-5">
                    <div className="max-w-2xl mx-auto">
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <img className="rounded-t-lg" src="/images/b1.jpg" alt="" />
                            </Link>
                            <div className="p-5">
                                <Link href="#">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">การ์ดจอคืออะไร อีกหนึ่ง Item ชิ้นสำคัญ</h5>
                                </Link>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">การ์ดจอ (Graphic Card) หรือที่หลายๆคนเรียกว่า GPU เป็นอุปกรณ์ที่สำคัญอีกชิ้นของคอมพิวเตอร์</p>
                                <Link href="/blogs/readBlog" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    
                        {/* <div className="bg-[#F4F5F5] rounded-[20px] ">
                            <div className="p-3 ">
                                <img className="rounded-[20px] w-full h-[200px]"
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
                                <Link href='blog/readBlog'>
                                    <p className="bg-yellow-500 p-2 rounded-full text-center mt-3 ">
                                        อ่าน
                                    </p>
                                </Link>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </RootLayout>
    )
}
export default BlogsPage;