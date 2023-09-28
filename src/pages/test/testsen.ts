import axios from 'axios';

const TWILIO_ACCOUNT_SID = 'YOUR_TWILIO_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = 'YOUR_TWILIO_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = 'YOUR_TWILIO_PHONE_NUMBER';
const TO_PHONE_NUMBER = 'RECIPIENT_PHONE_NUMBER';

async function sendSMS(message: string) {
  const client = axios.create({
    baseURL: 'https://api.twilio.com/2010-04-01',
    auth: {
      username: TWILIO_ACCOUNT_SID,
      password: TWILIO_AUTH_TOKEN,
    },
  });

  try {
    const response = await client.post(`/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      To: TO_PHONE_NUMBER,
      From: TWILIO_PHONE_NUMBER,
      Body: message,
    });

    console.log('SMS sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

// เรียกใช้งานฟังก์ชันส่ง SMS
const otp = generateOTP();
sendSMS(`Your OTP is: ${otp}`);

function generateOTP() {
    throw new Error('Function not implemented.');
}
