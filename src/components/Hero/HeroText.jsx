import React from "react";

export function HeroText() {
  return (
    <div className="max-w-2xl">
      <div className="mb-2 overflow-hidden">
        <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
          We don't
        </h1>
      </div>

      <div className="mb-2 overflow-hidden">
        <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
          just build apps.
        </h1>
      </div>

      <div className="mb-6 overflow-hidden">
        <h1 className="hero-text bg-gradient-to-r from-[#FF5A5A] via-[#FF2E2B] to-[#C50000] bg-clip-text text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-transparent">
          We smash expectations.
        </h1>
      </div>

      <p className="hero-text mt-4 max-w-lg pr-8 text-base leading-relaxed text-gray-400">
        Brandsmashers is a full-throttle product studio. From napkin sketches to
        market-dominating tech, we engineer digital products for startups and
        enterprises who refuse to blend in.
      </p>
    </div>
  );
}