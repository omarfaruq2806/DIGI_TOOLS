import React from "react";
import hero from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row-reverse justify-center items-center gap-20 mt-10">
      <div className="flex-1">
        <img src={hero} alt="Hero" className="pl-20 " />
      </div>
      <div className="flex-1  space-y-6 ">
        <p className="bg-blue-300 p-2 rounded-full inline-block mb-6">New: AI-Powered Tools Available</p>
        <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4">
          <button className="btn rounded-full bg-[#4f39f6] text-white">Explore Products</button>
          <button className="btn rounded-full text-[#4f39f6] border border-[#4f39f6]">Watch Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
