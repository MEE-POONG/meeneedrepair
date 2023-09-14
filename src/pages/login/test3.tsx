import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // เพิ่ม state เพื่อเก็บสถานะการล็อกอิน

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // ตรวจสอบ email และ password แล้วทำการ login
    if (email && password) {
      // ส่งคำขอเช็คการล็อกอินไปยัง API
      fetch('/api/user')
        .then((response) => response.json())
        .then((data) => {
          if (data.loggedIn) {
            // ถ้าล็อกอินสำเร็จ
            setLoggedIn(true); // อัปเดต state เป็น true
          } else {
            alert('ล็อกอินไม่สำเร็จ');
          }
        })
        .catch((error) => {
          console.error('เกิดข้อผิดพลาดในการส่งคำขอเช็คการล็อกอิน:', error);
        });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <p>คุณล็อกอินสำเร็จแล้ว</p>
      ) : (
        <>
          <h2>Login</h2>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleLogin}>เข้าสู่ระบบ</button>
        </>
      )}
    </div>
  );
};

export default Login;
