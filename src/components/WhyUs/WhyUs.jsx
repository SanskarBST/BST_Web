import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../Animations/BlurText';
import CountUp from '../Animations/CountUp';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Fast Scaling",
    description: "Deploy engineering teams in days, not months.",
    renderVisual: () => (
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
        {/* 🔥 Inner Box Background changed to clear Dark Violet (#170A29) */}
        <div className="bg-[#170A29] border border-white/10 rounded-full px-4 py-1.5 text-[11px] font-mono text-gray-400 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          Team Assigned in 48hrs
        </div>
        <div className="flex -space-x-4 items-center group-hover:scale-110 transition-transform duration-500 ease-out">
          <img src="https://i.pravatar.cc/150?img=11" alt="dev" className="w-14 h-14 rounded-full border-[3px] border-[#0D041A] object-cover relative z-30 shadow-lg" />
          <img src="https://i.pravatar.cc/150?img=32" alt="dev" className="w-14 h-14 rounded-full border-[3px] border-[#0D041A] object-cover relative z-20 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-lg" />
          <img src="https://i.pravatar.cc/150?img=60" alt="dev" className="w-14 h-14 rounded-full border-[3px] border-[#0D041A] object-cover relative z-10 transform group-hover:translate-y-2 transition-transform duration-300 delay-75 shadow-lg" />
          {/* Red color kept exactly the same */}
          <div className="w-14 h-14 rounded-full border-[3px] border-[#0D041A] bg-[#FF2E2B] flex items-center justify-center text-sm font-bold text-white relative z-0 shadow-lg">
            +5
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "AI Expertise",
    description: "Human-in-the-loop evaluation and AI-ready engineering.",
    renderVisual: () => (
      <div className="relative w-full h-full flex flex-col justify-center w-full px-4 gap-3 pt-4">
        
        {/* Chat 1 - Inner Box Background changed to clear Dark Violet (#170A29) */}
        <div className="self-end bg-[#170A29] border border-white/5 shadow-lg rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] md:text-[11px] text-gray-300 max-w-[80%] opacity-40 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
          Can we scale the AI inference?
        </div>
        
        {/* Chat 2 - Red kept original */}
        <div className="self-start bg-gradient-to-r from-[#FF2E2B]/10 to-transparent border border-[#FF2E2B]/20 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] flex gap-2 items-start opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-[800ms] ease-out">
          <div className="w-5 h-5 rounded-full bg-[#FF2E2B] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(255,46,43,0.3)]">
             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <p className="text-[10px] md:text-[11px] text-white/90 leading-relaxed">
            Yes, deploying to edge clusters now.
          </p>
        </div>

        {/* Chat 3 - Inner Box Background changed to clear Dark Violet (#170A29) */}
        <div className="self-end bg-[#170A29] border border-white/5 shadow-lg rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] md:text-[11px] text-gray-300 max-w-[80%] opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-[1600ms] ease-out">
          Optimize our data pipeline.
        </div>
        
        {/* Chat 4 - Red kept original */}
        <div className="self-start bg-gradient-to-r from-[#FF2E2B]/20 to-transparent border border-[#FF2E2B]/40 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] flex gap-2 items-start opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-[2500ms] ease-out">
          <div className="w-5 h-5 rounded-full bg-[#FF2E2B] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(255,46,43,0.6)]">
             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <p className="text-[10px] md:text-[11px] text-white/90 leading-relaxed font-medium">
            Done. Training time reduced by 40%.
          </p>
        </div>

      </div>
    )
  },
  {
    id: 3,
    title: "End-to-End Delivery",
    description: "From strategy to deployment.",
    renderVisual: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 🔥 Inner Box Background changed to clear Dark Violet (#170A29) */}
        <div className="bg-[#170A29] border border-white/10 rounded-xl p-4 w-[85%] shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/150?img=47" alt="dev" className="w-5 h-5 rounded-full" />
              <span className="text-[10px] text-gray-400 font-mono">commit #a8b9c2</span>
            </div>
            <span className="text-[10px] text-gray-500">Just now</span>
          </div>
          
          <div className="text-[13px] text-white font-medium mb-3">Release v2.0 - Production</div>
          
          <div className="flex items-center gap-2 bg-[#052e16] border border-[#166534] rounded-lg p-2 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
            <span className="text-[11px] text-[#22c55e] font-mono">Deployment Successful</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Long-Term Partnership",
    description: "We're invested in outcomes, not just deliverables.",
    renderVisual: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 🔥 Inner Box Background changed to clear Dark Violet (#170A29) */}
        <div className="bg-[#170A29] border border-white/10 rounded-2xl p-5 w-[75%] flex flex-col items-center shadow-2xl group-hover:border-[#FF2E2B]/40 transition-colors duration-500">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#FF2E2B] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <span className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 font-bold">Client Growth</span>
          
          <div className="text-4xl font-bold text-white tracking-tight group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center">
            <span>+</span>
            <CountUp
              from={0}
              to={124}
              direction="up"
              duration={2}
              delay={0.2}
              className="inline-block mx-0.5"
            />
            <span>%</span>
          </div>
          
          <div className="w-full h-1.5 bg-white/5 mt-4 rounded-full overflow-hidden">
             <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#FF2E2B]/50 to-[#FF2E2B] transition-all duration-1000 ease-out delay-100"></div>
          </div>
        </div>
      </div>
    )
  }
];

