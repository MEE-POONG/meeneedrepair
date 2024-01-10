import ContactPage from "./contact";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { About } from "@prisma/client";
import RepairmanCard from "../components/RepairmanCard";

const AboutPage: React.FC = (props) => {

    const [{ data: aboutData }, getAbout] = useAxios({
        url: "/api/about",
        method: "GET",
    });

    const [filteredaboutData, setFilteredAboutData] = useState<About[]>([]);

    useEffect(() => {
        setFilteredAboutData(aboutData?.about ?? []);
    }, [aboutData]);
    return (
        <>
            <div className='mb-10 relative bg-fixed'>
                <img src="../images/imgslider/banner4.jpg" className='w-full md:h-[640px] ' alt="" />
                <div className="absolute text-white text-center md:top-2/4 md:left-32 p-12 rounded-lg ">
                    <h2 className="hidden md:block text-7xl font-semibold text-white">เกี่ยวกับเรา</h2>
                </div>
            </div>

            {filteredaboutData.map((about) => (
                <div className="container mx-auto my-24">
                    <div className="text-center">
                        <div className="w-64 h-1 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mb-10"></div>
                        <div className="text-blue-950 text-2xl md:text-5xl font-bold">
                            รู้จัก&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04208] to-[#f5997a]">
                                &quot;{about.title}&quot;
                            </span>
                        </div>

                    </div>
                    <div className="bg-[#1E293B] p-3 md:p-6 rounded-lg w-2/3 h-auto mx-auto mt-10">
                        <div className="flex justify-between items-center gap-8">
                            <div>
                                <img
                                    className='w-24 md:w-72'
                                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${about.imgLogo}/public`}
                                    alt="Picture of the Logo"
                                />
                            </div>
                            <div className='md:col-span-2'>
                                <p className='text-lg text-secondary2 text-center md:text-left mb-5'>ทำความรู้จัก</p>
                                <div className='flex items-end'>
                                    <h3 className='text-2xl md:text-5xl font-semibold text-orange-500'
                                    > {about.title}
                                    </h3>

                                </div>

                                <div className='text-secondary2 text-sm md:text-base mt-5'>
                                    {about.description}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-blue-950" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase text-blue-950">
                            Our Team
                        </span>
                        <span className="flex-grow block border-t border-blue-950" aria-hidden="true" role="presentation"></span>
                    </div>

                    <RepairmanCard/>
                    <ContactPage />


                </div>
            ))}
        </>
    )
}
export default AboutPage;