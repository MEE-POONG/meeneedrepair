import Link from "next/link";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { LiaHeartSolid } from "react-icons/lia";

interface Products {
  id: number;
  productname: string;
  price: string;
  description: string;
  date: string;
  author: string;
  refer: string;
  imgFirst: string;
}

export default function ShowproductsCard() {
  const [newsData, setNewsData] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {newsData.map((products) => (
            <div key={products.id} className="bg-white shadow-xl rounded-md overflow-hidden">
              <div className="flex md:flex-wrap items-center">
                <div className={`w-[230px] md:w-full h-[100px] md:h-[200px] md:rounded-tr-lg md:rounded-tl-lg overflow-hidden `}>
                  <Link href={`/products/${products.id}`}>
                    <img
                      className="w-full h-full object-cover"
                      src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${products.imgFirst ? products.imgFirst : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                      alt=""
                    />
                  </Link>
                </div>

                <div className="ml-0 w-[100%] md:mt-2 px-3">
                  <div className="flex flex-wrap justify-between md:mt-5">
                    <Link href={`/products/${products.id}`}>
                      <p className="text-black text-xs">{products.productname}</p>
                    </Link>
                  </div>
                  <p className="text-xs md:text-base font-bold line-clamp-2 text-black hover:text-amber-400 mt-2">
                    {products.description}
                  </p>

                  <div className="flex flex-wrap justify-between md:mt-2">
                    <p className="text-red-400 text-[16px]" style={{ marginTop: 'auto', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)' }}>
                      {products.price} Bath
                    </p>

                    <p className="text-orange-600 text-[16px]" style={{ marginTop: 'auto' }}>
                      <LiaHeartSolid />
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 right-0 p-2">
                  <p><LiaCartArrowDownSolid /></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
