// import React, { useState } from 'react';

// export default function Header() {
    
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	const toggleMenu = () => {
// 	  setIsMenuOpen(!isMenuOpen);
// 	};


//     return (
//         <div className="w-full h-[40px] text-right bg-[#1E293B] ">
 

//  			<div className="relative inline-block  justify-center  right-10  text-left">
//      	 <div>
//         <button
//           type="button"
//           className="inline-flex w-full justify-center gap-x-1.5  text-white px-3 py-2 text-sm font-semibold  "
//           id="menu-button"
//           aria-expanded={isMenuOpen}
//           aria-haspopup="true"
//           onClick={toggleMenu}
//         >
//           ภาษา
//           <svg
//             className="-mr-1 h-5 w-5 "
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//       {isMenuOpen && (
//         <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
//           <div className="py-1" role="none">
//             <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
//               ไทย
//             </a>
//             <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
//               อังกฤษ
//             </a>
           
         
//           </div>
//         </div>
//       )}
//     </div>






//         </div>
//     )
// }





export default function Loading() {
    return (
        <>
		<div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-blue-900"></div>
            <div
                className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div> 
		

{/* <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-blue-900">
  <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
    <div className="loader-dots block relative w-20 h-5 mt-2">
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="text-gray-500 text-xs font-light mt-2 text-center">
      Please wait...
    </div>
  </div>
  </div> */}
        </>

    )
}