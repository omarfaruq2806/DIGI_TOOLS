import React from "react";
import { CiShoppingCart } from "react-icons/ci";
const NavBar = ({ carts }) => {
  return (
    <div className=" navbar bg-base-100 shadow-sm px-6 md:px-25">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <a className="text-xl md:text-2xl font-bold text-purple-600" href="#">
          DigiTools
        </a>
      </div>

      <ul className="navbar-center hidden lg:flex gap-6">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>

      <div className="navbar-end gap-4">
        <div className="relative">
          <CiShoppingCart size={30} />
          <p className="absolute -top-2 -right-2 bg-purple-600 text-white p-1 text-xs rounded-full flex items-center justify-center w-6">
            {carts.length}
          </p>
        </div>
        <a href="#" className="hidden md:block">Log in</a>
        <a className="btn bg-purple-600 text-white rounded-full">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
