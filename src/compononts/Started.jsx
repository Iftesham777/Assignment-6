import React from "react";
import user1 from "../assets/assets/user.png";
import user2 from "../assets/assets/user.png";
import user3 from "../assets/assets/user.png";

const steps = [
  {
    
    title: "Choose a Plan",
    desc: "Select the perfect plan that fits your needs.",
    img: user1,
  },
  {
    
    title: "Make Payment",
    desc: "Complete your purchase securely in seconds.",
    img: user2,
  },
  {
    
    title: "Start Using",
    desc: "Access all tools instantly and boost productivity.",
    img: user3,
  }
];

const GetStarted = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Get Started In 3 Steps
      </h1>

      <p className="text-gray-500 mt-2">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
           
            <img
              src={step.img}alt={step.title}
              className="w-10 h-10 mx-auto mb-4 rounded-full object-cover"
            />

            

            
            <h2 className="text-xl font-semibold">{step.title}</h2>

            
            <p className="text-gray-500 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;