// components/SkillsGrid.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaGithub, FaRobot, FaCloud, FaCogs, FaDocker } from 'react-icons/fa';

const SkillsGrid = () => {
  const skills = useMemo(() => [
    { icon: <FaRobot />, name: 'Agentic AI' },
    { icon: <FaCogs />, name: 'n8n' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaGithub />, name: 'Git' },
    { icon: <FaRobot />, name: 'Gen AI' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaCloud />, name: 'Cloud' },
    { icon: <FaDatabase />, name: 'SQL' },
  ], []);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 -mx-2 sm:mx-0"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 } 
          }}
          className={`bg-black/20 text-card-foreground rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer border border-white/10 backdrop-blur-sm transition-all ${
            index % 2 === 0 
              ? 'hover:border-red-light/60' 
              : 'hover:border-black-light/60'
          }`}
        >
          {/* Animated background on hover */}
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              index % 2 === 0 
                ? 'bg-gradient-to-br from-red-500/20 to-transparent' 
                : 'bg-gradient-to-br from-black-500/20 to-transparent'
            }`}
          />
          
          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
              index % 2 === 0 
                ? 'bg-red-500/20' 
                : 'bg-black-500/20'
            }`}
          />
          
          <div className={`text-2xl sm:text-3xl mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300 ${
            index % 2 === 0 
              ? 'text-red-light' 
              : 'text-black-light'
          }`}>{skill.icon}</div>
          <p className="text-xs sm:text-sm font-medium relative z-10">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
