import Link from "next/link";
import RootLayout from "../../components/layout";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import LatestUser from "../../container/User/LatestUser";

interface profile {
    id: String,
    fname: String,
    lname: string,
} 
const ReadUserDetail = () => {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [profile, setUser] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('ID:', id);
        if (id) {
            fetch(`/api/user/appointment/${id}`)
                .then((response) => response.json())
                .then((profileData) => {
                    console.log('Profile Data:', profileData);
                    setUser(profileData);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false);
                });
        }
    }, [id]);

    return (
        <RootLayout>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto p-6 rounded-lg shadow-lg">
                <h2 className=" font-semibold text-xl lg:text-2xl text-gray-800 mb-4">
                    จองคิวซ่อม
                </h2>
                <form >
                    <div className="flex justify-center">
                        <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                            <div className='mb-2'>ชื่อ </div>
                           <p>{profile.fname}</p> 
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <div className='mb-2'>นามสกุล</div>
                        <p>{profile.lname}</p>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                            <div className='mb-2'>อีเมล</div>
                            <input
                                type="email" 
                                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                                placeholder="อีเมล" />

                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <div className='mb-2'>เบอร์โทรติดต่อ</div>
                            <input
                                type="number" 
                                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                                id="exampleFormControlInput3"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                placeholder="เบอร์โทรติดต่อ" />

                        </div>
                    </div>
                    <div className="max-w-md mx-auto mb-4" data-te-input-wrapper-init>
                        <div className='mb-2'>ต้องการจองคิววันที่</div>
                        <input
                            type="date"
                            className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                            id="exampleFormControlInput3"
                            />

                    </div>

                    <div className="max-w-md mx-auto mb-4">
                        <label
                            htmlFor="equipment"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            อุปกรณ์ที่ต้องการซ่อม
                        </label>
                       
                        {/* เพิ่มปุ่มหรือเหตุการณ์เมื่อคลิกเพื่อบันทึกค่าในฐานข้อมูล */}
                    </div>
                 
                </form>

            </div>
        </div>

          
        </RootLayout>
    )
}
export default ReadUserDetail;