
import Link from "next/link";
import { useState } from "react";
import useAxios from "axios-hooks";
import axios from "axios"; 


export default function Appointment() {

    const [{ error: errorMessage, loading: appointmentLoading }, executeappointment] = useAxios({ url: '/api/appointment', method: 'POST' }, { manual: true });
    const [fname, setfname] = useState<string>("");
    const [lname, setlname] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [tel, settel] = useState<string>("");
    const [request, setrequest] = useState<string>("");
    const [message, setmessage] = useState<string>("");
    // const [appointmentimg, setappointmentimg] = useState<string>("");
    const [appointmentimg, setappointmentimg] = useState<File | null>(null);
  
    
  
    const [alertForm, setAlertForm] = useState<string>("not");
    const [inputForm, setInputForm] = useState<boolean>(false);
    const [checkBody, setCheckBody] = useState<string>("");
  
  
    const handleInputChange = (setter: any) => (event: any) => {
      const newValue = event.target.value;
      if (!isNaN(newValue) && !newValue.includes('.')) {
        setter(newValue);
      }
    };
    const reloadPage = () => {
      clear();
    };
  
    const clear = () => {
      setfname("");
      setlname("");
      setemail("");
      settel("");
      setrequest("");
      setmessage("");
      // setappointmentimg("");
  
  
      setappointmentimg(null);
      // setrequest("");
      
      setAlertForm("not");
      setInputForm(false);
      setCheckBody("");
    }
  
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        setappointmentimg(file); // Store the File object
      }
    };
  
    const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      let missingFields = [];
      // Check for missing fields here...
      if (!fname) missingFields.push("fname");
      if (!lname) missingFields.push("lname");
      if (!email) missingFields.push("email");
      if (!tel) missingFields.push("tel");
      if (!request) missingFields.push("request");
      if (!message) missingFields.push("message");
      if (!appointmentimg) missingFields.push("appointmentimg");
  
    
      if (missingFields.length > 0) {
        // Handle missing fields...
        setAlertForm("warning");
        setInputForm(true);
        setCheckBody(`กรอกข้อมูลไม่ครบ: ${missingFields.join(', ')}`);
      } else {
        try {
          setAlertForm("primary"); // set to loading
    
          // Upload the image
          if (appointmentimg) {
            const formData = new FormData();
            formData.append("file", appointmentimg); // Assuming 'appointmentimg' is a File object
            const uploadResponse = await axios.post(
              "https://upload-image.me-prompt-technology.com/",
              formData
            );
    
            if (uploadResponse.status === 200) {
              const responseData = uploadResponse.data;
              const imageId = responseData.result.id;
              
              // Prepare the data to send
              const data = {
                fname,
                lname,
                email,
                tel,
                request,
                message,
                appointmentimg: imageId, // Use the uploaded image ID
                // request,
              };
    
              const response = await executeappointment({ data });
              if (response && response.status === 201) {
                setAlertForm("success");
                setTimeout(() => {
                  clear();
                }, 5000);
              } else {
                setAlertForm("danger");
                throw new Error('Failed to send data');
              }
            } else {
              setAlertForm("danger");
              throw new Error('Image upload failed');
            }
          }
        } catch (error) {
          setAlertForm("danger");
        }
      }
    };
  







    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto p-6 rounded-lg shadow-lg">
                    <h2 className=" font-semibold text-xl lg:text-2xl text-gray-800 mb-4">
                        จองคิวซ่อม
                    </h2>


                    <form className="mt-10 " method="POST">

                        <div className="flex justify-center">
                            <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >ชื่อ
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >นามสกุล
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                        </div>



                        <div className="flex justify-center">
                            <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
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
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />
                                <label
                                    htmlFor="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-[#C6C6C6] dark:text-neutral-200 dark:peer-focus:text-primary"
                                >เบอร์โทรติดต่อ
                                </label>
                                <p className=" bg-[#C6C6C6] w-full h-[1px]"></p>
                            </div>
                        </div>
                    </form>


                    {/* Dropdown for selecting and displaying equipment */}
                    <div className="max-w-md mx-auto mb-4">
                        <label
                            htmlFor="equipment"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            อุปกรณ์ที่ต้องการซ่อม
                        </label>
                        <select
                            id="equipment"
                            className="w-full p-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        >
                            <option value="computers" id="computers">เช็คอุปกรณ์ คอมพิวเตอร์,โน๊ตบุ๊ค</option>
                            <option value="cpu" id="cpu">ซีพียู</option>
                            <option value="motherboard" id="motherboard">เมนบอร์ด</option>
                            <option value="hdd" id="hdd">ฮาร์ดดิส / ssd</option>
                            <option value="ram" id="ram">แรม</option>
                            <option value="others" id="others">อื่นๆ</option>
                        </select>
                    </div>

                    {/* Form for entering equipment description */}
                    <div className="max-w-md mx-auto">
                        <label className="block uppercase tracking-wide text-sm font-medium text-gray-900 mb-2" htmlFor="description">
                            อธิบายอาการของอุปกรณ์พอสังเขป
                        </label>
                        <textarea className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description"></textarea>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="w-[200px] py-3 bg-[#FFCD4B] rounded-lg font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            จองคิว
                        </button>
                    </div>
                </div>




            </div>
        </>
    );
}


