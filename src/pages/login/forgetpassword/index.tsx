export default function ForgetPassWord() {
    return (
        <>
            
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
                    <h1 className="text-center text-2xl mb-4">เปลี่ยนรหัสผ่าน</h1>
                     <div className="relative mb-6 w-full" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput3"
                        placeholder="Email address" />
                    <label
                        htmlFor="exampleFormControlInput3"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                    >อีเมล
                    </label>
                    <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        {/* Input field */}
                    </div>

                    <button className="bg-[#FFCD4B] w-[200px] h-[60px] rounded-xl mx-auto block">
                        ขอเปลี่ยนรหัสผ่าน
                    </button>
                </div>
            </div>

        </>
    )
}