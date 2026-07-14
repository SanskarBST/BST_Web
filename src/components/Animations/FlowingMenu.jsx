import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

export default function FlowingMenu({
  items = [],
  speed = 15,
  marqueeBgColor = '#FF2E2B',
  marqueeTextColor = '#ffffff',
}) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ id, title, desc, logos = [], speed, marqueeBgColor, marqueeTextColor }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);
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
        const needed = Math.ceil(viewportWidth / contentWidth) + 2;
        setRepetitions(Math.max(4, needed));
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
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);
    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div className="menu__item group border-b border-white/5" ref={itemRef}>
      
      <div
        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 md:py-5 cursor-pointer transition-colors duration-300 group-hover:bg-[#111111]/80 relative z-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF2E2B] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300 ease-out"></div>

        <div className="flex items-center gap-6 md:gap-12 w-full md:w-1/2 mb-3 md:mb-0">
          <span className="font-mono text-lg font-bold text-gray-500 group-hover:text-[#FF2E2B] transition-colors duration-300">
            {id}
          </span>
          {/* UPDATED: text-xl md:text-2xl */}
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>

        <div className="flex items-start md:items-center justify-between w-full md:w-1/2 md:pl-8">
          <p className="text-gray-400 text-[13px] leading-relaxed max-w-sm mr-6">
            {desc}
          </p>
          
          <div className="w-10 h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF2E2B] group-hover:border-[#FF2E2B] transition-all duration-300">
            <svg className="w-4 h-4 text-white transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>

      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                {/* UPDATED: text-2xl for Marquee */}
                <span className="text-2xl font-bold">{title}</span> 
                {logos.map((logoUrl, logoIdx) => (
                  <div 
                    key={logoIdx} 
                    className="marquee__logo" 
                    style={{ backgroundImage: `url(${logoUrl})` }} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}