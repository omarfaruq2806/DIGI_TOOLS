import React from "react";

const Review = () => {
  return (
    <div className="bg-purple-600 mt-20 px-4 md:px-30 py-10 text-white flex justify-around items-center">
      <div>
        <h1 className="text-3xl  md:text-4xl font-bold ">50K+</h1>
        <p className="font-medium text-gray-300">Active Users</p>
      </div>
      <div>
        <h1 className="text-3xl  md:text-4xl font-bold ">200+</h1>
        <p className="font-medium text-gray-300">Premium Tools</p>
      </div>
      <div>
        <h1 className="text-3xl  md:text-4xl font-bold ">4.9</h1>
        <p className="font-medium text-gray-300">Ratings</p>
      </div>
    </div>
  );
};

export default Review;
