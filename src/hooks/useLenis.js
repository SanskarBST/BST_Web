import React from "react";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { lenisEasing } from '../utils/easing';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: lenisEasing,
      smoothWheel: true,
    });

    let rafId = 0;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    rafId = requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);
}
