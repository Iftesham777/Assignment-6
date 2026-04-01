import React from "react";
import ShoopIng from "../assets/assets/products/shopping-cart.png"

const ToolsSection = ({ cartCount, activeTab, setActiveTab }) => {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products...
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("products")}
            className={`btn btn-ghost border border-purple-500 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-100 transition btn btn-ghost px-6 py-2 rounded-full font-medium transition ${
              activeTab === "products"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md border-none"
                : "bg-white text-gray-600 border"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`btn btn-ghost btn btn-ghost px-6 py-2 rounded-full font-medium transition ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md border-none"
                : "bg-white text-gray-600 border"
            }`}
          >
            <img src="{ShoopIng}" alt="" />
            Cart(0) ({cartCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;