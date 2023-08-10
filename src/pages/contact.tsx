
import Image from 'next/image';
import RootLayout from '../components/layout';
import Mailform from '../container/Contact/Mailform';

export default function ContactPage() {
    return (
        <RootLayout>
            <div className='mb-10 relative bg-fixed'>
                <img src="../images/imgslider/banner3.jpg" className='w-full lg:h-[640px] ' alt="" />
                {/* <div className="absolute text-white text-center md:top-[250px] md:left-[740px] rounded-lg bg-black/30 p-10">
                    <h2 className="hidden md:block text-7xl font-semibold text-white ">ติดต่อเรา</h2>
                </div> */}

                <div className="container mx-auto">
                    <div className="w-64 h-1 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mb-10 mt-24"></div>
                    <div className="grid grid-flow-row lg:grid-cols-12 gap-1">
                        <div className="lg:col-span-7 px-8">
                            <div className="p-5 rounded-lg">
                                <h4 className="text-[46px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0] via-sky-300 to-[#13D1D1] mb-5">Mee Need Repair</h4>
                                <p className="text-[#F4F5F5] flex gap-3 mt-2">
                                    <strong>Address:</strong> 46/3 Ratchanikun Rd, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000
                                </p>
                                <p className="text-[#F4F5F5] flex gap-3 mt-2">
                                    <strong>Email:</strong> 
                                </p>
                                <p className="text-[#F4F5F5] flex gap-3 mt-2">
                                    <strong>Phone:</strong>
                                </p>
                                <p className="text-[#F4F5F5] flex gap-3 mt-2">
                                    <strong>Facebook:</strong> 
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 px-8">
                            <iframe className="rounded-lg w-full"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7708.821755171245!2d102.102017!3d14.96988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194d8e8317c351%3A0xd84c052ad6cf5c55!2sME%20PROMPT%20TECHNOLOGY!5e0!3m2!1sen!2sth!4v1691552612979!5m2!1sen!2sth"
                                height="400"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

               <Mailform/>
            </div>
        </RootLayout>
    )
}