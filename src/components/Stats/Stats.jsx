// File: src/components/Stats/Stats.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Naya Content Yahan Hai
const statsData = [
  { id: 1, value: "100+", label: "Projects Delivered", icon: "🚀" },
  { id: 2, value: "50+", label: "Engineers", icon: "💻" },
  { id: 3, value: "10+", label: "Countries", icon: "🌍" },
  { id: 4, value: "95%", label: "Client Retention", icon: "📈" }
];

export function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.feature-box');
      
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power3.out',
          stagger: {
            each: 0.2,
            grid: [2, 2], 
            from: "start"
          },
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 w-full px-6 md:px-12 lg:px-20 py-24 bg-transparent">
      <div className="mx-auto max-w-[1350px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="feature-box p-8 rounded-2xl bg-[#111111]/40 backdrop-blur-lg border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:bg-[#111111]/80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl bg-white/5 p-3 rounded-xl border border-white/5">{stat.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </h3>
              </div>
              <p className="text-[15px] font-medium text-gray-400 mt-2 pl-[4.5rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}