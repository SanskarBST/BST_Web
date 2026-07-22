// File: src/components/Services/CloudConsultingService.jsx

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import SoftAurora from './SoftAurora'; 
import LogoLoop from '../ui/LogoLoop';

export function CloudConsultingService() {
  const fadeUp = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
  };

  const containerVariants = {
    hidden: { opacity: 0, perspective: 1000 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -30, scale: 0.85 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, mass: 1.2 }
    }
  };

  // Tech Stack for Quality Assurance
  const techStackData = [
    { name: "Selenium", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
    { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
  ];

  const logoNodes = techStackData.map((tech, idx) => ({
    node: (
      <div key={idx} className="flex items-center gap-4 mx-6 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
        <img src={tech.src} alt={tech.name} className="h-10 w-auto object-contain filter invert opacity-80" />
        <span className="text-2xl font-bold tracking-wider text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
          {tech.name}
        </span>
      </div>
    )
  }));

  const subServices = [
    {
      title: "Manual Testing",
      desc: "Meticulous human-driven testing to evaluate UI/UX, uncover hidden edge cases, and ensure real-world software usability.",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Automation Testing",
      desc: "Accelerate release cycles with robust automated scripts using frameworks like Selenium, Cypress, and Playwright.",
      // 🔥 URL UPDATED HERE 🔥
      bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" 
    },
    {
      title: "API Testing",
      desc: "Validate backend logic, data accuracy, and integration touchpoints by rigorously testing RESTful and GraphQL APIs.",
      bgImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Performance Testing",
      desc: "Stress and load test your applications to guarantee stability, speed, and responsiveness under high user traffic.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Security Testing",
      desc: "Identify vulnerabilities, prevent breaches, and ensure compliance with comprehensive penetration testing.",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Regression Testing",
      desc: "Safeguard existing functionalities when new code is deployed with continuous and thorough regression validation.",
      bgImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Functional Testing",
      desc: "Verify that every single feature operates precisely according to your business requirements and specifications.",
      bgImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Test Strategy & Consulting",
      desc: "Design comprehensive testing roadmaps, tool selection, and QA methodologies tailored to your development lifecycle.",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  // Magnetic Cursor Hook Logic for CTA
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <div className="relative bg-[#090212] text-white w-full font-sans pt-24 selection:bg-[#FF2E2B]/30">
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-cta-scroll {
          display: flex;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }

        @keyframes spin-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animated-border-bg {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: conic-gradient(from 0deg, transparent 0%, rgba(255,46,43,0.1) 20%, rgba(255,46,43,0.8) 50%, rgba(43,4,94,0.8) 80%, transparent 100%);
          animation: spin-gradient 4s linear infinite;
          z-index: 0;
        }
        .group:hover .animated-border-bg {
          animation: spin-gradient 1.5s linear infinite;
          background: conic-gradient(from 0deg, transparent 0%, #FF2E2B 30%, #FF8A8A 50%, #2b045e 80%, transparent 100%);
        }

        @keyframes mega-blob {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(100px, -150px) scale(1.5) rotate(45deg); }
          66% { transform: translate(-150px, 100px) scale(0.8) rotate(-20deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        .bg-mega-blob-1 { animation: mega-blob 15s infinite alternate ease-in-out; }
        .bg-mega-blob-2 { animation: mega-blob 18s infinite alternate-reverse ease-in-out; }
      `}</style>

      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <SoftAurora speed={0.5} scale={1.2} brightness={1.5} color1="#FF2E2B" color2="#2b045e" noiseFrequency={1.5} noiseAmplitude={1.2} bandHeight={0.5} bandSpread={0.8} octaveDecay={0.2} layerOffset={0.1} colorSpeed={0.5} enableMouseInteraction={true} mouseInfluence={0.5} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#090212_100%)] z-10 pointer-events-none opacity-90"></div>
          <div className="absolute inset-0 z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        </div>

        <div className="relative z-30 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 py-20 text-center flex flex-col items-center pointer-events-none">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#FF2E2B]/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,46,43,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#FF2E2B] animate-pulse shadow-[0_0_10px_#FF2E2B]"></span>
              <span className="text-xs font-bold text-[#FF2E2B] uppercase tracking-widest">Service Dashboard</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Quality Assurance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E2B] via-[#ff5c5c] to-[#FF8A8A] drop-shadow-lg">
                (QA)
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl mx-auto mb-10 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Ensure software reliability and performance through comprehensive quality assurance, automated testing, and continuous validation processes.
            </p>
            
            <div className="flex justify-center">
              <a href="#contact" className="relative group overflow-hidden bg-[#FF2E2B] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,46,43,0.4)] hover:shadow-[0_0_40px_rgba(255,46,43,0.6)]">
                <span className="relative z-10">Start Testing</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. TECH STACK STRIP 
      ========================================= */}
      <div className="w-full bg-[#0D041A] py-8 relative z-10 overflow-hidden shadow-[0_20px_30px_rgba(0,0,0,0.8)] border-b border-white/5">
        <LogoLoop logos={logoNodes} speed={70} direction="left" logoHeight={40} gap={32} pauseOnHover={true} fadeOut={false} />
      </div>

      {/* =========================================
          3. FULLY ANIMATED DYNAMIC GRID
      ========================================= */}
      <div className="relative w-full bg-[#090212] py-32 overflow-hidden perspective-[1000px]">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-40 z-0 mix-blend-screen">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF2E2B] rounded-full blur-[120px] bg-mega-blob-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#2b045e] rounded-full blur-[120px] bg-mega-blob-2"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-20">
          
          {/* 🔥 CENTER ALIGNED SECTION HEADER 🔥 */}
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E2B] via-[#FF8A8A] to-[#2b045e] animate-pulse">Testing Sub-Services.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl mx-auto">
              Deliver bug-free applications with our stringent, automated, and manual testing ecosystems.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {subServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative w-full h-[360px] rounded-[2rem] p-[2px] overflow-hidden cursor-pointer"
              >
                <div className="animated-border-bg opacity-70 group-hover:opacity-100"></div>
                
                <div 
                  className="relative h-full w-full rounded-[1.9rem] p-8 flex flex-col justify-center z-10 transition-all duration-700 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(9, 2, 18, 0.92) 0%, rgba(15, 5, 28, 0.88) 100%), url('${service.bgImage}')`,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backdropFilter: 'blur(40px)',
                    filter: 'grayscale(100%) brightness(0.7)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)'
                  }}
                >
                  <style>{`
                    .group:hover div[style*="${service.bgImage.slice(0, 30)}"] {
                      filter: grayscale(0%) brightness(1) !important;
                      background-image: linear-gradient(135deg, rgba(20, 5, 35, 0.82) 0%, rgba(30, 8, 50, 0.78) 100%), url('${service.bgImage}') !important;
                      box-shadow: inset 0 0 40px rgba(255,46,43,0.25) !important;
                    }
                  `}</style>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                    <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-white rounded-full blur-[60px]"></div>
                  </div>

                  <div className="relative z-20">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF8A8A] transition-all duration-300 drop-shadow-md" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-[#d1d1d6] text-base leading-relaxed line-clamp-5 group-hover:text-white transition-colors duration-500 drop-shadow-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* =========================================
          4. COMPACT MAGNETIC CURSOR CTA MARQUEE
      ========================================= */}
      <a 
        href="#contact"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full block z-30 overflow-hidden py-32 bg-[#090212] cursor-none border-t border-white/10 shadow-[0_-40px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Marquee Text Line */}
        <div className="animate-cta-scroll flex items-center pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-[12vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter px-8 text-white transition-opacity duration-300" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Ensure Quality.
              </span>
              <span className="text-[12vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter px-8 text-transparent" style={{ fontFamily: "'Clash Display', sans-serif", WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>
                Zero Bugs.
              </span>
            </div>
          ))}
        </div>

        {/* Extra Small & Sleek Floating Magnetic Contact Button (w-20 h-20) */}
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-40 flex items-center justify-center w-20 h-20 rounded-full bg-[#FF2E2B] text-white font-bold text-xs shadow-[0_0_25px_rgba(255,46,43,0.7)]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <span className="flex items-center gap-0.5 text-xs tracking-tighter uppercase font-extrabold">
            CONTACT <span className="text-sm">↗</span>
          </span>
        </motion.div>
      </a>

    </div>
  );
}