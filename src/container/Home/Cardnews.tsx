import Link from "next/link";

export default function CardNews() {
    return (
        <>
            <div className="container mx-auto my-10">
                <h4 className="text-white text-3xl mb-6 text-center md:text-left">อัพเดทข่าวสาร</h4>
                <div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5 px-5 md:px-0">
                    <div className="bg-secondary1 rounded-lg overflow-hidden w-60">
                        <img src="./images/computer.jpg" alt="" />

                        <div className="px-4 mt-5">
                            <p className="text-xl font-semibold bg-gradient-to-r from-[#081FF0] to-[#13D1D1] bg-clip-text text-transparent">
                                News Topic
                            </p>
                            <p className="text-secondary2 truncate">description, description,description
                                description, description......
                            </p>
                        </div>
                        <div className="text-center py-4">
                        <button
                            className="text-sm text-secondary1 font-normal bg-natural04 py-1 px-7 rounded-full"
                            type="submit">
                            อ่าน
                        </button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}