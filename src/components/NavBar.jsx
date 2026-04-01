import React from "react";
import { CiShoppingCart } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className=" navbar bg-base-100 shadow-sm px-25">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <a className="text-2xl font-bold text-purple-600" href="#">
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
        <div className="">
          <CiShoppingCart size={24} />
          <p>{}</p>
        </div>
        <a href="#">Log in</a>
        <a className="btn bg-purple-600 text-white rounded-full">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
