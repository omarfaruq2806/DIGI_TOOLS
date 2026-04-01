import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const [isSubcribed, setIsSubscribed] = useState(false);

  const buyNow = () => {
    setIsSubscribed(true);
    toast.success(`${product.name} Successfully added`);

    const isFound = carts.find((item) => item.id === product.id);

    if (isFound) {
      toast.error(`${product.name} already added`);
      return;
    }
    setCarts([...carts, product]);
  };

  return (
    <div className="border border-gray-200 shadow-xl rounded-xl text-left p-6 space-y-4">
      <div className="flex justify-between">
        <img src={product.icon} alt="logo" className="w-10"/>
        <p className=" bg-purple-300 rounded-full inline-block p-2">
          {product.tagType}
        </p>
      </div>
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="">{product.description}</p>
      <h2>
        <span className="text-3xl font-bold">${product.price}</span>
        {product.period === "monthly"
          ? "/month"
          : product.period === "yearly"
            ? "/year"
            : "One-time"}
      </h2>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={buyNow}
        className="btn rounded-full w-full bg-purple-500 text-white"
      >
        {isSubcribed ? "Subscribed" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
