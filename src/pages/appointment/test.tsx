import React, { useState } from 'react';
import useAxios from "axios-hooks";

function YourComponent() {
  const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
    { url: '/api/appointment', method: 'POST' },
    { manual: true }
  );

  const [loading, setLoading] = useState(false);
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [request, setRequest] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ทำการตั้งค่า loading เป็น true เมื่อกด submit
    setLoading(true);

    try {
      // ส่งข้อมูลไปยัง API โดยใช้ axios หรือ useAxios
      const response = await executeIndexActivity({
        data: {
          fname,
          lname,
          tel,
          email,
          request,
          message
        },
      });

      // จัดการกับการตอบสนองจาก API ตรงนี้
      // เช่น การตรวจสอบค่า response.data หรือ errorMessage

      // เมื่อเสร็จสิ้นการส่งข้อมูลเราสามารถตั้งค่า loading กลับเป็น false
      setLoading(false);
    } catch (error) {
      // จัดการกับข้อผิดพลาดที่เกิดขึ้นในกรณีที่ API ล้มเหลว
      // เช่น การตั้งค่า errorMessage
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ตรงนี้คุณสามารถเพิ่มฟิลด์ข้อมูลต่าง ๆ ในฟอร์ม */}
      <div>
        <label>First Name:</label>
        <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Request:</label>
        <textarea value={request} onChange={(e) => setRequest(e.target.value)} />
      </div>
      <div>
        <label>message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <button type="submit" disabled={loading}>Submit</button>
      {/* {errorMessage && <p>Error: {errorMessage}</p>} */}
    </form>
  );
}

export default YourComponent;






// import React, { useState } from 'react';
// import useAxios from "axios-hooks";

// function YourComponent() {
//   const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
//     { url: '/api/appointment', method: 'POST' },
//     { manual: true }
//   );

//   const [loading, setLoading] = useState(false);
//   const [fname, setFname] = useState<string>("");
//   const [lname, setLname] = useState<string>("");
//   const [tel, setTel] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [request, setRequest] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [showModal, setShowModal] = useState<boolean>(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // แสดง modal ยืนยันการส่งข้อมูล
//     setShowModal(true);
//   };

//   const handleConfirm = async () => {
//     // ทำการตั้งค่า loading เป็น true เพื่อปิด modal
//     setLoading(true);
//     setShowModal(false);

//     try {
//       // ส่งข้อมูลไปยัง API โดยใช้ axios หรือ useAxios
//       const response = await executeIndexActivity({
//         data: {
//           fname,
//           lname,
//           tel,
//           email,
//           request,
//           message
//         },
//       });

//       // จัดการกับการตอบสนองจาก API ตรงนี้
//       // เช่น การตรวจสอบค่า response.data หรือ errorMessage

//       // เมื่อเสร็จสิ้นการส่งข้อมูลเราสามารถตั้งค่า loading กลับเป็น false
//       setLoading(false);
//     } catch (error) {
//       // จัดการกับข้อผิดพลาดที่เกิดขึ้นในกรณีที่ API ล้มเหลว
//       // เช่น การตั้งค่า errorMessage
//       setLoading(false);
//       console.error('Error:', error);
//     }
//   };

//   const handleCancel = () => {
//     // ปิด modal โดยไม่ทำการส่งข้อมูล
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* ตรงนี้คุณสามารถเพิ่มฟิลด์ข้อมูลต่าง ๆ ในฟอร์ม */}
//         {/* ... (เหมือนเดิม) */}
//         {/* ตรงนี้คุณสามารถเพิ่มฟิลด์ข้อมูลต่าง ๆ ในฟอร์ม */}
//         <div>
//           <label>First Name:</label>
//           <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
//         </div>
//         <div className="relative mb-6 mr-6" data-te-input-wrapper-init>
//           <label>Last Name:</label>
//           <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//             id="exampleFormControlInput3"
//             placeholder="Email address" />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Request:</label>
//           <textarea value={request} onChange={(e) => setRequest(e.target.value)} />
//         </div>
//         <div>
//           <label>message:</label>
//           <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//         </div>
//         <button type="submit" disabled={loading}>Submit</button>
//       </form>

//       {/* Modal ยืนยันการส่งข้อมูล */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>ยืนยันการส่งข้อมูล</h2>
//             <p>คุณต้องการที่จะส่งข้อมูลหรือไม่?</p>
//             <button onClick={handleConfirm}>ยืนยัน</button>
//             <button onClick={handleCancel}>ยกเลิก</button>
//           </div>
//         </div>
//       )}

//       {/* {errorMessage && <p>Error: {errorMessage}</p>} */}
//     </div>
//   );
// }

// export default YourComponent;
