import React, { useState, useRef, useCallback, useEffect } from 'react';
import BlurText from '../Animations/BlurText'; 
import '../Animations/LineSidebar.css';

const expertiseData = [
  { id: '01', title: 'AI/ML Software Development', description: 'Build intelligent software powered by artificial intelligence, machine learning, and generative AI to automate processes, enhance customer experiences, and accelerate business growth.', subServices: ['Generative AI Development', 'AI Agent Development', 'Large Language Model (LLM) Integration', 'Machine Learning Solutions', 'Computer Vision Solutions', 'Natural Language Processing (NLP)', 'Predictive Analytics', 'AI Automation Solutions'] },
  { id: '02', title: 'Agentic AI Software Development', description: 'Develop autonomous AI agents capable of reasoning, planning, and executing complex business workflows with minimal human intervention.', subServices: ['Autonomous AI Agents', 'Multi-Agent Systems', 'AI Workflow Automation', 'AI Copilot Development', 'RAG (Retrieval-Augmented Generation)', 'AI Process Automation', 'AI Chatbots', 'Enterprise AI Assistants'] },
  { id: '03', title: 'Data Engineering', description: 'Design scalable data platforms that collect, process, and transform enterprise data into actionable insights for smarter decision-making.', subServices: ['Data Engineering', 'ETL / ELT Pipelines', 'Data Warehousing', 'Data Lakes', 'BI Dashboards', 'Data Visualization', 'Data Governance', 'Real-Time Analytics'] },
  { id: '04', title: 'Mobile, iOS, Android & Web', description: 'Deliver modern web and mobile applications that are scalable, secure, and optimized for exceptional user experiences across all platforms.', subServices: ['Web Application Development', 'Custom Website Development', 'Mobile App Development', 'Android Development', 'iOS Development', 'Cross-Platform Apps', 'Progressive Web Apps', 'API Development'] },
  { id: '05', title: 'Quality Assurance (QA)', description: 'Ensure software reliability and performance through comprehensive quality assurance, automated testing, and continuous validation processes.', subServices: ['Manual Testing', 'Automation Testing', 'API Testing', 'Performance Testing', 'Security Testing', 'Regression Testing', 'Functional Testing', 'Test Strategy & Consulting'] },
  { id: '06', title: 'Custom Software & Product', description: 'Build tailored software products that solve complex business challenges, from early-stage MVPs to enterprise-grade digital platforms.', subServices: ['Custom Software Development', 'SaaS Product Development', 'Enterprise Applications', 'MVP Development', 'Product Engineering', 'Software Modernization', 'API & System Integration', 'Maintenance & Support'] }
];

export function OurExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = expertiseData[activeIndex];

  return (
    <section id="services" className="relative w-full py-24 bg-transparent z-10 pointer-events-auto overflow-hidden">
      
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.4s ease-out forwards;
          }
        `}
      </style>

      {/* HEADER */}
      <div className="w-full flex flex-col items-center text-center px-6 md:px-12 lg:px-20 mb-20 mx-auto">
        <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] text-[#FF2E2B] uppercase">
          Our Expertise
        </span>
        <BlurText 
          text="Our Services Playbook" 
          delay={50}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mx-auto flex justify-center text-center"
        />
      </div>
      
      {/* ALIGNED SPLIT LAYOUT */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-20 items-start">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] flex-shrink-0 pt-1">
          <LineSidebar 
            items={expertiseData.map(item => item.title)} 
            defaultActive={0} 
            onItemClick={(index) => setActiveIndex(index)}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[60%] flex flex-col min-h-[450px]">
          <div key={activeIndex} className="animate-fade-up">
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight leading-none mt-0">
              {activeService.title}
            </h3>
            
            {/* DESCRIPTION & PERMANENT RED 'EXPLORE MORE' LINK */}
            <div className="mb-10 flex flex-col items-start">
              <p className="text-[15px] md:text-[16px] text-gray-400 leading-relaxed mb-4 max-w-2xl">
                {activeService.description}
              </p>
              
              <a 
                href="#" 
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#FF2E2B] hover:opacity-80 transition-all duration-300"
              >
                Explore More
                {/* External Diagonal Arrow SVG */}
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H10M17 7V14" />
                </svg>
              </a>
            </div>

            {/* SUB-SERVICES GRID - Transparent Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {activeService.subServices.map((subService, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-3 bg-transparent border border-white/5 rounded-xl p-4 hover:border-[#FF2E2B]/40 hover:bg-gradient-to-r hover:from-[#FF2E2B]/10 hover:to-transparent transition-all duration-300 cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#FF2E2B] group-hover:shadow-[0_0_10px_rgba(255,46,43,0.8)] transition-all duration-300 shrink-0"></div>
                  <span className="text-[13px] md:text-[14px] text-gray-300 group-hover:text-white transition-colors duration-300 font-medium tracking-wide">
                    {subService}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// LineSidebar Component
// ==========================================
const FALLOFF_CURVES = {
  linear: p => p,
  smooth: p => p * p * (3 - 2 * p),
  sharp: p => p * p * p
};

export const LineSidebar = ({
  items,
  showIndex = true,
  showMarker = true,
  proximityRadius = 200, 
  falloff = 'smooth',
  smoothing = 120,       
  defaultActive = 0,     
  onItemClick,
}) => {
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const activeRef = useRef(defaultActive);
  const smoothingRef = useRef(smoothing);
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  activeRef.current = activeIndex;
  smoothingRef.current = smoothing;

  const runFrame = useCallback(now => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = Math.max(smoothingRef.current, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;
    const itemsList = itemRefs.current;
    
    for (let i = 0; i < itemsList.length; i++) {
      const el = itemsList[i];
      if (!el) continue;
      
      const target = Math.max(targetsRef.current[i] || 0, activeRef.current === i ? 1 : 0);
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      
      currentRef.current[i] = value;
      el.style.setProperty('--effect', value.toFixed(4));
      
      if (!settled) moving = true;
    }

    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) return;
    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback(
    e => {
      const pointerY = e.clientY; 
      const ease = FALLOFF_CURVES[falloff] ?? FALLOFF_CURVES.linear;
      const itemsList = itemRefs.current;
      
      for (let i = 0; i < itemsList.length; i++) {
        const el = itemsList[i];
        if (!el) continue;
        
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(pointerY - center);
        
        targetsRef.current[i] = ease(Math.max(0, 1 - distance / proximityRadius));
      }
      startLoop();
    },
    [falloff, proximityRadius, startLoop]
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  const handleClick = useCallback(
    (index, label) => {
      setActiveIndex(index);
      onItemClick?.(index, label);
    },
    [onItemClick]
  );

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  return (
    <nav className="line-sidebar w-full h-full">
      <ul 
        ref={listRef} 
        className="line-sidebar__list" 
        onPointerMove={handlePointerMove} 
        onPointerLeave={handlePointerLeave}
      >
        {items.map((label, index) => (
          <li
            key={`${label}-${index}`}
            ref={el => { itemRefs.current[index] = el; }}
            className="line-sidebar__item"
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={() => handleClick(index, label)}
          >
            {showMarker && <span className="line-sidebar__marker" aria-hidden="true" />}
            <span className="line-sidebar__label">
              {showIndex && <span className="line-sidebar__index">{String(index + 1).padStart(2, '0')}</span>}
              <span className="line-sidebar__text">{label}</span>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};