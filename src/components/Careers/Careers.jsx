// File: src/components/Careers/Careers.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Globe, Rocket, Terminal, TrendingUp, Zap, ChevronRight, Cpu } from 'lucide-react';

export function Careers() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimationReverse = {
    y: [0, 25, 0],
    rotate: [0, -10, 5, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Culture Points mapped from your content
  const culturePoints = [
    {
      icon: <Terminal className="w-6 h-6 text-[#FF2E2B]" />,
      title: "Real ownership",
      desc: "You'll work on live products, not busywork. Your code directly impacts the business.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FF2E2B]" />,
      title: "Remote-friendly",
      desc: "Globally distributed teams — because good work doesn't need an office.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#FF2E2B]" />,
      title: "Early exposure to AI",
      desc: "We are not chasing trends, we are building with them. Get deep into AI engineering.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#FF2E2B]" />,
      title: "Startups to Enterprise",
      desc: "Variety that keeps you sharp. Work with agile startups and massive enterprise clients.",
      colSpan: "md:col-span-2"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FF2E2B]" />,
      title: "Growth-first culture",
      desc: "Continuous learning, direct mentorship, and clear career paths for your advancement.",
      colSpan: "md:col-span-2 md:col-start-2" // Adjusting grid to make it look bento-style
    }
  ];

  // Dummy Open Positions (You can update these later)
  const openPositions = [
    { title: "Senior AI/ML Engineer", type: "Full-time", location: "Bhopal / Remote", experience: "3+ Years" },
    { title: "Frontend Developer (React)", type: "Full-time", location: "Remote", experience: "1-3 Years" },
    { title: "Full Stack Node.js Developer", type: "Full-time", location: "Bhopal / Remote", experience: "2+ Years" },
    { title: "Product Designer (UI/UX)", type: "Full-time", location: "Remote", experience: "2+ Years" }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#090212] text-white font-sans overflow-hidden selection:bg-[#FF2E2B]/30">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,46,43,0.15)_0%,transparent_70%)] pointer-events-none blur-[100px]"></div>
      <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay"></div>

      {/* =========================================
          1. HERO SECTION (Exactly mimicking the screenshot vibe)
      ========================================= */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center">
        
        {/* Floating Element 1 (Left) */}
        <motion.div 
          animate={floatAnimation}
          className="hidden md:flex absolute top-[25%] left-[15%] w-24 h-24 bg-gradient-to-br from-[#FF2E2B] to-[#8a1817] rounded-2xl shadow-[0_0_50px_rgba(255,46,43,0.5)] items-center justify-center rotate-[-15deg] opacity-80 backdrop-blur-xl border border-white/20"
        >
          <Code className="w-10 h-10 text-white" />
        </motion.div>

        {/* Floating Element 2 (Right) */}
        <motion.div 
          animate={floatAnimationReverse}
          className="hidden md:flex absolute top-[35%] right-[15%] w-20 h-20 bg-gradient-to-tr from-[#2b045e] to-[#FF2E2B] rounded-full shadow-[0_0_40px_rgba(43,4,94,0.6)] items-center justify-center rotate-[15deg] opacity-80 backdrop-blur-xl border border-white/20"
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl relative z-10">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#FF2E2B] animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">We are hiring</span>
            <ChevronRight className="w-4 h-4 text-white/50" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05]" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Build Technology.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8A8A] to-[#FF2E2B]">Grow With Us.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We're a Bhopal-based company building AI/ML software, agentic AI systems, and custom products across iOS, Android, and Web for startups and enterprises worldwide. <strong className="text-white font-medium">If you want your code, your ideas, and your growth to actually matter you're in the right place.</strong>
          </p>

          <a href="#open-positions" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group">
            View Open Positions
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* =========================================
          2. LOGO STRIP (Trusted by / Tech Stack)
      ========================================= */}
      <div className="w-full border-y border-white/5 bg-[#0D041A]/50 backdrop-blur-sm py-6 overflow-hidden flex items-center justify-center">
        <p className="text-sm text-white/40 uppercase tracking-widest mr-8 whitespace-nowrap">Building the future with</p>
        <div className="flex gap-12 opacity-50 grayscale">
          <span className="text-xl font-bold font-['Clash_Display']">React</span>
          <span className="text-xl font-bold font-['Clash_Display']">Python</span>
          <span className="text-xl font-bold font-['Clash_Display']">TensorFlow</span>
          <span className="text-xl font-bold font-['Clash_Display']">AWS</span>
          <span className="text-xl font-bold font-['Clash_Display']">Node.js</span>
        </div>
      </div>

      {/* =========================================
          3. CULTURE SECTION (The Grid from Screenshot)
      ========================================= */}
      <div className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Why Work at Brandsmashers
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            We started with software first, one keyboard, zero shortcuts. That mindset hasn't changed. We hire people who want to build, not just clock in.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {culturePoints.map((point, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className={`bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors hover:border-[#FF2E2B]/30 group ${point.colSpan}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF2E2B]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>{point.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm md:text-base">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =========================================
          4. OPEN POSITIONS (Replacing the bottom UI mockup with an interface-like job board)
      ========================================= */}
      <div id="open-positions" className="py-24 px-6 max-w-5xl mx-auto relative z-10 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Open Positions at Brandsmashers
          </h2>
          <p className="text-[#A1A1AA] text-lg">Find your role and help us build the next generation of software.</p>
        </div>

        {/* Dashboard-like Container mimicking the heavy UI element at the bottom of screenshot */}
        <div className="w-full bg-[#0D041A] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden relative">
          
          {/* Mac-style Window Header */}
          <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          <div className="p-2 md:p-6 flex flex-col gap-2">
            {openPositions.map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group cursor-pointer">
                
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF2E2B] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#A1A1AA]">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4"/> {job.type}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{job.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{job.experience}</span>
                  </div>
                </div>

                <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                  Apply Now
                </button>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}