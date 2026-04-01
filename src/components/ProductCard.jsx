import React from "react";
import { FaCheck } from "react-icons/fa6";
// import  from "react-icons/fa";

const ProductCard = ({ product }) => {
  // const productFeatures = product.features
  return (
    <div className="border border-gray-200 shadow-xl rounded-xl text-left p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="">{product.description}</p>
      <h2><span className="text-3xl font-bold">${product.price}</span>/month</h2>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2"><FaCheck className="text-green-500"/>{feature}</li>
        ))}
      </ul>
      <button className="btn rounded-full w-full bg-purple-500 text-white">Buy Now</button>
    </div>
  );
};

export default ProductCard;
