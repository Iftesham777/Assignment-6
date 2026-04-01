import React from 'react';

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg w-full sm:w-auto">
            Explore Products
          </button>
          
          <button className="bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
            View Pricing
          </button>
        </div>

       
        <p className="text-indigo-200 text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;