 import React from "react";

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white">

          
          <div className="py-6 border-b md:border-b-0 md:border-r border-white/30">
            <h1 className="text-4xl lg:text-5xl font-bold">50K+</h1>
            <p className="mt-2 text-sm">Active Users</p>
          </div>

         
          <div className="py-6 border-b md:border-b-0 md:border-r border-white/30">
            <h1 className="text-4xl lg:text-5xl font-bold">200+</h1>
            <p className="mt-2 text-sm">Premium Tools</p>
          </div>

          
          <div className="py-6">
            <h1 className="text-4xl lg:text-5xl font-bold">4.9</h1>
            <p className="mt-2 text-sm">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;