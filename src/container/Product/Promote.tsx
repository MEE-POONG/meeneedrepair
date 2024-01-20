import Link from "next/link";
import { useEffect, useState } from "react";


interface Products {
    id: number;
    productname: string;
    price: string;
    detail: string;
    date: string;
    author: string;
    refer: string;
    imgFirst: string;
    // Add other properties if there are more
}

export default function PromoteCard() {

    const initialVisibleItems = 5;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [newsData, setnewsData] = useState<Products[]>([]); // Use the defined interface here
    //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 5);
    };

    useEffect(() => {
        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => {
                setnewsData(data.products);
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
                    {newsData.slice(0, visibleItems).map((products) => (
                        <div key={products.id} className="bg-white shadow-2xl rounded-md overflow-hidden ">
                            <Link href={`/products/${products.id}`} >
                                <div className="flex md:flex-wrap items-center">
                                    <div className="w-[350px] md:w-full h-[100px] md:h-[280px] shadow-2xl md:rounded-tr-lg md:rounded-tl-lg overflow-hidden ">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${products.imgFirst || 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                            alt=""
                                        />

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