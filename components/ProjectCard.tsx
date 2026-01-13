// components/ProjectCard.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { useRouter } from 'next/navigation';

interface ProjectCardProps extends Project {
  isHovered: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, icon: Icon, technologies, skills, isHovered }) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isClicked) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isClicked]);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClicked(true);
    router.push(`/project?id=${id}`);
  };

  return (
    <motion.div
      className="relative p-6 rounded-xl bg-card text-card-foreground transition-all duration-300 cursor-pointer h-[350px] flex flex-col overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsClicked(false)}
      onClick={handleCardClick}
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent)',
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered || isClicked ? 1 : 0,
          scale: isHovered || isClicked ? [1, 1.02, 1] : 1
        }}
        transition={{ 
          duration: isHovered ? 0.2 : 0.3,
          ease: "easeInOut"
        }}
      />
      <Icon className="text-4xl mb-4 flex-shrink-0 text-primary" />
      <h3 className="text-xl font-bold text-primary mb-2 flex-shrink-0">{title}</h3>
      <p className="text-foreground mb-4 flex-grow line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 flex-shrink-0">
        {technologies.slice(0, 4).map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
            +{technologies.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
