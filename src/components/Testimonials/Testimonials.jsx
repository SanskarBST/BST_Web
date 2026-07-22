import React from 'react';

// Sample Data - Aap isko apne actual reviews se replace kar lena
const row1 = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "CTO at InnovateTech",
    text: "The AI-driven analytics have revolutionized our product development cycle. Insights are now more accurate and faster than ever.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Marketing Director",
    text: "Implementing this customer prediction model has drastically improved our targeting strategy. Seeing a 50% increase in conversion rates!",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Founder at StartupGrid",
    text: "As a startup, we need to move fast. This automated coding assistant helps us do just that. Our development speed has doubled.",
    image: "https://i.pravatar.cc/150?img=60"
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Product Manager",
    text: "The AI-driven voice synthesis has made creating global products a breeze. Localization is now seamless and efficient.",
    image: "https://i.pravatar.cc/150?img=32"
  }
];

const row2 = [
  {
    id: 5,
    name: "Omar Farooq",
    role: "Founder at Startup Hub",
    text: "These insights into startup ecosystems have been invaluable for our growth strategies. Empowering startups with data-driven decisions.",
    image: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "CMO at Fashion Forward",
    text: "The market analysis AI has transformed how we approach fashion trends. Our campaigns are now highly data-driven.",
    image: "https://i.pravatar.cc/150?img=41"
  },
  {
    id: 7,
    name: "Tom Chen",
    role: "Director of IT",
    text: "Implementing this in our patient care systems has improved patient outcomes significantly. A milestone in medical tech.",
    image: "https://i.pravatar.cc/150?img=68"
  },
  {
    id: 8,
    name: "Sofia Patel",
    role: "CEO at EduTech",
    text: "AI-driven personalized learning plans have doubled student performance metrics. Education tailored to every learner's needs.",
    image: "https://i.pravatar.cc/150?img=45"
  }
];

// Ye function ek single testimonial card banata hai
const TestimonialCard = ({ data }) => (
  // 🔥 FIX: Card background bg-[#0a0a0a] ko bg-[#0D041A] aur border ko border-[#160829] me convert kar diya
  <div className="relative overflow-hidden w-[350px] md:w-[400px] shrink-0 p-6 md:p-8 rounded-2xl bg-[#0D041A] border border-[#160829] hover:border-[#FF2E2B]/50 transition-all duration-300 group cursor-default">
    
    <div 
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
      style={{ 
        background: 'radial-gradient(circle at bottom right, rgba(255, 46, 43, 0.15) 0%, transparent 70%)' 
      }}
    ></div>

    {/* Content Container */}
    <div className="relative z-10 flex flex-col h-full">
      <p className="text-[#A1A1AA] text-[14px] md:text-[15px] leading-relaxed mb-8 group-hover:text-gray-200 transition-colors">
        "{data.text}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        <div>
          <h4 className="text-white font-bold text-[15px] group-hover:text-[#FF2E2B] transition-colors">{data.name}</h4>
          <p className="text-[#A1A1AA] text-[12px]">{data.role}</p>
        </div>
      </div>
    </div>

  </div>
);

export function Testimonials() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(calc(-50% - 12px)); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          .pause-on-hover:hover .animate-scroll-left,
          .pause-on-hover:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="w-full flex flex-col items-center text-center px-6 mb-16">
        <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] text-[#FF2E2B] uppercase">
          Client Success
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          What they say about us
        </h2>
      </div>

      {/* Main Container for Marquees with hover-pause functionality */}
      <div className="flex flex-col gap-6 pause-on-hover relative">
        
        {/* 🔥 FIX: Left and Right Fade Masks pure 'black' se hatakar '#0D041A' kar diye taaki edges bg me blend ho jaye */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0D041A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0D041A] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max gap-6 animate-scroll-left">
          {[...row1, ...row1].map((testimonial, idx) => (
            <TestimonialCard key={`row1-${idx}`} data={testimonial} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max gap-6 animate-scroll-right">
          {[...row2, ...row2].map((testimonial, idx) => (
            <TestimonialCard key={`row2-${idx}`} data={testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
}