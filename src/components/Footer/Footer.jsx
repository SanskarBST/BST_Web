import React from 'react';
import BlurText from '../Animations/BlurText'; 
import myLogo from '../../assets/logo.svg'; 

export function Footer() {
  return (
    <footer id="contact" className="relative w-full z-10 flex flex-col">
      


      <div className="w-full bg-transparent px-6 pt-32 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          

          <div className="text-4xl md:text-6xl font-bold tracking-tighter flex flex-col">
            <BlurText 
              text="Let's smash" 
              delay={50} 
              animateBy="words" 
              direction="top" 
              className="text-white" 
            />
            <span className="text-[#FF2E2B]">
              <BlurText 
                text="expectations." 
                delay={80} 
                animateBy="words" 
                direction="top" 
                className="text-[#FF2E2B]" 
              />
            </span>
          </div>

          <a 
            href="mailto:info@brandsmashers.com" 
            // text-lg se text-base kiya
            className="group rounded-full bg-white text-black px-7 py-3.5 text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
          >
            Start a Project 
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2 text-[#FF2E2B]">→</span>
          </a>
        </div>
      </div>


      <div className="w-full bg-[#000000] px-6 py-16 md:px-12 lg:px-20 border-t border-white/5">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-0 w-full">
            
            {/* COLUMN 1: LOGO & SOCIAL */}
            <div className="flex flex-col justify-between h-full min-h-[220px] lg:w-[30%]">
              
              <div className="mb-8 lg:mb-0">
                <img 
                  src={myLogo} 
                  alt="Brandsmashers Logo" 
                  className="h-14 w-auto object-contain" 
                />
              </div>

              <div className="flex gap-5 items-center text-white">
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="hover:text-[#FF2E2B] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </a>
              </div>
            </div>

            {/* COLUMN 2: ABOUT */}
            <div className="lg:w-[15%]">
              {/* text-base -> text-sm */}
              <h4 className="text-white text-sm font-medium mb-5 uppercase tracking-wider">About</h4>
              {/* text-sm -> text-xs, space-y-4 -> space-y-3 */}
              <ul className="space-y-3 text-[#A1A1AA] text-xs">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms and Condition</a></li>
              </ul>
            </div>

            {/* COLUMN 3: COMPANY */}
            <div className="lg:w-[15%]">
              {/* text-base -> text-sm */}
              <h4 className="text-white text-sm font-medium mb-5 uppercase tracking-wider">Company</h4>
              {/* text-sm -> text-xs */}
              <ul className="space-y-3 text-[#A1A1AA] text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#careers" className="hover:text-[#FF2E2B] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Projects</a></li>
              </ul>
            </div>

            {/* COLUMN 4: CONTACT */}
            <div className="lg:ml-auto flex flex-col lg:items-start xl:items-start">
              {/* text-base -> text-sm */}
              <h4 className="text-white text-sm font-medium mb-5 uppercase tracking-wider">Contact</h4>
              {/* text-sm -> text-xs */}
              <ul className="space-y-3 text-[#A1A1AA] text-xs w-full">
                
                {/* Grid columns adjusted for smaller text size (65px->55px, 100px->85px) */}
                <li className="grid grid-cols-[55px_85px_auto] gap-2 items-center">
                  <span className="text-white font-medium">Online:</span>
                  <span className="whitespace-nowrap">10am - 10pm</span>
                  <a href="tel:+917470755435" className="hover:text-white transition-colors whitespace-nowrap">+91 74707 55435</a>
                </li>
                
                <li className="grid grid-cols-[55px_85px_auto] gap-2 items-center">
                  <span className="text-white font-medium">Offline:</span>
                  <span className="whitespace-nowrap">11am - 8pm</span>
                  <a href="tel:+917470755435" className="hover:text-white transition-colors whitespace-nowrap">+91 74707 55435</a>
                </li>

                <li className="pt-2">
                  <a href="mailto:info@brandsmashers.com" className="hover:text-white transition-colors">info@brandsmashers.com</a>
                </li>
                
                <li className="leading-relaxed mt-2 max-w-[280px]">
                  3rd floor, Plot No 11/2, Raisen Rd, Punjabi Bagh, Bijli Colony, Govindpura, Bhopal(MP), 462023
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}