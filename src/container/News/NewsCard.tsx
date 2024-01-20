import Link from "next/link";
import { useEffect, useState } from "react";


interface news {
    id: number;
    title: string;
    subtitle: string;
    detail: string;
    date: string;
    author: string;
    refer: string;
    img: string;
    // Add other properties if there are more
}

export default function NewsCard() {

    const initialVisibleItems = 5;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [newsData, setnewsData] = useState<news[]>([]); // Use the defined interface here
    //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 5);
    };

    useEffect(() => {
        fetch('/api/news')
            .then((response) => response.json())
            .then((data) => {
                setnewsData(data.news);
                setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            });
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">
                    {newsData.slice(0, visibleItems).map((news) => (
                        <div key={news.id} className="bg-white shadow-xl rounded-md overflow-hidden ">
                            <Link href={`/news/${news.id}`} >
                                <div className="flex md:flex-wrap items-center">
                                    <div className="w-[350px] md:w-full h-[100px] md:h-[220px]  md:rounded-tr-lg md:rounded-tl-lg overflow-hidden ">

                                        <img className="w-full h-full object-cover"
                                            src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img ? news.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                            alt=""
                                        />

                                    </div>

                                    <div className="ml-0 w-[100%] md:mt-2 px-3">
                                        <div className="flex flex-wrap justify-between md:mt-5">
                                            <p className="text-black text-xs">
                                                by: {news.author}
                                            </p>

                                            <p className="text-orange-600 text-xs">
                                                {news.date}
                                            </p>

                                        </div>
                                        <p className="text-xs md:text-base font-bold line-clamp-2 text-black hover:text-amber-400 mt-2">
                                            {news.title}
                                        </p>

                                        <div className="hidden md:block text-black text-xs md:text-sm py-3">
                                            <p className="line-clamp-2 text-sm">{news.subtitle}</p>
                                        </div>

                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}