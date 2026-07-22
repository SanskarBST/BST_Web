// File: src/components/Services/AIMLService.jsx

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import SoftAurora from './SoftAurora'; 
import LogoLoop from '../ui/LogoLoop';

export function AIMLService() {
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

  const techStackData = [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    //{ name: "OpenAI", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "AWS SageMaker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Scikit-Learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Keras", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
  ];

  const logoNodes = techStackData.map((tech, idx) => ({
    node: (
      <div key={idx} className="flex items-center gap-4 mx-6 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
        <img src={tech.src} alt={tech.name} className="h-10 w-auto object-contain" />
        <span className="text-2xl font-bold tracking-wider text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
          {tech.name}
        </span>
      </div>
    )
  }));

  const subServices = [
    {
      title: "Generative AI Development",
      desc: "Create custom AI models that generate highly contextual text, breathtaking images, and robust code perfectly tailored to your unique business workflows.",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "AI Agent Development",
      desc: "Deploy autonomous, intelligent AI agents capable of reasoning, executing complex multi-step tasks, and interacting dynamically with your users.",
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "LLM Integration",
      desc: "Seamlessly integrate state-of-the-art Large Language Models (like GPT-4 & Llama) into your existing software stack for superhuman data processing.",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Machine Learning Solutions",
      desc: "Leverage bespoke ML algorithms to uncover hidden data patterns, optimize operational workflows, and drive data-backed strategic decisions.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Computer Vision Solutions",
      desc: "Empower your software to 'see' and interpret the world with advanced image recognition, video analysis, and spatial data processing.",
      bgImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Natural Language Processing",
      desc: "Enable your applications to understand, interpret, and intelligently manipulate human language with absolute contextual precision.",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Predictive Analytics",
      desc: "Transform your historical data into an accurate crystal ball. Forecast trends, mitigate risks, and capitalize on future market movements.",
      bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "AI Automation Solutions",
      desc: "Eradicate repetitive tasks and scale your operations intelligently with end-to-end AI-driven pipelines and automated workflows.",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
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
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              AI/ML Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E2B] via-[#ff5c5c] to-[#FF8A8A] drop-shadow-lg">
                Development
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl mx-auto mb-10 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Build intelligent software powered by artificial intelligence, machine learning, and generative AI to automate processes, enhance customer experiences, and accelerate business growth.
            </p>
            
            <div className="flex justify-center">
              <a href="#contact" className="relative group overflow-hidden bg-[#FF2E2B] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,46,43,0.4)] hover:shadow-[0_0_40px_rgba(255,46,43,0.6)]">
                <span className="relative z-10">Start Your AI Journey</span>
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
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E2B] via-[#FF8A8A] to-[#2b045e] animate-pulse">Sub-Services.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl mx-auto">
              Immerse yourself in intelligent architectures designed for high-impact results.
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
                Let's Work Together.
              </span>
              <span className="text-[12vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter px-8 text-transparent" style={{ fontFamily: "'Clash Display', sans-serif", WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>
                Start Now.
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