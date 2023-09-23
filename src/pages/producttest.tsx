import React from "react";
import ProductItem from "../components/shoppingCart/ProductItem";



const Product1: React.FC = () => {
  const initialProducts = [
    { id: 1, name: "สินค้าที่ 1" },
    { id: 2, name: "สินค้าที่ 2" },
    // { id: 3, name: "สินค้าที่ 3" },
  ];

  return (
    
    <div className=" container">
        
      <h1 className=" text-white">ระบบยอดรวมสินค้า</h1>
      {initialProducts.map((product) => (
        <ProductItem key={product.id} id={product.id} name={product.name} />
      ))}

    </div>
    
  );
};

export default Product1;