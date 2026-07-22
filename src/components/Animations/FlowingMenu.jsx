import { useRef, useEffect, useState } from 'react';
import React from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

export default function FlowingMenu({
  items = [],
  speed = 12, 
  marqueeTextColor = '#ffffff',
}) {
  return (
    <div className="menu-wrap w-full border-t border-white/5 flex flex-col items-center">
      <nav className="menu relative w-full flex flex-col items-center">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            marqueeTextColor={marqueeTextColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ title, desc, logos = [], speed, marqueeTextColor }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const glowRef = useRef(null); 
  
  const [repetitions, setRepetitions] = useState(6); 
  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      setTimeout(() => {
        const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
        if (!marqueeContent) return;
        const contentWidth = marqueeContent.offsetWidth;
        const viewportWidth = window.innerWidth;
        const needed = Math.ceil(viewportWidth / contentWidth) + 3; 
        setRepetitions(Math.max(6, needed));
      }, 100);
    };
    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [title, logos]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed, 
        ease: 'none',
        repeat: -1
      });
    };
    const timer = setTimeout(setupMarquee, 150);
    return () => { clearTimeout(timer); if (animationRef.current) animationRef.current.kill(); };
  }, [title, logos, repetitions, speed]);

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);
    
    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
      .to([titleRef.current, descRef.current], { opacity: 0, duration: 0.3 }, 0)
      .to(glowRef.current, { opacity: 1, duration: 0.4 }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);
    
    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([titleRef.current, descRef.current], { opacity: 1, duration: 0.4 }, 0)
      .to(glowRef.current, { opacity: 0, duration: 0.4 }, 0);
  };

  return (
    <div 
      className="menu__item group border-b border-white/5 relative overflow-hidden w-full flex justify-center" 
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🚀 LAYER 0: THE RED GLOW */}
      <div 
        ref={glowRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,46,43,0.15) 50%, transparent 100%)'
        }}
      />
      
      {/* 🚀 LAYER 1: EXACT NAVBAR ALIGNMENT */}
      <div className="w-[90%] max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-3 md:py-3 cursor-pointer relative z-20 transition-colors duration-300">
        
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF2E2B] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300 ease-out"></div>

        <div className="flex items-center w-full md:w-1/2 mb-3 md:mb-0 ml-2">
          <h3 ref={titleRef} className="text-lg md:text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>

        <div className="flex items-start md:items-center justify-between w-full md:w-1/2">
          <p ref={descRef} className="text-gray-400 text-[13px] leading-relaxed max-w-sm mr-6">
            {desc}
          </p>
          
          <div className="w-10 h-10 shrink-0 rounded-full border border-[#FF2E2B] bg-[#FF2E2B]/10 flex items-center justify-center group-hover:bg-[#FF2E2B] group-hover:shadow-[0_0_15px_rgba(255,46,43,0.5)] transition-all duration-300">
            <svg className="w-4 h-4 text-[#FF2E2B] group-hover:text-white transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>

      {/* 🚀 LAYER 2: MARQUEE TEXT ANIMATION */}
      <div 
        className="marquee absolute inset-0 z-10 pointer-events-none flex items-center justify-center w-full" 
        ref={marqueeRef}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 25%, black 75%, transparent 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 25%, black 75%, transparent 85%, transparent 100%)'
        }}
      >
        <div className="marquee__inner-wrap w-full h-full flex items-center">
          <div className="marquee__inner flex items-center" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="marquee__part flex items-center" key={idx} style={{ color: marqueeTextColor }}>
                
                {logos.map((logoUrl, logoIdx) => (
                  <React.Fragment key={logoIdx}>
                    <span className="text-[15px] md:text-[17px] font-bold uppercase tracking-[0.1em] mx-4 whitespace-nowrap opacity-90">
                      {title}
                    </span>
                    {/* 🔥 CHANGED: Logos ko aur bada kar diya gaya hai (w-9 h-9) aur spacing (mx-3) di hai */}
                    <div 
                      className="w-9 h-9 mx-3 bg-center bg-no-repeat bg-contain opacity-80" 
                      style={{ backgroundImage: `url(${logoUrl})` }} 
                    />
                  </React.Fragment>
                ))}

              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}