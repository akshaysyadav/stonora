import React from 'react';
import { useNavigate } from 'react-router-dom';

 const Navbar = () => {
    const navigate = useNavigate();
    return (
      <nav className="bg-[#062E24] shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
  
            {/* LOGO */}
            <div className="flex-shrink-0">
              <img
                src="/media/logo.png"
                onClick={() => navigate('/')}
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
  
            {/* BUTTONS */}
            <div className="flex space-x-2 sm:space-x-4">
              <button className="px-3 sm:px-4 py-2 text-[#F5D49B] hover:text-white transition font-medium text-sm sm:text-base"
              onClick={() => navigate('/login')}>
                Login
              </button>
  
              <button className="px-3 sm:px-4 py-2 rounded-lg font-medium 
                  bg-[#E4B04F] text-[#062E24] 
                  hover:bg-[#C6922E] transition text-sm sm:text-base">
                Sign Up
              </button>
            </div>
  
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar;