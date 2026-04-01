import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { use } from "react";
import Carts from "./Carts";
function Products({ productsData  , carts, setCarts }) {
  const cardData = use(productsData);
  const [activeTab, setActiveTab] = useState("products");
  

  return (
    <div className="p-10 md:p-30 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold ">Premium Digital Tools</h1>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box bg-transparent shadow-none justify-center gap-3 mt-10">
        <button
          className={`tab rounded-full w-30 shadow-xs border border-gray-100 ${activeTab === "products" ? "bg-purple-500 text-white" : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`tab rounded-full w-30 shadow-xs border border-gray-100 ${activeTab === "carts" ? "bg-purple-500 text-white" : ""}`}
          onClick={() => setActiveTab("carts")}
        >
          Carts ({carts.length})
        </button>
      </div>

      <div>
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {cardData.map((product) => (
              <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts} />
            ))}
          </div>
        )}
      </div>
      {activeTab === "carts" && <Carts carts={carts} setCarts={setCarts} />}
    </div>
  );
}

export default Products;
