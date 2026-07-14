import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../Animations/BlurText'; 

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FinTech Scaling Platform",
    desc: "Re-engineered the core transaction engine for a high-growth startup, increasing processing speed by 400% and ensuring bank-grade security protocols.",
    tags: ["React", "Node.js", "AWS"],
    imgTxt: "[ FinTech Dashboard Image ]"
  },
  {
    title: "Decentralized Exchange (DEX)",
    desc: "Built a fully responsive, highly secure Web3 trading platform with real-time charting, smart contract integration, and sub-second execution latency.",
    tags: ["Solidity", "Web3.js", "Next.js"],
    imgTxt: "[ DEX Trading Interface Image ]"
  },
  {
    title: "AI-Powered CRM Ecosystem",
    desc: "Developed an enterprise-grade CRM that leverages machine learning to predict customer churn, automate outreach, and provide deep analytics.",
    tags: ["Python", "TensorFlow", "Docker"],
    imgTxt: "[ AI CRM Dashboard Image ]"
  }
];

export function Portfolio() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      gsap.set(cards, { 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transformOrigin: "top center"
      });
      
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, zIndex: 1 }); 
        } else {
          gsap.set(card, { y: "100vh", zIndex: i + 1 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 15%", 
          end: `+=${projects.length * 100}%`,
          pin: true,
          scrub: 1,
        }
      });

      for (let i = 1; i < projects.length; i++) {
        tl.to(cards[i], { 
          y: i * 25,
          ease: "none" 
        }, i); 
        
        tl.to(cards[i - 1], { 
          scale: 0.9, 
          filter: "blur(10px)", 
          opacity: 0.4, 
          ease: "none" 
        }, i);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="relative w-full pt-24 bg-transparent z-10 pointer-events-auto">
      
      {/* BLUR TEXT HEADING */}
      <div className="mx-auto max-w-[1350px] px-6 md:px-12 lg:px-20 mb-12">
        <h4 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-6">
          Selected Work
        </h4>
        <BlurText 
          text="Products that dominate their markets." 
          delay={50}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
        />
      </div>

      <div className="w-full mx-auto max-w-[1350px] px-6 md:px-12 lg:px-20">
        <div ref={sectionRef} className="relative w-full h-[600px] md:h-[500px]">
          
          {projects.map((proj, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="w-full h-auto min-h-[350px] bg-[#111111]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_-30px_60px_rgba(0,0,0,0.9)] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              <div className="w-full lg:w-1/2">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white/5 text-white rounded-md text-[10px] font-mono border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{proj.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed max-w-md">
                  {proj.desc}
                </p>
                <button className="text-[#FF2E2B] text-sm font-bold flex items-center group transition-colors hover:text-white">
                  View Case Study
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              <div className="w-full lg:w-1/2 bg-[#000000]/60 rounded-2xl p-4 h-[200px] md:h-[280px] flex items-center justify-center border border-white/5">
                <span className="text-gray-600 font-mono text-xs">{proj.imgTxt}</span>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      
    </section>
  );
}