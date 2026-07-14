import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../Animations/BlurText';

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
  { id: 1, title: "Zero Fluff", desc: "We don't waste time on buzzwords. We write code that scales and builds products that perform." },
  { id: 2, title: "Radical Ownership", desc: "Your product's success is our responsibility. We treat every line of code as if our own startup depended on it." },
  { id: 3, title: "Future-Proof", desc: "We anticipate scale. Our architectures are designed to handle your growth seamlessly, not break under pressure." }
];

export function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-reveal',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about-us" className="relative w-full px-6 py-32 md:px-12 lg:px-20 bg-transparent z-10 pointer-events-auto">
      <div className="mx-auto max-w-[1350px]">
        
        {/* Mission Text */}
        <div className="max-w-4xl mb-24 about-reveal">
          <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] text-[#FF2E2B] uppercase">
            Our Mission
          </span>
          {/* SIZE FIXED: text-3xl md:text-4xl lg:text-5xl */}
          <BlurText
            text="To engineer digital products for visionaries who refuse to blend in."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          />
          <p className="text-gray-400 text-[18px] leading-relaxed max-w-2xl">
            Brandsmashers was born out of frustration with agency fluff and missed deadlines. Our vision is simple: be the ultimate technical partner for startups and enterprises that demand high-octane engineering and flawless execution.
          </p>
        </div>

        {/* Core Values Boxes - Sleek and Transparent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div 
              key={value.id} 
              className="about-reveal group p-8 rounded-2xl bg-transparent border border-white/10 transition-all duration-500 hover:border-[#FF2E2B]/50 hover:-translate-y-2 cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF2E2B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-[#FF2E2B] text-xl font-mono font-bold mb-4 group-hover:scale-110 transition-transform origin-left">
                  0{value.id}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF2E2B] transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-300">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}