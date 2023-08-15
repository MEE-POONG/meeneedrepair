import Link from "next/link";
import RootLayout from "../../components/layout";
import ProductCategory from "../../container/Product/ProductCategory";
import CustomerProfile from "./custom_profile";
import EditProfile from "./EditProfile";

export default function ProfilePage() {
    return (
        <RootLayout>
            <ProductCategory />
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-2">
                        <h3 className="text-3xl text-secondary2 mb-8">จัดการบัญชีผู้ใช้</h3>

                        <div className="ml-5 flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 45 45" fill="none">
                                <path d="M38.6719 4.92188H6.32812C5.55029 4.92188 4.92188 5.55029 4.92188 6.32812V38.6719C4.92188 39.4497 5.55029 40.0781 6.32812 40.0781H38.6719C39.4497 40.0781 40.0781 39.4497 40.0781 38.6719V6.32812C40.0781 5.55029 39.4497 4.92188 38.6719 4.92188ZM36.9141 36.9141H8.08594V8.08594H36.9141V36.9141ZM21.6211 17.5781H29.707C29.9004 17.5781 30.0586 17.4199 30.0586 17.2266V15.1172C30.0586 14.9238 29.9004 14.7656 29.707 14.7656H21.6211C21.4277 14.7656 21.2695 14.9238 21.2695 15.1172V17.2266C21.2695 17.4199 21.4277 17.5781 21.6211 17.5781ZM21.6211 23.9062H29.707C29.9004 23.9062 30.0586 23.748 30.0586 23.5547V21.4453C30.0586 21.252 29.9004 21.0938 29.707 21.0938H21.6211C21.4277 21.0938 21.2695 21.252 21.2695 21.4453V23.5547C21.2695 23.748 21.4277 23.9062 21.6211 23.9062ZM21.6211 30.2344H29.707C29.9004 30.2344 30.0586 30.0762 30.0586 29.8828V27.7734C30.0586 27.5801 29.9004 27.4219 29.707 27.4219H21.6211C21.4277 27.4219 21.2695 27.5801 21.2695 27.7734V29.8828C21.2695 30.0762 21.4277 30.2344 21.6211 30.2344ZM14.9414 16.1719C14.9414 16.6381 15.1266 17.0852 15.4563 17.4148C15.7859 17.7445 16.233 17.9297 16.6992 17.9297C17.1654 17.9297 17.6125 17.7445 17.9422 17.4148C18.2718 17.0852 18.457 16.6381 18.457 16.1719C18.457 15.7057 18.2718 15.2586 17.9422 14.9289C17.6125 14.5993 17.1654 14.4141 16.6992 14.4141C16.233 14.4141 15.7859 14.5993 15.4563 14.9289C15.1266 15.2586 14.9414 15.7057 14.9414 16.1719ZM14.9414 22.5C14.9414 22.9662 15.1266 23.4133 15.4563 23.743C15.7859 24.0726 16.233 24.2578 16.6992 24.2578C17.1654 24.2578 17.6125 24.0726 17.9422 23.743C18.2718 23.4133 18.457 22.9662 18.457 22.5C18.457 22.0338 18.2718 21.5867 17.9422 21.257C17.6125 20.9274 17.1654 20.7422 16.6992 20.7422C16.233 20.7422 15.7859 20.9274 15.4563 21.257C15.1266 21.5867 14.9414 22.0338 14.9414 22.5ZM14.9414 28.8281C14.9414 29.2943 15.1266 29.7414 15.4563 30.0711C15.7859 30.4007 16.233 30.5859 16.6992 30.5859C17.1654 30.5859 17.6125 30.4007 17.9422 30.0711C18.2718 29.7414 18.457 29.2943 18.457 28.8281C18.457 28.3619 18.2718 27.9148 17.9422 27.5852C17.6125 27.2555 17.1654 27.0703 16.6992 27.0703C16.233 27.0703 15.7859 27.2555 15.4563 27.5852C15.1266 27.9148 14.9414 28.3619 14.9414 28.8281Z" fill="#F4F5F5" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >ข้อมูลส่วนตัว
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 33 34" fill="none">
                                <path d="M29.015 22.7908L22.643 19.4984L25.0453 15.9973C25.6053 15.1797 25.8991 14.2637 25.9 13.3328V7.79041C25.9 5.72426 24.8675 3.74274 23.0297 2.28176C21.1918 0.820772 18.6991 0 16.1 0C13.5009 0 11.0082 0.820772 9.17037 2.28176C7.33251 3.74274 6.30001 5.72426 6.30001 7.79041V13.3328C6.30088 14.2638 6.5947 15.1798 7.15471 15.9974L9.55703 19.4984L3.18501 22.7908C2.20572 23.2948 1.40104 23.9859 0.844625 24.801C0.288206 25.6161 -0.00218872 26.5291 1.24205e-05 27.4565V33.3875H32.2V27.4565C32.2022 26.5291 31.9118 25.6161 31.3554 24.801C30.799 23.9859 29.9943 23.2948 29.015 22.7908ZM29.4 31.1616H2.80001V27.4565C2.7987 26.9 2.97295 26.3522 3.30682 25.8632C3.64069 25.3741 4.12351 24.9594 4.7111 24.6571L13.2563 20.2416L9.61285 14.9316C9.27685 14.441 9.10055 13.8914 9.10001 13.3328V7.79041C9.10001 6.31459 9.83751 4.89922 11.1503 3.85566C12.463 2.8121 14.2435 2.22583 16.1 2.22583C17.9565 2.22583 19.737 2.8121 21.0498 3.85566C22.3625 4.89922 23.1 6.31459 23.1 7.79041V13.3328C23.0995 13.8914 22.9232 14.441 22.5872 14.9316L18.9438 20.2416L27.4892 24.6571C28.0767 24.9594 28.5595 25.3741 28.8933 25.8632C29.2271 26.3523 29.4014 26.9 29.4 27.4565V31.1616Z" fill="#F4F5F5" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >จัดการข้อมูลส่วนตัว
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M22.5 12.1875C23.7432 12.1875 24.9355 12.6814 25.8146 13.5604C26.6936 14.4395 27.1875 15.6318 27.1875 16.875C27.1875 17.4906 27.0663 18.1001 26.8307 18.6688C26.5951 19.2375 26.2498 19.7543 25.8146 20.1896C25.3793 20.6248 24.8625 20.9701 24.2938 21.2057C23.7251 21.4413 23.1156 21.5625 22.5 21.5625C21.2568 21.5625 20.0645 21.0686 19.1854 20.1896C18.3064 19.3105 17.8125 18.1182 17.8125 16.875C17.8125 15.6318 18.3064 14.4395 19.1854 13.5604C20.0645 12.6814 21.2568 12.1875 22.5 12.1875ZM22.5 3.75C25.981 3.75 29.3194 5.13281 31.7808 7.59422C34.2422 10.0556 35.625 13.394 35.625 16.875C35.625 26.7188 22.5 41.25 22.5 41.25C22.5 41.25 9.375 26.7188 9.375 16.875C9.375 13.394 10.7578 10.0556 13.2192 7.59422C15.6806 5.13281 19.019 3.75 22.5 3.75ZM22.5 7.5C20.0136 7.5 17.629 8.48772 15.8709 10.2459C14.1127 12.004 13.125 14.3886 13.125 16.875C13.125 18.75 13.125 22.5 22.5 35.0812C31.875 22.5 31.875 18.75 31.875 16.875C31.875 14.3886 30.8873 12.004 29.1291 10.2459C27.371 8.48772 24.9864 7.5 22.5 7.5Z" fill="#F4F5F5" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >จัดการที่อยู่จัดส่ง
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M15 13.125H30M15 20.625H30M15 28.125H22.5M37.5 39.375V9.375C37.5 8.38044 37.1049 7.42661 36.4016 6.72335C35.6984 6.02009 34.7446 5.625 33.75 5.625H11.25C10.2554 5.625 9.30161 6.02009 8.59835 6.72335C7.89509 7.42661 7.5 8.38044 7.5 9.375V39.375L12.1875 35.625L17.8125 39.375L22.5 35.625L27.1875 39.375L32.8125 35.625L37.5 39.375Z" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >ใบเสร็จ/ใบกำกับภาษี
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M9.375 31.875C9.375 32.8696 9.77009 33.8234 10.4733 34.5266C11.1766 35.2299 12.1304 35.625 13.125 35.625C14.1196 35.625 15.0734 35.2299 15.7766 34.5266C16.4799 33.8234 16.875 32.8696 16.875 31.875C16.875 30.8804 16.4799 29.9266 15.7766 29.2234C15.0734 28.5201 14.1196 28.125 13.125 28.125C12.1304 28.125 11.1766 28.5201 10.4733 29.2234C9.77009 29.9266 9.375 30.8804 9.375 31.875ZM28.125 31.875C28.125 32.8696 28.5201 33.8234 29.2234 34.5266C29.9266 35.2299 30.8804 35.625 31.875 35.625C32.8696 35.625 33.8234 35.2299 34.5266 34.5266C35.2299 33.8234 35.625 32.8696 35.625 31.875C35.625 30.8804 35.2299 29.9266 34.5266 29.2234C33.8234 28.5201 32.8696 28.125 31.875 28.125C30.8804 28.125 29.9266 28.5201 29.2234 29.2234C28.5201 29.9266 28.125 30.8804 28.125 31.875Z" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.375 31.875H5.625V24.375M3.75 9.375H24.375V31.875M16.875 31.875H28.125M35.625 31.875H39.375V20.625M39.375 20.625H24.375M39.375 20.625L33.75 11.25H24.375M5.625 16.875H13.125" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >ใบเสร็จ/ใบกำกับภาษี
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.545 8.29501C7.43438 9.71626 5.15625 13.0988 5.15625 17.1319C5.15625 21.2513 6.84375 24.4275 9.25875 27.15C11.2519 29.3925 13.6631 31.2525 16.0144 33.0638C16.5731 33.495 17.1281 33.9244 17.6737 34.3538C18.66 35.1319 19.5394 35.8125 20.3888 36.3094C21.2362 36.8044 21.9188 37.0313 22.5 37.0313C23.0812 37.0313 23.7638 36.8063 24.6112 36.3094C25.4606 35.8125 26.34 35.1319 27.3263 34.3538C27.87 33.9225 28.4269 33.495 28.9856 33.0638C31.3369 31.2525 33.7481 29.3925 35.7412 27.15C38.1581 24.4275 39.8438 21.2513 39.8438 17.1319C39.8438 13.1006 37.5656 9.71626 34.455 8.29501C31.4325 6.91313 27.3713 7.27876 23.5125 11.2894C23.3813 11.4255 23.224 11.5337 23.0501 11.6077C22.8761 11.6816 22.689 11.7197 22.5 11.7197C22.311 11.7197 22.1239 11.6816 21.9499 11.6077C21.776 11.5337 21.6187 11.4255 21.4875 11.2894C17.6287 7.27876 13.5675 6.91313 10.545 8.29501ZM22.5 8.36251C18.165 4.48126 13.3106 3.93751 9.375 5.73563C5.22375 7.63876 2.34375 12.0488 2.34375 17.1338C2.34375 22.1306 4.425 25.9444 7.15687 29.0194C9.34312 31.4813 12.0188 33.5419 14.3831 35.3606C14.9194 35.7731 15.4387 36.1744 15.9319 36.5644C16.8937 37.3219 17.925 38.1281 18.9694 38.7394C20.0138 39.3488 21.2062 39.8456 22.5 39.8456C23.7938 39.8456 24.9862 39.3488 26.0306 38.7394C27.0769 38.1281 28.1063 37.3219 29.0681 36.5644C29.5817 36.1597 30.098 35.7584 30.6169 35.3606C32.9794 33.5419 35.6569 31.4794 37.8431 29.0194C40.575 25.9444 42.6562 22.1306 42.6562 17.1338C42.6562 12.0488 39.7781 7.63876 35.625 5.73938C31.6894 3.93938 26.835 4.48313 22.5 8.36251Z" fill="#F4F5F5" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >รายการโปรด
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M29.0625 18.75C30.6158 18.75 31.875 17.4908 31.875 15.9375C31.875 14.3842 30.6158 13.125 29.0625 13.125C27.5092 13.125 26.25 14.3842 26.25 15.9375C26.25 17.4908 27.5092 18.75 29.0625 18.75Z" fill="#F4F5F5" />
                                <path d="M9.375 30L19.0875 19.4025C18.8119 18.5156 18.75 17.8556 18.75 16.875C18.75 15.0208 19.2998 13.2082 20.33 11.6665C21.3601 10.1248 22.8243 8.92321 24.5373 8.21363C26.2504 7.50406 28.1354 7.31841 29.954 7.68014C31.7725 8.04188 33.443 8.93476 34.7541 10.2459C36.0652 11.557 36.9581 13.2275 37.3199 15.046C37.6816 16.8646 37.4959 18.7496 36.7864 20.4627C36.0768 22.1757 34.8752 23.6399 33.3335 24.67C31.7918 25.7002 29.9792 26.25 28.125 26.25C27.1444 26.25 26.4975 26.2313 25.6087 25.9538L22.5 29.0625H18.75V32.8125H15V36.5625H9.375V30Z" stroke="#F4F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >เปลี่ยนรหัสผ่าน
                            </button>
                        </div>

                        <div className="ml-5 flex gap-1 items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 45 45" fill="none">
                                <path d="M36.5625 14.0625H16.875V9.84375C16.875 8.35191 17.4676 6.92117 18.5225 5.86627C19.5774 4.81138 21.0082 4.21875 22.5 4.21875C25.2018 4.21875 27.6328 6.15234 28.1531 8.71699C28.2304 9.07939 28.4475 9.39666 28.7574 9.59984C29.0673 9.80301 29.4448 9.87567 29.808 9.80202C30.1711 9.72837 30.4905 9.51437 30.6968 9.20652C30.903 8.89868 30.9794 8.52187 30.9094 8.15801C30.1148 4.24512 26.5781 1.40625 22.5 1.40625C20.2629 1.40858 18.1182 2.29827 16.5364 3.88011C14.9545 5.46194 14.0648 7.6067 14.0625 9.84375V14.0625H8.4375C7.69158 14.0625 6.97621 14.3588 6.44876 14.8863C5.92132 15.4137 5.625 16.1291 5.625 16.875V36.5625C5.625 37.3084 5.92132 38.0238 6.44876 38.5512C6.97621 39.0787 7.69158 39.375 8.4375 39.375H36.5625C37.3084 39.375 38.0238 39.0787 38.5512 38.5512C39.0787 38.0238 39.375 37.3084 39.375 36.5625V16.875C39.375 16.1291 39.0787 15.4137 38.5512 14.8863C38.0238 14.3588 37.3084 14.0625 36.5625 14.0625ZM36.5625 36.5625H8.4375V16.875H36.5625V36.5625ZM22.5 19.6875C21.318 19.6879 20.1757 20.1136 19.2818 20.8869C18.3878 21.6601 17.802 22.7292 17.6314 23.8988C17.4607 25.0683 17.7166 26.2603 18.3524 27.2567C18.9881 28.2531 19.9612 28.9875 21.0938 29.3256V32.3438C21.0938 32.7167 21.2419 33.0744 21.5056 33.3381C21.7694 33.6018 22.127 33.75 22.5 33.75C22.873 33.75 23.2306 33.6018 23.4944 33.3381C23.7581 33.0744 23.9062 32.7167 23.9062 32.3438V29.3256C25.0388 28.9875 26.0119 28.2531 26.6476 27.2567C27.2834 26.2603 27.5393 25.0683 27.3686 23.8988C27.198 22.7292 26.6122 21.6601 25.7182 20.8869C24.8243 20.1136 23.682 19.6879 22.5 19.6875ZM22.5 26.7188C22.0828 26.7188 21.675 26.595 21.3281 26.3633C20.9812 26.1315 20.7108 25.802 20.5512 25.4166C20.3915 25.0312 20.3498 24.607 20.4312 24.1979C20.5125 23.7887 20.7134 23.4128 21.0084 23.1178C21.3034 22.8228 21.6793 22.6219 22.0885 22.5405C22.4977 22.4591 22.9218 22.5009 23.3072 22.6606C23.6927 22.8202 24.0221 23.0906 24.2539 23.4375C24.4857 23.7844 24.6094 24.1922 24.6094 24.6094C24.6094 25.1688 24.3871 25.7053 23.9916 26.1009C23.596 26.4965 23.0594 26.7188 22.5 26.7188Z" fill="#F4F5F5" />
                            </svg>
                            <button

                                className="text-secondary2 hover:underline text-[18px]"
                            >ออกจากระบบ
                            </button>
                        </div>
                    </div>
                    <div className="col-span-10">
                        <CustomerProfile />
                        {/* <EditProfile /> */}
                    </div>
                </div>

            </div>
        </RootLayout>
    )
}