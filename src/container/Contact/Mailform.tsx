import Image from "next/image";

const Mailform = () => {
    return (
        <div className="bg-[#F4F5F5] py-16 mt-24">
            <div className="container mx-auto grid md:grid-flow-col justify-center items-center lg:gap-44">
                <div>
                    <p className="text-3xl font-semibold text-center mb-4">ส่งข้อความติดต่อเรา</p>
                    <Image className="mx-auto drop-shadow-lg" src="/images/service.png" width={400} height={400} alt="Picture of Contact page" />
                </div>
                <div>
                    <form action="" className="bg-[#D9D9D9] p-5 rounded-lg">
                        <div>
                            <label htmlFor="" className="">หัวข้อ</label>
                            <input type="text"
                                name=""
                                id=""
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm" />
                        </div>

                        <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    ชื่อ
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    นามสกุล
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="mt-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="col-span-full mt-3">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                รายละเอียด
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about topic.</p>
                        </div>
                        <button
                            type="submit"
                            className="rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            ส่งข้อความ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Mailform;