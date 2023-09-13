import Link from "next/link";
import { useEffect, useState } from "react";
import BlogsPage from '../../pages/blogs/index';


interface blog {
    id: string;
    title: string;
    subtitle: string;
    detail: string;
    img: string;
    // Add other properties if there are more
}

export default function BlogCard() {


    const initialVisibleItems = 4;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [blogData, setblogData] = useState<blog[]>([]); // Use the defined interface here
    //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 4);
    };

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
        <>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {blogData.slice(0, visibleItems).map((blog) => (
                        <Link key={blog.id} href={`/blog/${blog.id}`} passHref>

                            <div key={blog.id} className="bg-secondary1 rounded-lg overflow-hidden w-60 m-10 h-[250px]">
                                <img
                                    className=' w-full h-24 object-cover'
                                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${blog.img ? blog.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                    alt='indexActivity image'
                                />
                               
                                <div className="px-4 mt-5">
                                    <p className="text-xl line-clamp-2 font-semibold bg-gradient-to-r from-[#081FF0] to-[#13D1D1] bg-clip-text text-transparent">
                                    {blog.title}
                                    </p>
                                    <p className="text-secondary2 line-clamp-2 mb-5 truncate">{blog.subtitle}
                                    </p>

                                    <div className="flex justify-between mb-3">

                                        <div className="flex text-[#18BCEB] text-sx">
                                            <p>By &nbsp;</p>
                                            <p>{blog.author}</p>
                                        </div>

                                        <div className="flex text-[#FFCD4B] text-sx">
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                           
                        </Link>
                    ))}
                </div>
            </div>


        </>
    )
}