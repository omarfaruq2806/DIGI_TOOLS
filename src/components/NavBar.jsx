import React from "react";

const NavBar = () => {
  return (
    <div className=" navbar bg-base-100 shadow-sm px-25">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <a className="text-2xl font-bold text-[#4f39f6]">
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
        <a href="#">Log in</a>
        <a className="btn bg-[#4f39f6] text-white rounded-full">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
