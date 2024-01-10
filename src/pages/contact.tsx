
import Image from 'next/image';
import RootLayout from '../components/layout';
import Mailform from '../container/Contact/Mailform';

export default function ContactPage() {
    return (

            <div className='mb-10 relative bg-fixed'>
             
                <div className="container mx-auto">
                    <div className="w-64 h-1 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mb-10 mt-24"></div>
                    <div className="grid grid-flow-row lg:grid-cols-12 gap-5 ">
                        <div className="lg:col-span-7 mx-8 bg-secondary1 rounded-lg  relative">
                            <div className="p-5">
                                <h4 className="text-[46px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#081FF0] via-sky-300 to-[#13D1D1] mb-5">Mee Need Repair</h4>
                                <p className="text-[#F4F5F5] flex gap-3 mt-4">
                                    <strong>Address:</strong> 46/3 Ratchanikun Rd, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000
                                </p>
                                <p className="text-[#F4F5F5] flex gap-3 mt-4">
                                    <strong>Email:</strong>
                                </p>
                                <p className="text-[#F4F5F5] flex gap-3 mt-4">
                                    <strong>Phone:</strong>
                                </p>
                                <p className="text-[#F4F5F5] flex gap-3 mt-4">
                                    <strong>Facebook:</strong>
                                </p>

                            </div>
                            <div className="absolute hidden lg:block w-1 h-464 bg-gradient-to-b from-[#CA0808] to-[#0FC0E7] mx-auto mb-10 mt-24 right-0 -inset-y-1"></div>

                        </div>
                        <div className="lg:col-span-5 mx-8">
                            <iframe className="rounded-lg w-full"
                                src={''}
                                height="400"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

             
            </div>
   
    )
}