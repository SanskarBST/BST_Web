import React from 'react';
import BlurText from '../Animations/BlurText';
import FlowingMenu from '../Animations/FlowingMenu';

const expertiseItems = [
  { 
    id: '01', 
    title: 'AI & Machine Learning', 
    desc: 'Integrating intelligent algorithms and LLMs to automate complex workflows and unlock data-driven insights.', 
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'
    ]
  },
  { 
    id: '02', 
    title: 'Enterprise Architecture', 
    desc: 'Building resilient, cloud-native infrastructures designed for infinite scale and zero downtime.', 
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
    ]
  },
  { 
    id: '03', 
    title: 'Web3 & Blockchain', 
    desc: 'Developing secure smart contracts, dApps, and decentralized ecosystems for the new web.', 
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    ]
  },
  { 
    id: '04', 
    title: 'Custom SaaS Products', 
    desc: 'End-to-end product engineering from napkin sketch to market-dominating, high-performance platforms.', 
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    ]
  }
];

export function OurExpertise() {
  return (
    <section id="services" className="relative w-full py-24 bg-transparent z-10 pointer-events-auto">
      <div className="mx-auto max-w-[1350px] px-6 md:px-12 lg:px-20 mb-16">
        
        <h4 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-6">
          Our Expertise
        </h4>
        
        {/* SIZE FIXED: text-3xl md:text-4xl lg:text-5xl */}
        <BlurText 
          text="We engineer solutions for the toughest technical challenges." 
          delay={50}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
        />
        
      </div>
      
      <div className="w-full max-w-[1350px] mx-auto border-t border-white/10">
        <FlowingMenu 
          items={expertiseItems} 
          speed={15} 
          marqueeBgColor="#000000" 
          marqueeTextColor="white" 
        />
      </div>
    </section>
  );
}