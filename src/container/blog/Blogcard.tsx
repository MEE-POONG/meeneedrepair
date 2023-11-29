import Link from "next/link";
import { useEffect, useState } from "react";

interface blog {
    id: String,
    title: String,
    subtitle: string,
    detail: String,
    img: String,
    author: String,
    refer: String,
    date: String,
}
export default function BlogCard() {


    const initialVisibleItems = 5; //ตัวตั้ง Limited จำนวนสำหรับการแสดงบนหน้าจอ
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [blogData, setblogData] = useState<blog[]>([]); // Use the defined interface here
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 4);
    };

    const hasMoreDataToLoad =

        useEffect(() => {
            fetch('/api/blog')
                .then((response) => response.json())
                .then((data) => {
                    setblogData(data.blog);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });
        }, []);

    return (


        <div className="cardblog container mx-auto mt-5 px-6">
            <div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">
                {blogData.slice(0, visibleItems).map((blog) => (
                    <div className="bg-secondary1 shadow-xl rounded-md overflow-hidden p-2 md:p-4">

                        <div className="flex md:flex-wrap items-center">

                            <div className="w-[350px] md:w-full h-[80px] md:h-[150px] rounded-l-md md:rounded-lg overflow-hidden ">
                                <Link href={`/blog/${blog.id}`} className="text-natural04 text-xs"><img className="w-full h-full object-cover"
                                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${blog.img ? blog.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                    alt=""
                                /></Link>
                            </div>

                            <div className="ml-3 md:ml-0 md:mt-2">
                                <Link href={`/blog/${blog.id}`} className="text-natural04 text-xs">
                                    <p className="text-sm lg:text-lg line-clamp-2 font-semibold bg-gradient-to-r from-[#ca7cff] to-[#13D1D1] bg-clip-text text-transparent">
                                        {blog.title}
                                    </p>
                                </Link>
                                <div className="hidden md:block text-secondary2 text-xs md:text-sm mt-2 ">
                                 
                                        <p className="line-clamp-2">{blog.subtitle}</p>
                                   
                                </div>
                                <div className="flex justify-between py-5">
                                    <p className="text-natural01 text-xs">
                                        By: {/* &nbsp;{blog.author}*/}
                                    </p>
                            
                                    <Link href={`/blog/${blog.id}`} className="text-natural04 text-xs">
                                    อ่าน
                                    </Link>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* <div className="py-9">
                <button className="group relative h-8 w-36 md:h-12 md:w-48 overflow-hidden rounded-lg bg-white md:text-base text-sm shadow">
                    <div className="absolute inset-0 w-3 bg-slate-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white" onClick={handleLoadMore} >โหลดเพิ่มเติม</span>
                </button>
            </div> */}


        </div >

    )
}
