import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../Animations/BlurText'; 

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Flawless Architecture",
    description: "No technical debt. No spaghetti code. We engineer scalable systems built to handle millions of users from day one.",
    icon: "< />"
  },
  {
    id: 2,
    title: "Absolute Transparency",
    description: "No black boxes. You get real-time access to our repos, project boards, and daily standups. We build with you, not just for you.",
    icon: "O"
  },
  {
    id: 3,
    title: "Outcome-Driven",
    description: "We don't just ship features; we ship ROI. Every line of code is optimized to shift your bottom line.",
    icon: "↗"
  }
];

export function WhyUs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 150, opacity: 0, scale: 0.8 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.3, ease: 'back.out(1.2)',
          scrollTrigger: { 
            trigger: cardsRef.current, 
            start: 'top 80%' 
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full px-6 py-32 md:px-12 lg:px-20 bg-transparent z-10">
      <div className="mx-auto max-w-[1350px]">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] text-[#FF2E2B] uppercase">
            What makes us different
          </span>
          
          {/* SIZE MATCHED WITH ABOUT.JSX: text-3xl md:text-4xl lg:text-5xl */}
          <BlurText
            text="Elite Engineering. Unwavering Accountability."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
          />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative flex flex-col justify-center items-center text-center transition-transform duration-500 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 border-[16px] border-[#111] group-hover:border-[#FF2E2B]/50 group-hover:shadow-[0_0_50px_rgba(255,46,43,0.2)] rounded-[120px] transition-all duration-700 ease-out z-0 backdrop-blur-sm bg-black/20"></div>
              
              <div className="relative z-10 px-8 py-20 md:py-24 flex flex-col items-center">
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#FF2E2B]/10 border border-[#FF2E2B]/20 text-[#FF2E2B] font-mono text-2xl font-bold group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-white tracking-tight max-w-[200px]">
                  {feature.title}
                </h3>
                
                <p className="text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors duration-300 max-w-[240px]">
                  {feature.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}