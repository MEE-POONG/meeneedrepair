import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AddressProfile = () => {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [UserId, setUserId] = useState<String>();
    const [AddressData, setAddressData] = useState<any>(); // กำหนดประเภทของข้อมูลบทความข่าว
    const [CurrentAddressId, setCurrentAddressId] = useState<String>();
    const [IsDefaultAddress, setIsDefaultAddress] = useState<boolean>();

    const [isLoading, setIsLoading] = useState(true);

    const [Name, setName] = useState<String>("");
    const [Lname, setLname] = useState<String>("");
    const [PhoneNumber, setPhoneNumber] = useState<String>("");
    const [TypeAddress, setTypeAddress] = useState<String>("");
    const [AddressLine, setAddressLine] = useState<String>("");
    const [ZipCode, setZipCode] = useState<String>("");
    const [Province, setProvince] = useState<String>("");
    const [District, setDistrict] = useState<String>("");
    const [SubDistrict, setSubDistrict] = useState<String>("");
    const [Note, setNote] = useState<String>("");

    const [CheckDefault, setCheckDefault] = useState(false);
    const [DefaultAddress, setDefaultAddress] = useState<String>("");

    // if (CheckDefault) {
    //     // กระทำอะไรบางอย่างเมื่อ checkbox ถูกเลือก


    // } else {
    //     // กระทำอะไรบางอย่างเมื่อ checkbox ไม่ถูกเลือก
    // }
    // const checkValue = () => {
    //     if (
    //         Name == "" ||
    //         Lname == "" ||
    //         PhoneNumber == "" ||
    //         TypeAddress == "" ||
    //         AddressLine == "" ||
    //         ZipCode == "" ||
    //         Province == "" ||
    //         District == ""
    //     ) {
    //         {
    //             alert("กรุณากรอกข้อมูลให้ครบ")
    //             return;
    //         }

    //     }

    // }

    useEffect(() => {
        if (id) {
            fetch(`/api/user/address/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.id);
                    setUserId(data.id)
                    console.log(data.AddressId);
                    console.log(data.Address);
                    const foundId = data.Address.find((address: { id: String; }) => address.id === data.AddressId);
                    if (foundId) {
                        // เช็คว่ามีที่อยู่ดั่งเดิมไหมถ้ามีเป็น true
                        setIsDefaultAddress(true);
                        // ค้นเจอ ID ใน data.Address
                        // ทำสิ่งที่คุณต้องการกับ foundId
                        // console.log(foundId);
                        // console.log("เจอ id address");
                        // ตั้งค่า ID ของ address ที่มีอยู่
                        setCurrentAddressId(foundId)
                    } else {
                        // เช็คว่ามีที่อยู่ดั่งเดิมไหมถ้า ไม่มี เป็น false
                        setIsDefaultAddress(false);
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


    const UploadAndSetDefault = (UploadData: any) => {
        // กระทำอะไรบางอย่างเมื่อ checkbox ถูกเลือก
        if (
            Name == "" ||
            Lname == "" ||
            PhoneNumber == "" ||
            TypeAddress == "" ||
            AddressLine == "" ||
            ZipCode == "" ||
            Province == "" ||
            District == ""
        ) {
            {
                alert("กรุณากรอกข้อมูลให้ครบ")
                return;
            }

        }

        fetch(`/api/address`, {
            method: 'POST', // หรือเปลี่ยนเป็น 'POST' หากต้องการใช้การสร้างข้อมูลใหม่
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UploadData),
        })
            .then((response) => response.json())
            .then((data2) => {

                fetch(`/api/user/${id}`, {
                    method: 'PUT', // หรือเปลี่ยนเป็น 'POST' หากต้องการใช้การสร้างข้อมูลใหม่
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ AddressId: data2.id }),
                })
                    .then((response) => {
                        if (response.ok) {
                            // หากสำเร็จในการแก้ไขข้อมูล
                            alert("บันทึกข้อมูลสำเร็จ")
                            console.log("บันทึกข้อมูลสำเร็จ")
                            setIsLoading(false);
                        } else {
                            // แสดงข้อผิดพลาดหรือดำเนินการเพิ่มเติมตามที่คุณต้องการ
                            alert("บันทึก ไม่ ข้อมูลสำเร็จ")
                            console.log("บันทึกข้อมูล ไม่ สำเร็จ")
                            console.error('Error:', response.status);
                            setIsLoading(false);
                        }
                    })
                    .catch((error) => {
                        alert("บันทึก ไม่ ข้อมูลสำเร็จ")
                        console.error('Error:', error);
                        setIsLoading(false);
                    });

            })
            .catch((error) => {
                alert("บันทึก ไม่ ข้อมูลสำเร็จ")
                console.error('Error:', error);
                setIsLoading(false);
            });
    }


    const UploadNoDefault = (UploadData: any) => {
        if (
            Name == "" ||
            Lname == "" ||
            PhoneNumber == "" ||
            TypeAddress == "" ||
            AddressLine == "" ||
            ZipCode == "" ||
            Province == "" ||
            District == ""
        ) {
            {
                alert("กรุณากรอกข้อมูลให้ครบ")
                return;
            }

        }

        fetch(`/api/address`, {
            method: 'POST', // หรือเปลี่ยนเป็น 'POST' หากต้องการใช้การสร้างข้อมูลใหม่
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UploadData),
        })
            .then((response) => {
                if (response.ok) {
                    // หากสำเร็จในการแก้ไขข้อมูล
                    alert("บันทึกข้อมูลสำเร็จ")
                    console.log("บันทึกข้อมูลสำเร็จ")
                    setIsLoading(false);
                } else {
                    // แสดงข้อผิดพลาดหรือดำเนินการเพิ่มเติมตามที่คุณต้องการ
                    alert("บันทึก ไม่ ข้อมูลสำเร็จ")
                    console.log("แบันทึกข้อมูล ไม่ สำเร็จ")
                    console.error('Error:', response.status);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                alert("บันทึก ไม่ ข้อมูลสำเร็จ")
                console.error('Error:', error);
                setIsLoading(false);
            });

    }


    const SaveAddress = () => {
        setIsLoading(true);

        const UploadData = {
            name: Name,
            lname: Lname,
            phonenumber: PhoneNumber,
            typeaddress: TypeAddress,
            addressline: AddressLine,
            zipcode: ZipCode,
            province: Province,
            district: District,
            subdistrict: SubDistrict,
            note: Note,
            userId: UserId,
        }


        if (IsDefaultAddress) {
            if (CheckDefault) {
                // กระทำอะไรบางอย่างเมื่อ checkbox ถูกเลือก
                UploadAndSetDefault(UploadData);


            } else {
                // กระทำอะไรบางอย่างเมื่อ checkbox ไม่ถูกเลือก

                UploadNoDefault(UploadData);


            }


        }
        else {


            if (CheckDefault) {
                UploadAndSetDefault(UploadData);


            } else {
                // กระทำอะไรบางอย่างเมื่อ checkbox ไม่ถูกเลือก

                UploadNoDefault(UploadData);


            }



        }



    }


    return (
        <div className="">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                    <path d="M22.5 12.1875C23.7432 12.1875 24.9355 12.6814 25.8146 13.5604C26.6936 14.4395 27.1875 15.6318 27.1875 16.875C27.1875 17.4906 27.0663 18.1001 26.8307 18.6688C26.5951 19.2375 26.2498 19.7543 25.8146 20.1896C25.3793 20.6248 24.8625 20.9701 24.2938 21.2057C23.7251 21.4413 23.1156 21.5625 22.5 21.5625C21.2568 21.5625 20.0645 21.0686 19.1854 20.1896C18.3064 19.3105 17.8125 18.1182 17.8125 16.875C17.8125 15.6318 18.3064 14.4395 19.1854 13.5604C20.0645 12.6814 21.2568 12.1875 22.5 12.1875ZM22.5 3.75C25.981 3.75 29.3194 5.13281 31.7808 7.59422C34.2422 10.0556 35.625 13.394 35.625 16.875C35.625 26.7188 22.5 41.25 22.5 41.25C22.5 41.25 9.375 26.7188 9.375 16.875C9.375 13.394 10.7578 10.0556 13.2192 7.59422C15.6806 5.13281 19.019 3.75 22.5 3.75ZM22.5 7.5C20.0136 7.5 17.629 8.48772 15.8709 10.2459C14.1127 12.004 13.125 14.3886 13.125 16.875C13.125 18.75 13.125 22.5 22.5 35.0812C31.875 22.5 31.875 18.75 31.875 16.875C31.875 14.3886 30.8873 12.004 29.1291 10.2459C27.371 8.48772 24.9864 7.5 22.5 7.5Z" fill="#F4F5F5" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">จัดการที่อยู่จัดส่ง</h3>
            </div>

            <div className="bg-secondary2 mt-10 rounded-lg p-8 text-secondary1 w-[1000px]">
                <div>
                    <p className="text-red-500 text-center mb-5">**แสดงเมื่อกดปุ่ม เพิ่มที่อยู่ หรือ แก้ไข**</p>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">แก้ไขที่อยู่</p>

                    </div>
                    <div className="mt-5 leading-loose">
                        <p className="text-lg">ข้อมูลผู้ติดต่อ</p>

                        <div className="grid grid-cols-12 gap-5 md:ml-10 my-5">

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">ชื่อผู้รับ</p>
                                <input
                                    placeholder="ชื่อผู้รับ"
                                    type="text"
                                    className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">นามสกุลผู้รับ</p>
                                <input
                                    placeholder="นามสกุลผู้รับ"
                                    type="text"
                                    className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">เบอร์โทรศัพท์</p>
                                <input
                                    placeholder="เบอร์โทรศัพท์"
                                    type="text"
                                    className=" w-full h-9 pl-2   border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setPhoneNumber(e.target.value)}

                                />
                            </div>

                        </div>



                        <div className="flex justify-between mt-10">
                            <p className="text-lg">ข้อมูลที่อยู่</p>
                            {/* <p className="text-sm">dsadsa</p> */}
                        </div>

                        <div className="grid grid-cols-12 gap-5 md:ml-10 my-5 ">

                            <div className="col-span-12">
                                <p className="text-[#666363] my-2  ">ประเภทที่อยู่</p>
                                <select
                                    className=" w-full h-9 pl-2  border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setTypeAddress(e.target.value)}
                                >
                                    <option value="" disabled selected hidden >กรุณาเลือก</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>

                            <div className="col-span-12">
                                <p className="text-[#666363] my-2">ที่อยู่</p>
                                <input
                                    placeholder="ที่อยู่"
                                    type="text"
                                    className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setAddressLine(e.target.value)}

                                />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">รหัสไปรษณีย์</p>
                                <input
                                    placeholder="รหัสไปรษณีย์"
                                    type="text"
                                    className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">จังหวัด</p>
                                <select
                                    className=" w-full h-9 pl-2  border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setProvince(e.target.value)}
                                >
                                    <option value="" disabled selected hidden className="text-gray-500">กรุณาเลือกจังหวัด</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">อำเภอ/เขต</p>
                                <select
                                    className=" w-full h-9 pl-2  border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setDistrict(e.target.value)}

                                >
                                    <option value="" disabled selected hidden className="text-gray-500">กรุณาเลือกอำเภอ/เขต</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <p className="text-[#666363] my-2">ตำบล/แขวง</p>
                                <select
                                    className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setSubDistrict(e.target.value)}

                                >
                                    <option value="" disabled selected hidden className="text-gray-500">กรุณาเลือกตำบล/แขวง</option>
                                    <option value="บ้าน">บ้าน</option>
                                    <option value="ที่ทำงาน">ที่ทำงาน</option>
                                    <option value="หอพัก/คอนโด">หอพัก/คอนโด</option>
                                </select>
                            </div>


                            <div className="col-span-12">
                                <p className="text-[#666363] my-2">จุดสังเกตุ (ถ้ามี)</p>
                                <input
                                    placeholder="ข้อมูลเพิ่มเติม"
                                    type="text"
                                    className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500 "
                                    onChange={(e) => setNote(e.target.value)}

                                />
                            </div>




                        </div>

                        <div className="flex flex-row gap-4 ml-10">
                            <input
                                type="checkbox"
                                className="self-center  w-5 h-5 pl-2 ring-2  ring-green-500"
                                onChange={(e) => setCheckDefault(e.target.checked)}
                            />
                            <p className="text-[#666363] my-2">ตั้งเป็นที่อยู่ปัจจุบัน</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <button
                    onClick={SaveAddress}
                    className="bg-[#18BCEB] h-10 w-24 rounded-3xl text-secondary2"
                >
                    บันทึก
                </button>
            </div>
        </div>
    )
}
export default AddressProfile;