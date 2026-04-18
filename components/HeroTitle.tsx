'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '@/components/ui/reveal-text';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const TITLES = [
  'AI Automation Engineer',
  'AI Engineer',
  'Software Developer',
  'Web Developer',
  'Python Developer'
];

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <div className="mb-4" aria-label="Rajpal Singh Rathore">
        <RevealText
          text="Rajpal Singh Rathore"
          textColor="text-white"
          overlayColor="text-white"
          fontSize="text-4xl sm:text-5xl md:text-6xl"
          letterDelay={0.05}
          overlayDelay={0.035}
          overlayDuration={0.35}
          springDuration={550}
        />
      </div>
      <div className="relative h-10 md:h-12 mt-1">
        <GooeyText
          texts={TITLES}
          morphTime={1}
          cooldownTime={0.25}
          className="h-full w-full font-semibold"
          textClassName="text-xl md:text-2xl text-red-medium"
        />
      </div>
    </motion.div>
  );
};

export default HeroTitle;
