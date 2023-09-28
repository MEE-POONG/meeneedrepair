// import { SetStateAction, useState } from 'react';
// import useAxios from "axios-hooks";
// import RootLayout from '../../components/layout';

// function RegisterFrom() {

//     const [email, setEmail] = useState('');


//     const [errorText, setErrorText] = useState(false);
//     const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

//     const [{ error: errorpassword, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
//         { url: '/api/user', method: 'POST' },
//         { manual: true }
//     );

//     const handleSubmit = async (e: { preventDefault: () => void; }) => {
//         e.preventDefault();

//         if ( !email) {

//             setErrorText(true);
//             return;
//         }
//         try {
//             const response = await executeIndexActivity({
//                 data: {  email},
//             });
//             console.log('Response:', response);
//             setShowModal(true);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className=''>
//             <RootLayout>
//                 <div className="font-fontTH01 bg-gradient-to-br max-w-2xl mx-auto  bg-opacity-50  w-[300px] sm:w-12 md:w-6/12 lg:w-6/12 2xl:w-5/12  px-6 py-10 sm:px-10 sm:py-6  rounded-lg shadow-md lg:shadow-lg ">
//                     <form className="mt-10 " method="POST" onSubmit={handleSubmit}>
//                         <div className="mb-6 my-5">
//                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Email address</label>
//                             <input type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" required />
//                         </div>
                       
//                         <button type="submit"
//                             className="group relative h-12 w-full overflow-hidden rounded-2xl bg-red-700 text-white  text-1xl font-bold ">
//                             สมัครสมาชิก
//                         </button>
//                     </form>
//                 </div>
//             </RootLayout>

//         </div>

//     );
// }

// export default RegisterFrom;


import React, { useState } from 'react';
import crypto from 'crypto';

function GenerateOTPButton() {
  const [otp, setOtp] = useState<string>('');

  const generateOTP = () => {
    const generatedOTP = crypto.randomBytes(4).toString('hex');
    setOtp(generatedOTP);
  };

  return (
    <div>
      <button onClick={generateOTP}  className="group relative h-12 w-full overflow-hidden rounded-2xl bg-red-700 text-white  text-1xl font-bold ">Generate OTP</button>
      {otp && <p>Generated OTP: {otp}</p>}
    </div>
  );
}

export default GenerateOTPButton;


