import React from "react";
import { useEffect } from 'react';
import gsap from 'gsap';
import { HERO_TEXT_ANIMATION } from '../../../utils/constants';
import { useScrollProgress } from '../../../hooks/useScrollProgress';

export function ScrollTimeline({ scopeRef, trigger = '#animation-trigger' }) {
  useScrollProgress(trigger);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.hero-text', HERO_TEXT_ANIMATION.from, HERO_TEXT_ANIMATION.to);
    }, scopeRef);

    return () => {
      context.revert();
    };
  }, [scopeRef]);

  return null;
}
