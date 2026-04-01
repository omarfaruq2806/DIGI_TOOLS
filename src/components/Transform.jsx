import React from "react";

const Transform = () => {
  return (
    <div className="text-center py-20 space-y-4 bg-purple-500 text-white">
      <h1 className="text-4xl font-bold">Ready to Transform Your Workflow?</h1>
      <p>
        Join thousands of professionals who are already using Digitools to work
        smarter.
      </p>
      <p>Start your free trial today.</p>

      <div className="flex gap-4 justify-center">
        <button className="bg-white btn text-purple-600  rounded-full">Explore Products</button>
        <button className="bg-purple-500 btn text-white  rounded-full">View Pricing</button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Transform;
