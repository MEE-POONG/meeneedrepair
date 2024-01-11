import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from '@prisma/client';
import SelectAddress from "./selectaddress_personaldata_profile";


export default function DeliveryLocation() {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [deliveryLocationData, setDeliveryLocationData] = useState<any>(); // กำหนดประเภทของข้อมูลบทความข่าว
    // const [CurrentAddressId, setCurrentAddressId] = useState<String>();
    const [CurrentAddress, setCurrentAddress] = useState<any>({});
    const [UserAddressData, setUserAddressData] = useState<any>({});
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);


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
                        setCurrentAddress(foundId);
                        setUserAddressData(data.Address);
                        // console.log(foundId)


                    } else {
                        // ไม่พบ ID ที่ตรงกันใน data.Address
                        setUserAddressData(data.Address);
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
        if (!selectedAddressId) { // ตรวจสอบว่า selectedAddressId เป็น falsy หรือ null
            alert('กรุณาเลือกที่อยู่');
            return; // จบการทำงานของฟังก์ชัน
        }

        if (id) {

            fetch(`/api/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    AddressId: selectedAddressId,


                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // ทำอะไรกับข้อมูลที่ได้จาก API (เช่น แสดงข้อความสำเร็จ)
                    alert('แก้ไขที่อยู่เริ่มต้นเรียบร้อยแล้ว');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });




        }



        setIsEditing(false);
        router.reload();
    };


    const handleCancel = () => {
        // // เมื่อกด "ยกเลิก" ให้กลับค่า userData ให้เป็นค่าเริ่มต้น
        // setUserData(initialUserData);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (!selectedAddressId) { // ตรวจสอบว่า selectedAddressId เป็น falsy หรือ null
            alert('กรุณาเลือกที่อยู่');
            return; // จบการทำงานของฟังก์ชัน
        }

        if (id) {

            fetch(`/api/address/${selectedAddressId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    AddressId: selectedAddressId,


                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // ทำอะไรกับข้อมูลที่ได้จาก API (เช่น แสดงข้อความสำเร็จ)
                    alert('ลบข้อมูลทีอยู่เรียบร้อยแลว');
                    setIsEditing(false);
                    router.reload();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });




        }




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
                                <strong>ชื่อผู้รับ : </strong> {CurrentAddress.name}  {CurrentAddress.lname}
                            </p>
                            <p>
                                <strong>เบอร์โทรศัพท์ : </strong>
                                {CurrentAddress.phonenumber}
                            </p>
                            <p>
                                <strong>ที่อยู่จัดส่ง : </strong>
                                {CurrentAddress.addressline} {CurrentAddress.district}  {CurrentAddress.province}  {CurrentAddress.subdistrict}  {CurrentAddress.zipcode}  {CurrentAddress.note}
                            </p>
                        </div>
                    </div>

                ) : (


                    <div className="mt-5 leading-loose">
                        qaewdc aqsxrf4
                        {/* <p>
                            <strong>ชื่อผู้รับ :</strong>
                            <input
                                type="text"
                                value={CurrentAddress.name}
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />

                            <input
                                type="text"
                                value={CurrentAddress.lname}
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />
                        </p>



                        <p>
                            <strong>เบอร์โทรศัพท์ :</strong>
                            <input
                                type="text"
                                value={CurrentAddress.phonenumber}
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            />

                        </p> */}

                        <p>
                            <strong>ที่อยู่จัดส่ง :</strong>
                            {/* <input
                                type="text"
                                value="21/1 fde rd, wdasd"
                                // onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
                                className="border border-b-black focus:outline-none focus:border-b-blue-500 pl-2 mr-2"
                            /> */}

                            <SelectAddress UserAddressData={UserAddressData} onSelectAddress={(id) => setSelectedAddressId(id)} />


                        </p>
                        <div className="my-2">
                            <button onClick={handleSave} className="bg-green-500 text-white w-16 h-8 rounded">บันทึก</button>
                            <button onClick={handleDelete} className="ml-2 bg-gray-500 text-white w-16 h-8 rounded">ลบ</button>

                            <button onClick={handleCancel} className="ml-2 bg-red-500 text-white w-16 h-8 rounded">ยกเลิก</button>

                        </div>
                    </div>
                )}
                <div className="w-full h-0.5 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mt-5"></div>

            </div>

        </>
    )
}