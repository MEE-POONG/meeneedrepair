import RootLayout from "@/components/layout";

export default function ContactPage() {
    return (
        <RootLayout>
            <div className='mb-10 relative bg-fixed'>
                <img src="../images/imgslider/banner3.jpg" className='w-full md:h-[640px] ' alt="" />
                <div className="absolute text-white text-center top-[250px] left-[740px] rounded-lg bg-black/30 p-10">
                    <h2 className="hidden md:block text-7xl font-semibold text-white ">ติดต่อเรา</h2>
                    {/* <h2 className="hidden md:block text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]  bg-transparent text-clip">เกี่ยวกับเรา</h2> */}
                    {/* <h2 className="md:hidden text-3xl inset-0 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]  bg-transparent text-clip">เกี่ยวกับเรา</h2> */}
                </div>

                
            </div>
            <div></div>
        </RootLayout>
    )
}