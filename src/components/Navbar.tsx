import React from 'react';


const Navbar: React.FC = () => {
  return (
    <div className="bg-white px-4 sm:px-16 py-3 sm:py-8 flex items-center justify-between w-full ">
      {/* Left Section: Logo and Email */}
      <div className="flex items-center space-x-3">
        <img src="images/logo.png" alt="logo" className="h-6 w-auto" />
        <h1 className="font-bold text-base hidden  lg:block">
          <span className="text-xl ">/</span> isurance@tiropay.au
        </h1>
      </div>

      {/* Right Section: Buttons and Menu */}
      <div className="flex items-center space-x-3">
        <button className="border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base cursor-pointer">
          Log In
        </button>
        <button className="bg-black text-white rounded-full px-4 py-2 text-sm sm:text-base cursor-pointer">
          Get Started
        </button>

        {/* Hamburger menu icon */}
        <button className='ml-4 text-center'>
        
  <svg width="28" height="32" viewBox="0 0 20 20" fill="none">
    <line x1="2" y1="6" x2="18" y2="6" stroke="black" strokeWidth="2" />
    <line x1="2" y1="14" x2="18" y2="14" stroke="black" strokeWidth="2" />
  </svg>
</button>
      </div>
    </div>
  );
};

export default Navbar;
