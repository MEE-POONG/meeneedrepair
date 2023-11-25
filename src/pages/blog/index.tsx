import RootLayout from "../../components/layout";
import BlogCard from "../../container/blog/Blogcard";
import SlideBlog from "../../container/blog/SlideBlog";

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
             <SlideBlog />
            {/* <div className="container mx-auto">
                <div className=' flex justify-center bg-gray-800'>
                    <div className=" xl:px-32 ">
                        <SlideBlog /></div>
                    <div className='absolute inset-x-0 top-[35%]  md:h-40 text-center'>
                    <button className=" bg-black  rounded-lg bg-opacity-50 w-28 h-14  md:w-80 md:h-28">
                        <div className=" text-xl md:text-5xl text-white">สาระน่ารู้</div>
                    </button>
                </div>
                </div>
            </div> */}
            <div className="container mx-auto">
                <div className="flex items-center justify-center mt-3">
                    <div className="h-0.5 w-full bg-white"></div>
                    <h2 className="w-full text-2xl md:text-4xl text-center p-3 font-semibold text-blue-800 text-transparent bg-clip-text">
                        Blog
                    </h2>
                    <div className="h-0.5 w-full bg-white"></div>
                </div>

                {/* Card  */}
                <BlogCard />

            </div>

        </RootLayout>
    )
}
export default BlogsPage;