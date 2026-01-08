// components/ProjectDetailModal.tsx
"use client";
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { FaTimes } from 'react-icons/fa';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => {
    if (project) {
      onClose();
    }
  });

  if (!project || !project.details) return null;

  const Icon = project.icon;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card text-card-foreground rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-primary/20 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon className="text-4xl text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Project Overview
                </h3>
                <p className="text-foreground leading-relaxed">{project.details.overview}</p>
              </motion.section>

              {/* Problem Statement */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-muted/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Problem Statement
                </h3>
                <p className="text-foreground leading-relaxed">{project.details.problem}</p>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Solution
                </h3>
                <p className="text-foreground leading-relaxed">{project.details.solution}</p>
              </motion.section>

              {/* Tech Stack */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-primary/5 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Tech Stack
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.details.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-2 bg-background p-3 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
