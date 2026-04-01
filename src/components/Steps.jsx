import React from "react";
import user from "../assets/user.png";
import Package from "../assets/package.png";
import rocket from "../assets/rocket.png";
const Steps = () => {
  return (
    <div className="bg-gray-50 px-8 md:px-32 py-12">
      <h1 className="text-center text-3xl font-bold">Get Started in 3 Steps</h1>
      <p className="text-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white shadow-md rounded-2xl p-8 text-center space-y-3">
          <div className="flex justify-end">
            <p className="flex w-6 justify-center rounded-full bg-purple-700 text-white">
              1
            </p>
          </div>
          <img
            src={user}
            alt="User"
            className="mx-auto bg-purple-100 rounded-full p-3"
          />
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8 text-center space-y-3">
          <div className="flex justify-end">
            <p className="flex w-6 justify-center rounded-full bg-purple-700 text-white">
              2
            </p>
          </div>
          <img
            src={Package}
            alt="Package"
            className="mx-auto bg-purple-100 rounded-full p-3"
          />
          <h2 className="text-2xl font-bold">Choose Products</h2>
          <p>Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8 text-center space-y-3">
          <div className="flex justify-end">
            <p className="flex w-6 justify-center rounded-full bg-purple-700 text-white">
            3
          </p>
          </div>
          <img
            src={rocket}
            alt="Rocket"
            className="mx-auto bg-purple-100 rounded-full p-3"
          />
          <h2 className="text-2xl font-bold">Start Creating</h2>
          <p>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
