import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';
import Chatbar from '../../container/Messenger/chatbar';


interface messenger {
  id: number;
  title: string;
  subtitle: string;
  detail: string;
  img: string;
  emoji: string;
  chat: string;
  date: string;
  // Add other properties if there are more
}


const ChatroomComponent: React.FC = () => {


  const initialVisibleItems = 4;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [messengerData, setmessengerData] = useState<messenger[]>([]); // Use the defined interface here
  //   const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 4);
  };

  useEffect(() => {
    fetch('/api/messenger')
      .then((response) => response.json())
      .then((data) => {
        setmessengerData(data.messenger);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

      });
  }, []);




  return (
    <>
      <div>
        <h1 className=' text-center text-white text-6xl'>แชทสด</h1>
        <div className=' container  bg-white w-[1500px] h-[700px] mx-auto my-10'>


          <div className='flex justify-center mx-auto'>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  {/* <th className="px-4 py-2">ID</th> */}
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {messengerData.slice(0, visibleItems).map((messenger) => (
                  <tr key={messenger.id}>
                    {/* <td className="border px-4 py-2">{messenger.id}</td> */}
                    <td className="border px-4 py-2">{messenger.title}</td>
                    <td className="border px-4 py-2">{messenger.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>




        </div>


        <Chatbar />


      </div>
    </>
  );
};

export default ChatroomComponent;
