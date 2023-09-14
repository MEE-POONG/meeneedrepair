import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

<div className="absolute left-[650px] ">
<h1 className="absolute w-[400px] text-white text-center text-3xl  font-bold">เข้าสู่ระบบ</h1>
<div className="absolute w-[400px] top-[100px] text-white text-1xl ">
    <div className="relative mb-6" data-te-input-wrapper-init>
        <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput3"
            placeholder="Email address" />
        <label
            htmlFor="exampleFormControlInput3"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >อีเมลล์
        </label>
        <p className=" bg-white w-[350px] h-[2px]"></p>
    </div>

    <div className="relative mb-6 " data-te-input-wrapper-init>
        <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput3"
            placeholder="Email address" />
        <label
            htmlFor="exampleFormControlInput3"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >รหัสผ่าน
        </label>
        <p className=" bg-white w-[350px] h-[2px]"></p>
    </div>

    
    <div className="flex">
        <button className="group relative h-12 w-[350px] overflow-hidden rounded-2xl bg-[#0F172A]  text-1xl font-bold text-white">
            เข้าสู่ระบบ
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
    </div>
    <div className="flex justify-center items-center absolute w-[350px] text-white text-center text-1xl mx-[] my-[20px]">
        <span className="w-full border border-white"></span>
        <span className="px-4">หรือ</span>
        <span className="w-full border border-white"></span>
    </div>
    <button className="absolute flex w-[350px] text-white text-center text-1xl  my-[70px] justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-2xl font-medium bg-[#1879EB]">
        <span className="absolute left-4 text-[25px]">
            <FaFacebook />
        </span>
        <span >เข้าสู่ระบบด้วย Facebook</span>
    </button>
    <button className="absolute flex w-[350px] text-white text-center text-1xl my-[140px] justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-2xl font-medium bg-[#0F172A]">
        <span className="absolute left-4 text-[25px]">
            <FaGoogle />
        </span>
        <span>เข้าสู่ระบบด้วย Google</span>
    </button>

    <p className="absolute text-white top-[500px] ">ลืมรหัสผ่าน</p>
    <button className="absolute top-[260px] justify-center flex w-[350px] text-white text-center text-1xl my-[140px] md:px-4 md:py-3 font-medium ">
        <span className="absolute ">
        </span>
        <Link className="mx-3 " href="./login/forgetpassword">
            <span>ลืมรหัสผ่าน?</span>
        </Link>

    </button>
    <div className="">
        <p className=""></p>
        <button className="absolute top-[320px] justify-center w-[350px] text-white text-center text-1xl my-[140px] md:px-4 md:py-3 font-medium ">
            <span className="absolute ">
            </span>
            <p >ยังไม่มีบัญชีผู้ใช้?</p>
            <Link className="mx-3 " href="/register">
                <span className="text-[#18BCEB]">สมัครสมาชิกใหม่</span>
            </Link>
        </button>
    </div>
</div>
</div>