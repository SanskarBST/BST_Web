import React from 'react';
import myLogo from '../../assets/logo.svg'; 

export function Footer() {
  return (
    <footer id="contact" className="relative w-full z-10 flex flex-col bg-transparent">
      
      {/* =========================================
          1. CTA SECTION (Transparent Background)
      ========================================= */}
      <section className="w-full px-6 py-24 md:py-32 text-center bg-transparent">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Let's Build Something<br />Exceptional Together.
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're scaling your engineering team or building your next AI-powered product, we're ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            
            {/* FIX: Book a Call button is now perfectly Red with White text */}
            <button className="px-8 py-3.5 bg-[#FF2E2B] text-white font-bold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,46,43,0.4)] transition-all">
              Book a Call
            </button>
            
            <button className="px-8 py-3.5 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          2. FOOTER SECTION (Static Black Background)
      ========================================= */}
      <div className="w-full px-6 py-20 md:px-12 lg:px-24 bg-[#000000] border-t border-white/10 relative z-20">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-16 lg:gap-20 w-full min-h-[240px]">
            
            {/* LEFT SIDE: LOGO & SOCIAL */}
            <div className="lg:w-[25%] shrink-0 flex flex-col justify-between">
              
              <div className="mb-12 lg:mb-0">
                <img 
                  src={myLogo} 
                  alt="Brandsmashers Logo" 
                  className="h-12 w-auto object-contain object-left" 
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 items-center text-white">
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: 3 COLUMNS */}
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              
              {/* SECTION 1: COMPANY */}
              <div className="flex flex-col items-start">
                {/* FIX: Headings are now 14px (smaller) */}
                <h4 className="text-white text-[14px] font-bold mb-5 uppercase tracking-widest">
                  COMPANY
                </h4>
                {/* FIX: Links are now 13px (smaller) and space-y-3 (tighter spacing) */}
                <ul className="space-y-3 text-[#A1A1AA] text-[13px] font-normal">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* SECTION 2: SERVICES */}
              <div className="flex flex-col items-start">
                <h4 className="text-white text-[14px] font-bold mb-5 uppercase tracking-widest">
                  SERVICES
                </h4>
                <ul className="space-y-3 text-[#A1A1AA] text-[13px] font-normal">
                  <li><a href="#" className="hover:text-white transition-colors">AI Engineering</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Staff Augmentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">QA & Evaluation</a></li>
                </ul>
              </div>

              {/* SECTION 3: CONTACT */}
              <div className="flex flex-col items-start">
                <h4 className="text-white text-[14px] font-bold mb-5 uppercase tracking-widest">
                  CONTACT
                </h4>
                <ul className="space-y-3 text-[#A1A1AA] text-[13px] font-normal w-full">
                  <li>
                    <a href="tel:+917470755435" className="hover:text-white transition-colors">
                      +91 74707 55435
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@brandsmashers.com" className="hover:text-white transition-colors">
                      info@brandsmashers.com
                    </a>
                  </li>
                  <li className="leading-relaxed max-w-[280px] mt-1">
                    3rd floor, Plot No 11/2, Raisen Rd, Punjabi Bagh, Bijli Colony, Govindpura, Bhopal(MP), 462023
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="mt-20 pt-8 border-t border-white/10 text-left lg:text-right text-[#A1A1AA] text-[13px]">
             © {new Date().getFullYear()} Brandsmashers. All rights reserved.
          </div>

        </div>
      </div>
      
    </footer>
  );
}