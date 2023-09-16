import Link from "next/link";

export default function CardNews() {
    return (
        <>
            <div className="container mx-auto my-10 px-6">
                <h4 className="text-white text-xl lg:text-2xl font-bold mb-6 text-center md:text-left">อัพเดทข่าวสาร</h4>
                <div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">

                    <div className="bg-secondary1 shadow-xl rounded-md overflow-hidden p-2 md:p-4">
                        <div className="flex md:flex-wrap items-center">
                            <div className="w-[300px] md:w-full h-[80px] md:h-auto rounded-lg overflow-hidden object-cover">
                                <img className="w-full h-full"
                                    src="https://fictionhorizon.com/wp-content/uploads/2023/02/Boaffy.jpg" alt="" />
                            </div>

                            <div className="ml-3 md:ml-0 md:mt-2">
                                <p className="text-sm md:text-base font-semibold text-pink-600 line-clamp-2">Boa Hancock, Crazy in love with Luffy. Boa Hancock, Crazy in love with Luffy. </p>

                                <div className="hidden md:block text-secondary2 text-xs mt-2 line-clamp-3">
                                    <p>Boa Hancock, Crazy in love with Luffy. Boa Hancock, Crazy in love with Luffy.</p>
                                </div>

                                <div className="flex justify-between mt-5">
                                    <p className="text-natural01 text-xs">By:</p>
                                    <button className="text-natural04 text-xs">
                                        <Link href="/news">อ่าน</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}