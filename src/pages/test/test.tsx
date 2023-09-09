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


    const initialVisibleItems = 4;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [newsData, setnewsData] = useState<news[]>([]); // Use the defined interface here
    //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 4);
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

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {newsData.slice(0, visibleItems).map((news) => (
                        <Link key={news.id} href={`/news/${news.id}`} passHref>

                            <div key={news.id} className="bg-secondary1 rounded-lg overflow-hidden w-60 m-10 ">
                                <img
                                    className=' w-full h-24 object-cover'
                                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img ? news.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                    alt='indexActivity image'
                                />
                               
                                <div className="px-4 mt-5">
                                    <p className="text-xl line-clamp-2 font-semibold bg-gradient-to-r from-[#081FF0] to-[#13D1D1] bg-clip-text text-transparent">
                                    {news.title}
                                    </p>
                                    <p className="text-secondary2 line-clamp-2 mb-5">{news.subtitle}
                                    </p>

                                    <div className="flex justify-between mb-3">

                                        <div className="flex text-[#18BCEB] text-sx">
                                            <p>By &nbsp;</p>
                                            <p>{news.author}</p>
                                        </div>

                                        <div className="flex text-[#FFCD4B] text-sx">
                                            <p>{news.date}</p>
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