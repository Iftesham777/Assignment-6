import React from 'react';
import Shooping from "../assets/assets/products/shopping-cart.png"

const Nevber = ({ cartCount }) => { 
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-purple-600 font-bold">DigiTools</a>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 cursor-pointer text-gray-600 font-medium">
                    <li className="hover:text-purple-600">Products</li>
                    <li className="hover:text-purple-600">Features</li>
                    <li className="hover:text-purple-600">Pricing</li>
                    <li className="hover:text-purple-600">Testimonials</li>
                    <li className="hover:text-purple-600">FAQ</li>
                </ul>
            </div>

            <div className="navbar-end gap-3">
                
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
                    <img src={Shooping} alt="cart icon" className="w-5 h-5" />
                    <span className="font-bold text-purple-700">
                        Cart ({cartCount})
                        
                    </span>
                </div>

                <a className="font-bold btn btn-ghost text-gray-700">Login</a>
                <a className="btn bg-purple-600 rounded-full px-6 text-white hover:bg-purple-700 border-none transition-all shadow-md">
                    GetStarted
                </a>
            </div>
        </div>
    );
};

export default Nevber;