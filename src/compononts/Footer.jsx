import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-400 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
        
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-6">DigiTools</h2>
            <p className="max-w-sm leading-relaxed text-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter <span>with our suite of powerful tools.</span> 
            </p>
          </div>

          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm mb-8">
              <li><a href="" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="" className="hover:text-white transition-colors">Contact</a></li>
            </ul>

            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-4">
              
              <a href className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-all flex items-center justify-center">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              
              <a href="" className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-all flex items-center justify-center">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              
              <a href="" className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-all flex items-center justify-center">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide">
          <p> 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;