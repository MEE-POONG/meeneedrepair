import Link from "next/link";
import ModalRepair from "./ModalRepair";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from '@prisma/client';

const RepairProfile = () => {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters


    const [ReservationData, setAppointmentData] = useState<any[]>([]);


    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        if (id) {
            fetch(`/api/user/appointment/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log("ข้อมูลเริ่มต้นของ appointment");
                    // console.log(data);
                    // console.log(data.Appointment);
                    setAppointmentData(data.Reservation);
                    // console.log(data.AddressId);
                    // console.log(data.Address);


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
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                    <g clip-path="url(#clip0_801_8)">
                        <path d="M15.8027 10.7471L2.86084 23.7041C2.5682 23.9967 2.34115 24.3348 2.17969 24.7183C2.01823 25.1017 1.9375 25.5054 1.9375 25.9292C1.9375 26.353 2.01823 26.7567 2.17969 27.1401C2.34115 27.5236 2.5682 27.8566 2.86084 28.1392C3.15348 28.4217 3.48649 28.6437 3.85986 28.8052C4.23324 28.9666 4.63688 29.0524 5.0708 29.0625C5.48454 29.0625 5.88314 28.9818 6.2666 28.8203C6.65006 28.6589 6.99316 28.4318 7.2959 28.1392L15.5 19.9502V22.6899L8.67334 29.5166C8.18896 30.001 7.639 30.3693 7.02344 30.6216C6.40788 30.8739 5.757 31 5.0708 31C4.37451 31 3.72363 30.8688 3.11816 30.6064C2.5127 30.3441 1.97282 29.9757 1.49854 29.5015C1.02425 29.0272 0.66097 28.4923 0.408691 27.897C0.156413 27.3016 0.0201823 26.6457 0 25.9292C0 25.2329 0.126139 24.582 0.378418 23.9766C0.630697 23.3711 0.999023 22.8211 1.4834 22.3267L13.6836 10.1265C13.6432 9.89437 13.613 9.66227 13.5928 9.43018C13.5726 9.19808 13.5625 8.96094 13.5625 8.71875C13.5625 7.92155 13.6634 7.15462 13.8652 6.41797C14.0671 5.68131 14.3597 4.98503 14.7432 4.3291C15.1266 3.67318 15.5858 3.08284 16.1206 2.55811C16.6554 2.03337 17.2458 1.57926 17.8916 1.1958C18.5374 0.812337 19.2287 0.519694 19.9653 0.317871C20.702 0.116048 21.474 0.0100911 22.2812 0C22.8262 0 23.3257 0.0403646 23.7798 0.121094C24.2339 0.201823 24.6779 0.322917 25.1118 0.484375C25.5457 0.645833 25.9645 0.837565 26.3682 1.05957C26.7718 1.28158 27.2057 1.52376 27.6699 1.78613L21.7061 7.75L23.25 9.29395L29.2139 3.33008C29.4561 3.75391 29.6831 4.17773 29.895 4.60156C30.1069 5.02539 30.2987 5.46436 30.4702 5.91846C30.6418 6.37256 30.778 6.82666 30.8789 7.28076C30.9798 7.73486 31.0303 8.21924 31.0303 8.73389C31.0303 9.3999 30.9495 10.0609 30.7881 10.7168C30.6266 11.3727 30.3895 11.9984 30.0767 12.5938C29.7638 13.1891 29.4006 13.7492 28.9868 14.2739C28.5731 14.7987 28.0938 15.2629 27.5488 15.6665C27.0846 15.4849 26.6104 15.3436 26.126 15.2427C25.6416 15.1418 25.1471 15.0812 24.6426 15.061C25.2985 14.8188 25.8989 14.4858 26.4438 14.062C26.9888 13.6382 27.453 13.1538 27.8364 12.6089C28.2199 12.064 28.5226 11.4635 28.7446 10.8076C28.9666 10.1517 29.0726 9.47054 29.0625 8.76416C29.0625 8.00732 28.9414 7.28076 28.6992 6.58447L23.25 12.0186L18.9814 7.75L24.4155 2.30078C23.7293 2.05859 23.0179 1.9375 22.2812 1.9375C21.3428 1.9375 20.4648 2.11409 19.6475 2.46729C18.8301 2.82048 18.1136 3.30485 17.498 3.92041C16.8825 4.53597 16.3981 5.25244 16.0449 6.06982C15.6917 6.88721 15.5101 7.77018 15.5 8.71875C15.5 9.06185 15.5303 9.3999 15.5908 9.73291C15.6514 10.0659 15.722 10.404 15.8027 10.7471ZM24.2188 17.4375C25.1572 17.4375 26.0352 17.6141 26.8525 17.9673C27.6699 18.3205 28.3914 18.8048 29.0171 19.4204C29.6427 20.036 30.1271 20.7524 30.4702 21.5698C30.8133 22.3872 30.9899 23.2702 31 24.2188C31 25.1572 30.8234 26.0352 30.4702 26.8525C30.117 27.6699 29.6327 28.3914 29.0171 29.0171C28.4015 29.6427 27.6851 30.1271 26.8677 30.4702C26.0503 30.8133 25.1673 30.9899 24.2188 31C23.2803 31 22.4023 30.8234 21.585 30.4702C20.7676 30.117 20.0461 29.6327 19.4204 29.0171C18.7948 28.4015 18.3104 27.6851 17.9673 26.8677C17.6242 26.0503 17.4476 25.1673 17.4375 24.2188C17.4375 23.2803 17.6141 22.4023 17.9673 21.585C18.3205 20.7676 18.8048 20.0461 19.4204 19.4204C20.036 18.7948 20.7524 18.3104 21.5698 17.9673C22.3872 17.6242 23.2702 17.4476 24.2188 17.4375ZM19.375 24.2188C19.375 24.8848 19.5011 25.5104 19.7534 26.0957C20.0057 26.681 20.3488 27.1956 20.7827 27.6396C21.2166 28.0837 21.7313 28.4318 22.3267 28.6841C22.922 28.9364 23.5527 29.0625 24.2188 29.0625C24.693 29.0625 25.1572 28.9969 25.6113 28.8657C26.0654 28.7345 26.4893 28.5327 26.8828 28.2603L20.1772 21.5547C19.9149 21.9482 19.7181 22.3721 19.5869 22.8262C19.4557 23.2803 19.3851 23.7445 19.375 24.2188ZM28.2603 26.8828C28.5226 26.4893 28.7194 26.0654 28.8506 25.6113C28.9818 25.1572 29.0524 24.693 29.0625 24.2188C29.0625 23.5527 28.9364 22.9271 28.6841 22.3418C28.4318 21.7565 28.0837 21.2469 27.6396 20.813C27.1956 20.3791 26.681 20.0309 26.0957 19.7686C25.5104 19.5062 24.8848 19.375 24.2188 19.375C23.7445 19.375 23.2803 19.4406 22.8262 19.5718C22.3721 19.703 21.9482 19.9048 21.5547 20.1772L28.2603 26.8828Z" fill="#F4F5F5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_801_8">
                            <rect width="31" height="31" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">บริการซ่อมอุปกรณ์</h3>
            </div>

            <div className="mt-10 rounded-lg md:p-8 text-secondary1 text-sm md:text-base ">

                {ReservationData && ReservationData.map((reservation: any, index: number) => (
                    <div className="bg-secondary2 rounded-2xl p-3 grid grid-cols-12 mb-5" key={index}>
                        <img src="https://bleuwire.com/wp-content/uploads/2019/03/computer-repair-services.jpg" alt="" className="col-span-2 md:col-span-2 h-24 w-24 object-contain" />
                        <div className="col-span-4 md:col-span-5 self-center flex flex-wrap">
                            อุปกรณ์:
                            <p className="md:ml-1 text-[#645cff]  self-center truncate">{reservation.request}</p>

                        </div>
                        <div className="col-span-2 md:col-span-2 self-center  flex justify-center flex-wrap">
                            วันที่:
                            <p className="md:ml-1 text-[#645cff] text-center"> {new Date(reservation.time).toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'long',
                                // month: 'long',
                                day: 'numeric',
                            })} </p>

                        </div>

                        <div className="col-span-3 md:col-span-2 self-center flex justify-center flex-wrap">
                            สถานะ:
                            <p className={`self-center md:ml-1 text-${reservation.status === 'ยังไม่ซ่อม' ? 'orange-500' : reservation.status === 'ยกเลิก' ? 'red-500' : 'green-500'} text-center`}>{reservation.status}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <ModalRepair appointmentData={reservation} />
                        </div>
                    </div>
                ))}




            </div>

        </div>
    )
}
export default RepairProfile;