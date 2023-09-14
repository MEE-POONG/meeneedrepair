import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from '@prisma/client';

export default function Information(){

    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [userData, setUserData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [deliveryLocationData, setDeliveryLocationData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
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

    return(
        <>
        <div>
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold">ข้อมูลส่วนตัว</p>
                           
                            <Link
                                href={"/"}
                                className="flex hover:text-natural04"
                            >
                                  
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                 
                                แก้ไข
                              
                            </Link>
                         
                              
                        </div>
                        <div className="mt-5 leading-loose">
                            <p>
                                <strong>ชื่อผู้รับ :</strong>
                                {/* {userData.fname} {userData.lname} */}
                            </p>
                            <p>
                                <strong>อีเมล :</strong>
                                {/* {userData.email} */}
                            </p>
                            <p>
                                <strong>เบอร์โทรศัพท์ :</strong>
                                {/* {userData.tel} */}
                            </p>
                            <p>
                                <strong>ที่อยู่จัดส่ง :</strong>
                                {/* {userData.birthday} */}
                            </p>
                        </div>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mt-5"></div>

                    </div>
        
        </>
    )
}