import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
// ...

interface product {
  id: number;
  productimg: string;
  productname: string;
  newSubDetail: string;
  // Add other properties if there are more
}

function Activityloader() {
  const initialVisibleItems = 4;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  
  const [productData, setproductData] = useState<product[]>([]); // Use the defined interface here
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 4);
  };

  useEffect(() => {
    fetch('/api/product')
      .then((response) => response.json())
      .then((data) => {
        setproductData(data.product);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className='relative rounded-[20px]  bg-clip-border shadow-3xl shadow-shadow-500 flex flex-row  '>
        {/* <div className='grid grid-cols-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '> */}
        

        
          {productData.slice(0, visibleItems).map((product) => (

           <div className=' bg-slate-500 w-[400px] h-[400px] mx-3 my-3'>

          

            <div key={product.id} className='max-w-sm mx-5 rounded overflow-hidden shadow-lg  mt-10'>
              <img
                className=' object-cover h-[200px] w-[500px]'
                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${product.productimg? product.productimg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                alt='indexActivity image'
              />

             

            </div>
 
            <div className='px-6 py-4 h-24'>
                <div className='text-lg text-white '>{product.productname}</div>
                <div className='text-lg text-white '>{product.id}</div>
              </div>

</div>

          ))}
  
      </div>

      {/* <div className='flex justify-center'>
        {visibleItems < productData.length && (
          <button onClick={handleLoadMore} className=" mt-6 group relative h-12 w-40 overflow-hidden rounded-2xl bg-black bg-opacity-80 text-lg font-bold text-white">
            โหลดเพิ่มเติม
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
          </button>
        )}
      </div> */}






   





    




    </>
  );
}

export default Activityloader;
