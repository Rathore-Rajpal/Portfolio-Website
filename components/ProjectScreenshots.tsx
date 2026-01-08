'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectScreenshotsProps {
  screenshots: string[];
  projectName: string;
}

export default function ProjectScreenshots({ screenshots, projectName }: ProjectScreenshotsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Main Slideshow */}
      <div className="relative bg-card rounded-xl overflow-hidden border border-primary/20">
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${projectName} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-colors z-10"
              aria-label="Previous screenshot"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-colors z-10"
              aria-label="Next screenshot"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {screenshots.length > 1 && (
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-primary scale-105'
                  : 'border-primary/20 hover:border-primary/50 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={screenshot}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
