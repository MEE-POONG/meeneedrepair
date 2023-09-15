import RootLayout from "../../components/layout";
import { newsTest } from '../../../data/News';
import Link from "next/link";
import BlogCard from "../../container/Blog/blogcard";

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
             <div className='relative flex items-center justify-center bg-gray-800'>
                <div className=" xl:px-32 ">
                    <img src="/images/blog3.jpg" alt="" /></div>
                    <div className='absolute inset-x-0 top-[35%]  md:h-40 text-center'>
                        <button className=" bg-black  rounded-lg bg-opacity-50 w-28 h-14  md:w-80 md:h-28">
                            <div className=" text-xl md:text-5xl text-white">สาระน่ารู้</div>
                        </button>
                    </div>
                </div>
            <div className="container mx-auto">
               
                <div className="flex items-center justify-center mt-3">
                    <div className="h-0.5 w-full bg-white"></div>
                    <h2 className="w-full text-2xl md:text-4xl text-center p-3 font-semibold text-white text-transparent bg-clip-text">
                        Blog
                    </h2>
                    <div className="h-0.5 w-full bg-white"></div>
                </div>

                {/* Card  */}
                <div className="md:mt-1 md:p-5">
                    <div className="max-w-2xl mx-auto">
                    </div>
                    <div className="container mx-auto md:my-12">
                    <div className=" flex items-center justify-center ">
                        <div className="" >
                            <BlogCard />
                        </div>

                      
                    </div>
                </div>
                </div>
            </div>
        </RootLayout>
    )
}
export default BlogsPage;