import React from "react";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
      <p>
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="px-10 md:px-40 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="bg-gray-100 p-6 text-left rounded-lg shadow-md">
          <h3 className="text-2xl font-medium">Starter</h3>
          <p>Perfect for getting started</p>
          <h2 className="py-5">
            <span className="text-3xl font-bold">$0</span>/month
          </h2>
          <ul className="space-y-1.5">
            <li className="flex items-center" > <FiCheck size={20} />Access to 10 free tools</li>
            <li className="flex items-center" > <FiCheck size={20} />Basic templates</li>
            <li className="flex items-center" > <FiCheck size={20} />Community support</li>
            <li className="flex items-center" > <FiCheck size={20} />1 project per month</li>
          </ul>
          <button className="btn mt-5 w-full rounded-full bg-purple-500 text-white ">
            Get Started Free
          </button>
        </div>

        <div className="bg-purple-500 text-white text-left p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-medium">Pro</h1>
          <p>Best for professionals</p>
          <h2 className="py-5">
            <span className="text-3xl font-bold">$29</span>/month
          </h2>
          <ul className="space-y-1.5">
            <li className="flex items-center" > <FiCheck size={20} />Access to all premium tools</li>
            <li className="flex items-center" > <FiCheck size={20} />Unlimited templates</li>
            <li className="flex items-center" > <FiCheck size={20} />Priority support</li>
            <li className="flex items-center" > <FiCheck size={20} />Unlimited projects</li>
            <li className="flex items-center" > <FiCheck size={20} />Cloud sync</li>
            <li className="flex items-center" > <FiCheck size={20} />Advanced analytics</li>
          </ul>
          <button className="btn mt-5 w-full rounded-full bg-white text-purple-600 ">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-gray-100 p-6 text-left rounded-lg shadow-md">
            <h1 className="text-2xl font-medium">Enterprise</h1>
            <p className="text-gray-600">For teams and businesses</p>
            <h2 className="py-5">
                <span className="text-3xl font-bold">$99</span>/month
            </h2>
            <ul className="space-y-1.5">
                <li className="flex items-center" > <FiCheck size={20} />Everything in Pro</li>
                <li className="flex items-center" > <FiCheck size={20} />Team collaboration</li>
                <li className="flex items-center" > <FiCheck size={20} />Custom integrations</li>
                <li className="flex items-center" > <FiCheck size={20} />Dedicated support</li>
                <li className="flex items-center" > <FiCheck size={20} />SLA guarantee</li>
                <li className="flex items-center" > <FiCheck size={20} />Custom branding</li>
            </ul>
            <button className="btn mt-5 w-full rounded-full bg-purple-500 text-white">
                Contact Sales
            </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
