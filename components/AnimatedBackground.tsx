'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background animate-gradient-shift" />
      
      {/* Grid Pattern - More Visible */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />

      {/* Large Glowing Orbs - More Visible */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-40 bg-gradient-to-r from-primary/50 to-purple-500/50"
        animate={{
          x: mousePosition.x / 15,
          y: mousePosition.y / 15,
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          x: { type: 'spring', stiffness: 50 },
          y: { type: 'spring', stiffness: 50 },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
        style={{
          top: '5%',
          left: '5%',
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-40 bg-gradient-to-l from-cyan-500/50 to-primary/50"
        animate={{
          x: -mousePosition.x / 25,
          y: -mousePosition.y / 25,
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          x: { type: 'spring', stiffness: 50 },
          y: { type: 'spring', stiffness: 50 },
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
        }}
        style={{
          bottom: '5%',
          right: '5%',
        }}
      />

      {/* Middle floating orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-pink-500/40 to-primary/40"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '40%',
          left: '40%',
        }}
      />

      {/* Animated Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px w-64 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: 0,
          }}
        />
      ))}

      {/* Floating Particles - More Visible */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full shadow-lg shadow-primary/50"
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 animate-pulse-slow" />
    </div>
  );
}
