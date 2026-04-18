// components/sections/Hero.tsx
import React from 'react';
import HeroTitle from '@/components/HeroTitle';
import Terminal from '@/components/Terminal';
import SkillsGrid from '@/components/SkillsGrid';
import { SmokeBackground } from '@/components/ui/spooky-smoke-animation';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Smoke Animation Background */}
      <div className="hero-bg-parallax absolute inset-0 z-0">
        <SmokeBackground smokeColor="#DC2626" />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-[5]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 pt-28 sm:pt-32">
        <div className="max-w-4xl w-full mx-auto">
          <HeroTitle />
          <Terminal />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
