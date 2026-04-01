import React from "react";
import bannerImg from "../../assets/assets/banner.png"; 
import playImg from "../../assets/assets/play.png"
const Banner = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-10">

        
        <div className="flex-1">
          <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
            New: AI-Powered Tools Available
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Supercharge Your <br />
            <span className="text-gray-900">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          
          <div className="mt-6 flex gap-4">
            <button className="btn btn-ghost bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
              Explore Products
            </button>

            <button className="btn btn-ghost border border-purple-500 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-100 transition">
              <img  src={playImg} alt=""className="flex justify-between " /> Watch Demo
            </button>
          </div>
        </div>

        
        <div className="flex-1">
          <img src={bannerImg}alt=""className="w-full max-w-md mx-auto rounded-xl shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;