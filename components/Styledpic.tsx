import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StyledPic: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInteraction = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Reset after 0.5 second
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      <motion.div 
        className="wrapper relative w-full h-full bg-transparent overflow-hidden"
        animate={isAnimating ? {
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={isAnimating ? { 
            y: [0, -10, 0],
            opacity: [1, 0.8, 1],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/pics/profile-removebg.png"
            alt="Profile"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StyledPic;
