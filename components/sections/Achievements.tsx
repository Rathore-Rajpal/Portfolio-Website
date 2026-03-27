// components/sections/Achievements.tsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { FaTrophy } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Achievements: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollSection();
  const router = useRouter();

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-dark to-pink-light bg-clip-text text-transparent flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <FaTrophy className="mr-2 text-pink-light" /> Achievements
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const isEvenIndex = index % 2 === 0;
          return (
            <motion.div
              key={achievement.id}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => router.push(`/achievement?id=${achievement.id}`)}
              className="relative p-6 rounded-xl bg-card text-card-foreground transition-all duration-300 cursor-pointer h-[280px] flex flex-col"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-xl border-2 ${isEvenIndex ? 'border-pink-600' : 'border-blue-600'}`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? [1, 1.02, 1] : 1
                }}
                transition={{ 
                  duration: 0.2,
                  ease: "easeInOut"
                }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${isEvenIndex ? 'bg-pink-900/30' : 'bg-blue-900/30'}`}>
                  <Icon className={`text-3xl ${isEvenIndex ? 'text-pink-light' : 'text-blue-light'}`} />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${isEvenIndex ? 'bg-pink-900/40 text-pink-200' : 'bg-blue-900/40 text-blue-200'}`}>
                  {achievement.category}
                </span>
              </div>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${isEvenIndex ? 'from-pink-light to-pink-medium' : 'from-blue-light to-blue-medium'} bg-clip-text text-transparent mb-2 flex-shrink-0`}>{achievement.title}</h3>
              <p className="text-foreground mb-3 flex-grow line-clamp-3">{achievement.description}</p>
              <div className={`flex items-center justify-between pt-3 border-t ${isEvenIndex ? 'border-pink-500/20' : 'border-blue-500/20'}`}>
                <span className="text-sm text-muted-foreground">{achievement.date}</span>
                <span className={`text-sm font-semibold ${isEvenIndex ? 'text-pink-light' : 'text-blue-light'}`}>View Details →</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
