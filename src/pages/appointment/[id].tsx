
import Link from "next/link";
import RootLayout from "../../components/layout";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAxios from "axios-hooks";

// import LatestUser from "../../container/User/LatestUser";


const ReadUserDetail = () => {
    const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
        { url: '/api/appointment', method: 'POST' },
        { manual: true }
    )
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [user, setUser] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [isLoading, setIsLoading] = useState(true);
    const [UserData, setUserData] = useState({
        fname: "",
        lname: "",
        tel: "",
        email: "",
        userId:""
    });

    useEffect(() => {
        console.log('ID:', id);
        if (id) {
            fetch(`/api/user/appointment/${id}`)
                .then((response) => response.json())
                .then((userData) => {
                    console.log('user Data:', userData);
                    setUser(userData);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false);
                });
        }
    }, [id]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [request, setRequest] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [userId, setuserId] = useState<string>("");
    const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
    const [isMissSignIn, setIsMissSignIn] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [missingFields, setMissingFields] = useState<string[]>([]);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // ตรวจสอบว่าข้อมูลถูกกรอกครบถ้วน
        if (!fname || !lname || !email || !tel || !time || !request || !message) {
            // ถ้าข้อมูลไม่ครบถ้วน ให้แสดง modal แจ้งเตือน
            setIsMissingModalOpen(true);
            return;
        }

        // ส่งข้อมูลไปยัง API
        try {
            setIsLoading(true);
            const response = await executeIndexActivity({
                data: {
                    fname,
                    lname,
                    time,
                    request,
                    email,
                    tel,
                    message,
                    userId,
                    // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
                },
            });
            // ประมวลผลเมื่อสำเร็จ
            setIsLoading(false);
            setIsSuccess(true);
            setMessage("สำเร็จ! คุณได้ทำการจองคิวเรียบร้อยแล้ว");

            // setIsDataSent(true); 
            // สร้าง state isDataSent และตั้งค่าเป็น true
            setIsModalOpen(true);
        } catch (error) {
            // ประมวลผลเมื่อเกิดข้อผิดพลาด
            setIsLoading(false);
            setIsSuccess(false);
            setMessage("เกิดข้อผิดพลาดในการจองคิว");
        }
    };

    // เรียกใช้งานฟังก์ชันเมื่อกดปุ่ม "จองคิว"
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // เรียกใช้งานฟังก์ชันเมื่อกดปุ่ม "ยกเลิก"
    const handleCloseModal = () => {

        window.location.reload();
        // setIsModalOpen(false);
    };
    const handleConfirm = () => {

        window.location.reload();
        // ทำสิ่งที่คุณต้องการเมื่อยืนยัน
        // ตัวอย่าง: ปิด Modal
        setIsModalOpen(false);

    };
    //
    useEffect(() => {
        if (id) {
            fetch(`/api/user/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.id);
                    setUserData(data);
                    setFname(data.fname);
                    setLname(data.lname);
                    setTel(data.tel);
                    setEmail(data.email);
                    setRequest(data.request)
                    setuserId(data.userId)
                    // setAddress(data);
                    // console.log(data);

                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });

        }
    }, [id]);

    const UpdateUserData = () => {
        if (id) {

            if (selectedAddressId !== null) {
                fetch(`/api/user/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        fname: fname,
                        lname: lname,
                        tel: tel,
                        email: email,
                        request: request,
                        userId:userId,
                        // AddressId: selectedAddressId,


                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // ทำอะไรกับข้อมูลที่ได้จาก API (เช่น แสดงข้อความสำเร็จ)
                        alert('บันทึกข้อมูลเรียบร้อยแล้ว');
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            } else {

                fetch(`/api/user/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        fname: fname,
                        lname: lname,
                        tel: tel,
                        email: email,
                        request: request,
                        userId:userId,

                    }),
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

        }
    }//

    const [CheckDefault, setCheckDefault] = useState(false);
    const [CurrentAddressId, setCurrentAddressId] = useState<String>();
    const [IsDefaultAddress, setIsDefaultAddress] = useState<boolean>();
    const [UserId, setUserId] = useState<String>();
    useEffect(() => {
        if (id) {
            fetch(`/api/user/appointment/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.id);
                    setUserId(data.id)
                    // console.log(data.AddressId);
                    // console.log(data.Address);
                    const foundId = data.Address.find((appointment: { id: String; }) => appointment.id === data.AddressId);
                    if (foundId) {
                        // เช็คว่ามีที่อยู่ดั่งเดิมไหมถ้ามีเป็น true
                        setIsDefaultAddress(true);
                        // ค้นเจอ ID ใน data.Address
                        // ทำสิ่งที่คุณต้องการกับ foundId
                        // console.log(foundId);
                        // console.log("เจอ id appointment");
                        // ตั้งค่า ID ของ appointment ที่มีอยู่
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
            fname == "" ||
            lname == "" ||
            tel == "" ||
            email == "" ||
            userId == "" ||
            request == ""

        ) {
            {
                alert("กรุณากรอกข้อมูลให้ครบ")
                return;
            }

        }
        fetch(`/api/appointment`, {
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
                            router.reload();
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
            fname == "" ||
            lname == "" ||
            tel == "" ||
            email == "" ||
            userId == "" ||
            request == ""
        ) {
            {
                alert("กรุณากรอกข้อมูลให้ครบ")
                return;
            }

        }

        fetch(`/api/appointment`, {
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
                    router.reload();
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
                fname: fname,
                lname: lname,
                tel: tel,
                email: email,
                request: request,
                userid: UserId
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
            <RootLayout>

                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto p-6 rounded-lg shadow-lg">
                        <h2 className=" font-semibold text-xl lg:text-2xl text-gray-800 mb-4">
                            จองคิวซ่อม
                        </h2>
                        <form >
                            <div className="flex justify-center">
                                <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                                    <div className='mb-2'>ชื่อ</div>
                                    <input
                                        type="text" defaultValue={fname} onChange={(e) => setFname(e.target.value)}
                                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                                        placeholder="ชื่อ"
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <div className='mb-2'>นามสกุล</div>
                                    <input
                                        type="text" defaultValue={lname} onChange={(e) => setLname(e.target.value)}
                                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                                        id="exampleFormControlInput3"
                                        placeholder="นามสกุล" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                                    <div className='mb-2'>อีเมล</div>
                                    <input
                                        type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                                        placeholder="อีเมล" />

                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <div className='mb-2'>เบอร์โทรติดต่อ</div>
                                    <input
                                        type="number" defaultValue={tel} onChange={(e) => setTel(e.target.value)}
                                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10 resize-none"
                                        id="exampleFormControlInput3"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        placeholder="เบอร์โทรติดต่อ" />

                                </div>
                            </div>
                            <div className="max-w-md mx-auto mb-4" data-te-input-wrapper-init>
                                <div className='mb-2'>ต้องการจองคิววันที่</div>
                                <input
                                    type="date" value={time} onChange={(e) => setTime(e.target.value)}
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
                                <select
                                    id="equipment"
                                    value={request}
                                    onChange={(e) => setRequest(e.target.value)}
                                    className="w-full p-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                >
                                    <option value="1" id="1">
                                        เลือกอุปกรณ์ที่ต้องการซ่อม
                                    </option>
                                    <option value="computers" id="computers">
                                        เช็คอุปกรณ์ คอมพิวเตอร์,โน๊ตบุ๊ค
                                    </option>
                                    <option value="cpu" id="cpu">
                                        ซีพียู
                                    </option>
                                    <option value="motherboard" id="motherboard">
                                        เมนบอร์ด
                                    </option>
                                    <option value="hdd" id="hdd">
                                        ฮาร์ดดิส / ssd
                                    </option>
                                    <option value="ram" id="ram">
                                        แรม
                                    </option>
                                    <option value="others" id="others">
                                        อื่นๆ
                                    </option>
                                </select>
                                {/* เพิ่มปุ่มหรือเหตุการณ์เมื่อคลิกเพื่อบันทึกค่าในฐานข้อมูล */}
                            </div>
                            <div className="max-w-md mx-auto">
                                <label className="block uppercase tracking-wide text-sm font-medium text-gray-900 mb-2" htmlFor="description">
                                    อธิบายอาการของอุปกรณ์พอสังเขป
                                </label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description" placeholder="กรุณากรอกข้อมูล"></textarea>
                            </div>

                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    onClick={handleSubmit} // เรียกใช้ฟังก์ชัน handleSubmit ในการตรวจสอบข้อมูล
                                    className="w-[200px] py-3 bg-[#FFCD4B] rounded-lg font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
                                >
                                    จองคิว
                                </button>
                            </div>

                            {/* Modal แจ้งเตือน */}
                            {isMissingModalOpen && (
                                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                                    <div className="bg-white p-6 rounded-lg text-center">
                                        <p className="text-red-500 text-lg mb-4">กรุณากรอกข้อมูลให้ครบถ้วน</p>
                                        <button
                                            onClick={() => setIsMissingModalOpen(false)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none"
                                        >
                                            ปิด
                                        </button>
                                    </div>
                                </div>
                            )}

                            {isModalOpen &&
                                (
                                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                                        <div className="bg-white p-6 rounded-lg">
                                            <p className="text-2xl font-semibold mb-4">ยืนยันการจองคิว</p>
                                            <p>คุณต้องการจองคิวหรือไม่?</p>
                                            <div className="mt-4 flex justify-end">
                                                <button
                                                    onClick={() => setIsMissingModalOpen(false)}
                                                    className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                                                >
                                                    ยกเลิก
                                                </button>
                                                <button
                                                    onClick={handleConfirm} // เรียกใช้งานเมื่อกดปุ่ม "ยืนยัน"
                                                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                                                >
                                                    ยืนยัน
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </form>

                    </div>
                </div>


            </RootLayout>
        )
    }
    export default ReadUserDetail;