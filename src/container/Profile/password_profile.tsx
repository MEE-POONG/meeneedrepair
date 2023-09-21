import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PasswordProfile = () => {

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

    const handleSave = () => {
        const oldPasswordElement = document.getElementById('oldPassword') as HTMLInputElement;
        const newPasswordElement = document.getElementById('newPassword') as HTMLInputElement;
        const confirmPasswordElement = document.getElementById('confirmPassword') as HTMLInputElement;

        if (oldPasswordElement && newPasswordElement && confirmPasswordElement) {
            const oldPassword = oldPasswordElement.value;
            const newPassword = newPasswordElement.value;
            const confirmPassword = confirmPasswordElement.value;

            // ตรวจสอบรหัสผ่านเดิม
            if (oldPassword !== userData.password) {
                alert('รหัสผ่านเดิมไม่ถูกต้อง');
                return;
            }

            // ตรวจสอบรหัสผ่านใหม่และยืนยันรหัสผ่านใหม่
            if (newPassword !== confirmPassword) {
                alert('รหัสผ่านใหม่ไม่ตรงกัน');
                return;
            }

            // ส่งข้อมูลไปยัง API เพื่อแก้ไขรหัสผ่าน
            fetch(`/api/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // ทำอะไรกับข้อมูลที่ได้จาก API (เช่น แสดงข้อความสำเร็จ)
                    alert('บันทึกข้อมูลเรียบร้อยแล้ว');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }


    };



    return (
        <div className="">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                    <path d="M29.0625 18.75C30.6158 18.75 31.875 17.4908 31.875 15.9375C31.875 14.3842 30.6158 13.125 29.0625 13.125C27.5092 13.125 26.25 14.3842 26.25 15.9375C26.25 17.4908 27.5092 18.75 29.0625 18.75Z" fill="#F4F5F5" />
                    <path d="M9.375 30L19.0875 19.4025C18.8119 18.5156 18.75 17.8556 18.75 16.875C18.75 15.0208 19.2998 13.2082 20.33 11.6665C21.3601 10.1248 22.8243 8.92321 24.5373 8.21363C26.2504 7.50406 28.1354 7.31841 29.954 7.68014C31.7725 8.04188 33.443 8.93476 34.7541 10.2459C36.0652 11.557 36.9581 13.2275 37.3199 15.046C37.6816 16.8646 37.4959 18.7496 36.7864 20.4627C36.0768 22.1757 34.8752 23.6399 33.3335 24.67C31.7918 25.7002 29.9792 26.25 28.125 26.25C27.1444 26.25 26.4975 26.2313 25.6087 25.9538L22.5 29.0625H18.75V32.8125H15V36.5625H9.375V30Z" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">เปลี่ยนรหัสผ่าน</h3>
            </div>

            <div className="bg-secondary2 mt-10 rounded-lg p-8 text-secondary1 w-[1000px]">
                <div>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">เปลี่ยนรหัสผ่าน</p>

                    </div>
                    <div className="mt-5 leading-loose gap-y-2 flex flex-wrap">

                        <p className="">
                            <strong>รหัสผ่านเดิม </strong>
                        </p>
                        {/* {userData.fname} {userData.lname} */}
                        <input id="oldPassword" type="text" defaultValue="lawwwpss2" className="  w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />



                        <p className="">
                            <strong>รหัสผ่านใหม่ </strong>
                        </p>
                        {/* {userData.tel} */}
                        <input id="newPassword" type="text" defaultValue="0884728951" className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />




                        <p className="">
                            <strong>ยืนยันรหัสผ่านใหม่ </strong>
                            {/* อีเมล@mail.com */}
                        </p>
                        <input id="confirmPassword" type="text" defaultValue="0884728951" className="w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />






                    </div>



                </div>



            </div>
            <div className="flex justify-center my-5">
                <button onClick={handleSave} className="bg-[#18BCEB] h-10 w-24 rounded-3xl text-secondary2">บันทึก</button>
            </div>
        </div>
    )
}
export default PasswordProfile;