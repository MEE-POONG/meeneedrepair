import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Define the type of a product item
type ProductItem = {
    id: string;
    productname: string;
    prodcuting: string;
    productprice: string;
    // Add other properties as needed
};

const FavoriteProfile = () => {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [userData, setUserData] = useState({ FavoriteItems: [] });
    const [productData, setProductData] = useState<ProductItem[]>([]);
    // Fetch user data
    useEffect(() => {
        // Make the API request to fetch user data
        // Replace 'your-api-url' with the actual API endpoint for user data
        fetch(`/api/user/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                // console.log(data);
            });
    }, [id]);

    // Fetch product data for each item in FavoriteItems
    useEffect(() => {
        const fetchProductData = async () => {
            const productItems = userData.FavoriteItems || [];

            const promises = productItems.map((item) => {
                // Make the API request to fetch product data
                // Replace 'your-api-url' with the actual API endpoint for product data
                return fetch(`/api/products/${item}`).then((response) => response.json());
            });

            const productData = await Promise.all(promises);
            setProductData(productData);
        };

        fetchProductData();
    }, [userData]);

    const deleteProductFromFavorites = (productId: string) => {
        // Send a DELETE request to the API endpoint to remove the product from the favorites list
        fetch(`/api/user/favorite/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ FavoriteItems : productId }),
        })
            .then((response) => {
                if (response.status === 200) {
                    // Product was successfully removed
                    // Update your UI to reflect the change
                    setProductData((prevData) => prevData.filter((product) => product.id !== productId));
                } else {
                    // Handle error if the removal was not successful
                    console.error('Failed to remove product from favorites');
                }
            })
            .catch((error) => {
                console.error('Error while removing product from favorites:', error);
            });
    };


    return (
        <div className="">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.545 8.29501C7.43438 9.71626 5.15625 13.0988 5.15625 17.1319C5.15625 21.2513 6.84375 24.4275 9.25875 27.15C11.2519 29.3925 13.6631 31.2525 16.0144 33.0638C16.5731 33.495 17.1281 33.9244 17.6737 34.3538C18.66 35.1319 19.5394 35.8125 20.3888 36.3094C21.2362 36.8044 21.9188 37.0313 22.5 37.0313C23.0812 37.0313 23.7638 36.8063 24.6112 36.3094C25.4606 35.8125 26.34 35.1319 27.3263 34.3538C27.87 33.9225 28.4269 33.495 28.9856 33.0638C31.3369 31.2525 33.7481 29.3925 35.7412 27.15C38.1581 24.4275 39.8438 21.2513 39.8438 17.1319C39.8438 13.1006 37.5656 9.71626 34.455 8.29501C31.4325 6.91313 27.3713 7.27876 23.5125 11.2894C23.3813 11.4255 23.224 11.5337 23.0501 11.6077C22.8761 11.6816 22.689 11.7197 22.5 11.7197C22.311 11.7197 22.1239 11.6816 21.9499 11.6077C21.776 11.5337 21.6187 11.4255 21.4875 11.2894C17.6287 7.27876 13.5675 6.91313 10.545 8.29501ZM22.5 8.36251C18.165 4.48126 13.3106 3.93751 9.375 5.73563C5.22375 7.63876 2.34375 12.0488 2.34375 17.1338C2.34375 22.1306 4.425 25.9444 7.15687 29.0194C9.34312 31.4813 12.0188 33.5419 14.3831 35.3606C14.9194 35.7731 15.4387 36.1744 15.9319 36.5644C16.8937 37.3219 17.925 38.1281 18.9694 38.7394C20.0138 39.3488 21.2062 39.8456 22.5 39.8456C23.7938 39.8456 24.9862 39.3488 26.0306 38.7394C27.0769 38.1281 28.1063 37.3219 29.0681 36.5644C29.5817 36.1597 30.098 35.7584 30.6169 35.3606C32.9794 33.5419 35.6569 31.4794 37.8431 29.0194C40.575 25.9444 42.6562 22.1306 42.6562 17.1338C42.6562 12.0488 39.7781 7.63876 35.625 5.73938C31.6894 3.93938 26.835 4.48313 22.5 8.36251Z" fill="#F4F5F5" />
                </svg>
                <h3 className="text-2xl text-secondary2 ml-2">รายการโปรด</h3>
            </div>

            <div className="mt-10 rounded-lg md:p-8 text-secondary1 text-sm md:text-base">

                {productData.map((product, index) => (
                    <div
                        key={index}
                        className="bg-secondary2 rounded-2xl p-3 grid grid-cols-12 mb-5"
                    >
                        <img
                            // src={product.image} // Replace with the actual image property
                            // alt={product.name} // Replace with the actual name property
                            src='https://upload.wikimedia.org/wikipedia/commons/5/50/EquipoConXP.JPG'
                            className="col-span-2 md:col-span-2 h-24 w-24 object-contain"
                        />
                        <p className="col-span-4 md:col-span-6 self-center truncate">
                            {product.productname} {/* Replace with the actual name property */}
                        </p>
                        <p className="col-span-2 md:col-span-1 self-center text-[#FF5C74]">
                            {`฿ ${product.productprice}`} {/* Replace with the actual price property */}
                        </p>
                        <button className="col-span-3 md:col-span-2 bg-[#FFCD4B] rounded-xl h-14 md:h-10 self-center ml-2">
                            หยิบใส่ตระกร้า
                        </button>

                        <button
                            onClick={() => deleteProductFromFavorites(product.id)} // Pass the product ID to deleteProductFromFavorites

                            className="flex items-center justify-center">

                            <svg className="self-center" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
                                <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
                            </svg>

                        </button>
                    </div>
                ))}


            </div>

        </div>
    )
}
export default FavoriteProfile;