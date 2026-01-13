'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroTitle = () => {
  const titles = [
    'AI Automation Engineer',
    'AI Engineer',
    'Software Developer',
    'Web Developer',
    'Python Developer'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % titles.length;
        console.log('Changing title to:', titles[newIndex]); // Debug log
        return newIndex;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Rajpal Singh Rathore</h1>
      <div className="text-xl md:text-2xl text-foreground h-8 md:h-10 relative">
        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[currentIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-foreground absolute inset-0"
          >
            {titles[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
