import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectAddress from "./selectaddress_personaldata_profile";


const PersonalData = () => {
    const router = useRouter();
    const { id } = router.query;

    const [UserAddressData, setUserAddressData] = useState([]);
    const [UserData, setUserData] = useState({
        fname: "",
        lname: "",
        tel: "",
        email: "",
    });


    const [isLoading, setIsLoading] = useState(true);

    const [Address, setAddress] = useState("");
    const [Name, setName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Telephone, setTelephone] = useState("");
    const [Email, setEmail] = useState("");


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);


    // Your UserAddressData and other code...

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectAddress = (address: any) => {
        setSelectedAddress(address);
        setIsDropdownOpen(false);
    };


    useEffect(() => {
        if (id) {
            fetch(`/api/user/address/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.id);
                    setUserAddressData(data.Address)
                    console.log(data.Address);


                    // const foundId = data.Address.find((address: { id: String; }) => address.id === data.AddressId);
                    // if (foundId) {
                    //     // เช็คว่ามีที่อยู่ดั่งเดิมไหมถ้ามีเป็น true
                    //     setIsDefaultAddress(true);
                    //     // ค้นเจอ ID ใน data.Address
                    //     // ทำสิ่งที่คุณต้องการกับ foundId
                    //     // console.log(foundId);
                    //     console.log("เจอ id address");
                    //     // ตั้งค่า ID ของ address ที่มีอยู่
                    //     setCurrentAddressId(foundId)
                    // } else {
                    //     // เช็คว่ามีที่อยู่ดั่งเดิมไหมถ้า ไม่มี เป็น false
                    //     setIsDefaultAddress(false);
                    //     // ไม่พบ ID ที่ตรงกันใน data.Address
                    //     console.log('ID ไม่ตรงกับใน data.Address');
                    // }

                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });

        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetch(`/api/user/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.id);
                    setUserData(data);
                    setName(data.fname);
                    setLastName(data.lname);
                    setTelephone(data.tel);
                    setEmail(data.email);
                    // setAddress(data);
                    console.log(data);

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

                        fname: Name,
                        lname: LastName,
                        tel: Telephone,
                        email: Email,
                        AddressId: selectedAddressId,


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

                        fname: Name,
                        lname: LastName,
                        tel: Telephone,
                        email: Email,


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
    }


    return (
        <div className="">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 33 34" fill="none">
                    <path d="M29.015 22.7908L22.643 19.4984L25.0453 15.9973C25.6053 15.1797 25.8991 14.2637 25.9 13.3328V7.79041C25.9 5.72426 24.8675 3.74274 23.0297 2.28176C21.1918 0.820772 18.6991 0 16.1 0C13.5009 0 11.0082 0.820772 9.17037 2.28176C7.33251 3.74274 6.30001 5.72426 6.30001 7.79041V13.3328C6.30088 14.2638 6.5947 15.1798 7.15471 15.9974L9.55703 19.4984L3.18501 22.7908C2.20572 23.2948 1.40104 23.9859 0.844625 24.801C0.288206 25.6161 -0.00218872 26.5291 1.24205e-05 27.4565V33.3875H32.2V27.4565C32.2022 26.5291 31.9118 25.6161 31.3554 24.801C30.799 23.9859 29.9943 23.2948 29.015 22.7908ZM29.4 31.1616H2.80001V27.4565C2.7987 26.9 2.97295 26.3522 3.30682 25.8632C3.64069 25.3741 4.12351 24.9594 4.7111 24.6571L13.2563 20.2416L9.61285 14.9316C9.27685 14.441 9.10055 13.8914 9.10001 13.3328V7.79041C9.10001 6.31459 9.83751 4.89922 11.1503 3.85566C12.463 2.8121 14.2435 2.22583 16.1 2.22583C17.9565 2.22583 19.737 2.8121 21.0498 3.85566C22.3625 4.89922 23.1 6.31459 23.1 7.79041V13.3328C23.0995 13.8914 22.9232 14.441 22.5872 14.9316L18.9438 20.2416L27.4892 24.6571C28.0767 24.9594 28.5595 25.3741 28.8933 25.8632C29.2271 26.3523 29.4014 26.9 29.4 27.4565V31.1616Z" fill="#F4F5F5" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">จัดการข้อมูลส่วนตัว</h3>
            </div>

            <div className="bg-secondary2 mt-10 rounded-lg p-8 text-secondary1 w-[1000px]">
                <div>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">ข้อมูลส่วนตัว</p>

                    </div>
                    <div className="mt-5 leading-loose gap-y-2 flex flex-wrap">

                        <p className="">
                            <strong>ชื่อ </strong>
                        </p>
                        {/* {userData.fname} {userData.lname} */}
                        <input type="text"
                            defaultValue={Name}
                            placeholder="กรุณากรอกชื่อ"
                            onChange={(e) => setName(e.target.value)}
                            className="  w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />

                        <p className="">
                            <strong>นามกุล </strong>
                        </p>
                        {/* {userData.fname} {userData.lname} */}
                        <input type="text"
                            defaultValue={LastName}
                            placeholder="กรุณากรอกนามสกุล"
                            onChange={(e) => setLastName(e.target.value)}
                            className="  w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />



                        <p className="">
                            <strong>เบอร์โทรศัพท์ </strong>
                        </p>
                        {/* {userData.tel} */}
                        <input
                            type="text"
                            defaultValue={Telephone}
                            placeholder="กรุณากรอกเบอร์โทรศัพท์"
                            onChange={(e) => setTelephone(e.target.value)}
                            className=" w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />




                        <p className="">
                            <strong>อีเมล </strong>
                            {/* อีเมล@mail.com */}
                        </p>
                        <input type="text"
                            defaultValue={Email}
                            placeholder="กรุณากรอกอีเมล"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500" />



                        <p className="">
                            <strong>ที่อยู่จัดส่ง </strong>
                            {/* หอพักหญิงอยู่สบาย 193 ถนน 30กันยา , ในเมือง เมืองนครราชสีมา นครราชสีมา 30000 */}
                        </p>
                        {/* <input type="text"
                            placeholder="กรุณากรอกที่อยู่"
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full h-9 pl-2 border border-b-black focus:outline-none focus:border-b-blue-500"
                        /> */}

                        <div className="w-full">
                            <SelectAddress UserAddressData={UserAddressData} onSelectAddress={(addressId) => setSelectedAddressId(addressId)} />

                        </div>




                    </div>



                </div>



            </div>
            <div className="flex justify-center my-5">
                <button
                    // onClick={updateUserAndAddress} 
                    onClick={UpdateUserData}
                    className="bg-[#18BCEB] h-10 w-24 rounded-3xl text-secondary2">บันทึก</button>
            </div>
        </div>
    )
}
export default PersonalData;