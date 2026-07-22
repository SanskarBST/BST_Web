import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// =========================================
// TEAM CARD COMPONENT (Hover Image Flipbook)
// =========================================
const TeamCard = ({ name, role, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 400); 
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div 
      className="relative flex flex-col items-center group cursor-pointer w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-4 relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(255,46,43,0.15)]">
        <img 
          src={images[currentImageIndex]} 
          alt={name} 
          className="w-full h-full object-cover transition-opacity duration-300 pointer-events-none" 
        />
        <div className="absolute top-4 right-4 w-8 h-8 bg-[#CCFF00] rounded-xl flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          +
        </div>
      </div>
      <h3 className="text-xl font-bold text-white tracking-wide text-center" style={{ fontFamily: "'Clash Display', sans-serif" }}>
        {name}
      </h3>
      <p className="text-[#A1A1AA] text-sm mt-1 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
        {role}
      </p>
    </div>
  );
};

// =========================================
// MAIN PAGE COMPONENT
// =========================================
export function AboutUs() {
  const containerRef = useRef(null);

  // Scroll Tracking for the continuous line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Animation Variants
  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  // Extended Team Data
  const teamData = [
    { name: "Sanskar Namdeo", role: "Founder & AI Engineer", images: ["https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80", "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80", "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80"] },
    { name: "Natasia", role: "Content Writer", images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"] },
    { name: "Joe", role: "Web Developer", images: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=600&q=80", "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&q=80"] },
    { name: "Ruby", role: "Design Intern", images: ["https://images.unsplash.com/photo-1614289371518-722f2615943d?w=600&q=80", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"] },
    { name: "Chris", role: "Finance Head", images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"] },
    { name: "Sarah", role: "UI/UX Designer", images: ["https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", "https://images.unsplash.com/photo-1554727242-741c14fa561c?w=600&q=80", "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"] },
    { name: "David", role: "Backend Architect", images: ["https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80"] },
    { name: "Emily", role: "Marketing Lead", images: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80", "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80", "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80"] },
  ];

  const duplicatedTeam = [...teamData, ...teamData];

  return (
    <div ref={containerRef} className="relative bg-[#0D041A] text-white w-full overflow-hidden font-sans pt-24 selection:bg-[#FF2E2B]/30 pb-20">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform; 
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Floating Orbs */}
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-[5%] left-[10%] w-40 h-40 bg-[#FF2E2B] rounded-full blur-[100px] opacity-30 z-0" />
      <motion.div animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute top-[30%] right-[5%] w-60 h-60 bg-[#FF5A5A] rounded-full blur-[120px] opacity-20 z-0" />
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-[60%] left-[15%] w-32 h-32 bg-[#FF2E2B] rounded-full blur-[80px] opacity-20 z-0" />

      {/* THE PAINTED UNIVERSAL LINE */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-center">
        <svg viewBox="0 0 1000 4000" preserveAspectRatio="none" className="w-full h-full opacity-60">
          <motion.path
            d="M 100,200 C 900,500 800,1000 500,1500 C 200,2000 100,2500 500,3000 C 900,3500 800,3800 500,4000"
            fill="none"
            stroke="#FF2E2B"
            strokeWidth="12"  
            strokeLinecap="round" 
            vectorEffect="non-scaling-stroke"
            style={{ pathLength, filter: 'drop-shadow(0px 0px 15px rgba(255,46,43,0.5))' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* =========================================
            DYNAMIC HERO SECTION 
        ========================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pt-32 pb-40 min-h-[85vh]">
          {/* Text Side */}
          <motion.div initial="hidden" animate="visible" variants={fadeRight} className="lg:w-1/2 relative z-10">
            <h4 className="text-[#FF2E2B] text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF2E2B] animate-pulse"></span> About Us
            </h4>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Building Technology.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E2B] to-[#FF8A8A]">
                Empowering Businesses.
              </span>
            </h1>
            <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              We're not another dev shop clocking hours. We're the team businesses call when their idea needs to become real, fast, solid, and built to scale.
            </p>
          </motion.div>

          {/* Animated Image Grid Side */}
          <motion.div initial="hidden" animate="visible" variants={fadeLeft} className="lg:w-1/2 relative h-[500px] w-full mt-12 lg:mt-0">
            <motion.div 
              animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[70%] h-[80%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(255,46,43,0.15)] z-20"
            >
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaborating" className="w-full h-full object-cover scale-105" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-30"
            >
              <div className="absolute inset-0 bg-[#FF2E2B]/10 mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Tech workspace" className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="absolute top-[20%] -left-10 w-24 h-24 bg-[#CCFF00] rounded-full blur-[60px] opacity-30 z-10"></div>
          </motion.div>
        </div>

        {/* =========================================
            NODE 1: MISSION 
        ========================================= */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full mb-60 gap-16 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeRight} className="w-full lg:w-1/2 relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative z-20 bg-black">
              <div className="absolute inset-0 bg-[#0D041A]/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Our Mission" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="absolute -inset-4 bg-[#FF2E2B]/20 blur-2xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeLeft} className="w-full lg:w-1/2 max-w-md relative lg:pl-12">
            <div className="hidden lg:flex absolute -left-6 top-2 w-10 h-10 border-2 border-[#FF2E2B] rotate-45 items-center justify-center bg-[#0D041A] z-20 shadow-[0_0_15px_rgba(255,46,43,0.3)]">
              <span className="-rotate-45 text-[#FF2E2B] font-bold">1</span>
            </div>
            <h4 className="text-[#FF2E2B] text-xs font-bold uppercase tracking-widest mb-2">Our Core</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>Mission</h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              Great ideas die waiting for the right team. We exist to close that gap-fast, honest, and without the staffing chaos most companies deal with.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            NODE 2: VISION 
        ========================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-60 gap-16 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeRight} className="w-full lg:w-1/2 max-w-md relative z-20">
            <div className="hidden lg:flex absolute -left-12 top-2 w-10 h-10 border-2 border-[#FF2E2B] rotate-45 items-center justify-center bg-[#0D041A] z-20 shadow-[0_0_15px_rgba(255,46,43,0.3)]">
              <span className="-rotate-45 text-[#FF2E2B] font-bold">2</span>
            </div>
            <h4 className="text-[#FF2E2B] text-xs font-bold uppercase tracking-widest mb-2">The Future</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>Vision</h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              To build the most trusted engineering and AI workforce in the world one where startups and enterprises get the exact same team, the exact same standard, and zero excuses in between.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeLeft} className="w-full lg:w-1/2 relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative z-20 bg-black">
               <div className="absolute inset-0 bg-[#0D041A]/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="Our Vision" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="absolute -inset-4 bg-[#FF2E2B]/20 blur-2xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>
        </div>

        {/* =========================================
            NODE 3: STORY 
        ========================================= */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full mb-60 gap-16 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeRight} className="w-full lg:w-1/2 relative group">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative z-20 bg-black shadow-lg">
              <div className="absolute inset-0 bg-[#0D041A]/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Our Story" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="absolute -inset-4 bg-[#FF2E2B]/20 blur-2xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeLeft} className="w-full lg:w-1/2 relative lg:pl-12">
            <div className="hidden lg:flex absolute -left-6 top-2 w-10 h-10 border-2 border-[#FF2E2B] rotate-45 items-center justify-center bg-[#0D041A] z-20 shadow-[0_0_15px_rgba(255,46,43,0.3)]">
              <span className="-rotate-45 text-[#FF2E2B] font-bold">3</span>
            </div>
            <h4 className="text-[#FF2E2B] text-xs font-bold uppercase tracking-widest mb-2">Who We Are</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>Our Story</h2>
            
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                Started with code no shortcuts, no backup plan, just work that had to ship. When AI stopped being hype and became infrastructure, we rebuilt around it early, hired people who got it before it was a buzzword, and dropped the idea that great work needs an office.
              </p>
              <p>
                Startups shipping v1. Enterprises scaling globally. Same team, same bar, no exceptions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          NODE 4: THE FULL-WIDTH INFINITE SCROLL MARQUEE
      ========================================= */}
      <div className="w-full relative mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeUp} className="text-center mb-16 relative z-10 px-6">
          <h4 className="text-[#A1A1AA] text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span> Our Team
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Multiple personalities,<br/>
            <span className="text-[#FF2E2B]">No egos.</span>
          </h2>
        </motion.div>

        <div className="w-full overflow-hidden relative z-10 py-10 marquee-container">
          <div className="flex w-max animate-marquee">
            {duplicatedTeam.map((member, index) => (
              <div key={index} className="w-[280px] sm:w-[320px] shrink-0 px-4">
                <TeamCard name={member.name} role={member.role} images={member.images} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          MINIMAL FOOTER CTA
      ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 pb-20 mt-32 relative z-20"
      >
        <div className="bg-white/5 border border-[#FF2E2B]/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-[0_10px_40px_rgba(255,46,43,0.15)] backdrop-blur-md">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2E2B] opacity-40 rounded-full blur-[90px] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF2E2B] opacity-20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

          <div className="max-w-xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Come make some <span className="text-[#FF2E2B] drop-shadow-[0_0_15px_rgba(255,46,43,0.5)]">waves.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
              If building a better sounding tech world sounds like your kind of thing, we want you in on the conversation.
            </p>
            <a href="#contact" className="inline-block text-white border-b-2 border-[#FF2E2B] pb-1 text-sm font-bold tracking-widest uppercase hover:text-[#FF2E2B] hover:shadow-[0_4px_15px_rgba(255,46,43,0.4)] transition-all">
              Join the discussion
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}