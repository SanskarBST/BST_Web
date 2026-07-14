import React from "react";
import { useRef } from 'react';
import { HeroCanvas } from './HeroCanvas';
import { HeroText } from './HeroText';
import { ScrollTimeline } from './Effects/ScrollTimeline';

export function Hero() {
  const scopeRef = useRef(null);

  return (
    <>
      <HeroCanvas />
      <div ref={scopeRef} className="relative z-10 pointer-events-none">
        <ScrollTimeline scopeRef={scopeRef} />
        <div id="animation-trigger" className="h-[300vh] w-full">
          <section className="sticky top-0 flex h-screen flex-col justify-center px-6 pointer-events-auto md:px-12">
            <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
              <HeroText />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
