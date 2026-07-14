import React from 'react';
import BlurText from '../Animations/BlurText'; 

const jobRoles = [
  { title: "Senior Full Stack Engineer", type: "Full-time", location: "Remote / Bhopal" },
  { title: "Web3 Smart Contract Developer", type: "Full-time", location: "Remote" },
  { title: "Lead UI/UX Designer", type: "Full-time", location: "Bhopal" }
];

export function Careers() {
  return (
    <section id="careers" className="relative w-full py-24 bg-transparent z-10">
      <div className="mx-auto max-w-[1350px] px-6 md:px-12 lg:px-20">
        
        {/* Title area */}
        <div className="max-w-3xl mb-16">
          <BlurText 
            text="Build the future with us." 
            delay={50}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          />
        </div>

        {/* Job List */}
        <div className="flex flex-col gap-4">
          {jobRoles.map((role, i) => (
            <div 
              key={i} 

              className="group flex flex-col md:flex-row items-center justify-between p-8 
                         bg-white/[0.03] backdrop-blur-3xl border border-white/10 
                         rounded-2xl hover:bg-white/[0.08] hover:border-[#FF2E2B]/50 
                         transition-all duration-300"
            >
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#FF2E2B] transition-colors">
                  {role.title}
                </h3>
                <p className="text-gray-400 font-medium">
                  {role.type} • {role.location}
                </p>
              </div>
              
              <button className="w-full md:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-[#FF2E2B] hover:text-white transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}