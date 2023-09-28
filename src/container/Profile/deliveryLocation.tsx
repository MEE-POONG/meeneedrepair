import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeliveryLocation() {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [deliveryLocationData, setDeliveryLocationData] = useState<any>(); // กำหนดประเภทของข้อมูลบทความข่าว
    const [currentAddressId, setcurrentAddressId] = useState<String>();
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    // const [initialUserData, setInitialUserData] = useState<User>({
    //     fname: "",
    //     lname: "",
    //     email: "",
    //     tel: "",
    //     // loca: "",
    // });
    // const [userData, setUserData] = useState<User>({
    //     fname: "",
    //     lname: "",
    //     email: "",
    //     tel: "",
    //     // loca: "",
    // });


    useEffect(() => {
        if (id) {
            fetch(`/api/user/address/${id}`)
                .then((response) => response.json())
                .then((data) => {

                    // console.log(data.AddressId);
                    // console.log(data.Address);
                    const foundId = data.Address.find((address: { id: String; }) => address.id === data.AddressId);
                    if (foundId) {
                        // ค้นเจอ ID ใน data.Address
                        // ทำสิ่งที่คุณต้องการกับ foundId
                        // console.log(foundId);
                        setcurrentAddressId(foundId)
                    } else {
                        // ไม่พบ ID ที่ตรงกันใน data.Address
                        // console.log('ID ไม่ตรงกับใน data.Address');
                    }

                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });

        }
    }, [id]);

    const handleSave = () => {
        // // สร้างข้อมูลที่จะส่งไปแก้ไข API
        // const updatedUserData = {
        //     fname: userData.fname,
        //     lname: userData.lname,
        //     email: userData.email,
        //     tel: userData.tel,
        //     // loca: userData.loca, // ถ้าคุณต้องการส่งข้อมูล loca ด้วย
        // };

        // // ทำการส่งข้อมูลไปแก้ไข API
        // fetch(`/api/user/${id}`, {
        //     method: 'PUT', // หรือเปลี่ยนเป็น 'POST' หากต้องการใช้การสร้างข้อมูลใหม่
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(updatedUserData),
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             // หากสำเร็จในการแก้ไขข้อมูล
        //             setIsEditing(false); // ปิดโหมดแก้ไข
        //             setInitialUserData(updatedUserData); // อัปเดตข้อมูลเริ่มต้น
        //         } else {
        //             // แสดงข้อผิดพลาดหรือดำเนินการเพิ่มเติมตามที่คุณต้องการ
        //             console.error('Error:', response.status);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        setIsEditing(false);
    };


    const handleCancel = () => {
        // // เมื่อกด "ยกเลิก" ให้กลับค่า userData ให้เป็นค่าเริ่มต้น
        // setUserData(initialUserData);
        setIsEditing(false);
    };


    return (
        <>
            <div className="mt-10">
                {!isEditing ? (
                    <div>
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold">จัดการที่อยู่จัดส่ง</p>
                            <button
                                className="flex hover:text-natural04"
                                onClick={() => setIsEditing(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                แก้ไข
                            </button>
                        </div>
                        <div className="mt-5 leading-loose">
                            <p>
                                <strong>ชื่อผู้รับ :</strong>
                                {/* {deliveryLocationData?.name} */}
                            </p>

                            <p>
                                <strong>นามสกุลผู้รับ :</strong>
                            </p>
                            <p>
                                <strong>เบอร์โทรศัพท์ :</strong>

                            </p>
                            <p>
                                <strong>อีเมล :</strong>

                            </p>
                            <p>
                                <strong>ที่อยู่จัดส่ง :</strong>

                            </p>
                        </div>
                    </div>

                ) : (


                    <div className="mt-5 leading-loose">
                        <p>
                            <strong>ชื่อผู้รับ :</strong>
                            <input
                                type="text"
                                value={"dsadsa"}
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />
                        </p>

                        <p>
                            <strong>นามสกุลผู้รับ :</strong>
                            <input
                                type="text"
                                value={"dsadsa"}
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />
                        </p>

                        <p>
                            <strong>เบอร์โทรศัพท์ :</strong>
                            <input
                                type="text"
                                value="2322"
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />

                        </p>
                        <p>
                            <strong>อีเมล :</strong>
                            <input
                                type="text"
                                value="daa@asdaa"
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />

                        </p>
                        <p>
                            <strong>ที่อยู่จัดส่ง :</strong>
                            <input
                                type="text"
                                value="21/1 fde rd, wdasd"
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />

                        </p>
                        <div className="my-2">
                            <button onClick={handleSave} className="bg-green-500 text-white w-16 h-8 rounded">บันทึก</button>
                            <button onClick={handleCancel} className="ml-2 bg-red-500 text-white w-16 h-8 rounded">ยกเลิก</button>
                        </div>
                    </div>
                )}
                <div className="w-full h-0.5 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mt-5"></div>

            </div>

        </>
    )
}