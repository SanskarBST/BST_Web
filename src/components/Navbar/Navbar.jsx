import React from 'react';
import myLogo from '../../assets/logo.svg'; 

export function Navbar() {
  return (
    // FIX: 'top-4' ko wapas 'top-0' kar diya hai taaki screen ke top se ekdum touch ho jaye
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl flex items-center justify-between pl-4 pr-1.5 py-1 bg-black border border-white/10 rounded-xl">
      
      {/* Brand Logo Section */}
      <div className="flex items-center cursor-pointer">
        {/* Scale force kiya hai logo bada dikhane ke liye */}
        <div className="transform scale-[1.8] ml-2"> 
          <img 
            src={myLogo} 
            alt="Brandsmashers Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>
      </div>
      
      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/60">
        <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
        <a href="#portfolio" className="hover:text-white transition-colors duration-300">Work</a>
        <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
      </div>

      {/* CTA Button */}
      <div>
        <a 
          href="#contact" 
          className="hidden md:inline-block rounded-lg bg-gradient-to-r from-[#FF2E2B] to-[#e61c19] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Book Consultation
        </a>
      </div>
    </nav>
  );
}