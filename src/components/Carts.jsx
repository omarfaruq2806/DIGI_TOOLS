import React from "react";
import { toast } from "react-toastify";
import Products from "./Products";

const Carts = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Your Checkout Successfull")
  };

  const removeFromCart = (id , name) => {
    toast.error(`${name} Deleted from Cart`)
    const updatedCarts = carts.filter((item) => item.id !== id);
    setCarts(updatedCarts);
  };

  return (
    <div className="px-3">
      <h1 className="text-2xl font-bold mb-4 py-6">Your Cart</h1>
      {carts.length === 0 ? (
        <div className="bg-gray-100 text-center mt-10  py-20 px-10 rounded-2xl shadow-xs space-y-4">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-gray-500">
            Browse our products and add items to your cart.
          </p>
        </div>
      ) : (
        <div className="space-y-4 my-4 p-3 md:p-8 border border-gray-200 rounded-xl shadow-xs">
          {carts.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-gray-100 shadow-xs rounded-xl p-1 md:p-4 space-y-4 flex items-center justify-between"
              >
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={item.icon} alt="logo" className=" w-6 md:w-18  bg-gray-50 rounded-2xl"/>
                  </div>
                  <div className="flex flex-col text-left">
                    <h1 className="text-sm md:text-xl font-medium">{item.name}</h1>
                    <p>${item.price}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id , item.name)} className="text-red-400 text-sm md:text-lg">Remove</button>
              </div>
            );
          })}
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Total: </h2>
            <h2 className="text-xl font-bold">${totalPrice}</h2>
          </div>
          <button
            onClick={handlePayment}
            className="btn w-full rounded-full bg-purple-800 text-white"
          >
            Procced To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
