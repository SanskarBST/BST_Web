import React from 'react';

export function CTA() {
  return (
    <section id="contact" className="relative w-full px-6 py-24 md:py-32 text-center bg-transparent overflow-hidden z-10 flex flex-col">
      
      {/* Background Gradient */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle at bottom center, rgba(255, 46, 43, 0.25) 0%, rgba(255, 46, 43, 0) 70%)' 
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Let's Build Something<br />Exceptional Together.
        </h2>
        <p className="text-lg md:text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you're scaling your engineering team or building your next AI-powered product, we're ready to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          
          <button className="px-8 py-3.5 bg-[#FF2E2B] text-white font-bold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,46,43,0.4)] transition-all">
            Book a Call
          </button>
          
          <button className="px-8 py-3.5 border border-white/30 text-white font-bold rounded-full hover:bg-white/15 transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}