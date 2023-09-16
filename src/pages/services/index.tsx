import Link from "next/link";
import RootLayout from "../../components/layout";
import SlideServices from '../../container/Services/SlideServices';
import SlideServices2 from '../../container/Services/SlideServices2';
import BookingModal from "../../container/Services/BookingModal";


export default function AdviserService() {
    return (
        <>
            <RootLayout>

                {/* <img src="../images/bgtest.png" alt="" className=" w-screen h-[400px]" /> */}
                {/* <SlideServices /> */}
                <SlideServices />

                <div className="text-center my-[50px]">
                    <div className="w-64 h-1 bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] mx-auto mb-10"></div>
                    <div className="text-white text-4xl md:text-5xl font-bold">
                        บริการของเรา
                    </div>
                </div>



                <div className="space-y-5 mx-10 lg:flex lg:justify-center lg:space-x-5 lg:space-y-0">

                    <div className="text-white text-center bg-[#1E293B] p-6 md:p-16 rounded-xl">

                        <svg className="mx-auto my-5" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                            <g clipPath="url(#clip0_240_17)">
                                <path d="M122.326 110.558C123.807 110.56 125.233 111.127 126.31 112.145C127.388 113.162 128.036 114.552 128.123 116.031C128.21 117.511 127.729 118.967 126.778 120.104C125.826 121.24 124.477 121.97 123.006 122.145L122.326 122.186H17.6745C16.1926 122.184 14.7673 121.617 13.6898 120.6C12.6122 119.582 11.9638 118.192 11.8769 116.713C11.7901 115.234 12.2714 113.777 13.2225 112.641C14.1736 111.504 15.5227 110.774 16.9942 110.599L17.6745 110.558H122.326ZM110.698 23.3489C113.631 23.3479 116.457 24.4559 118.608 26.4506C120.759 28.4453 122.077 31.1794 122.297 34.1047L122.326 34.9768V93.1163C122.327 96.0499 121.219 98.8754 119.224 101.026C117.229 103.178 114.495 104.495 111.57 104.715L110.698 104.744H29.3024C26.3688 104.745 23.5433 103.637 21.3922 101.643C19.2411 99.6478 17.9235 96.9137 17.7035 93.9884L17.6745 93.1163V34.9768C17.6735 32.0432 18.7815 29.2177 20.7762 27.0666C22.7709 24.9156 25.5049 23.598 28.4303 23.3779L29.3024 23.3489H110.698Z" fill="#F4F5F5" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_240_15" x1="6.9602" y1="39.8678" x2="63.2227" y2="39.8678" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#ffff" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">บริการติดตั้งโปรแกรม</h3>
                        <p className="text-md mt-8">
                            ให้บริการติดตั้งโปรแกรม ออนไลน์และออนไซต์
                        </p>
                    </div>





                    <div className="text-[#1E293B] text-center bg-[#F4F5F5] p-6 md:p-16 rounded-xl">

                        <svg className="mx-auto my-5" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                            <path d="M122.093 46.5116C125.177 46.5116 128.135 47.7367 130.315 49.9173C132.496 52.098 133.721 55.0556 133.721 58.1395V81.3953C133.721 84.4792 132.496 87.4368 130.315 89.6175C128.135 91.7981 125.177 93.0232 122.093 93.0232H115.919C114.501 104.263 109.031 114.6 100.533 122.093C92.0362 129.586 81.0966 133.721 69.7675 133.721V122.093C79.0192 122.093 87.892 118.418 94.434 111.876C100.976 105.334 104.651 96.461 104.651 87.2093V52.3256C104.651 43.0738 100.976 34.201 94.434 27.659C87.892 21.1171 79.0192 17.4418 69.7675 17.4418C60.5157 17.4418 51.6429 21.1171 45.1009 27.659C38.559 34.201 34.8837 43.0738 34.8837 52.3256V93.0232H17.4419C14.358 93.0232 11.4004 91.7981 9.2197 89.6175C7.03904 87.4368 5.81396 84.4792 5.81396 81.3953V58.1395C5.81396 55.0556 7.03904 52.098 9.2197 49.9173C11.4004 47.7367 14.358 46.5116 17.4419 46.5116H23.6163C25.0351 35.2726 30.5063 24.9376 39.0033 17.4458C47.5004 9.95393 58.4393 5.82019 69.7675 5.82019C81.0956 5.82019 92.0345 9.95393 100.532 17.4458C109.029 24.9376 114.5 35.2726 115.919 46.5116H122.093ZM45.1163 91.7732L51.2791 81.9128C56.8202 85.3839 63.2289 87.2198 69.7675 87.2093C76.306 87.2198 82.7147 85.3839 88.2558 81.9128L94.4186 91.7732C87.0306 96.402 78.4857 98.8506 69.7675 98.8372C61.0491 98.8509 52.5042 96.4023 45.1163 91.7732Z" fill="#1E293B" />
                            <defs>
                                <linearGradient id="paint0_linear_240_15" x1="6.9602" y1="39.8678" x2="63.2227" y2="39.8678" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#CA0808" />
                                    <stop offset="1" stopColor="#0FC0E7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">ให้คำปรึกษา</h3>
                        <p className="text-md mt-8">
                            ให้คำปรึกษา แก้ไขปัญหาเกี่ยวกับเทคโนโลยีและไอที
                        </p>
                    </div>







                    <div className="text-white text-center bg-[#1E293B] p-6 md:p-16 rounded-xl">

                        <svg className="mx-auto my-5" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">

                            <g clip-path="url(#clip0_340_28)">
                                <path d="M87.6635 9.99273C88.4508 11.3554 89.1624 12.6575 89.7983 13.899C90.4342 15.1405 91.0096 16.3972 91.5243 17.669C92.0391 18.9408 92.4025 20.258 92.6145 21.6206C92.8264 22.9833 92.9627 24.4973 93.0233 26.1628C93.0233 28.555 92.7204 30.8563 92.1148 33.0669C91.5092 35.2774 90.6311 37.3668 89.4804 39.335C88.3297 41.3033 86.9519 43.0747 85.347 44.6493C83.7421 46.224 81.9707 47.5866 80.0327 48.7373C78.0947 49.888 76.0205 50.7661 73.81 51.3717C71.5994 51.9773 69.2829 52.2953 66.8605 52.3256C66.164 52.3256 65.4675 52.2953 64.7711 52.2347C64.0746 52.1742 63.363 52.0833 62.6363 51.9622L26.0265 88.5719C24.573 90.0254 22.9227 91.1307 21.0756 91.8877C19.2284 92.6447 17.2753 93.0233 15.2162 93.0233C13.1268 93.0233 11.1586 92.6296 9.31141 91.8423C7.46427 91.055 5.85938 89.9649 4.49673 88.5719C3.13408 87.179 2.04397 85.559 1.22638 83.7118C0.408794 81.8647 0 79.8964 0 77.807C0 75.7782 0.378513 73.8402 1.13554 71.9931C1.89256 70.146 2.99782 68.4805 4.45131 66.9967L41.061 30.387C40.9399 29.6905 40.8491 28.9941 40.7885 28.2976C40.728 27.6011 40.6977 26.8895 40.6977 26.1628C40.6977 23.7706 41.0005 21.4692 41.6061 19.2587C42.2117 17.0482 43.0899 14.9588 44.2406 12.9906C45.3912 11.0223 46.769 9.25085 48.3739 7.67624C49.9788 6.10162 51.7502 4.73898 53.6882 3.5883C55.6262 2.43762 57.7005 1.55947 59.911 0.953852C62.1215 0.348232 64.438 0.030281 66.8605 0C68.4956 0 69.9945 0.121124 71.3572 0.363372C72.7198 0.60562 74.0522 0.984133 75.3543 1.49891C76.6564 2.01369 77.913 2.57389 79.1243 3.17951C80.3355 3.78513 81.6376 4.51187 83.0305 5.35974L65.1344 23.2558L69.7674 27.8888L87.6635 9.99273ZM66.8605 46.5116C69.6766 46.5116 72.311 45.9817 74.7638 44.9219C77.2166 43.862 79.3665 42.4086 81.2137 40.5614C83.0608 38.7143 84.5143 36.5643 85.5741 34.1116C86.634 31.6588 87.179 29.0092 87.2093 26.1628C87.2093 23.9523 86.8459 21.8175 86.1192 19.7584L69.7674 36.0647L56.9586 23.2558L73.2649 6.90407C71.2058 6.17733 69.071 5.81395 66.8605 5.81395C64.0443 5.81395 61.4099 6.34387 58.9571 7.40371C56.5044 8.46354 54.3544 9.91703 52.5073 11.7642C50.6601 13.6113 49.2066 15.7613 48.1468 18.214C47.087 20.6668 46.5419 23.3164 46.5116 26.1628C46.5116 27.2226 46.6025 28.2522 46.7842 29.2515C46.9658 30.2507 47.1778 31.25 47.4201 32.2493L8.58467 71.1301C7.70652 72.0082 7.02519 73.0227 6.5407 74.1733C6.0562 75.324 5.81395 76.5352 5.81395 77.807C5.81395 79.0788 6.0562 80.2901 6.5407 81.4408C7.02519 82.5914 7.70652 83.5907 8.58467 84.4386C9.46281 85.2865 10.4621 85.9526 11.5825 86.4371C12.7029 86.9216 13.9141 87.179 15.2162 87.2093C16.488 87.2093 17.6992 86.9671 18.8499 86.4826C20.0006 85.9981 21.015 85.3167 21.8932 84.4386L60.774 45.6032C61.7733 45.8454 62.7725 46.0574 63.7718 46.2391C64.7711 46.4208 65.8006 46.5116 66.8605 46.5116Z" fill="#F4F5F5" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_240_15" x1="6.9602" y1="39.8678" x2="63.2227" y2="39.8678" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#ffff" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">บริการซ่อมบำรุง</h3>
                        <p className="text-md mt-8">
                            บริการซ่อมบำรุง ทั้งในและนอกสถานที่
                        </p>
                    </div>




                </div>




                <div className=" lg:flex lg:justify-center lg:items-center lg:space-x-10  md:space-x-10 md:space-y-0 my-10 space-y-10 text-center   ">
                    {/* <button className=" w-[250px] h-[100px] bg-[#FFCD4B] rounded-2xl text-2xl">จองซ่อม </button> */}
                    <BookingModal />
                    <button className=" w-[250px] h-[100px] bg-[#18BCEB] rounded-2xl text-2xl">ปรึกษา </button>
                </div>




                <div className=" bg-white w-full">


                    <div className="">
                        <h1 className="text-black text-3xl md:text-5xl font-bold text-center py-10">
                            ตัวอย่างบริการของเรา
                        </h1>
                        {/* <div className=" flex justify-center my-5 ">
                            <img src="../images/imgsevice/s1.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s2.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s3.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s5.jpg" alt="" className="w-[250px] mx-5 " />
                            <img src="../images/imgsevice/s6 .jpg" alt="" className="w-[250px] mx-5 " />
                        </div> */}
                        <div className="lg:p-20">
                            <SlideServices2 />
                        </div>


                    </div>

                </div>




            </RootLayout>
        </>
    )
}