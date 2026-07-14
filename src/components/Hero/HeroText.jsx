import React from "react";

export function HeroText() {
  return (
    <div className="max-w-2xl">
      <div className="mb-2 overflow-hidden">
        {/* Size further reduced: text-4xl md:text-5xl lg:text-6xl */}
        <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
          Unlock
        </h1>
      </div>
      <div className="mb-2 overflow-hidden">
        <h1 className="hero-text bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-transparent">
          collective
        </h1>
      </div>
      <div className="mb-6 overflow-hidden">
        <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
          wisdom.
        </h1>
      </div>
      
      {/* Paragraph size reduced to text-base and margin top adjusted */}
      <p className="hero-text mt-4 max-w-lg pr-8 text-base leading-relaxed text-gray-400">
        Plug into your team's shared brainpower. Ask data to instantly find anything
        or anyone from any workplace system.
      </p>
    </div>
  );
}