import Link from "next/link";
import { useEffect, useState } from "react";

interface news {
    id: String
    title: String,
    subtitle: string;
    detail: String,
    img: String,
    author: String,
    refer: String,
    date: String,
}
export default function NewsCard() {


    const initialVisibleItems = 4;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [newsData, setnewsData] = useState<news[]>([]); // Use the defined interface here
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 4);
    };

    const hasMoreDataToLoad =

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
        <div className="container mx-auto mt-5 px-6">
            <div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">
                {newsData.slice(0, visibleItems).map((news) => (
                    <div className="bg-secondary1 shadow-xl rounded-md overflow-hidden p-2 md:p-4">
                        
                        <div className="flex md:flex-wrap items-center">
                        <Link href={`/news/${news.id}`} 
                                            className="text-natural04 text-xs">
                            <div className="w-[350px] md:w-full h-[80px] md:h-[150px] rounded-l-md md:rounded-lg overflow-hidden ">
                                <img className="w-full h-full object-cover"
                                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img ? news.img : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                                    alt=""
                                />
                            </div>        </Link>
                            <Link href={`/news/${news.id}`} 
                                            className="text-natural04 text-xs">
                                         
                            <div className="ml-3 md:ml-0 md:mt-2">
                                <p className="text-sm lg:text-lg line-clamp-2 font-semibold bg-gradient-to-r from-[#081FF0] to-[#13D1D1] bg-clip-text text-transparent">
                                    {news.title}
                                </p>

                                <div className="hidden md:block text-secondary2 text-xs md:text-sm mt-2 ">
                                    <p className="line-clamp-2">{news.subtitle}</p>
                                </div>

                                <div className="flex justify-between mt-5">
                                    <p className="text-natural01 text-xs">
                                        By: &nbsp;{news.author}
                                    </p>

                                       อ่าน
                                       

                                </div>
                            </div> </Link>
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

    )
}

// ใส่เป็น แนะนำข่าว,บทความ
// <div className="container mx-auto">
// <div className="grid grid-cols-12 ">
//     <div className="relative   text-gray-700 bg-white shadow-md w-60 rounded-xl bg-clip-border">
//         <div className="col-span-4">
//             <div>
//                 <img src="images/blog.jpg" alt="img-blur-shadow" />
//             </div>
//             <div className="mt-2">
//                 <h5 className="block">UI/UX Review Check</h5>
//             </div>
//             <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>

//         </div>
//     </div>
// </div>
// </div>









// export default function SlideBoxNews() {
//     return (
//         <div className="container mx-auto">
//             <div className="grid grid-cols-12 ">
//                 <div className="  text-gray-700 bg-white shadow-md w-60 rounded-xl bg-clip-border">
//                     <div className="col-span-4">
//                         <img src="images/blog.jpg" alt="img-blur-shadow" />
//                         <div className="mt-2">
//                             <h5 className="block">UI/UX Review Check</h5>
//                         </div>
//                         <p className="block font-sans text-[14px] antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>
//                     </div>

//                     <div className="col-span-3">
//                         <img src="images/blog.jpg" alt="img-blur-shadow" />
//                         <div className="mt-2">
//                             <h5 className="block">UI/UX Review Check</h5>
//                         </div>
//                         <p className="block font-sans text-[14px] antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>
//                     </div>


//                 </div>
//             </div>
//         </div>

//         <div className="container">
//             <div className="grid grid-cols-12">
//                 <div className="col-span-3">
//                 <img src="images/blog.jpg" alt="img-blur-shadow" />
//                         <div className="mt-2">
//                             <h5 className="block">UI/UX Review Check</h5>
//                         </div>
//                         <p className="block font-sans text-[14px] antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// // ใส่เป็น แนะนำข่าว,บทความ
// // <div className="container mx-auto">
// // <div className="grid grid-cols-12 ">
// //     <div className="relative   text-gray-700 bg-white shadow-md w-60 rounded-xl bg-clip-border">
// //         <div className="col-span-3">
// //             <div>
// //                 <img src="images/blog.jpg" alt="img-blur-shadow" />
// //             </div>
// //             <div className="mt-2">
// //                 <h5 className="block">UI/UX Review Check</h5>
// //             </div>
// //             <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>

// //         </div>
// //     </div>
// // </div>
// // </div>