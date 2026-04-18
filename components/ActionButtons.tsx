// components/sections/ActionButtons.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaFileAlt } from 'react-icons/fa';

const ActionButtons = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="flex justify-center space-x-4"
  >
    <Link href="#about">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-red-dark to-red-medium text-white px-6 py-3 rounded-full font-semibold transition duration-300 flex items-center hover:from-red-darker hover:to-red-dark shadow-lg hover:shadow-red-600/50"
      >
        <FaCode className="mr-2" /> About Me
      </motion.button>
    </Link>
    <Link 
      href="/pdf/resume.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-black-dark to-black-medium text-white px-6 py-3 rounded-full font-semibold transition duration-300 flex items-center hover:from-black-darker hover:to-black-dark shadow-lg hover:shadow-black-700/50"
      >
        <FaFileAlt className="mr-2" /> Resume
      </motion.button>
    </Link>
  </motion.div>
);

export default ActionButtons;
