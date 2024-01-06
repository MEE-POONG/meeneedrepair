import Link from "next/link";
import { useEffect, useState } from "react";


interface blog {
    id: string;
    title: string;
    subtitle: string;
    detail: string;
    author: string;
    date: string;
    img: string;

    // Add other properties if there are more
}

export default function BlogCard() {


    const initialVisibleItems = 5;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [blogData, setblogData] = useState<blog[]>([]); // Use the defined interface here
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 5);
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
                    console.error('Error:',error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });
        }, []);

    return (
        <>

            <div className="container mx-auto px-10">
                <div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">
                    {blogData.slice(0, visibleItems).map((blog) => (
                        <div key={blog.id} className="bg-white shadow-xl rounded-md overflow-hidden ">
                            <div className="flex md:flex-wrap items-center">
                                <div className="w-[350px] md:w-full h-[80px] md:h-[220px] md:rounded-tr-lg md:rounded-tl-lg overflow-hidden">
                                    <Link href={`/blog/${blog.id}`}>
                                        <img className="w-full h-full object-cover"
                                            src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${blog.img ? blog.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                            alt=""
                                        />
                                    </Link>
                                </div>

                                <div className="ml-3 md:ml-0 w-[100%] md:mt-2 px-4">
                                    <div className="flex justify-between mt-5">
                                        <p className="text-black text-sm">
                                            {blog.author}
                                        </p>

                                        <p className="text-black text-sm">
                                           {blog.date}
                                        </p>



                                    </div>
                                    <p className="text-[34px] lg:text-2xl line-clamp-2  text-black hover:text-amber-400 my-3">
                                        {blog.title}
                                    </p>

                                    <div className="hidden md:block text-black text-xs md:text-sm mt-2 my-10">
                                        <p className="line-clamp-2">{blog.subtitle}</p>
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


            </div>


        </>
    )
}