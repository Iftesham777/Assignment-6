import React from "react";

import WritingImg from "../assets/assets/products/writing_2327400 1.png";
import DesignImg from "../assets/assets/products/design-tool.png";
import OperationImg from "../assets/assets/products/operation.png";
import SocialImg from "../assets/assets/products/social-media.png";
import PortfolioImg from "../assets/assets/products/portfolio.png";
import ExtraImg from "../assets/assets/products/operation.png"; 

const plans = [
  {
    img: WritingImg,
    title: "AI Writing Pro",
    ptag: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    badge: "Best Seller",
    price: "$29/Mo",
    features: ["Unlimited AI generations","50+ writing templates","Grammar checker"]
  },
  {
    img: DesignImg,
    title: "Design Templates Pack",
    ptag: "2000+ premium templates for social media, presentations, and marketing materials.",
    badge: "Popular",
    price: "$49/One-Time",
    features: ["2000+ templates","Monthly updates","Commercial license"]
  },
  {
    img: OperationImg,
    title: "Automation Toolkit",
    ptag: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    badge: "Popular",
    price: "$79/Mo",
    features: ["50+ automations","API access","Custom workflows"]
  },
  {
    img: SocialImg,
    title: "Social Media Content Kit",
    ptag: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    badge: "Best Seller",
    price: "$39/Mo",
    features: ["5000+ assets","Scheduler included","Analytics dashboard"]
  },
  {
    img: PortfolioImg,
    title: "Resume Builder Pro",
    ptag: "Build professional resumes with ATS optimization and export options.",
    badge: "New",
    price: "$15/One-Time",
    features: ["100+ templates","ATS optimization","Export to PDF"]
  },
  {
    img: ExtraImg,
    title: "AI Video Generator",
    ptag: "Create stunning AI-generated videos for marketing and social media.",
    badge: "Trending",
    price: "$59/Mo",
    features: ["HD video export","Auto subtitles","Templates included"]
  }
];

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
              {plan.badge}
            </span>

            <img
              src={plan.img}
              alt={plan.title}
              className="w-10 h-10 object-contain bg-gray-100 p-2 rounded-lg"
            />
          </div>

          <h2 className="text-xl font-semibold mt-2">{plan.title}</h2>

          <p className="text-gray-600 mt-2 text-sm">{plan.ptag}</p>

          <p className="text-2xl font-bold mt-4">{plan.price}</p>

          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            {plan.features.map((feature, i) => (
              <li key={i}> {feature}</li>
            ))}
          </ul>

          <button className="btn btn-ghost mt-6 w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;