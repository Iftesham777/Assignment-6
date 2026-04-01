import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    }
  ];

  return (
    <div className="bg-white py-20 px-6 font-sans">
     
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative rounded-3xl p-10 transition-all duration-300 ${
              plan.isPopular 
                ? 'bg-[#7C3AED] text-white shadow-2xl scale-105 py-14' 
                : 'bg-[#F9FAFB] text-slate-900 border border-gray-100'
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FEF9C3] text-[#854D0E] text-xs font-bold px-5 py-1.5 rounded-full shadow-sm">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className={`text-sm mb-8 ${plan.isPopular ? 'text-indigo-100' : 'text-slate-500'}`}>
              {plan.description}
            </p>
            
            <div className="mb-10">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span className={`text-lg ${plan.isPopular ? 'text-indigo-200' : 'text-slate-400'}`}>/Month</span>
            </div>

            <ul className="space-y-5 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[15px]">
                  {/* SVG Check Icon - No Library Needed */}
                  <svg className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`btn btn-ghostw-full py-4 px-6 rounded-2xl font-bold text-lg transition-all ${
              plan.isPopular 
                ? 'bg-white text-[#7C3AED] hover:bg-gray-100' 
                : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;