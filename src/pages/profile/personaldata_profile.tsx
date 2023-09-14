import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PersonalData = () => {

    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [userData, setUserData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`/api/user/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setUserData(data); // กำหนดข้อมูลบทความข่าวที่ดึงมา
                    //console.log(data);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });
        }
    }, [id]);


    return (
        <div className="">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 33 34" fill="none">
                    <path d="M29.015 22.7908L22.643 19.4984L25.0453 15.9973C25.6053 15.1797 25.8991 14.2637 25.9 13.3328V7.79041C25.9 5.72426 24.8675 3.74274 23.0297 2.28176C21.1918 0.820772 18.6991 0 16.1 0C13.5009 0 11.0082 0.820772 9.17037 2.28176C7.33251 3.74274 6.30001 5.72426 6.30001 7.79041V13.3328C6.30088 14.2638 6.5947 15.1798 7.15471 15.9974L9.55703 19.4984L3.18501 22.7908C2.20572 23.2948 1.40104 23.9859 0.844625 24.801C0.288206 25.6161 -0.00218872 26.5291 1.24205e-05 27.4565V33.3875H32.2V27.4565C32.2022 26.5291 31.9118 25.6161 31.3554 24.801C30.799 23.9859 29.9943 23.2948 29.015 22.7908ZM29.4 31.1616H2.80001V27.4565C2.7987 26.9 2.97295 26.3522 3.30682 25.8632C3.64069 25.3741 4.12351 24.9594 4.7111 24.6571L13.2563 20.2416L9.61285 14.9316C9.27685 14.441 9.10055 13.8914 9.10001 13.3328V7.79041C9.10001 6.31459 9.83751 4.89922 11.1503 3.85566C12.463 2.8121 14.2435 2.22583 16.1 2.22583C17.9565 2.22583 19.737 2.8121 21.0498 3.85566C22.3625 4.89922 23.1 6.31459 23.1 7.79041V13.3328C23.0995 13.8914 22.9232 14.441 22.5872 14.9316L18.9438 20.2416L27.4892 24.6571C28.0767 24.9594 28.5595 25.3741 28.8933 25.8632C29.2271 26.3523 29.4014 26.9 29.4 27.4565V31.1616Z" fill="#F4F5F5" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">จัดการข้อมูลส่วนตัว</h3>
            </div>

            <div className="bg-secondary2 mt-10 rounded-lg p-8 text-secondary1">
                <div>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">ข้อมูลส่วนตัว</p>

                    </div>
                    <div className="mt-5 leading-loose gap-y-2 flex flex-wrap">

                        <p className="">
                            <strong>ชื่อผู้รับ </strong>
                        </p>
                        {/* {userData.fname} {userData.lname} */}
                        <input type="text" defaultValue="พฤศพล คงทวี" className="  w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />



                        <p className="">
                            <strong>เบอร์โทรศัพท์ </strong>
                        </p>
                        {/* {userData.tel} */}
                        <input type="text" defaultValue="0884728951" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />




                        <p className="">
                            <strong>อีเมล </strong>
                            {/* อีเมล@mail.com */}
                        </p>
                        <input type="text" defaultValue="อีเมล@mail.com" className="w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />



                        <p className="">
                            <strong>ที่อยู่จัดส่ง </strong>
                            {/* หอพักหญิงอยู่สบาย 193 ถนน 30กันยา , ในเมือง เมืองนครราชสีมา นครราชสีมา 30000 */}
                        </p>
                        <input type="text" defaultValue="บ้านไทยนุพล นครราชสีมา" className="w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />




                    </div>

                </div>



            </div>

        </div>
    )
}
export default PersonalData;