export function WhyUs() {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: 'top 60%'
          }
        }
      );

      const totalScrollWidth = cardsRef.current.scrollWidth;

      gsap.to(cardsRef.current, {
        x: () => -(totalScrollWidth - window.innerWidth + 150),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-transparent z-10">
      <div
        ref={pinContainerRef}
        className="w-full h-screen flex flex-col justify-center overflow-hidden pt-10"
      >
        <div className="w-full flex flex-col items-center text-center px-6 md:px-12 lg:px-20 mb-12 lg:mb-16">
          <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] text-[#FF2E2B] uppercase">
            What makes us different
          </span>

          <BlurText
            text="We ship products, not just plans."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
          />
        </div>

        <div className="w-full mt-10 md:mt-16">
          <div
            ref={cardsRef}
            className="flex flex-nowrap items-center gap-8 md:gap-12 w-max pl-6 md:pl-12 lg:pl-16 pr-[10vw] pb-20"
          >
            {features.map((feature, index) => (
              <div key={feature.id} className="shrink-0">
                
                <div
                  className={`group relative flex flex-col text-left transition-transform duration-500 hover:scale-[1.03] w-[85vw] sm:w-[350px] lg:w-[380px] xl:w-[400px] h-[500px] lg:h-[550px] ${
                    index % 2 === 0
                      ? 'translate-y-4 lg:translate-y-8'
                      : '-translate-y-4 lg:-translate-y-8'
                  }`}
                >
                  {/* Outer Main Card */}
                  <div className="absolute inset-0 border-[2px] border-[#160829] group-hover:border-[#FF2E2B]/60 group-hover:shadow-[0_0_40px_rgba(255,46,43,0.15)] rounded-[32px] md:rounded-[40px] transition-all duration-700 ease-out z-0 bg-[#0D041A] overflow-hidden">
                    
                    <div 
                      className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-80 group-hover:opacity-100"
                      style={{ 
                        background: 'radial-gradient(circle at right center, rgba(255, 46, 43, 0.12) 0%, transparent 65%)' 
                      }}
                    ></div>
                    
                    {/* Visual Section Base */}
                    <div className="w-full h-[65%] border-b border-white/5 flex items-center justify-center bg-[#080211] relative overflow-hidden px-8">
                      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                      <div className="relative z-10 w-full h-full">
                        {feature.renderVisual()}
                      </div>
                    </div>

                    <div className="w-full h-[35%] p-6 md:p-8 flex flex-col justify-center relative z-10 bg-gradient-to-l from-[#FF2E2B]/[0.08] to-transparent">
                      <h3 className="mb-2 md:mb-3 text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] md:text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 pr-2">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}