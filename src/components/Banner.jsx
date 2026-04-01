import React from "react";
import hero from "/assets/banner.png";
const Banner = () => {
  return (
    <div className="max-w-7xl pt-10 mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-20 mt-10">
      <div className="flex-1 ">
        <img src={hero} alt="Hero" className="p-4 md:pl-20 " />
      </div>
      <div className="flex-1  space-y-6 px-4 md:px-0">
        <p className="bg-purple-100 px-4 py-2 rounded-full inline-block mb-6">New : AI-Powered Tools Available</p>
        <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4">
          <button className="btn rounded-full bg-purple-600 text-white">Explore Products</button>
          <button className="btn rounded-full text-purple-600 border border-purple-600">Watch Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
