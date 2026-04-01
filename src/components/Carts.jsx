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
    <div>
      {carts.length === 0 ? (
        <div className="bg-gray-100 text-center mt-10  py-20 px-10 rounded-2xl shadow-xs space-y-4">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-gray-500">
            Browse our products and add items to your cart.
          </p>
        </div>
      ) : (
        <div className="space-y-4 my-4 p-8 border border-gray-200 rounded-xl shadow-xs">
          {carts.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-gray-100 shadow-xs rounded-xl  p-6 space-y-4 flex items-center justify-between"
              >
                <div className="flex gap-3 items-center">
                  <div>
                    <img src="" alt="logo" />
                  </div>
                  <div className="flex flex-col text-left">
                    <h1 className="text-xl font-medium">{item.name}</h1>
                    <p>${item.price}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id , item.name)} className="text-red-400 ">Remove</button>
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
