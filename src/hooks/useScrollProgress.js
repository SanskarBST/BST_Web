import React from "react";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollData, SCROLL_TIMELINE_CONFIG } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress(trigger) {
  useEffect(() => {
    const tween = gsap.to(scrollData, {
      progress: 1,
      ease: SCROLL_TIMELINE_CONFIG.ease,
      scrollTrigger: {
        trigger,
        start: SCROLL_TIMELINE_CONFIG.start,
        end: SCROLL_TIMELINE_CONFIG.end,
        scrub: SCROLL_TIMELINE_CONFIG.scrub,
      },
    });

    return () => {
      tween.kill();
      scrollData.progress = 0;
    };
  }, [trigger]);
}
